# SteelR — STATE

## Where I left off
02 May 2026 evening. Three commits shipped + live (`2008fa0` wave 1+2, `8d55748` wave 3, `785ab7a` wave 4 + spec gap). Multi-agent preflight panel ran (research-scout / accessibility-reviewer / seo-schema-validator / deep-reviewer); all critical findings addressed and verified live on production. The headline: 4-tier residential cert ladder (BS EN 1627:2011 RC4 Standard / LPS 1175 SR3 Enhanced / LPS 1175 SR4 Commercial-grade D10 Issue 8 / LPS 1673 Ultra-high) is now consistent end-to-end across chrome, area pages, topic hubs, 35 source blog posts, and llms files.

- **Wave 1+2 (`2008fa0`).** 31 files, 131 insertions, 130 deletions. Schema fixes (layout meta -156 chars, SR4 og:image, security-spec em-dashes), llms.txt + llms-full.txt em-dashes purged + RC4-as-upgrade contradictions fixed + numeric drift 16→17 hubs / 177→178 location pages, 22 source blog posts reframed for 4-tier ladder, CLAUDE.md "45 posts" → "39 posts".
- **Wave 3 (`8d55748`).** 14 files, 34 insertions, 34 deletions. SR3/RC3 scheme conflation factual fix across 13 blog posts. SR ratings belong to LPS 1175, not BS EN 1627 (which uses RC1-RC6). Headings + body + duration claims rewritten.
- **Wave 4 + spec gap (`785ab7a`).** 9 files, 35 insertions, 32 deletions. Area page chrome strip (161 pages) updated; SR3 "twenty minutes" reconciled to "five minutes" per LPS 1175 Issue 8 brief; vs-composite SR3-RC3 confusion (twice) cleared; "SR4 (RC4) — Power Tools, 10 Minutes" heading mislabel fixed; insurance "5-15% premium" unsourced claim removed; 3 meta description overruns trimmed (sr3 178→147, lps-1673 176→151, security-spec 213→151). Spec gap: 39 dB acoustic + 1200 Pa wind + EPD reference + UKAS-laboratory framing added to llms.txt + llms-full.txt.
- **Multi-agent panel verdict.** research-scout (30 queries + 7 intent gaps + competitor SERP), accessibility-reviewer (8 fails + 7 warnings, 1 false alarm verified), seo-schema-validator (PASS, 14 static + 5 runtime FAQPage maps), deep-reviewer (REWRITE → all wave-4 fixes addressed, 2 P0 items queued).
- **Panel gate hardening confirmed.** `scripts/checks/llms-panel-check.mjs` covers BOTH `public/llms.txt` and `public/llms-full.txt` via `PROTECTED` array. SHA marker rewritten for each commit touching either file.

## Next action
- **P0 SCHEDULED for 03 May 09:00 UK (one-time fireAt).** `steelr-p0-security-spec-beefup-and-visual-qa` autonomous task. Two items: (1) beef up `/security-specification` with side-by-side 4-tier comparison table (currently 6.5 KB stripped vs 12-19 KB on sibling topic pages; deep-reviewer flagged that other pages send readers there but the page does not deliver), (2) mobile + desktop visual QA across 7 key URLs (preview-screenshot timed out on Windows in 02 May session, retry or fallback to manual Chrome DevTools).
- **P1 quick wins (open).** Nav contrast 4.0:1 → 4.5:1+ (Nav.tsx:117), phone link contrast 3.3:1 → 4.5:1+ (Nav.tsx:140), Hero carousel pause control (WCAG 2.2.2), QuickEnquiry visible labels (288+ pages, conversion + a11y win), em-dash detector added to brand-guard.mjs.
- **P2 polish.** InfoPage h1 render order (10 topic pages), mobile menu focus trap, `lang="en"` → `lang="en-GB"`, page title length trims (7 pages 62-79 chars), per-page og:image themed for SR4/LPS 1673.
- **P3 search-intent gaps from research-scout.** New topic pages for `/flat-entrance-door-fd30s-uk` (Building Safety Act intent), `/acoustic-rated-front-door-uk` (39 dB Rw lead, owns the gap vs Metador/HAG), Part L 2026 + BS 8214:2026 glossary, "like-for-like front door replacement conservation area" (Kensington/Chelsea local intent), EPD/embodied carbon page, insurance-discount angle.
- **Em-dash backlog.** Down from 1,065 (28 Apr) to 1,054 (02 May). Phased context-aware cleanup, top blog posts first.
- **Refill blog content calendar.** `scripts/blog/content-calendar.json` was empty as of 22 Apr; another session was working on refill. Verify state and refill if still empty.

