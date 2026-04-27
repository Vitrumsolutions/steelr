#!/usr/bin/env node
/**
 * llms-panel-check.mjs — pre-commit gate for public/llms*.txt
 *
 * Architectural enforcement for the user-stated rule "do not change llms
 * without asking me". Blocks any git commit that touches public/llms.txt
 * or public/llms-full.txt unless the staged file content matches a marker
 * written by /panel-llms-approve after the user reviewed the panel findings.
 *
 * Why SHA-based and not time-based: a time-based marker (e.g. "panel ran
 * within last hour") would happily allow a freshly-edited llms file to ship
 * if a panel had run earlier on a *different* version of the file. SHA-based
 * matching forces a fresh panel run for every fresh content change.
 *
 * Usage:
 *   node scripts/checks/llms-panel-check.mjs --enforce
 *     Exits 0 if all staged llms files have matching markers, 1 otherwise.
 *     Used by .git/hooks/pre-commit.
 *
 *   node scripts/checks/llms-panel-check.mjs --staged-shas
 *     Prints the staged file SHAs (one per line, "<file>\t<sha>") so
 *     /panel-llms-approve can write the marker.
 *
 *   node scripts/checks/llms-panel-check.mjs --write-marker
 *     Reads stdin for the agent verdict, writes .checks/llms-panel.json
 *     with the current staged SHAs and the verdict. Invoked only by
 *     /panel-llms-approve after user types "approve".
 */
import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");
const MARKER_PATH = join(ROOT, ".checks/llms-panel.json");
const PROTECTED = ["public/llms.txt", "public/llms-full.txt"];

/** Get the list of staged paths (relative to repo root) that match PROTECTED. */
function stagedProtectedFiles() {
  let staged = "";
  try {
    staged = execSync("git diff --cached --name-only", {
      cwd: ROOT,
      encoding: "utf8",
    });
  } catch (err) {
    // Outside a git repo or other failure — fail open, let other tools complain.
    return [];
  }
  const lines = staged.split("\n").map((s) => s.trim()).filter(Boolean);
  return lines.filter((p) => PROTECTED.includes(p));
}

/** Compute SHA-256 of the staged blob (i.e. what git WILL commit, not the working-tree file). */
function stagedSha(filePath) {
  // git hash-object reads the staged version (--cached not needed; we pipe through git show)
  // The most reliable cross-platform approach: ask git for the staged blob and hash it.
  try {
    const buf = execSync(`git show :${filePath}`, {
      cwd: ROOT,
      encoding: null, // raw bytes
    });
    return createHash("sha256").update(buf).digest("hex");
  } catch (err) {
    return null;
  }
}

function readMarker() {
  if (!existsSync(MARKER_PATH)) return null;
  try {
    return JSON.parse(readFileSync(MARKER_PATH, "utf8"));
  } catch {
    return null;
  }
}

function ensureChecksDir() {
  const dir = dirname(MARKER_PATH);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function modeEnforce() {
  const files = stagedProtectedFiles();
  if (files.length === 0) {
    // No protected files staged. Gate is irrelevant. Allow.
    return 0;
  }

  const marker = readMarker();
  if (!marker) {
    console.error("");
    console.error("BLOCKED: commit touches public/llms.txt or public/llms-full.txt");
    console.error("         but no .checks/llms-panel.json marker exists.");
    console.error("");
    console.error("To proceed:");
    console.error("  1. Run /panel-llms in Claude Code to dispatch the 4-agent panel");
    console.error("     (visibility-audit-runner, cannibalisation-auditor, research-scout,");
    console.error("     deep-reviewer) on the staged changes.");
    console.error("  2. Review the findings the panel produces.");
    console.error("  3. If the changes look right, run /panel-llms-approve to write");
    console.error("     the marker that unblocks the commit.");
    console.error("");
    console.error("Files currently staged that triggered this gate:");
    files.forEach((f) => console.error(`  ${f}`));
    console.error("");
    return 1;
  }

  // Compare each staged file's SHA against the marker.
  const mismatched = [];
  for (const file of files) {
    const sha = stagedSha(file);
    const recorded = marker.shas?.[file];
    if (!sha) {
      mismatched.push({ file, reason: "could not read staged blob" });
    } else if (!recorded) {
      mismatched.push({ file, reason: "file not present in marker" });
    } else if (sha !== recorded) {
      mismatched.push({ file, reason: "staged content differs from approved" });
    }
  }

  if (mismatched.length > 0) {
    console.error("");
    console.error("BLOCKED: marker exists but does not cover the current staged content.");
    console.error("");
    mismatched.forEach((m) => {
      console.error(`  ${m.file}: ${m.reason}`);
    });
    console.error("");
    console.error("The marker was written for a different version of these files.");
    console.error("Fresh content needs a fresh panel run.");
    console.error("");
    console.error("Run /panel-llms again, then /panel-llms-approve once findings are accepted.");
    console.error("");
    return 1;
  }

  // All staged protected files have matching marker entries.
  console.log(`llms-panel-check: PASS (${files.length} file${files.length === 1 ? "" : "s"} approved at ${marker.timestamp})`);
  return 0;
}

function modeStagedShas() {
  const files = stagedProtectedFiles();
  if (files.length === 0) {
    console.error("(no protected files staged)");
    return 0;
  }
  for (const file of files) {
    const sha = stagedSha(file);
    process.stdout.write(`${file}\t${sha}\n`);
  }
  return 0;
}

function modeWriteMarker() {
  const files = stagedProtectedFiles();
  if (files.length === 0) {
    console.error("ERROR: no protected files staged. Marker not written.");
    return 1;
  }
  const shas = {};
  for (const file of files) {
    const sha = stagedSha(file);
    if (!sha) {
      console.error(`ERROR: could not compute SHA for ${file}. Marker not written.`);
      return 1;
    }
    shas[file] = sha;
  }
  ensureChecksDir();

  // Read verdict text from stdin (allows the slash command to capture findings).
  let verdict = "";
  try {
    verdict = readFileSync(0, "utf8").trim();
  } catch {
    verdict = "(no verdict text supplied)";
  }

  const branch = execSync("git rev-parse --abbrev-ref HEAD", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  const marker = {
    timestamp: new Date().toISOString(),
    branch,
    files: Object.keys(shas),
    shas,
    verdict_excerpt: verdict.slice(0, 2000),
  };

  writeFileSync(MARKER_PATH, JSON.stringify(marker, null, 2) + "\n");
  console.log(`Marker written: ${MARKER_PATH}`);
  console.log(`Covers: ${Object.keys(shas).join(", ")}`);
  return 0;
}

const mode = process.argv[2];
let exitCode = 1;
switch (mode) {
  case "--enforce":
    exitCode = modeEnforce();
    break;
  case "--staged-shas":
    exitCode = modeStagedShas();
    break;
  case "--write-marker":
    exitCode = modeWriteMarker();
    break;
  default:
    console.error("Usage: llms-panel-check.mjs --enforce | --staged-shas | --write-marker");
    exitCode = 2;
}
process.exit(exitCode);
