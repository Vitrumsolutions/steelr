# SteelR — STATE

## Where I left off
Big 29 Apr session. 8 commits, all on `origin/main`. The headline is a supplier-truth correction round across the public surfaces plus a new LPS 1673 topic page targeting the small high-threat residential audience.

- **Composite-vs-steel cannibalisation closed.** Blog merged into `/steel-front-door-vs-composite` hub with U-value ranges, sustainability, insurer FAQ; two 308 redirects in `next.config.mjs`, no chains. Blog count 41 → 40 (`470bbdf`).
- **llms drift reconciled.** 161 leaf areas + 16 hubs = 177 total, 60 doors, 40 published guides. 6 orphan refs to deleted composite blog purged via `backfill-llms-full.mjs`. SHA-marker panel gate passed (`87d91d6`).
- **Hosting modernised.** A record → `216.198.79.1`, CNAME www → per-project `ae52195cfb899090.vercel-dns-017.com` in Fasthosts. Vercel www-redirect flipped 307 → 308. CLAUDE.md refreshed (`7a035c9`).
- **Three site-wide overclaim corrections (`5293a62`).** Warranty: "25yr structural / 10yr hardware" → "10yr construction / 5yr finish / 3yr hardware (extended packages on request)". U-value: "0.87 to 1.0 W/m²K standard" → "typically from 1.5 W/m²K standard, thermal-upgrade as low as 0.8". Core: "polyurethane-injected" → "insulated core (mineral wool or polyurethane)". Lookbook fix: 7 `Image` components got `unoptimized` to bypass Vercel optimizer 402 quota.
- **Brand-surface relabel (`ebdb860`, user's parallel commit).** SR3/SR4/LPS 1175 references replaced with BS EN 1627:2011 RC4 (single leaf, unglazed). SteelR no longer claims LPS 1175 SR ratings on the public surface.
- **llms-full U-value alignment (`5ec44ad`).** Numeric figures across llms-full.txt brought into line with supplier test standards.
- **New topic page `/lps-1673-attack-resistant-steel-door` (`e380198`, `1e80ae8`).** LPS 1673 is a separate LPCB attack-resistance scheme (distinct from BS EN 1627). Cross-linked from 4 related topic pages, `/security-specification` gained a 3rd tier card and 6th certification-strip cell, llms.txt + llms-full.txt updated.
- **Indexing pushes.** 66/180 GSC quota used (35+10+15+6 across the day). IndexNow batches each push, all HTTP 200.

## Next action
- **Cross-link sweep for `/lps-1673-attack-resistant-steel-door`.** 4-5 area pages still need their internal links to the new page checked (Steps 7+8 in the plan doc, lower priority during the build).
- **Refill empty blog content calendar.** `scripts/blog/content-calendar.json` empty; cron next fires Thu 30 Apr 20:00 UTC with nothing to publish. Stage 3-6 posts targeting audit gaps (SR3-equivalent vs RC4 explainer, LPS 1673 vs RC4 distinction, PAS 24 explainer, cost guide, London townhouses, glass-panel doors).
- **Off-page domain authority / backlink work.** 27 Apr customer-language audit returned 0/20 SteelR rankings on steel-specific buyer queries. Domain authority is the structural ceiling — highest-leverage open task.
- **Em-dash backlog.** 1,065 instances across 43 files (`audit-data/em-dash-backlog-2026-04-28.md`). Phased context-aware cleanup — top-3 blog posts first.

## Blockers
- 0 GMB reviews still the Maps 3-pack blocker — user-managed, do not re-suggest.
- Bing post-migration indexing lag continues; recovery expected mid-late May 2026.
- Domain authority is the structural ceiling on Google organic; no on-page fix will close it.
- 1542c/1542e cert-reference discrepancy on the supplier side unresolved; kept off public pages via "by enquiry" framing.

## Recent wins (last 14 days)
- 2026-04-29 — Supplier-truth correction round: warranty terms, U-values, core terminology, brand-surface RC4 relabel across the site (`5293a62`, `ebdb860`, `5ec44ad`).
- 2026-04-29 — `/lps-1673-attack-resistant-steel-door` topic page live + cross-linked + llms files updated (`e380198`, `1e80ae8`).
- 2026-04-29 — Composite cannibalisation closed: blog merged into hub, two 308 redirects (`470bbdf`).
- 2026-04-29 — llms.txt drift fixed (177 total areas, 60 doors, 40 guides; 6 orphan refs purged) via SHA-marker gate (`87d91d6`).
- 2026-04-28/29 — Hosting infra modernisation: A `216.198.79.1`, CNAME per-project, www-redirect 307 → 308, Workspace alias domain live, ImprovMX retired (`7a035c9`).
- 2026-04-28 — Hero perf: rotation auto-stops at 60s, blur placeholders, lookbook hero `priority` (`a767d70`).
- 2026-04-28 — File upload live on both enquiry forms; GA4 phone-click + ContactForm submit attribution closed (`cc627eb`, `cb58d14`).

## Key files
- `next.config.mjs` — 308 redirects (composite-blog deletion, www → non-www). Add new redirects here, never chain.
- `src/app/lps-1673-attack-resistant-steel-door/page.tsx` — new topic page; cross-linked from 4 related pages + `/security-specification`.
- `src/app/security-specification/page.tsx` — now 3-tier (RC4 standard / RC4 + LPS 1175 by enquiry / LPS 1673 attack-resistance) + 6-cell certification strip.
- `public/llms.txt` + `public/llms-full.txt` — gated by `/panel-llms` + `/panel-llms-approve`. Run panel first; user must approve in chat before marker is written.
- `scripts/blog/backfill-llms-full.mjs` — rebuilds Blog Excerpts from `index.ts`. Run after any blog add/delete to keep counters honest.
- `scripts/blog/content-calendar.json` — currently empty; refill before next cron fire (Thu 30 Apr 20:00 UTC).
- `audit-data/em-dash-backlog-2026-04-28.md` — 1,065-instance cleanup plan.
