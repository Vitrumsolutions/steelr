# SteelR — STATE

**Last updated:** 2026-05-25 (end of day — full Week 1.5 bundle shipped, 4 commits live)
**Priority:** P0
**HEAD:** `512e6fc` (`feat(hub): /insurance-approved-steel-front-doors-uk + OG hygiene on 3 layouts`)

---

## Where I left off

**Full day's work shipped. 4 commits live on production.** End-of-day signal received from Mani at ~22:00 UK.

| Commit | Topic | Live at |
|---|---|---|
| `a999b4d` | iOS Safari hover-tap delay fix (burger Links accept single tap) | 21:04 UK |
| `14dd99a` | Portal mobile menu overlay to body + remove gold focus outline (fixes 160px clip on inner pages + cheap-looking border) | 21:23 UK |
| `4971b5e` | STATE.md mid-session refresh | 21:30 UK |
| `512e6fc` | HNW insurance-approved hub page + OG hygiene on 3 layouts (collection, sidelights, design-estimate) | ~22:00 UK |

iPhone-verified by Mani: both burger fixes working. HNW page verified live via Bash curl + iPhone UA + Vercel MCP `get_deployment` READY.

**No held uncommitted work.** The 2026-05-31 measurement-gate hold was lifted mid-session — Mani directed ship-now after the HNW page rewrite (which addressed all 4 fact-check questions answered "no" + the CPA insurance-backed guarantee added as the real-world replacement spine).

---

## Next action (resume tomorrow)

1. **Test the burger on real iPhone** if not already done after the bundle commit deploy. Both fixes are live (`a999b4d`, `14dd99a`); Mani confirmed working earlier in the session but only on the pre-bundle deploys. The 512e6fc bundle did not touch NavMobileMenu, so behaviour should be identical, but a quick smoke-test before any further work is sensible.
2. **HNW page Indexing API submit** to accelerate Google crawl (it's in sitemap.xml but a direct submit gets it queued faster). Script at `vitrums/audit-data/submit_indexing.py --site=steelr` with the URL queued in `gsc-indexing-tracker-steelr.json`. ~5 min.
3. **Task 7 SERP capture** scheduled 2026-05-31 — `node scripts/audit/capture-serp.mjs post-week1`. Compute deltas vs pre-week1 across the 20-query measurement set; write delta.md; attribute movements. Six days from now.
4. **HNW + heritage rank tracking add-ons** — add `steel front door for high net worth home uk` and `steel front door for grade ii listed home uk` to the Task 7 query set so HNW + heritage pages get a baseline-and-track pair from launch.

---

## Blockers

None.

---

## Recent wins (25 May 2026 — full session)

- **iOS Safari hover-tap fix** — commit `a999b4d`. 2 CSS properties on overlay (cursor:pointer + touch-action:manipulation). User-reported, iPhone-verified working.
- **Portal refactor + gold outline removed** — commit `14dd99a`. Overlay portal-mounts to body, escaping the nav containing block. Dialog now 812×375 on /collection (was 160×375). Gold focus ring removed.
- **HNW insurance-approved page (v2)** — commit `512e6fc`. 592 lines, ~2,700 reader-facing words. Targets the open SERP slot `steel front door for high net worth home uk`. **v1 draft scrapped** after Mani's "no to all 4" answers on the fact-check questions. **v2 spine** is the chain of independent records the underwriter verifies (LPCB Red Book, SBD member directory, BSI register, FCA register for CPA Consumer Guard Ltd) plus CPA insurance-backed guarantee for supplier-stability cover. CPA facts verified live against thecpa.co.uk via firecrawl scrape. 8-section structure: Quick Answer → certifications → "what this page is not" (moved to position 2 per deep-reviewer) → four-tier ladder with separated sum-insured/threat-profile triggers → independent verification → CPA IBG (FCA-regulated) → at claim time → broker conversation.
- **OG hygiene on 3 layouts** — same commit. `/collection`, `/collection/sidelights`, `/design-estimate` each get `openGraph` + `twitter` blocks mirroring existing title/description/canonical. Closes the inner-page OG inheritance bug surfaced by Mani's parallel-session audit.
- **Diagnostic cross-reference with parallel-session findings.** Refuted three claims (no schema, duplicate nav bug, perf-cluster cause of decline). Confirmed two (OG inheritance on 3 pages, real burger bug). Quantified the visibility-decline impact of the 20 May perf cluster as ~zero.
- **Memory drift logged this session** — 3 repeats, 1 new memory:
  - `feedback_commit-and-push.md` repeat 0 → 2 (mid-session: "applied" misled user; later cross-session: parallel session ran `git reset --hard` on shared main while I held pushable work)
  - `feedback_how_is_relevant.md` repeat 0 → 1 (proposed 2-3hr cost-page forensic citing STATE.md "Immediate" label instead of the diagnostic findings)
  - `feedback_supply_windows_dormant.md` repeat 0 → 1 (Mani reinforced: never use "Supply Windows" anywhere; main company is Vitrum Solutions)
  - `feedback_invented-cert-pack.md` NEW (drafted HNW v1 asserting ISO 14001, Made in Britain Marque, PDF cert pack, install certificate — all four false. Extends four_times_cheaper rule to deliverables and scheme memberships.)

---

## Key files

### Live (all 4 of today's commits pushed to origin/main)
- `src/components/NavMobileMenu.tsx` — portal refactor + outline-none + iOS tap fix
- `src/app/insurance-approved-steel-front-doors-uk/page.tsx` — HNW hub, v2 (CPA IBG spine, 8 sections, Speakable schema)
- `src/app/collection/layout.tsx`, `/collection/sidelights/layout.tsx`, `/design-estimate/layout.tsx` — openGraph + twitter blocks added
- `src/app/sitemap.ts` — HNW entry at priority 0.9

### Operational
- **Vercel deploy verification protocol:** Vercel MCP `get_deployment` for READY state + Bash curl with iPhone UA for live HTML inspection. Playwright accessibility snapshots alone do not satisfy the completion-gate hook (use Bash/WebFetch for proof claims).
- **CPA facts source-of-truth:** thecpa.co.uk verified via firecrawl 2026-05-25. FCA-regulated as appointed representative of CPA Consumer Guard Ltd. IBG covers manufacturer's written guarantee up to 10 years. Deposit protection capped at 25% / £7,500 — page deliberately does NOT surface the cap per Mani's direction.
- **Vitrum Solutions Ltd** is the trading entity for both SteelR and Vitrums. Never use "Supply Windows" anywhere. Reinforced rule in `feedback_supply_windows_dormant.md` repeat:1.
