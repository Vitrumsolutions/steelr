#!/usr/bin/env node
/**
 * Reconcile the GSC Indexing API tracker against the live sitemap.
 *
 * Problem this fixes:
 *   When a new page is added to src/app/sitemap.ts, the page reaches the live
 *   sitemap.xml but does NOT auto-enrol in the GSC Indexing API tracker queue.
 *   Result: new pages stay "URL unknown to Google" for weeks until manually
 *   discovered via spot-audit (the May 11 perfection audit found 5 such pages).
 *
 * What this script does:
 *   1. Fetches live https://steelr.co.uk/sitemap.xml (canonical truth)
 *   2. Reads vitrums/audit-data/gsc-indexing-tracker-steelr.json
 *   3. Computes 3 sets:
 *      - active = submitted ∩ sitemap (correctly submitted, in live sitemap)
 *      - orphans = submitted − sitemap (URLs removed from sitemap; renamed/deleted pages)
 *      - dark = sitemap − submitted (URLs in sitemap but never submitted — these need pushing)
 *   4. Adds all dark URLs to the queue (if not already there)
 *   5. Updates totalPages to match the live sitemap count
 *   6. Logs orphans for review (does NOT remove them — they may have been submitted
 *      intentionally before the sitemap shrunk; manual decision)
 *
 * Recommended cron: run before the existing submit_indexing.py daily 07:30 UK
 * cron so any net-new sitemap URLs are queued for that day's push.
 *
 * Usage:
 *   node scripts/audit/reconcile-indexing-tracker.mjs            # apply changes
 *   node scripts/audit/reconcile-indexing-tracker.mjs --dry-run  # report only
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const TRACKER_PATH = resolve("../vitrums/audit-data/gsc-indexing-tracker-steelr.json");
const SITEMAP_URL = "https://steelr.co.uk/sitemap.xml";
const dryRun = process.argv.includes("--dry-run");

// Fetch live sitemap
async function fetchSitemap() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
}

const sitemap = await fetchSitemap();

let tracker;
try {
  tracker = JSON.parse(readFileSync(TRACKER_PATH, "utf8"));
} catch (err) {
  console.error(`Cannot read tracker at ${TRACKER_PATH}:`, err.message);
  process.exit(1);
}

const submitted = new Set(tracker.submitted || []);
const queueBefore = new Set(tracker.queue || []);

const active = new Set([...submitted].filter((u) => sitemap.has(u)));
const orphans = [...submitted].filter((u) => !sitemap.has(u)).sort();
const dark = [...sitemap].filter((u) => !submitted.has(u) && !queueBefore.has(u)).sort();

console.log(`Live sitemap: ${sitemap.size} URLs`);
console.log(`Tracker submitted: ${submitted.size} URLs`);
console.log(`Tracker queue (before): ${queueBefore.size} URLs`);
console.log(`Tracker totalPages (before): ${tracker.totalPages}`);
console.log();
console.log(`Active (submitted ∩ sitemap): ${active.size}`);
console.log(`Orphans (submitted but not in sitemap): ${orphans.length}`);
console.log(`Dark (in sitemap but never submitted): ${dark.length}`);
console.log();

if (dark.length > 0) {
  console.log("DARK URLs (will be added to queue):");
  for (const u of dark) console.log(`  ${u}`);
  console.log();
}

if (orphans.length > 0) {
  console.log("ORPHAN URLs (in submitted[] but not in sitemap — review manually, NOT auto-removed):");
  for (const u of orphans) console.log(`  ${u}`);
  console.log();
}

if (dryRun) {
  console.log("--- DRY RUN: no changes written. ---");
  process.exit(0);
}

if (dark.length === 0 && tracker.totalPages === sitemap.size) {
  console.log("Tracker is reconciled. No changes needed.");
  process.exit(0);
}

// Apply reconciliation
const newQueue = [...queueBefore, ...dark];
tracker.queue = newQueue;
tracker.totalPages = sitemap.size;
tracker.lastReconciledAt = new Date().toISOString();

writeFileSync(TRACKER_PATH, JSON.stringify(tracker, null, 2) + "\n", "utf8");

console.log(`Wrote tracker:`);
console.log(`  queue: ${queueBefore.size} → ${newQueue.length}`);
console.log(`  totalPages: → ${sitemap.size}`);
console.log(`  lastReconciledAt: ${tracker.lastReconciledAt}`);
console.log();
console.log(`Next step: run submit_indexing.py from vitrums/audit-data/ to push the queue.`);
