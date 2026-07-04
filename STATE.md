# SteelR — STATE

**Last updated:** 2026-07-03 (Full visibility re-check + blog cron recovery + brand-guard staged protection)
**Priority:** P0
**HEAD:** `6fb33ed` (`content(blog): stage 3 gap-targeted posts for 5/7/9 Jul cron; guard staged dir`)

---

## ⛔ Tried & rejected — DO NOT re-attempt (standing; loads first)
- ❌ **Competitor brand names in URLs, H1s, or public copy** — category references only ("UK-made vs imported", never "SteelR vs Gerda"). Brand policy + `feedback_no_competitor_names`.
- ❌ **Product schema with an `offers` block, or any displayed price** — breaks the bespoke model and triggers GSC "Missing field price" errors. `$$$$` priceRange is the only acceptable indicator.
- ❌ **Home address on any public surface** (schema, body, llms, footer, directory) — privacy rule (`feedback_no-home-address`). The GBP address is separate and unaffected.
- ❌ **Re-opening the lead time** — it is **8 weeks** site-wide per owner (SR4 ~10 wks). Do not revert to 8-12 / 12-20, and do not touch the deliberate "12-20 weeks" competitor-foil references.
- ❌ **The Vitrums sister-site citation question is CLOSED** — options A/B/C presented 2026-07-03 with worsening-trend data (3/8 ChatGPT queries grounding on vitrums.co.uk); owner said "leave it". Do NOT action and do NOT re-raise unless he asks or SteelR's own #1 premium-query citations start falling. See memory `feedback_both-sites-mine.md`.
- ❌ **Editing `llms.txt` / `llms-full.txt` without the `/panel-llms` gate + owner approval** — highest-risk edit class, hook-enforced.

---

## Where I left off

**Full visibility re-check + blog cron recovery + brand-guard staged protection (2026-07-03, commit `6fb33ed`).**

**Visibility audit (3 Jul 2026):** Ran fresh captures across all AI surfaces, no login vs logged-in ChatGPT, GSC index state. **AI engines mixed signals:** Perplexity public flipped 0/1 → **3/3 cited** (SteelR named FIRST on "best steel front doors uk", new win). ChatGPT logged-out now search-grounded: 4/5 queries (up from 0 on training-data snapshot). ChatGPT logged-in: 4/8 = 50% (DOWN from 69% on 9 Jun — lost 2 queries: "steel security doors for home uk", "most secure steel front door"; held #1 on bespoke/companies/residential-london). Bing Copilot 0/2 (not in Maps index yet). Google AIO did not trigger. **GSC index regression:** 271 → 122 indexed since mid-June (prune: mostly leaf area pages, 7 blogs, collection doors, Cheshire hub). BUT clicks UP (55 in 28d vs 52 prior 90d); avg position improved 34.6 → 31.8. **Interpretation:** Google crawled heavily; 163 pages now "Crawled - currently not indexed" (low-value URLs, leaf-area strategy owner-deferred, no action). Full audit reports at `audit-data/serp-captures/20260703-*.md`.

**Blog cron resurrection:** Dead for 24 days (last publish 9 Jun). Refilled staged queue with 3 gap-targeted posts (steel-security-doors-for-homes-uk pub 5 Jul, steel-front-doors-listed-buildings-uk 7 Jul, steel-front-door-installation-what-to-expect 9 Jul). All passed: tsc, build, brand-guard, copy-editor, fact-check-gate, deploy-gate. Next cron fires Sun 7 Jul 20:00 UTC.

**Brand-guard staged protection:** Enhanced pre-commit hook — now scans `src/data/blog/staged/*.ts` in addition to production paths. Closes the gap where cron publishes `--no-verify`, protecting staged posts before auto-publish. Feature backward-compatible; existing repos unaffected.

**Known pre-existing issues** (standing):
- Full brand-guard scan fails on 3 deliberate PRICE instances (sr4 page £400k example + 2 llms HNW lines); staged-scan unaffected, cron safe. See `memory/feedback_four_times_cheaper.md` (house-style gate permits high-end property-value context).
- ChatGPT AI answers now surface Ickenham as install area — connects to GBP visible-address trade-off (home-address town surfacing; revisit-at-10-reviews decision per `CLAUDE.md` note on 29 Apr 2026).

---

## Next action

1. **Cron health check (5 Jul 20:00 UTC)** — first publish since resurrection. Monitor `https://github.com/Vitrumsolutions/steelr/actions` for workflow completion + live post at `/blog/steel-security-doors-for-homes-uk`.
2. **Owner approval on installation post copy** — staged post "steel-front-door-installation-what-to-expect" (9 Jul) has a softened version of "never left open overnight" clause. Sign-off required before cron auto-publishes.
3. **GBP service descriptions: still say 8-12 weeks** — 2 of 8 descriptions (Custom doors, PAS 24 Certified Security Doors) mention "eight to twelve week lead time". Manual owner edit required; Claude cannot automate GBP UI.
4. **Perplexity API key refresh** — 401 since 9 Jun. Required for `audit-data/visibility-audit.py` Perplexity leg to continue working. Request new key at perplexity.com/api.

---

## Blockers

- **Perplexity API key expired (9 Jun, ongoing)** — visibility-audit.py Perplexity checks now return 401. Requires new key from user. Blocks future AI-engine audits.
- **Vitrums cannibalisation worsening (2026-07-03)** — 3/8 ChatGPT logged-in queries now ground steel-door facts on vitrums.co.uk; Vitrums holds supplier slot on Q6. Owner-deferred strategy, do not action.
- **GSC index prune** — 271 → 122 indexed (net -149 pages). Mostly low-value leaf areas + blogs + collection variants. Clicks still rising. Leaf-area strategy (enrich priority towns vs accept prune) is owner decision.

---

## Recent wins (last 14 days)

- **2026-07-03 — Blog cron resurrected + brand-guard staged protection (commit `6fb33ed`)** — Filled empty queue with 3 gap-targeted posts (security-doors, listed-buildings, installation). All passed all gates (tsc/build/brand-guard/copy-editor/fact-check/deploy). Enhanced brand-guard to scan staged/ directory before cron auto-publish. Cron fires Sun/Tue/Thu; resumes 7 Jul.
- **2026-07-03 — Full visibility re-check completed (audit captures written)** — Perplexity public: 0/1 → **3/3 cited** (SteelR named FIRST on "best steel front doors uk"). ChatGPT logged-out: now search-grounded 4/5 (up from 0). ChatGPT logged-in: 4/8 (down from 69% on 9 Jun, lost 2 queries). Bing Copilot: 0/2. GSC index pruned but clicks rising. Full reports at `audit-data/serp-captures/20260703-*.md`.

---

## Key files

- `src/data/blog/staged/*.ts` — 3 staged posts (steel-security-doors-for-homes-uk, steel-front-doors-listed-buildings-uk, steel-front-door-installation-what-to-expect) queued for Sun/Tue/Thu cron publish. Installation post has owner-approval-pending copy softening.
- `scripts/brand-guard.mjs` — now scans staged/ directory via enhanced allow-list (backward-compatible)
- `audit-data/serp-captures/20260703-*.md` — visibility re-check captures (AI surfaces, GSC index, ChatGPT logged-in/out comparisons)
- `.claude/agents/` — project-local visibility-audit-runner + area-slug-validator + cannibalisation-auditor
