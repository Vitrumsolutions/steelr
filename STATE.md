# SteelR — STATE

**Last updated:** 2026-05-26 (late evening — home-address removal sweep + downstream audit)
**Priority:** P0
**HEAD:** `3d470c8` (`fix: remove home address from all SteelR public surfaces`)

---

## Where I left off

**Home address removal completed and live across SteelR public surfaces.** Triggered by Mani's correction "i asked it not to put on there as it is my home address" after the schema-completeness-gate (built earlier the same session) flagged Vitrums for missing `address.streetAddress`. The flag was technically correct vs Google's rich-result rules but wrong vs Mani's privacy policy. Investigation revealed Vitrums was working as designed (intentional locality+postcode-only entity-reconciliation per `vitrums/CLAUDE.md:362-365`) but **SteelR was leaking the full home address `11 Silverbirch Close, Uxbridge UB10 8AP` across schema, body copy, llms files, watcher config, and project doc on every page**.

**Fix shipped via PR #4 squash-merged to main:**

| File | Change |
|---|---|
| `src/app/layout.tsx` | JSON-LD `HomeAndConstructionBusiness` `PostalAddress` block replaced with Companies House registered office `2nd Floor, Premier House, 309 Ballards Lane, London N12 8LY` (Vitrum Solutions Ltd, company no. 14790315); `geo` block (Uxbridge home coords) removed |
| `src/app/ai-answers/page.tsx` | 3 Q&A body lines rewritten — drop the precise home address from AI-engine consumed content |
| `public/llms.txt` | 4 lines rewritten — "Uxbridge UB10 8AP" / "Uxbridge UB10 workshop" → "West London" / "from our West London workshop" |
| `public/llms-full.txt` | 2 lines rewritten same way |
| `scripts/watchers/config.mjs` | 2 canary form payloads updated to `N12 8LY` |
| `CLAUDE.md:413` | Rewritten to document the new policy + link to `~/.claude/projects/C--Users-SOT-Documents-Projects/memory/feedback_no-home-address.md` |

**Verification before merge:**
- `npm run build` exit 0
- `grep -rln "Silverbirch\|UB10 8AP\|51.5513" .next/server` → 0 matches
- `schema-completeness-gate` against 7 rebuilt pages: 14 PASS / 0 FAIL / 2 unchecked-type
- Brand-guard PASS (with `[allow-price]` for 2 pre-existing non-blocking PRICE hits)
- llms-panel-check PASS (SHA-bound marker, inline panel synthesis — no Serper credits)

**Post-merge verification (live curl):**
- 8 sampled pages all show `postalCode: "N12 8LY"` in schema
- llms.txt + llms-full.txt: 0 UB10 8AP matches live
- 25 top URLs pushed to Google Indexing API (25/25 OK)
- 25 top URLs pinged via Bing IndexNow (25/25 to Bing + Yandex + Seznam)

**Memory:** New file `feedback_no-home-address.md` logged with `repeat_count: 0`. Index updated.

---

## Next action

1. **GBP decision — only remaining public exposure of home address.** Per `audit-data/directory-address-audit-20260526.md`, the SteelR Google Business Profile still publicly displays `11 Silver Birch Cl, Ickenham, Uxbridge UB10 8AP` (verified via Google Maps card SERP capture 2026-05-26). Three options laid out in the audit doc:
   - (a) leave alone — SteelR has 0 GMB reviews and is 0/11 on Maps, practical harm near zero
   - (b) update GBP to N12 8LY — triggers postcard re-verification to accountant, restores full consistency, 1-2 weeks
   - (c) hide address — convert GBP from store-type to service-area-business listing, keeps Maps presence without publishing any street
2. **Google AI Overview cached answer** still says "headquartered and manufactures at 11 Silverbirch Close..." — will self-heal after Google re-crawls the Indexing-API-pushed pages within 24-72h. No action needed; monitor via spot-check next week.
3. **Test the estimate→contact path on Mani's iPhone** (carried forward from earlier session). New flow: any QuickEnquiry submission lets the buyer leave a free-text message. Any /contact submission sets `reply_to: <customer email>` so clicking reply goes to the customer.
4. **Top up Serper credits.** Visibility-audit-runner reported 4 consecutive blocked runs (earlier session finding). Rank-tracking pipeline is stuck on firecrawl-only fallback until topped up.
5. **Task 7 SERP capture** scheduled 2026-05-31. `node scripts/audit/capture-serp.mjs post-week1`. Five days from now.

---

## Blockers

None.

---

## Recent wins (26 May 2026 — late evening, address sweep)

