#!/usr/bin/env node
// One-shot audit: report any metadata.title > 60 chars or
// metadata.description > 160 chars across src/app/**/page.tsx and layout.tsx.
// Reads files line-by-line, very conservative parser. Outputs a punch list.

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const files = execSync('git ls-files "src/app/**/*.tsx"', { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean)
  .filter(f => f.endsWith('page.tsx') || f.endsWith('layout.tsx'));

const findings = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');

  // Greedy single-string title match within metadata block
  const titleMatch = content.match(/metadata[^=]*=\s*\{[\s\S]*?title:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
  const descMatch = content.match(/metadata[^=]*=\s*\{[\s\S]*?description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);

  if (titleMatch) {
    const title = titleMatch[1];
    if (title.length > 60) {
      findings.push({ file, kind: 'title', length: title.length, content: title });
    }
  }
  if (descMatch) {
    const desc = descMatch[1];
    if (desc.length > 160) {
      findings.push({ file, kind: 'description', length: desc.length, content: desc });
    }
  }
}

findings.sort((a, b) => b.length - a.length);

console.log(`Meta length audit: ${findings.length} issue(s) found\n`);
for (const f of findings) {
  console.log(`${f.file}`);
  console.log(`  ${f.kind} ${f.length}ch (max ${f.kind === 'title' ? 60 : 160}):`);
  console.log(`  "${f.content.slice(0, 120)}${f.content.length > 120 ? '..."' : '"'}`);
  console.log('');
}
