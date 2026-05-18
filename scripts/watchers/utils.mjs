import { createHash } from "node:crypto";

const DEFAULT_TIMEOUT_MS = 15_000;
const USER_AGENT = "steelr-watchers/1 (+https://steelr.co.uk)";

export async function fetchWithTimeout(url, opts = {}, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...opts,
      signal: ctrl.signal,
      headers: { "User-Agent": USER_AGENT, ...(opts.headers || {}) },
    });
  } finally {
    clearTimeout(t);
  }
}

export async function fetchText(url, opts = {}) {
  const res = await fetchWithTimeout(url, opts);
  const text = await res.text();
  return {
    status: res.status,
    ok: res.ok,
    headers: Object.fromEntries(res.headers.entries()),
    bytes: Buffer.byteLength(text, "utf8"),
    text,
    hash: createHash("sha256").update(text).digest("hex").slice(0, 16),
  };
}

export function wordCount(html) {
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.split(/\s+/).filter(Boolean).length;
}

export function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

export function extractJsonLd(html) {
  const blocks = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      blocks.push(JSON.parse(m[1]));
    } catch {
      blocks.push({ __parseError: true });
    }
  }
  return blocks;
}

export function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}
