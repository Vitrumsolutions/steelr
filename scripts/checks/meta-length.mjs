#!/usr/bin/env node
/**
 * meta-length.mjs — fails build if any title > 60 chars or description > 160 chars.
 *
 * Asserts (build fails on overflow):
 *   - All <title>/metaTitle strings ≤ 60 chars
 *   - All <meta description>/metaDescription strings ≤ 160 chars
 *
 * Scans static metadata strings only (literal text in TS files).
 * Cannot detect dynamic strings produced by generateMetadata() functions —
 * those need runtime inspection or a separate post-build check.
 *
 * Skip with: SKIP_META_LENGTH=1 npm run build
 *
 * Adapted from Vitrums port (27 Apr 2026):
 *   - SteelR has no `src/data/local-product-content.ts` (Vitrums-specific
 *     1,080-page generator); replaced with `src/data/doors.ts` (60 collection
 *     doors).
 *   - `src/data/locations/*.ts` deliberately NOT scanned: SteelR's Location
 *     interface uses `description` as a long-form body-prose field consumed by
 *     the area page renderer, not as a `<meta description>` (the runtime
 *     generateMetadata() at `src/app/areas/[slug]/page.tsx` produces the meta
 *     dynamically). Including the folder produces ~70 false-positive overflows.
 *
 * NOTE: this validator is currently NOT wired into the prebuild hook
 * because the project has a known backlog of over-length descriptions
 * (cross-project audit 27 Apr 2026 flagged 22 on SteelR).
 * Run manually with `node scripts/checks/meta-length.mjs` to see the list.
 * Wire into prebuild only AFTER the backlog is cleared in a follow-up.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");

if (process.env.SKIP_META_LENGTH === "1") {
  console.log("[meta-length] SKIP_META_LENGTH=1 — bypassed");
  process.exit(0);
}

const TITLE_MAX = 60;
const DESC_MAX = 160;
const errors = [];
let scanned = 0;
let filesScanned = 0;

function checkFile(p) {
  const content = fs.readFileSync(p, "utf8");
  // Multi-line aware: SteelR blog posts wrap `description:` onto the next line.
  const descMatches = [...content.matchAll(/(?:metaDescription|description)\s*:\s*[\r\n\s]*['"`]([^'"`]+)['"`]/g)];
  const titleMatches = [...content.matchAll(/(?:metaTitle|title)\s*:\s*[\r\n\s]*['"`]([^'"`]+)['"`]/g)];
  for (const m of descMatches) {
    scanned++;
    if (m[1].length > DESC_MAX) {
      errors.push(`${path.relative(ROOT, p)}: description ${m[1].length} chars (>${DESC_MAX}): "${m[1].slice(0, 80)}..."`);
    }
  }
  for (const m of titleMatches) {
    scanned++;
    if (m[1].length > TITLE_MAX) {
      errors.push(`${path.relative(ROOT, p)}: title ${m[1].length} chars (>${TITLE_MAX}): "${m[1]}"`);
    }
  }
  filesScanned++;
}

// Static-data candidate files (single-file scans)
const candidates = [
  path.join(ROOT, "src/data/products.ts"),
  path.join(ROOT, "src/data/doors.ts"),
];
for (const c of candidates) {
  if (fs.existsSync(c)) checkFile(c);
}

// Blog posts directory
const blogDir = path.join(ROOT, "src/data/blog/posts");
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith(".ts") && !f.endsWith(".d.ts")).sort();
  for (const f of blogFiles) checkFile(path.join(blogDir, f));
}

// SteelR locations folder NOT scanned — see docblock for rationale.

console.log(`[meta-length] scanned ${scanned} title/description fields across ${filesScanned} files`);

if (errors.length > 0) {
  console.error(`[meta-length] FAIL — ${errors.length} over-length fields:`);
  for (const e of errors) console.error("  -", e);
  console.error(
    "\nTrim to ≤60 chars (titles) and ≤160 chars (descriptions). Skip temporarily: SKIP_META_LENGTH=1 npm run build"
  );
  process.exit(1);
}
console.log("[meta-length] PASS");
process.exit(0);
