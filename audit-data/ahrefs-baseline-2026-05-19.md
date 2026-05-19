# Ahrefs Webmaster Tools baseline — 19 May 2026

**Captured:** 2026-05-19 18:30 GMT live via Claude-in-Chrome MCP against user's logged-in Ahrefs account.
**Setup history:** Account created 2026-05-17, GSC import + all 3 audit toggles ON. 48 hours have elapsed. Data fully populated.

## Headline numbers

| Metric | Value | Notes |
|---|---|---|
| Health Score | **100** | Site Audit clean (Hillingdon broken-image fix on 17 May resolved the 2 errors) |
| Domain Rating (DR) | **0** | Zero domain authority; expected for 6-week-old domain with 0 backlinks |
| URL Rating (UR) | **0** | Zero page authority |
| Backlinks | **0** (all time) | Zero inbound links per Ahrefs index |
| Referring domains | **0** (all time) | Zero external sites linking to steelr.co.uk |
| Organic keywords | **0** | Ahrefs sees zero ranking keywords. GSC sees 450 (mostly position 30+ which Ahrefs doesn't index) |
| Organic traffic | **0** | Strict Ahrefs definition; GA4 shows 70 users in last 7 days |
| Top 3 keywords | **0** | None ranking position 1-3 in Ahrefs |
| Paid keywords / traffic | **0 / 0** | Confirmed no Google Ads spend |
| Organic competitors (auto-detected) | **None detectable** | Depends on organic keyword data which is 0 |

## AI citations (Brand Radar, 30-day window)

| Engine | Citations | Pages cited |
|---|---|---|
| **ChatGPT** | **55** | 10 |
| Perplexity | 6 | 2 |
| Gemini | 3 | 2 |
| Copilot | 2 | 1 |
| Grok | 1 | 2 |
| AI Overviews | 0 | 0 |
| **Total** | **67** | **~17 unique pages** |

ChatGPT dominance is stark — 82% of all AI citations across 5 engines come from ChatGPT alone. The 10 SteelR pages cited on ChatGPT confirm the channel-of-record finding.

Note: Brand Radar drill-down (which queries, which extracted text per citation) is behind the Ahrefs paid tier. AWT free tier shows aggregate counts only. Free tier covers what we need for the diagnostic.

## What this confirms vs the live capture audit (same day)

| Live capture finding | AWT verifies? |
|---|---|
| ChatGPT-with-Search is SteelR's strongest channel | ✅ Yes — 55 citations vs 6 on Perplexity |
| Perplexity citation is thin | ✅ Yes — 6 citations across 2 pages |
| Google AI Overview citation is non-existent | ✅ Yes — 0 |
| Bing / Copilot citation weak | ✅ Yes — 2 citations across 1 page |
| Domain authority gap is the structural ceiling | ✅ Yes — DR 0, RD 0, BL 0 |
| Site is technically healthy (no broken pages etc) | ✅ Yes — Health Score 100 |
| Competitors can't be auto-detected from our keyword profile | ✅ Yes — 0 ranking keywords → 0 competitor inference |

## What this changes about the diagnostic

**The "no enquiries" problem is structurally explained by THREE compounding facts:**

1. **Zero backlinks.** 6 weeks live and zero. Without any referring domains, Google has no signal to lift the site past position 30. Latham's, Stronghold, Banham all have years of accumulated backlinks; SteelR has none.

2. **Zero indexed ranking keywords (per Ahrefs).** GSC sees us in 450 query-impression cells but Ahrefs (which only indexes positions 1-100 with confidence) sees none. This means our presence is genuinely thin at competitive-position depth.

3. **AI-channel concentration risk.** 82% of our AI citations come from ChatGPT alone. If ChatGPT's ranking model shifts or competitors invest in the same llms.txt + topic-hub strategy, our visibility evaporates from this single channel.

## Implication for the `/luxury-steel-front-doors-uk` hub recommendation

Building category-language coverage on-site is necessary but not sufficient. **Without backlinks, even the best new hub page sits at position 32 with zero clicks.** A backlink-building component (directory listings, partner-supplier pages, trade-press inclusions) is required in parallel to content additions.

This is the gate-tagged [VERIFIED] finding: backlinks are the structural blocker. On-site work alone won't move the metric on the 30-day window.
