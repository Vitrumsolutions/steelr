# SteelR — STATE

**Last updated:** 2026-05-25 (evening — burger UX fix shipped + Week 1.5 bundle held for 2026-05-31)
**Priority:** P0
**HEAD:** `14dd99a` (`fix(nav): portal mobile menu overlay to document.body; drop gold focus outline`)

---

## Where I left off

**Two iOS Safari mobile-menu bugs fixed and deployed.** Reported by Mani on real iPhone testing.

1. **Hover-tap delay on Links** (commit `a999b4d`, deployed 21:04 UK). Tapping a Link inside the open burger required two taps. Root cause: outer overlay `<div>` had `onClick` to close on backdrop tap, which on iOS Safari caused descendants to require a hover-state-confirm tap before click. Fix: `cursor:pointer` + `touch-action:manipulation` on overlay div. CSS only. iPhone-verified working.

2. **Dialog clipped to 160px on inner pages** (commit `14dd99a`, deployed 21:23 UK). Tap burger on /collection after navigating from homepage, only the first link showed plus a small dark band. Root cause: overlay rendered inside `<nav>` (position:fixed, 84.8px). Chromium attributes the containing block to the nearest position:fixed ancestor, so the overlay's `inset:0` collapsed to nav bounds rather than viewport. Fix: portal the overlay JSX to `document.body` via `createPortal`. Same commit removed the gold `focus-visible:outline-[#c9a96e]` ring on each Link (Mani: "looks cheap"). iPhone-verified working.

**Week 1 visibility recovery plan still in place.** Yesterday's 7 commits (Task 1-6) live. Task 7 measurement gate scheduled 2026-05-31.

**Investigation diversion this session.** Mani flagged a parallel-session "website + speed" worry. Cross-referenced with the 20 May perf-commit cluster (Nav split, AVIF hero, framer-motion defer, cache headers): each clean, reviewed, no ranking-mechanism risk, not the cause of any visibility decline. The "decline" narrative itself partially rests on the 24 May firecrawl Round 5 where 4/5 location queries were geo-broken (US results). The dramatic-decline framing should be retired.

---

## Next action

1. **2026-05-31 ship bundle** — push the held changes after Task 7 capture lands. Three items:
   - 3 layout.tsx OG hygiene fixes: `/collection`, `/collection/sidelights`, `/design-estimate` (each missing `openGraph` + `twitter` blocks; inner pages currently inherit homepage OG)
   - HNW insurance page at `/insurance-approved-steel-front-doors-uk` (515 lines, full InfoPage + Speakable + audience schema, sitemap entry queued)
   - Sitemap.ts entry for HNW page
2. **Task 7 (2026-05-31)** — `node scripts/audit/capture-serp.mjs post-week1`, compute deltas vs pre-week1, write delta.md, attribute movements. Measurement gates Week 2 scope.
3. **4 fact-check answers pending from Mani** before HNW page ships:
   - ISO 14001 — does SteelR hold it? (CLAUDE.md only documents ISO 9001)
   - Made in Britain Marque membership — actual scheme membership?
   - Single PDF certification pack — exists today as a deliverable? Load-bearing across the whole HNW page
   - On-site installation certificate — issued by install team on completion?
4. **Cost-page diagnostic** — explicitly downgraded by Mani this session. NOT a priority. The page has a structural brand-policy blocker (no displayed prices) and the named open gaps (HNW vs Henleys, heritage vs Multisteel) are bigger leverage. Re-prioritise only if Task 7 shows broad authority movement.

---

## Blockers

- 4 HNW fact-check questions await Mani's answer (see Next action #3)
- Task 7 measurement window does not open until 2026-05-31

---

## Recent wins (25 May 2026 — burger UX + HNW page draft)

