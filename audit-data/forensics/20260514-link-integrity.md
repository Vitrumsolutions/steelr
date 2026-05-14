# SteelR Link Integrity Audit — 14 May 2026

Read-only diagnostic. No code changes. Live target: https://steelr.co.uk

## Method

1. Fetched `/sitemap.xml`, extracted all `<loc>` URLs (313).
2. `curl -sI` on every sitemap URL, recorded HTTP status.
3. Fetched 43 representative pages (homepage, 17 area hubs + leaves, all 18 topic/audience hubs, 10 area leaves, 3 blog posts, /collection, /contact, /process, /about, /areas, /blog, /sitemap, /security). Extracted all `<a href>` — 4,048 raw, 324 unique internal targets.
4. `curl -sI` on every unique internal target.
5. Orphan check: `comm` sitemap paths vs sampled internal link graph.
6. Reconciled sitemap against `src/app/**/page.tsx` static routes + dynamic data counts.
7. Verified `/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`.

## Sitemap URL count + status breakdown

| Bucket | Count |
|---|---|
| Total sitemap URLs | 313 |
| HTTP 200 | 313 (100%) |
| Non-200 | 0 |
| Redirect chains in sitemap | 0 |

Section split: 34 top-level, 177 `/areas/`, 61 `/collection/`, 40 `/blog/`, 1 root. Count holds steady at 313 (matches 11 May baseline — the +18 hub work did not change the total; hubs already counted in the 177 area URLs).

## Non-200 URLs

None. All 313 sitemap URLs return 200 directly with no redirect hop.

## Internal link graph — broken/redirecting targets

324 unique internal targets checked. **322 return 200 directly.** Two flags:

| Target | Status | Detail |
|---|---|---|
| `/blog/front-door-replacement-guide-uk-homeowners` | 200 | Initial `curl -I` returned `000` (transient TLS/connection drop). Re-test: clean `200`. Not a real defect. |
| `/blog/what-is-sr3-security-rating` | **308 → `/sr3-residential-steel-door`** | **Real finding.** Internal link points to a blog slug that no longer exists; Vercel 308-redirects it to the topic page. Final destination is 200, so users land fine, but it is an avoidable redirect hop and the linked slug is not in the sitemap (no such blog post — the SR3 blog file is now `front-door-security-ratings-compared-sr1-to-sr3.ts`). |

**Source of the stale link:** `src/data/blog/posts/sr4-lps-1175-commercial-grade-residential.ts:20` — body markdown link `[complete SR3 guide for homeowners](/blog/what-is-sr3-security-rating)`. Renders on `/blog/sr4-lps-1175-commercial-grade-residential`. This is the only occurrence in `src/`.

## Redirect chains

- No multi-hop chains found. The one redirect (`what-is-sr3-security-rating` → `sr3-residential-steel-door`) is a single 308 to a 200.
- Trailing-slash behaviour: `/about/` → 308 → `/about`. Standard Next.js `trailingSlash:false` normalisation. All site-generated internal links are already slash-less, so this fires only on external/typed URLs — not a defect.

## Orphan pages

**Zero orphans.** `comm -23` of 313 sitemap paths against the sampled internal-link set returned 0. Every sitemap URL is reachable. The `/sitemap` HTML page alone emits 323 internal links and covers the full set; area hubs additionally link every leaf, and `/areas` lists all hubs.

## Pages linking to broken/redirect targets

Only one: `/blog/sr4-lps-1175-commercial-grade-residential` links to the 308-redirecting `/blog/what-is-sr3-security-rating`. No page links to a hard 404.

## Nav / footer integrity

Homepage nav + footer internal links (deduped) — **all resolve 200**. Footer links checked across area hub, topic hub, blog, and collection page types via the sampled set: consistent, no broken entries. Nav (`Collection · Areas · About · Process · Blog · Get Estimate · Contact`) all 200.

## Sitemap vs routes reconciliation

Static routes in `src/app/`: **36**. Top-level URLs in sitemap: **34**. Built but **not in sitemap**:

| Route | Live status | Assessment |
|---|---|---|
| `/thank-you` | 200 | Correct exclusion — post-submit conversion page, intentionally not indexed. |
| `/collection/sidelights` | 200 | Filtered collection view. **Not in sitemap.xml** but **is** linked from the `/sitemap` HTML page and from `/collection`. Minor inconsistency — indexable, reachable, but absent from the XML feed. |

Dynamic routes reconcile cleanly: 177 location records → 177 `/areas/` URLs; 40 blog post files → 40 `/blog/` URLs; collection doors generated from the gallery image array → 61 `/collection/` URLs. No route built-but-unbuilt mismatch; no sitemap URL without a backing route (all 313 returned 200).

## robots.txt + llms files

`/robots.txt` → 200. References: `Sitemap: …/sitemap.xml`, `llms.txt: …/llms.txt`, `llms-full.txt: …/llms-full.txt`. All three resolve **200**. `Allow: /`, no crawl blocks.

## Recommendations (gate-tagged)

1. **[Reasoned · reversible: cheap]** Fix the stale blog link in `src/data/blog/posts/sr4-lps-1175-commercial-grade-residential.ts:20` — change `/blog/what-is-sr3-security-rating` to `/blog/front-door-security-ratings-compared-sr1-to-sr3` (the live SR3 blog) or to `/sr3-residential-steel-door` (the redirect's current destination). Metric: internal redirect hops = 0. Measurable pre/post via this same `curl -sI` sweep. Evidence: inferred from file:line + live 308.
2. **[Reasoned · reversible: cheap]** Decide whether `/collection/sidelights` belongs in `sitemap.xml`. It is a real indexable 200 page linked internally; either add it to the sitemap generator or confirm intentional exclusion. Metric: sitemap-vs-route parity. Evidence: inferred from route list vs sitemap diff.

Both are cheap-to-reverse Reasoned items — within gate limits. No Verified or Tested-locally items (read-only audit, no before/after captured).

## Tick list

- ✅ Sitemap fetched, 313 URLs, all 200 — verified via `curl -sI` sweep
- ✅ 324 internal targets checked — 322 clean 200, 1 transient `000` (re-tested 200), 1 real 308
- ✅ Orphan check — 0 orphans, verified via `comm`
- ✅ Nav/footer integrity — all 200
- ✅ Route reconciliation — 2 built-not-in-sitemap (`/thank-you` intentional, `/collection/sidelights` flagged)
- ✅ robots.txt + llms.txt + llms-full.txt — all 200, all referenced
- 🔄 Stale blog link fix — identified, not applied (read-only audit)
