# SteelR — STATE

## Where I left off
Two commits to `origin/main` on 2026-04-28 closed the lead-capture and attribution gaps surfaced by yesterday's audit (28-day GA4 window had 36 sessions / 91.67% Direct / 0 key events fired).

- **`cc627eb` — file upload on both enquiry forms + selects made optional.** New `src/components/FileUpload.tsx` (drag-drop + click-to-pick, cream/gold/ink palette, sharp corners). Wired into `ContactForm.tsx` and `QuickEnquiry.tsx`. Both forms switched body from `JSON.stringify` → `FormData`. Constraints mirror Vitrums: max 3 files, 4MB total, JPEG/PNG/WebP/PDF, client-compress images >800KB to 1920px JPEG q=0.85, iOS HEIC auto-convert via `accept="image/jpeg"`. All previously-required selects (propertyType, doorStyle, email, message) now optional — required = name + phone only. First option in each select is "Skip — I'll explain when you call". Triggered by SteelR's first website lead asking about an attached file.
- **`cb58d14` — GA4: phone-click tracking + tag full ContactForm submissions.** New `TelClickTracker.tsx` mounted once in `layout.tsx` listens at document level for any `a[href^="tel:"]` click and fires GA4 `phone_click`. ContactForm now redirects to `/thank-you?source=contact-page` on submit success so `ThankYouTracking` fires `generate_lead`. ContactForm now also passes `source: "contact-page"` so the lead email subject reads `New Enquiry [contact-page] - SteelR`.

`/api/contact/route.ts` rewritten in `cc627eb` to handle multipart: detects Content-Type and branches multipart vs JSON (JSON path stays for backwards compat). Each accepted file → base64 → Resend `attachments[]` → `info@supplywindows.co.uk`. Filename stripped of path separators + capped at 100 chars (CWE-73). CRLF stripped from `source` before it lands in the email Subject (CWE-93). Pre-existing bug fixed in same pass — added `escapeHtml()` to all user-controlled interpolations in the email HTML template. Brand-guard pre-commit hook ran and passed against both diffs. Build PASS (Next 14, all pages prerendered).

Vercel Hobby plan body limit is 4.5MB → drives the 4MB upload cap. Pro plan would raise to 10MB.

## Next action
- User to test both enquiry forms on live site once Vercel finishes deploying (~90s from `cc627eb` push). Verify (1) file picker accepts JPEG/PNG/PDF and rejects HEIC/larger files, (2) email arrives at `info@supplywindows.co.uk` with attachments, (3) GA4 realtime shows `generate_lead` after a /contact submit and `phone_click` after any tel-link tap.
- Off-page domain authority / backlink work — confirmed bottleneck from the 27 Apr customer-language audit (0/20 customer-language Google rankings; Latham's, Domadeco, Modern-Doors dominate). Highest-leverage open task.
- Em-dash backlog still open — 1,065 instances across 43 files (`audit-data/em-dash-backlog-2026-04-28.md`). Phased cleanup: top-3 blog posts first (160 dashes / 14% of backlog), then remaining 34 posts, then non-blog surfaces. Context-aware decisions, do not mass-replace.
- Small queued-jobs: customer-language keyword set into `audit-data/rank-tracker.py`, `datetime.utcnow()` deprecation, soft Nav.tsx focus trap.

## Blockers
- 0 GMB reviews still the Maps 3-pack blocker — user-managed, do not re-suggest.
- Bing post-migration indexing lag continues; recovery expected mid-late May 2026.
- Domain authority is the structural ceiling on Google organic; no on-page fix will close it.

## Recent wins (last 14 days)
- 2026-04-28 — File upload live on both enquiry forms (`cc627eb`). Bare-minimum lead is now name + phone with optional photo attachments.
- 2026-04-28 — GA4 attribution gaps closed: `TelClickTracker` site-wide + `/contact` redirect to `/thank-you` (`cb58d14`). Vitrums parity at `5d3b098`.
- 2026-04-28 — Em-dash / en-dash detection added to brand-guard (`6d28d5c`); skips modified files so 1,065-instance backlog doesn't surprise-fail edits.
- 2026-04-27 — Customer-language Google + AI search audits run; AI engines confirmed strongest channel (2 named citations on category-authority queries).
- 2026-04-27 — Rank-tracker Windows Unicode crash + same-day re-run comparison fixed (`edbe2ec`).
- 2026-04-27 — Mobile menu a11y polish: Esc-to-close, dialog semantics, focus management (`b523c62`, `4fd5612`).

## Key files
- `src/components/FileUpload.tsx` — new attachment widget (drag-drop + click-to-pick + image compression). Used by ContactForm + QuickEnquiry.
- `src/components/ContactForm.tsx` — full enquiry form; FormData body, optional selects, redirects to `/thank-you?source=contact-page`.
- `src/components/QuickEnquiry.tsx` — compact inline form on area / collection / blog / topic-hub pages; FormData body + FileUpload before submit.
- `src/components/TelClickTracker.tsx` — document-level click listener firing GA4 `phone_click` for any `a[href^=tel:]`. Mounted once in `layout.tsx`.
- `src/app/api/contact/route.ts` — multipart-aware Resend handler. Allowlist + filename sanitisation + CRLF strip + HTML escape.
- `src/app/thank-you/ThankYouTracking.tsx` — fires GA4 `generate_lead`; the endpoint every conversion now lands on.
- `audit-data/em-dash-backlog-2026-04-28.md` — 1,065-instance cleanup plan, top-3 posts hold 14% of the count.
- `public/llms.txt` + `public/llms-full.txt` — gated by `/panel-llms` + `/panel-llms-approve`; do not edit without running the panel first.
