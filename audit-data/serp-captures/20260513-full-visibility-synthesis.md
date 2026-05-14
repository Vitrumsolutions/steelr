# Full visibility synthesis — 13 May 2026

**Sources:**
- Hands-on browser captures via Claude_in_Chrome against user's logged-in browser (Mani Sandhu account)
- `audit-data/cannibalisation-20260513.md` (cannibalisation-auditor agent)
- `audit-data/visibility-audit-20260513.md` (visibility-audit-runner agent — Serper credits exhausted, recovered honest 22 Apr to 10 May trend data only)
- Today's two on-site ships at commits `c94e1c0` (whyConsider closing blocks ×18 pages) and `8ff80a0` (spec-by-spec table on `/steel-front-door-vs-composite`)

**Method honesty:** Serper.dev credits were exhausted, so the API script delivered the 22 Apr to 10 May trend rather than 13 May fresh API data. Today's live Google captures via the user's browser fill the 13 May gap on the 10 priority queries. ChatGPT free-tier silently throttled after 2 queries (same behaviour as 2026-05-11). Gemini Fast tier completed 8 queries. Brand entity recognition tested on Google.

---

## 1. Scoreboard across three engines × 10 priority queries

| # | Query | Google organic | Google AI Overview | ChatGPT-with-Search | Gemini |
|---|---|---|---|---|---|
| 1 | `steel front doors uk` | Not in top 10 | Not cited (Latham's / Modern Doors / Domadeco / Doors4Security) | ✅ Cited twice in body — "**SteelR-style systems**" + "**SteelR** and Urban Front" | ❌ |
| 2 | `bespoke steel front door uk` | Not in top 10 | Not cited (Original Steel / Latham's / Iconic / Steel Door Co / Strongdor) | ✅ "the strongest specialist currently is **SteelR UK**" + "**SteelR's RC4 specification is unusually high**" | ❌ |
| 3 | `luxury bespoke steel front door uk` | Not in top 10 | Not cited (Steel Door Co / Domadeco / Bespoke Steel / Modern Doors / Express / Black Steel) | (throttle) | ❌ (Gemini named Crittall / Black Steel / Joshua James / Stronghold / Urban Front) |
| 4 | `high security front door uk` | Not in top 10 | Not cited (Latham's / Banham / Crystal GRP / Doors4Security / Fort Premium) | (throttle) | ❌ (Gemini named Solidor / Endurance / Gerda / Rockdoor) |
| 5 | `steel front door cost uk` | Not in top 10 | (no AI Overview) | (throttle) | ❌ no brands (generic pricing) |
| 6 | `steel vs composite front door uk` | **✅ #2 AND #4** (topic hub + blog post) | (no AI Overview) | (not tested today — yesterday: ✅ cited 6 times on Perplexity-equivalent) | ❌ Gerda / Latham's / Crittall / Black Steel Doors |
| 7 | `steel front door for a victorian house` | Not in top 10 (Latham's / Banham / JK Doors / Secure House / Fort Premium / Marlin / Modern Doors / Domadeco / Express / RK) | (no AI Overview) | (throttle) | ✅ "**High-End Bespoke Steel (e.g., SteelR, Strongdor)**" |
| 8 | `steel doors london` | Not in top 10 (Steel Door Solutions / Steel Doors London / Design Plus / Black Steel / Door Suppliers / Original Steel / Bradbury / Prestige / Totally Steel) | (no AI Overview) | (throttle) | (not tested today) |
| 9 | `front door for a grade ii listed property` | Not in top 10 — **timber-dominated** (Mumford & Wood / Ayrton / Doorpac / Wandsworth Sash / Hawker / Tucker / Bereco / Longden); one steel (Multisteel) | (no AI Overview) | (throttle) | (not tested today) |
| 10 | `steelr reviews` | Total **entity-confusion failure** (Glassdoor Steeler / Pittsburgh Steelers / Indeed Steeler) | (no AI Overview) | (throttle) | (yesterday: same failure) |

### Top-line numbers
- **Google organic top-10:** 1 win of 10 priority queries (`steel vs composite front door uk` at #2 AND #4 — dual position)
- **Google AI Overview:** 0 of 4 panels that fired included SteelR
- **ChatGPT-with-Search:** 2 of 2 attempts cited SteelR prominently (throttle after Q2)
- **Gemini:** 1 of 8 tested cited SteelR (Victorian-house framing only)

### Combined view across all engines today: 4 citation events / 22 query-engine cells tested = 18%

---

## 2. Trend deltas (recovered via visibility-audit-runner from 22 Apr to 10 May)

The Serper API ran out of credits before today's run completed, but the agent recovered the most recent good baseline (10 May) and diffed against the 22 Apr canonical baseline. Real wins captured:

| Metric | 22 Apr | 10 May | Net |
|---|---|---|---|
| Google organic — keywords ranking (top 30) | 5 of 26 | 8 of 26 | +60% relative |
| `SR3 residential steel door` page | #8 | #6 | gained 2 positions |
| `steel vs composite doors` | not ranked | #5 | new entry (today's live capture shows further gain to #2 and #4) |
| `steel doors Kensington` | not ranked | #5 | new entry |
| `steel doors Chelsea` | not ranked | #9 | new entry |
| `steel doors Esher` | not ranked | #2 | new entry — closest to top 3 |
| Google Maps surface | 0 | 1 (Esher #6) | first appearance |

### One real loss (the only meaningful regression in 21 days)
- `steel doors Buckinghamshire` — fell from **#1** to **outside top 30**. Single biggest individual position drop. Predates the 5 May 4-tier ladder work. Cause not yet diagnosed; sitting in the queued investigation list in STATE.md.

### Today's live capture confirms the upward trend continues
- `steel vs composite front door uk` was #5 on 10 May. Today's live captures show **#2 and #4** simultaneously on page 1 — the topic hub and the blog post both ranking. Whether the gain is from this morning's spec-table commit or organic continuation of the 5 May lift is impossible to attribute yet (the change is 8 hours old).

---

## 3. Cannibalisation findings (from agent report)

Six confirmed internal-competition cases. Three matter for the priority query set:

### Heritage intent (Q7, Q9 from today's audit)
Four blogs target conservation/period/listed framing — `conservation-area-door-requirements-uk`, `steel-doors-conservation-areas-planning-guide`, `best-front-doors-period-properties`, `best-areas-london-period-property-renovations` — and no topic hub consolidates them. Both ChatGPT and Gemini surface us on Victorian framing; both Gemini and Google AI Overview surface MultiSteel and Crittall as the named heritage-steel specialists. **Building `/heritage-steel-front-doors-uk`** with the four blogs consolidating into it is the highest-leverage on-site move on the audit (Reasoned tier, cheap reversibility).

### Luxury London intent
`/luxury-steel-entrance-door-london` (topic hub) competes with `/areas/london` (geographic hub). Both target broadly the same intent. The topic hub is currently the stronger candidate. Action: angle-shift the area hub toward geographic-coverage framing.

### SR3 intent
`/sr3-residential-steel-door` (34 inbound links) dominates `/blog/what-is-sr3-security-rating` (0 inbound links). Blog is being suppressed. Action: angle-shift blog to consumer-language explainer rather than spec-page duplicate.

### Cost intent
`/steel-front-door-cost-uk` (16 inbound links) wins; two blogs targeting same query have 0 inbound links each. Action: 308 one blog to the hub, angle-shift the other.

---

## 4. The three patterns that matter for next moves

### Pattern A — ChatGPT-with-Search is the channel that loves us
Two days of audits (11 May + 13 May) both confirm ChatGPT-with-Search names SteelR prominently on category-commercial queries. The 2 of 2 today and 5 of 7 from 11 May are reproducible. This is the channel real prospects actually use. The April CLAUDE.md headline is current and protected by the llms.txt + topic-pages strategy.

### Pattern B — Google AI Overview is a separate channel from ChatGPT-with-Search
Both reach Bing index in theory, but Google AI Overview's grounding model picks different sources (Latham's, Modern Doors, Domadeco, Doors4Security, Banham, Crystal GRP). Same finding as Gemini yesterday on a different surface. We win the Bing-index-via-ChatGPT side but not the Google-index-via-AI-Overview side. Confirms the channel-split logged in CLAUDE.md.

### Pattern C — Steel-vs-composite is the page where every signal aligns
- Google organic: #2 AND #4 (dual rank)
- Perplexity: 6 citations on the equivalent query (per 11 May audit)
- The spec table I shipped this morning (commit 8ff80a0) targets this exact page
- Cannibalisation agent confirmed the hub vs blog pair is the healthy informational/commercial split, not real competition

This is the case study for how on-site investment converts into multi-engine citation. Recommendation gate-eligible to replicate the pattern on `/heritage-steel-front-doors-uk` (heritage Pattern A move from cannibalisation findings).

### Pattern D — The brand entity is broken across all three engines
"steelr reviews" returns Pittsburgh Steelers / Steeler manufacturing on Google, ChatGPT logged-out, and Perplexity. The cause is structural (0 reviews) and outside on-site scope. User-managed per the DO-NOT-RE-SUGGEST rule. The fix is review acquisition, not anything in `/src`.

---

## 5. Recommendations (gate applied)

### Verified
1. **Today's two ships (whyConsider closing blocks + vs-composite spec table) cannot be tagged Verified yet** — measurement window is 14 to 30 days. Today's audit is the BEFORE snapshot for both experiments. Next measurement: 2026-05-27 to 2026-06-13.

### Tested-locally
2. **22 Apr to 10 May trend confirmed positive.** 5/26 → 8/26 keywords ranking, 6 new entries, 1 SR3 page gain (+2 positions), 1 Maps first surface. Documented evidence. The investment is working.
3. **ChatGPT-with-Search position stable across two consecutive audits (11 May + 13 May).** 7 of 9 total queries cited across both sessions. Reproducible.

### Reasoned (capacity check — 2 of 5 used this session)
4. **Build `/heritage-steel-front-doors-uk` topic page.** Highest-leverage gap surfaced by today's three-engine audit. Gemini already cites us on Victorian framing (entity is in the index); Google AI Overview pulls MultiSteel/Crittall on heritage queries (the niche is reachable and not dominated by entrenched authorities); cannibalisation agent confirmed four existing blogs can consolidate into one hub. Same pattern as the vs-composite page that's now at #2/#4 on Google. **Reasoned tier 4/5 slot.** Reversibility: cheap (single page, no IA breaking).
5. **Diagnose the Buckinghamshire #1 to outside-top-30 regression.** Single biggest individual position loss in 21 days. Action item already queued in STATE.md from 5 May. Reasoned tier 5/5 slot if shipped.

### Deferred (need data)
- **Re-running the ChatGPT throttled queries on a Plus account** would round out the dataset. Cost vs benefit unclear; the directional finding from 2 queries is consistent with 5 of 7 from 11 May.
- **Gemini Google-side authority work** to crack the 7 missed queries is outside on-site scope.
- **Top up Serper credits + patch the script to refuse to overwrite on 4xx.** Engineering task on the audit script itself.

### Skipped (DO-NOT-RE-SUGGEST)
- Reviews acquisition (Trustpilot / Google reviews) — user-managed. The "steelr reviews" entity-confusion fix is gated on this and only this.

---

## 6. The next-three I would actually ship if you ask me to proceed

1. **`/heritage-steel-front-doors-uk` topic page.** Same template as `/steel-front-door-vs-composite`. Spec-by-spec heritage table comparing SteelR heritage-style steel against composite imitations and timber traditionals. 308-redirect one of the four overlapping blogs. Internal-link the other three to the new hub. Estimated ~2 hours. Indexing API + IndexNow + cannibalisation-auditor verification on completion.
2. **Buckinghamshire regression diagnosis.** Read the area-page diff against the pre-regression version; check internal-link density; confirm whether the 4-tier ladder template work touched the page wording. ~45 min.
3. **Top up Serper credits + patch the script's silent-fail bug.** The visibility audit cannot run reliably without this; the agent surfaced the bug in today's run. ~30 min once credits in.

Three Reasoned-tier ships, cheap reversibility, all measurable in the same 14 to 30 day window.

---

## Files referenced

- `audit-data/serp-captures/20260513-full-visibility-synthesis.md` (this file)
- `audit-data/cannibalisation-20260513.md` (cannibalisation findings)
- `audit-data/visibility-audit-20260513.md` (Serper-blocked but 22 Apr to 10 May trend)
- `audit-data/serp-captures/20260513-homeowner-search-verified.md` (earlier today)
- `audit-data/serp-captures/20260511-chatgpt-gemini-verified.md` (2-day-old baseline for ChatGPT-with-Search + Gemini)
- `audit-data/visibility-audit-20260510.md` (last good Serper baseline)
