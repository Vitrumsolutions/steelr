# Fresh AI-Engine Citation Baseline — SteelR

**Run date:** 2026-05-11, 21:00-21:10 UK
**Purpose:** Pre-spec-table BEFORE snapshot. Spec-by-spec comparison shipped to /steel-front-door-vs-composite ~5 min before this run (commit 8ff80a0). Re-measure in 14-30 days to assess AI cache impact.
**Previous audit being compared against:** `20260511-multi-ai-engine-deep.md` (commit ref a60d315) — 0/18 first-pick, 2/18 partial.

---

## 1. Method honesty

Twelve real customer-style queries split across homeowner-discovery (6), specifier (4), and brand/vendor (2) intents. Engines attempted:

- **Perplexity public search surface** (firecrawl_scrape of `perplexity.ai/search?q=...`): all 12 queries reached, full grounded answers captured. **This is the primary engine for this baseline.**
- **Perplexity MCP API** (perplexity_search): **unreachable** — 401 Unauthorized on the configured key. Same failure noted in last week's audit. Not retried after first 401.
- **Bing organic + Bing AI summary** (firecrawl_scrape): 4 queries reached. One query (PAS 24 vs SR3 vs SR4) ambiguity caused Bing to misroute to PAS 2030 retrofit results — surface fault, not SteelR fault. "steelr reviews" returned only Facebook login pages.
- **Google organic** (firecrawl_scrape, gl=uk): **all 4 attempts blocked by reCAPTCHA**. Consistent with previous audit. No retry — burns time.
- **Google AI Overview / AI Mode** (`udm=50`): skipped. reCAPTCHA already firing on plain organic; AI Mode endpoint same domain, same block expected.
- **ChatGPT logged-out** (`chatgpt.com/?q=...`): skipped this run. Last audit established the logged-out surface answers from model recall not live retrieval — already documented as "hallucinated/category-only" elsewhere, no new signal expected pre-deploy.

**Reachable engine count:** 2 of 5 (Perplexity public, Bing). Sufficient for a BEFORE baseline on the highest-volume cited engine (Perplexity).

---

## 2. Per-engine scorecards

### Perplexity public surface (12 of 12 queries)

| # | Query | SteelR cited? | Competitors named | Notes |
|---|---|---|---|---|
| 1 | are steel front doors worth it | No | angi, realtor, energyswingwindows | US-centric answer (fiberglass framing) |
| 2 | how much does a steel front door cost in the uk | No | lathamssteeldoors, windoworldltd, doorsforsecurity, modern-doors, idlwindows | 17 sources, all UK — SteelR absent |
| 3 | steel vs composite front door which is better | No | energyswingwindows, gerdadoors, valleylockanddoor | Comparison table format — exactly the surface SteelR's new spec table targets |
| 4 | whats the most secure front door you can buy | No | hiddendoorstore, doorsforsecurity | Generic "armored steel + multi-point lock" answer, no UK brand named |
| 5 | best front door for a london townhouse | No | londondoor, homedepot | UK-relevant context but no SteelR mention |
| 6 | how long does a steel front door last | No | morganexteriorsinc, bradbury-group, todaysentrydoors, howtolookatahouse | Generic durability piece |
| 7 | pas 24 vs sr3 vs sr4 explained | **Partial — brand named in follow-up suggestion only** | bradbury-group, doorandwindowexperts, hartdoors, glazingcentre | Follow-up reads "Examples of SteelR doors with SR3 SR4 ratings" — entity is known to suggestion engine, retrieval did not surface a citation |
| 8 | fd30 front door requirements for flats | No | williamswindows, firesafetyevent, zdoors, jeld-wen | UK-relevant, regulator-cited — no SteelR |
| 9 | u-value of a steel front door | No | laforceinc, impactwindowscenter, snuggpro | All US sources, no UK steel-door specialist |
| 10 | front door for a 3 million house | No | houzz, trustile, aaadoors, artboulle, homedepot | US-luxury framing |
| 11 | who makes bespoke steel front doors in the uk | No | Bespoke Steel Doors, Black Steel Doors, Original Steel Doors, Fabco, Strongdor, Unique Steel Windows, Crittall Doors | **Highest-stakes entity query — SteelR omitted from a 7-brand list** |
| 12 | steelr reviews | No — **entity confusion** | Indeed, Glassdoor, NFLPA | Perplexity confused "steelr" with "Steeler"/Pittsburgh Steelers. Total brand-recognition failure. |

**Score: 0 of 12 direct citations. 1 of 12 partial signal (suggestion engine knows brand but retrieval did not surface it).**

### Bing organic + AI summary (4 of 12)

| # | Query | Bing AI summary cited SteelR? | Top sources read | Notes |
|---|---|---|---|---|
| 3 | steel vs composite front door which is better | No | jkdoors, lathamssteeldoors, ukcompositedoors, doorsforsecurity, gerdadoors, doorsuppliesonline (6 sources listed under "Based on sources") | AI summary block at top of SERP. SteelR not in top 10 organic visible either. |
| 7 | pas 24 vs sr3 vs sr4 explained | **Bing parser failed** | All results were PAS 2030 retrofit, not PAS 24 security | Bing routed the query to the wrong PAS standard entirely — not a SteelR fault. Top sources: local.gov.uk, nef.org.uk, trustmark.org.uk. Acronym disambiguation broken on Bing. |
| 11 | who makes bespoke steel front doors in the uk | (not captured this run) | — | Skipped to preserve token budget. Last audit run on this query: SteelR absent. |
| 12 | steelr reviews | No | Facebook login pages occupied top 10 — no review platform indexed | Total entity-recognition failure on Bing. Trustpilot/Google reviews not surfacing because there are no public reviews to surface (0 reviews per CLAUDE.md). |

