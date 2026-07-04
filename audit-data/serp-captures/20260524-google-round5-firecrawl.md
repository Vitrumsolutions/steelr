# SteelR visibility — round 5, Google residential-steel sweep (firecrawl)

**Date:** 2026-05-24
**Method:** firecrawl_search, `location: United Kingdom`, top 10 organic per query. Firecrawl uses a third-party crawler — no user login, no Google account, no owner-managed personalisation. Cleaner than the 22 May logged-in Google leg, with one geo caveat (see below).
**Scope rule applied:** every query carries `steel` plus a residential term (`home` / `house` / `residential` / `domestic`). No composite, aluminium, or generic "luxury front door" queries.
**AI engines:** still blocked from this sandbox (ChatGPT and Gemini hidden-tab throttle, Perplexity free-tier daily limit). 22 May AI baseline still stands. See "Blocked" section.

---

## Headline

**0 of 36 Google queries return steelr.co.uk in the top 10.** Including queries on which the 22 May logged-in Google leg recorded #1, #2 wins (Buckinghamshire, Kensington, Chelsea hubs). Firecrawl is a third-party Google scrape — neutral by design, no SteelR-favouring personalisation. The competitor cluster that won 22 May still wins in this neutral read: Latham's, Modern-doors, Domadeco, Doors4Security, Pirnar, Samson, Steel Door Company, Crittall, Fort Premium, plus heritage-specialist Multisteel and HNW-specialist Henleys.

### Critical caveat — firecrawl UK geo broke on 4 of 5 location queries

`Surrey`, `Buckinghamshire`, `Kensington`, `Chelsea` returned US results (Surrey BC, Bucks County PA, US Chelsea, generic Pinterest/Home Depot) — firecrawl resolved the place names to non-UK locations despite `location: United Kingdom`. The 22 May logged-in Google wins on these hubs cannot be cleanly compared against this round. Treat the location-query line of this report as **inconclusive**, not as a regression. To confirm whether the hub wins still hold needs Claude_in_Chrome against a fresh UK incognito window. Five non-location queries with `uk` in the string returned UK-relevant SERPs reliably.

---

## Results: 36 queries

### Mani's verbatim 4 (the canonical buyer set)

| # | Query | SteelR | Top 5 competitors |
|---|---|---|---|
| 1 | `who does the highest security steel doors for houses` | ❌ | Doors4Security US, HiddenDoorStore, Home Depot, Reddit r/preppers, Boss Security Screens |
| 2 | `which steel door company does house front doors` | ❌ | Jeld-Wen, Home Depot, Quality Window & Door, Amazon, Armored-doors |
| 3 | `steel doors best for home entrance` | ❌ | Home Depot, Domadeco, ProVia, Home Center Outlet, STL Windows |
| 4 | `best home front door steel door companies` | ❌ | Jeld-Wen, Consumer Reports, Home Depot, Yelp Philadelphia, Goguida |

US results dominate when the query has no `uk` term — firecrawl defaults UK-side, but the SERP itself is US-heavy. Same pattern as the 22 May incognito-test caveat: these phrasings are not where a UK buyer would actually land regardless of search engine.

### Generic residential-steel + uk — 10

| Query | SteelR | Top 3 UK competitors visible |
|---|---|---|
| `steel front doors for homes uk` | ❌ | Latham's, Modern-doors, Domadeco |
| `residential steel front door uk` | ❌ | Latham's, Doorsuppliesonline, Domadeco |
| `bespoke steel front door for my house` | ❌ | Rustica US, ModernSteelDoors US, IronWroughtDoors US |
| `steel entrance door for home uk` | ❌ | Latham's, Doorsuppliesonline, Domadeco |
| `steel front door manufacturer for houses uk` | ❌ | Steel Door Company, Doors4Security, Domadeco |
| `steel front doors for private residences uk` | ❌ | Latham's, Modern-doors, Domadeco |
| `who installs steel front doors on houses uk` | ❌ | Latham's, Domadeco, Doors4Security |
| `steel front door for a detached house uk` | ❌ | Domadeco, Doors4Security, Urban Front |
| `steel front door for a new build home uk` | ❌ | Pirnar, Pinterest, Reddit r/homeowners |
| `domestic steel front door uk` | ❌ | Latham's, Modern-doors, Domadeco |

