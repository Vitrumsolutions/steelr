import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { CredentialsStrip } from "./CredentialsBanner";
import QuickEnquiry from "./QuickEnquiry";

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

export interface InfoSection {
  pretitle?: string;
  title: string;
  body: React.ReactNode;
  /** Optional secondary paragraph rendered after body */
  body2?: React.ReactNode;
  /** Optional bulleted list of short items rendered as a gold-dotted list */
  list?: string[];
  /** Optional image for alternating two-column sections */
  image?: { src: string; alt: string; objectPosition?: string };
  /** Optional side-panel content (renders opposite the image) */
  sidePanel?: React.ReactNode;
}

export interface InfoFaq {
  question: string;
  answer: string;
}

export interface InfoRelatedLink {
  href: string;
  label: string;
  description?: string;
}

export interface InfoPageProps {
  /** H1 used in sr-only for SEO. Visible hero title can be different. */
  heroTitle: string;
  /** The sr-only H1 string */
  h1: string;
  /** First section after hero */
  intro: {
    pretitle?: string;
    title: string;
    body: React.ReactNode;
    body2?: React.ReactNode;
  };
  /** Body sections, rendered with alternating backgrounds */
  sections: InfoSection[];
  /** Optional related-links block */
  related?: {
    title: string;
    links: InfoRelatedLink[];
  };
  /** FAQ block, rendered with FAQPage JSON-LD handled by the parent page */
  faqs?: InfoFaq[];
  /** CTA heading at page foot */
  ctaHeading: string;
  /** CTA destination (default /contact) */
  ctaHref?: string;
  /** CTA button label (default "Request a Consultation") */
  ctaLabel?: string;
  /** If set, renders an inline QuickEnquiry panel just before the final CTA.
   *  Value is the source tag for lead attribution, e.g. "hub-sr3". */
  enquirySource?: string;
  /** Human-readable label shown inside the QuickEnquiry heading, e.g. "SR3 Residential Steel Doors". */
  enquiryContextLabel?: string;
}

/**
 * Reusable editorial/info page layout that matches the SteelR visual language.
 * Dark hero banner, cream intro, alternating cream/sand section backgrounds,
 * optional image columns, optional side panels, optional FAQ, credentials
 * strip and dark CTA foot. House style: no dashes, no exclamation marks,
 * no "affordable / cheap / discount" language.
 */