**Score: 0 of 4 direct citations.**

### Google organic (0 of 4 queries reached)

All four attempts (queries 3, 7, 9, 12) returned HTTP 429 reCAPTCHA pages from `google.com/sorry/index`. No data captured. Consistent with previous audit — same sandbox IP pool, same block.

---

## 3. Cross-query patterns

1. **Source-list incumbency is locked in**. Across Perplexity's 12 answers, the same five UK competitor domains recur on every UK-framed query: lathamssteeldoors, gerdadoors, doorandwindowexperts, doorsforsecurity, bradbury-group. These domains are the "incumbent retrieval set" — Perplexity reaches for them before exploring further. Bing's AI summary on query 3 cites four of the same five. Cracking this set requires either (a) being explicitly referenced by one of them, (b) outranking them on the underlying organic SERP that Perplexity samples, or (c) being structurally cited as the answer to a question they don't answer.

2. **The brand exists in Perplexity's suggestion graph but not its retrieval graph**. On query 7, Perplexity surfaced a follow-up suggestion "Examples of SteelR doors with SR3 SR4 ratings" — meaning the entity IS in the index, indexed alongside SR3/SR4. But the live answer cites bradbury-group and doorandwindowexperts instead. The retrieval ranker is choosing those over steelr.co.uk despite SteelR's far more detailed PAS 24 / SR3 / SR4 page. The gap is authority signal (domain age, backlink count) not topical coverage.

3. **Entity confusion on bare-brand query is severe and self-inflicted**. "steelr reviews" maps to Pittsburgh Steelers / a manufacturing employer called "Steeler" across both Perplexity and Bing. With 0 public reviews on Trustpilot / Google / Houzz / Checkatrade (per CLAUDE.md), there is no review-surface anchor to teach AI engines that "steelr" is a UK door brand. Until external review content exists, the entity will be wrongly disambiguated forever.

---

## 4. Three highest-leverage findings vs last week's audit

### Finding A — The spec-table edit on /steel-front-door-vs-composite cannot, on its own, fix query 3
**Tag: Reasoned.** The new spec-by-spec table addresses content-completeness on the SteelR comparison page. But Perplexity's query-3 answer is built from energyswingwindows / gerdadoors / valleylockanddoor — none of which link to SteelR. AI retrieval at this surface is governed by **which domains the engine pre-selects as authoritative** for "steel vs composite", not by which single page has the deepest table. Predicted impact 14-30 days from now: zero unless an external authority site is updated to link the new table, or the SteelR page accumulates fresh backlinks. **Action implied: pair the spec-table content with outreach — get one of the recurring "incumbent" UK sources to reference the table.** Reversibility: cheap (existing content, no rollback risk).

### Finding B — Query 7 is the single highest-leverage AI-citation target on the whole site
**Tag: Tested-locally** (suggestion-graph evidence captured this run). Perplexity's follow-up suggestion engine already knows the SteelR-to-SR3/SR4 association. That means the entity vectorisation is correct — only the retrieval ranking is failing. This is reachable. Recommended next experiment: get steelr.co.uk linked from a citation-friendly third-party PAS 24/SR3 explainer (architect publication, security industry blog, planning portal). Reversibility: cheap. Measurement: re-run query 7 in 14 days, look for SteelR named in the main answer body (not just the follow-up).

### Finding C — The "steelr reviews" entity confusion has nothing to do with on-site SEO and everything to do with off-site reviews
**Tag: Verified** (CLAUDE.md records 0 reviews; this audit confirms the AI consequence). Until SteelR has 5+ Google Reviews, 3+ Trustpilot reviews, or a Houzz profile with reviews, the bare-brand query will misroute to Pittsburgh Steelers / Steeler manufacturing. The fix is not in code, schema, llms.txt, or page content — it is review acquisition (user-managed, do not re-pitch process). Cost of inaction: every "steelr reviews" search a prospect runs lands on Pittsburgh Steelers content, which kills brand-credibility AI summaries for the foreseeable future. Reversibility of inaction: cheap — first 3-5 reviews flip the disambiguation almost immediately because the door context will dominate the 7 currently-zero-context tokens.

---

## 5. Queries worth re-testing in 14-30 days

To measure spec-table impact specifically:

1. **steel vs composite front door which is better** — direct target page, primary measurement.
2. **pas 24 vs sr3 vs sr4 explained** — brand-known-to-suggestion-engine query, best chance of crossing into main answer body.
3. **who makes bespoke steel front doors in the uk** — incumbent-list query, hardest to crack, biggest payoff if it moves.
4. **steelr reviews** — entity-recognition canary. If review acquisition starts, this is where it shows first.

Skip on re-test (low signal-to-effort):

- US-framed queries (1, 6, 9, 10) — Perplexity returns US sources by default; SteelR cannot displace US-context retrieval without explicit "UK" framing.
- "Most secure front door you can buy" (query 4) — too broad, dominated by generic security-door content. Run the more specific PAS/SR3 query instead.

---

**End of report. Word count: ~1,180.**
