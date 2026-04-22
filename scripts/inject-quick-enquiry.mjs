#!/usr/bin/env node
// One-shot injection script: adds <QuickEnquiry> to SteelR topic hub pages.
//
// For each file in the list below:
//  1. If not already imported, adds the QuickEnquiry import after the last
//     existing import line.
//  2. Injects <QuickEnquiry source="hub-<slug>" contextLabel="<label>" />
//     immediately before the LAST JSX CTA comment marker OR before the final
//     <section> that precedes </>.
//
// Safe to re-run: skips files that already have QuickEnquiry imported.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const PAGES = [
  { path: "src/app/security/page.tsx", source: "hub-security", label: "Security Doors" },
  { path: "src/app/fire-rated-doors/page.tsx", source: "hub-fire-rated-doors", label: "Fire Rated Doors" },
  { path: "src/app/sr3-residential-steel-door/page.tsx", source: "hub-sr3", label: "SR3 Residential Steel Door" },
  { path: "src/app/pas-24-steel-entrance-door/page.tsx", source: "hub-pas-24", label: "PAS 24 Steel Entrance Door" },
  { path: "src/app/luxury-steel-entrance-door-london/page.tsx", source: "hub-luxury-london", label: "Luxury Steel Entrance Door London" },
  { path: "src/app/steel-front-door-cost-uk/page.tsx", source: "hub-cost-uk", label: "Steel Front Door Cost UK" },
  { path: "src/app/steel-front-door-vs-composite/page.tsx", source: "hub-vs-composite", label: "Steel vs Composite Doors" },
  { path: "src/app/thermally-broken-steel-front-door/page.tsx", source: "hub-thermal", label: "Thermally Broken Steel Door" },
  { path: "src/app/secured-by-design-steel-front-door/page.tsx", source: "hub-sbd", label: "Secured by Design Steel Door" },
  { path: "src/app/uk-steel-doors-vs-imported/page.tsx", source: "hub-uk-vs-imported", label: "UK Steel Doors vs Imported" },
  { path: "src/app/fire-rated-fd30-front-door/page.tsx", source: "hub-fd30", label: "FD30 Fire Rated Front Door" },
  { path: "src/app/bespoke-steel-front-doors-uk/page.tsx", source: "hub-bespoke", label: "Bespoke Steel Front Doors UK" },
  { path: "src/app/colours/page.tsx", source: "hub-colours", label: "Colours & Finishes" },
  { path: "src/app/process/page.tsx", source: "hub-process", label: "Our Process" },
  { path: "src/app/lookbook/page.tsx", source: "hub-lookbook", label: "Lookbook" },
];

let changed = 0;
let skipped = 0;

for (const { path, source, label } of PAGES) {
  const full = join(ROOT, path);
  if (!existsSync(full)) {
    console.warn(`  SKIP  ${path} (not found)`);
    continue;
  }

  let content = readFileSync(full, "utf8");

  if (content.includes("QuickEnquiry")) {
    console.log(`  skip  ${path} (already has QuickEnquiry)`);
    skipped++;
    continue;
  }

  // 1. Add import after the last existing import line
  const importRe = /^import .+ from ["'].+["'];?$/gm;
  const imports = [...content.matchAll(importRe)];
  if (imports.length === 0) {
    console.warn(`  SKIP  ${path} (no imports found)`);
    continue;
  }
  const lastImport = imports[imports.length - 1];
  const lastImportEnd = lastImport.index + lastImport[0].length;
  content =
    content.slice(0, lastImportEnd) +
    `\nimport QuickEnquiry from "@/components/QuickEnquiry";` +
    content.slice(lastImportEnd);

  // 2. Inject the component. Prefer before the LAST `{/* CTA */}` comment.
  //    Fall back to inserting before the LAST `<section ` of the JSX tree
  //    (the final CTA section convention on these pages).
  const inject = `\n      {/* Inline enquiry panel — source=${source} */}\n      <QuickEnquiry source="${source}" contextLabel="${label}" />\n`;

  const ctaCommentIdx = content.lastIndexOf("{/* CTA */}");
  if (ctaCommentIdx !== -1) {
    content =
      content.slice(0, ctaCommentIdx) +
      inject +
      "      " +
      content.slice(ctaCommentIdx);
  } else {
    // Fallback: insert before the last `<section ` in the file
    const lastSection = content.lastIndexOf("<section");
    if (lastSection === -1) {
      console.warn(`  SKIP  ${path} (no <section> anchor found)`);
      continue;
    }
    // Backtrack to start of that line for clean indentation
    let lineStart = content.lastIndexOf("\n", lastSection) + 1;
    content = content.slice(0, lineStart) + inject.trimStart() + "      " + content.slice(lineStart);
  }

  writeFileSync(full, content, "utf8");
  console.log(`  \u2713 injected  ${path}  source=${source}`);
  changed++;
}

console.log(`\nDone. ${changed} file(s) changed, ${skipped} already had QuickEnquiry.`);
