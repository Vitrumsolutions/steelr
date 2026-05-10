#!/usr/bin/env node
/**
 * Em-dash and en-dash codemod — safe transformations only.
 *
 * Scope: high-traffic UI files only (this session). Blog corpus, location data,
 * and llms files are deferred — those are higher-risk and need separate review.
 *
 * Transformations applied:
 *   ` — `  →  `, `         (em-dash with surrounding spaces, used as separator)
 *   ` – `  →  `, `         (en-dash with surrounding spaces, used as separator)
 *   `(\d)–(\d)`  →  `$1 to $2`   (en-dash digit range, e.g. "8–12" → "8 to 12")
 *
 * Note: standalone em-dashes inside cells/tick markers (e.g. `: "—"` for an
 *   absent indicator) are NOT touched — they need semantic replacement
 *   (tick / cross icon), not character substitution.
 *
 * Usage: node scripts/codemod-emdash.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const FILES = [
  "src/app/page.tsx",
  "src/app/about/page.tsx",
  "src/app/process/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/security/page.tsx",
  "src/app/security-specification/page.tsx",
  "src/app/bespoke-steel-front-doors-uk/page.tsx",
  "src/app/sr3-residential-steel-door/page.tsx",
  "src/app/sr4-residential-steel-door/page.tsx",
  "src/app/lps-1673-attack-resistant-steel-door/page.tsx",
  "src/app/architects/page.tsx",
  "src/app/developers/page.tsx",
  "src/app/housing-associations/page.tsx",
  "src/app/property-managers/page.tsx",
  "src/app/colours/page.tsx",
  "src/app/areas/[slug]/page.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/components/InfoPage.tsx",
  "src/components/Hero.tsx",
];

let totalReplaced = 0;
let filesChanged = 0;

for (const rel of FILES) {
  const path = resolve(rel);
  let original;
  try {
    original = readFileSync(path, "utf8");
  } catch {
    continue;
  }

  let updated = original;
  let fileReplacements = 0;

  // Pattern 1: ` — ` (em-dash separator) → `, `
  const p1Before = (updated.match(/ — /g) || []).length;
  updated = updated.replace(/ — /g, ", ");
  fileReplacements += p1Before;

  // Pattern 2: ` – ` (en-dash separator) → `, `
  const p2Before = (updated.match(/ – /g) || []).length;
  updated = updated.replace(/ – /g, ", ");
  fileReplacements += p2Before;

  // Pattern 3: digit en-dash digit (e.g. "8–12") → "8 to 12"
  const p3Before = (updated.match(/(\d)–(\d)/g) || []).length;
  updated = updated.replace(/(\d)–(\d)/g, "$1 to $2");
  fileReplacements += p3Before;

  if (updated !== original) {
    writeFileSync(path, updated, "utf8");
    filesChanged += 1;
    totalReplaced += fileReplacements;
    console.log(`  ${rel}: ${fileReplacements} replacement(s) (em ${p1Before}, en ${p2Before}, range ${p3Before})`);
  }
}

console.log(`\nDone. ${filesChanged} files changed, ${totalReplaced} replacements total.`);
console.log(`Standalone em-dashes (e.g. tick markers) NOT touched — these need semantic replacement, not character substitution.`);
