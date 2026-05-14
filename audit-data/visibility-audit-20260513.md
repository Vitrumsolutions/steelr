# SteelR Visibility Audit — 13 May 2026

## Run status: BLOCKED — Serper credits still exhausted (3rd consecutive run)

- Probe: `curl POST https://google.serper.dev/search` with project key returns `{"message":"Not enough credits","statusCode":400}` (verified 13 May, same response as 11 May 21:27 UK and 11 May 19:34 UK).
- The audit script ran end-to-end, hit `0/26` Google / `0/11` Maps / `0/15` Bing — these are not real measurements, they are the encoded failure marker for every Serper call. The script writes a zero row whenever the JSON shape is missing an `organic` key.
- `audit-data/visibility-audit-results.md` has just been overwritten with fabricated zeros for the third time. **Do not use that file as a signal.**
- AI engines (ChatGPT / Claude / Gemini / Perplexity) are not tested by `audit-data/visibility-audit.py` despite the task brief implying they are — the script only covers Serper-backed Google organic + Google Maps + Bing organic. AI surface measurements live in the manual SERP captures under `audit-data/serp-captures/` and are out of scope for this dated run.

The audit script must be patched (or wrapped) to refuse to write a results file on a Serper 4xx response so future runs cannot silently overwrite the last known good baseline.

## Last successful measurement: 10 May 2026 (3 days ago)

Used as the working reference until Serper is topped up. 11 May and 13 May are both dark.

