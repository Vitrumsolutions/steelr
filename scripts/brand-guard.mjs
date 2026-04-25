#!/usr/bin/env node
/**
 * Brand-policy guard for SteelR content.
 *
 * Scans for two classes of violation:
 *
 * 1. Displayed SteelR-attributed prices (£\d patterns) in protected paths.
 *    Per CLAUDE.md brand policy: "No displayed prices on cost pages or
 *    Product schema with offers block. Bespoke premium positioning
 *    requires no published list price."
 *
 * 2. Brand-banned words: "affordable", "cheap", "best prices", "discount".
 *    Per CLAUDE.md: "Never use these. Brand is premium."
 *
 * Modes:
 *   node scripts/brand-guard.mjs              # scan ALL protected files
 *   node scripts/brand-guard.mjs --staged     # scan only git-staged files
 *
 * Exit codes:
 *   0 = clean (or all violations whitelisted)
 *   1 = violations found
 *
 * Opt-out (use sparingly):
 *   git commit -m "your message [allow-price]"   # bypasses the £ check
 *
 * Whitelisted patterns (legitimate, intentional):
 *   - "£1 million" / "£X million" property values (educational context)
 *   - "£XXX,XXX property valued at" (perceived-value calculations)
 *   - Hardware component ranges in cost-guide blog (industry references,
 *     not SteelR door floor)
 *   - Competitor-material price ranges in vs-* blogs (educational
 *     benchmarking against composite/timber/uPVC/fibreglass)
 *
 * Run as a git pre-commit hook via scripts/install-git-hooks.sh.
 */

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// ---------- configuration ----------

const PROTECTED_GLOBS = [
  "src/data/blog/posts/",
  "src/data/locations/",
  "src/app/areas/",
  "src/app/", // for any new top-level topic page that might inadvertently quote prices
  "public/llms.txt",
  "public/llms-full.txt",
];

// File names where any £-with-digit is a hard fail (no whitelisting)
const HIGH_RISK_FILES = [
  "src/app/areas/[slug]/page.tsx",
];

// File names where some £ patterns are legitimate (industry refs, comparisons)
const ALLOW_INDUSTRY_REFS_IN = [
  "src/data/blog/posts/how-much-do-steel-doors-cost-uk.ts",
  "src/data/blog/posts/composite-vs-steel-doors-2026-updated-comparison.ts",
  "src/data/blog/posts/steel-vs-upvc-front-doors-comparison.ts",
  "src/data/blog/posts/steel-vs-timber-entrance-doors.ts",
  "src/data/blog/posts/steel-vs-fibreglass-doors-uk-comparison.ts",
  "src/data/blog/posts/are-steel-doors-worth-it-uk.ts",
  "src/data/blog/posts/luxury-front-doors-uk-buyer-guide.ts",
  "src/data/blog/posts/spring-home-improvement-front-door-upgrade.ts",
  "public/llms-full.txt",
];

// Patterns that are NEVER allowed in any file (SteelR-attributed price floors)
const STEELR_PRICE_PATTERNS = [
  /SteelR.*?£\d/i,
  /£\d.*?SteelR/i,
  /our (steel|bespoke|entrance) doors? (typically|usually|generally) (start|range|cost) (from|between|around)/i,
  /our doors? cost from £/i,
  /starts? from approximately £\d/i,
  /starts? from around £\d/i,
  /starts? from the (mid|low|high)-thousands/i,
  /typically starts? from/i,
  /entry-level bespoke: £/i,
  /mid-range bespoke: £/i,
  /premium bespoke: £/i,
];

// Patterns that ARE allowed (industry context, property values, ratios)
const WHITELIST_PATTERNS = [
  /£\d+ ?(?:k|million|m\b|bn)/i, // £1 million, £750k
  /(?:property )?(?:value(?:d)?|priced) at £/i, // "property valued at £750,000"
  /perceived value/i,
  /average house price/i,
  /insurance premium/i,
];

// Banned words trigger ONLY when describing SteelR or its products.
// We invert the logic: catch "[SteelR/our/we/SteelR doors] is/are/offer
// [banned word]" patterns, rather than trying to whitelist every legitimate
// third-party / competitor / historical / negative usage.
const STEELR_BANNED_PATTERNS = [
  // "SteelR is affordable" / "our doors are cheap"
  /\b(?:SteelR|our|we|the SteelR brand)[^.]{0,40}\b(?:is|are|offer|provide|sell|price|priced)\b[^.]{0,40}\b(?:affordable|cheap|cheapest|discount(?:ed)?|best prices?)\b/i,
  // "affordable SteelR" / "cheap SteelR doors"
  /\b(?:affordable|cheap|cheapest|discount(?:ed)?|best prices?)\b[^.]{0,30}\b(?:SteelR|our doors?|our (?:bespoke|steel|entrance) doors?)\b/i,
  // "We offer discounts" / "our discount" / "SteelR discount"
  /\b(?:we|SteelR|our)\b[^.]{0,20}\b(?:offer|provide|give)\b[^.]{0,20}\bdiscount/i,
  /\bSteelR discount/i,
  // "best price guarantee" / "lowest price" SteelR positioning
  /\b(?:best price guarantee|lowest price|cheapest price)\b/i,
  // "discount tactics" / "discount pricing" associations \u2014 even with "no" prefix,
  // these phrases still link SteelR to discount-related framing on a SteelR-owned page.
  // Use "pressure tactics" / "negotiation tactics" instead.
  /\bdiscount (?:tactic|pricing|model|strategy|approach)/i,
];

// Legacy whitelist patterns (kept for context queries that AREN'T inverted).
// Be careful adding to this list: anything matching here bypasses the brand
// check entirely. Used only for clearly-OK contexts like FAQ-question echoes.
const BANNED_WORD_WHITELIST_CONTEXT = [
  /What is the cheapest/i, // FAQ question echoing user search intent
];

