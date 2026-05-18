import { fetchText } from "./utils.mjs";
import { SITE_ORIGIN, INTEGRITY_FILES, THRESHOLDS } from "./config.mjs";

export async function runIntegrityCheck(priorState = {}) {
  const findings = [];
  const state = {};

  for (const file of INTEGRITY_FILES) {
    const url = SITE_ORIGIN + file.path;
    try {
      const res = await fetchText(url);

      if (!res.ok) {
        findings.push({
          severity: "alert",
          watcher: "integrity-check",
          path: file.path,
          message: `HTTP ${res.status}`,
        });
        continue;
      }

      if (res.bytes < file.minBytes) {
        findings.push({
          severity: "alert",
          watcher: "integrity-check",
          path: file.path,
          message: `byte size ${res.bytes} below floor ${file.minBytes}`,
        });
      }

      if (file.mustContain && !res.text.includes(file.mustContain)) {
        findings.push({
          severity: "alert",
          watcher: "integrity-check",
          path: file.path,
          message: `expected marker "${file.mustContain}" not present`,
        });
      }

      const prior = priorState[file.path];
      if (prior?.bytes) {
        const shrinkPct = ((prior.bytes - res.bytes) / prior.bytes) * 100;
        if (shrinkPct >= THRESHOLDS.llmsFileShrinkPct) {
          findings.push({
            severity: "alert",
            watcher: "integrity-check",
            path: file.path,
            message: `file shrunk ${shrinkPct.toFixed(1)}% (${prior.bytes} -> ${res.bytes} bytes)`,
          });
        }
      } else {
        findings.push({
          severity: "ok",
          watcher: "integrity-check",
          path: file.path,
          message: `baseline: ${res.bytes} bytes`,
        });
      }

      state[file.path] = { bytes: res.bytes, hash: res.hash };
    } catch (err) {
      findings.push({
        severity: "alert",
        watcher: "integrity-check",
        path: file.path,
        message: `fetch failed: ${err.message}`,
      });
    }
  }

  return { findings, state };
}
