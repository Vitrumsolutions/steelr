/**
 * Validate FAQ extraction across all blog posts.
 *
 * Fails (exit 1) when any post has a FAQ-like heading but the extractor
 * returns zero Q&A pairs — i.e. the FAQPage schema on that canonical URL
 * would be silently empty.
 *
 * Non-failing: lists posts with no FAQ heading as a content-work backlog.
 *
 * Usage: node scripts/blog/validate-faqs.mjs
 */
import { readdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readPostMeta } from "./llms-excerpt.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const POSTS_DIR = join(ROOT, "src/data/blog/posts");

// Access the unexported extractFaqs via buildCategoryClusteredSection's
// output parsing. Simpler: re-read each file and rely on a signal that
// FAQ content made it into the excerpt.
import { buildCategoryClusteredSection } from "./llms-excerpt.mjs";

const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".ts")).sort();
const broken = [];
const missing = [];
const ok = [];

const metas = files.map((f) => readPostMeta(join(POSTS_DIR, f), "https://example.com"));
const section = buildCategoryClusteredSection(metas);

for (const meta of metas) {
  const hasFaqHeading =
    /\n## (?:Frequently Asked Questions|FAQ[s]?|Common Questions[^\n]*)/.test(meta.content);
  // Find this post's excerpt block within the section and check for a FAQ line.
  const urlLine = `URL: ${meta.url}`;
  const urlIdx = section.indexOf(urlLine);
  if (urlIdx < 0) {
    broken.push(`${meta.slug} (not emitted in excerpt section)`);
    continue;
  }
  const after = section.slice(urlIdx);
  const nextHeaderIdx = after.indexOf("\n#### ");
  const blockEnd = nextHeaderIdx >= 0 ? nextHeaderIdx : after.length;
  const block = after.slice(0, blockEnd);
  const extractedAny = /\*\*FAQs:\*\*/.test(block);

  if (hasFaqHeading && !extractedAny) {
    broken.push(meta.slug);
  } else if (!hasFaqHeading) {
    missing.push(meta.slug);
  } else {
    ok.push(meta.slug);
  }
}

console.log(`\nFAQ validation:`);
console.log(`  OK (FAQ section + schema will emit):   ${ok.length}`);
console.log(`  MISSING (no FAQ section, no schema):   ${missing.length}`);
console.log(`  BROKEN (FAQ section but 0 extracted):  ${broken.length}`);

if (missing.length > 0) {
  console.log(`\nPosts with no FAQ section (content-work backlog, not a build failure):`);
  for (const slug of missing) console.log(`  - ${slug}`);
}

if (broken.length > 0) {
  console.error(`\n[BUILD FAILURE] Posts with broken FAQ extraction:`);
  for (const s of broken) console.error(`  - ${s}`);
  console.error(`\nThese posts have a FAQ heading but the extractor returned zero Q&A pairs.`);
  console.error(`Fix the FAQ format. Supported inside "## Frequently Asked Questions":`);
  console.error(`  - "### Question?" followed by answer paragraph`);
  console.error(`  - "**Question?**" followed by answer paragraph`);
  console.error(`  - "**Question?** Answer" on the same line`);
  process.exit(1);
}

console.log(`\nNo broken FAQ extractions. Build can proceed.`);
