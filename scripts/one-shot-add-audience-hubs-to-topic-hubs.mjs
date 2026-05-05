#!/usr/bin/env node
/**
 * One-shot: add 4 audience-hub entries to each topic hub's related.links array.
 * Idempotent — safe to re-run; checks for existing entries before adding.
 *
 * Hubs to edit (sr3 already done manually so it's in skipList):
 *   pas-24-steel-entrance-door
 *   sr4-residential-steel-door
 *   lps-1673-attack-resistant-steel-door
 *   secured-by-design-steel-front-door
 *   fire-rated-fd30-front-door
 *   bs-en-1627-rc4-residential-steel-door
 *   thermally-broken-steel-front-door
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const HUBS = [
  "src/app/pas-24-steel-entrance-door/page.tsx",
  "src/app/sr4-residential-steel-door/page.tsx",
  "src/app/lps-1673-attack-resistant-steel-door/page.tsx",
  "src/app/secured-by-design-steel-front-door/page.tsx",
  "src/app/fire-rated-fd30-front-door/page.tsx",
  "src/app/bs-en-1627-rc4-residential-steel-door/page.tsx",
  "src/app/thermally-broken-steel-front-door/page.tsx",
];

const AUDIENCE_BLOCK = `            {
              href: "/housing-associations",
              label: "For housing associations",
              description: "Building Safety Act 2022 + FRA remediation procurement model with stock-replacement scheduling.",
            },
            {
              href: "/developers",
              label: "For residential developers",
              description: "Approved Doc Q + NHBC-ready certification packs. Door schedules and phased delivery against build programmes.",
            },
            {
              href: "/architects",
              label: "For architects + specifiers",
              description: "NBS-format clauses, BIM data, performance specification narrative. Direct line to the design team across RIBA stages.",
            },
            {
              href: "/property-managers",
              label: "For managing agents",
              description: "FRA action close-out, Section 20 consultation support, portfolio-level supplier programme.",
            },
`;

let modified = 0;
let skipped = 0;
let missing = 0;

for (const hubPath of HUBS) {
  if (!existsSync(hubPath)) {
    console.log(`MISSING ${hubPath}`);
    missing++;
    continue;
  }

  const content = readFileSync(hubPath, "utf8");

  // Skip if already has audience-hub links
  if (content.includes('href: "/housing-associations"')) {
    console.log(`SKIP    ${hubPath} (already has audience hubs)`);
    skipped++;
    continue;
  }

  // Find the closing `],\n        }}` of the related.links array
  // and insert the audience block before the closing `]`.
  const pattern = /(\s+\]\s*,\s*\n\s*\}\}\s*\n\s*faqs=)/;
  const match = content.match(pattern);
  if (!match) {
    console.log(`NO-MATCH ${hubPath} (related.links closing pattern not found)`);
    missing++;
    continue;
  }

  const updated = content.replace(pattern, `${AUDIENCE_BLOCK}$1`);
  writeFileSync(hubPath, updated, "utf8");
  console.log(`MODIFY  ${hubPath}`);
  modified++;
}

console.log(`\nDone. Modified: ${modified}, Skipped: ${skipped}, Missing: ${missing}`);
