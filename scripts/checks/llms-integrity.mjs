#!/usr/bin/env node
/**
 * llms-integrity.mjs — fails the build if public/llms-full.txt content
 * drifts from underlying data sources.
 *
 * Run on `prebuild` hook. Exits 1 on drift, 0 on pass.
 *
 * Asserts (build fails on drift):
 *   1. Review count in llms-full.txt matches src/data/reviews.ts review array length.
 *      Skipped gracefully when reviews array is empty (current SteelR state — GBP
 *      has 0 reviews as of 25 Apr 2026; check activates automatically once the
 *      first real review is appended).
 *   2. House-style hard-fail: `public/llms-full.txt` must contain zero exclamation
 *      marks. SteelR brand rule (CLAUDE.md "House Style for AI and Brand Copy"):
 *      "No exclamation marks anywhere in SteelR copy. Premium understated tone."
 *      llms-full.txt is the single highest-leverage AI-citation surface — house
 *      style there is non-negotiable.
 *
 * Logs (info only — never fails the build):
 *   - Review count source-of-truth (reviews.ts, may be 0)
 *   - Blog post count (src/data/blog/posts/ file count)
 *   - Area region file count (src/data/locations/ folder, excluding index.ts/types.ts)
 *
 * Adapted from Vitrums port (27 Apr 2026):
 *   - reviews.ts: SteelR's array is currently empty; review-count assertion
 *     skips when totalReviews === 0 instead of erroring.
 *   - Brand "Ltd" check removed: SteelR has no equivalent "limit Ltd mentions"
 *     rule (separate brand-guard.mjs handles SteelR's banned-word policy on
 *     production source files; llms-full.txt is excluded from brand-guard).
 *   - Locations are a folder (17 region files), not a single file — counted.
 *   - Em/en-dash check intentionally omitted: existing SteelR llms-full.txt
 *     legitimately uses dashes in dictionary-style technical glossary entries
 *     (e.g. "BS EN 1627 — European standard...") and adding a hard ban would
 *     produce false positives. Exclamation marks have no such legitimate use.
 *   - Slug-region drift check omitted (TODO): the 22 Apr audit found 6 slugs
 *     placed in the wrong region in the "Full Area Page Listing" section.
 *     Asserting that requires parsing the listing block AND each region file
 *     in src/data/locations/, which is out of scope for v1. Track separately.
 *
 * Skip with: SKIP_LLMS_INTEGRITY=1 npm run build
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");

if (process.env.SKIP_LLMS_INTEGRITY === "1") {
  console.log("[llms-integrity] SKIP_LLMS_INTEGRITY=1 — bypassed");
  process.exit(0);
}

const errors = [];

// Source of truth: reviews.ts
// SteelR's reviews.ts currently exports an empty array (`export const reviews: Review[] = [];`).
// The export `totalReviews = reviews.length` is computed at runtime, so we can't
// rely on a literal integer match. Instead, count review object entries by counting
// top-level `^  {` lines inside the reviews array (each review = one such line).
const reviewsPath = path.join(ROOT, "src/data/reviews.ts");
let totalReviews = 0;
let reviewsAvailable = false;

if (fs.existsSync(reviewsPath)) {
  const reviewsTs = fs.readFileSync(reviewsPath, "utf8");
  const reviewMatches = reviewsTs.match(/^  \{$/gm);
  totalReviews = reviewMatches ? reviewMatches.length : 0;
  reviewsAvailable = true;
}

// Source of truth: blog posts directory
const blogDir = path.join(ROOT, "src/data/blog/posts");
const blogCount = fs.existsSync(blogDir)
  ? fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".ts") && !f.endsWith(".d.ts"))
      .sort().length
  : 0;

// Source of truth: locations folder (SteelR uses 17 region files, not a single file)
const locationsDir = path.join(ROOT, "src/data/locations");
const areaFileCount = fs.existsSync(locationsDir)
  ? fs
      .readdirSync(locationsDir)
      .filter(
        (f) =>
          f.endsWith(".ts") &&
          !f.endsWith(".d.ts") &&
          f !== "index.ts" &&
          f !== "types.ts"
      ).length
  : 0;

// Read llms-full.txt
const llmsFullPath = path.join(ROOT, "public/llms-full.txt");
if (!fs.existsSync(llmsFullPath)) {
  console.error("[llms-integrity] FAIL: public/llms-full.txt not found");
  process.exit(1);
}
const llmsFull = fs.readFileSync(llmsFullPath, "utf8");

// Check 1: review count (skip when reviews array is empty)
if (totalReviews > 0) {
  // Look for any phrase like "N reviews" / "N review" in llms-full.txt and compare to totalReviews.
  // Filter to plausibly-meant-review counts (5..100) so we don't false-positive on
  // generic phrases like "1 review" inside a quote.
  const reviewCountMatches = [...llmsFull.matchAll(/(\d+)\s+reviews?\b/gi)].map((m) => parseInt(m[1], 10));
  const wrongReviews = reviewCountMatches.filter((n) => n !== totalReviews && n > 5 && n < 100);
  for (const n of wrongReviews) {
    errors.push(
      `llms-full.txt mentions "${n} reviews" but src/data/reviews.ts has ${totalReviews} review entries`
    );
  }
} else if (reviewsAvailable) {
  // Reviews file exists but is empty — soft note (no fail).
  // Once the first review lands and totalReviews > 0, this branch flips to enforcement.
  console.log("[llms-integrity] reviews.ts is empty (0 reviews) — review-count check skipped");
}

// Check 2: SteelR house-style — no exclamation marks in llms-full.txt
// Brand rule from CLAUDE.md: "No exclamation marks anywhere in SteelR copy. Premium understated tone."
// llms-full.txt is the highest-risk AI-citation surface — exclamation marks here leak into
// AI engine quotes and break the premium tone everywhere SteelR is cited.
const exclamationCount = (llmsFull.match(/!/g) || []).length;
if (exclamationCount > 0) {
  errors.push(
    `llms-full.txt contains ${exclamationCount} exclamation mark${exclamationCount === 1 ? "" : "s"}. SteelR house style: no exclamation marks in any copy (CLAUDE.md "House Style for AI and Brand Copy").`
  );
}

// Info-only (no fail)
console.log(
  `[llms-integrity] reviews=${totalReviews} | blog posts=${blogCount} | area region files=${areaFileCount}`
);

if (errors.length > 0) {
  console.error("[llms-integrity] FAIL");
  for (const e of errors) console.error("  -", e);
  console.error(
    "\nFix the drift in public/llms-full.txt then re-run. To bypass temporarily: SKIP_LLMS_INTEGRITY=1 npm run build"
  );
  process.exit(1);
}
console.log("[llms-integrity] PASS");
process.exit(0);
