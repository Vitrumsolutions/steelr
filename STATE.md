# SteelR — STATE

## Where I left off
Crossed midnight UTC during a long 2026-04-28 session. Two parallel tracks shipped: a perf commit on `main`, and a non-code email/DNS migration that is the session's headline.

- **Email infrastructure migrated from ImprovMX to native Google Workspace.** `steelr.co.uk` is now a User Alias Domain attached to the existing Supply Windows Workspace, so `info@steelr.co.uk` is a real Workspace identity (not a forwarder) automatically owned by Mani's `info@supplywindows.co.uk` user. At Fasthosts: ImprovMX MX records removed (`mx1.improvmx.com` p10, `mx2.improvmx.com` p20), Workspace MX `smtp.google.com` p1 added at apex, Resend bounce path `feedback-smtp.eu-west-1.amazonses.com` p10 on host `send` preserved. SPF rewritten `v=spf1 include:_spf.google.com include:send.resend.com ~all` (dropped obsolete `spf.improvmx.com`). Workspace verification via TXT `google-site-verification=3OqK8eU3-aH3N55LO5iJqgoiCoudWqKRgLZCBAQmZR8` + CNAME `3xz25apru7go` → `gv-pkhhlzvnm6j6rf.dv.googlehosted.com`. Pre-existing GSC TXT `IgU2k7Tl...` preserved. DNS verified globally via 8.8.8.8 + 1.1.1.1.
- **Transactional flow re-tested post-swap:** POST `https://steelr.co.uk/api/contact` returned `{"success":true}` HTTP 200, lead notification accepted by Resend and routed via Workspace to the supplywindows mailbox.
- **`a767d70` — Hero perf.** Stop hero rotation after 60s, add blur placeholders, set `priority` on the lookbook page hero. Touches `Hero.tsx` + lookbook `page.tsx`.
- **Letterhead generator (uncommitted).** Local `scripts/generate-letterhead.mjs` plus two PNG logo assets produced `C:\Users\SOT\Documents\SteelR-Letterhead-v3.docx` (logo darkened to pure black, footer reduced to user's 5 items). Open in Word as of session end. Not staged — leave for human partner.

## Next action
- **Confirm email cutover landed clean.** (1) Check the test email sent during this session arrived at `info@supplywindows.co.uk`. (2) Mani logs into Gmail and confirms `info@steelr.co.uk` appears in the From dropdown when composing — if it does not, manual add via Settings → Accounts and Import → "Send mail as" → enter `info@steelr.co.uk` (Workspace recognises the owned alias, no SMTP needed). (3) Watch the 2026-04-29 07:30 `SteelrGSCIndexer` Windows Task Scheduler run — if it 401s, GSC verification needs re-doing despite the preserved TXT.
- **Off-page domain authority / backlink work.** 27 Apr customer-language audit returned 0/20 SteelR rankings on steel-specific buyer queries (Latham's, Domadeco, Modern-Doors took 47/60 top-3 slots). Domain authority is the structural ceiling, not on-page SEO. Highest-leverage open task.
- **Em-dash backlog.** 1,065 instances across 43 files (`audit-data/em-dash-backlog-2026-04-28.md`). Phased cleanup: top-3 blog posts first (160 dashes / 14% of backlog), then remaining 34 posts, then non-blog surfaces. Context-aware decisions, do not mass-replace.
- **Cosmetic Resend cleanup (deferred).** Update `/api/contact` and `/api/quote` to send TO `info@steelr.co.uk` instead of `info@supplywindows.co.uk`. Same Gmail mailbox post-alias-domain, but cleaner To: header. Two-line edit.
- **Optional DMARC tightening (not urgent).** Current `_dmarc` is `p=none`; could move to `p=quarantine` after a couple weeks of clean Workspace operation.
- Small queued: customer-language keyword set into `audit-data/rank-tracker.py`, `datetime.utcnow()` deprecation, soft Nav.tsx focus trap.

## Blockers
- 0 GMB reviews still the Maps 3-pack blocker — user-managed, do not re-suggest.
- Bing post-migration indexing lag continues; recovery expected mid-late May 2026.
- Domain authority is the structural ceiling on Google organic; no on-page fix will close it.

## Recent wins (last 14 days)
- 2026-04-28 — Workspace alias domain live for `steelr.co.uk`; ImprovMX retired; SPF rewritten; transactional `/api/contact` re-verified post-swap.
- 2026-04-28 — Hero perf: rotation auto-stops at 60s + blur placeholders + lookbook hero `priority` (`a767d70`).
- 2026-04-28 — File upload live on both enquiry forms (`cc627eb`); selects optional, required = name + phone.
- 2026-04-28 — GA4 attribution gaps closed: site-wide `TelClickTracker` + `/contact` redirects to `/thank-you` (`cb58d14`).
- 2026-04-28 — Em-dash / en-dash detection added to brand-guard (`6d28d5c`); skips modified files so the 1,065-instance backlog doesn't surprise-fail edits.
- 2026-04-27 — Customer-language Google + AI search audits run; AI engines confirmed strongest channel (2 named citations on category-authority queries).

## Key files
- `scripts/generate-letterhead.mjs` (uncommitted) — generator for `C:\Users\SOT\Documents\SteelR-Letterhead-v3.docx`. Don't commit unless asked.
- `src/components/Hero.tsx` + `src/app/lookbook/page.tsx` — hero rotation cap + blur placeholders + lookbook `priority` (`a767d70`).
- `src/components/FileUpload.tsx` — drag-drop attachment widget shared by both enquiry forms.
- `src/components/ContactForm.tsx` + `QuickEnquiry.tsx` — FormData body, optional selects, redirect to `/thank-you?source=...`.
- `src/components/TelClickTracker.tsx` — document-level `a[href^=tel:]` listener firing GA4 `phone_click`. Mounted once in `layout.tsx`.
- `src/app/api/contact/route.ts` — multipart-aware Resend handler with allowlist + filename sanitisation + CRLF strip + HTML escape.
- `src/app/thank-you/ThankYouTracking.tsx` — fires GA4 `generate_lead`; the endpoint every conversion now lands on.
- `audit-data/em-dash-backlog-2026-04-28.md` — 1,065-instance cleanup plan.
- `public/llms.txt` + `public/llms-full.txt` — gated by `/panel-llms` + `/panel-llms-approve`; do not edit without running the panel first.
