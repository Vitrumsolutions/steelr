# Code-side panel — Bucks regression structural fix safety review

Date: 2026-05-13. Read-only review. Wordcount ~1,750.

## 1. Verification of Agent 5's H1 claim

**REFUTED.** Agent 5 (git-history forensic) claimed the 3 May H1 rewrite in commit `918b914b` "never reached production". Three independent verifications contradict this:

1. **Source code, current `main`.** `src/app/areas/[slug]/page.tsx` lines 401-405 carry the new H1 verbatim: `Steel Doors ${label}: Bespoke Steel Front Doors, BS EN 1627 RC4 Standard with LPS 1175 SR3 / SR4 Available`.
2. **Git log on the file.** `git log src/app/areas/[slug]/page.tsx` shows `918b914b` followed by 4 later commits (`20e9ca4`, `a2dee50`, `e8dc947`, `2979e07`), none of which reverted the H1 — diff inspection of each confirms only metadata / schema / block-additions, no H1 rollback.
3. **Live production fetch.** `curl https://steelr.co.uk/areas/buckinghamshire | grep '<h1'` returns: `<h1 class="sr-only">Steel Doors Buckinghamshire: Bespoke Steel Front Doors, BS EN 1627 RC4 Standard with LPS 1175 SR3 / SR4 Available</h1>`.

The 16-word cert-acronym H1 has been live on every one of the 161 area pages since 3 May 2026, and remains live as of this audit. Any swarm-output that assumed the H1 reverted is incorrect and any subsequent recommendation built on that assumption (e.g. "no need to revert, it never shipped") must be re-evaluated.

## 2. Per-commit code review

### `5ac969e8` (2 May, title + meta + schema rewrite)
Diff inspected via `git show`. No code-level defect. TypeScript types unchanged. Canonical URL field preserved (`alternates: { canonical: ... }`). OG image present. The schema `description` ballooned to 60 words of chained cert acronyms — not a defect, but the diluted-intent concern is exactly what the forensic synthesis flagged. Brand-guard PASS recorded in commit body. **No code defect. SEO regression risk only.**

### `918b914b` (3 May, H1 rewrite)
2 lines changed, both inside the existing `<h1 className="sr-only">` JSX block. Syntax preserves the ternary on `location.type === "hub"`. No accessibility regression (`sr-only` preserved, single H1 still). No schema impact. Build + brand-guard PASS per commit body. **No code defect. H1 length is the SEO concern only.**

### `2c54c8b` (3 May, 4-tier ladder rollout across 16 area data files)
132 regex replacements across 16 files. Inspected Bucks diff: 6 child-area `description` strings were rewritten. **Beaconsfield carries a regex artifact**: `"BS EN 1627 RC4 as Standard with LPS 1175 SR3 (Enhanced upgrade) to BS EN 1627 Class 3"` — the trailing `to BS EN 1627 Class 3` clause is residue from the prior phrase and reads as broken English. This was patched by `37c6833d` on 10 May. As of the current branch, the artifact is fixed. **Was a defect, now resolved.** No type errors (all `description` fields remain `string`). No schema impact.

