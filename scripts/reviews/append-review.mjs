#!/usr/bin/env node
/**
 * append-review.mjs — adds a new SteelR Google review to src/data/reviews.ts.
 *
 * Usage:
 *   node scripts/reviews/append-review.mjs "review text" "Author Name"
 *   node scripts/reviews/append-review.mjs "review text" "Author Name" --highlight
 *   node scripts/reviews/append-review.mjs "review text" "Author Name" --rating 4
 *
 * The --highlight flag pins to a future homepage 3-card strip. Only keep 3
 * highlighted at a time — if you pass --highlight, the oldest highlighted
 * review will be auto-unhighlighted to make room.
 *
 * The --rating flag overrides the default 5 stars.
 *
 * Rewrites reviews.ts in-place. Commit the change and push to deploy.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REVIEWS_FILE = resolve(__dirname, "..", "..", "src", "data", "reviews.ts");

function usage() {
  console.error(
    'Usage: node scripts/reviews/append-review.mjs "text" "Author Name" [--highlight] [--rating N]'
  );
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 2) usage();

const text = args[0];
const name = args[1];
const highlight = args.includes("--highlight");

let rating = 5;
const ratingFlagIdx = args.indexOf("--rating");
if (ratingFlagIdx !== -1 && args[ratingFlagIdx + 1]) {
  const r = parseInt(args[ratingFlagIdx + 1], 10);
  if (r >= 1 && r <= 5) rating = r;
}

if (!text || !name) usage();

// Escape for TypeScript string literal embedded with double quotes
function esc(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\u2019/g, "\\u2019")
    .replace(/\u2018/g, "\\u2018")
    .replace(/\u201c/g, "\\u201c")
    .replace(/\u201d/g, "\\u201d");
}

const today = new Date().toISOString().slice(0, 10);

const block = `  {
    text: "${esc(text)}",
    name: "${esc(name)}",
    date: "${today}",
    rating: ${rating},${highlight ? "\n    highlight: true," : ""}
  },
`;

let source = readFileSync(REVIEWS_FILE, "utf8");

// If highlight requested, strip the oldest highlight: true (first encountered)
if (highlight) {
  const firstHighlightIdx = source.indexOf("    highlight: true,\n");
  if (firstHighlightIdx !== -1) {
    source =
      source.slice(0, firstHighlightIdx) +
      source.slice(firstHighlightIdx + "    highlight: true,\n".length);
    console.log("\u2022 Removed oldest highlight to keep exactly 3 on homepage");
  }
}

// Find the reviews array (handles both empty single-line `[]` and multi-line)
const arrayCloseRegex = /export const reviews: Review\[\] = \[([\s\S]*?)\];/;
const match = source.match(arrayCloseRegex);

if (!match) {
  console.error("Could not find reviews array in reviews.ts \u2014 aborting");
  process.exit(1);
}

const before = source.slice(0, match.index);
const arrayBody = match[1];
const after = source.slice(match.index + match[0].length);

// If empty, just insert the block. Otherwise preserve existing entries.
const trimmedBody = arrayBody.trim();
const newArrayBody =
  trimmedBody === ""
    ? `\n${block.trimEnd()}\n`
    : `${arrayBody.replace(/\n$/, "")}\n${block.trimEnd()}\n`;
const updated =
  before +
  `export const reviews: Review[] = [${newArrayBody}];` +
  after;

writeFileSync(REVIEWS_FILE, updated, "utf8");

console.log(
  `\u2713 Appended review from "${name}" (${today}, ${rating} stars)${highlight ? " \u2014 pinned" : ""}`
);
console.log(
  `\nNext: git add src/data/reviews.ts && git commit -m "reviews: add review from ${name}" && git push`
);
