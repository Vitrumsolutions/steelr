"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

/**
 * QuickEnquiry — compact inline enquiry panel for SteelR area, collection,
 * blog and topic-hub pages.
 *
 * Same conceptual pattern as Vitrums' LocalQuoteCapture / HubQuoteCapture,
 * but styled for the SteelR cream/gold/ink palette and shape.
 *
 * Props give the component enough context to self-tag the submission with a
 * `source` field (e.g. `area-london`, `collection-sr3-black-stained-glass`,
 * `blog-steel-front-door-vs-composite`, `hub-security`) so lead triage is
 * easy.
 *
 * Three fields only (Name, Phone, Postcode). Further details are collected
 * on the call-back. Big click-to-call is primary CTA because bespoke steel
 * door buyers convert much better by phone than form.
 */

interface Props {
  /** Where on the site this panel lives — becomes the `source` tag in the lead email. e.g. "area-london" */
  source: string;
  /** Human label shown in the heading, e.g. "London", "Black Stained Glass Door", "Security Doors". */
  contextLabel?: string;
  /** Optional panel title override. Default: "Enquire about a bespoke SteelR door" */
  heading?: string;
}

export default function QuickEnquiry({ source, contextLabel, heading }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const title =
    heading ||
    (contextLabel
      ? `Enquire about a bespoke SteelR door for ${contextLabel}`
      : "Enquire about a bespoke SteelR door");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      postcode: (form.elements.namedItem("postcode") as HTMLInputElement).value,
      email: "",
      propertyType: "Not specified",
      doorStyle: "To be discussed",
      message: contextLabel ? `Enquiry from page about ${contextLabel}` : "",
      source,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        const params = new URLSearchParams({ source, ...(contextLabel ? { context: contextLabel } : {}) });
        router.push(`/thank-you?${params.toString()}`);
      } else {
        setErrorMsg(json.error || "Something went wrong. Please try again or call 0800 861 1450.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection or call 0800 861 1450.");
      setStatus("error");
    }
  }

  return (
    <section
      className="py-16 md:py-20 px-6"
      style={{ background: "#faf6ec" /* --surface */, borderTop: "1px solid rgba(26,26,24,0.08)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div
          className="p-8 md:p-12"
          style={{
            background: "#f5f0e8" /* --cream */,
            border: "1px solid rgba(201,169,110,0.25)" /* gold at low opacity */,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* LEFT: pitch + click-to-call */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8a6f4e" /* --warm-brown */,
                  marginBottom: 12,
                }}
              >
                Bespoke · UK manufactured · SR3
              </p>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  lineHeight: 1.2,
                  color: "#1a1a18" /* --ink */,
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h2>
              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#5a5a58",
                }}
              >
                Free consultation with our design team. No obligation. Every door is manufactured in the UK to your specification, SR3 high-security certified, and installed by our in-house fitters.
              </p>

              {/* Primary CTA: click-to-call */}
              <a
                href="tel:08008611450"
                className="inline-flex items-center gap-4 px-6 py-4 mb-6 transition-all hover:-translate-y-0.5"
                style={{
                  background: "#c9a96e" /* --gold */,
                  color: "#1a1a18",
                  textDecoration: "none",
                  minWidth: 280,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 9,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      opacity: 0.7,
                    }}
                  >
                    Call us
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 500,
                      fontSize: 18,
                      letterSpacing: "0.02em",
                      marginTop: 2,
                    }}
                  >
                    0800 861 1450
                  </div>
                </div>
              </a>

              {/* Trust row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#8a6f4e",
                  }}
                >
                  SR3 certified · PAS 24 · Secured by Design · UK manufactured · 10-year guarantee
                </span>
              </div>
            </div>

            {/* RIGHT: compact 3-field form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <p
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8a6f4e",
                  marginBottom: 4,
                }}
              >
                Or request a call-back
              </p>

              {/* Honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />

              <div>
                <label htmlFor={`qe-name-${source}`} className="sr-only">Name</label>
                <input
                  id={`qe-name-${source}`}
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#1a1a18",
                    background: "transparent",
                    border: "1px solid rgba(26,26,24,0.15)",
                    padding: "14px 16px",
                    width: "100%",
                    borderRadius: 0,
                  }}
                />
              </div>

              <div>
                <label htmlFor={`qe-phone-${source}`} className="sr-only">Phone</label>
                <input
                  id={`qe-phone-${source}`}
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  autoComplete="tel"
                  inputMode="tel"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#1a1a18",
                    background: "transparent",
                    border: "1px solid rgba(26,26,24,0.15)",
                    padding: "14px 16px",
                    width: "100%",
                    borderRadius: 0,
                  }}
                />
              </div>

              <div>
                <label htmlFor={`qe-postcode-${source}`} className="sr-only">Postcode</label>
                <input
                  id={`qe-postcode-${source}`}
                  name="postcode"
                  type="text"
                  placeholder="Postcode"
                  autoComplete="postal-code"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#1a1a18",
                    background: "transparent",
                    border: "1px solid rgba(26,26,24,0.15)",
                    padding: "14px 16px",
                    width: "100%",
                    borderRadius: 0,
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="transition-colors hover:bg-cream disabled:opacity-60"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  background: "#1a1a18" /* --ink */,
                  color: "#f5f0e8",
                  padding: "16px 32px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: 4,
                }}
              >
                {status === "sending" ? "Sending…" : "Request a free consultation"}
              </button>

              {status === "error" && (
                <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontSize: 12, color: "#b03a2e", marginTop: 4 }} role="alert">
                  {errorMsg}
                </p>
              )}

              <p
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  lineHeight: 1.6,
                  color: "#8a6f4e",
                  marginTop: 4,
                }}
              >
                No obligation. We respond within 24 hours, weekdays.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
