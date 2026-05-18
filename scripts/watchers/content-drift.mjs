import { fetchText, wordCount, extractCanonical, extractJsonLd } from "./utils.mjs";
import { SITE_ORIGIN, WATCHED_PAGES } from "./config.mjs";

export async function runContentDrift(priorState = {}) {
  const findings = [];
  const state = {};

  for (const page of WATCHED_PAGES) {
    const url = SITE_ORIGIN + page.path;
    try {
      const res = await fetchText(url);

      if (!res.ok) {
        findings.push({
          severity: "alert",
          watcher: "content-drift",
          path: page.path,
          message: `HTTP ${res.status}`,
        });
        continue;
      }

      state[page.path] = res.hash;

      const wc = wordCount(res.text);
      if (page.minWords && wc < page.minWords) {
        findings.push({
          severity: "alert",
          watcher: "content-drift",
          path: page.path,
          message: `word count ${wc} below floor ${page.minWords}`,
          details: { wordCount: wc, floor: page.minWords, type: page.type },
        });
      }

      const canonical = extractCanonical(res.text);
      if (!canonical) {
        findings.push({
          severity: "alert",
          watcher: "content-drift",
          path: page.path,
          message: "canonical link missing",
        });
      } else if (!canonical.startsWith(SITE_ORIGIN)) {
        findings.push({
          severity: "alert",
          watcher: "content-drift",
          path: page.path,
          message: `canonical points off-site: ${canonical}`,
        });
      }

      const jsonLd = extractJsonLd(res.text);
      if (jsonLd.length === 0) {
        findings.push({
          severity: "alert",
          watcher: "content-drift",
          path: page.path,
          message: "no JSON-LD schema blocks found",
        });
      } else if (jsonLd.some((b) => b.__parseError)) {
        findings.push({
          severity: "alert",
          watcher: "content-drift",
          path: page.path,
          message: "JSON-LD parse error",
        });
      }

      const priorHash = priorState[page.path];
      if (priorHash && priorHash !== res.hash) {
        findings.push({
          severity: "info",
          watcher: "content-drift",
          path: page.path,
          message: `content hash changed (${priorHash} -> ${res.hash})`,
        });
      } else if (!priorHash) {
        findings.push({
          severity: "ok",
          watcher: "content-drift",
          path: page.path,
          message: `baseline captured (${res.hash}, ${wc} words)`,
        });
      }
    } catch (err) {
      findings.push({
        severity: "alert",
        watcher: "content-drift",
        path: page.path,
        message: `fetch failed: ${err.message}`,
      });
    }
  }

  return { findings, state };
}
