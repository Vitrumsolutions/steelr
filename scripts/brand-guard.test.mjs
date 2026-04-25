#!/usr/bin/env node
/**
 * Self-test for scripts/brand-guard.mjs.
 *
 * Creates a temporary protected file with KNOWN violations, runs the guard,
 * confirms it catches them. Then creates one with KNOWN clean content and
 * confirms it passes. Cleans up after itself.
 *
 * Usage: node scripts/brand-guard.test.mjs
 */

import { execSync } from "node:child_process";
import { writeFileSync, unlinkSync, existsSync } from "node:fs";

const TMP_VIOLATING = "src/data/blog/posts/__brand-guard-test-violating.ts";
const TMP_CLEAN = "src/data/blog/posts/__brand-guard-test-clean.ts";

const violatingContent = `
// Test fixture: should trigger brand-guard PRICE + BANNED-WORD violations.
const post = {
  content: \`
SteelR doors typically start from around £5,000.
Our bespoke steel front doors start from approximately £3,000 for entry-level.
Entry-Level Bespoke: £3,000 to £5,000.
We offer SteelR discounts on bulk orders.
SteelR is the affordable choice for premium homes.
We are the cheapest steel door manufacturer in the UK.
Best price guarantee on every door.
  \`
};
export default post;
`;

const cleanContent = `
// Test fixture: should pass brand-guard (no violations).
const post = {
  content: \`
SteelR doors are individually priced after an on-site survey.
Each door is made to measure with no two specifications alike.
The quotation reflects size, security tier, fire rating and design complexity.
Cast iron became affordable during the Victorian era. (historical context)
The cheapest doors fitted to new-build estates use PAS 24. (competitor pejorative)
Cheap Street is in Newbury's conservation area. (proper noun)
Insurers may discount premiums for SR3 doors. (verb form)
No same-day pressure tactics. (legitimate negation, not associating with discount)
What is the cheapest steel entrance door? (FAQ question echo)
  \`
};
export default post;
`;

let pass = true;

function run(label, fn) {
  try {
    fn();
    console.log(`  ✓ ${label}`);
  } catch (e) {
    console.error(`  ✗ ${label}: ${e.message}`);
    pass = false;
  }
}

console.log("brand-guard self-test\n");

console.log("Test 1: violating file should FAIL");
writeFileSync(TMP_VIOLATING, violatingContent);
run("guard exits non-zero on violations", () => {
  try {
    execSync(`node scripts/brand-guard.mjs`, { stdio: "pipe" });
    throw new Error("expected exit 1, got exit 0");
  } catch (e) {
    if (e.status !== 1) throw new Error(`expected exit 1, got exit ${e.status}`);
  }
});
run("guard reports PRICE violations on violating file", () => {
  let output = "";
  try {
    output = execSync(`node scripts/brand-guard.mjs`, { stdio: "pipe", encoding: "utf8" });
  } catch (e) {
    output = (e.stdout || "") + (e.stderr || "");
  }
  if (!output.includes("__brand-guard-test-violating")) {
    throw new Error("violating file not in output");
  }
  if (!/PRICE/.test(output)) {
    throw new Error("expected PRICE violations not reported");
  }
});
run("guard reports BANNED-WORD violations on violating file", () => {
  let output = "";
  try {
    output = execSync(`node scripts/brand-guard.mjs`, { stdio: "pipe", encoding: "utf8" });
  } catch (e) {
    output = (e.stdout || "") + (e.stderr || "");
  }
  if (!/BANNED-WORD/.test(output)) {
    throw new Error("expected BANNED-WORD violations not reported");
  }
});
unlinkSync(TMP_VIOLATING);

console.log("\nTest 2: clean file should PASS (with rest of repo also clean)");
writeFileSync(TMP_CLEAN, cleanContent);
run("guard exits zero on clean file", () => {
  try {
    execSync(`node scripts/brand-guard.mjs`, { stdio: "pipe" });
  } catch (e) {
    let output = (e.stdout?.toString() || "") + (e.stderr?.toString() || "");
    throw new Error(`expected exit 0, got exit ${e.status}\n${output}`);
  }
});
unlinkSync(TMP_CLEAN);

console.log("\nTest 3: real codebase should still PASS");
run("guard exits zero on actual repo state", () => {
  try {
    execSync(`node scripts/brand-guard.mjs`, { stdio: "pipe" });
  } catch (e) {
    let output = (e.stdout?.toString() || "") + (e.stderr?.toString() || "");
    throw new Error(`expected exit 0, got exit ${e.status}\n${output}`);
  }
});

// Cleanup any leftover fixtures
[TMP_VIOLATING, TMP_CLEAN].forEach((f) => {
  if (existsSync(f)) unlinkSync(f);
});

console.log(`\n${pass ? "✓ ALL TESTS PASSED" : "✗ TESTS FAILED"}`);
process.exit(pass ? 0 : 1);
