# SteelR — STATE

**Last updated:** 2026-05-05 (evening + late-evening sessions)
**Priority:** P0

## Where I left off

Session 2026-05-05 closed with **three commits on main** that together represent the full /panel-llms gate cycle plus a deeper cross-surface peace-of-mind audit + remediation:

1. **`b0a78b1`** — Tested-locally bundle through the /panel-llms 4-agent gate. 8 files / +506 / -49. Audience Hubs in llms files + numerical-first Technical Glossary rewrite + 5 fact-check fixes (Class A4/C/D labels stripped, lead times reconciled to canonical 8-12 weeks, fire curve "above 800°C", ISO body LPCB→UKAS, ISO :2015 stripped) + on-site parity edits across `layout.tsx`, `security-specification/page.tsx`, `lps-1673-attack-resistant-steel-door/page.tsx`, and `specifying-steel-doors-architects-guide-2026.ts`.
2. **`14dff24`** — STATE.md + change-log for the b0a78b1 bundle.
3. **`63778fb`** — 4 HIGH fixes from the cross-surface peace-of-mind audit (3 agents on the live site post-b0a78b1 deploy):
   - **H1**: `/security` FAQPage Q2 flipped from "No, SteelR does not claim an LPS 1175 SR rating" → "Yes. LPS 1175 SR3 (Enhanced upgrade), SR4 (Commercial-grade upgrade), LPS 1673 (Ultra-high) above the BS EN 1627 RC4 Standard"; body paragraph rewritten; intro typo "SR1-SR6" → "RC1-RC6" corrected. The structured FAQ contradiction that AI engines would have cited is gone.
   - **H2**: `/bespoke-steel-front-doors-uk` (sitemap priority 0.9 hub) said "SR3 ... twenty-minute attack" — factually wrong (SR3 = 5 min; RC6 = 20 min). Rewritten to "BS EN 1627:2011 RC4 single leaf, unglazed, tested against a sustained ten-minute attack".
   - **H3**: CLAUDE.md three GBP service descriptions said "BS EN 1627 Class 3" as standard — stale text. Reconciled to RC4 + four-tier ladder framing. Note in the doc: matching live GBP dashboard service descriptions also need user-managed updating.
   - **H4**: 6 surgical NAP edits in llms files. "based in Ickenham" → "based in Uxbridge UB10 8AP" everywhere it's the formal address; West London catchment list keeps Ickenham as a served-area anchor and adds Uxbridge for additional local-search coverage. /panel-llms gate re-fired + approved (deep-reviewer KEEP, low cache risk).

Verification trail across both gate cycles + remediation: **3 pre-panel passes + 4-agent gate (b0a78b1) + 3 post-deploy passes + 3-agent cross-surface audit + focused panel re-pass for H4 + 3 post-deploy passes for 63778fb. All terminal verdicts PASS.** Build clean 317/317 pages on every cycle. Live curl confirms all fixes deployed: llms files say "Uxbridge UB10 8AP"; /security FAQPage Q2 begins "Yes."; /bespoke-hub says "ten-minute" not "twenty-minute". Marker at `.checks/llms-panel.json`. Change-logs at `audit-data/change-log/20260505-llms-update.md` (b0a78b1) and pending entry needed for 63778fb.

## Next action

**NEXT SESSION = full-audit architecture build (12-15 hrs, single focused session).** Same brief as previous STATE — unchanged by today's work. Pre-flight: Playwright + Perplexity + Chrome MCP availability. Then 4 phases × ~3 hrs each: capture-ai-citation.mjs (Phase A), capture-lighthouse + capture-gsc-pages (Phase B), Tier 2 meta-audit scripts (Phase C), `/full-audit` slash command + mirror to other projects (Phase D).

**Outside the build session, queued (priority order):**