### Location + residential steel — 5 (geo-unreliable, see caveat)

| Query | SteelR | Notes |
|---|---|---|
| `residential steel front door london` | ❌ | UK SERP, Latham's #1, Modern Doors #2 |
| `steel front door for a house in surrey` | ❌ | Firecrawl returned Surrey BC + US results — **geo broken** |
| `steel front door installer for houses in buckinghamshire` | ❌ | Returned Bucks County PA — **geo broken** |
| `steel home entrance door kensington` | ❌ | Returned US/generic — **geo broken** |
| `steel front doors for homes in chelsea` | ❌ | Returned TH Doors Chelsea + US — **partially geo broken** |

### Security-tied — 4

| Query | SteelR | Top 3 |
|---|---|---|
| `most secure steel front door for a house uk` | ❌ | Latham's, Homebuilddoors blog, Fort Premium |
| `steel front door for home security uk` | ❌ | Latham's, Doors4Security, YouTube Latham's |
| `burglar proof steel front door for house uk` | ❌ | Latham's, Security Doors Direct, Steel Security Doors |
| `steel front door for a family home uk` | ❌ | Doorsuppliesonline, Home Depot, Domadeco |

### Project-tied — 3

| Query | SteelR | Top 3 |
|---|---|---|
| `steel front door for victorian house london` | ❌ | Reddit HENRY UK, Jonathan Elwell Interiors, Pinterest London Door Co |
| `steel front door for georgian townhouse uk` | ❌ | Secure House, Pinterest, RK Door Systems. **Baseline had #5 via blog; absent in firecrawl** |
| `steel front door for self build home uk` | ❌ | Self-build.co.uk, Domadeco, Steel Door Company |

### Delta — 10 new commercial-intent queries

| Query | SteelR | What it shows |
|---|---|---|
| `steel front door installer near me` | ❌ | Returned US "near me" — geo broken on bare "near me" |
| `steel front door reviews uk home` | ❌ | **Trustpilot for Steel Door Company at #1 (105 reviews).** Reviews moat compounds: SteelR has zero on any platform |
| `how much does a steel front door cost for a house uk` | ❌ | GreenMatch, Door & Window Experts, Celestial Windows, Latham's Help Centre. **SteelR's own `/steel-front-door-cost-uk` topic page does not surface** |
| `who installs steel front doors near me` | ❌ | US results — geo broken |
| `latham's alternative steel front door for home` | ❌ | YouTube Latham's, cbinsights competitors page, Reddit. **Open content gap — no "alternative to Latham's" angle from SteelR** |
| `bradbury group alternative steel home front door` | ❌ | Bradbury Group own results. Same gap |
| `steel front door for grade ii listed home uk` | ❌ | **Multisteel #1**, Crittall #2, Doorpac, Historic England, Lightfoot Windows. Confirms the heritage gap flagged 11 May |
| `steel front door for conservation area house uk` | ❌ | IQ Glass, Multisteel, Decorio, Evolution Windows, Three Counties |
| `architect specified steel front door for private residence uk` | ❌ | Architectural Digest, Urban Front case studies, Secure House, Crittall |
| `steel front door for high net worth home uk` | ❌ | **Henleys Security Doors #1 with explicit HNW/UHNW insurance angle.** Clean content gap — no SteelR page on insurer-mandated HNW positioning |

---

## What changed vs the 22 May baseline