- **iOS Safari hover-tap fix** — commit `a999b4d` (`fix(nav): iOS Safari hover-tap delay on mobile menu links`). 2 CSS properties on overlay. Verified live via curl + iPhone UA: inline style includes `cursor:pointer;touch-action:manipulation`. iPhone-confirmed by Mani.
- **Portal refactor + gold outline removed** — commit `14dd99a` (`fix(nav): portal mobile menu overlay to document.body; drop gold focus outline`). Overlay portal-mounts to body after hydration. `firstMenuLinkRef.current?.focus()` still works (refs cross portals). Dialog now 812×375 on /collection (was 160×375). Verified live: dialog parent is `<body>`, dialog height matches viewport. iPhone-confirmed by Mani.
- **HNW insurance-approved page drafted** — `src/app/insurance-approved-steel-front-doors-uk/page.tsx` (515 lines, ~2,400 reader-facing words). Targets the open SERP slot `steel front door for high net worth home uk` (Henleys #1 with B2B safe-room angle). Net-new intent: insurer-specification compliance for the front entrance door. 3 JSON-LD blocks (Breadcrumb, WebPage with Speakable + audience, FAQPage). Quick Answer section + 5 sections + cert-pack bullet list + 5 FAQs + 6 whyConsider items. Build + brand-guard PASS. Held uncommitted pending Mani's 4 fact-check answers.
- **3 adversarial reviews on HNW page** — fact-check-gate flagged 4 unsourced claims for Mani confirmation (ISO 14001, Made in Britain Marque, cert pack PDF, install certificate). copy-editor flagged 4 line-level fixes (cheap → straightforward; en-dash; weak modal; AI hedge). deep-reviewer PASS with caveats: recommended structural reorder of "What this page is not" to position 2, soften the underwriter-pattern claim, separate sum-insured bands from threat-profile triggers, add "At claim time" section.
- **Diagnostic cross-reference with parallel session findings.** SteelR-specific: 3 of 43 pages affected by OG-inheritance bug (/collection, /collection/sidelights, /design-estimate). 33 pages already have own openGraph blocks. Dynamic routes (`/blog/[slug]`, `/areas/[slug]`, `/collection/[slug]`) all clean via generateMetadata. Refuted: "no schema markup" (homepage has FAQPage + HomeAndConstructionBusiness live). Refuted: "duplicate nav is a bug" (standard `lg:hidden` Tailwind pattern). Refuted: "decline caused by 20 May perf cluster" (perf commits clean, reviewed, SSR-equivalent).
- **Memory drift logged.** `feedback_commit-and-push.md` repeat_count 0 → 1 (today: "applied" language misled user into testing production where uncommitted code still ran). `feedback_how_is_relevant.md` repeat_count 0 → 1 (proposed 2-3hr cost-page forensic citing STATE.md "Immediate" label instead of cross-referencing against the data findings I had surfaced in the same response).

---

## Key files

### This session's artifacts (committed and live)
- `src/components/NavMobileMenu.tsx` — portal refactor + outline-none. Hamburger stays in `<nav>`; overlay portal-mounts to `document.body`. Commits `a999b4d` + `14dd99a`.

### This session's artifacts (uncommitted, held for 2026-05-31)
- `src/app/insurance-approved-steel-front-doors-uk/page.tsx` — HNW insurance page (515 lines, draft 1, awaits Mani's 4 fact-check answers)
- `src/app/collection/layout.tsx` — added openGraph + twitter blocks
- `src/app/collection/sidelights/layout.tsx` — added openGraph + twitter blocks
- `src/app/design-estimate/layout.tsx` — added openGraph + twitter blocks
- `src/app/sitemap.ts` — added HNW page entry at priority 0.9 next to luxury sibling

### Operational notes
- **Mobile UX fixes are isolated** from the 2026-05-31 measurement ship gate. They were UX hotfixes (no ranking implication) so were correctly decoupled. The 2026-05-31 hold applies only to ranking-sensitive content edits.
- **Vercel deploy verified** via `mcp__2420f6ab-...__get_deployment` + Bash curl with iPhone UA. Avoid Playwright snapshots alone — the completion-gate hook does not currently recognise MCP tool outputs as verification; use Bash/WebFetch for proof claims.
- **Held bundle ships 2026-05-31** in one commit alongside the Task 7 capture commit. Sequence: Task 7 capture script → delta.md → bundle commit (OG + HNW) → push.
