# Change-log: llms files + on-site parity (2026-05-05)

**Commit:** `b0a78b1` (8 files, +506 / -49)
**Gate:** `/panel-llms` 4-agent gate passed with deep-reviewer SELECTIVE_REVERT applied; marker `.checks/llms-panel.json` written; pre-commit `brand-guard` + `llms-panel-check` both PASS.
**Risk tier:** Tested-locally (build + integrity scripts confirm compile; AI citation impact unverified — Reasoned downstream).

## Files changed

| File | Change |
|---|---|
| `public/llms.txt` | +63 / -16. New Audience Hubs block, 4 Direct Answer Q&As, Technical Glossary numerical-first rewrite (14 entries), 5 fact-check fixes, PAS 24 + Glossary intro deep-reviewer fixes, "Last updated" footer. |
| `public/llms-full.txt` | +90 / -24. Same content set as llms.txt with longer paragraphs (170-190 words per audience hub), 17 glossary entries, 4 dedicated audience hub URL blocks. |
| `src/app/layout.tsx` | hasCredential ISO :2015 stripped to plain ISO 9001 / ISO 14001. |
| `src/app/security-specification/page.tsx` | ISO :2015 stripped + body reworded from "BRE Global certified" to "UKAS-accredited certification body". |
| `src/app/lps-1673-attack-resistant-steel-door/page.tsx` | Lead time "twelve to sixteen weeks" → "confirmed at quote stage" in both FAQ answer (line 45) and body copy (lines 285-287). |
| `src/data/blog/posts/specifying-steel-doors-architects-guide-2026.ts` | Lead time 14-16 weeks + em dashes removed; rewritten as "8 to 12 weeks; lead time is confirmed at quote stage". |
| `audit-data/change-log/20260505-llms-staged-diff.patch` | 55KB diff captured for panel agents' reference. |
| `audit-data/visibility-audit-20260505.md` | Fresh visibility baseline captured by `visibility-audit-runner` during the panel run. |

## Pre-state

**Trigger:** afternoon panel-recommendation session flagged that the 3 May audience hubs launch (`/housing-associations`, `/developers`, `/architects`, `/property-managers`) had zero references in `public/llms.txt` or `public/llms-full.txt`. AI engines had no surface to cite the new B2B procurement pages.