| Channel | 10 May (last good) | 22 Apr (canonical) | Status |
|---|---|---|---|
| Google organic | 8/26 (30%) | 5/26 (19%) | +3 hits over 18 days |
| Google Maps | 1/11 (9%) | 0/11 (0%) | +1 hit (Esher #6) |
| Bing organic | 0/15 (0%) | 0/15 (0%) | Flat — post-migration lag |

## Per-keyword positions on the last good run (10 May 2026)

Replicated below from `audit-data/visibility-audit-20260510.md` so this dated file is self-contained.

### Google organic, where SteelR ranked in top 30

| Keyword | Position | URL | Vs 22 Apr |
|---|---:|---|---|
| steelr (brand) | **#1** | / | unchanged |
| steelr bespoke steel entrance doors (brand) | **#1** | / | unchanged |
| SR3 residential steel door | **#6** | /sr3-residential-steel-door | up 2 from #8 |
| steel vs composite doors | **#5** | /blog/composite-vs-steel-doors-2026-updated-compar | new (was not ranking) |
| steel doors Kensington | **#5** | /areas/kensington | new (was not ranking) |
| steel doors Chelsea | **#9** | /areas/chelsea | new (was not ranking) |
| steel doors Cobham | **#9** | /areas/surrey | unchanged |
| steel doors Esher | **#2** | /areas/esher | new (was not ranking) |

### Lost since 22 Apr (was ranking, gone on 10 May)

| Keyword | 22 Apr | 10 May |
|---|---|---|
| steel doors Buckinghamshire | **#1** | not top 30 |

Bucks moved from anchor #1 to outside top 30 over the 18-day window. This is the only confirmed regression in the data set and it pre-dates this run.

### Google Maps, only hit on 10 May

| Query | Position | Listing |
|---|---|---|
| steel doors Esher | **#6** | Steelr Bespoke Steel Entrance Doors |

10 of the 11 Maps queries — including the brand query "SteelR" itself — still returned no Steelr listing. 0 reviews on GMB is the documented root cause (per project CLAUDE.md, user manages reviews directly).

### Bing organic

Flat 0/15 from 22 Apr through 10 May. Post-migration indexing lag, IndexNow wired 19 Apr, sitemap submitted 19 Apr. Recovery window per project CLAUDE.md is mid-late May, which is now (13 May falls in that window). Cannot confirm whether recovery has started — Serper is down.

## Cannot compute 11 May -> 13 May delta

The brief asked for a delta vs 11 May. There is no measurable 11 May data — that run also failed on credits. The honest computable comparison is 10 May -> 13 May, and 13 May has zero measurable points, so it is computed as "unmeasured."

| Channel | 10 May | 13 May | Net |
|---|---|---|---|
| Google organic | 8/26 | unmeasured | unmeasured |
| Google Maps | 1/11 | unmeasured | unmeasured |
| Bing organic | 0/15 | unmeasured | unmeasured |

## 21-day delta: 22 Apr -> 10 May (last good window we can honestly compute)

### Wins
- **Google organic +3 net hits** (5/26 -> 8/26).
- **SR3 page lifted #8 -> #6** on `SR3 residential steel door` — supports the project CLAUDE.md note that the SR3 page was strengthening pre-Class-3 meta fix.
- **`steel vs composite doors` entered top 30 at #5** (blog post `/blog/composite-vs-steel-doors-2026-updated-compar` started ranking). This was a 22 Apr "not ranking" entry.
- **`steel doors Kensington` entered at #5** (`/areas/kensington`). New ranking.
- **`steel doors Chelsea` entered at #9** (`/areas/chelsea`). New ranking.
- **`steel doors Esher` entered at #2** (`/areas/esher`). Strongest new ranking.
- **Google Maps surfaced for the first time** — `steel doors Esher` produced the SteelR listing at Maps position #6.

### Losses
- **`steel doors Buckinghamshire` fell out of top 30** (was #1 on 22 Apr). Single biggest individual regression in the data set. No diagnosed cause; predates this run and is logged for next run when Serper is back up.

### Unchanged
- Brand queries `steelr` and `steelr bespoke steel entrance doors` held #1 throughout.
- `steel doors Cobham` held #9 throughout.
- Every Latham's / securedbydesign-dominated category query (PAS 24 front doors, steel doors UK, FD30 front door UK, etc.) remained unranked for SteelR.
- Bing remained 0/15.
- 10 of 11 Maps queries remained unranked.

## Keywords closest to top-3 on Google (push targets)

Ordered by leverage when Serper comes back up:

1. **`steel doors Esher` (#2 on 10 May)** — one position from #1, area page exists and has been ranking 18+ days. Smallest gap to close.
2. **`SR3 residential steel door` (#6 on 10 May)** — has the strongest dedicated topic page, was trending up (#8 -> #6 in 18 days), Class 3 stale-meta fix shipped 11 May which protects the snippet quality. Likely top-3 candidate over next 2-4 weeks if trend continues.
3. **`steel doors Kensington` (#5)** and **`steel vs composite doors` (#5)** — both newly-ranked at #5. Newer rankings tend to either consolidate or fall back; worth watching, not pushing.
4. **`steel doors Buckinghamshire` (was #1, dropped off)** — recovery target. If it returns to top 30, the area-hub template is healthy. If it stays gone, dig into `/areas/buckinghamshire` for regressions.

## "Ranked but invisible to AI" gap (per 2026-05-11 audit findings)

The 11 May addendum identified the gap pattern: SteelR ranks on Google organic for several queries (10 May data above) but those same queries do not produce SteelR citations on Gemini, Perplexity public, or Bing Copilot. The current script does not test AI surfaces, so this audit cannot quantify the gap. The 2026-05-11 SERP capture file (`audit-data/serp-captures/20260511-chatgpt-gemini-verified.md`) is the canonical reference for which queries SteelR ranks but is not cited on.

The 10 May rankings that are most likely to fit this pattern (high commercial intent, would expect AI co-citation):
- `SR3 residential steel door` (#6 organic) — cited by Perplexity (per 22 Apr baseline) but not yet verified on Gemini.
- `steel vs composite doors` (#5 organic) — Perplexity cites only on vs-composite framing per 11 May capture.
- `steel doors Kensington / Chelsea / Esher` (#5 / #9 / #2) — local-intent, normally weak AI citation surface for any brand.

These need re-verification on a real AI-engine pass once a working visibility script can call ChatGPT-with-Search via Claude_in_Chrome (the 11 May rule: that surface is the canonical "is the AI channel healthy" test).

## Script keyword-list pruning recommendations

The brief asked which keywords don't map to real SteelR targets. Reviewed against project intent (premium UK bespoke installer, £6k-£20k+, no smart-lock or retail focus). Candidates for removal:

| Keyword | Reason to consider removing |
|---|---|
| `steelr uk` | Returns `steelersuk.com` (unrelated brand). Brand-confusion noise, no realistic SteelR upside. |
| `steel doors UK` | Generic, dominated by `doorsforsecurity.co.uk`. SteelR target market is bespoke specifier, not "any steel door." Low conversion value even if ranked. |
| `how much do steel doors cost UK` | Brand house style forbids displayed prices on cost pages. Cannot fully optimise this query without violating the price-display rule documented in CLAUDE.md. Limited ranking ceiling. |
| `steel front doors near me London` (Maps) | Geographic intent is fine, but the "near me" suffix biases Google to user-location; the audit runs from a UK-wide gl/hl setting so this query measures noise rather than a real SteelR target. |
| `fire rated entrance doors flats` | Phrasing is awkward and dominated by `davesdoors.co.uk`. SteelR's actual FD30 target page targets clearer phrasings like "FD30 front door UK" (already in the list). Duplicate intent, weaker phrasing. |

Candidates to consider **adding** when Serper is back:
- `SR3 vs SR4 difference UK`, `SR3 vs SR4 residential UK`, `LPS 1175 SR3 vs SR4` — the 11 May commit `37c6833` shipped `/sr3-vs-sr4-residential-steel-doors-uk` which targets these and is in the sitemap but tracked nowhere.
- `heritage steel front doors UK`, `listed property steel front door` — flagged as a content gap in project CLAUDE.md (11 May) where ChatGPT + Gemini pull MultiSteel / Crittall / Clement / Fabco Sanctuary and SteelR is absent.
- `steel doors Richmond` — already in Maps list, but missing from Google organic list despite `/areas/richmond` being live.

## Recommended actions (Reasoned tier per CLAUDE.md recommendation gate)

1. **Top up Serper credits at https://serper.dev** (account: project key in CLAUDE.md). This is the single blocker on every rank-tracking + visibility-audit + cannibalisation pipeline. Reversibility: cheap. Confidence: Verified — three consecutive failed runs prove it.
2. **Patch `audit-data/visibility-audit.py` to refuse to write `visibility-audit-results.md` when the Serper response is HTTP 4xx or missing the `organic` key.** Right now the script silently overwrites the last known good baseline with zeros every time it runs against a dead API. Reversibility: cheap (one conditional). Confidence: Tested-locally (the failure mode is reproducible and the fix is mechanical).
3. **After credit top-up: re-run, then capture a new dated baseline + diff against `visibility-audit-20260510.md` (not 11 May, not 13 May — those are both dark).** Confidence: Verified.
4. **Investigate Buckinghamshire drop** (was #1 on 22 Apr, gone by 10 May). One-keyword regression on an area-hub template warrants a manual SERP check + a diff of `/areas/buckinghamshire` between the two dates. Reversibility: cheap. Confidence: Reasoned — depends on Serper coming back to confirm whether the drop persisted into 13 May.

## Verdict: WATCH (same as 11 May)

Trajectory pre-blackout was positive (22 Apr 5/26 -> 10 May 8/26 on Google organic, 0 -> 1 on Maps). Two of three consecutive run attempts (11 May, 13 May) have been dark on every channel. No fresh signal contradicts the positive trajectory but no fresh signal confirms it either. Promote to GO only after Serper is restored and a clean run lands.
