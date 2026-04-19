/**
 * Rebuild the "## Blog Excerpts" section in public/llms-full.txt.
 *
 * Groups posts by category, emits per-post excerpts with Key Facts
 * and Related links, overwriting any previous Blog Excerpts section.
 *
 * Usage: node scripts/blog/backfill-llms-full.mjs [--dry-run]
 */
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  readAllPostMetas,
  buildCategoryClusteredSection,
  writeBlogExcerptsSection,
} from "./llms-excerpt.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const POSTS_DIR = join(ROOT, "src/data/blog/posts");
const LLMS_FULL = join(ROOT, "public/llms-full.txt");
const SITE_URL = "https://steelr.co.uk";

const dryRun = process.argv.includes("--dry-run");

const metas = readAllPostMetas(POSTS_DIR, SITE_URL);
const section = buildCategoryClusteredSection(metas);

if (dryRun) {
  console.log(section);
  console.log(`\n--- DRY RUN ---`);
  console.log(`Posts: ${metas.length}`);
  console.log(`Size: ${section.length} bytes`);
  process.exit(0);
}

writeBlogExcerptsSection(LLMS_FULL, section);
console.log(`Rebuilt Blog Excerpts section.`);
console.log(`Posts: ${metas.length}`);
console.log(`Categories: ${new Set(metas.map((m) => m.category)).size}`);
console.log(`Section size: ${section.length} bytes`);
