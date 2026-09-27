#!/usr/bin/env node
/**
 * page-mtimes.mjs: the date each page's content last really changed.
 *
 * WHY (2026-09-27): sitemap.ts gave every static, collection and area URL
 * `new Date()`, so each deploy told search engines that 275 of 321 pages had
 * changed that day. A lastmod that moves on every build is a date search
 * engines learn to ignore, so real edits stop being noticed.
 *
 * OUTPUT: src/data/page-mtimes.json
 *   files:    { "src/app/<route>/page.tsx" | "src/data/..." : ISO date of the
 *               last commit that touched it }
 *   areaFile: { "<area slug>": "src/data/locations/<region>.ts" }
 * Consumed by src/app/sitemap.ts, which gives each URL the newest date among
 * the files that render it. Blog posts are not dated from git: they keep their
 * hand-set date / dateModified, so a punctuation or link sweep never makes a
 * post look freshly updated.
 *
 * SAFETY: a file git cannot date (not a checkout, or untouched inside a shallow
 * clone's history) keeps its committed value; with no committed value it is
 * left out and that URL is published without a lastmod rather than a false one.
 * Runs in the prebuild chain.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { makeGitDateReader, readJson } from "./git-dates.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const OUT = join(ROOT, "src/data/page-mtimes.json");
const rel = (abs) => relative(ROOT, abs).split("\\").join("/");

function walk(dir, keep) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name);
    if (statSync(abs).isDirectory()) out.push(...walk(abs, keep));
    else if (keep(name)) out.push(rel(abs));
  }
  return out;
}

const pages = walk(join(ROOT, "src/app"), (n) => n === "page.tsx");
const locationFiles = walk(join(ROOT, "src/data/locations"), (n) => n.endsWith(".ts") && n !== "index.ts" && n !== "types.ts");

// Area slugs live inside the region data files, not in their file names.
const areaFile = {};
for (const f of locationFiles) {
  const slugs = [...readFileSync(join(ROOT, f), "utf8").matchAll(/^ {4}slug: "([^"]+)"/gm)].map((m) => m[1]);
  // A reformat that changes the indent would silently drop areas to template-only dates.
  if (slugs.length === 0) console.warn(`[page-mtimes] WARNING: no area slugs found in ${f}; check its indentation`);
  for (const s of slugs) areaFile[s] = f;
}

const { lastCommitDate } = makeGitDateReader(ROOT);
const committed = readJson(OUT, {}).files ?? {};
const files = {};
for (const f of [...pages, "src/data/doors.ts", ...locationFiles].sort()) {
  const d = lastCommitDate(f) ?? committed[f] ?? null;
  if (d) files[f] = d;
}

const sortKeys = (o) => Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(OUT, JSON.stringify({ files, areaFile: sortKeys(areaFile) }, null, 2) + "\n");
console.log(`Wrote ${Object.keys(files).length} file dates and ${Object.keys(areaFile).length} areas to src/data/page-mtimes.json`);
