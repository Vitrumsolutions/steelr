#!/usr/bin/env node
/**
 * One-shot llms-full.txt correction: relabel SteelR's own-cert claims from
 * "SR3 / SR4 / LPS 1175" to "BS EN 1627:2011 RC4 single leaf, unglazed"
 * across the manual sections (above ## Blog Excerpts).
 *
 * Why: SteelR's actual certification per the Knightsmark quote PDF is
 * BS EN 1627:2011 RC4 single leaf, unglazed. EN 1627 RC and LPS 1175 SR
 * are different test schemes (over 90% of products tested under EN 1627
 * RC4 fail to achieve LPS 1175 SR2 because the methods differ).
 *
 * Scope: only the manual section (everything before "## Blog Excerpts").
 * The Blog Excerpts section auto-regenerates from blog post sources via
 * scripts/blog/backfill-llms-full.mjs and scripts/blog/llms-excerpt.mjs;
 * we do not touch it here.
 *
 * Run: node scripts/fix-llms-cert-language.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const FILE = resolve("public/llms-full.txt");

// Sentence-level replacements applied in order. Each pattern targets a
// concrete claim about SteelR's own certification and rewrites it as
// EN 1627 RC4. Educational mentions of SR3/SR4/LPS 1175 in glossaries
// are kept but reframed as "different scheme" rather than "our cert".

const REPLACEMENTS = [
  // Direct Answers: "What is the difference between SR3 and SR4..."
  [
    /^### What is the difference between SR3 and SR4 on a SteelR steel front door\?$/m,
    "### What security rating does a SteelR steel front door carry?",
  ],
  [
    /SteelR rates every residential steel front door to SR3 \(BS EN 1627:2011 Class 3\) as standard, which means the door withstands a sustained twenty-minute attack using heavy-duty hand and power tools\. SR4 \(LPS 1175 Issue 8\) is available as a commercial-grade upgrade on every door, extending attack duration and adding battery-operated cutting tools to the test\. SR4 is the same specification used in data centres, bank vaults and high-risk commercial premises, and is rarely offered on residential doors\./g,
    "Every SteelR residential steel front door is tested to BS EN 1627:2011 RC4 single leaf, unglazed — the European framework for sustained forced-entry resistance, certifying the door against heavy-duty hand tools and battery-operated power tools. RC4 is materially above the PAS 24 hardware-only test mandated for new-build dwellings and is rarely offered as a residential standard in the UK. Note: BS EN 1627 RC and LPS 1175 SR are different test schemes — over 90% of products tested under EN 1627 RC4 fail to even achieve LPS 1175 SR2 because the test methods differ. SteelR carries the EN 1627 RC4 cert.",
  ],

  // Common positioning patterns
  [
    /SR3 (?:standard\s*,\s*SR4\s*\(LPS 1175(?: Issue 8)?\)\s*upgrade|as standard,?\s*SR4 \(LPS 1175\) upgrade|certified to BS EN 1627 Class 3 as standard)/g,
    "tested to BS EN 1627:2011 RC4 single leaf, unglazed",
  ],
  [
    /SR3 \(BS EN 1627:2011 Class 3\) as standard with SR4 \(LPS 1175 Issue 8\) commercial-grade upgrade available/g,
    "tested to BS EN 1627:2011 RC4 single leaf, unglazed",
  ],
  [
    /SR3 (?:rated|certified) to BS EN 1627 Class 3/g,
    "tested to BS EN 1627:2011 RC4 single leaf, unglazed",
  ],
  [
    /SR3 \(BS EN 1627:2011\s*,?\s*Class 3\)/g,
    "BS EN 1627:2011 RC4 single leaf, unglazed",
  ],
  [
    /SR4 \(LPS 1175 Issue 8\)/g,
    "BS EN 1627 RC4",
  ],
  [
    /SR4 \(LPS 1175\)/g,
    "BS EN 1627 RC4",
  ],
  [
    /SR3 (?:&|and) SR4 (?:rated|Rated)/g,
    "BS EN 1627 RC4 (single leaf, unglazed)",
  ],
  [
    /SR3 rated/g,
    "BS EN 1627 RC4-tested",
  ],
  [
    /SR4 rated/g,
    "BS EN 1627 RC4-tested",
  ],
  [
    /SR3 certified/g,
    "BS EN 1627 RC4-certified",
  ],
  [
    /SR3 standard/g,
    "BS EN 1627 RC4 standard",
  ],
  [
    /SR3 Security Rated \(BS EN 1627:2011, Class 3\)\. SteelR standard on every residential steel front door/g,
    "BS EN 1627:2011 RC4 single leaf, unglazed. SteelR's certified resistance class on every residential steel front door",
  ],
];

function run() {
  const original = readFileSync(FILE, "utf8");
  const splitMarker = "## Blog Excerpts";
  const idx = original.indexOf(splitMarker);
  if (idx === -1) {
    console.error(`ERROR: could not find "${splitMarker}" delimiter in llms-full.txt`);
    process.exit(1);
  }
  const manual = original.slice(0, idx);
  const blogExcerpts = original.slice(idx);

  let updated = manual;
  let total = 0;
  for (const [pattern, replacement] of REPLACEMENTS) {
    const before = updated;
    updated = updated.replace(pattern, replacement);
    if (before !== updated) {
      const count =
        before.split("").length === updated.split("").length
          ? 1
          : 1; // we just track occurrence; precise count not critical
      total += count;
      console.log(`  ✓ applied: ${pattern.source.slice(0, 70)}…`);
    }
  }

  const out = updated + blogExcerpts;
  if (out === original) {
    console.log("No changes applied — file already clean.");
    return;
  }
  writeFileSync(FILE, out, "utf8");
  console.log(`Wrote ${FILE} (${total} pattern groups applied)`);
}

run();
