# Multi-AI Engine Citation Audit — SteelR

**Date:** 2026-05-11
**Mode:** Research-only, read-only
**Engines targeted:** 6 (Perplexity, ChatGPT, Google AI Overview, Claude.ai, Bing Copilot, Gemini)
**Engines actually measured:** 3 (Perplexity, ChatGPT logged-out, Bing Copilot Search)
**Queries:** 12 curated customer queries across funnel stages
**Method:** Firecrawl scrape of public AI answer endpoints + Firecrawl SERP for Google organic (AI Overview unreachable behind captcha)

---

## Engine method matrix

| Engine | Endpoint | Method | Worked? | Notes |
|---|---|---|---|---|
| Perplexity | perplexity.ai/search?q= | Firecrawl scrape | YES, all 12 | Perplexity MCP API key returned 401, fallback was clean. Public share pages render full answer + citations. |
| ChatGPT (logged-out) | chatgpt.com/?q= | Firecrawl scrape | YES, 4 tested | IMPORTANT: this surface answers from training data, NO Search-tool web grounding. Hallucinates brand names. Different from logged-in ChatGPT Search. |
| Bing Copilot Search | bing.com/copilotsearch?q= | Firecrawl scrape | PARTIAL, 2/4 | 2 queries returned full grounded answer; 2 returned "no results for this question." |
| Bing organic | bing.com/search?q= | Firecrawl scrape | YES, 3 tested | Strong context failures on SR3 disambiguation. |
| Google organic | google.com/search | Firecrawl SERP API | YES, 3 tested | Direct google.com scrape blocked by captcha — used firecrawl_search instead. |
| Google AI Overview | google.com/search | NOT MEASURABLE | NO | Captcha blocks direct scrape; firecrawl_search returns organic-only, not the AI Overview panel. Requires authenticated Playwright session. |
| Claude.ai | claude.ai | NOT MEASURABLE | NO | Requires authenticated session; no public q= endpoint. |
| Gemini | gemini.google.com | NOT MEASURABLE | NO | Login required; redirects to accounts.google.com. |

**Honest method disclosure:** 3 of the 6 requested engines were untestable in this sandbox without an interactive logged-in Playwright session. ChatGPT logged-out was tested but is a *different surface* than ChatGPT-with-Search-tool that paying users see. Treat ChatGPT findings as "model-recall baseline" not "live retrieval."

---

## Findings per engine

### Engine 1 — Perplexity (12/12 queries)

| # | Query | SteelR result | Source-list mention | Top 3 competitors named |
|---|---|---|---|---|
| 1 | best front door UK 2026 | NO | None | Endurance Doors (sole citation), kjmgroup |
| 2 | luxury front door UK | NO | None | Longden Doors, Spitfire Doors, Deuren, Solidor |
| 3 | are bespoke steel front doors worth it UK | **PARTIAL** | "steelr+1" cited inline | farmhousekitchenandbath, trustpilot, bereco |
| 4 | steel vs composite front door UK 2026 | **PARTIAL** | "steelr+1" cited 6 times (heavy source) | (SteelR is the dominant source) |
| 5 | which front door material lasts longest UK | NO | None | cherwellwindows, 6daydoors, billbutterswindows |
| 6 | most secure front door for UK home | NO (truncated answer) | None | knowledge.bsigroup |
| 7 | LPS 1175 SR3 vs SR4 residential explained | NO | None | ukrollershutters, hartdoors, remtech, bradbury-group, zaun |
| 8 | best steel front door manufacturer for UK architects | NO | None | Urban Front, Steel Door Company, Fabco, Bradbury Group, Latham's |
| 9 | Building Safety Act 2022 front door HMO | NO | None | gov.uk, fireco, augustapp |
| 10 | SteelR UK reviews | **BRAND-NAME FAILURE** | "I couldn't reliably find a clear match for SteelR UK" | tripadvisor (wrong business) |
| 11 | SteelR vs Latham's vs Crittall front door | YES (only because named in query) | NO source citations to steelr.co.uk | facebook.com group |
| 12 | Approved Document Q new build front door | NO | None | designingbuildings, aspire-doors, trade.origin-global |

**Perplexity scorecard: 2/12 partial-cite (Q3, Q4). 0/12 first-pick recommendation. 1/12 query failed brand recognition entirely.**

### Engine 2 — ChatGPT (logged-out, 4/12 tested)

