/**
 * Ping Google to re-crawl the sitemap after a new blog post is published.
 */
const SITEMAP_URL = "https://steelr.co.uk/sitemap.xml";
const PING_URL = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;

async function main() {
  console.log(`Pinging Google: ${PING_URL}`);
  const res = await fetch(PING_URL);
  if (res.ok) {
    console.log(`Success: Google acknowledged sitemap ping (${res.status})`);
  } else {
    console.warn(`Warning: Google returned ${res.status} — sitemap will still be crawled on schedule`);
  }
}

main().catch((err) => {
  console.warn("Ping failed (non-critical):", err.message);
});
