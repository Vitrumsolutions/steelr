/**
 * One-time backfill: append excerpts for every existing blog post
 * to public/llms-full.txt. Idempotent — skips slugs already present.
 *
 * Usage: node scripts/blog/backfill-llms-full.mjs [--dry-run]
 */
import { readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { buildExcerptFromPostFile, appendExcerptToLlmsFull } from "./llms-excerpt.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const POSTS_DIR = join(ROOT, "src/data/blog/posts");
const LLMS_FULL = join(ROOT, "public/llms-full.txt");
const SITE_URL = "https://steelr.co.uk";

const dryRun = process.argv.includes("--dry-run");

const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".ts")).sort();
let appended = 0;
let skipped = 0;
let errors = 0;

for (const f of files) {
  const filePath = join(POSTS_DIR, f);
  try {
    const { slug, excerpt } = buildExcerptFromPostFile(filePath, SITE_URL);
    if (dryRun) {
      console.log(`[DRY] ${slug}`);
      console.log(excerpt);
      console.log("---");
      continue;
    }
    const didAppend = appendExcerptToLlmsFull(LLMS_FULL, excerpt, slug);
    if (didAppend) {
      appended++;
      console.log(`APPENDED: ${slug}`);
    } else {
      skipped++;
      console.log(`skip: ${slug} (already present)`);
    }
  } catch (err) {
    errors++;
    console.error(`ERROR parsing ${f}: ${err.message}`);
  }
}

console.log(`\nDone. Appended: ${appended}, Skipped: ${skipped}, Errors: ${errors}`);
