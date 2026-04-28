#!/usr/bin/env node
/**
 * Brand-policy guard for SteelR content.
 *
 * Scans for three classes of violation:
 *
 * 1. Displayed SteelR-attributed prices (£\d patterns) in protected paths.
 *    Per CLAUDE.md brand policy: "No displayed prices on cost pages or
 *    Product schema with offers block. Bespoke premium positioning
 *    requires no published list price."
 *
 * 2. Brand-banned words: "affordable", "cheap", "best prices", "discount".
 *    Per CLAUDE.md: "Never use these. Brand is premium."
 *
 * 3. Em-dashes / en-dashes used as sentence separators ("foo — bar" / "foo – bar").
 *    Per CLAUDE.md house-style rule: "No em dashes or en dashes in captions, copy,
 *    posts, blog, llms files, or any brand output. Use full stops, commas,
 *    semicolons." Hard rule on NEW files only — modified files are out of
 *    scope for this check because the pre-existing corpus contains ~960
 *    em-dashes that need a separate manual content-rewrite pass. Full-repo
 *    runs surface the backlog count as a warning (not a failure).
 *
 * Modes:
 *   node scripts/brand-guard.mjs              # scan ALL protected files
 *                                             # (DASH violations reported as warning)
 *   node scripts/brand-guard.mjs --staged     # scan only git-staged files
 *                                             # (DASH violations are blocking on
 *                                             # newly-added files only — modified
 *                                             # files don't trigger DASH check)
 *
 * Exit codes:
 *   0 = clean (or all violations whitelisted)
 *   1 = violations found
 *
 * Opt-out (use sparingly):
 *   git commit -m "your message [allow-price]"   # bypasses the £ check
 *   (no override exists for BANNED-WORD or DASH — fix the wording)
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

// Em-dash / en-dash patterns used as sentence separators or parenthetical
// dashes. The leading and trailing whitespace constraint avoids hitting
// hyphenated identifiers (e.g. "Cortizo COR-60") which use the ASCII -
// character anyway, but belt-and-braces.
const DASH_PATTERNS = [
  /\s—\s/, // em-dash with whitespace either side
  /\s–\s/, // en-dash with whitespace either side
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

function getStagedAddedFiles() {
  // diff-filter=A: only files newly added in this commit. Modified files
  // are excluded so the existing 960-em-dash backlog doesn't surprise-block
  // commits that touch already-dashed files.
  try {
    const out = execSync("git diff --cached --name-only --diff-filter=A", {
      encoding: "utf8",
    });
    return new Set(out.split("\n").filter(Boolean));
  } catch {
    return new Set();
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

function classifyMatches(filepath, content, dashMode) {
  // dashMode:
  //   "block" — DASH violations are real failures (newly-added files in --staged,
  //              or any file in non-staged mode where we want hard fail — we don't)
  //   "warn"  — DASH violations recorded with severity DASH-WARN (informational,
  //              non-blocking), used by full-repo scan to surface backlog count
  //   "skip"  — DASH check disabled entirely (modified files in --staged mode)
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

    // Em-dash / en-dash sentence separators: per-file mode
    if (dashMode !== "skip") {
      for (const pat of DASH_PATTERNS) {
        if (pat.test(line)) {
          violations.push({
            file: filepath,
            line: lineNo,
            severity: dashMode === "block" ? "DASH" : "DASH-WARN",
            rule: pat.toString(),
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

// Determine DASH check mode per file:
//   --staged + newly-added file  → "block" (must be clean)
//   --staged + modified file     → "skip"  (don't surprise-block dashed-corpus edits)
//   no flag (full-repo scan)     → "warn"  (surface backlog count, don't fail)
const stagedAdded = stagedOnly ? getStagedAddedFiles() : new Set();
function dashModeFor(filepath) {
  if (!stagedOnly) return "warn";
  return stagedAdded.has(filepath) ? "block" : "skip";
}

const allViolations = [];
for (const file of targets) {
  let content;
  try {
    content = readFileSync(resolve(root, file), "utf8");
  } catch {
    continue; // file may have been deleted in this commit
  }
  const v = classifyMatches(file, content, dashModeFor(file));
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
  if (v.severity === "DASH") return true; // never overridable (block mode only fires on new files)
  if (v.severity === "DASH-WARN") return false; // informational, doesn't fail
  if (v.severity === "PRICE" && allowPriceOverride) return false;
  return true;
});

const dashWarnCount = allViolations.filter((v) => v.severity === "DASH-WARN").length;

// Print blocking + non-warn violations in detail. Dash-warn collapses to a
// single summary line so the 960-instance backlog doesn't drown other output.
const printable = allViolations.filter((v) => v.severity !== "DASH-WARN");
if (printable.length > 0) {
  console.error("\n=== brand-guard violations ===\n");
  for (const v of printable) {
    console.error(`[${v.severity}] ${v.file}:${v.line}`);
    console.error(`    rule: ${v.rule}`);
    console.error(`    text: ${v.text}`);
    console.error("");
  }
}
if (dashWarnCount > 0) {
  console.error(`brand-guard: ${dashWarnCount} em-dash / en-dash use(s) found in pre-existing content (informational, non-blocking — see audit-data/em-dash-backlog-2026-04-28.md for cleanup plan).`);
}

if (blocking.length > 0) {
  console.error(`brand-guard: FAIL (${blocking.length} blocking violation${blocking.length === 1 ? "" : "s"}).`);
  console.error("");
  console.error("To bypass PRICE violations only, add [allow-price] to commit message.");
  console.error("BANNED-WORD and DASH violations cannot be overridden — fix the wording.");
  process.exit(1);
}

if (allowPriceOverride && allViolations.some((v) => v.severity === "PRICE")) {
  console.log(`brand-guard: PASS with [allow-price] override (${allViolations.length} non-blocking).`);
} else {
  console.log(`brand-guard: PASS (${targets.length} files scanned, ${dashWarnCount} dash-warn ${dashWarnCount === 1 ? "match" : "matches"}, 0 blocking violations).`);
}
process.exit(0);
