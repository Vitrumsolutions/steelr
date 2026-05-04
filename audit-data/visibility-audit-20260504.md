# Visibility audit: SteelR — 2026-05-04

**Baseline:** visibility-audit-20260503.md (yesterday, 24h post-deploy)
**New audit:** fresh run 2026-05-04 via `python audit-data/visibility-audit.py`
**Tracked terms:** 26 Google organic + 11 Google Maps + 15 Bing organic = 52 query/engine pairs
**Engines NOT covered by script:** ChatGPT, Perplexity, Claude, Gemini

---

## Headline numbers

| Engine | 02 May | 03 May | **04 May** | Δ vs yesterday |
|---|---|---|---|---|
| Google organic | 6/26 (23%) | 7/26 (27%) | **7/26 (27%)** | 0 |
| Google Maps | 0/11 | 0/11 | 0/11 | 0 |
| Bing organic | 0/15 | 0/15 | 0/15 | 0 |

Same count, different composition. One new win, one new loss, one rank improvement on the priority topic page.

---

## Wins (newly visible OR rank up ≥ 3)

- **`steel doors Esher` — NEW #1** at `/areas/esher`. Off top-30 yesterday, top of page today. Direct hit on a high-intent Surrey-commuter-belt query. The area-page architecture is now ranking on the right slug rather than the parent /areas hub (same pattern as Kensington broke through 03 May).

## Improved (rank up 1-2)

- **`SR3 residential steel door` — #4 → #3** at `/sr3-residential-steel-door`. +1 position. Held and improved on the highest-value topic page on the site. Trend over 11 days: #9 → #7 → #4 → #3.

## Held (priority pages flagged in brief)

- **`steel doors Kensington` — #5 (held)** at `/areas/kensington`. Newly-visible position from yesterday is sticky.
- **`steel doors Cobham` — #10 (held)** at `/areas/surrey`. Edge-of-page-1 stable.
- **`steelr` brand — #1 (held)**.
- **`steelr bespoke steel entrance doors` — #1 (held)**.
- **`steel vs composite doors` — #5 (held)** at `/blog/composite-vs-steel-doors-2026-updated-compar`.

## Losses (was visible, now not)

- **`steel doors Chelsea` — #7 → off top-30**. -23+ positions. The Chelsea area page dropped out of top 30. Top result is now `chelseadoors.co.uk` (exact-match domain). Worth noting this regressed inside 24 hours of the major deploy; the Chelsea area page may have been touched by the 4-tier ladder rewrite or metadata trim. Investigate before assuming volatility.

## Regressed (rank down ≥ 3)

- None other than the Chelsea drop above.

## No-shows still flagged

- **`steel doors Buckinghamshire`, `steel doors Surrey`** — historically strongest local terms per the brief; both still off top-30. Top results: `homeworkswindows.co.uk`, `prestigesteeldoors.co.uk`. No movement.
- **4 new B2B audience hubs** (`/housing-associations`, `/developers`, `/architects`, `/property-managers`) — not in the tracked keyword set so no script signal. 24h is below Google's typical first-crawl-to-rank window for new URLs; expect signal earliest 7-10 days from deploy.

## Unchanged

- Google Maps: 0/11. Blocked by 0 GBP reviews (user-managed).
- Bing organic: 0/15. Post-migration indexing lag; IndexNow wired 19 Apr.

---

## AI engines (out-of-band, not in script)

Last logged baseline (CLAUDE.md, pre-04 May):

- **ChatGPT** — listed FIRST for "best bespoke steel front door companies UK".
- **Google AI Mode** — #1 featured manufacturer, `steelr.co.uk +4` primary citation.
- **Perplexity** — cited as "best-fit option" for SR3 Secured by Design specifier query.

llms-full.txt was regenerated yesterday through the `/panel-llms` gate. No script-based AI testing today; manual ChatGPT/Perplexity re-test recommended within 72h to confirm citations held through the regen.

---

## Net 24h read

The major deploy has not visibly disrupted rankings. The site held every priority position flagged in the brief, the SR3 page advanced one more notch (#4 → #3), and Esher broke through. The single material loss is Chelsea — likely page-specific, worth opening DevTools on `/areas/chelsea` to confirm the 4-tier ladder rewrite didn't break the H1 or canonical.

## Recommended actions

1. Inspect `/areas/chelsea` — diff against pre-deploy version, check H1/title/canonical didn't break in the rewrite. Compare to `/areas/kensington` (held #5) and `/areas/esher` (new #1) for the working pattern.
2. Re-run audit Mon 11 May (7d post-deploy) to give the 4 new B2B hubs a fair window.
3. Manual ChatGPT + Perplexity re-test on "best bespoke steel front door companies UK" and "SR3 secured by design front door" to confirm AI citations survived the llms-full regen.
