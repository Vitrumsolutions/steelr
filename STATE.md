# SteelR — STATE

## Where I left off
Session of 2026-04-27 → 2026-04-28 closed two GA4 attribution gaps surfaced by an audit. Shipped commit `cb58d14` ("GA4 tracking: capture phone clicks + tag full ContactForm submissions") — adds a site-wide `TelClickTracker` and redirects `/contact` form submissions to `/thank-you?source=contact-page` so `generate_lead` actually fires. A parallel session then shipped `cc627eb` (file upload on both enquiry forms + optional selects), prompted by SteelR's first website lead asking about an attached file. Vitrums received the same tracking parity at commit `5d3b098`. Audit findings: 0/20 customer-language Google rankings (Latham's, Domadeco, Modern-Doors dominate), 2 named AI citations on category-authority queries, GA4 28-day window had 36 sessions / 91.67% Direct / 0 key events fired.

## Next action
- Off-page domain authority / backlink work — confirmed bottleneck from the customer-language audit. Highest-leverage open task.
- Wait for next inbound lead and verify `generate_lead` fires correctly in GA4 with `source` tag (validates the `cb58d14` fix end-to-end).
- Clear the small queued-jobs backlog: customer-language keyword set into `audit-data/rank-tracker.py`, `datetime.utcnow()` deprecation, soft Nav.tsx focus trap.

## Blockers
- 0 GMB reviews still the Maps 3-pack blocker — user-managed, do not re-suggest.
- Bing post-migration indexing lag continues; recovery expected mid-late May 2026.
- Domain authority is the structural ceiling on Google organic; no on-page fix will close it.

## Recent wins (last 14 days)
- 2026-04-28 — GA4 attribution gaps closed: `TelClickTracker` site-wide + `/contact` redirect to `/thank-you` (commit `cb58d14`). Vitrums parity at `5d3b098`.
- 2026-04-28 — File upload added to both enquiry forms after first website lead asked about attachments (commit `cc627eb`).
- 2026-04-27 — Customer-language Google + AI search audits run; AI engines confirmed strongest channel (2 named citations on category-authority queries).
- 2026-04-27 — Em-dash / en-dash detection added to brand-guard (commit `6d28d5c`).
- 2026-04-27 — Rank-tracker Windows Unicode crash + same-day re-run comparison fixed (commit `edbe2ec`).
- 2026-04-27 — Mobile menu a11y polish: Esc-to-close, dialog semantics, focus management (commits `b523c62`, `4fd5612`).

## Key files
- `src/components/TelClickTracker.tsx` — document-level click listener firing GA4 `phone_click` for any `a[href^=tel:]`. Mounted once in `layout.tsx`.
- `src/components/ContactForm.tsx` — full enquiry form; now redirects to `/thank-you?source=contact-page` and tags POST body with `source`.
- `src/components/FileUpload.tsx` — new attachment widget, used by ContactForm + QuickEnquiry.
- `src/app/thank-you/ThankYouTracking.tsx` — fires GA4 `generate_lead`; the endpoint every conversion now lands on.
- `audit-data/visibility-audit.py` + `audit-data/rank-tracker.py` — visibility + rank tooling. `datetime.utcnow()` deprecation still pending.
- `public/llms.txt` + `public/llms-full.txt` — gated by `/panel-llms` + `/panel-llms-approve`; do not edit without running the panel first.
