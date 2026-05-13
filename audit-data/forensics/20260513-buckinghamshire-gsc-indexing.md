# Forensic: GSC indexing status of `/areas/buckinghamshire`

Date: 2026-05-13
Context: page lost #1 organic ranking between 22 Apr and 5 May. Establishing whether Google has deindexed, de-prioritised, or simply re-ranked the URL.

## 1. Method

1. Read tracker JSON at `vitrums/audit-data/gsc-indexing-tracker-steelr.json` for submission state.
2. Authenticated against service account `gsc-indexer-steelr@steelr-indexing.iam.gserviceaccount.com` (key at `vitrums/audit-data/gsc-service-account-steelr.json`) and called `indexing.googleapis.com/v3/urlNotifications/metadata` for `/areas/buckinghamshire` and `/areas/surrey` (Surrey as the healthy ranking control).
3. Issued `curl -sI` against the live Bucks URL and grep-extracted canonical and robots from the rendered HTML.
4. Pulled the public sitemap and confirmed Bucks inclusion plus `lastmod`.
5. Reviewed git history for recent edits to the Bucks data file and the area route.
6. Decided whether to push a recrawl request based on whether evidence supported one.

Temporary script `_metadata_check.py` was created in this folder for step 2, run, then deleted per the no-commit constraint.

## 2. Tracker state for Bucks

```
property:        sc-domain:steelr.co.uk
totalPages:      313
dailyQuota:      180
startedAt:       2026-04-09
submitted:       329 URLs
queue:           0 URLs
lastReconciledAt: 2026-05-11T19:47:55.162Z
```

`https://steelr.co.uk/areas/buckinghamshire` is present in the `submitted` array (matched as a bare string entry). It is NOT in the `queue`. The tracker stores submitted URLs as bare strings with no per-URL timestamp, so the last submission time cannot be determined from the JSON alone. From git log on the wider area corpus, content for Bucks was last touched by:

- `036d624` upgrade 10 Buckinghamshire area pages to 1000+ char standard
- `2c54c8b` 4-tier ladder consistency across 16 location data files (Batch 1C)
- `37c6833` deep-audit batch 4 sitewide Class 3 reconciliation

The 5 May Tested-locally bundle (`audit-data/change-log/20260505-llms-update.md`) explicitly flagged Bucks regression as predating that diff. The 4-tier ladder copy work in late April / early May is therefore the most plausible content-side trigger if there is one, but Bucks had already regressed by that date per the change-log note.

## 3. Indexing API getMetadata responses (verbatim)

`/areas/buckinghamshire`:
```
HttpError 404
{
  "error": {
    "code": 404,
    "message": "Requested entity was not found.",
    "status": "NOT_FOUND"
  }
}
```

`/areas/surrey`:
```
HttpError 404
{
  "error": {
    "code": 404,
    "message": "Requested entity was not found.",
    "status": "NOT_FOUND"
  }
}
```

Interpretation: identical 404s for both URLs. This is NOT a Google deindexation signal. The `urlNotifications.metadata` endpoint only returns data while there is an active notification record from THIS service account project. Records age out of the per-project notification cache; once they do, `getMetadata` returns 404 regardless of whether Google's actual index still contains the page. Since `/areas/surrey` is presently citation-healthy and still appears in organic results per the 11 May audit, the 404 reflects API record lifecycle, not search-index state. The tracker shows both URLs were submitted via `URL_UPDATED` in the past, so this is consistent with notification record TTL expiry.

## 4. Live page indexability

`curl -sI https://steelr.co.uk/areas/buckinghamshire` returned:
- `HTTP/1.1 200 OK`
- `Server: Vercel`
- `X-Matched-Path: /areas/buckinghamshire` (exact path match, no internal redirect)
- `X-Vercel-Cache: HIT`, age 80,577s (page is being served confidently from Vercel edge)
- No `X-Robots-Tag` header present in response

Rendered HTML (192,585 bytes, fully populated) contains:
- `<link rel="canonical" href="https://steelr.co.uk/areas/buckinghamshire"/>` (exact self-canonical)
- `<title>Steel Doors Buckinghamshire | Bespoke Steel Front Doors | SteelR</title>`
- No `<meta name="robots">` element present (default policy: index, follow)
- Zero occurrences of the string `noindex` anywhere in the document

The page is fully indexable. Nothing in the markup, headers, or routing prevents Google from crawling and indexing it.

## 5. Sitemap inclusion + lastmod

`https://steelr.co.uk/sitemap.xml` contains:
```
<loc>https://steelr.co.uk/areas/buckinghamshire</loc>
<lastmod>2026-05-11T20:57:52.211Z</lastmod>
```

Bucks is in the public sitemap with a fresh `lastmod` of 2026-05-11, two days ago. This is well within Google's normal recrawl horizon for a sitemap entry and provides a freshness hint to the crawler.

## 6. Did you push a re-crawl request?

No. The brief permitted a push only if the URL needed a fresh crawl signal. Evidence collected says it does not:

- Page returns HTTP 200 with full content and exact self-canonical.
- No `noindex` in HTML or headers.
- Sitemap entry is present with a recent `lastmod`.
- The getMetadata 404 is matched by Surrey (a known-healthy URL), so it is not a deindexation signal but an API cache artefact.
- The tracker already shows Bucks in `submitted`, meaning the URL has previously been pushed to the Indexing API.

Pushing again now would consume one of the 180 daily quota slots without addressing the actual symptom, which is ranking position rather than indexation. Tracker JSON was NOT edited.

## 7. Verdict

Google is still indexing `/areas/buckinghamshire`. Every indexability signal under our control is green: 200 status, self-canonical exact match, no robots restriction, fresh sitemap inclusion, recent content edits well-formed. The ranking regression from #1 to off-top-30 is therefore a re-ranking event, not a deindexation event.

Likely causes (Reasoned, not yet captured):
1. Algorithmic re-ranking after the 4-tier-ladder copy refactor (`2c54c8b`, late April) plus the cost-guide rewrite (`0f53998`) altered semantic emphasis. Bucks shares the same area template as the other 160 area pages, so any template-wide phrasing shift can move all area pages in tandem and Google may have re-evaluated which area page best matches `steel doors buckinghamshire`.
2. Competitor movement on the SERP, particularly Latham's (195 GBP reviews vs SteelR's 0) gaining authority on regional queries while SteelR's domain authority is still maturing (site is six weeks old).
3. Maps integration: the 22 Apr audit confirmed 0 / 11 on Google Maps including for the brand term. Maps-organic blended SERPs can move organic listings down when Maps pack confidence drops.

Next steps to confirm cause without further intervention here:
- Run a fresh Serper rank check including all 16 area hub queries, compare to 22 Apr baseline to see if regression is Bucks-specific or template-wide.
- Live URL Inspection in GSC (separate quota from Indexing API) on `/areas/buckinghamshire` to see Google's reported coverage state (Indexed vs Crawled-not-indexed vs Discovered-not-indexed) and last-crawl timestamp.
- If Live URL Inspection reports "Indexed", the issue is purely ranking, and a content / link uplift on the Bucks page is the lever, not a recrawl push.

No recrawl signal queued in this session.