A. **Manual GBP dashboard update (user-managed, ~15 min)** — the live GBP service descriptions for "Bespoke Steel Entrance Doors" and "PAS 24 Certified Security Doors" still say "BS EN 1627 Class 3" because they were copy-pasted from the now-fixed CLAUDE.md text on 19 Apr. Edit on the GBP dashboard to match the corrected CLAUDE.md text (which now says "BS EN 1627:2011 RC4 single leaf, unglazed as Standard, LPS 1175 SR3 (Enhanced upgrade) and SR4 (Commercial-grade upgrade) available"). NAP-consistency for Maps 3-pack ranking.

B. **Investigate `/areas/buckinghamshire` regression** — was #1 on 22 Apr, off top-30 on 5 May (per `audit-data/visibility-audit-20260505.md`). Predates today's diffs. Diff page against pre-regression version; check if recent area-template work touched it.

C. **MEDIUM-severity items from cross-surface audit (queued for next pass):**
   - `/contact` and `/process` ship homepage og:title + og:url instead of their own (metadata.openGraph override bug)
   - SR4 lead time conflict: llms says 8-12, /sr4 page says 10-14, /security-specification says 10-14. Pick one canonical answer
   - LPS 1673 lead time on /security-specification still says "12-16 weeks"; everywhere else says "confirmed at quote stage" — edit page to match
   - 8 pages missing og:image (4 audience hubs + sr3 + lps-1673 + bespoke-hub + security-specification)
   - 5 surfaces should link to audience hubs but don't (`/bespoke-steel-front-doors-uk` is the highest-leverage gap; also `/luxury-steel-entrance-door-london`, `/steel-front-door-cost-uk`, `/steel-front-door-vs-composite`, `/uk-steel-doors-vs-imported`)
   - 161 area pages do not link to audience hubs (644 missing edges — one template change in `src/app/areas/[slug]/page.tsx` would add all 644)
   - Nav has no audience hub entry (B2B traffic only sees Footer)

D. **Cannibalisation retitles from b0a78b1 panel** (Reasoned tier, cheap, reversible):
   - `/blog/hmo-front-door-requirements-uk-landlord-guide` → drop "Developer" framing
   - `/blog/specifying-steel-doors-architects-guide-2026` → lead with "Specification Checklist" / "RIBA-stage", not the audience noun

E. **Post-state checklists** (fill 2026-05-12 to 2026-05-19): re-run `node scripts/audit/capture-serp.mjs post-tested-locally-bundle`, manual ChatGPT/Perplexity/AI Mode spot-check on 3 baseline queries, decide promote-to-Verified vs revert. See `audit-data/change-log/20260505-llms-update.md`.