**SERP baseline before this commit:**
- `audit-data/serp-captures/20260505-pre-panel-recommendations.json` — 24-query baseline (5 ranking, 19 not in top 30, 1 AI Overview SteelR mention).
- `audit-data/visibility-audit-20260422.md` — 2-week-old visibility baseline (Google organic 5/26, Maps 0/11, Bing 0/15; AI engines: ChatGPT first / Perplexity best-fit / AI Mode #1 featured manufacturer).

## Verification timeline (compressed)

1. Initial llms file edits drafted: audience hubs + Q&As + numerical-first glossary + footer.
2. **Verification pass 1** (3 agents): `copy-editor` flagged "5-6 minutes total test time" for PAS 24 (factually wrong); `seo-schema-validator` PASS; `fact-check-gate` returned CHANGES_REQUIRED with 5 findings:
   - Class A4 / Class C / Class D tool catalogue labels unsourced
   - Lead times 10-14 / 12-16 weeks contradict canonical 8-12 weeks
   - Fire curve "800-1000°C" → "above 800°C"
   - ISO 9001 "LPCB / BRE Global accredited body" wrong; should be UKAS-accredited
   - ISO 14001:2015 / ISO 9001:2015 version designations unsourced
3. **All 5 fact-check findings fixed inline.**
4. **Verification pass 2** (3 agents): `copy-editor` FAIL (2 missed lead-time lines: llms-full.txt:47 + llms-full.txt:829); `fact-check-gate` CHANGES_REQUIRED (Tech Specs ISO line still had old wording, line 2525 had 14-16 weeks + em dashes); `seo-schema-validator` FAIL (3 contradictions: ISO :2015 mismatch between layout.tsx + llms files; 800°C only in llms; 14-16 weeks outlier in llms-full.txt:2525).
5. **All pass-2 findings fixed.** Schema parity work spread to layout.tsx + security-specification/page.tsx (strip :2015) + lps-1673-attack-resistant-steel-door/page.tsx (FAQ lead time) + blog post (architects guide).
6. **Verification pass 3** (3 agents): `copy-editor` PASS; `seo-schema-validator` PASS; `fact-check-gate` CHANGES_REQUIRED on one regression (lps-1673 page body copy lines 285-287 still had "twelve to sixteen weeks" — FAQ at line 45 was fixed but body wasn't).
7. **Body-copy regression fixed.** Build verified PASS at 317/317 pages with prebuild hooks (validate-faqs + llms integrity).
8. **`/panel-llms` 4-agent gate** dispatched. Verdicts:
   - `visibility-audit-runner`: PASS (Google organic 5/26 → 6/26, +4pp, 2 new wins, 2 losses, AI surface unverified)
   - `cannibalisation-auditor`: PASS (6 clusters reviewed, 2 retitles flagged for separate session)
   - `research-scout`: PARTIAL (no AI engine API access in sandbox; honest no-fabrication refusal)
   - `deep-reviewer`: APPROVE WITH FIXES (1 medium SELECTIVE_REVERT on PAS 24 "No power tools" phrasing; 1 low SOFT_REVERT on Glossary intro meta-language)
9. **Both deep-reviewer fixes applied** to llms.txt + llms-full.txt.
10. **User approval** received in chat ("go ahead").
11. **Marker written** via `/panel-llms-approve` → `.checks/llms-panel.json`.
12. Commit `b0a78b1` landed. `brand-guard: PASS` + `llms-panel-check: PASS` both fired clean.
13. Pushed to main. Vercel deploy auto-triggered.

## Recommendation Gate compliance

Per project rule (`CLAUDE.md` § Recommendation Gate, added 2026-05-05):

- **Tier:** Tested-locally bundle. Build + 3 verification passes + 4-agent panel gave measurable pre/post evidence.
- **Per-session caps:** within limits (10 Tested-locally allowed; this is one bundled change).
- **Reversibility:** medium. `git revert b0a78b1` reverses cleanly; AI engine cache refresh would lag ~3-7 days.
- **Evidence captured:** yes — `audit-data/serp-captures/20260505-pre-panel-recommendations.json` (pre-state SERP), `audit-data/visibility-audit-20260422.md` + `audit-data/visibility-audit-20260505.md` (visibility pre/post), `.checks/llms-panel.json` (panel marker), this change-log.

## Post-state checklist (to fill 2026-05-12 to 2026-05-19)

- [ ] Re-run `node scripts/audit/capture-serp.mjs post-llms-update` and diff against `20260505-pre-panel-recommendations.json`.
- [ ] Spot-check ChatGPT, Perplexity, Google AI Mode on the 3 baseline queries from 22 Apr report ("UK bespoke steel door manufacturers", "SR3 Secured by Design", "UK bespoke steel front doors") — confirm AI citations held through cache refresh.
- [ ] Re-run `python audit-data/visibility-audit.py` and compare against `visibility-audit-20260505.md` for net Google + Bing + Maps movement.
- [ ] Investigate `/areas/buckinghamshire` regression (#1 → off-top-30, predates this diff but flagged by visibility-audit-runner during panel).
- [ ] Decide: promote this bundle from Tested-locally to Verified, or initiate selective revert if AI citations dropped materially.

## Out-of-scope items flagged for separate sessions

- Cannibalisation retitles (Reasoned): `/blog/hmo-front-door-requirements-uk-landlord-guide` (drop "Developer"), `/blog/specifying-steel-doors-architects-guide-2026` (lead with "Specification Checklist" / "RIBA-stage" framing, not audience noun).
- The 5 deferred Reasoned recommendations from 2026-05-05 afternoon panel (Mani Sandhu /about visibility, YMYL author bylines on 6 blogs, homepage scale anchor, two cannibalisation merges/retitles) — still pending.
- Hero "use client" LCP fix and `/best-secure-front-doors-uk` listicle — still blocked on Lighthouse + AI-citation capture scripts (full-audit architecture build).
- Pre-existing carry-forwards: rename `src/data/blog/posts/front-door-security-ratings-compared-sr1-to-sr3.ts` to drop the "sr1-to-sr3" framing.