export default function InfoPage({
  heroTitle,
  h1,
  intro,
  sections,
  related,
  faqs,
  ctaHeading,
  ctaHref = "/contact",
  ctaLabel = "Request a Consultation",
  enquirySource,
  enquiryContextLabel,
}: InfoPageProps) {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 240, background: "#1a1a18", paddingTop: 80 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.06) 50%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16"
          style={{ height: 1, background: "rgba(201,169,110,0.3)" }}
        />
        <p
          style={{
            fontFamily: displayFont,
            fontWeight: 300,
            fontSize: "clamp(32px, 5vw, 56px)",
            color: "#f5f0e8",
            lineHeight: 1.1,
            textAlign: "center",
            paddingInline: 24,
          }}
        >
          {heroTitle}
        </p>
      </section>

      {/* sr-only H1 */}
      <h1 className="sr-only">{h1}</h1>

      {/* Intro */}
      <section className="bg-cream ribbon-bg py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            {intro.pretitle && (
              <p
                className="mb-4"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 400,
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#b8943f",
                }}
              >
                {intro.pretitle}
              </p>
            )}
            <h2
              className="mb-8"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              {intro.title}
            </h2>
            <p
              className={intro.body2 ? "mb-6" : ""}
              style={{
                fontFamily: bodyFont,
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
                textAlign: "left",
              }}
            >
              {intro.body}
            </p>
            {intro.body2 && (
              <p
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                  textAlign: "left",
                }}
              >
                {intro.body2}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, i) => {
        const bg = i % 2 === 0 ? "#ede8df" : "#f5f0e8";
        const imageRight = i % 2 === 0;
        const hasImage = Boolean(section.image);
        const hasSide = Boolean(section.sidePanel);
        const twoCol = hasImage || hasSide;

        return (
          <section
            key={i}
            className="ribbon-bg py-16 md:py-24 px-6 md:px-16"
            style={{ background: bg }}
          >
            <div
              className={
                twoCol
                  ? "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
                  : "max-w-3xl mx-auto"
              }
            >
              {/* Image column (optional) */}
              {hasImage && section.image && (
                <ScrollReveal direction={imageRight ? "right" : "left"}>
                  <div
                    className={`relative aspect-[3/4] overflow-hidden rounded-[4px] ${
                      imageRight ? "lg:order-2" : "lg:order-1"
                    }`}
                    style={{ maxHeight: 520 }}
                  >
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      quality={80}
                      className="object-cover"
                      style={{
                        objectPosition: section.image.objectPosition ?? "center 35%",
                      }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </ScrollReveal>
              )}

              {/* Text column */}
              <ScrollReveal
                direction={hasImage ? (imageRight ? "left" : "right") : "up"}
                delay={hasImage ? 0.15 : 0}
              >
                <div
                  className={
                    hasImage
                      ? imageRight
                        ? "lg:order-1"
                        : "lg:order-2"
                      : ""
                  }
                >
                  {section.pretitle && (
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 400,
                        fontSize: 9,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#b8943f",
                      }}
                    >
                      {section.pretitle}
                    </p>
                  )}
                  <h2
                    className="mb-6"
                    style={{
                      fontFamily: displayFont,
                      fontWeight: 300,
                      fontSize: "clamp(24px, 3vw, 36px)",
                      color: "#1a1a18",
                      lineHeight: 1.2,
                    }}
                  >
                    {section.title}
                  </h2>
                  <div
                    className="mb-4"
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 200,
                      fontSize: 14,
                      lineHeight: 1.9,
                      color: "#6b5a42",
                    }}
                  >
                    {section.body}
                  </div>
                  {section.body2 && (
                    <div
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 200,
                        fontSize: 14,
                        lineHeight: 1.9,
                        color: "#6b5a42",
                      }}
                    >
                      {section.body2}
                    </div>
                  )}
                  {section.list && section.list.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-3">
                      {section.list.map((item, li) => (
                        <li key={li} className="flex items-start gap-3">
                          <span
                            className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[8px]"
                            style={{ background: "#c9a96e" }}
                          />
                          <span
                            style={{
                              fontFamily: bodyFont,
                              fontWeight: 300,
                              fontSize: 14,
                              color: "#1a1a18",
                              lineHeight: 1.7,
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.sidePanel && (
                    <div className="mt-6">{section.sidePanel}</div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* Related links block (optional) */}
      {related && related.links.length > 0 && (
        <section
          className="ribbon-bg py-16 md:py-24 px-6 md:px-16"
          style={{ background: "#1a1a18" }}
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p
                className="mb-4 text-center"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 400,
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                }}
              >
                Continue Reading
              </p>
              <h2
                className="mb-12 text-center"
                style={{
                  fontFamily: displayFont,
                  fontWeight: 300,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#f5f0e8",
                  lineHeight: 1.2,
                }}
              >
                {related.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.links.map((link) => (
                <ScrollReveal key={link.href}>
                  <Link
                    href={link.href}
                    className="block p-6 transition-colors duration-300 hover:bg-[rgba(201,169,110,0.06)]"
                    style={{
                      border: "1px solid rgba(201,169,110,0.15)",
                      borderRadius: 4,
                      height: "100%",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: displayFont,
                        fontWeight: 300,
                        fontSize: 18,
                        color: "#f5f0e8",
                        lineHeight: 1.3,
                        marginBottom: link.description ? 8 : 0,
                      }}
                    >
                      {link.label}
                    </p>
                    {link.description && (
                      <p
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 200,
                          fontSize: 12,
                          color: "rgba(245,240,232,0.55)",
                          lineHeight: 1.6,
                        }}
                      >
                        {link.description}
                      </p>
                    )}
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="bg-cream ribbon-bg py-20 md:py-28 px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p
                className="mb-4 text-center"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 400,
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#b8943f",
                }}
              >
                Common Questions
              </p>
              <h2
                className="mb-12 text-center"
                style={{
                  fontFamily: displayFont,
                  fontWeight: 300,
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                  color: "#1a1a18",
                  lineHeight: 1.2,
                }}
              >
                Frequently asked questions
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.question} delay={i * 0.06}>
                  <div
                    className="pb-8"
                    style={{
                      borderBottom: "1px solid rgba(201,169,110,0.15)",
                    }}
                  >
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 400,
                        fontSize: 15,
                        color: "#1a1a18",
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 200,
                        fontSize: 13,
                        lineHeight: 1.85,
                        color: "#6b5a42",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Credentials strip */}
      <CredentialsStrip />

      {/* Inline enquiry panel (rendered if enquirySource is provided by the page) */}
      {enquirySource && (
        <QuickEnquiry source={enquirySource} contextLabel={enquiryContextLabel} />
      )}

      {/* CTA */}
      <section className="bg-site-black py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-10"
            style={{
              fontFamily: displayFont,
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#f5f0e8",
            }}
          >
            {ctaHeading}
          </h2>
          <ScrollReveal>
            <Link
              href={ctaHref}
              className="btn-cta inline-block transition-colors duration-300 hover:bg-cream"
              style={{
                background: "#c9a96e",
                color: "#1a1a18",
                fontFamily: bodyFont,
                fontWeight: 400,
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "16px 40px",
              }}
            >
              {ctaLabel}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
