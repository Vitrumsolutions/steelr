# SteelR Visibility Audit — 11 May 2026

## Run status: PARTIAL — programmatic channels blocked

- Serper.dev API: **`{"message":"Not enough credits","statusCode":400}`** on every Google / Maps / Bing call. Credits exhausted (was 2,370 of 2,500 remaining on 22 Apr — burned through over 8 dated runs since then).
- Perplexity API (MCP `perplexity__perplexity_search`): **401 Unauthorized — Invalid API key**. AI-engine programmatic spot-check unavailable.
- Direct HTTPS reachability + sitemap.xml + on-page meta inspection: **WORKED**. Evidence-based observations below come from these sources only.

The audit script's auto-written `visibility-audit-results.md` therefore shows fabricated zeroes for every query and is NOT a real signal — it reflects the Serper failure, not search reality. Delta tables in the requested format are not honestly computable for this run.

## Per-channel deltas vs 2026-05-10 baseline

| Channel | 10 May | 11 May | Delta | Notable |
|---|---|---|---|---|
| Google organic | 8/26 (script-counted) | **unmeasured** (Serper out of credits) | n/a | Cannot resolve |
| Google Maps | 1/11 (Esher #6) | **unmeasured** | n/a | Cannot resolve |
| Bing | 0/15 | **unmeasured** | n/a | Cannot resolve |
| AI engines | Perplexity / ChatGPT / AI Mode citing per 22 Apr baseline | **unmeasured** | n/a | Perplexity key invalid |

Note on baselines: the 10 May `.md` file in `audit-data/` is the *script-counted* run (table format, 8/26 organic) — distinct from the 22 Apr human-written baseline (5/26 organic) which had narrative analysis. The script run inflates the count because it counts every position where steelr.co.uk appears in the top-30, including borderline positions the 22 Apr writeup excluded. The two baselines are not directly comparable, and today's run reproduces neither.

## New page index check — `/sr3-vs-sr4-residential-steel-doors-uk`

- **Page is live:** HTTP 200, 168 KB rendered (verified via curl 11 May).
- **In sitemap.xml:** yes (sitemap now 313 URLs, was 312).
- **Indexed yet on Google / Bing / cited by AI:** cannot verify without API access. Page is <24 h old (deployed in commit `37c6833`); even with IndexNow + Indexing API submission, "Discovered → Indexed" typically takes 2-7 days on a young site like SteelR.
- **Target keywords for tracking next run:** "SR3 vs SR4 difference UK", "SR3 vs SR4 residential UK", "LPS 1175 SR3 vs SR4". None are in the existing `GOOGLE_KEYWORDS` array in `visibility-audit.py` — add them before next run so we capture impact.

## PAS 24 page stale-meta check — RESOLVED

- `/pas-24-steel-entrance-door` rendered HTML on 11 May contains:
  - **Title:** `PAS 24 Steel Entrance Door | Approved Doc Q | SteelR`
  - **Meta description:** `PAS 24:2022 is the UK security standard for new-builds under Approved Document Q. What it tests, how certification is granted, why we treat it as the floor.`
- **No "Class 3" string present** in the head block. The sitewide Class 3 reconciliation in commit `37c6833` has shipped to production and the stale meta description has been replaced.
- **Impact on the Google #8 position:** unmeasured. Google's snippet cache may still show the old description in SERPs for some hours/days after a meta refresh — the rerank effect (if any) typically takes 1-2 weeks. Worth tracking position #8 on the SR3 keyword across the next two runs.

## Em-dash sweep (commit `c280187`) — propagation check

- Cleaned blog corpus is live (file changes confirmed in git log).
- Google does not surface a punctuation signal in SERPs, so impact will not appear as a position delta. Expect 0 measurable visibility change from this commit; its value is brand-policy compliance + AI-engine quotability (en-dashes hurt clean-quote extraction in citation engines).

## Esher / Chelsea position protection (NEW on 10 May per task brief)

- **Cannot confirm hold or improvement** — Serper credits out.
- Both pages remain live (`/areas/esher` and `/areas/chelsea` resolve HTTP 200).
- No site-level change since 10 May would plausibly cause a drop — these are stable area pages with no edits in the 11 May commits.

## Bing — sustained-zero check

- **Unmeasured.** Bing has been 0/15 across every dated run since 22 Apr. The 19 Apr IndexNow wire-up plus 19 Apr full-sitemap submission was expected to start producing visible movement mid-late May. Without API access we cannot confirm whether that window has opened.

## Pages currently winning AI/search citations (verbatim phrases to protect)

Per 22 Apr canonical baseline (still the last evidence-backed reading we have):

- **Perplexity** — `/sr3-residential-steel-door` cited as "best-fit option" for the query "UK bespoke steel front door SR3 Secured by Design installer".
- **ChatGPT (web search)** — homepage `/` listed FIRST for "top UK manufacturers of bespoke steel front doors SR3/PAS 24" (ahead of Lathams, Metador, Samson, Strongdor).
- **Google AI Mode** — homepage cited as #1 featured manufacturer for "who makes bespoke steel front doors UK SR3 certified"; `steelr.co.uk +4` shown as primary citation, 1st of 13 cited sites.
- **Google organic anchors (script-counted, 10 May data):** brand `steelr` #1, `steelr bespoke steel entrance doors` #1, `SR3 residential steel door` #6 (was #8 on 22 Apr — improving), `steel vs composite doors` #5, `steel doors Kensington` #5, `steel doors Esher` #2, `steel doors Cobham` #9, `steel doors Chelsea` #9.

## Movement that suggests recent commits are working

- **Class 3 stale meta description: confirmed fixed live.** This was a real specifier-blocking error (`/pas-24-steel-entrance-door` was sending wrong technical info to architects via SERP). Whether it lifts position #8 or not, the page is no longer leaking incorrect spec to people inspecting the snippet.
- **`/sr3-vs-sr4-residential-steel-doors-uk` shipped + in sitemap.** This is a high-intent specifier query gap (no SteelR page targeted it before). Net new surface area.
- **312 → 313 URL sitemap growth, deploy clean.** No 404s introduced.
- **Earlier dated runs (when Serper was working) trended up:** 6/26 (5 May) → 7/26 (6 May) → 8/26 (10 May) on Google organic. The trajectory was positive immediately before credits ran out.

## Regressions or concerns

- **Critical: Serper credits exhausted.** Blocks all programmatic rank tracking until topped up. The site's entire rank-tracking + visibility-audit + cannibalisation-audit pipeline depends on this single key. Top up at https://serper.dev (account: project key documented in CLAUDE.md) or move to fallback (DataForSEO, ValueSERP).
- **Perplexity MCP key invalid.** Lower priority but means the AI-citation channel has no programmatic eyes either. Reissue key in `~/.claude.json` or whichever `.mcp.json` declares the `perplexity` server.
- **Script auto-overwrites `visibility-audit-results.md` with the failed zeros.** That file should be ignored or the script should be patched to refuse to write a results file on a Serper 4xx response. Right now anything pointing at it as "latest" will pick up false zero data.
- **10 May baseline is script-count, not human-curated.** Future comparisons against the 22 Apr writeup will keep being apples-to-oranges. Pick one canonical method (recommend: keep the script output for trend lines, keep human writeups for narrative — never compare a script row against a narrative row).

## Verdict on overall visibility trajectory: WATCH

Trajectory was positive immediately before credits ran out (6 → 7 → 8 organic hits over the previous 5 days). The 11 May commits (`37c6833`, `c280187`) are content-quality + accuracy fixes — they will not visibly move rankings on their own, but they protect the existing #6 SR3 page and #8 PAS-24 page from snippet-rot-driven decay, and the new SR3 vs SR4 page opens a fresh keyword surface. No code-side regression risk seen.

**Cannot upgrade to GO** because we have zero fresh measurements to confirm the trajectory held — every programmatic channel is down.

**Not FIX** because the diagnostic that would justify FIX (a measured drop) is impossible to compute.

WATCH = top up Serper + reissue Perplexity key, re-run within 48 h, expect to be back at GO if 10 May positions are still held.

---

## Addendum — 21:30 UK panel-llms gate (agent 1 of 4)

Re-ran `python audit-data/visibility-audit.py` at 21:27 UK. Same failure mode as 19:34: every Serper call returns the encoded failure marker (`�`) across all 26 Google / 11 Maps / 15 Bing queries. **Credits still exhausted.** No fresh programmatic measurements possible. Sitemap count verified at **313 URLs** (313 `<loc>` entries — was 312 before SR3-vs-SR4 shipped, parity confirmed). `/sr3-vs-sr4-residential-steel-doors-uk` returns HTTP 200 live.

### Staged llms diff — AI-citation disruption risk

The 3 Class 3 corrections only touch one cluster of llms-full.txt (lines 1337/1340/1345 in the "Luxury front doors UK buyer guide" excerpt block). Spot-checked the live llms-full.txt at 21:28 UK — those same 3 wrong phrases are currently live on the public file. Risk model:

- **Verbatim-citation risk is LOW.** The "best-fit option" Perplexity citation (22 Apr baseline) targets `/sr3-residential-steel-door`, not the luxury buyer guide. ChatGPT "FIRST listed" citation targets the homepage `/` description. Google AI Mode primary citation targets `/` again. None of those three AI-channel wins extract from the lines being changed.
- **The 3 corrected lines do contain SR3 / RC4 / LPS 1175 spec phrasing that may have been cited by AI engines on the specific query "luxury front doors UK".** That query is not in the 22 Apr canonical evidence. We have no record of it producing a steelr citation, so no verifiable loss surface.
- **Net assessment:** the wrong-scheme phrasing ("BS EN 1627 Class 3" attached to LPS 1175 SR3) is a factual error. If AI engines were citing it verbatim, they were citing wrong technical info attached to the SteelR brand — a long-term reputational risk with architects and specifiers who would spot the error. Correcting it is net-positive for citation quality even if a small short-term extraction cache rebuilds. Reversibility: easy (one git revert) if measured against next audit.

### Pages unknown to Google (5 pushed via Indexing API today)

Cannot verify discovery without Serper or GSC API access. Pages all return HTTP 200 to direct curl. The 17:21 UK Indexing API push will not produce visible signal until tomorrow at earliest under normal GSC processing latency.

### Verdict for panel-llms gate

**NO BLOCK from agent 1.** The staged diff corrects a verifiable factual error in three lines of one blog excerpt block. No measured AI citation in our evidence set extracts from these lines. The footer restore + date bump are mechanical regenerations with zero ranking surface. Trajectory pre-credits-exhaustion was positive (6→7→8 organic hits over five days). No fresh signal contradicts that.

**Open blocker (orthogonal to this gate):** programmatic visibility tracking is dark until Serper credits are topped up.
