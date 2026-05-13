# Forensic audit — /areas/buckinghamshire (live state, 13 May 2026)

Tool: curl -sL + python parsing. Read-only.

## 1. HTTP status chain + response headers

Single hop, no redirects. Direct 200 OK from Vercel edge.

```
HTTP/1.1 200 OK
Cache-Control: public, max-age=0, must-revalidate
Content-Length: 192585
Content-Type: text/html; charset=utf-8
Age: 80412   (cached ~22h at edge)
Server: Vercel
Vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-Matched-Path: /areas/buckinghamshire
X-Vercel-Cache: HIT
X-Robots-Tag: (absent — no header-level noindex)
```

DNS resolved to 216.198.79.1 (Vercel). No www redirect chain. HSTS active. No X-Robots-Tag header present, so no header-level indexing block.

## 2. Indexability checklist

| Check | Result |
|---|---|
| HTTP status | 200 OK |
| Final URL | https://steelr.co.uk/areas/buckinghamshire (no redirect) |
| Canonical tag | https://steelr.co.uk/areas/buckinghamshire — self-referential, correct |
| Meta robots | NOT PRESENT (defaults to index,follow — fine) |
| X-Robots-Tag header | NOT PRESENT |
| robots.txt | Allow: / — no Disallow rule blocks /areas/* |
| In sitemap.xml | YES — `<loc>https://steelr.co.uk/areas/buckinghamshire</loc>` |
| In HTML sitemap | YES — 1 link on /sitemap |

No indexability blocker. Page is fully crawlable and Google-eligible.

## 3. Content fingerprint

| Field | Value |
|---|---|
| Title | "Steel Doors Buckinghamshire \| Bespoke Steel Front Doors \| SteelR" |
| Title length | 64 chars |
| Meta description | 182 chars (over the ~155 SERP truncation threshold) |
| H1 (sr-only) | "Steel Doors Buckinghamshire: Bespoke Steel Front Doors, BS EN 1627 RC4 Standard with LPS 1175 SR3 / SR4 Available" |
| H2 count | 5 |
| Visible word count | 1,162 words |
| HTML size | 192,585 bytes |

**Title pattern divergence from STATE.md.** STATE.md (Apr 22 entry) declares the intended pattern as `Steel Doors [Town] | Bespoke Steel Front Doors, SR3 Rated | SteelR` and flags this rollout as in flight by another session. The LIVE title is `Steel Doors Buckinghamshire | Bespoke Steel Front Doors | SteelR` — the "SR3 Rated" differentiator was never shipped. The Apr 22 working-session change appears to have stalled or been overwritten. Surrey and Hertfordshire share the identical pattern, confirming this is the global generateMetadata template, not a Bucks-specific regression.

**Boilerplate ratio (8-word shingle analysis vs Surrey and Hertfordshire):**

- Bucks shingles: 853
- Shared with Surrey: 506 (59.3% boilerplate)
- Shared with Herts: 506 (59.3% boilerplate)
- Unique-to-Bucks: 347 shingles (**40.7% unique**)

Local-signal mentions in visible text: Beaconsfield 2, Amersham 2, Gerrards Cross 1, Marlow 1, High Wycombe 1, Princes Risborough 1, Chiltern 1. Total 9 distinct local-signal hits in 1,162 words. Light by hub-page standards but not absent.

## 4. Schema audit

4 JSON-LD blocks present, all parse as valid JSON:

| # | @type | Status |
|---|---|---|
| 0 | HomeAndConstructionBusiness | Valid |
| 1 | BreadcrumbList (3 crumbs: Home > Areas > Buckinghamshire) | Valid |
| 2 | HomeAndConstructionBusiness | Valid — **DUPLICATE TYPE** |
| 3 | FAQPage (4 questions) | Valid |

**Red flag: two HomeAndConstructionBusiness blocks on one page.** One is likely the global layout LocalBusiness, the other an area-page override. Google can tolerate this but it weakens entity disambiguation and risks "Duplicate without user-selected canonical"-class warnings if both supply different geo or name fields. The /about page schema dedup (commit 9d5b908, 18 Apr) addressed the same pattern site-wide but did not extend to area pages.

## 5. Internal link graph

**OUT (from Bucks page):**
- 85 total anchors, 79 internal, 45 unique internal URLs
- 11 child area links (Beaconsfield, Gerrards Cross, Amersham, Chalfont St Peter, Marlow, Penn, Great Missenden, Princes Risborough, High Wycombe, Burnham, Haddenham — correct full set)
- 8 to /collection, 4 each to /areas, /architects, /process, /contact
- 2 each to /sr3-residential-steel-door, /pas-24-steel-entrance-door, /secured-by-design-steel-front-door, /fire-rated-fd30-front-door, /developers, /housing-associations, /property-managers
- Outbound topical authority is healthy.

**IN (to Bucks page) — sampled key entry points:**

| Source page | Links to /areas/buckinghamshire |
|---|---|
| / (homepage) | 1 |
| /areas (hub listing) | 2 |
| /bespoke-steel-front-doors-uk | 1 |
| /luxury-steel-entrance-door-london | **0** |
| /sitemap (HTML) | 1 |

**Red flag: inbound internal link volume is thin.** A hub area page ranking #1 nationally for "steel doors Buckinghamshire" should be linked from more than 5 internal places. The London topic page does not link to it at all (expected — London-only scope), but no Phase 1D topic page (cost, vs-composite, SR3, PAS 24) links to it either. No blog post breadcrumb or "Related" block surfaces it. The 11 child Bucks area pages presumably link UP to the hub (typical pattern) — that would add 11 — but those are children, not authority votes.

## 6. Wayback comparison

Wayback availability API returned no snapshots:

```
{"url":"steelr.co.uk/areas/buckinghamshire","archived_snapshots":{},"timestamp":"20260422"}
{"url":"steelr.co.uk/areas/buckinghamshire","archived_snapshots":{},"timestamp":"20260510"}
```

Sparkline endpoint returned 404. **No historical snapshot exists for this URL on the Wayback Machine.** Cannot diff against the 22 Apr 2026 #1-ranking state. The Wayback diff hypothesis is unrecoverable from this source — git history is the only available proxy for content delta.

## 7. Red flags found

| # | Flag | Severity | Note |
|---|---|---|---|
| 1 | Title missing "SR3 Rated" differentiator | Medium | STATE.md says rollout was in flight Apr 22, never shipped. Current title is the older identical-template pattern across all 17 hubs |
| 2 | Meta description 182 chars (over ~155 SERP truncation) | Low | Tail-truncated in SERP |
| 3 | Duplicate HomeAndConstructionBusiness JSON-LD (2 blocks) | Medium | Likely global LocalBusiness + page-local override colliding. Mirrors the /about issue fixed 18 Apr |
| 4 | 40.7% unique content vs siblings | Medium | Boilerplate rotation work from 8 Apr ("4 variants") may have decayed or never covered all hubs. Sibling hubs share 59% of 8-word shingles |
| 5 | Thin inbound internal links (5 entry points sampled) | Medium | No Phase 1D topic page, no blog post breadcrumb threads back to Bucks |
| 6 | 9 distinct local-signal mentions in 1,162 words | Low-medium | Light for a hub claiming county-level expertise |
| 7 | No Wayback snapshot | Informational | Cannot diff 22 Apr vs today via Wayback |
| 8 | Edge cache Age 80,412s (~22h) | Informational | Long cache TTL is fine, just means edits take a day to fully propagate |

**No fatal indexability blocker.** Status 200, canonical correct, no noindex, in sitemap, in robots Allow. The page is fully crawlable. The signal pattern points to **relative weakness**, not breakage: a templated page with 40% unique content, light local depth, and 5 known inbound links is the kind of page Google demotes when a competitor (or its own newer URLs) overtakes it in topical depth or external authority. The 22 Apr → 5 May drop is consistent with a relative-ranking effect, not an on-page error.

---

Report path: `audit-data/forensics/20260513-buckinghamshire-live-page.md` (1,053 words)
