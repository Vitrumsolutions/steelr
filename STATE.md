# SteelR — STATE

**Last updated:** 2026-05-26 (evening — 7 commits + brand-honesty sweep + llms panel approval)
**Priority:** P0
**HEAD:** `5779223` (`docs(llms): remove ISO 14001 + Made in Britain Marque false claims + dead /design-estimate URLs`)

---

## Where I left off

**Forms-and-honesty consolidation sprint shipped. 7 commits live on production.** Triggered by Mani's morning report after receiving a real estimate submission with two complaints (too many fields, email goes to supplywindows.co.uk inbox). Scope expanded into a full brand-honesty sweep when the deep-reviewer + security-auditor panel surfaced an XSS in the estimate route, the cert-pack invented claims propagated across 13 source files, and the llms files carried the same false claims.

| Commit | Topic | Live at |
|---|---|---|
| `13f4ace` | Add optional Message textarea to QuickEnquiry across 288 pages | ~18:30 UK |
| `6506fb1` | /api/contact `to:` → info@steelr.co.uk + `reply_to` with `safeReplyTo()` CWE-93 validation | ~18:45 UK |
| `b051039` | Kill /design-estimate (4-step / 19-field form), 301 to /contact, remove /api/estimate route | ~19:00 UK |
| `9ce2d6d` | Add CPA insurance-backed guarantee trust block to /contact left column (SVG copied from vitrums) | ~19:15 UK |
| `914d6a5` | Brand-honesty sweep: remove ISO 14001 + Made in Britain Marque/certified/Campaign false claims across 9 source files | ~19:45 UK |
| `473be18` | Add CredentialsStrip below hero on /contact (safe now that ISO 14001 false claim is gone) | ~19:55 UK |
| `5779223` | /panel-llms-approved cleanup: remove ISO 14001 + Made in Britain Marque + /design-estimate refs from llms.txt + llms-full.txt | ~20:30 UK |

All verified live via Bash curl + iPhone UA. Production checks: 0 ISO 14001, 0 Made in Britain Marque/certified, 0 /design-estimate refs across llms files; /contact serves CredentialsStrip with corrected "UK Manufactured" + "ISO 9001"; homepage Organization schema no longer claims false certifications.

**Codebase shrinkage today:** ~1,000 line deletions vs ~150 insertions. Two API routes consolidated to one (/api/estimate deleted). Three forms convergent on the proven /contact + QuickEnquiry pattern.

---

## Next action

1. **Test the estimate→contact path on Mani's iPhone.** New flow: any QuickEnquiry submission now lets the buyer leave a free-text message. Any /contact submission sets `reply_to: <customer email>` so clicking reply goes to the customer (not the noreply send-only inbox). The notification `to:` is now info@steelr.co.uk (still routes to the same mailbox via the Workspace alias).
2. **Add /insurance-approved-steel-front-doors-uk to llms.txt + llms-full.txt** in a separate /panel-llms cycle. The HNW page shipped yesterday is currently absent from the AI-citation crawl surface — flagged by cannibalisation-auditor in today's panel. Net-new content, needs its own panel gate. Scope: 1 entry in llms.txt Key Pages list + 1 paragraph summary in llms-full.txt Topic Pages section.
3. **Resolve /sr4-residential-steel-door ↔ /sr3-vs-sr4-residential-steel-doors-uk 21.9% body overlap** flagged in today's cannibalisation audit. Real cannibalisation. Unrelated to today's commits. Two paths: (a) angle-shift the comparison page to "SR3 vs SR4 — when to upgrade" decision-tree only, stripping the SR4 spec section that duplicates the hub; (b) leave as-is and accept the overlap. Recommend (a) but defer to Mani.
4. **Top up Serper credits.** Visibility-audit-runner reported 4 consecutive blocked runs. Without Serper, the rank-tracking pipeline is stuck on the firecrawl-only fallback.
5. **Task 7 SERP capture** scheduled 2026-05-31. `node scripts/audit/capture-serp.mjs post-week1`. Five days from now.

---

## Blockers

None.

---

## Recent wins (26 May 2026 — full session)

