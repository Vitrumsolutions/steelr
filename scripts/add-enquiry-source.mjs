#!/usr/bin/env node
// Adds enquirySource + enquiryContextLabel props to each InfoPage topic page call.
// Safe to re-run (skips pages already patched).

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const PAGES = [
  { path: "src/app/sr3-residential-steel-door/page.tsx", source: "hub-sr3", label: "SR3 Residential Steel Doors" },
  { path: "src/app/pas-24-steel-entrance-door/page.tsx", source: "hub-pas-24", label: "PAS 24 Steel Entrance Doors" },
  { path: "src/app/luxury-steel-entrance-door-london/page.tsx", source: "hub-luxury-london", label: "Luxury Steel Entrance Doors London" },
  { path: "src/app/steel-front-door-cost-uk/page.tsx", source: "hub-cost-uk", label: "Steel Front Doors Cost UK" },
  { path: "src/app/steel-front-door-vs-composite/page.tsx", source: "hub-vs-composite", label: "Steel vs Composite Doors" },
  { path: "src/app/thermally-broken-steel-front-door/page.tsx", source: "hub-thermal", label: "Thermally Broken Steel Doors" },
  { path: "src/app/secured-by-design-steel-front-door/page.tsx", source: "hub-sbd", label: "Secured by Design Steel Doors" },
  { path: "src/app/uk-steel-doors-vs-imported/page.tsx", source: "hub-uk-vs-imported", label: "UK Steel Doors vs Imported" },
  { path: "src/app/fire-rated-fd30-front-door/page.tsx", source: "hub-fd30", label: "FD30 Fire Rated Front Doors" },
  { path: "src/app/bespoke-steel-front-doors-uk/page.tsx", source: "hub-bespoke", label: "Bespoke Steel Front Doors UK" },
];

let changed = 0, skipped = 0;

for (const { path, source, label } of PAGES) {
  const full = join(ROOT, path);
  if (!existsSync(full)) {
    console.warn(`  MISS  ${path}`);
    continue;
  }

  let src = readFileSync(full, "utf8");

  if (src.includes("enquirySource=")) {
    console.log(`  skip  ${path} (already has enquirySource)`);
    skipped++;
    continue;
  }

  // Find `ctaHeading="..."` or `ctaHeading={...}` and add 2 new props before the closing `/>`
  // Pages end with `<InfoPage ... ctaHeading="..." /> </>`. Inject the 2 new props right after ctaHeading.
  const ctaMatch = src.match(/(\n\s+ctaHeading=(?:"[^"]*"|\{[^}]*\}))/);
  if (!ctaMatch) {
    console.warn(`  SKIP  ${path} (no ctaHeading prop found)`);
    continue;
  }
  const insertion = `${ctaMatch[1]}\n        enquirySource="${source}"\n        enquiryContextLabel="${label}"`;
  src = src.replace(ctaMatch[1], insertion);

  writeFileSync(full, src, "utf8");
  console.log(`  \u2713 patched  ${path}  source=${source}`);
  changed++;
}

console.log(`\nDone. ${changed} file(s) changed, ${skipped} already patched.`);
