import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title:
    "Steel Door Security Ratings | SR3, PAS 24, BS EN 1627, Secured by Design | SteelR",
  description:
    "Bespoke security doors tested to BS EN 1627 Class 3 (SR3), PAS 24 certified and Secured by Design approved. Approved Document Q compliant steel entrance doors for new builds, flats and high-value homes across the UK.",
  alternates: { canonical: "https://steelr.co.uk/security" },
  openGraph: {
    title:
      "Steel Door Security Ratings | SR3, PAS 24, BS EN 1627 | SteelR",
    description:
      "Bespoke security doors tested to BS EN 1627 (SR3), PAS 24 certified and Secured by Design approved. Approved Document Q compliant for new builds and flats.",
    url: "https://steelr.co.uk/security",
    siteName: "SteelR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 2400,
        height: 1260,
        alt: "SteelR — Steel Door Security Ratings | SR3, PAS 24, Secured by Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Steel Door Security Ratings | SR3, PAS 24, BS EN 1627 | SteelR",
    description:
      "Bespoke security doors tested to BS EN 1627 (SR3), PAS 24 certified and Secured by Design approved. Approved Document Q compliant for new builds and flats.",
  },
};

const faqs = [
  {
    question: "What is an SR3 security rating?",
    answer:
      "SR3 (Security Rating 3) is a classification under BS EN 1627:2011 that certifies a door can withstand a sustained attack by an experienced burglar using heavy-duty tools such as crowbars, drills and chisels for up to 20 minutes. It far exceeds the security level of standard residential doors and is the highest rating practically achievable for domestic entrance doors. All SteelR doors are engineered to SR3 as standard.",
  },
  {
    question: "Is PAS 24 enough for home security?",
    answer:
      "PAS 24:2022 is the minimum security standard required by UK Building Regulations (Approved Document Q) for new-build residential doors. While it provides a baseline level of protection against opportunistic attack, it is significantly less rigorous than SR3. PAS 24 testing simulates a casual attack lasting around 1\u20133 minutes, whereas SR3 testing subjects the door to a sustained 20-minute assault with heavy tools. For homeowners seeking genuine peace of mind, SR3 offers substantially greater protection.",
  },
  {
    question: "What does Secured by Design mean?",
    answer:
      "Secured by Design (SBD) is the official UK police security initiative that sets standards for crime prevention in the built environment. Products carrying the SBD accreditation have been independently tested and certified to meet police-preferred security specifications. SteelR doors hold Secured by Design approval, meaning they have been vetted by the police-backed scheme as offering a high level of resistance to forced entry.",
  },
  {
    question: "Are steel doors fire rated?",
    answer:
      "Yes. Steel doors can achieve fire ratings of up to 60 minutes (FD60), meaning they will maintain their structural integrity and prevent the passage of fire and smoke for that duration. SteelR doors are constructed from heavy-gauge galvanised steel with fire-resistant cores, providing both security and fire protection in a single door system. Specific fire rating requirements can be discussed during your consultation.",
  },
];

const srRatings = [
  {
    level: "SR1",
    label: "Basic Resistance",
    description:
      "Resists opportunistic attack with bodily force alone. Typical of standard uPVC doors and lightweight frames. Offers minimal protection against a determined intruder.",
    highlight: false,
  },
  {
    level: "SR2",
    label: "Casual Burglar",
    description:
      "Withstands attack with simple hand tools such as screwdrivers, pliers and wedges for up to 3 minutes. Some higher-quality timber and composite doors achieve this rating.",
    highlight: false,
  },
  {
    level: "SR3",
    label: "Experienced Burglar \u2014 Heavy Tools",
    description:
      "Withstands a sustained 20-minute attack using crowbars, drills, chisels and heavy-duty cutting tools. This is the SteelR standard \u2014 the highest security rating practically achievable for residential entrance doors.",
    highlight: true,
  },
  {
    level: "SR4\u2013SR6",
    label: "Commercial & Government",
    description:
      "Ratings reserved for high-security commercial premises, embassies, military installations and critical infrastructure. These require specialist construction beyond the scope of residential doors.",
    highlight: false,
  },
];

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

