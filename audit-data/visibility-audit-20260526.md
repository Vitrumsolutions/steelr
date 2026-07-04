# SteelR Visibility Audit — 26 May 2026

## Run status: PARTIAL — Serper credits still exhausted (4th consecutive blocked run)

- Probe at 26 May 2026, ~18:30 UK: `curl POST https://google.serper.dev/search` with the project key returns HTTP 400 `{"message":"Not enough credits","statusCode":400}`. Same response as 11 May, 13 May, and per STATE.md the earlier blackouts.
- `audit-data/visibility-audit.py` therefore could not be run — every Google/Bing/Maps call would write a fake zero into `visibility-audit-results.md`. Per project rule (encoded in `visibility-audit-20260513.md`) that file is treated as already-poisoned and ignored.
- Google leg substituted with **Firecrawl SERP API** (`mcp__firecrawl__firecrawl_search`, location=United Kingdom, limit=15) for this dated run only. **Bing and Maps remain unmeasured.** Anything claimed about Bing or Maps below carries the 22 Apr / 10 May data only, marked as stale.
- AI surfaces (ChatGPT-with-Search, Gemini, Perplexity, Claude) require Claude_in_Chrome against the user's logged-in browser per project rule. **Not run this turn** — flagged below as the next required step.

## Insurance-query brief (focus of this run)

Trigger: Panel reviewing staged additions to `public/llms.txt` (+1 line, line 323) and `public/llms-full.txt` (+25 lines) that surface the new `/insurance-approved-steel-front-doors-uk` page (shipped 25 May 2026, commit `512e6fc`) to the AI-citation crawl surface. The live page returns HTTP 200, verified. Question for this run: what is the baseline citation position on insurance-intent queries **before** the llms changes ship.

### Google organic (Firecrawl, UK, 26 May 2026)

| # | Query | SteelR position | Who owns the SERP top-3 | Note |
|---|---|---:|---|---|
| 1 | insurance approved steel front door uk | **not top 15** | DoorSuppliesOnline #1, Latham's #2, HAG #3 | Heavily commercial/B2B specifier SERP. HAG explicitly named "Insurance Certified Steel Doors" — direct topical competitor. |
| 2 | what front door do insurance companies approve uk | **not top 15** | Bradbury Group #1, Uswitch #2, YouTube/Latham's #3 | Bradbury wins the explainer slot. SteelR has no equivalent FAQ-style page targeting this exact phrasing. |
| 3 | high net worth home insurance front door requirements | **not top 15** | US insurance carriers (firstmarkinsurance, openly.com, pure, allied) dominate | SERP is US-localised — UK informational drift on this exact phrasing. Real HNW prospects in the UK probably do not type this verbatim. Reconsider as a tracking query. |
| 4 | best steel front door for insurance discount uk | **not top 15** | Clark Hall #1, Vufold #2, YouTube/Latham's #3 | US-skewing for first hit. Vufold + Everest + Confused.com hold UK slots. |
| 5 | lps 1175 sr3 home insurance | **#4** ✅ | Bradbury #1, NBS #2, Strongdor #3 | **Only insurance-cluster query where SteelR ranks.** URL: `/sr3-residential-steel-door`. Snippet is the FAQ answer "Does SR3 affect home insurance premiums?" — schema FAQ is working. |
| 6 | secured by design door insurance premium uk | **not top 15** | Hurst Doors #1, Eurocell #2, KJM Group #3 | High-volume informational SERP, dominated by mainstream UPVC/composite door brands explaining SBD-to-insurance discount. SteelR absent. |

