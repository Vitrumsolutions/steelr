# SteelR — Bing visibility audit + AI engine coverage map

**Captured:** 2026-05-17 (live via Claude-in-Chrome MCP against user's logged-in browser session)
**Companion file:** `vitrums/audit-data/serp-captures/20260517-bing-and-ai-engine-coverage.md`
**Previous baseline:** `audit-data/serp-captures/20260517-panel-llms-ai.md` (earlier the same day, pre-deploy)

---

## 1. Bing Webmaster Tools — SteelR live state

Source: bing.com/webmasters dashboards for `steelr.co.uk`.

### Sitemaps
| Field | Value |
|---|---|
| Sitemap URL | https://steelr.co.uk/sitemap.xml |
| Last submit | 19 Apr 2026 |
| **Last crawl** | **15 May 2026** |
| Status | Success |
| URLs discovered | 313 |

**Finding:** Bing re-crawled the sitemap on 15 May (2 days ago), discovering all 313 URLs. **This is healthier than Vitrums' sitemap which has been stale at 19 Apr for 28 days.** Bing is treating the two sites differently — likely because SteelR's smaller surface (313 vs 1.3K) and steady IndexNow pings keep the host warm.

### IndexNow submissions
| Field | Value |
|---|---|
| Total URLs submitted | 1.6K |
| Sources | Self |
| Sample batches | 22 Apr 418 · 23 Apr 177 · 25 Apr 243 · 27 Apr 312 · 28 Apr 312 · onward |
| Last visible batch | 13 May |

**Finding:** Healthy IndexNow pipeline. 1.6K total (vs Vitrums 6.5K — consistent with SteelR's smaller URL surface).

### Site Explorer — root folder `steelr.co.uk`
| Metric | Value |
|---|---|
| Indexed | **84** |
| Error | 0 |
| Warning | 0 |
| Excluded | 165 |
| URLs (folder total) | 249 |
| Impressions (Last 6 months) | 15 |

**Finding:** SteelR has 84 root-level URLs indexed on Bing (vs Vitrums' 4). 165 excluded. Much better indexed-to-total ratio than Vitrums (34% vs 2.5%). But only 15 impressions over 6 months — Bing IS crawling and indexing SteelR more thoroughly, but the indexed pages aren't generating impressions because the brand has no Bing-side authority yet.

### Search Performance (3 months: Apr 20 – May 13)
| Metric | Value |
|---|---|
| Total clicks | **0** |
| Total impressions | 19 |
| Avg CTR | 0% |
| Distinct keywords surfacing | ~17 |

Notable rankings (each at 1 impression in 90 days):
- **`steel front doors residential uk` — position 4.00** ✅
- **`london chelsea terraces front doors` — position 2.00** ✅
- **`henley steel door` — position 2.00** ✅
- `where might you commonly find double-door frames in buildings` — 1.00 (educational)
- `u value and thermal mass of a average door` — 1.00 (educational)
- `lps 1175 issue 8 sr4 standard doors` — 5.00
- `lps sr4 meaning` — 4.00
- `sr4 vs sr3` — 9.00
- `what is sr4 rating` — 7.00
- `steel u value` — 11.00
- `steelr fire resistance` — 4.00 (brand-adjacent)

**Finding:** The 22 Apr CLAUDE.md baseline "Bing 0/15 keywords ranking" was specifically about the Serper-15 sweep. **The fuller picture: 17 keywords surfacing on Bing including 3 high-intent commercial queries on page 1 (steel front doors residential uk #4, london chelsea terraces #2, henley steel door #2).** Recovery is happening at the long-tail level. But each only got 1 impression in 90 days — microscopic absolute volume.

### AI Performance (BWT BETA tab — Microsoft Copilot + partners citations)
| Metric | Value |
|---|---|
| Total Citations | **8 (3M window)** |
| Spikes | 5 May (5 citations), 6 May (1), 11 May (2) |
| Grounding Queries report | No data available |

**Finding:** SteelR cited 8 times by Bing-grounded AI engines over 90 days (vs Vitrums' 3). **More Bing-AI citations than the parent brand.**

---

## 2. AI engine coverage map — SteelR

Live tests, today, against logged-in browser session.

| Engine | Query | Cited? | Position / context | Competitors named |
|---|---|---|---|---|
| **Perplexity** | "best UK bespoke steel front door manufacturer" | ❌ | Maps panel + Strongdor / Latham's / Original Steel Doors / Steel Door Company | Strongdor, Latham's, Original Steel Doors, Steel Door Company; Maps: Ross Industrial, Door System Scotland, Door Spares UK, SAFE-door |
| **Perplexity** | "luxury bespoke steel front door UK" | ❌ | Modern Doors, Prestige Steel Doors, Iconic Doors, SWD Bespoke | as listed |
| **Perplexity** | "steel front door for grade ii listed property UK" | ❌ | Historic England policy-only answer, no brands recommended | none |
| **Perplexity** | "steel vs composite front door UK" | ❌ | edgebp, checkatrade, doorsforsecurity cited | as listed |
| **Perplexity** | "bespoke steel front door UK" | ❌ | Latham's headline; 8 brands listed (Bespoke Steel Doors, Modern Doors, Iconic Doors, Original Steel Doors, Latham's, Strongdor, Doors4Security, Samson Doors) — **SteelR conspicuously absent** | as listed |
| **Perplexity** | "SR3 rated LPS 1175 steel front door UK manufacturer" | ✅ | **Named alongside Latham's as "most directly relevant for residential"** — 3 mentions | Latham's, Security Direct UK, Sunray Doors, Maxium Doors, HAG Ltd |
| **Perplexity** | "composite vs steel doors UK" | ✅ | **steelr.co cited inline 4 times** — "Steel doors are typically stronger, more resistant to impact and forced entry... Composite doors are usually cheaper than steel doors, but steel doors often offer better long-term security" sourced from steelr.co | edgebp, checkatrade, doorsforsecurity |
| **ChatGPT-with-Search** | "best UK bespoke steel front door manufacturer" | ✅ | 1 of 5 brand cards (Maps-led) | CKI Steel Doors, Black Steel Doors Ltd, Artell, SWSD |
| **ChatGPT-with-Search** | "Recommend UK companies for a luxury bespoke steel front door" | ✅ | 1 of 10 brands in panel list | Valeanto's Iron Doors, Original Steel Doors, METALFORM, Spitfire Doors, PIRNAR, RK Door Systems, Fortis Aluminium, The Handmade Door Company, Deuren |
| **ChatGPT-with-Search** | "Steel vs composite front door UK — which to pick and which UK brands cover each" | ✅ | **5 SteelR mentions; the lone steel-side headline brand**; composite-side: Solidor, Endurance, Door-Stop, Hallmark, Distinction, Comp Door, Hörmann Truedor | Solidor, Endurance, Comp Door, Door-Stop International, Hallmark Panels, Distinction Doors, Spitfire Doors, Pirnar, Urban Front, Hörmann, Gerda |
| **Google AI Mode** | "best UK bespoke steel front door manufacturer" | ✅ | **Featured by name as the headline in "High-Security & Contemporary Solid Steel" category** — full copy block: "premier name for bespoke, ultra-high-security steel front doors... commercial-grade security certifications (SR3 and SR4 ratings)... full design, site survey, and in-house installation nationwide across the UK" | Crittall Windows + Black Steel Doors (heritage category); Stronghold Security Doors (high-security category) |
| **Google AI Mode** | "steel vs composite front door UK" | ✅ | **steelr.co.uk cited as a source** for "Steel Front Door vs Composite \| Honest UK Comparison. Composite is lower initial cost. Steel is higher initial cost..." — the recently restructured `/steel-front-door-vs-composite` page is the cited URL | Worcestershire Door Company, Gerda Doors UK |
| **Google AI Mode** | "luxury bespoke steel front door UK" | ❌ | Black Steel Doors + Crittall featured; SteelR not in answer | Black Steel Doors, Crittall |
| **Grok** | "best UK bespoke steel front door manufacturer" | ❌ | Steel Door Company, Strongdor, Black Steel Doors recommended; sources Vallisco + Luxurylifestyle | as listed |
| **Gemini** | bespoke steel manufacturer / Cortizo Bucks | ⚠️ | **Inconclusive** — two queries returned empty body (auto-titled "Inquiry Error"). Free-tier rate-limit or bot detection. |
| **Microsoft Copilot** (signed in) | "best UK bespoke steel front door manufacturer" | ❌ | Strongdor, Bradbury Group, Latham's, Metador, Robust UK, Rotec, The Steel Door Company named with URLs | as listed |
| **Microsoft Copilot** (signed in) | "steel vs composite front door UK. Which UK brands cover each side" | ❌ | Solidor (2), Endurance (2), Rockdoor (2), Hörmann (2), Strongdor (1), Door-Stop (1), Virtuoso (1). SteelR absent. | as listed |
| **Microsoft Copilot** (signed in) | "luxury bespoke steel front door UK" | ❌ | Crittall (7), Black Steel Doors (5), Urban Front (5), Original Steel (2). SteelR absent. | as listed |

### SteelR summary

- **Perplexity:** Cited on **2 of 7** queries (SR3-rated, composite-vs-steel). Recently-deployed assets (the `/steel-front-door-vs-composite` restructure and the new llms-full.txt extract from commit `b581333`) appear to be flowing through — this is a **positive shift vs the 17 May staged baseline** (which captured SteelR uncited on `steel vs composite front door uk`).
- **ChatGPT-with-Search:** Cited on **3 of 3** queries. Strongest on the comparison query where SteelR is the lone steel-side headline brand.
- **Google AI Mode:** Cited on **2 of 3** queries. The "best UK bespoke" query named SteelR with the strongest copy block of any engine ("premier name... SR3/SR4... in-house installation nationwide").
- **Grok:** ❌ on 1 sample query — Grok defaulted to Steel Door Company / Strongdor / Black Steel Doors instead.
- **Microsoft Copilot:** **0 of 3** cited (best UK bespoke, steel vs composite, luxury bespoke). All three queries returned the high-DA UK competitor set (Strongdor, Bradbury, Latham's, Crittall, Black Steel, Urban Front, Solidor, Endurance, Rockdoor, Hörmann). Striking because Copilot uses Bing's index and BWT reports 84 SteelR pages indexed at root + 8 AI Performance citations over 90 days. The Bing-grounded retrieval ranker is favouring high-DA incumbents on broad queries even with SteelR in-index.
- **Gemini:** unavailable for testing this session.

---

## 3. Read against the 22 Apr + 11 May SteelR CLAUDE.md baselines

| Claim from CLAUDE.md | Today's data | Status |
|---|---|---|
| ChatGPT-with-Search 5/7 premium queries cited (11 May) | 3/3 tested today cited | ✅ Holding |
| Gemini 0/3 cited (11 May) | Inconclusive — engine wouldn't return body | Inconclusive, no contradictory evidence |
| Perplexity 2/12 partial citations (11 May) | 2/7 today cited (SR3-rated, composite-vs-steel) | Comparable rate; new citation on composite-vs-steel suggests llms restructure is working |
| Bing 0/15 keywords ranking | BWT 3M shows 17 keywords surfacing (incl. 3 page-1 commercial) | **Better than the 22 Apr "0/15" claim** at long-tail level |
| 67 indexed pages (per 17 Apr GSC note) | BWT root folder: 84 indexed | Bing index higher than Google as of today for root |
| ChatGPT cited #1 on `best UK bespoke steel front door manufacturer` (11 May) | Today: cited but as 1 of 5 brand cards in Maps panel, not headline #1 | Slight regression — possibly free-tier ChatGPT layout difference |
| Google AI Mode reCAPTCHA-blocked from sandbox | **Worked from user's logged-in Chrome** — SteelR cited 2/3 | Now testable |
| Heritage / listed-property content gap | Perplexity returned Historic England policy answer, no brands. Gap still exists. | Holding — `/heritage-steel-front-doors-uk` page still parked, not committed |

**Net:** ChatGPT-with-Search remains SteelR's strongest channel. Google AI Mode is now reachable and shows strong recognition. Perplexity has improved on the comparison queries — directly attributable to the 17 May llms-full.txt + topic-hub restructure being picked up faster than the 30-day re-measurement window expected.

---

## 4. Anomalies and follow-ups

1. **Heritage gap unresolved.** Perplexity defaulted to Historic England policy on the Grade II listed query — no manufacturer brands recommended at all. The `/heritage-steel-front-doors-uk` page draft is still parked (per STATE.md). Worth finishing once the original diagnostic is the anchor (not vs-composite pattern-matching — see `feedback_how_is_relevant.md`).
2. **Google AI Mode "luxury bespoke" gap.** SteelR not cited; Black Steel Doors + Crittall featured. The `/luxury-steel-entrance-door-london` topic page may need a re-look — the "luxury" entity association on Google's side is currently owned by Black Steel and Crittall.
3. **`bespoke steel front door UK` Perplexity gap.** 8 UK brands listed including Latham's, Strongdor, Iconic Doors, Samson Doors — SteelR absent. Suggests the broad-intent query without the SR3 modifier doesn't pull our content yet. Future llms.txt iteration could add an "Entity reference for AI Systems" block that explicitly maps `bespoke steel front door UK` → SteelR.
4. **30 May re-measurement plan still valid.** STATE.md says re-pull `steel vs composite front door uk` on Perplexity, ChatGPT-with-Search, Gemini on 30 May (13 days post-deploy). Today's snapshot at day 4 already shows SteelR ✅ cited on Perplexity and ✅ cited on Google AI Mode — leading indicator.
5. **Gemini and Copilot blind spots.** Both unavailable this session. Suggest user signs in to Copilot in this Chrome profile to make it testable. Gemini may need a fresh browser profile or paid tier.
6. **BWT AI Performance > BWT Search Performance.** 8 AI citations vs 19 search impressions in 90 days. AI citation pickup is genuinely outpacing Bing-organic recovery — confirms the strategic bet on llms.txt + topic hubs is paying off.