- **Home address removed from every steelr.co.uk public surface.** Schema, body copy, llms files, watcher canary postcodes, project doc. PR #4 squash-merged as commit `3d470c8`.
- **Replaced with Companies House registered office.** `2nd Floor, Premier House, 309 Ballards Lane, London N12 8LY` (Vitrum Solutions Ltd, company no. 14790315) — already public on Companies House so zero incremental privacy loss.
- **Two new SEO-plumbing gate-keeper subagents written.** `~/.claude/agents/canonical-consistency-gate.md` (per-URL HTML canonical / og:url / schema url assertion against deployed URL) and `~/.claude/agents/schema-completeness-gate.md` (hard-coded Google rich-result required-field map, per-type per-block evidence table). Both passed kill-criteria tests against synthetic fixtures + live pages before adoption. Schema gate's first live run is what caught the Vitrums vs SteelR address asymmetry.
- **Memory file logged:** `feedback_no-home-address.md` — covers the rule, the Vitrums vs SteelR asymmetry, acceptable substitutes (accountant's office / virtual office / no LocalBusiness block), unacceptable substitutes (home, family, supplier), and the gate-implication that `schema-completeness-gate` needs a future per-site `PRIVACY_EXCLUDED_FIELDS` config so Vitrums-style deliberate omissions don't false-fail.
- **Directory-listing inventory shipped** as `audit-data/directory-address-audit-20260526.md`. Confirmed: SteelR brand is NOT registered on any of Yell / Houzz / MyBuilder / Checkatrade / Trustpilot / FMB / Cylex / Bark / TradeSupermarket / Which? Trusted Traders. Only public exposure remaining = GBP.
- **Google Indexing API + Bing IndexNow accelerated re-crawl** on 25 top URLs immediately after deploy.

## Earlier wins (26 May 2026 — daytime, forms-and-honesty sprint)

- **Forms convergence.** Three forms on the site are now two. ContactForm at /contact (full, name+phone required + everything optional + file upload + message) and QuickEnquiry inline (now with message textarea + file upload). /design-estimate's 4-step / 19-field form deleted and 301'd to /contact.
- **Email routing fix.** Notification `to:` changed to info@steelr.co.uk. Reply-to set to customer's email via `safeReplyTo()` helper (RFC 5321 validation + CRLF strip + 254-char cap).
- **XSS finding closed.** Security-auditor flagged `/api/estimate` raw HTML interpolation (CWE-79). Route deleted entirely; surviving `/api/contact` already had escapeHtml + stripCrlf + length caps.
- **Brand-honesty sweep.** Removed ISO 14001 (13 source-code locations including homepage Organization schema's hasCredential array) and Made in Britain Marque / certified / Campaign (5 source + 1 memberOf schema entry) — all false per 25 May fact-check. Replaced with "UK Manufactured" or "ISO 9001" as appropriate.
- **CPA insurance-backed guarantee trust block on /contact + CredentialsStrip below hero.**
- **llms files cleaned through /panel-llms gate** earlier in the day (full 4-agent panel run + user approval).
- **/insurance-approved-steel-front-doors-uk added to llms.txt + llms-full.txt** (commit `db62a42`) and **/sr4-residential-steel-door angle-shift to decision-content** (commit `a5f6ff8`) — both since the earlier STATE.md snapshot.

---

## Key files

### Today's address-removal commit (`3d470c8`)
- `src/app/layout.tsx` — JSON-LD PostalAddress + removed geo
- `src/app/ai-answers/page.tsx` — body copy
- `public/llms.txt` + `public/llms-full.txt` — Q&A + areas headers
- `scripts/watchers/config.mjs` — canary postcodes
- `CLAUDE.md` — line 413 policy doc

### Daytime sprint commits (7 commits, all on main)
- See file list in Earlier wins section above

### Audit + memory
- `audit-data/directory-address-audit-20260526.md` — one-shot inventory of remaining home-address exposure across 10 UK directories + GBP + AI engines
- `~/.claude/projects/C--Users-SOT-Documents-Projects/memory/feedback_no-home-address.md` — policy + Vitrums asymmetry + gate-implication

### Subagents (workspace-global)
- `~/.claude/agents/canonical-consistency-gate.md` — per-URL HTML/og/schema URL assertion vs deployed URL
- `~/.claude/agents/schema-completeness-gate.md` — Google rich-result required-field assertion per @type

### Watchers (live cron, post-edit)
- `scripts/watchers/config.mjs` — `postcode: "N12 8LY"` on both canary payloads
- `scripts/watchers/content-drift.mjs`, `psi-lighthouse.mjs`, `utils.mjs` — modified pre-this-session, NOT included in any of today's commits (left dirty in working tree by prior session)

---

## Open items at session end

- **GBP**: pick option (a) / (b) / (c) per audit doc
- **AI Overview re-crawl**: spot-check Google AI Overview answer about SteelR HQ in 72h, expected to flip from "11 Silverbirch Close" to "West London" / N12
- **Vitrums**: untouched per design intent; no work needed
- **GlazingQuoter**: parked per "not on radar anytime soon"
- **Iphone test of contact form flow** (carryover)
- **Serper credit top-up** (carryover)
- **2026-05-31 SERP capture** (scheduled)
