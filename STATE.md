# SteelR — STATE

**Last updated:** 2026-05-19 (commit `82e5d2d`)
**Priority:** P0

---

## Where I left off

Big day. 13 commits shipped 19 May 2026. Six on category-language hubs + visibility infrastructure, three on the heritage hub gap closure, one on robots.txt validity. New three-spec handoff package committed for the next dedicated sessions to pick up cleanly.

### Today's shipped work (13 commits, latest first)

- `82e5d2d` fix(seo): comment out non-standard llms.txt directives in robots.txt (Lighthouse SEO 92 → 100)
- `1f75f9a` seo(llms): add heritage hub entry + clean up 3 redirected blogs (panel-llms approved)
- `411914a` feat(hub): ship /heritage-steel-front-doors-uk topic hub (6 sourced FAQs, 8 sections, 3 redirects, 3 reviewer agents PASS)
- `53e7d29` docs(housekeeping): commit accumulated audit-data + heritage/luxury specs
- `bbfdfcc` seo(linking): close 10 hub↔blog↔hub cross-link gaps
- `f8e2542` seo(blog): angle-shift luxury blog to materials comparison (cannibalisation-auditor verdict)
- `19a67ca` chore(llms): remove Supply Windows parent-company references (panel-llms approved)
- `064d4bc` Strip Supply Windows + Vitrum Solutions Ltd from public site
- `503249c` Brand policy: strip competitor names from /luxury-steel-front-doors-uk
- `a1b6b8f` llms: add /luxury-steel-front-doors-uk reference (panel-llms approved, brand-policy compliant)
- `ec0fea8` Add /luxury-steel-front-doors-uk hub: category-language coverage for the architectural luxury tier
- `0b4a395` watchers: PSI Lighthouse + GSC Search Analytics (Batch 1 of depth additions)
- `807d494` watchers: nightly digest 2026-05-19

### Pre-fix Lighthouse baseline locked

Mobile homepage Lighthouse, 19 May 2026 21:41 UTC, against live `https://steelr.co.uk`:

| Category | Score |
|---|---|
| Performance | **44 / 100** (Poor — LCP 5.7s, TBT 1,286ms, FCP 4.2s, CLS 0) |
| Accessibility | 100 / 100 |
| Best Practices | 100 / 100 |
| SEO | 100 / 100 (post robots.txt fix in `82e5d2d`) |

Baseline JSON: `.checks/lighthouse-mobile-home.json`. Required reading for any session that picks up spec A below.

### Pre-loaded handoff specs (3 spec + plan pairs)

Three follow-up work-streams have been speccced for fresh sessions. Each pair is self-contained — a fresh session can `/clear`, open the spec, and execute without conversation context.

| Priority | Spec | Plan | Effort |
|---|---|---|---|
| **A** | `docs/superpowers/specs/2026-05-19-mobile-perf-recovery.md` | `docs/superpowers/plans/2026-05-19-mobile-perf-implementation.md` | 2-3 hr |
| **B** | `docs/superpowers/specs/2026-05-19-conservation-faq-migration.md` | `docs/superpowers/plans/2026-05-19-conservation-faq-migration-implementation.md` | 1 hr |
| **C** | `docs/superpowers/specs/2026-05-19-llms-topic-restructure.md` | `docs/superpowers/plans/2026-05-19-llms-topic-restructure-implementation.md` | 2-3 hr (4 panel-gated commits) |