F. **Documentation tidy-ups** (low priority, separate sweep):
   - CLAUDE.md says "161 area pages / 166 slugs" in places but source has 177 (per llms-txt-integrity-checker's bonus finding) — refresh count
   - CLAUDE.md hub count contradicts itself (15/16/17 in different places); llms files agree on 17
   - Cosmetic nit: `public/llms-full.txt:853` header says "178 Pages Total" — should be 177; bundle with next genuine llms regen, do not trigger panel for this alone
   - LOW items from cross-surface audit: area-page meta descriptions 177-182 chars (over 160 cap); breadcrumb trailing-slash inconsistency between areas and ladder pages; PAS 24 vs PAS 24:2022 mixed across surfaces; FD30S "above 800°C" only on llms files; sr4 + lps-1673 missing WebPage/Thing/WebSite schema wrapper for parity with sr3 + bs-en-1627-rc4; audience hubs lack Service/AboutPage schema layer; homepage prose "architects and developers" not linked

## Blockers

- Reviews still 0 — #1 Maps 3-pack blocker, user-managed.
- Pre-existing subpage `HomeAndConstructionBusiness #business` schema override — long-term cleanup, not introduced today.
- 4-tier ladder rewrite ranking volatility only confirmable after 7-14 day post-state capture.
- Hero "use client" LCP fix and `/best-secure-front-doors-uk` listicle still blocked on Lighthouse + AI-citation capture scripts (full-audit architecture build).
- AI citation impact of today's commits (especially the /security FAQ flip) unverifiable from sandbox; manual ChatGPT + Perplexity + AI Mode spot-check required during the post-state window.

## Recent wins (last 14 days)

- **2026-05-05 late evening — Cross-surface peace-of-mind audit + 4 HIGH remediations shipped (`63778fb`).** 3 agents (fact-check-gate + seo-schema-validator + deep-reviewer on the live site post-b0a78b1) surfaced 9 contradictions including the dangerous `/security` FAQPage emitting "No, SteelR doesn't have SR3" while the rest of the site said the opposite. All 3 post-deploy verification agents PASS on the live deploy. The structured surface AI engines crawl now matches everything else.
- **2026-05-05 evening — /panel-llms gate-protected llms update shipped (`b0a78b1`).** 4-agent panel verdict APPROVE WITH FIXES (both applied). Pre-panel + post-deploy verification each ran 3 agents, all PASS. New visibility baseline `audit-data/visibility-audit-20260505.md` shows Google organic 5/26 → 6/26 (+4pp) since 22 Apr; new wins on `/areas/kensington` #5 and `/areas/esher` #1; `/sr3-residential-steel-door` #8 → #6.
- **2026-05-05 — Recommendation Gate process layer shipped (`d36e79c`).** 3 confidence tiers, 4 mandatory questions, per-session caps, loop-prevention rule, templates at `audit-data/templates/`, first capture script `scripts/audit/capture-serp.mjs`. Mirrored to global `~/.claude/CLAUDE.md` + project `CLAUDE.md`.
- **2026-05-05 — First Tested-locally bundle through the gate (`a2dee50`).** 644 area→topic-hub links, audience hubs added to `relatedLinks` on 8 topic hubs, 8 hasCredential + 8 makesOffer entries on root schema, Article→BlogPosting upgrade.
- **2026-05-05 — Post-deploy verification panel (3 agents)** found 4 actionable issues, all fixed in `e8dc947` (conditional Person/Organization author + a11y cleanup).
- **2026-05-05 — Batch 1C regression patched (`a1c67a2`).** Doubled 4-tier ladder content on 12 area pages from 2026-05-04 regex sweep.
- **2026-05-03 — 4-tier ladder rolled out site-wide; 4 B2B audience hubs live; WCAG 2.2 AA bundle.**

## Key files

- `audit-data/templates/recommendation.md`, `audit-data/templates/synthesis-format.md` — gate templates every recommendation passes through.
- `audit-data/change-log/20260505-llms-update.md` — full timeline + post-state checklist for the b0a78b1 bundle (fill 2026-05-12 to 2026-05-19). 63778fb timeline can be appended.
- `audit-data/change-log/20260505-tested-locally-bundle.md` — earlier Tested-locally bundle pre/post evidence record.
- `audit-data/serp-captures/20260505-pre-panel-recommendations.json` — 24-query SERP baseline.
- `audit-data/visibility-audit-20260505.md` — fresh visibility baseline.
- `.checks/llms-panel.json` — gitignored marker that unblocks the llms pre-commit gate; SHA-bound to staged content. Fired and re-fired clean across both gate cycles today.
- `scripts/audit/capture-serp.mjs` + `scripts/audit/README.md` — first capture script + per-change-type protocol runbook.
- `scripts/checks/llms-panel-check.mjs` + `.git/hooks/pre-commit` — architectural gate enforcement.
- `src/app/security/page.tsx` — substantially rewritten in 63778fb. FAQPage Q2 + body Note paragraph + intro typo all fixed. Single most important fix of the day for AI citation surface.
- `src/app/bespoke-steel-front-doors-uk/page.tsx` — RC4 framing replaces wrong SR3 framing on the priority 0.9 hub.
- `src/app/areas/[slug]/page.tsx` — area template carrying the security spec block (161 pages × 4 inbound topic-hub links). MEDIUM-priority queue item: inject `<RelatedHubs>` block to add 644 area→audience-hub edges.
- `src/app/layout.tsx` — root HomeAndConstructionBusiness schema with hasCredential (ISO :2015-stripped per b0a78b1) + makesOffer arrays.
- `CLAUDE.md` — three GBP service descriptions reconciled to RC4 + four-tier ladder per H3.
