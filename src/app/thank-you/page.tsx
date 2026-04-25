import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";
import ThankYouTracking from "./ThankYouTracking";

export const metadata: Metadata = {
  title: "Thank You — We'll Be In Touch | SteelR",
  description:
    "Your enquiry has been received. Our design team will be in touch within 24 hours to discuss your bespoke SteelR entrance door.",
  alternates: { canonical: "https://steelr.co.uk/thank-you" },
  robots: { index: false, follow: true },
};

/**
 * /thank-you
 *
 * Landing page after QuickEnquiry or ContactForm submission.
 *  1. Confirms submission so visitor knows enquiry went through
 *  2. Sets expectation of next steps
 *  3. Fires GA4 `generate_lead` conversion event via ThankYouTracking
 *     (gracefully no-ops if gtag not installed — SteelR has no analytics
 *     yet per CLAUDE.md, but the page is ready to attribute immediately
 *     once it is)
 *  4. Keeps visitor engaged with next-read links while they wait
 *
 * noindex (submission-only page, nothing for Google to rank).
 */

const nextSteps = [
  {
    title: "We'll call you within 24 hours",
    desc: "A member of our design team will call on the number you provided to discuss your project, answer questions and arrange a convenient time for a survey if you'd like to proceed.",
  },
  {
    title: "We discuss design",
    desc: "Every SteelR door is bespoke. We'll talk you through the collection, panel designs, glazing options, hardware finishes and RAL colours — no pressure, no upsell.",
  },
  {
    title: "We provide a full written quote",
    desc: "Within a few working days of the conversation. Every line itemised — door, frame, glazing, hardware, installation — so you can compare like-for-like with other suppliers.",
  },
  {
    title: "You take your time",
    desc: "No deposit until you're sure. No same-day pressure tactics. When you're ready, we confirm lead times and book manufacturing and installation slots.",
  },
];

const recommendedReads = [
  {
    href: "/steel-front-door-vs-composite",
    title: "Steel vs composite doors — the honest comparison",
  },
  {
    href: "/steel-front-door-cost-uk",
    title: "How much does a SteelR door cost?",
  },
  {
    href: "/security-specification",
    title: "Security specification: SR3, PAS 24, Secured by Design",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Script
        id="breadcrumb-thank-you"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
              { "@type": "ListItem", position: 2, name: "Thank You", item: "https://steelr.co.uk/thank-you" },
            ],
          }),
        }}
      />

      {/* useSearchParams() in ThankYouTracking requires a Suspense boundary for static export */}
      <Suspense fallback={null}>
        <ThankYouTracking />
      </Suspense>

      <section
        className="pt-24 md:pt-32 pb-20 md:pb-28 px-6"
        style={{ background: "#faf6ec" /* --surface */ }}
      >
        <div className="max-w-[800px] mx-auto">
          {/* Breadcrumb */}
          <nav
            className="mb-10"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8a6f4e",
            }}
          >
            <Link href="/" style={{ color: "#c9a96e", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 12px", opacity: 0.4 }}>/</span>
            <span>Thank You</span>
          </nav>

          {/* Confirmation header */}
          <div className="mb-12">
            <div
              className="inline-flex items-center justify-center mb-8"
              style={{
                width: 56,
                height: 56,
                background: "#c9a96e" /* --gold */,
                color: "#1a1a18",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: "clamp(32px, 6vw, 48px)",
                lineHeight: 1.1,
                color: "#1a1a18",
                letterSpacing: "-0.02em",
              }}
            >
              Thank you. We&apos;ve got your enquiry.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.8,
                color: "#5a5a58",
                maxWidth: 560,
              }}
            >
              Our design team will be in touch within 24 hours to discuss your SteelR project. In the meantime, you can also reach us directly on{" "}
              <a href="tel:08008611450" style={{ color: "#c9a96e", textDecoration: "none", fontWeight: 500 }}>0800 861 1450</a>{" "}
              or email{" "}
              <a href="mailto:info@steelr.co.uk" style={{ color: "#c9a96e", textDecoration: "none", fontWeight: 500 }}>info@steelr.co.uk</a>.
            </p>
          </div>

          {/* What happens next */}
          <div className="mb-14">
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 22,
                color: "#1a1a18",
                letterSpacing: "0.02em",
              }}
            >
              What happens next
            </h2>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {nextSteps.map((s, i) => (
                <li
                  key={s.title}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: 24,
                    background: "#f5f0e8" /* --cream */,
                    border: "1px solid rgba(201,169,110,0.2)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      background: "#c9a96e",
                      color: "#1a1a18",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 500,
                      fontSize: 13,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 500,
                        fontSize: 15,
                        color: "#1a1a18",
                        marginBottom: 6,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 300,
                        fontSize: 14,
                        lineHeight: 1.75,
                        color: "#5a5a58",
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* While you wait */}
          <div className="mb-14">
            <h2
              className="mb-3"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 22,
                color: "#1a1a18",
                letterSpacing: "0.02em",
              }}
            >
              While you wait
            </h2>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.8,
                color: "#8a6f4e",
              }}
            >
              A few articles worth reading ahead of the design conversation.
            </p>
            <div style={{ display: "grid", gap: 12 }}>
              {recommendedReads.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  style={{
                    display: "block",
                    padding: 20,
                    background: "#f5f0e8",
                    border: "1px solid rgba(201,169,110,0.2)",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 15,
                      color: "#1a1a18",
                    }}
                  >
                    {r.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Already a customer? Leave us a review */}
          <div
            className="mb-10"
            style={{
              padding: 28,
              background: "linear-gradient(135deg, #f5f0e8 0%, #ede4d3 100%)",
              border: "1px solid rgba(201,169,110,0.4)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a6f4e",
                marginBottom: 12,
              }}
            >
              Already had a SteelR door installed?
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 22,
                color: "#1a1a18",
                letterSpacing: "0.02em",
              }}
            >
              We&apos;d be grateful for a Google review
            </h2>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 14,
                lineHeight: 1.8,
                color: "#5a5a58",
              }}
            >
              Reviews are how new clients find us. A few sentences on Google make a real difference to a UK manufacturer of this scale.
            </p>
            <a
              href="https://www.google.com/maps/place/SteelR+Bespoke+Steel+Entrance+Doors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "#c9a96e",
                color: "#1a1a18",
                textDecoration: "none",
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Leave a Google Review
            </a>
          </div>

          {/* Trust footer */}
          <div
            style={{
              padding: 20,
              background: "#f5f0e8",
              border: "1px solid rgba(201,169,110,0.2)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8a6f4e",
                lineHeight: 1.8,
              }}
            >
              SR3 certified · PAS 24 · Secured by Design · UK manufactured · 10-year guarantee
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
