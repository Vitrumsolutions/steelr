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

  console.log(`\nDone! Published: ${entry.slug}`);
}

main().catch((err) => {
  console.error("Publish failed:", err.message);
  process.exit(1);
});
