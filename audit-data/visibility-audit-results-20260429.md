# SteelR Visibility Audit — 29 April 2026

**Baseline:** `visibility-audit-20260422.md` (22 Apr 2026)
**This run:** `visibility-audit-results.md` (29 Apr 2026, written by `audit-data/visibility-audit.py`)
**Tracked terms:** 26 Google organic + 11 Google Maps + 15 Bing organic = 52 query slots
**Engines queried by script:** 3 (Google organic, Google Maps, Bing organic) via Serper.dev
**AI engines (ChatGPT, Perplexity, Claude, Gemini, Google AI Mode):** not in scope of this script — they were manually spot-checked in the 22 Apr baseline via Chrome and are NOT re-run here. The CLAUDE.md description of the audit overstates scope. Re-spot-check manually if movement on AI engines is required.

## Headline

| Channel | 22 Apr | 29 Apr | Delta |
|---|---|---|---|
| Google organic | 5/26 (19%) | **8/26 (30%)** | **+3 hits, +11pp** |
| Google Maps | 0/11 | 0/11 | flat |
| Bing organic | 0/15 | 0/15 | flat |

Google organic moved up. Maps and Bing unchanged from baseline.

## Per-keyword diff vs 22 Apr baseline

### Wins (new visibility, was not ranking)
| Keyword | 22 Apr | 29 Apr | URL |
|---|---|---|---|
| steel doors Kensington | — | **#6** | /areas/kensington |
| steel doors Chelsea | — | **#9** | /areas/chelsea |
| steel doors Esher | — | **#9** | /areas/surrey |

Three new hits, all London/Surrey premium-area pages. Esher resolves to /areas/surrey rather than a dedicated /areas/esher page (worth checking if a dedicated Esher slug exists; if not, the hub-page hit may be ceiling-capped).

### Losses (was ranking, now not)
None. No keyword that ranked in the baseline has dropped out of the top 30.

### Improved (rank up ≥3 positions)
None among already-ranked keywords. The "wins" above are new entries from outside top 30, so they count under Wins, not Improved.

### Regressed (rank down ≥3 positions)
| Keyword | 22 Apr | 29 Apr | Delta | URL |
|---|---|---|---|---|
| steel doors Buckinghamshire | **#1** | **#5** | **-4** | /areas/buckinghamshire |

Only one keyword crossed the 3-position threshold downward. Cobham slipped #9 → #10 (within stable band).

### Stable (delta < 3)
| Keyword | 22 Apr | 29 Apr |
|---|---|---|
| steelr | #1 | #1 |
| steelr bespoke steel entrance doors | #1 | #1 |
| SR3 residential steel door | #8 | #8 |
| steel doors Cobham | #9 | #10 |

22 keywords remain unranked on Google (top 30 not reached) — same set as baseline, no change.

## Channel detail

### Google organic — 8/26
Brand queries hold #1 unchanged. The 3 new area-page hits (Kensington, Chelsea, Esher) are the headline movement. Buckinghamshire regression is the one signal worth investigating — the area-page-title optimisation work referenced in CLAUDE.md ("Steel Doors [Town] | Bespoke..., SR3 Rated | SteelR") may have shipped between 22 and 29 Apr; a title rewrite on the Bucks page is a plausible cause for losing the #1 anchor and should be diff'd.

Latham's Steel Doors continues to dominate generic category queries (steel doors UK, steel front door UK, steel security doors residential UK, steel doors with glass panels UK — all #1 on lathamssteeldoors.co.uk). Same picture as baseline.

### Google Maps — 0/11
No change. GMB still surfaces zero results for any query including the brand name "SteelR". Diagnosis from baseline still applies: 0 reviews on the GMB blocks Maps surfacing entirely. The user manages reviews directly per `~/.claude/CLAUDE.md` (do-not-re-suggest list); this is flagged here as a metric, not a prescription.

### Bing organic — 0/15
No change. IndexNow was wired 19 Apr (10 days ago). Per the baseline note, Vitrums-pattern recovery is expected mid-to-late May. Current run is 6 days early for that window, so the flat result is on-trend, not a new regression. Re-check after ~10 May.

## Workspace MX migration impact (28 Apr)

Workspace User Alias Domain went live for steelr.co.uk on 28 Apr (DNS swap). Verified as visibility-neutral by this audit:

- `find_domain` matches on `steelr.co.uk` substring in result URLs. All 8 Google hits resolve to `steelr.co.uk` URLs unchanged (no www-vs-naked drift, no rogue protocol switch).
- Brand queries `steelr` and `steelr bespoke steel entrance doors` still resolve to the home page at #1 — first canonical signal that Google's index of the root domain was undisturbed.
- No Google indexing-status drop, no broken canonicals, no SERP snippet anomaly visible in this dataset.

Conclusion: MX-only DNS change as expected; no observable web visibility impact.

## AI engines

Out of scope for the script. Per the 22 Apr baseline, AI engines are SteelR's strongest channel:

- Perplexity: "best-fit option" for SR3 + Secured by Design installer query
- ChatGPT (web search): listed FIRST for UK bespoke steel front door manufacturers
- Google AI Mode: #1 featured manufacturer, `steelr.co.uk +4` primary citation

These were not re-checked in this run. If a re-check is needed before next quarterly audit, run the three queries listed in the baseline file (lines 196-199 of `visibility-audit-20260422.md`) manually through Chrome with the same prompts and compare wording verbatim.

## Recommended actions (top 5)

1. **Investigate Buckinghamshire #1 → #5 regression.** Highest-leverage signal. Diff `src/app/areas/[slug]/page.tsx` `generateMetadata` and Bucks page content between 22 Apr and 29 Apr commits. The title-pattern rewrite flagged in CLAUDE.md ("Steel Doors [Town] | Bespoke Steel Front Doors, SR3 Rated | SteelR") is the most likely cause. If the title was rewritten in a way that weakened the head match, consider rolling that one page back and A/B-watching.
2. **Build a dedicated `/areas/esher` page.** Esher hit #9 via /areas/surrey (the Surrey hub, not an Esher-specific page). Because Cobham, Kensington and Chelsea each rank via their own dedicated slug, Esher is plausibly leaving 3-5 positions on the table by routing to the hub. Cheap programmatic-SEO win.
3. **Capitalise on the Kensington/Chelsea wins.** Both are page-1 hits on premium West London queries. Internal-link the two from related blog posts ("best front door home security", "best front doors period properties") and from the London hub area page to compound the rank signal before competitors notice.
4. **Re-check Bing after 10 May.** Flat is on-trend; do NOT spend on it now. The 22 Apr-projected recovery window starts mid-May. If it is still 0/15 on 15 May, that is the moment to investigate (BWT processing, sitemap re-submit, IndexNow log).
5. **AI engines spot-check.** CLAUDE.md flags AI as the strongest channel and the 22 Apr Perplexity/ChatGPT/AI Mode placements were strong. Run the three baseline queries manually in Chrome and confirm SteelR still holds them. This script does not cover AI engines, so the assumption that "AI is fine" is currently unverified for 29 Apr.

## Notes on this run

- `audit-data/visibility-audit-results.md` is overwritten by the script on every run (its filename is fixed). This dated file (`visibility-audit-results-20260429.md`) preserves the 29 Apr snapshot for diff against future runs.
- Script header still says "baseline (22 Apr 2026)" — cosmetic, not a data issue. The Summary block at the bottom of the raw output reflects the actual 29 Apr counts.
- Serper credit usage: 26 + 11 + 15 = 52 calls this run.