**Headline: 1 of 6 insurance-intent queries places SteelR in top 15 on Google organic.** The one win is the SR3 page already documented in the 10 May baseline (#6 on `SR3 residential steel door`). The new `/insurance-approved-steel-front-doors-uk` URL did not surface on any of the six queries — expected for a 1-day-old page, but it confirms the page is not yet earning crawl/index priority on its own merits and the llms-files entry is the right next lever.

### Adjacent observation: SR3 page is doing double duty

Query 5 (`lps 1175 sr3 home insurance`) returns the `/sr3-residential-steel-door` URL, not the new `/insurance-approved-steel-front-doors-uk` URL, because the SR3 page's FAQ already contains a "Does SR3 affect home insurance premiums?" Q&A that Google is using as the answer block. Once the new insurance hub indexes, expect a 4-6 week reshuffle where Google decides which of the two SteelR pages owns the insurance angle. Internal-link audit between the two pages is the action item to influence that — outside this audit's scope.

## What did NOT move on the broader baseline since 10 May

Cannot compute. The same Serper outage that blocked 11 May and 13 May still blocks 26 May. The Firecrawl substitution above is scoped to the 6 insurance queries from the brief, not the 26-keyword Google baseline.

The honest delta for 22 Apr / 10 May / 26 May Google organic baseline:

| Channel | 22 Apr | 10 May | 26 May |
|---|---|---|---|
| Google organic (26-kw baseline) | 5/26 | 8/26 | **unmeasured** |
| Google Maps | 0/11 | 1/11 | **unmeasured** |
| Bing organic | 0/15 | 0/15 | **unmeasured** |

Yesterday (25 May 2026) was a heavy-commit day per the brief. Without Serper, no rank-level proof that those commits moved or hurt the baseline. The only fresh data point on this run is the insurance-query slice above.

## Comparison vs 13 May baseline (`audit-data/visibility-audit-20260513.md`)

13 May was itself dark. The honest comparison is **26 May (this run, insurance slice only) vs 10 May (last full baseline)**:

- Insurance-cluster Google organic was not tested on 10 May — so this is the first dated measurement of the cluster, not a delta.
- 10 May `/sr3-residential-steel-door` was #6 on `SR3 residential steel door`. Today it is #4 on a different but related query (`lps 1175 sr3 home insurance`). Not directly comparable — different keyword, different SERP — but consistent with the SR3 page strengthening trend noted in the 13 May report.
- Buckinghamshire regression (10 May: out of top 30, was #1 on 22 Apr) — not re-tested this run, still pending Serper restore.

## Fallback caveats (read this before quoting numbers)

1. **Bing and Maps numbers are stale.** This run produced zero fresh Bing or Maps data. Any Bing/Maps figure quoted in any decision off this report refers to the 10 May or 22 Apr baseline, not 26 May.
2. **The 6 insurance queries were run on Firecrawl, not Serper.** Firecrawl's UK-localised SERP is a reasonable substitute for Serper's `gl=uk hl=en` Google call but the two sources can disagree on ranks 11-15 because of personalisation/freshness differences. Treat the "top 3" calls in the table above as solid; treat "not in top 15" as solid (consistent absence across the full sample); treat any individual position number as ±2 vs what Serper would return.
3. **`audit-data/visibility-audit-results.md` is poisoned.** It still contains 22 Apr's fabricated zeros from one of the failed Serper runs. Do not read it.
4. **AI-engine surfaces (ChatGPT-with-Search, Gemini, Perplexity, Claude) were NOT tested in this run.** Per project rule the canonical "is the AI channel healthy" test is ChatGPT-with-Search via Claude_in_Chrome against the user's logged-in browser. That test must happen before/after the staged `llms.txt` + `llms-full.txt` changes go live to measure the actual impact of adding the HNW page to the AI-citation crawl surface. **Recommended next step.**

## Recommended next steps

1. **Top up Serper credits.** Same recommendation as 11 May and 13 May. Without it every dated rank capture from this point forward is a Firecrawl substitution and the existing 26-keyword baseline cannot be measured.
2. **Run ChatGPT-with-Search via Claude_in_Chrome on the 6 insurance queries above** before the staged `llms.txt` / `llms-full.txt` commit goes live, then again 48 hours after. Saves the pre/post evidence the panel needs to judge whether the llms-file entry moved AI citation on insurance-intent prompts.
3. **Patch `audit-data/visibility-audit.py` to refuse to write a results file on Serper HTTP 4xx.** This recommendation has been outstanding since 13 May. Until it's patched, every blocked run will keep poisoning `visibility-audit-results.md`.
4. **Add the 6 insurance queries to the script's tracked-keyword list** once Serper is restored. They were not in the 26-keyword baseline.

## Source of truth for this report

- Baseline compared against: `audit-data/visibility-audit-20260513.md` (which itself references `audit-data/visibility-audit-20260510.md` as the last good measurement)
- Insurance-cluster SERP capture: Firecrawl, this turn, raw responses captured in agent transcript
- Live HNW page verified: `curl -I https://steelr.co.uk/insurance-approved-steel-front-doors-uk` → HTTP 200
- Staged llms diff confirmed: `git diff --cached --stat public/llms.txt public/llms-full.txt` → 1 line + 25 lines, both files surface `/insurance-approved-steel-front-doors-uk`