| Channel | 22 May | 24 May (firecrawl) | Read |
|---|---|---|---|
| Generic residential-steel | 0 / 10 organic, 1 owner-managed Maps pin | 0 / 10 organic, no Maps on firecrawl | Holding at absent. Maps pin only existed because of owner-logged-in personalisation, not the SERP itself. |
| Security-tied | 0 / 4 | 0 / 4 | Holding. |
| Project-tied | 1 / 3 (Georgian blog #5) | 0 / 3 | Likely a firecrawl-vs-Google index delta rather than a true loss. The Georgian blog still exists; needs re-verify on Google directly. |
| Location hubs (Surrey, Bucks, Kensington, Chelsea) | 4 / 5 wins (#9, #2, #2, #2 on logged-in Google) | 0 / 5 — but **geo broken on 4 of 5** | **Inconclusive.** Firecrawl resolved the borough/county names to non-UK locations. Re-test with Claude_in_Chrome incognito UK to settle. |
| Mani's verbatim 4 | 0 / 4 | 0 / 4 | Holding. |

The headline does not move: SteelR is absent on the commercial-intent residential-steel queries a real UK homeowner types. The wins on the 22 May leg were all either location-hub queries (geo-broken on this round, inconclusive) or brand-defence queries (`is steelr legit`), neither of which acquires new prospects.

---

## New findings (vs the 22 May leg)

Three competitor-owned content gaps this round surfaced that the 22 May rounds did not:

1. **Henleys Security Doors** owns `steel front door for high net worth home uk` with a single, explicit page on bespoke security doors for HNW/UHNW insurance coverage. SteelR has no equivalent page; the closest is the generic security spec page. [REASONED] HNW positioning is a natural SteelR fit (price tier, audience), but no captured before/after exists on whether writing that page moves anything.
2. **Multisteel** owns `steel front door for grade ii listed home uk` outright at #1. CLAUDE.md flagged this gap 11 May (`/heritage-steel-front-doors-uk` deferred). Still open. [REASONED] same caveat as above.
3. **Steel Door Company** owns `steel front door reviews uk home` with 105 Trustpilot reviews. The reviews moat now spans Google Maps, AI grounding (per 22 May ChatGPT finding), AND organic Trustpilot — three separate channels filtering SteelR out of "best/reviews" ratings-grounded answers.

---

## Blocked this round

- **ChatGPT-with-Search.** Same hidden-tab + React-controlled-input combination as rounds 3/4. Cannot programmatically submit queries from a backgrounded tab.
- **Gemini.** Streaming pipeline pauses on backgrounded tabs.
- **Perplexity.** Free-tier daily limit was hit during round 4 on 22 May; the reset is rolling. Worth one more attempt next session.
- **Bing organic / Copilot.** Not tested this round.

To complete the AI legs on round 5: Chrome window foregrounded for ~10 minutes against Mani's logged-in ChatGPT and Gemini sessions, then Claude_in_Chrome drives the 4 baseline + 4 delta queries on each.

---

## Method honesty (the geo issue is real)

Firecrawl is not a perfect proxy for "fresh incognito UK Google." For UK-specific commercial queries with `uk` in the string it returns UK SERPs reliably. For ambiguous place names (`surrey`, `buckinghamshire`, `kensington`, `chelsea`, bare `near me`) it can resolve to North American locations even with `location: United Kingdom` set. The cleanest read on the location-hub queries needs Claude_in_Chrome against a true incognito UK window. This round's location lines are therefore flagged inconclusive rather than treated as regressions.

The non-location lines (24 of 36 queries) are reliable. They confirm the headline.

---

## Prior winners — re-verified this round (12 queries)

Pulled from the 22 May logged-in Google leg and re-run on firecrawl. Result: **3 of 12 confirmed on firecrawl, 9 of 12 unconfirmed.**

| Query | 22 May claim | 24 May firecrawl | Read |
|---|---|---|---|
| `steelr` (brand) | #1 organic, homepage | **#7** (homepage) | Confirmed at #7. Pittsburgh Steelers owns #1, 1001Fonts #2, X.com Twitter handle #3, military STEEL-R framework #4, Yet Analytics #5, Spotify song #6, Steelr handle on Instagram #8. **Brand-confusion problem is severe** — six entities outrank our own homepage on our own brand name on a neutral SERP. |
| `bespoke steel front doors UK` | #1 organic | **ABSENT in top 10** | bespokesteeldoors.uk #1, Modern Doors #2, Latham's #3. Either lost the #1, or 22 May was personalised. |
| `steel doors Buckinghamshire` | #1 organic (post-13 May recovery) | **ABSENT in top 10** | Latham's #1, Steel Door Company #2, Totally Steel Doors #3. Either lost, or 22 May was personalised. |
| `steel doors Surrey` | (was #10 Maps only on 22 May) | **ABSENT** + geo broken | Returned Surrey BC results. |
| `steel doors Kensington` | #2 logged-in | **ABSENT** + geo broken | Kensington Doors #1, AU/US results. |
| `steel front door vs composite door` | #1 + #5 organic | **ABSENT in top 10** | Hodges Co (fiberglass) #1, Gerda #4. SteelR's `/steel-front-door-vs-composite` topic page does not appear. |
| `is steelr legit` | AI Overview cited steelr.co.uk | **ABSENT** — Pittsburgh Steelers owns all 10 | The 22 May AI Overview claim is unverified on this round. |
| `steel doors Beaconsfield` | (not tested 22 May) | **ABSENT** | Luxurious Security Doors Beaconsfield showroom #1, YSecurity #2. SteelR's `/areas/beaconsfield` does not surface. |
| `steel doors Gerrards Cross` | (not tested 22 May) | **#8** (`/areas/gerrards-cross`) | Confirmed at #8. **Vitrums sister brand also at #5** — internal competition on the same Bucks town. |
| `SR3 steel front door uk` | (was the AI specifier win on 22 May ChatGPT) | **#7** (blog `/blog/front-door-security-ratings-compared-sr1-to-sr3`) + Vitrums #10 | Confirmed at #7 via the blog, not the SR3 topic page (`/sr3-residential-steel-door`). Topic page does not appear. |
| `PAS 24 steel front door uk` | (specifier win on 22 May ChatGPT) | **ABSENT** | Latham's #1, Strongdor #2. SteelR's `/pas-24-steel-entrance-door` topic page does not appear. |
| `secured by design steel front door uk` | (specifier win on 22 May ChatGPT) | **ABSENT** | Latham's #1, Bradbury #2. SteelR's `/secured-by-design-steel-front-door` topic page does not appear. |

### What this means

Two possible reads — both materially worse than the 22 May headline. I cannot pick between them from this sandbox.

1. **Firecrawl undercount.** Firecrawl is a third-party Google scrape and may index a different snapshot than Google direct. Three of twelve winners did surface (brand #7, Gerrards Cross #8, SR3 blog #7) so the tool isn't blind, but it may be missing some real wins.
2. **22 May personalisation drift.** The 22 May leg was logged-in Google with owner-managed-business signal, saved-favourites signal, prior-click signal. The wins claimed there may have been personalisation effects, not the SERP a neutral prospect sees. The pattern fits: every confirmed-this-round win is an unambiguous query (`steelr`, exact-town-name, exact-blog-slug match). Every disconfirmed win is a competitive product/category query where personalisation would be most likely to lift us.

**Either way, the headline holds:** a neutral UK SERP scrape, on the queries we previously believed we won, returns SteelR in 3 of 12 cases. The brand-confusion problem (Pittsburgh Steelers + military STEEL-R + Steelr font + Steelr Spotify song + Instagram handle) is severe — six entities outrank steelr.co.uk on our own brand name.

To break the tie on which read is correct, Claude_in_Chrome incognito UK is the next test — same 12 queries, no SteelR-favouring signal, no personalisation. That is the cleanest measurement and the one this audit needs before any next move.

## Files written this round

- `audit-data/serp-captures/20260524-google-round5-firecrawl.md` (this file)
- `~/.claude/projects/.../memory/feedback_check-recheck-report.md` (ninth repeat — fresh-search claim covered the losses but not the wins)