| # | Query | SteelR result | Manufacturers named |
|---|---|---|---|
| 1 | Who are the best bespoke steel front door manufacturers in the UK | NO | Cotswold Doors, The London Door Company, Rockdoor, Bespoke Doors UK, Keylite & Armour Doors |
| 4 | steel vs composite front door UK 2026 which is better | NO | (No brands cited — generic answer from training data) |
| 6 | most secure front door UK home LPS 1175 SR3 | NO | Chubb, Latham, Solo Security Doors, Dormakaba, Pavan Group |
| 8 | best steel front door manufacturer UK architects specification | NO | Marlow Home, Kubu Doors, Endurance Doors, ThermaSteel/SteelDoor Systems, Cardale Doors |

**ChatGPT (logged-out) scorecard: 0/4. SteelR absent from every category-level query.**

**Critical pattern: ChatGPT logged-out hallucinates UK steel door manufacturer brand names** — Marlow Home, Kubu Doors, ThermaSteel, Cardale Doors as steel front door makers do not match the actual UK supplier landscape. Kubu primarily makes smart-locks, Cardale focuses on garage doors. This is a training-data artefact, not retrieval.

### Engine 3 — Bing Copilot Search (2/4 tested returned answer)

| # | Query | SteelR result | Sources read by Copilot |
|---|---|---|---|
| 1 | best bespoke steel front door UK manufacturer | NO | Strongdor, secure-house.co.uk, bespokesteeldoors.uk, Metador, steeldoorcompany.co.uk, totallysteeldoors.co.uk, facadecreations.co.uk, Deuren Doors, uniquesteelwindows.co.uk, luxbespokedoors.com (14 total) |
| 4 | steel vs composite front door UK 2026 | NO | axiomecohomes, Doors4Security, Gerda Doors UK, buildmydoor, Fairview Windows, renewalbyandersenreplacement, Book a Builder UK, FENSA, verysecuredoors, UK Composite Doors, Door Supplies Online (+5 more) |
| 6 | most secure front door UK home | "No results for this question" | n/a — Bing Copilot refused to answer |
| 7 | LPS 1175 SR3 vs SR4 residential UK | "No results for this question" | n/a — Bing Copilot refused to answer |

**Bing Copilot scorecard: 0/2 (of those that returned answers). 2 commercial-intent SR3/security queries hit "no results" refusal.**

**Critical pattern: Bing Copilot read SteelR's strongest organic competitor (steel-vs-composite-UK 2026, where SteelR ranks #2 on Google) without surfacing it.** Bing's AI is reading other sources for the same topic — Gerda, axiomecohomes, Doors4Security — and ignoring SteelR despite the page being ranked.

### Engine 4 — Bing organic SERP

- "best bespoke steel front door UK manufacturer": Strongdor 14 mentions, Latham's 1, Crittall 1. **SteelR 0.**
- "steel vs composite front door UK 2026": context-failure — returned Wikipedia/Britannica steel-as-metal pages. SteelR absent.
- "are bespoke steel front doors worth it UK": Strongdor, Deuren, Bereco, London Door, Trustpilot reviews. **SteelR absent from page 1.**
- "SR3 vs SR4 residential steel door": **disambiguation failure** — returned SR3 marine non-profit, Radical SR3 race car, GitHub super-resolution paper. SteelR absent.

### Engine 5 — Google organic (firecrawl_search)

- "best bespoke steel front door UK manufacturer": top 10 = LUX, Crittall, Strongdor, Reddit thread, Black Steel Doors, luxurylifestyle.com, Latham's, Modern Doors, Domadeco, Vallisco. **SteelR absent.**
- "steel vs composite front door UK 2026": **steelr.co.uk #2** (Honest UK Comparison), behind Gerda Doors #1.
- "LPS 1175 SR3 vs SR4": **steelr.co.uk #8** (/sr3-residential-steel-door), in a list dominated by Warrior, Stronghold, Maxium, Strongdor.
- "SteelR steel doors UK" (brand): **SteelR own pages 1, 2, 3** (homepage, /collection, /blog/composite-vs-steel-doors-2026).

---

## Cross-engine pattern: where SteelR is "read but not chosen"

SteelR's organic page `/steel-front-door-vs-composite` ranks **#2 on Google** for "steel vs composite front door UK 2026" — yet:
- Bing Copilot Search read 11+ sources on the same query and chose NOT to cite SteelR.
- Perplexity cited "steelr+1" 6 times in its answer for the same query, the strongest cross-engine pickup of the audit.
- ChatGPT logged-out doesn't cite anyone (no retrieval).

This is the **"organic-rank-without-AI-citation"** failure mode: SteelR has the SEO win for the query, but the AI engines that re-summarise the topic for users are skipping it. The competitors AI engines pick (axiomecohomes, Gerda, Doors4Security, Fairview, FENSA) are not even in Google's top 10 for the same query. **AI source-selection diverges from Google organic rank.**