### `a2dee509` (5 May, Tested-locally bundle, +8 outbound links)
Two structural body insertions in the area template: a Security Specification block (4 cards linking to /sr3, /pas-24, /sbd, /fd30) and an Audience Hubs block via component refactor. Diff inspected: JSX is well-formed, `<Link>` from `next/link` used correctly, `ScrollReveal` wrapper present, inline styles consistent with the rest of the file. The Audience Hubs block was added via a separate file `RelatedHubs.tsx` (referenced in commit `2979e071`'s C4 line — see next). **No code defect.** The PageRank-distribution concern stands as an SEO risk, not a code risk.

### `2979e071` (10 May, deep-audit bundle including em-dash sweep + audience-hub cards)
Three relevant edits to the area template visible in diff:
- 4 em-dashes in `manufacturingParagraph` and `customisationParagraph` variants replaced with commas — copy is grammatical.
- C4: `<RelatedHubs>` block added on all 161 area pages (audience-hub cards). Confirmed clean JSX.
- C6: Breadcrumb Home item trailing-slash drift fix — minor schema correctness improvement, no negative impact.

Brand-guard PASS recorded. Deploy-gate GO recorded. **No code defect.**

## 3. Fix-safety matrix

| Fix | Files touched | Build/test commands | Schema impact | Revert path | Risk |
|---|---|---|---|---|---|
| A. Add `localFeatures: string[]` + 200-300w unique prose to 17 hub entries | `src/data/locations/{17 files}.ts` (each hub entry) | `npm run build`, `npm run brand-guard`, `npm run brand-guard:staged` | None. `localFeatures` block is HTML-only (no JSON-LD reference). Hub `description` field is read into schema `description` — longer prose lengthens the schema `description` but does not change shape. | Single revert commit per hub OR one bundle commit reverted as one SHA | Low |
| B. Add Aylesbury + Milton Keynes (+ equivalents in other under-covered hubs) | `src/data/locations/buckinghamshire.ts` (+ others) | `npm run build` (rebuilds /sitemap.xml automatically — sitemap reads from `locations` array at build time), `npm run brand-guard` | Adds new `Location` entries with `type: "area"`. Sitemap auto-regenerates at priority 0.6 per `src/app/sitemap.ts:22`. No manual sitemap edit. Schema generated per-page by the template. | Single revert per added entry, or full bundle | Low |
| C. Write unique `faqs?: ...` per hub (replace default block) | `src/data/locations/{17 files}.ts` (add `faqs:` array on hub entries) | `npm run build`, `npm run brand-guard` | **Schema is safe.** Template at `page.tsx:183` does `location.faqs && length > 0 ? location.faqs : defaultFaqs` and emits `FAQPage` JSON-LD from whichever wins. Different FAQs per page is the correct SEO state — duplicate FAQs across hubs is the current defect. | Single commit revert | Low |

**Cron pipeline impact.** None of A, B, C touches `public/llms.txt`, `public/llms-full.txt`, `scripts/blog/publish-post.mjs`, or any blog data file. The llms-panel gate at `scripts/checks/llms-panel-check.mjs` does NOT fire. The blog publish cron does NOT fire. Sitemap regenerates as a normal build artefact.

## 4. Independent revert candidates

One commit warrants serious consideration for independent revert, regardless of the structural fix:

**`918b914b` (3 May H1 rewrite)** — The H1 went from 6 words of location-intent (`Bespoke Steel Entrance Doors Across Buckinghamshire`) to 16 words dominated by certification acronyms. The commit message itself names this as the "likely contributor" to the regression detected at the time. The fix is 4 lines. Reversibility is cheap. Verification is `curl /areas/buckinghamshire | grep h1`. Recommend partial revert: keep the 22 Apr H1 wording, and pair the revert with a Tested-locally rank-capture script run as both pre- and post-commit observation. This fits the Recommendation Gate at Reasoned tier with cheap reversibility — within the rules.

**`5ac969e8` schema description bloat** is a close second candidate but the same revert would also strip the title's recovery of intent focus. Net is more nuanced. Defer until the H1 revert has been observed for 14 days.

**`a2dee509` + `2979e071` outbound-link blocks** should not be reverted as bundles. The forensic synthesis on link graph confirms the dilution is modest (+8 outbound on a base of 24). The audience-hub cards (added in `2979e071`) are the weaker of the two additions and could be reverted alone if Phase 1 H1 revert plus structural fix do not move rankings within 21 days. Treat as Phase 3 lever, not Phase 1.

The 2 May title rewrite (`5ac969e8`) is the only piece where I would not act independently — it shipped as a bundle alongside CredentialsBanner and layout.tsx edits, so unbundling it is more surgery than benefit.

## 5. Recommended fix sequence

Three phases, with explicit gates between. All within the Recommendation Gate's cheap-reversibility constraint.

**Phase 1 — H1 partial revert (Reasoned, cheap).**
Single commit. Edit `src/app/areas/[slug]/page.tsx` lines 401-404 to restore the 28 Apr / 22 Apr clean location-intent wording. Recommended wording: `Steel Doors ${label}: Bespoke Steel Front Doors` for hubs, with region suffix for areas. Cert acronyms move out of H1. Verification: `npm run build`, `npm run brand-guard`, then `curl https://steelr.co.uk/areas/buckinghamshire | grep h1` post-deploy. Capture pre/post via `scripts/audit/capture-serp.mjs` against the 26-keyword rank set. **Gate:** observe for 14 days. If Bucks recovers to top-10 organic, hold and proceed to Phase 2 anyway. If no movement, the H1 was not the sole cause and Phase 2 is still required.

**Phase 2 — Structural content uplift (Verified pattern from Vitrums, low risk).**
Bundle three edits:
- Add `localFeatures: string[]` (4 bullets minimum) to all 17 hub entries naming AONBs, postcodes, distinctive property types per region.
- Add 200-300 words of unique prose to each hub `description` field — Bucks gets explicit Aylesbury, Milton Keynes, Chiltern AONB, HP9/SL9/HP6 postcodes, conservation context.
- Add `faqs: Location["faqs"]` arrays on hub entries with 4 hub-specific FAQs (replacing the templated default-FAQ block on hub renders only — leaves get the default still, which is correct because leaves already have 192-word locality-rich descriptions).
- Optionally add Aylesbury + Milton Keynes as new `type: "area"` entries on Bucks (and equivalent for other under-covered hubs flagged by the SERP-side forensic). This grows the sitemap by 2-4 URLs per under-covered hub.

Verification: `npm run build` (sitemap auto-regenerates), `npm run brand-guard`, `npm run brand-guard:staged`. Schema validators flag no shape changes. Cap brand-guard risk: when writing hub prose, avoid `£\d`, do not use "affordable / cheap / discount", do not mention competitors. The seo-schema-validator subagent should fire on the diff and confirm FAQPage schema is well-formed per hub. Verification gate before merge: visibility-audit-runner subagent on staged branch.

**Phase 3 — Conditional link rebalancing (defer 21 days).**
Only if Phase 1 + 2 have not moved Bucks back into top 20 after 21 days. Revert the 4 audience-hub Links in the area template (keep the 4 security topic Links). This is cheapest, most-defensible partial revert of `a2dee509` / `2979e071`. Single commit, single file (`page.tsx`). Verify via build + brand-guard. Capture pre/post.

**Cross-cutting risk check.** All three phases keep brand-guard PASS provided the hub-prose drafts are reviewed for the brand-guard banned list before commit. Brand-guard already covers `src/data/locations/` (scripts/brand-guard.mjs:58). The 281-word default FAQ block is worth keeping for leaf-area pages (which need the schema density and would not benefit from unique FAQs per town) but replacing on hub pages. The schema validator subagent should be the gate before any merge.

**One housekeeping note.** Sitemap consistency: the CLAUDE.md tracker says 313 URLs while `gsc-indexing-tracker-steelr.json` says `totalPages: 259`. Reconcile this tracker drift in the same Phase 2 PR — it falls outside the panel scope but compounds the GSC-side diagnostic noise.
