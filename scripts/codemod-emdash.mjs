#!/usr/bin/env node
/**
 * Em-dash and en-dash codemod — safe transformations only.
 *
 * Pass 1 (high-traffic UI files) shipped 2026-05-09 in commit 2979e07.
 * Pass 2 (this file): locations data + blog corpus.
 *
 * Transformations applied:
 *   `^### (.+) — (.+)$`  →  `^### $1: $2`   (H3-heading separator → colon)
 *   `^### (.+) – (.+)$`  →  `^### $1: $2`   (en-dash variant)
 *   ` — `                →  `, `             (em-dash with spaces, used as separator)
 *   ` – `                →  `, `             (en-dash with spaces, used as separator)
 *   `(\d)–(\d)`          →  `$1 to $2`       (en-dash digit range, e.g. "8–12")
 *
 * Standalone em-dashes (e.g. tick markers `: "—"`, separator chars in
 * comments like `─────`) are NOT touched — they need semantic replacement.
 *
 * Pre-rewrite required: 6 risky lines manually fixed before running:
 *   - modern-front-door-ideas-inspiration-2026.ts:82 (triple-dash colour pairs)
 *   - are-steel-doors-worth-it-uk.ts:172 (triple-clause appositive)
 *   - steel-doors-conservation-areas-planning-guide.ts:79 (definitional dash)
 *   - steel-doors-conservation-areas-planning-guide.ts:188 (conjunctive H3)
 *   - steel-entrance-doors-buckinghamshire-homes.ts:28 (village-list parenthetical)
 *   - steel-vs-fibreglass-doors-uk-comparison.ts:76 (triple-clause)
 *
 * Usage: node scripts/codemod-emdash.mjs
 */

import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { resolve, join } from "node:path";

// Pass 1 (already shipped) + Pass 2 (this run) globs
const FILE_GLOBS = [
  // Pass 1: high-traffic UI files (already cleaned, run again to confirm idempotence)
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

// Pass 2 directories (recursive .ts only)
const DIR_GLOBS = [
  "src/data/locations",
  "src/data/blog/posts",
];

function collectFiles() {
  const files = [...FILE_GLOBS];
  for (const dir of DIR_GLOBS) {
    const fullDir = resolve(dir);
    try {
      const entries = readdirSync(fullDir);
      for (const entry of entries) {
        const path = join(fullDir, entry);
        if (statSync(path).isFile() && entry.endsWith(".ts")) {
          files.push(join(dir, entry).replace(/\\/g, "/"));
        }
      }
    } catch {
      // skip if dir missing
    }
  }
  return files;
}

let totalReplaced = 0;
let filesChanged = 0;
const files = collectFiles();

console.log(`Scanning ${files.length} files...\n`);

for (const rel of files) {
  const path = resolve(rel);
  let original;
  try {
    original = readFileSync(path, "utf8");
  } catch {
    continue;
  }

  let updated = original;
  let fileReplacements = 0;

  // Pattern A: H3 separator (em-dash) → colon — must run BEFORE the general pattern
  const aBefore = (updated.match(/^### .+? — .+$/gm) || []).length;
  updated = updated.replace(/^(### .+?) — (.+)$/gm, "$1: $2");
  fileReplacements += aBefore;

  // Pattern B: H3 separator (en-dash) → colon
  const bBefore = (updated.match(/^### .+? – .+$/gm) || []).length;
  updated = updated.replace(/^(### .+?) – (.+)$/gm, "$1: $2");
  fileReplacements += bBefore;

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
    if (fileReplacements > 0) {
      console.log(`  ${rel}: ${fileReplacements} (h3 ${aBefore + bBefore}, em ${p1Before}, en ${p2Before}, range ${p3Before})`);
    }
  }
}

console.log(`\nDone. ${filesChanged} files changed, ${totalReplaced} replacements total.`);
console.log(`Standalone em-dashes (e.g. tick markers, comment separators) NOT touched.`);