## Blockers
- 0 GMB reviews still the Maps 3-pack blocker — user-managed, do not re-suggest.
- Bing post-migration indexing lag continues; recovery expected mid-late May 2026.
- Domain authority is the structural ceiling on Google organic; no on-page fix will close it.
- **Supplier disclosure rule:** never name the supplier or specific cert IDs that link back to them (Q-Mark Cert 250, LPCB Cert 1542, etc. — these are searchable in public registries). Generic body refs (UKAS, LPCB, BRE Global, BM TRADA Q-Mark scheme) are safe.

## Recent wins (last 14 days)
- 2026-05-02 — Wave 4 + spec gap: chrome strip lag fixed (161 area pages), SR3 5-min vs 20-min reconciled across 5 pages, scheme confusion cleared on /vs-composite, 3 meta length trims, 39 dB acoustic + 1200 Pa wind + EPD + UKAS-lab framing added to llms files (`785ab7a`).
- 2026-05-02 — Wave 3: SR3/RC3 factual scheme conflation fixed across 13 blog posts (SR is LPS 1175, RC is BS EN 1627; SR3 = 5 min Issue 8, not 20 min) (`8d55748`).
- 2026-05-02 — Wave 1+2: 4-tier ladder content sweep across 22 source blog posts + topic pages + chrome + llms files. Numeric drift fixed 16→17 hubs / 177→178 location pages. Build PASS, brand-guard PASS, panel-gate PASS (`2008fa0`).
- 2026-04-29 — Supplier-truth correction round: warranty, U-values, core terminology, brand-surface RC4 relabel (`5293a62`, `ebdb860`, `5ec44ad`).
- 2026-04-29 — `/lps-1673-attack-resistant-steel-door` topic page live + cross-linked + llms files updated (`e380198`, `1e80ae8`).
- 2026-04-29 — Composite cannibalisation closed: blog merged into hub, two 308 redirects (`470bbdf`).
- 2026-04-28/29 — Hosting infra modernisation: A `216.198.79.1`, CNAME per-project, www-redirect 307 → 308, Workspace alias domain live, ImprovMX retired (`7a035c9`).

## Key files
- `next.config.mjs` — 308 redirects (composite-blog deletion, www → non-www, /blog/what-is-sr3 → /sr3-residential-steel-door, /blog/how-much-do-steel-doors-cost-uk → /steel-front-door-cost-uk). Add new redirects here, never chain.
- `src/app/security-specification/page.tsx` — **next session P0**: needs 4-tier side-by-side comparison table. Currently has Technical Performance section with 39 dB / 1200 Pa / EPD spec cards (commit c5d53d5).
- `src/app/areas/[slug]/page.tsx` — credentials strip line 105 now reads "BS EN 1627 RC4 Standard, LPS 1175 SR3 / SR4 Available" (was "SR3 Standard & SR4 (LPS 1175) Available"). Affects 161 area pages.
- `src/app/sr3-residential-steel-door/page.tsx` + `src/app/sr4-residential-steel-door/page.tsx` + `src/app/lps-1673-attack-resistant-steel-door/page.tsx` — all 4-tier ladder consistent + cross-linked + meta ≤160 chars.
- `public/llms.txt` (29.4 KB) + `public/llms-full.txt` (235.8 KB) — gated by `/panel-llms` + `/panel-llms-approve`. Both files protected by `scripts/checks/llms-panel-check.mjs` `PROTECTED` array. SHA marker `.checks/llms-panel.json` regenerated for any change.
- `scripts/blog/backfill-llms-full.mjs` — rebuilds Blog Excerpts from `index.ts`. Run after any blog add/edit/delete or any source post change to keep llms-full.txt in sync.
- `scripts/brand-guard.mjs` — pre-commit hook. Catches banned words + SteelR-attributed prices. **Does NOT catch em-dashes** (deep-reviewer recommended adding this; queued P1).
- `audit-data/em-dash-backlog-2026-04-28.md` — 1,054-instance cleanup plan (down from 1,065 on 28 Apr).
- `.claude/scheduled-tasks/steelr-p0-security-spec-beefup-and-visual-qa/SKILL.md` — autonomous task scheduled for 03 May 09:00 UK (one-time fireAt). Auto-disables after run.
