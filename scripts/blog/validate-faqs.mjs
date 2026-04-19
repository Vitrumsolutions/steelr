/**
 * Validate FAQ extraction across all blog posts.
 *
 * Fails (exit 1) when any post has an "## Frequently Asked Questions"
 * heading but the runtime extractor would produce zero Q&A pairs —
 * i.e. the FAQPage schema on that canonical URL would be silently empty.
 * Also flags posts with no FAQ heading at all (as info, not failure).
 *
 * Intended to run in CI / before deploy so author drift does not
 * silently break AI-citation schema.
 *
 * Usage: node scripts/blog/validate-faqs.mjs
 */
import { readdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { buildExcerptFromPostFile } from "./llms-excerpt.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const POSTS_DIR = join(ROOT, "src/data/blog/posts");

const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".ts")).sort();
const broken = [];
const missing = [];
const ok = [];

for (const f of files) {
  const filePath = join(POSTS_DIR, f);
  try {
    const { excerpt } = buildExcerptFromPostFile(filePath, "https://example.com");
    const hasFaqHeading =
      /\n## (?:Frequently Asked Questions|FAQ[s]?|Common Questions[^\n]*)/.test(
        readFileSync(filePath, "utf8")
      );
    const extractedAny = /^Q: /m.test(excerpt);

    if (hasFaqHeading && !extractedAny) {
      broken.push(f);
    } else if (!hasFaqHeading) {
      missing.push(f);
    } else {
      ok.push(f);
    }
  } catch (err) {
    broken.push(`${f} (parse error: ${err.message})`);
  }
}

console.log(`\nFAQ validation:`);
console.log(`  OK (FAQ section + schema will emit):   ${ok.length}`);
console.log(`  MISSING (no FAQ section, no schema):   ${missing.length}`);
console.log(`  BROKEN (FAQ section but 0 extracted):  ${broken.length}`);

if (missing.length > 0) {
  console.log(`\nPosts with no FAQ section (not a build failure, but flagged for content work):`);
  for (const f of missing) console.log(`  - ${f.replace(/\.ts$/, "")}`);
}

if (broken.length > 0) {
  console.error(`\n[BUILD FAILURE] Posts with broken FAQ extraction:`);
  for (const f of broken) console.error(`  - ${f}`);
  console.error(`\nThese posts have a FAQ heading but the extractor returned zero Q&A pairs.`);
  console.error(`Their canonical pages will emit no FAQPage schema. Fix the FAQ format.`);
  console.error(`Supported formats inside "## Frequently Asked Questions":`);
  console.error(`  - "### Question?" followed by answer paragraph`);
  console.error(`  - "**Question?**" followed by answer paragraph`);
  process.exit(1);
}

console.log(`\nNo broken FAQ extractions. Build can proceed.`);
