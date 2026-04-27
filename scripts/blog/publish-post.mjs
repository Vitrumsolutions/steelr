/**
 * Blog publisher for steelr.co.uk
 * Moves staged posts to active when their scheduled date arrives.
 * No API calls — posts are pre-generated.
 *
 * Usage: node scripts/blog/publish-post.mjs
 */
import { readFileSync, writeFileSync, readdirSync, renameSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  readAllPostMetas,
  buildCategoryClusteredSection,
  writeBlogExcerptsSection,
} from "./llms-excerpt.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const CALENDAR_PATH = join(__dirname, "content-calendar.json");
const STAGED_DIR = join(ROOT, "src/data/blog/staged");
const POSTS_DIR = join(ROOT, "src/data/blog/posts");
const INDEX_PATH = join(ROOT, "src/data/blog/index.ts");

function slugToCamelCase(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

async function main() {
  const calendar = JSON.parse(readFileSync(CALENDAR_PATH, "utf8"));
  const today = new Date().toISOString().split("T")[0];

  // Find all unpublished entries due today or earlier
  const dueEntries = calendar.filter(
    (e) => !e.published && e.scheduledDate <= today
  );

  if (dueEntries.length === 0) {
    console.log("No posts due for publishing today.");
    process.exit(0);
  }

  // Publish one post at a time (cron runs Tue/Thu so usually just 1)
  const entry = dueEntries[0];
  const stagedFile = join(STAGED_DIR, `${entry.slug}.ts`);

  if (!existsSync(stagedFile)) {
    console.error(`ERROR: Staged file not found: ${stagedFile}`);
    console.error("Generate this post first, then retry.");
    process.exit(1);
  }

  console.log(`Publishing: "${entry.titleHint}" (${entry.slug})`);

  // 1. Move file from staged/ to posts/
  const targetFile = join(POSTS_DIR, `${entry.slug}.ts`);
  renameSync(stagedFile, targetFile);
  console.log(`  Moved: staged/${entry.slug}.ts → posts/${entry.slug}.ts`);

  // 2. Fix the import path in the moved file (../types → ../types still works, same depth)
  // No change needed — staged/ and posts/ are siblings under blog/

  // 3. Update index.ts — add import and array entry
  let indexContent = readFileSync(INDEX_PATH, "utf8");
  const varName = slugToCamelCase(entry.slug);
  const importLine = `import ${varName} from "./posts/${entry.slug}";`;

  // Add import after the last existing import line (before the blank line / posts array)
  // Find the last import line and append after it
  const lastImportIdx = indexContent.lastIndexOf("\nimport ");
  const nextNewline = indexContent.indexOf("\n", lastImportIdx + 1);
  indexContent =
    indexContent.slice(0, nextNewline + 1) +
    importLine +
    "\n" +
    indexContent.slice(nextNewline + 1);

  // Add entry to the posts array — handle both ].sort(...) and ]; patterns
  const arrayClosePattern = /\n\]\.sort\(/;
  const simpleClosePattern = /\n\];/;
  if (arrayClosePattern.test(indexContent)) {
    indexContent = indexContent.replace(
      arrayClosePattern,
      `\n  ${varName},\n].sort(`
    );
  } else if (simpleClosePattern.test(indexContent)) {
    indexContent = indexContent.replace(
      simpleClosePattern,
      `\n  ${varName},\n];`
    );
  } else {
    console.error("  WARNING: Could not find array closing pattern in index.ts — manual fix needed");
  }

  writeFileSync(INDEX_PATH, indexContent);
  console.log("  Updated: index.ts");

  // 4. Mark as published in calendar
  entry.published = true;
  writeFileSync(CALENDAR_PATH, JSON.stringify(calendar, null, 2) + "\n");
  console.log("  Updated: content-calendar.json");

  // 5. Update llms.txt — append blog to Key Pages section
  const LLMS_PATH = join(ROOT, "public/llms.txt");
  if (existsSync(LLMS_PATH)) {
    let llms = readFileSync(LLMS_PATH, "utf8");
    const blogLine = `- [${entry.titleHint}](https://steelr.co.uk/blog/${entry.slug})`;
    if (!llms.includes(entry.slug)) {
      // Add before the closing line or at the end of Key Pages
      const keyPagesEnd = llms.lastIndexOf("\n- [");
      if (keyPagesEnd > -1) {
        const insertAt = llms.indexOf("\n", keyPagesEnd + 1);
        llms = llms.slice(0, insertAt) + "\n" + blogLine + llms.slice(insertAt);
      } else {
        llms += "\n" + blogLine + "\n";
      }
      writeFileSync(LLMS_PATH, llms);
      console.log("  Updated: llms.txt");
    }
  }

  // 6. Rebuild the Blog Excerpts section in llms-full.txt so the new post
  // is clustered into its category and Related links across all posts stay
  // accurate. Cheap: full rebuild runs in well under a second.
  const LLMS_FULL_PATH = join(ROOT, "public/llms-full.txt");
  if (existsSync(LLMS_FULL_PATH)) {
    try {
      const metas = readAllPostMetas(POSTS_DIR, "https://steelr.co.uk");
      const section = buildCategoryClusteredSection(metas);
      writeBlogExcerptsSection(LLMS_FULL_PATH, section);
      console.log("  Rebuilt: llms-full.txt (Blog Excerpts)");
    } catch (err) {
      console.warn(`  WARNING: could not rebuild Blog Excerpts: ${err.message}`);
    }
  }

  // 7. Ping IndexNow so Bing, Yandex, Seznam and Naver pick up the new post
  // within minutes instead of waiting for the next sitemap re-crawl. Non-fatal
  // on failure: indexing is a nice-to-have, not a publish gate.
  const INDEXNOW_KEY = "ddec116ea2aa00b39d11cca95f17bb9a";
  const blogUrl = `https://steelr.co.uk/blog/${entry.slug}`;
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "steelr.co.uk",
        key: INDEXNOW_KEY,
        keyLocation: `https://steelr.co.uk/${INDEXNOW_KEY}.txt`,
        urlList: [blogUrl],
      }),
    });
    if (res.status === 200 || res.status === 202) {
      console.log(`  IndexNow: ${res.status} OK for ${blogUrl}`);
    } else {
      console.warn(`  IndexNow: HTTP ${res.status} (non-fatal)`);
    }
  } catch (err) {
    console.warn(`  IndexNow: ${err.message} (non-fatal)`);
  }

  // 8. Log the URL so the Indexing API workflow step (in publish-blog.yml)
  // can pick it up. We write the freshly-published URL to a file the next
  // step reads. This decouples the Node and Python halves of the pipeline.
  const PUBLISHED_URL_FILE = join(ROOT, ".published-url.txt");
  try {
    writeFileSync(PUBLISHED_URL_FILE, blogUrl + "\n");
    console.log(`  Wrote published URL to ${PUBLISHED_URL_FILE} for downstream Indexing API step`);
  } catch (err) {
    console.warn(`  Could not write ${PUBLISHED_URL_FILE}: ${err.message} (non-fatal)`);
  }

  console.log(`\nDone! Published: ${entry.slug}`);
}

main().catch((err) => {
  console.error("Publish failed:", err.message);
  process.exit(1);
});
