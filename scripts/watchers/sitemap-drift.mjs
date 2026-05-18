import { fetchText } from "./utils.mjs";
import { SITE_ORIGIN, THRESHOLDS } from "./config.mjs";

function extractUrls(xml) {
  return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
}

export async function runSitemapDrift(priorState = {}) {
  const findings = [];
  const url = `${SITE_ORIGIN}/sitemap.xml`;

  try {
    const res = await fetchText(url);
    if (!res.ok) {
      findings.push({
        severity: "alert",
        watcher: "sitemap-drift",
        path: "/sitemap.xml",
        message: `HTTP ${res.status}`,
      });
      return { findings, state: {} };
    }

    const urls = extractUrls(res.text);
    const currentCount = urls.length;
    const prior = priorState.sitemap || {};
    const priorCount = prior.urlCount;
    const priorUrlSet = new Set(prior.urls || []);
    const currentUrlSet = new Set(urls);

    const newUrls = urls.filter((u) => !priorUrlSet.has(u));
    const droppedUrls = (prior.urls || []).filter((u) => !currentUrlSet.has(u));

    if (priorCount === undefined) {
      findings.push({
        severity: "ok",
        watcher: "sitemap-drift",
        path: "/sitemap.xml",
        message: `baseline captured: ${currentCount} URLs`,
      });
    } else {
      const dropPct = priorCount > 0 ? ((priorCount - currentCount) / priorCount) * 100 : 0;
      if (dropPct >= THRESHOLDS.sitemapUrlDropPct) {
        findings.push({
          severity: "alert",
          watcher: "sitemap-drift",
          path: "/sitemap.xml",
          message: `URL count dropped ${dropPct.toFixed(1)}% (${priorCount} -> ${currentCount})`,
          details: { droppedUrls: droppedUrls.slice(0, 20) },
        });
      } else if (currentCount !== priorCount) {
        findings.push({
          severity: "info",
          watcher: "sitemap-drift",
          path: "/sitemap.xml",
          message: `URL count: ${priorCount} -> ${currentCount} (+${newUrls.length}, -${droppedUrls.length})`,
          details: { added: newUrls.slice(0, 10), removed: droppedUrls.slice(0, 10) },
        });
      }
    }

    return {
      findings,
      state: { sitemap: { urlCount: currentCount, urls } },
    };
  } catch (err) {
    findings.push({
      severity: "alert",
      watcher: "sitemap-drift",
      path: "/sitemap.xml",
      message: `fetch failed: ${err.message}`,
    });
    return { findings, state: {} };
  }
}
