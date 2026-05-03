# Visibility audit: SteelR — 2026-05-03

**Baseline:** visibility-audit-20260502.md (yesterday)
**New audit:** fresh run 2026-05-03 via `python audit-data/visibility-audit.py`
**Tracked terms:** 26 Google organic + 11 Google Maps + 15 Bing organic = 52 query/engine pairs
**Engines queried by script:** Google organic (UK), Google Maps, Bing organic
**Engines NOT covered by script:** ChatGPT, Perplexity, Claude, Gemini (assessed separately below from prior project notes)

---

## Headline numbers

| Engine | 22 Apr (baseline) | 02 May | 03 May (fresh) | Δ vs yesterday |
|---|---|---|---|---|
| Google organic | 5/26 (19%) | 6/26 (23%) | **7/26 (27%)** | +1 |
| Google Maps | 0/11 (0%) | 0/11 (0%) | 0/11 (0%) | 0 |
| Bing organic | 0/15 (0%) | 0/15 (0%) | 0/15 (0%) | 0 |

Google organic is the only engine moving. Trend is positive: 5 → 6 → 7 hits across the 11-day window, with the SR3 topic page steadily climbing (#9 → #7 → #4) and a new Kensington area page appearing.

---

## Wins (rank up ≥ 3 OR newly visible)

- **`steel doors Kensington`** — was off top-30, now **#5** at `/areas/kensington`. NEW visibility on a high-intent West London query. Direct evidence area-page architecture is finally being indexed and ranked on the right slug (previously the system was surfacing the parent `/areas` hub for Cobham/Esher type queries).
- **`SR3 residential steel door`** — **#7 → #4** at `/sr3-residential-steel-door`. +3 positions on the highest-value topic page on the site. This is the page most directly tied to the staged llms-full.txt edits (the 4-tier ladder framing replaces the older "SR3 as standard" claim that this page itself no longer makes).

## Improved (rank up 1-2)

- **`steel doors Chelsea`** — #8 → #7 at `/areas/chelsea` (+1). Stable strong performer.

## Stable

- **`steelr`** brand — #1 (unchanged).
- **`steelr bespoke steel entrance doors`** — #1 (unchanged).
- **`steel vs composite doors`** — #5 at `/blog/composite-vs-steel-doors-2026-updated-compar` (unchanged).
- **`steel doors Cobham`** — #10 at `/areas/surrey` (unchanged, edge-of-page-1).

## Regressed

- None. No tracked organic position dropped vs yesterday.

## Losses (was visible, now not)

- None.

## No-shows (still not appearing across all 3 engines tracked)

Persistent zeroes — these are the categories where the staged llms-full.txt edit theoretically helps most because Google has not yet picked SteelR as a relevant result:

- `steelr doors`, `steelr uk` — brand-adjacent queries lost to lookalikes (lathamssteeldoors, steelersuk.com).
- All UK-wide product head terms: `bespoke steel entrance doors UK`, `steel front doors UK`, `steel front door UK`, `steel security doors residential UK`, `steel doors UK`.
- All certification queries: `PAS 24 front doors`, `Secured by Design doors UK`, `fire rated entrance doors flats`, `FD30 front door UK`.
- Cost / shopper queries: `how much do steel doors cost UK`, `best front door for security UK`.
- London-wide: `bespoke front doors London`, `bespoke steel doors London`, `steel doors with glass panels UK`.
- Regional hubs: `steel doors Buckinghamshire`, `steel doors Surrey`, `steel doors Esher`.
- All Bing tracked queries (15/15 zero) — post-migration indexing lag, IndexNow wired 19 Apr, recovery still pending.
- All Google Maps queries (11/11 zero) — blocked by 0 GBP reviews.

---

## AI engines (out-of-band, from project history)

The script does not query AI engines. Latest evidence on file (CLAUDE.md, baseline 22 Apr 2026):

- **ChatGPT** — listed FIRST for "best bespoke steel front door companies UK". Strongest channel.
- **Google AI Mode** — #1 featured manufacturer, `steelr.co.uk +4` primary citation pattern.
- **Perplexity** — cited as "best-fit option" for SR3 Secured by Design specifier query.
- **Claude / Gemini** — no logged baseline.

Citation source on those wins is overwhelmingly the topic-hub pages (`/sr3-residential-steel-door`, `/bespoke-steel-front-doors-uk`) plus llms-full.txt's `## Blog Excerpts` section. The staged change touches that exact section.

**Risk profile of the staged edit:** the 6 line edits replace stale "highest residential rating" / "SR3 as standard" claims that contradict the live blog posts (updated yesterday in `65ad41e`) with the current 4-tier ladder. This means right now SteelR is publishing two contradictory positions to AI crawlers — the live HTML says one thing, the llms-full cache says another. AI engines that cross-check both will hedge. The staged edit closes that contradiction.

---

## Strongest channel right now

**AI engines, by a wide margin.** Google organic is improving but still 27% of tracked terms. Bing and Maps are at zero. ChatGPT, Perplexity and Google AI Mode are the only surfaces where SteelR currently wins on broad category queries. Protecting and updating the llms files is therefore higher-leverage than any other content surface — the cache disruption risk of the staged edit is small relative to the contradiction risk of leaving it stale.

---

## Recommended actions

1. **Ship the staged llms-full.txt edit.** The contradiction it closes (live blog says 4-tier ladder, cache says "SR3 as standard") is actively harmful to AI citation accuracy. The 6 lines touched are inside auto-generated blog excerpts — small surface area.
2. After ship, re-test ChatGPT and Perplexity on the SR3 query within 72 hours to confirm citation pattern stays intact or improves (no in-script automation for this — manual check).
3. Investigate why `steelr doors` / `steelr uk` lose to lookalikes despite brand `steelr` ranking #1. Likely intent-classification: Google reads "steelr doors" as a shopper query and prefers Latham's. May be unfixable without more brand search volume.
4. The Maps + Bing zeroes are unchanged from baseline and are user-managed (reviews, IndexNow lag). Not in scope for this audit.