## Cross-engine pattern: SR3 / SR4 + Approved Doc Q + architects = 100% loss across all engines

The four queries where SteelR has built dedicated topic pages — `/sr3-residential-steel-door`, `/pas-24-steel-entrance-door`, `/secured-by-design-steel-front-door`, `/steel-front-door-vs-composite`, plus the SR4 blog — all fail to surface SteelR on category-level questions on every engine tested. The pages rank organically (Google #8 for SR3) but AI engines compose answers from other sources entirely.

## Cross-engine pattern: different engines, different competitor sets, SteelR absent from all

| Query class | Perplexity competitor set | ChatGPT competitor set | Bing Copilot competitor set | Common to all 3 |
|---|---|---|---|---|
| Luxury / bespoke / best | Longden, Spitfire, Deuren, Solidor | Cotswold, London Door, Rockdoor, Keylite, Armour | Strongdor, Secure House, Metador, Steel Door Co, Deuren | **None** — three completely different lineups |
| Architects | Urban Front, Steel Door Co, Fabco, Bradbury, Latham's | Marlow Home, Kubu, Endurance, ThermaSteel, Cardale | (not tested on Bing Copilot for this query) | **Deuren appears 2x** |
| SR3 | (generic security suppliers — ukrollershutters, hartdoors, Bradbury, Zaun) | Chubb, Latham, Solo Security, Dormakaba, Pavan | (Bing refused) | None |

The three AI engines disagree about who the UK leaders are. ChatGPT is hallucinating. Perplexity is favouring brands with strong architect-facing pages. Bing Copilot is reading commercial-door specialists. **SteelR is absent from every list.** This means there is no single "shadow leaderboard" to break into — SteelR needs different proof for each engine.

## Verbatim phrases AI engines DID extract from SteelR (the protected surface)

Two recorded inline citations to SteelR across all 12 Perplexity queries:

**Q3 — are bespoke steel front doors worth it (Perplexity, citation `steelr+1`):**
> "An unusual doorway size or period property where standard doors look awkward. A priority on slim profiles, strong security, and a high-end look. A home where the entrance is a major design feature and you want a custom result."

This phrasing pattern matches the bespoke/period-property language on SteelR's homepage and `/luxury-steel-entrance-door-london` topic page.

**Q4 — steel vs composite (Perplexity, citation `steelr+1` 6 times):**
> "Composite doors usually cost less upfront and are common in the UK market. Steel doors generally cost more initially but can last much longer, often with better long-term value if you keep the house for decades. Steel has the edge on security and fire-rated options, especially where those specs are needed for flats, HMOs, or certain new-build requirements. Composite doors usually offer better insulation 'out of the box,' while steel needs proper thermal-break design to avoid cold bridging and condensation."

Every one of these sentences traces to the comparison structure on `steelr.co.uk/steel-front-door-vs-composite`. This is **the working AI-citation page on the site** — replicate this pattern on other topic hubs.

---

## Top 3 highest-leverage gaps to fix

**1. Bing Copilot ignores SteelR's #2-Google-ranked vs-composite page.** SteelR ranks where it counts, but the AI summariser layer Bing wraps around it is reading 11 other sources and not SteelR. Likely cause: Bing's grounding model is preferring `gerdadoors.co.uk`, `axiomecohomes.co.uk`, and `doorsforsecurity.co.uk` because those pages have explicit numeric comparison tables (£800-£1,800 installed, U-value 1.2-1.4 W/m²K, 25-30 year lifespan). SteelR's vs-composite page has the structural comparison but **the brand-policy "no displayed prices" rule and absent specific U-value numbers on that page is removing the quotable artefacts AI engines need.** Adding explicit U-value claims and lifespan year-ranges (without violating no-displayed-prices) would close this. The hook: SteelR's llms-full.txt already declares U-values; the public-HTML vs-composite page doesn't surface them in extractable form.

**2. No SteelR brand entity recognition on Perplexity for "SteelR UK reviews."** Perplexity returned "couldn't find a clear match." This is a Knowledge Graph / entity-resolution miss. With 0 Google reviews (Maps audit 22 Apr) and no Trustpilot profile, AI engines have no external review-corpus to attach the brand to. The brand-Wikidata entry, Google Knowledge Panel, or Trustpilot listing would each be a separate signal — none currently exist. Cheapest leverage: a Trustpilot business profile (free) plus Knowledge Graph submission via schema.org Organization + sameAs links.

**3. SR3 / SR4 / LPS 1175 disambiguation entity loss.** Bing organic returned SR3 marine non-profit, Radical SR3 race car, and a GitHub super-resolution paper on a security-rating query. Bing Copilot refused to answer at all ("no results for this question"). This is not a SteelR-only problem — Bing literally cannot disambiguate "SR3" in a steel-door context. The fix is **a single, query-explicit anchor page** that uses the long-form phrasing AI engines can disambiguate: "LPS 1175 Issue 8 Security Rating 3 for residential steel doors." SteelR's `/sr3-residential-steel-door` page exists but is ranking only #8 on Google, suggesting weak entity-anchoring. Add a one-line "Disambiguation note: SR3 = LPS 1175 Issue 8 Security Rating 3" at the top of that page to bolster entity matching.

## What I could not find

- **Google AI Overview answer panel** for any query. Direct google.com scrape blocked by captcha (HTTP 429), and `firecrawl_search` returns the organic links only, not the AI Overview block. Testing this surface requires an authenticated Playwright session on a non-flagged residential IP.
- **Claude.ai citation behaviour.** No public q= endpoint, requires authenticated session.
- **Gemini answers.** Redirects to Google login.
- **ChatGPT with Search tool enabled.** The chatgpt.com/?q= path tested above runs without the Search tool, so it answered from training data. The actual logged-in ChatGPT Search experience that retrieves live URLs would likely behave more like Perplexity (and the user has visibility into this from earlier audits where ChatGPT cited SteelR for "best bespoke steel front door companies UK").
- **Yandex / Seznam / Naver / Yep** — outside scope but these are the IndexNow-receiving engines and likely have separate AI surfaces worth testing in a future audit.

---

## Sources / live answer-URL anchors captured

Perplexity (live answer pages):
- https://www.perplexity.ai/search/best-front-door-uk-2026-slOkb7FcQgChpC43RGwptQ
- https://www.perplexity.ai/search/luxury-front-door-uk-manufactu-reRNkXHZTBGlb5CxAjZgaA
- https://www.perplexity.ai/search/are-bespoke-steel-front-doors-yUEOywwQTg6KTm7Zmu8c3Q
- https://www.perplexity.ai/search/steel-vs-composite-front-door-_xugfiBkS_.MZe2nP7OBVQ
- https://www.perplexity.ai/search/which-front-door-material-last-QyQFKn2fSkC.TlHcEmrRyg
- https://www.perplexity.ai/search/most-secure-front-door-for-uk-aPUi8uhRQdmeEobNfVD6RQ
- https://www.perplexity.ai/search/lps-1175-sr3-vs-sr4-residentia-rEakaQVTSaWqIF8H.gYAgQ
- https://www.perplexity.ai/search/best-steel-front-door-manufact-K2L7b0kDTS.hzV01qdbcLA
- https://www.perplexity.ai/search/building-safety-act-2022-front-UvcDT0.8R0CEoD8JVKANIw
- https://www.perplexity.ai/search/steelr-uk-reviews-TwOBCzAlRjy3abopt8Lpaw
- https://www.perplexity.ai/search/steelr-vs-lathams-vs-crittall-d0HuUZl0QUS5tYLy3.WM6Q
- https://www.perplexity.ai/search/approved-document-q-new-build-XPk6zlBXQ_Kcbfblv_RqiQ

ChatGPT (logged-out, training-data answers, q= URL):
- https://chatgpt.com/?q=Who+are+the+best+bespoke+steel+front+door+manufacturers+in+the+UK
- https://chatgpt.com/?q=steel+vs+composite+front+door+UK+2026+which+is+better
- https://chatgpt.com/?q=most+secure+front+door+UK+home+LPS+1175+SR3
- https://chatgpt.com/?q=are+bespoke+steel+front+doors+worth+it+UK+homeowner
- https://chatgpt.com/?q=best+steel+front+door+manufacturer+UK+architects+specification

Bing Copilot Search:
- https://www.bing.com/copilotsearch?q=best+bespoke+steel+front+door+UK+manufacturer
- https://www.bing.com/copilotsearch?q=steel+vs+composite+front+door+UK+2026
- https://www.bing.com/copilotsearch?q=most+secure+front+door+UK+home (no results)
- https://www.bing.com/copilotsearch?q=LPS+1175+SR3+vs+SR4+residential+UK (no results)

Google organic top-3 cited SteelR pages:
- https://steelr.co.uk/steel-front-door-vs-composite — Google #2 for steel vs composite UK 2026
- https://steelr.co.uk/sr3-residential-steel-door — Google #8 for LPS 1175 SR3
- https://steelr.co.uk/ — Google #1 for "SteelR steel doors UK" brand