- **Forms convergence.** Three forms on the site are now two. ContactForm at /contact (full, name+phone required + everything optional + file upload + message) and QuickEnquiry inline (now also with message textarea + file upload). Same doctrine across both. /design-estimate's 4-step / 19-field interrogation form deleted and 301'd to /contact.
- **Email routing fix.** Notification `to:` changed to info@steelr.co.uk (cosmetic — still the same inbox via Workspace alias). Reply-to now set to customer's email via `safeReplyTo()` helper (RFC 5321 validation + CRLF strip + 254-char cap). Operator now clicks reply on the notification and the email goes to the customer instead of bouncing to noreply.
- **XSS finding closed.** Security-auditor flagged the estimate route's raw HTML interpolation (CWE-79) on Mani's mail client. The /api/estimate route is now deleted entirely — the surviving /api/contact route already had escapeHtml + stripCrlf + length caps.
- **Brand-honesty sweep.** Removed ISO 14001 (13 source-code locations including homepage Organization schema's hasCredential array) and Made in Britain Marque / certified / Campaign (5 source + 1 memberOf schema entry) — all false per the 25 May fact-check. Replaced with "UK Manufactured" or "ISO 9001" as appropriate. Blog posts were clean of these claims (only topic-hub and component-level).
- **CPA insurance-backed guarantee trust block on /contact.** Logo copied from vitrums/public/images/accreditations/cpa.svg. Cream-tinted block with one-line caption ("Your deposit and the manufacturer warranty are protected through the Consumer Protection Association insurance-backed guarantee, FCA-regulated"). Tasteful, on-brand. Same scheme verified live against thecpa.co.uk yesterday.
- **CredentialsStrip on /contact.** Dark band of 8 certifications (PAS 24, RC4, SR3/SR4, LPS 1673, SBD, FD30S/FD60, ISO 9001, UK Manufactured) below the hero. Required the brand-honesty sweep first since the strip previously claimed ISO 14001 falsely.
- **llms files cleaned through /panel-llms gate.** 4-agent panel ran (visibility-audit-runner, cannibalisation-auditor, research-scout, deep-reviewer). All 4 APPROVE; deep-reviewer flagged 3 mechanical errors I introduced (one self-contradictory "ISO 9001 + environmental management" residue, one tautological "Alternatively use the form" sentence, two leftover "Design and Estimate" labels mismatching the /contact destination), all applied inline before approval. User explicit approval ("yes proceed") triggered /panel-llms-approve and the SHA-bound marker.
- **HNW page Indexing API submit (this morning).** Quick win before the consolidation work started. `/insurance-approved-steel-front-doors-uk` submitted to Google Indexing API. Tracker submitted count 331 → 332.

---

## Key files

### Live (7 commits pushed today, all verified on production)

- `src/components/QuickEnquiry.tsx` — Message textarea added
- `src/app/api/contact/route.ts` — `safeReplyTo()` helper + `to:` swap to info@steelr.co.uk + replyTo header
- `next.config.mjs` — /design-estimate 308 redirect to /contact added alongside cannibalisation cleanup redirects
- `src/components/Nav.tsx` — "Get Estimate" nav link removed
- `src/app/contact/page.tsx` — CPA IBG trust block + CredentialsStrip
- `src/components/CredentialsBanner.tsx` — "ISO 9001 + ISO 14001" → "ISO 9001"; "Made in Britain" → "UK Manufactured"
- `src/app/layout.tsx` — homepage Organization schema: 2 hasCredential entries deleted, 1 memberOf entry deleted, description text corrected
- 6 topic-page .tsx files — ISO 14001 + Made in Britain certified text replacements
- 17 blog posts — "[request an estimate](/design-estimate)" anchors → "[request a consultation](/contact)"
- `public/llms.txt` + `public/llms-full.txt` — false-claim sweep + /design-estimate URL cleanup
- `public/images/accreditations/cpa.svg` — new file, 7KB

### Deleted (3 files)

- `src/app/design-estimate/page.tsx` (764 lines)
- `src/app/design-estimate/layout.tsx` (50 lines)
- `src/app/api/estimate/route.ts` (141 lines)

### Memory updated

- `feedback_invented-cert-pack.md` (from 25 May) — covered the original cause that propagated to today's sweep
- `feedback_supply_windows_dormant.md` — confirmed unchanged

### Operational notes

- **Pre-commit hook gate passed** for the llms commit: `.checks/llms-panel.json` SHA-bound to the committed content. If future llms edits land, the gate fires again. Marker location: `C:/Users/SOT/Documents/Projects/steelr/.checks/llms-panel.json`.
- **Vercel auto-deploys** verified for all 7 commits. Build time per commit ~30-45 seconds.
- **HNW page Indexing API submit** earlier today (06:30 UK). Tracker submittedLen 332. Crawl status not yet checked.

### Flagged for tomorrow / next session

1. Add /insurance-approved-steel-front-doors-uk to llms.txt + llms-full.txt (new /panel-llms cycle, content addition not removal)
2. /sr4-residential-steel-door ↔ /sr3-vs-sr4-residential-steel-doors-uk cannibalisation (21.9% body overlap)
3. Serper credits top-up
4. Task 7 SERP capture on 2026-05-31
