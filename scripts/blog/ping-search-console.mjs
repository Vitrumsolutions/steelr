/**
 * Notifies search engines that the sitemap has been updated.
 *
 * Google deprecated their sitemap ping endpoint in June 2023, so we use
 * IndexNow (supported by Bing, Yandex, Seznam, Naver) which Microsoft
 * pushes hard. Google still picks up new pages within 24-48h via normal
 * crawling — the dynamic sitemap auto-includes new posts on deploy.
 *
 * To enable IndexNow, generate a key at https://www.bing.com/indexnow
 * and host it at https://steelr.co.uk/{key}.txt, then set INDEXNOW_KEY
 * in scripts/blog/.indexnow-key (gitignored) or as env var.
 */
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY_FILE = join(__dirname, ".indexnow-key");

const HOST = "steelr.co.uk";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

function getKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY;
  if (existsSync(KEY_FILE)) return readFileSync(KEY_FILE, "utf8").trim();
  return null;
}

async function getLatestPostUrl() {
  // Read the calendar to find the most recently published entry
  try {
    const calendar = JSON.parse(
      readFileSync(join(__dirname, "content-calendar.json"), "utf8")
    );
    const published = calendar
      .filter((e) => e.published)
      .sort((a, b) => (a.scheduledDate < b.scheduledDate ? 1 : -1));
    if (published[0]) {
      return `https://${HOST}/blog/${published[0].slug}`;
    }
  } catch (err) {
    console.warn("Could not read calendar:", err.message);
  }
  return null;
}

async function main() {
  const key = getKey();
  const latestUrl = await getLatestPostUrl();

  if (!key) {
    console.log("IndexNow key not configured — skipping ping.");
    console.log("Google will pick up new content via normal crawling (24-48h).");
    console.log(`Sitemap: ${SITEMAP_URL}`);
    if (latestUrl) console.log(`Latest post: ${latestUrl}`);
    return;
  }

  const urlList = [SITEMAP_URL];
  if (latestUrl) urlList.push(latestUrl);

  const body = {
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    if (res.ok || res.status === 202) {
      console.log(`IndexNow: notified ${urlList.length} URLs (${res.status})`);
    } else {
      console.warn(`IndexNow returned ${res.status} — non-fatal`);
    }
  } catch (err) {
    console.warn("IndexNow ping failed (non-critical):", err.message);
  }
}

main().catch((err) => {
  console.warn("Ping failed (non-critical):", err.message);
});
