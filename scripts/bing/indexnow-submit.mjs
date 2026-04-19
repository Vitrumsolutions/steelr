#!/usr/bin/env node
/**
 * indexnow-submit.mjs — push URLs to Bing + Yandex + Seznam via IndexNow.
 *
 * IndexNow is the Microsoft/Bing equivalent of Google's Indexing API: POST a
 * list of URLs to a single endpoint and participating search engines will crawl
 * them within minutes instead of weeks. Free, no daily cap for verified keys.
 *
 * Key file at /public/{KEY}.txt must be world-readable on the live domain.
 *
 * Usage:
 *   node scripts/bing/indexnow-submit.mjs              # submit ALL sitemap URLs
 *   node scripts/bing/indexnow-submit.mjs --priority   # just curated priority list
 *   node scripts/bing/indexnow-submit.mjs url1 url2    # specific URLs
 *
 * Limits: 10,000 URLs/submission. We batch 500 at a time.
 */

const KEY = "ddec116ea2aa00b39d11cca95f17bb9a";
const HOST = "steelr.co.uk";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 500;

/** Curated priority URLs for steelr — hubs, flagship products, collection. */
const PRIORITY_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/collection`,
  `https://${HOST}/collection/sidelights`,
  `https://${HOST}/about`,
  `https://${HOST}/process`,
  `https://${HOST}/contact`,
  `https://${HOST}/design-estimate`,
  `https://${HOST}/colours`,
  `https://${HOST}/security`,
  `https://${HOST}/security-specification`,
  `https://${HOST}/fire-rated-doors`,
  `https://${HOST}/blog`,
  `https://${HOST}/areas`,
  `https://${HOST}/areas/london`,
  `https://${HOST}/areas/buckinghamshire`,
  `https://${HOST}/areas/surrey`,
  `https://${HOST}/areas/hertfordshire`,
  `https://${HOST}/areas/kent`,
  `https://${HOST}/areas/essex`,
  `https://${HOST}/areas/berkshire`,
  `https://${HOST}/areas/oxfordshire`,
];

async function fetchSitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return [...new Set(urls)];
}

async function submitBatch(urlList) {
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return { status: res.status, body: await res.text() };
}

async function main() {
  const args = process.argv.slice(2);
  let urls = [];

  if (args.includes("--priority")) {
    urls = PRIORITY_URLS;
    console.log(`Using curated priority list (${urls.length} URLs)`);
  } else if (args.length && !args[0].startsWith("--")) {
    urls = args;
    console.log(`Using ${urls.length} URLs from CLI args`);
  } else {
    console.log(`Fetching sitemap from https://${HOST}/sitemap.xml ...`);
    urls = await fetchSitemapUrls();
    console.log(`Found ${urls.length} URLs in sitemap`);
  }

  if (!urls.length) {
    console.error("No URLs to submit");
    process.exit(1);
  }

  console.log(`Verifying key file at ${KEY_LOCATION} ...`);
  const keyRes = await fetch(KEY_LOCATION);
  if (!keyRes.ok) {
    console.error(`Key file not accessible (HTTP ${keyRes.status})`);
    process.exit(1);
  }
  const keyBody = (await keyRes.text()).trim();
  if (keyBody !== KEY) {
    console.error(`Key file contents mismatch. Expected ${KEY}, got ${keyBody.slice(0, 40)}`);
    process.exit(1);
  }
  console.log("\u2713 Key file verified\n");

  let ok = 0, failed = 0;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const r = await submitBatch(batch);
    if (r.status === 200 || r.status === 202) {
      ok += batch.length;
      console.log(`[${r.status}] batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} URLs submitted`);
    } else {
      failed += batch.length;
      console.error(`[${r.status}] batch ${Math.floor(i / BATCH_SIZE) + 1} FAILED: ${r.body.slice(0, 200)}`);
    }
  }

  console.log(`\n\u2713 Done. Submitted: ${ok}, failed: ${failed}`);
  console.log("Bing/Yandex/Seznam will crawl these within hours-days.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
