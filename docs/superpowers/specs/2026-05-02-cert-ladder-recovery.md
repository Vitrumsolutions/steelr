# Cert Ladder Recovery — 4-Tier Repositioning + Decline Reversal

**Date:** 2026-05-02
**Status:** approved by user, in execution

## Background

Between 22 Apr and 02 May 2026, three commits stripped SR3/SR4/LPS 1175 keyword density from site-wide chrome (CredentialsBanner, QuickEnquiry, layout title, doors.ts) and added a JSON-LD FAQ on `/security-specification` saying "we do not claim an LPS 1175 SR rating". This was an over-correction.

Supplier evidence proves SteelR genuinely offers a four-tier ladder:
- **Tier 1 — Standard:** PAS 24:2022 + BS EN 1627 RC4 single leaf unglazed + FD30S + SBD + ISO 9001 (Knightsmark + Strongdor cover this)
- **Tier 2 — Enhanced:** All Tier 1 + LPS 1175 SR3 (Strongdor LPCB register entry 1542a)
- **Tier 3 — Commercial-grade:** All Tier 1 + LPS 1175 SR4 D10 Issue 8 (Strongdor LPCB 1542c)
- **Tier 4 — Ultra-high:** All Tier 1 + LPS 1673 Attackdor AR.A300/B180E/B300E/C120E (Strongdor LPCB 1542e)

Operational reality (per user): SteelR sales team consults each customer through options, then provides the spec required based on the chosen tier. The website should reflect the full spectrum. The "we never disclose the supplier" rule remains.

The decline pattern in Buckinghamshire (#1 → #5 → #10) and Kensington / Esher (lost rank entirely) is directly attributed to the chrome-strip — area pages relied on SR3/SR4 keyword density in the shared components more than topic pages did.

## Goals

1. Restore SR3/SR4/LPS 1175 keyword density in shared chrome to recover area-page rankings
2. Reposition the website to show the full 4-tier ladder
3. Drop the "we do not claim an LPS 1175 SR rating" disclaim
4. Add under-claimed supplier-proven specs (acoustic 39 dB Rw, weather 1200 Pa wind, ISO 14001, Made in Britain, EPD)
5. Resolve cannibalisation flagged by audit (3 town blogs + 2 redirect candidates)
6. Drop "luxury" from London borough metadata so /luxury-steel-entrance-door-london owns its cluster
7. Show SteelR in best light — premium, defensible, comprehensive

## Non-goals

- Disclosing supplier identity (Strongdor / Knightsmark) anywhere
- Citing specific LPCB cert reference numbers (1542a/c/d/e) on customer-facing pages — defer via "by enquiry / available on request" framing
- Aggressive price claims (no banned words: "affordable / cheap / best price / discount")
- Adding LPS 1673 to area pages (it's by enquiry only and only relevant for top-end briefs)

## Execution phases

### Phase A — chrome restoration (highest-impact recovery)

Files:
- `src/components/CredentialsBanner.tsx`
- `src/components/QuickEnquiry.tsx`
- `src/app/layout.tsx` (site-wide title + description)
- `src/data/doors.ts` (description generator)
- `src/app/areas/[slug]/page.tsx` (LocalBusiness schema reconciliation)
- `src/app/security-specification/page.tsx` (drop the disclaim FAQ)

Restore SR3 + SR4 alongside RC4 in all visible chrome. The accuracy concern (supplier coverage) is satisfied because Strongdor genuinely holds the SR ladder. Single commit.

### Phase B — llms.txt + llms-full.txt 4-tier ladder

Update both llms files to:
- Drop the "we do not claim an LPS 1175 SR rating" line in Technical Glossary
- Add the 4-tier ladder explicitly in Specifications + Direct Answers
- Reposition existing references from "we are RC4 only" to "we offer the full ladder"

Panel-gated. Run /panel-llms after edits, await approval, then commit.

### Phase C — SR3 topic page reframe + new SR4 page

Reframe `/sr3-residential-steel-door` from "explainer about a thing other people sell" to "Enhanced upgrade tier offered by SteelR".
Create `/sr4-residential-steel-door` mirror page — same template, different cert tier.

### Phase D — Technical Performance content additions

Add a Technical Performance section to:
- Homepage
- /security-specification
- The four security tier pages

Numbers: U-value 1.5 W/m²K standard, 0.8 W/m²K thermal upgrade, 39 dB Rw acoustic, 1200 Pa wind / 98 mph (coastal), Class 4 air, 150 Pa water, ISO 9001:2015 + ISO 14001:2015, Made in Britain certified, EPD on request.

### Phase E — Cannibalisation cleanup

- Redirect `/blog/what-is-sr3-security-rating` → `/sr3-residential-steel-door` (next.config.mjs 308)
- Redirect `/blog/how-much-do-steel-doors-cost-uk` → `/steel-front-door-cost-uk` (308)
- Reangle 3 town blogs (Bucks → period property focus, Surrey → country estate focus, Kent → coastal focus) so they don't duplicate area-hub intent

### Phase F — London "luxury" deduplication

Remove "luxury" from individual London borough page metadata so `/luxury-steel-entrance-door-london` owns the luxury cluster. Borough pages compete on `[Borough]` keywords only.

### Phase G — Full site audit + checklist

- Build clean (310+ static pages, no errors)
- All sampled URLs HTTP 200 (50+ sample)
- Schema valid on representative pages
- No stale claims (0.87 / polyurethane-injected / 25-year warranty / "we do not claim")
- 4-tier ladder visible across security pages, llms files, chrome
- Sitemap counts reconcile
- Live curl verification of key changes
- AI citation re-test for SR3/SR4 queries
- Complete tick list with evidence per item

## Risk register

| Risk | Mitigation |
|---|---|
| Restoring SR3/SR4 risks recreating the original over-claim | Strongdor LPCB register entries 1542a/c/d/e are public-verifiable proof. Customer enquiries route to the supplier holding the cert. |
| AI engines that picked up the RC4-only positioning may take days to re-cite the ladder | Indexing API push + IndexNow + 7-14 day re-test |
| Two redirects (Phase E) drop two pages from the indexed set | Both are duplicates of stronger topic pages, consolidating authority |
| New /sr4-residential-steel-door page risks panel gate again on llms files | Panel will be invoked once for combined Phase B + C llms changes |
| Operational: customer expects SR4 fulfilment but order routes to standard supplier | User confirmed the sales team consults each customer through options before spec sign-off |

## Acceptance criteria

- [ ] Chrome restored: CredentialsBanner, QuickEnquiry, layout title, doors.ts all show SR3 + SR4 + RC4 alongside each other
- [ ] Disclaim line removed from /security-specification + llms files
- [ ] 4-tier ladder visible on /security-specification + llms.txt + llms-full.txt
- [ ] /sr3-residential-steel-door reframed as "Enhanced upgrade tier"
- [ ] /sr4-residential-steel-door created and indexed
- [ ] Technical Performance numbers (acoustic 39 dB, wind 1200 Pa, U-values, ISO 14001, Made in Britain, EPD) added to relevant pages
- [ ] 2 redirects added in next.config.mjs
- [ ] 3 town blog angles shifted away from area-hub duplication
- [ ] London borough metadata stripped of "luxury"
- [ ] Build clean, brand-guard PASS, panel gate passed, all commits pushed
- [ ] Live curl verification on every change
- [ ] Full site sweep + checklist surfaced to user