Order of recommended pickup: A → B → C. A has highest measurable impact (mobile perf catches Google's Core Web Vitals SERP penalty as CrUX data populates mid-June). B is cheapest (closes the panel-llms HIGH finding from today). C is highest leverage on AI citation density (compounds across all 15 hub entries).

### Heritage hub now live + indexed

`/heritage-steel-front-doors-uk` live since `411914a` push. Indexed via:
- IndexNow: HTTP 200 (Bing / Yandex / Seznam, crawl within hours)
- Google Indexing API: submitted via `python audit-data/submit_indexing.py 2 --site=steelr` (returned OK on both luxury + heritage URLs)
- llms-full.txt: heritage entry live, panel-approved, 0 stale-blog refs remaining

3 cannibalisation redirects live:
- `/blog/best-front-doors-period-properties` → `/heritage-steel-front-doors-uk` (308)
- `/blog/period-property-front-door-ultimate-guide` → `/heritage-steel-front-doors-uk` (308)
- `/blog/conservation-area-door-requirements-uk` → `/blog/steel-doors-conservation-areas-planning-guide` (308)

---

## Next action

**P0 — Pick up Spec A (mobile perf recovery).** In a fresh session: `/clear`, then `"Read docs/superpowers/specs/2026-05-19-mobile-perf-recovery.md and the plan at docs/superpowers/plans/2026-05-19-mobile-perf-implementation.md. Then start phase 1. Stop for my sign-off at each phase boundary."` Estimated 2-3 hours. Acceptance: Perf ≥80, LCP ≤2.5s, TBT ≤200ms, no visual regression.

**P0 — Confirm `generate_lead` GA4 event fires (user-side, 90 seconds).** Fill `/design-estimate` form, submit, verify event in GA4 Real-Time. Mark as Key Event. Unblocks downstream conversion measurement.

**P1 — Re-measure AI citation on 2026-06-02 (14 days post-heritage-deploy).** Re-pull the 12 default panel-llms queries from `.claude/commands/panel-llms.md`. Compare to today's baseline at `audit-data/serp-captures/20260519-peer-vs-peer-audit.md`. Particular focus: has the heritage hub started getting cited on Grade II queries? Has Perplexity citation density improved on the luxury hub?

**P1 — Pull Ahrefs Webmaster Tools data on 2026-05-21.** First post-re-crawl data should be visible. Check backlinks, referring domains, organic keywords vs GSC delta.

**P2 — Pick up Spec B (conservation FAQ migration), then Spec C (llms restructure).** Both pre-loaded with spec + plan. Order: B first (cheap, closes a panel finding), then C in 4 commit groups.

**P2 — User-supplied items when convenient:**
- Trustpilot business profile setup
- GCP `steelr-indexing` project: enable Search Console API to unblock `submit_sitemap_steelr.py`

**P2 — Top up Serper.dev credits ($50 / 50k queries).** `audit-data/visibility-audit.py` returns 403 silently. 4 consecutive failed run windows since 2026-05-04.

---

## Blockers

- **Mobile Performance 44 / 100.** Real and material. Google Core Web Vitals SERP penalty kicks in materially above LCP 2.5s. Spec A pre-loaded for a dedicated session.
- **PSI API daily quota** exhausted 2026-05-19. Resets midnight UTC. `npx lighthouse` locally works fine as a fallback (despite a non-fatal EPERM tmp-cleanup warning).
- **`generate_lead` Key Event = 0** in GA4. Blocks conversion measurement until user submits a test form.
- **Serper credits depleted.** `visibility-audit.py` fails silently. Top-up at https://serper.dev/billing.
- **ChatGPT Free-tier throttles** after 2-7 queries per session. Batch captures needed for any AI citation work.
- **Google AI Mode reCAPTCHA-blocked from sandbox.** Only testable via user's logged-in browser via Claude_in_Chrome.
- **0 Google reviews.** Maps 3-pack blocker. User-managed.

---

## Recent wins (this session, 19 May 2026)

- **Heritage hub shipped + live + indexed.** Built per spec (3 reviewer agents PASS), llms entries panel-approved + live, 3 cannibalisation redirects 308, IndexNow + Google Indexing API both confirmed. Closes the documented 16 May 2026 listed-building / Grade II citation gap. Direct competitor MultiSteel is already on the URL we now occupy.
- **Lighthouse mobile baseline captured.** 19 May 2026 21:41 UTC. Perf 44 / LCP 5.7s confirmed. SEO 92 → 100 fixed in `82e5d2d` (robots.txt validity).
- **Three handoff specs pre-loaded for next sessions.** Mobile perf, conservation FAQ migration, llms topic-entry restructure. Spec + plan per work-stream. Each is self-contained for a fresh session.
- **Internal linking 9 of 10 gaps closed.** Cost hub, luxury hub, architects hub, developers hub, 4 blogs. Built from audit findings, committed `bbfdfcc`.
- **Luxury blog angle-shifted** to materials comparison (cannibalisation-auditor verdict, commit `f8e2542`). Title 43 → 53 chars, slug unchanged to preserve index.
- **GSC Indexing API tracker reconciled.** 11 May drift fix verified already done; new luxury + heritage URLs queued + pushed live.
- **Six panel-llms gates passed** without bypass attempts.
- **`audit-data/serp-captures/20260519-peer-vs-peer-audit.md`** added (12-query peer-vs-peer steel-manufacturer audit).
- **`audit-data/ahrefs-baseline-2026-05-19.md`** committed (AWT data, 67 AI citations baseline).

---

## Key files

### New today (handoff)

- `docs/superpowers/specs/2026-05-19-mobile-perf-recovery.md` — Spec A
- `docs/superpowers/plans/2026-05-19-mobile-perf-implementation.md` — Plan A
- `docs/superpowers/specs/2026-05-19-conservation-faq-migration.md` — Spec B
- `docs/superpowers/plans/2026-05-19-conservation-faq-migration-implementation.md` — Plan B
- `docs/superpowers/specs/2026-05-19-llms-topic-restructure.md` — Spec C
- `docs/superpowers/plans/2026-05-19-llms-topic-restructure-implementation.md` — Plan C
- `.checks/lighthouse-mobile-home.json` — pre-fix mobile Lighthouse baseline (469KB)
- `src/app/heritage-steel-front-doors-uk/page.tsx` — heritage hub live

### Audit + visibility

- `audit-data/serp-captures/20260519-peer-vs-peer-audit.md` — peer-vs-peer baseline 19 May
- `audit-data/serp-captures/20260517-panel-llms-ai.md` — earlier AI citation baseline (Perplexity, ChatGPT)
- `audit-data/serp-captures/20260517-bing-and-ai-engine-coverage.md` — Bing + AI engine audit
- `audit-data/serp-captures/20260516-heritage-baseline.md` — heritage SERP baseline pre-launch
- `audit-data/ahrefs-baseline-2026-05-19.md` — Ahrefs Webmaster Tools first-pass data

### Infrastructure

- `src/data/locations/london.ts:909` — Hillingdon galleryImages path (fixed 2026-05-17)
- `src/app/layout.tsx` — Organization schema
- `public/llms.txt` + `public/llms-full.txt` — AI-grounding sources (last updated `1f75f9a`, panel-approved)
- `public/robots.txt` — RFC 9309 valid as of `82e5d2d`
- `next.config.mjs` — 6-wave cannibalisation redirect history committed
- `audit-data/gsc-indexing-tracker-steelr.json` — Indexing API submission tracker (315 URLs)
- `.vercel/project.json` — Vercel project metadata + env var list

---

## How to start the next session (handoff)

1. `/clear` to drop today's context cleanly.
2. Open a fresh session in the steelr repo.
3. Say: *"Read docs/superpowers/specs/2026-05-19-mobile-perf-recovery.md and the plan at docs/superpowers/plans/2026-05-19-mobile-perf-implementation.md. Then start phase 1. Stop for my sign-off at each phase boundary."*
4. Fresh Claude reads both files, sees the today's-Lighthouse-baseline in `.checks/`, and executes. STATE.md (this file) points to all artefacts.

Same procedure for Spec B or Spec C — just swap the filename.

---

## Memory feedback files added this session

Per workspace memory protocol, the following corrections logged from today's work:

- (Heritage hub planning) "Drafted, no stubs" claim was based on incomplete placeholder grep. Future drafts get grepped for `TBD`, `TODO`, `placeholder`, `Drafted next`, `Coming soon` not just empty `""`.
- (Internal linking audit) General-purpose agent over-reported missing links. Future audits cross-verify each finding against live grep before edit.

Both will be reflected in `~/.claude/projects/C--Users-SOT-Documents-Projects/memory/` in the next maintenance pass.