// ---------- end configuration ----------

const args = new Set(process.argv.slice(2));
const stagedOnly = args.has("--staged");
const root = process.cwd();

function getStagedFiles() {
  try {
    const out = execSync("git diff --cached --name-only --diff-filter=ACM", {
      encoding: "utf8",
    });
    return out.split("\n").filter(Boolean);
  } catch {
    return [];
  }
}

function getAllProtectedFiles() {
  // Walk the protected globs. Include both tracked and untracked (so newly
  // added files are scanned before they hit the index).
  const files = [];
  for (const glob of PROTECTED_GLOBS) {
    if (glob.endsWith(".txt")) {
      files.push(glob);
      continue;
    }
    try {
      // Tracked files
      const tracked = execSync(`git ls-files ${glob}`, { encoding: "utf8" });
      files.push(...tracked.split("\n").filter(Boolean));
      // Untracked files (excluding gitignored)
      const untracked = execSync(
        `git ls-files --others --exclude-standard ${glob}`,
        { encoding: "utf8" }
      );
      files.push(...untracked.split("\n").filter(Boolean));
    } catch {}
  }
  return [...new Set(files)];
}

function isProtected(path) {
  return PROTECTED_GLOBS.some((glob) => path.startsWith(glob.replace(/\/$/, "")));
}

function classifyMatches(filepath, content) {
  const violations = [];
  const lines = content.split("\n");
  const isHighRisk = HIGH_RISK_FILES.includes(filepath);
  const isIndustryRefAllowed = ALLOW_INDUSTRY_REFS_IN.includes(filepath);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNo = i + 1;

    // SteelR-attributed price patterns: hard fail anywhere
    for (const pat of STEELR_PRICE_PATTERNS) {
      if (pat.test(line)) {
        violations.push({
          file: filepath,
          line: lineNo,
          severity: "PRICE",
          rule: pat.toString(),
          text: line.trim().slice(0, 140),
        });
      }
    }

    // Generic £\d in HIGH_RISK_FILES = fail (e.g. area pages must never have prices)
    if (isHighRisk && /£\d/.test(line)) {
      const isWhitelisted = WHITELIST_PATTERNS.some((pat) => pat.test(line));
      if (!isWhitelisted) {
        violations.push({
          file: filepath,
          line: lineNo,
          severity: "PRICE",
          rule: "high-risk-file £\\d",
          text: line.trim().slice(0, 140),
        });
      }
    }

    // Generic £\d in non-allowed files = fail
    if (!isIndustryRefAllowed && !isHighRisk && /£\d/.test(line)) {
      const isWhitelisted = WHITELIST_PATTERNS.some((pat) => pat.test(line));
      if (!isWhitelisted) {
        violations.push({
          file: filepath,
          line: lineNo,
          severity: "PRICE",
          rule: "non-allowed-file £\\d",
          text: line.trim().slice(0, 140),
        });
      }
    }

    // Brand-banned patterns: only trigger when SteelR is the subject
    for (const pat of STEELR_BANNED_PATTERNS) {
      if (pat.test(line)) {
        const isContextWhitelisted = BANNED_WORD_WHITELIST_CONTEXT.some((p) => p.test(line));
        if (!isContextWhitelisted) {
          violations.push({
            file: filepath,
            line: lineNo,
            severity: "BANNED-WORD",
            rule: pat.toString().slice(0, 80),
            text: line.trim().slice(0, 140),
          });
        }
      }
    }
  }

  return violations;
}

// ---------- main ----------

const files = stagedOnly ? getStagedFiles() : getAllProtectedFiles();
const targets = files.filter((f) => isProtected(f) || PROTECTED_GLOBS.some((g) => f === g));

if (targets.length === 0) {
  console.log("brand-guard: no protected files in scope.");
  process.exit(0);
}

const allViolations = [];
for (const file of targets) {
  let content;
  try {
    content = readFileSync(resolve(root, file), "utf8");
  } catch {
    continue; // file may have been deleted in this commit
  }
  const v = classifyMatches(file, content);
  allViolations.push(...v);
}

if (allViolations.length === 0) {
  console.log(`brand-guard: PASS (${targets.length} files scanned, 0 violations).`);
  process.exit(0);
}

// Check for [allow-price] in commit message (only blocks PRICE violations)
let allowPriceOverride = false;
if (stagedOnly) {
  try {
    const msgFile = resolve(root, ".git/COMMIT_EDITMSG");
    const msg = readFileSync(msgFile, "utf8");
    if (/\[allow-price\]/i.test(msg)) {
      allowPriceOverride = true;
    }
  } catch {}
}

const blocking = allViolations.filter((v) => {
  if (v.severity === "BANNED-WORD") return true; // never overridable
  if (v.severity === "PRICE" && allowPriceOverride) return false;
  return true;
});

console.error("\n=== brand-guard violations ===\n");
for (const v of allViolations) {
  console.error(`[${v.severity}] ${v.file}:${v.line}`);
  console.error(`    rule: ${v.rule}`);
  console.error(`    text: ${v.text}`);
  console.error("");
}

if (blocking.length > 0) {
  console.error(`brand-guard: FAIL (${blocking.length} blocking violation${blocking.length === 1 ? "" : "s"}).`);
  console.error("");
  console.error("To bypass PRICE violations only, add [allow-price] to commit message.");
  console.error("BANNED-WORD violations cannot be overridden — fix the wording.");
  process.exit(1);
}

console.log(`brand-guard: PASS with [allow-price] override (${allViolations.length} non-blocking).`);
process.exit(0);
