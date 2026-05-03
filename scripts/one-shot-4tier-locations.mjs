#!/usr/bin/env node
// One-shot script: rewrites stale "SR3 as standard" / "SR3 rated to BS EN 1627
// Class 3" / "SR4 (LPS 1175) upgrade" framings inside src/data/locations/*.ts
// to the current 4-tier residential security ladder language.
// 4-tier ladder (single source of truth):
//   - BS EN 1627:2011 RC4 single leaf, unglazed (Standard, every door)
//   - LPS 1175 SR3 (LPCB police-preferred, Enhanced upgrade)
//   - LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade)
//   - LPS 1673 attack-resistance (Ultra-high, by enquiry)

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/data/locations';
const files = readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

// Replacement table. Order matters: longest patterns first so they win over
// shorter prefix overlap.
const replacements = [
  // Long, full ladder claims: most explicit single-line of stale framing
  {
    find: /Every (?:SteelR )?door is PAS 24:2022 certified, SR3 rated to BS EN 1627 Class 3 as standard, Secured by Design approved, FD30S fire and smoke rated, and SR4 \(LPS 1175\) upgrade available\./g,
    replace: 'Every SteelR door is PAS 24:2022 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, Secured by Design approved, FD30S fire and smoke rated, with LPS 1175 SR3 (Enhanced upgrade), LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade) and LPS 1673 attack-resistance (Ultra-high, by enquiry) available on every door.',
  },
  {
    find: /Every door is SR3 rated to BS EN 1627 Class 3 as standard, with SR4 \(LPS 1175 Issue 8\) commercial-grade security available as an upgrade, and FD30S fire rating across the range\./g,
    replace: 'Every door is BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, with LPS 1175 SR3 (LPCB police-preferred Enhanced upgrade), LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade) and LPS 1673 attack-resistance (Ultra-high, by enquiry) available, plus FD30S fire rating across the range.',
  },
  {
    find: /Every door is SR3 rated to BS EN 1627 Class 3 as standard, SR4 \(LPS 1175\) available as an upgrade for more remote rural properties, and fully bespoke to aperture dimensions\./g,
    replace: 'Every door is BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, with LPS 1175 SR3 (Enhanced upgrade), LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade) and LPS 1673 attack-resistance (Ultra-high, by enquiry) available for more remote rural properties, and fully bespoke to aperture dimensions.',
  },
  {
    find: /Every door is SR3 rated as standard with SR4 \(LPS 1175\) upgrade available\./g,
    replace: 'Every door is BS EN 1627 RC4 certified as Standard, with LPS 1175 SR3 (Enhanced), SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available.',
  },
  {
    find: /Every door is SR3 rated as standard, SR4 \(LPS 1175\) available as an upgrade for rural or riverside properties\./g,
    replace: 'Every door is BS EN 1627 RC4 certified as Standard, with LPS 1175 SR3 (Enhanced), SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) available as upgrades for rural or riverside properties.',
  },
  {
    find: /Every SteelR door is SR3 rated to BS EN 1627 Class 3 as standard, with SR4 \(LPS 1175 Issue 8\) commercial-grade upgrade specified on roughly one in three Ascot projects, and FD30S fire rating standard across the range\./g,
    replace: 'Every SteelR door is BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, with LPS 1175 SR3 (Enhanced upgrade), LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade specified on roughly one in three Ascot projects) and LPS 1673 attack-resistance (Ultra-high, by enquiry) available, plus FD30S fire rating standard across the range.',
  },

  // Generic fallback: "SR3 rated to BS EN 1627 Class 3 as standard" inside a
  // sentence not covered above. Replace just the certification phrase, keep
  // surrounding context intact.
  {
    find: /SR3 rated to BS EN 1627 Class 3 as standard/g,
    replace: 'BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard (with LPS 1175 SR3, SR4 and LPS 1673 available as upgrades)',
  },
  {
    find: /SR3 rated as standard/g,
    replace: 'BS EN 1627 RC4 certified as Standard (with LPS 1175 SR3, SR4 and LPS 1673 available as upgrades)',
  },

  // SR3 rated security in passing description (Ruislip-style)
  {
    find: /SR3 rated security/g,
    replace: 'LPS 1175 SR3 LPCB police-preferred residential security',
  },

  // Lone "SR4 (LPS 1175) upgrade available" — only catch when not preceded
  // by the longer fix above
  {
    find: /SR4 \(LPS 1175\) upgrade available/g,
    replace: 'LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades available',
  },

  // Second sweep for prose variants not caught by first run
  {
    find: /SR3 rating as standard/g,
    replace: 'BS EN 1627 RC4 as Standard with LPS 1175 SR3 (Enhanced upgrade)',
  },
  {
    find: /SR4 \(LPS 1175\) commercial-grade upgrade/g,
    replace: 'LPS 1175 SR4 D10 Issue 8 Commercial-grade upgrade (with LPS 1673 Ultra-high also available by enquiry)',
  },
  {
    find: /SR4 \(LPS 1175\) upgrade/g,
    replace: 'LPS 1175 SR4 (Commercial-grade) and LPS 1673 (Ultra-high, by enquiry) upgrades',
  },
  {
    find: /\bSR3 security\b/g,
    replace: 'LPS 1175 SR3 LPCB police-preferred security',
  },

  // Third sweep: more variants surfaced after run 2
  {
    find: /SR3 rating to BS EN 1627 Class 3 as standard/g,
    replace: 'BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, with LPS 1175 SR3 (Enhanced upgrade), SR4 (Commercial-grade upgrade) and LPS 1673 (Ultra-high, by enquiry) available',
  },
  {
    find: /SR3 rating to BS EN 1627 Class 3(?! as standard)/g,
    replace: 'BS EN 1627:2011 RC4 single leaf, unglazed (with LPS 1175 SR3, SR4 and LPS 1673 upgrades available)',
  },
  {
    find: /SR3 rated to BS EN 1627 Class 3(?! as standard)/g,
    replace: 'BS EN 1627:2011 RC4 single leaf, unglazed certified (with LPS 1175 SR3, SR4 and LPS 1673 upgrades available)',
  },
  {
    find: /SR3 rated steel doors/g,
    replace: 'BS EN 1627 RC4 Standard steel doors with LPS 1175 SR3, SR4 and LPS 1673 upgrades',
  },

  // Fourth sweep
  {
    find: /SR3 as standard and LPS 1175 SR4/g,
    replace: 'BS EN 1627 RC4 as Standard, with LPS 1175 SR3 (Enhanced upgrade) and LPS 1175 SR4',
  },
  {
    find: /SR3 rated steel entrance doors/g,
    replace: 'BS EN 1627 RC4 Standard steel entrance doors with LPS 1175 SR3, SR4 and LPS 1673 upgrades',
  },
  {
    find: /modern insulation, SR3 rating and/g,
    replace: 'modern insulation, BS EN 1627 RC4 Standard with LPS 1175 SR3 Enhanced upgrade and',
  },
  {
    find: /SR4 \(LPS 1175 Issue 8\) commercial-grade upgrade/g,
    replace: 'LPS 1175 SR4 D10 Issue 8 Commercial-grade upgrade (with LPS 1673 Ultra-high also available by enquiry)',
  },
];

let totalChanges = 0;
const fileChangeLog = [];

for (const file of files) {
  const path = join(dir, file);
  const original = readFileSync(path, 'utf8');
  let updated = original;
  let fileChanges = 0;

  for (const { find, replace } of replacements) {
    const before = updated;
    updated = updated.replace(find, replace);
    if (before !== updated) {
      const matches = (before.match(find) || []).length;
      fileChanges += matches;
    }
  }

  if (updated !== original) {
    writeFileSync(path, updated, 'utf8');
    fileChangeLog.push(`${file}: ${fileChanges} replacement(s)`);
    totalChanges += fileChanges;
  }
}

console.log('4-tier ladder location sweep complete.');
console.log(`Files modified: ${fileChangeLog.length}/${files.length}`);
console.log(`Total replacements: ${totalChanges}`);
fileChangeLog.forEach(line => console.log(`  ${line}`));
