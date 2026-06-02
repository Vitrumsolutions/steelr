# SteelR — STATE

**Last updated:** 2026-06-02 (blog cron fix + lead-time standardisation)
**Priority:** P0
**HEAD:** `55b3fba` (`content: standardise SteelR lead time to ~8 weeks site-wide [allow-price]`)

---

## Where I left off

**Blog publish cron was GREEN-BUT-DEAD for 30 days.** GitHub Action ran successfully on schedule (Sun/Tue/Thu 20:00 UTC) but published nothing — the staged queue and content-calendar were empty. Fixed via commit `d83aeb0`: added 3 new, genuinely-distinct, gap-targeted staged posts + calendar entries. Acoustic focus (do-steel-front-doors-reduce-noise-uk) and material-comparison gap (steel-look-aluminium-vs-real-steel-doors, glazed-front-door-security-glass-uk). All passed FAQ extractor, brand-guard, house style, cannibalisation gates. **Cron resumes Sun/Tue/Thu with three posts scheduled: 2026-06-04, 2026-06-07, 2026-06-09.**

**Lead time standardised to ~8 weeks SITE-WIDE across 47 files** (commit `55b3fba`). Previously stated inconsistently (8-12, 8-14, 12-20, 10-14, 6-10 weeks) across area pages, collection, about, contact. Per owner the lead time is 8 WEEKS. SR4 upgrade aligned to ~10 weeks. Competitor-foil references to "12-20 weeks" and planning-consent timings deliberately left unchanged for editorial honesty.

---

## Next action

1. **Update public/llms.txt + public/llms-full.txt to 8 weeks lead time** — ~4 places still say "8 to 12 weeks". Requires `/panel-llms` flow to verify and owner approval before commit (gate-enforced).
2. **Update GBP service descriptions to 8 weeks** — manual owner update to service list. Eight descriptions currently live; two mention "eight to twelve week lead time" (Custom doors, PAS 24 Certified Security Doors).
3. **Optional: cluster the 3 new blog posts into existing topic clusters** — internal linking for topical authority (low priority, deferred).

---

## Blockers

None.

---

## Recent wins (2026-06-02)

- **Blog cron resurrected.** 30-day GREEN-BUT-DEAD gap ended. 3 new gap-targeted posts staged + calendar-marked (acoustic, material-comparison angles). Commit `d83aeb0`. Cron fires Sun/Tue/Thu starting 2026-06-04.
- **Lead time standardised.** 47 files touched. All marketing-facing lead-time claims now 8 weeks (vs prior 8-12/8-14/12-20 chaos). Commit `55b3fba`. Competitor lead-time anchors (12-20 weeks) preserved per design intent.
- **GSC / indexing verified live.** 287 indexed, 9 not-indexed (vastly healthier than stale "67 indexed" note). Bing: SteelR now #4 for "bespoke steel front doors UK manufacturer" (recent pickup post-IndexNow). AI engines: SteelR #1 on bespoke/luxury/SR3/Kensington; absent on FD30 / thermally-broken; #6 on PAS24-new-build (authority gap, not content gap — pages exist + in llms).

---

## Key files

- `src/data/blog/posts/` — 3 new staged posts: do-steel-front-doors-reduce-noise-uk, steel-look-aluminium-vs-real-steel-doors, glazed-front-door-security-glass-uk (commit `d83aeb0`)
- `scripts/blog/content-calendar.json` — 3 new calendar entries 2026-06-04, 2026-06-07, 2026-06-09
- Site-wide: 47 files touched for lead-time update (commit `55b3fba`) — area pages, collection, about, contact, watchers, schema
- `public/llms.txt` + `public/llms-full.txt` — require `/panel-llms` gate before updating lead time (4 lines) to 8 weeks