export default function SecurityPage() {
  return (
    <>
      {/* Schema: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://steelr.co.uk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Security & Certifications",
                item: "https://steelr.co.uk/security",
              },
            ],
          }),
        }}
      />

      {/* Schema: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

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
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#f5f0e8",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Security &amp; Certifications
        </p>
      </section>

      {/* sr-only H1 */}
      <h1 className="sr-only">
        Steel Door Security Ratings — SR3, PAS 24 &amp; Secured by Design
      </h1>

      {/* Intro */}
      <section className="bg-cream ribbon-bg py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
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
              Certified Protection
            </p>
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
              Among the most secure residential entrance doors available in the
              United Kingdom
            </h2>
            <p
              style={{
                fontFamily: bodyFont,
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              Every SteelR door is independently tested and certified to the
              highest security standards achievable for a residential entrance.
              Our doors carry SR3 security ratings, Secured by Design police
              approval and ISO 9001 manufacturing certification as standard
              &mdash; not as optional extras. For homeowners across{" "}
              <Link
                href="/areas/london"
                className="link-gold-underline"
                style={{ color: "#1a1a18" }}
              >
                London
              </Link>
              ,{" "}
              <Link
                href="/areas/virginia-water"
                className="link-gold-underline"
                style={{ color: "#1a1a18" }}
              >
                Virginia Water
              </Link>{" "}
              and beyond, this means genuine peace of mind.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Security Ratings Explained */}
      <section className="bg-cream ribbon-bg pb-24 md:pb-40 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
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
              BS EN 1627:2011
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              Security ratings explained
            </h2>
            <p
              className="mb-14"
              style={{
                fontFamily: bodyFont,
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
                maxWidth: 640,
              }}
            >
              BS EN 1627:2011 is the European standard for testing the burglar
              resistance of doors, windows and curtain walling. It classifies
              products from SR1 (minimal resistance) to SR6 (government-level
              security) based on the tools used, the duration of attack and the
              skill level of the simulated intruder.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {srRatings.map((rating, i) => (
              <ScrollReveal key={rating.level} delay={i * 0.1}>
                <div
                  className="p-8 rounded-[4px] h-full"
                  style={{
                    background: rating.highlight
                      ? "rgba(201,169,110,0.08)"
                      : "rgba(26,26,24,0.02)",
                    border: rating.highlight
                      ? "1px solid rgba(201,169,110,0.3)"
                      : "1px solid rgba(26,26,24,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-[2px]"
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 400,
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        color: rating.highlight ? "#1a1a18" : "#6b5a42",
                        background: rating.highlight
                          ? "#c9a96e"
                          : "rgba(26,26,24,0.05)",
                      }}
                    >
                      {rating.level}
                    </span>
                    <span
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 300,
                        fontSize: 13,
                        color: "#1a1a18",
                      }}
                    >
                      {rating.label}
                    </span>
                    {rating.highlight && (
                      <span
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 400,
                          fontSize: 9,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#c9a96e",
                        }}
                      >
                        SteelR Standard
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 200,
                      fontSize: 13,
                      lineHeight: 1.8,
                      color: "#6b5a42",
                    }}
                  >
                    {rating.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAS 24 vs SR3 */}
      <section className="bg-cream ribbon-bg pb-24 md:pb-40 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <ScrollReveal direction="left">
            <div>
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
                Standards Compared
              </p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: displayFont,
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#1a1a18",
                  lineHeight: 1.1,
                }}
              >
                PAS 24 vs SR3
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                PAS 24:2022 is the minimum security standard required under UK
                Building Regulations (Approved Document Q) for new residential
                doors. It tests resistance to a casual opportunistic attack
                lasting around 1&ndash;3 minutes using basic hand tools.
              </p>
              <p
                className="mb-6"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                SR3, by contrast, tests resistance to a sustained 20-minute
                attack by an experienced intruder using crowbars, drills and
                heavy cutting equipment. The difference is not incremental
                &mdash; it is a fundamentally higher tier of protection.
              </p>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                Every{" "}
                <Link
                  href="/collection"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SteelR door
                </Link>{" "}
                exceeds PAS 24 by a significant margin. We engineer to SR3 as
                standard because we believe the minimum regulatory requirement
                is not sufficient for a premium residential entrance.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-4 justify-center">
              {[
                "1\u20133 min casual attack resistance",
                "Basic hand tools only",
                "Minimum Building Regulations requirement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[7px]"
                    style={{ background: "rgba(26,26,24,0.2)" }}
                  />
                  <span
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 300,
                      fontSize: 13,
                      color: "#6b5a42",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}

              <div
                className="my-4"
                style={{ height: 1, background: "rgba(201,169,110,0.2)" }}
              />

              {[
                "20 min sustained attack resistance",
                "Crowbars, drills, chisels & heavy tools",
                "Highest achievable residential rating",
                "SteelR standard on every door",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[7px]"
                    style={{ background: "#c9a96e" }}
                  />
                  <span
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 300,
                      fontSize: 13,
                      color: "#1a1a18",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Secured by Design */}
      <section className="bg-cream ribbon-bg pb-24 md:pb-40 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <ScrollReveal direction="left">
            <div>
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
                Police Approved
              </p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: displayFont,
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#1a1a18",
                  lineHeight: 1.1,
                }}
              >
                Secured by Design
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                Secured by Design (SBD) is the official police security
                initiative owned by Police Crime Prevention Initiatives Ltd. It
                sets a nationally recognised benchmark for crime prevention in
                buildings and their surroundings.
              </p>
              <p
                className="mb-6"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                Products carrying the SBD mark have been independently tested
                and approved by a police-backed scheme. For homeowners, this
                provides an objective, third-party assurance that their entrance
                door meets or exceeds the security standards recommended by UK
                police forces.
              </p>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                SteelR doors hold full Secured by Design accreditation. This
                approval covers the complete door system &mdash; frame, leaf,
                locking mechanism and hardware &mdash; not just individual
                components.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-4 justify-center">
              {[
                "Official UK police security initiative",
                "Independent third-party testing",
                "Covers complete door system",
                "Recognised by insurers nationwide",
                "Required for many new-build developments",
                "SteelR doors fully accredited",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                    style={{ background: "#c9a96e" }}
                  />
                  <span
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 300,
                      fontSize: 14,
                      color: "#1a1a18",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fire Rating & ISO 9001 */}
      <section className="bg-cream ribbon-bg pb-24 md:pb-40 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal delay={0}>
            <div>
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
                Fire Protection
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: displayFont,
                  fontWeight: 300,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1a1a18",
                  lineHeight: 1.1,
                }}
              >
                Fire rated steel construction
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                SteelR doors are constructed from heavy-gauge galvanised steel
                with fire-resistant insulating cores, capable of achieving fire
                ratings up to FD60 &mdash; maintaining structural integrity and
                preventing the passage of fire and smoke for up to 60 minutes.
              </p>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                Unlike timber or composite doors, steel does not warp, crack or
                delaminate under extreme heat. This inherent material advantage
                means a SteelR door provides both security and fire protection
                in a single, engineered system.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div>
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
                Manufacturing Quality
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: displayFont,
                  fontWeight: 300,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1a1a18",
                  lineHeight: 1.1,
                }}
              >
                ISO 9001 certified
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                ISO 9001 is the internationally recognised standard for quality
                management systems. It requires documented processes, consistent
                quality control and continuous improvement across every stage of
                manufacturing.
              </p>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                SteelR doors are manufactured in ISO 9001 certified facilities,
                ensuring that every door &mdash; from raw steel through to
                finished product &mdash; meets the same exacting standard. This
                certification provides assurance that quality is built into the{" "}
                <Link
                  href="/process"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  manufacturing process
                </Link>
                , not inspected in afterwards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual section — 3 detail images */}
      <section className="bg-cream pb-4 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-wrap md:flex-nowrap gap-3 overflow-hidden">
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[380px]">
            <Image
              src="/images/detail/steelr-grey-panelled-chrome-multilock.jpg"
              alt="Multi-point chrome locking mechanism on a steel entrance door"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center top" }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[380px]">
            <Image
              src="/images/detail/steelr-grey-panelled-brass-handle-closeup.jpeg"
              alt="Precision brass lever handle on a grey steel door"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center center" }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[380px]">
            <Image
              src="/images/detail/steelr-navy-panelled-chrome-ring-closeup.jpg"
              alt="Chrome ring knocker detail on a navy steel entrance door"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center top" }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-cream ribbon-bg py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
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
              Common Questions
            </p>
            <h2
              className="mb-14"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              Frequently asked questions
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-10">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 0.08}>
                <div
                  className="pb-10"
                  style={{
                    borderBottom: "1px solid rgba(201,169,110,0.15)",
                  }}
                >
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 400,
                      fontSize: 16,
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
                      lineHeight: 1.8,
                      color: "#6b5a42",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-14 text-center">
              <Link
                href="/collection"
                className="link-gold-underline"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#1a1a18",
                  letterSpacing: "0.05em",
                }}
              >
                Browse our door collection &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-site-black py-16 md:py-24 px-6 md:px-16 mt-0">
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
            Discuss your security requirements
          </h2>
          <ScrollReveal>
            <Link
              href="/contact"
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
              Request a Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
