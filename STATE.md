# SteelR — STATE

**Last updated:** 2026-05-17 (commit `7980a16`)
**Priority:** P0

---

## Where I left off

**Single fix shipped live: 2026-05-17 commit `7980a16` "Fix broken Hillingdon gallery image path"**

- Caught by Ahrefs Site Audit Wave 1 crawl (kicked off this session): `src/data/locations/london.ts:909` had incorrect gallery-image path `/images/gallery/steelr-black-contemporary-sidelight.jpg`. File actually lives at `/images/hero/steelr-black-contemporary-sidelight.jpg`.
- Fix: corrected path, commit pushed, Vercel deployment `dpl_Exgmhvp11JKcWoQSK7ZoaHhKDpqn` READY in production.
- Live verification: curl on `/areas/hillingdon` confirms srcset now references `/_next/image?url=%2Fimages%2Fhero%2Fsteelr-black-contemporary-sidelight.jpg&...` correctly. 2 errors from Ahrefs report (flagged "Image broken" + "Page has broken image") both resolved by this single edit.

**Off-site infrastructure work (no code):**
- Ahrefs Webmaster Tools account created under `info@supplywindows.co.uk`. `steelr.co.uk` imported via GSC OAuth. All 3 audit toggles ON. First Ahrefs crawl data will populate 24–48 hours from session start (by 2026-05-19 morning).
- Baseline Ahrefs state at session end (pre-re-crawl): Health 100, 2 errors (now fixed above), 384 warnings, 689 notices, 316 internal pages crawled.

**AI citation baseline captured:**
- Perplexity on `steel vs composite front door uk`: SteelR **not cited page 1**. Sources: jkdoors, edgebp, moneysavingexpert, doorsforsecurity.
- ChatGPT-with-Search (3 queries today): on `bespoke steel front door uk` and `luxury bespoke steel front door uk`, SteelR cited multiple times but downgraded vs 11/13 May (competitors Ryterna, PIVOT moved up). On `steel front door for grade ii listed property`: **not cited** (Modern Doors, Latham's, Crittall cited).
- Google Web (depersonalised): AI Overview cites Latham's + generic guides, not SteelR. SteelR blog URL ranks page 1, but topic hub `/steel-front-door-vs-composite` does not. Brand `steelr` search shows Pittsburgh Steelers KP first, SteelR organic #1.
- Full baseline capture: `audit-data/serp-captures/20260517-panel-llms-ai.md`.

**Parked work on disk (not committed):**
- `src/app/heritage-steel-front-doors-uk/page.tsx` — page draft, sections 2–3 written, pivoted away mid-session ("none of it makes sense")
- `docs/superpowers/specs/2026-05-16-heritage-hub-design.md`
- `docs/superpowers/plans/2026-05-16-heritage-hub-implementation.md`
- `audit-data/serp-captures/20260516-heritage-baseline.md`

User pivoted when heritage work wasn't anchored to a diagnostic finding. Files sit on disk for future revisit.

---

## Next action

**P0 — Confirm `generate_lead` GA4 event fires (user-side, 90 seconds).** Fill `/design-estimate` form, submit, verify `generate_lead` event appears in GA4 Real-Time. Mark as Key Event. Unblocks all downstream conversion measurement.

**P1 — Re-measure AI citation on 2026-05-30 (13 days post-fix).** Re-pull `steel vs composite front door uk` on Perplexity, ChatGPT-with-Search, Gemini. Compare to today's baseline at `audit-data/serp-captures/20260517-panel-llms-ai.md`. Early signal (4-day pickup on Perplexity): SteelR already cited 4 times on `composite vs steel doors uk` + cited as source on Google AI Mode. Full 14-day window measurement still needed.

**P1 — Pull first Ahrefs Webmaster Tools data on 2026-05-19.** Check: backlink count, referring domains, organic keywords per Ahrefs vs GSC delta, auto-detected competitors, site audit findings post-re-crawl.

**P2 — User-supplied items when convenient:**
- Supply Windows Companies House registration number (for schema `sameAs`)
- Trustpilot business profile (for embed widget)

**P2 — Top up Serper.dev credits ($50 / 50k queries).** `audit-data/visibility-audit.py` returns 403 silently. 4 consecutive failed run windows since 2026-05-04.

---

## Blockers

- **Serper credits depleted** since 2026-05-04. `visibility-audit.py` fails silently. Top-up at https://serper.dev/billing.
- **`generate_lead` Key Event = 0** in GA4. Estimate-form fix shipped 2026-05-14 but no real submission has triggered yet. Blocks conversion measurement.
- **ChatGPT Free-tier throttles** after 2–7 queries per session. Batch captures needed.
- **Google AI Mode reCAPTCHA-blocked from sandbox.** Only testable via user's logged-in browser.
- **0 Google reviews.** Maps 3-pack blocker. User-managed.

---

## Recent wins (last 14 days)

- **2026-05-17 — Ahrefs Webmaster Tools set up + steelr.co.uk verified.** Account under `info@supplywindows.co.uk`, GSC import auth'd, all crawl toggles ON. First crawl data in 24–48h.
- **2026-05-17 — AI citation baseline captured.** Perplexity, ChatGPT-with-Search, Google Web, Google AI Mode, Microsoft Copilot, Grok, Gemini sampled. Baseline stored at `audit-data/serp-captures/20260517-panel-llms-ai.md`. 30 May re-measurement will compare against this snapshot.
- **2026-05-17 — Hillingdon gallery image path fixed (commit `7980a16`).** Ahrefs Site Audit flagged broken image; path corrected from `/images/gallery/` to `/images/hero/`. 2 errors resolved. Live on production.
- **2026-05-16 evening — Bing + AI engine audit shipped.** Full capture at `audit-data/serp-captures/20260517-bing-and-ai-engine-coverage.md`. Bing sitemap healthy, 84/249 root indexed, 17 keywords surfacing including `steel front doors residential uk` #4. AI surfaces: ChatGPT-with-Search 3/3 cited, Google AI Mode 2/3, Perplexity 2/7 (4-day pickup of llms-full restructure). Copilot 0/3 cited; Grok 0/1.
- **Last 7 days — 6 workspace memory feedback files logged.** Process improvements from corrections: fresh-checks-first, cant-trust-subagent, spec-comparisons-tier-honest, stay-anchored-to-diagnostic, no-owner-profile-on-steelr, form-fill-via-form-input.

---

## Key files

- `audit-data/serp-captures/20260517-panel-llms-ai.md` — AI citation baseline (Perplexity, ChatGPT today) for 2026-05-30 re-measurement
- `audit-data/serp-captures/20260517-bing-and-ai-engine-coverage.md` — Bing + AI engine audit
- `src/data/locations/london.ts:909` — Hillingdon galleryImages path, fixed to `/images/hero/steelr-black-contemporary-sidelight.jpg`
- `src/app/layout.tsx` — Organization schema (brand-entity, alternateName array, memberOf, legalName, parentOrganization)
- `public/llms.txt` + `public/llms-full.txt` — AI-grounding sources (last updated commit `b581333`, 2026-05-16)
- `audit-data/gsc-indexing-tracker-steelr.json` — Indexing API submission tracker (297 URLs)
- `.vercel/project.json` — Vercel project metadata + environment var list
- `~/.claude/projects/C--Users-SOT-Documents-Projects/memory/MEMORY.md` — workspace memory index (6 new feedback entries from this session)
