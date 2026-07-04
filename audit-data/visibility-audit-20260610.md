# SteelR Visibility Audit — 2026-06-10 (panel-llms gate, lead-time llms change)

**Trigger:** `/panel-llms` gate on a STAGED change to `public/llms.txt` (8 lines) + `public/llms-full.txt` (30 lines) that only rewrites lead-time wording — "8 to 12 weeks" / "eight to twelve weeks" / "8-12 week lead time" → "approximately eight weeks" (standard + SR3) and "approximately 10 weeks" (SR4) — to align the llms files with the site-wide 2 June standardisation. Imported-competitor foil "twelve to twenty weeks" and the "six to eight weeks of manufacture" breakdown are preserved (confirmed in the staged diff).

**Baseline compared against:** `audit-data/serp-captures/20260609-full-visibility-check.md` (yesterday's hands-on sweep) and dated baseline `audit-data/visibility-audit-20260526.md`.

**Method:** AI-citation surface tested live via Claude_in_Chrome against the user's logged-in ChatGPT ("general" Chrome profile, free tier), per the project rule that ChatGPT-with-Search is the canonical AI-channel health test. Eight exact baseline queries reused verbatim from the 9 Jun capture (per `feedback_use_exact_baseline_queries`). Google/Bing/Maps NOT re-run: the Serper key returns `{"message":"Not enough credits"}` (6th consecutive blocked run — probed 2026-06-10). Live llms + site lead-time wording fetched via HTTPS.

---

## Serper status: STILL BLOCKED

`curl POST https://google.serper.dev/search` with the project key → HTTP 400 `{"message":"Not enough credits"}`, same as 11/13/26 May. `audit-data/visibility-audit.py` was therefore NOT run (running it would write fabricated zeros into `visibility-audit-results.md`, which remains poisoned). No fresh Google/Bing/Maps rank data this run. The 9 Jun Google-organic data (Firecrawl) stands as the most recent: SteelR absent top-20 on `steel front doors uk` and `steel doors london`, #7 on `composite vs steel doors`.

---

## AI — ChatGPT-with-Search (8 exact baseline queries, vs 9 Jun)

Free-tier model downgrade kicked in from Q6 onward ("using a less powerful model until your limit resets") — same pattern as 9 Jun and 27 May. Q6–Q8 ran on the lighter model and STILL cited SteelR.

| # | Query | 10 Jun | 9 Jun | Δ | SteelR citation target |
|---|---|---|---|---|---|
| 1 | best steel front doors uk | ✅ named (body + budget rec "£4–10k+: SteelR") | ✅ | = | body link `steelr.co.uk`; chips = Vitrum Solutions |
| 2 | steel security doors for home uk | ✅ named (bespoke luxury + "if security is priority" list) | ✅ | = | all chips → `vitrums.co.uk/steelr` |
| 3 | steel doors london | ❌ absent (local supplier map-list) | ❌ | = | n/a (Doors of Steel, CKI, Stronghold, Multisteel…) |
| 4 | most secure steel front door | ✅ cited, multiple first-party links | ⚠️ source chip only | ↑ | `steelr.co.uk/sr3-residential-steel-door`, `/bs-en-1627-rc4-residential-steel-door`, `/` |
| 5 | bespoke steel front door uk | ✅ #1 shortlist + opening rec | ✅ | = | `steelr.co.uk/bespoke-steel-front-doors-uk`, `/` |
| 6 | steel front door companies uk | ✅ #1 (top of premium-bespoke list) | ✅ #1 | = | named #1; no Vitrums chip this answer |
| 7 | steel front doors for homes uk | ✅ named first (true-bespoke tier) | ❌ absent (Vitrums cited instead) | ↑ | two direct `steelr.co.uk` links |
| 8 | residential steel front door london | ✅ #1 London bespoke (headlined) | ✅ #1 | = | `steelr.co.uk` |

**Headline: ~7/8 ≈ 88% citation (up from 5.5/8 ≈ 69% on 9 Jun).** Two queries flipped miss/weak → cited (Q4 ⚠️→✅, Q7 ❌→✅); none regressed. Only persistent miss is Q3 `steel doors london`, which returns a Google-style local-pack list of London installers where SteelR's GBP does not rank (0 reviews) — a Maps/GBP problem, not an llms problem.

### Notable shift since 9 Jun: more FIRST-PARTY steelr.co.uk citations
On 9 Jun the recurring problem was sister-site cannibalisation — SteelR won the MENTION but `vitrums.co.uk/steelr` won the CITATION chip. Today that is partially reversed on the high-intent queries: Q4, Q5, Q7, Q8 all carry **direct steelr.co.uk page-level citations** (including the SR3 page, the RC4 page, the bespoke hub, and the homepage). Vitrums still owns the chips on the two broadest shopper queries (Q1, Q2). Net: steelr.co.uk is starting to win its own category citation on the bespoke/security/London intents — the exact pages the staged llms change touches.

### Which engines cite which steelr.co.uk pages (this run)
- `steelr.co.uk/` (homepage) — Q1, Q5, Q7, Q8, plus the lead-time probe below
- `steelr.co.uk/sr3-residential-steel-door` — Q4 (twice)
- `steelr.co.uk/bs-en-1627-rc4-residential-steel-door` — Q4
- `steelr.co.uk/bespoke-steel-front-doors-uk` — Q5 (twice)
- `vitrums.co.uk/steelr` (sister site, ABOUT SteelR) — Q1, Q2 chips
- `vitrums.co.uk/entrance-doors/gerda-steel-doors` — Q2 chips

Perplexity / Gemini not re-tested (project rule: ChatGPT-with-Search is healthy → AI channel is healthy). 9 Jun status stands: Gemini 2/2 but framed via Vitrum Solutions chips; Perplexity 0/1 (weakest surface).

---

## DOES LEAD TIME APPEAR IN LIVE AI ANSWERS? — YES (citation-cache risk is REAL but LOW-impact)

This is the decision-critical finding for the panel.

**A lead-time query surfaced organically during the run** ("where can I buy a bespoke steel front door in the UK and what is the typical lead time"). ChatGPT-with-Search answered:

- **"Standard bespoke steel door … 8–12 weeks end-to-end (most common benchmark)"** — and the citation chip attached to THAT EXACT FIGURE is **`steelr.co.uk`**. ChatGPT is currently citing steelr.co.uk's own pages as the source for the "8–12 weeks" lead-time claim.
- Breakdown it gave: "Survey + design approval 1–3 wks, Manufacture 6–10 wks, Installation 1–2 days."
- "Complex / high-security builds: 10–16 weeks" cited a third party (interior-doors.co.uk); "12–20 weeks total" was generic, not SteelR.
- SteelR was also listed #1 in the supplier shortlist for this query.

**Interpretation for the panel:**
1. The "8–12 weeks" figure the staged change removes IS live in at least one AI answer right now, AND is being attributed to steelr.co.uk. So changing it is not cosmetic — there is a real, observable citation that will go stale.
2. BUT this cuts in favour of shipping the change, not against it. The live figure is now WRONG (the site says "approximately 8 weeks" since 2 June; the homepage confirms this verbatim). Leaving the llms files at "8–12 weeks" keeps feeding AI engines a number the business no longer quotes. The staged change makes the AI-cited figure match reality.
3. None of the 8 core baseline answers reproduced any lead-time figure — lead time only appears when the user explicitly asks for it. So the change touches a narrow slice of AI answers (lead-time-intent prompts), not the high-value security/bespoke/London citations that drive the channel.
4. Cache-disruption risk is the standard llms-edit risk (AI engines re-crawl and re-cache), but it is bounded: the edited sentences are lead-time sentences, and the pages earning the valuable citations (SR3, RC4, bespoke hub, homepage) are cited for their SECURITY/SPEC content, which the diff does not touch.

---

## Live wording check (HTTPS fetch, 2026-06-10)

- **Live `steelr.co.uk/llms.txt`** still says "eight to twelve weeks" + "8-12 week lead time" (×2) — expected; the change is STAGED, not shipped.
- **Live homepage** — clean "approximately 8 weeks" (2 June standardisation landed here). ✅ matches the staged llms target wording.
- **Live `steelr.co.uk/process`** — MIXED: live HTML contains BOTH "Eight to twelve weeks from first enquiry" AND "approximately eight weeks from first enquiry" / "around 8 weeks" in the same page. The 2 June standardisation did not fully clear the old figure from /process.

**Implication:** the owner's statement "the live site already says approximately 8 weeks everywhere" is true for the homepage but NOT fully true for /process, which still serves residual "eight to twelve weeks" copy. The staged llms change aligns the llms files with the INTENDED standard and with the homepage; /process is a separate stray that should be cleaned up so the live site is internally consistent (out of scope for this llms commit, flagged as a follow-up).

---

## Staged diff verification (`git diff --cached`)

- `public/llms.txt` — 8 lines changed (4 replacements): SR3 → "Approximately 8 week", SR4 → "Approximately 10 week", two lead-time sentences → "approximately eight weeks".
- `public/llms-full.txt` — 30 lines changed (15 replacements): same pattern across process/installation/FAQ/spec sections.
- **Preserved as intended:** "twelve to twenty weeks" imported-competitor foil (uk-vs-imported sections) and "six to eight weeks of manufacture" breakdown — confirmed UNCHANGED in the diff.
- No other content touched. This is a clean, scoped wording-alignment change.

---

## Panel verdict (visibility-audit-runner leg)

**No visibility objection to shipping the staged lead-time change. Recommend APPROVE on visibility grounds.**

- AI channel is healthy and improving: ~7/8 ChatGPT-with-Search citation (up from 5.5/8), with more first-party steelr.co.uk citations than 9 Jun.
- The change corrects a figure that is currently (a) live-cited to steelr.co.uk in AI answers and (b) factually stale vs the business's actual ~8-week lead time. Aligning it reduces, not increases, the risk of AI engines quoting a wrong number.
- Citation-cache risk is bounded to lead-time-intent prompts; the security/bespoke/London pages that earn the high-value citations are cited for spec content the diff does not alter.

### Follow-ups (out of scope for this commit)
1. **`/process` still serves mixed lead-time copy** ("eight to twelve weeks" + "approximately eight weeks" in the same live page). Clean it to "approximately 8 weeks" so the live site is internally consistent before/after the llms change ships.
2. **Top up Serper credits** — 6th consecutive blocked run; Google/Bing/Maps rank baseline still unmeasurable. Recommendation outstanding since 11 May.
3. **Patch `visibility-audit.py` to refuse writing a results file on Serper 4xx** — stops re-poisoning `visibility-audit-results.md`. Outstanding since 13 May.
4. **Q3 `steel doors london` miss is a GBP/Maps gap** (0 reviews → not in the London local pack), not an llms gap. Owner-managed.

## Sources of truth for this report
- AI surface: Claude_in_Chrome live captures this turn (ChatGPT conversation `Best Steel Front Doors` + `Bespoke Steel Doors UK`, user's logged-in free-tier account).
- Serper block: `curl` probe, HTTP 400 Not enough credits, 2026-06-10.
- Staged diff: `git diff --cached --stat / -p public/llms.txt public/llms-full.txt`.
- Live wording: HTTPS fetch of `/llms.txt`, `/`, `/process`, 2026-06-10.
- Prior baseline: `audit-data/serp-captures/20260609-full-visibility-check.md`.
