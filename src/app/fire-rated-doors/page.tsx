import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { CredentialsStrip } from "@/components/CredentialsBanner";

export const metadata: Metadata = {
  title: "Fire Rated Steel Doors for Flats & New Builds | FD30 & FD60 | SteelR",
  description:
    "FD30 and FD60 fire rated steel entrance doors for flats, new builds, HMOs and housing associations. PAS 24 certified, Approved Document Q and Document B compliant. SR3 security rated steel doors for specifiers and developers across the UK.",
  alternates: { canonical: "https://steelr.co.uk/fire-rated-doors" },
  openGraph: {
    title: "Fire Rated Steel Doors for Flats & New Builds | FD30 & FD60 | SteelR",
    description:
      "FD30 and FD60 fire rated steel entrance doors for flats, new builds and housing associations. PAS 24 certified, Approved Document Q compliant, SR3 security rated.",
    url: "https://steelr.co.uk/fire-rated-doors",
    siteName: "SteelR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Rated Steel Doors for Flats & New Builds | FD30 & FD60 | SteelR",
    description:
      "FD30 and FD60 fire rated steel entrance doors for flats, new builds and housing associations. PAS 24 certified, Approved Document Q compliant, SR3 security rated.",
  },
};

const faqs = [
  {
    question: "Do flat entrance doors need to be fire rated?",
    answer:
      "Yes. Under Approved Document B of the Building Regulations, entrance doors to individual flats in blocks must achieve a minimum FD30 fire rating \u2014 providing 30 minutes of fire resistance. This applies to both new builds and replacement doors in existing buildings. Since the Building Safety Act 2022, enforcement of these requirements has become significantly stricter, particularly in buildings over 11 metres in height.",
  },
  {
    question: "What is the difference between FD30 and FD60?",
    answer:
      "FD30 provides 30 minutes of fire integrity and is the standard requirement for individual flat entrance doors. FD60 provides 60 minutes of fire integrity and is required for doors in common areas, protected escape routes, stairwell enclosures and higher-risk applications. Both ratings are determined through independent fire testing to BS 476-22 or BS EN 1634-1, measuring how long the door maintains its structural integrity and prevents the passage of fire and smoke.",
  },
  {
    question: "Can a fire rated door also be a security door?",
    answer:
      "Absolutely. SteelR fire rated doors combine FD30 or FD60 fire certification with SR3 security ratings as standard. Steel is uniquely suited to achieving both \u2014 its inherent material properties provide natural fire resistance while its strength delivers exceptional security. This dual certification is particularly valuable for flat entrance doors, which must meet both fire safety and security requirements under Building Regulations.",
  },
  {
    question:
      "Do you supply fire rated doors for multi-unit developments?",
    answer:
      "Yes. We work with developers, architects and housing associations across the UK on projects ranging from small conversions to large-scale new builds. We provide NBS specification clauses, door schedule pricing, project-level technical support and phased delivery programmes. Every door is manufactured to order, allowing us to accommodate varying aperture sizes, fire ratings and finishes across a single development.",
  },
];

const applications = [
  {
    title: "Flat Entrance Doors",
    description:
      "FD30 fire rated entrance doors for individual flats and apartments, meeting Approved Document B requirements. Essential for blocks of flats where compartmentation protects residents and escape routes.",
  },
  {
    title: "New Build Developments",
    description:
      "Fire rated steel doors for residential developers seeking Building Control sign-off. We supply door schedules, certification packs and phased delivery to match your build programme.",
  },
  {
    title: "HMO Properties",
    description:
      "Houses in Multiple Occupation require fire rated doors to meet HMO licensing conditions. Our FD30 doors satisfy local authority requirements while providing genuine long-term durability.",
  },
  {
    title: "Housing Associations",
    description:
      "Stock replacement and refurbishment programmes for social housing providers. Fire rated steel doors that exceed minimum standards, reduce long-term maintenance costs and improve resident safety.",
  },
  {
    title: "Architects & Specifiers",
    description:
      "Full NBS specification clauses, BIM data, fire test certificates and technical drawings. We support specification from concept through to completion, including site surveys and installation coordination.",
  },
  {
    title: "Leaseholder Upgrades",
    description:
      "Homeowners in flats and maisonettes replacing non-compliant doors. Our fire rated doors satisfy freeholder and Building Control requirements without compromising on design or kerb appeal.",
  },
];

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

export default function FireRatedDoorsPage() {
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
                name: "Fire Rated Doors",
                item: "https://steelr.co.uk/fire-rated-doors",
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
          Fire Rated Steel Doors
        </p>
      </section>

      {/* sr-only H1 */}
      <h1 className="sr-only">
        Fire Rated Steel Entrance Doors &mdash; FD30 &amp; FD60 Certified
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
              FD30 &amp; FD60 Certified
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
              Steel entrance doors engineered for fire safety and regulatory
              compliance
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
              SteelR manufactures bespoke fire rated steel entrance doors
              certified to FD30 and FD60 standards. Steel is inherently fire
              resistant &mdash; it does not burn, warp or delaminate under
              extreme heat, making it the superior material choice for fire
              door construction.
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
              Following the Grenfell Tower tragedy, the Building Safety Act
              2022 has significantly strengthened fire safety requirements
              across UK residential buildings. Approved Document B of the
              Building Regulations now demands rigorous compliance for
              entrance doors in flats, new builds and multi-occupancy
              properties. Our fire rated doors meet and exceed these
              requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Fire Rating Explained */}
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
              Approved Document B
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
              Fire ratings explained
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
              Fire door ratings indicate how long a door will maintain its
              structural integrity and prevent the passage of fire and smoke
              during a fire. These ratings are determined through independent
              testing to BS 476-22 or BS EN 1634-1 and are a legal
              requirement under UK Building Regulations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <div
                className="p-8 rounded-[4px] h-full"
                style={{
                  background: "rgba(201,169,110,0.08)",
                  border: "1px solid rgba(201,169,110,0.3)",
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
                      color: "#1a1a18",
                      background: "#c9a96e",
                    }}
                  >
                    FD30
                  </span>
                  <span
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 300,
                      fontSize: 13,
                      color: "#1a1a18",
                    }}
                  >
                    30-Minute Fire Integrity
                  </span>
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
                  The door maintains its structural integrity and prevents
                  the passage of fire and smoke for a minimum of 30 minutes.
                  This is the standard requirement for individual flat
                  entrance doors in residential blocks under Approved
                  Document B. In practical terms, FD30 provides residents
                  with 30 minutes of protected time to evacuate safely.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                className="p-8 rounded-[4px] h-full"
                style={{
                  background: "rgba(201,169,110,0.08)",
                  border: "1px solid rgba(201,169,110,0.3)",
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
                      color: "#1a1a18",
                      background: "#c9a96e",
                    }}
                  >
                    FD60
                  </span>
                  <span
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 300,
                      fontSize: 13,
                      color: "#1a1a18",
                    }}
                  >
                    60-Minute Fire Integrity
                  </span>
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
                  The door maintains its structural integrity and prevents
                  the passage of fire and smoke for a minimum of 60 minutes.
                  Required for doors in common areas, protected escape
                  routes, stairwell enclosures and higher-risk applications
                  such as buildings over 18 metres. FD60 provides the
                  highest level of passive fire protection available in
                  residential door systems.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who Needs Fire Rated Doors */}
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
              Applications
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
              Who needs fire rated doors
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
              Fire rated entrance doors are a legal requirement across a
              wide range of UK residential properties. Whether you are a
              developer, architect, housing provider or individual
              homeowner, compliance with Building Regulations is not
              optional.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <ScrollReveal key={app.title} delay={i * 0.08}>
                <div
                  className="p-8 rounded-[4px] h-full"
                  style={{
                    background: "rgba(26,26,24,0.02)",
                    border: "1px solid rgba(26,26,24,0.06)",
                  }}
                >
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 400,
                      fontSize: 15,
                      color: "#1a1a18",
                    }}
                  >
                    {app.title}
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
                    {app.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specification Comparison Table */}
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
              Technical Specification
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
              Specification comparison
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table
                className="w-full border-collapse"
                style={{ minWidth: 600 }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(201,169,110,0.3)",
                    }}
                  >
                    {[
                      "Feature",
                      "Standard Steel Door",
                      "FD30 Fire Rated",
                      "FD60 Fire Rated",
                    ].map((header) => (
                      <th
                        key={header}
                        className="text-left pb-4 pr-6"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 400,
                          fontSize: 11,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#1a1a18",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Fire integrity",
                      standard: "No rating",
                      fd30: "30 minutes",
                      fd60: "60 minutes",
                    },
                    {
                      feature: "Smoke seal",
                      standard: "Optional",
                      fd30: "Intumescent + smoke seal",
                      fd60: "Intumescent + smoke seal",
                    },
                    {
                      feature: "Security",
                      standard: "SR3 available",
                      fd30: "SR3 available",
                      fd60: "SR3 available",
                    },
                    {
                      feature: "Glazing",
                      standard: "Any",
                      fd30: "Fire-rated glass",
                      fd60: "Fire-rated glass",
                    },
                    {
                      feature: "Self-closing",
                      standard: "Optional",
                      fd30: "Required",
                      fd60: "Required",
                    },
                    {
                      feature: "Certification",
                      standard: "N/A",
                      fd30: "CE marked, tested",
                      fd60: "CE marked, tested",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        borderBottom:
                          i < 5
                            ? "1px solid rgba(201,169,110,0.1)"
                            : "none",
                      }}
                    >
                      <td
                        className="py-4 pr-6"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 300,
                          fontSize: 13,
                          color: "#1a1a18",
                        }}
                      >
                        {row.feature}
                      </td>
                      <td
                        className="py-4 pr-6"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 200,
                          fontSize: 13,
                          color: "#6b5a42",
                        }}
                      >
                        {row.standard}
                      </td>
                      <td
                        className="py-4 pr-6"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 300,
                          fontSize: 13,
                          color: "#1a1a18",
                        }}
                      >
                        {row.fd30}
                      </td>
                      <td
                        className="py-4 pr-6"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 300,
                          fontSize: 13,
                          color: "#1a1a18",
                        }}
                      >
                        {row.fd60}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual section — 3 images */}
      <section className="bg-cream pb-4 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-wrap md:flex-nowrap gap-3 overflow-hidden">
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[380px]">
            <Image
              src="/images/detail/steelr-grey-panelled-chrome-multilock.jpg"
              alt="Multi-point chrome locking mechanism on a fire rated steel entrance door"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center top" }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[380px]">
            <Image
              src="/images/gallery/steelr-black-panelled-ring-knocker-recessed.jpg"
              alt="Black steel fire rated door with ring knocker in recessed entrance"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center center" }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[380px]">
            <Image
              src="/images/gallery/steelr-charcoal-contemporary-horizontal-double.jpg"
              alt="Charcoal contemporary fire rated steel double doors"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center center" }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Developer / Trade section */}
      <section className="bg-cream ribbon-bg py-24 md:py-40 px-6 md:px-16">
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
                Trade &amp; Development
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
                Project-level support for professionals
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
                We work with developers, architects and housing associations
                across the UK on projects ranging from individual flat
                conversions to large-scale new build developments. Our team
                provides end-to-end support from specification through to
                installation.
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
                Every fire rated door is manufactured to order, allowing us
                to accommodate varying aperture sizes, fire ratings and
                finishes across a single development. We provide full
                certification packs for Building Control sign-off.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-4 justify-center">
              {[
                "NBS specification clauses",
                "Door schedule pricing for multi-unit projects",
                "Fire test certificates and certification packs",
                "Technical drawings and BIM data",
                "Phased delivery to match build programmes",
                "Site survey and installation coordination",
                "Building Control liaison support",
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

      {/* FAQ section */}
      <section className="bg-cream ribbon-bg pb-24 md:pb-40 px-6 md:px-16">
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
                href="/security"
                className="link-gold-underline"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#1a1a18",
                  letterSpacing: "0.05em",
                }}
              >
                View our security certifications &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials Strip */}
      <CredentialsStrip />

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
            Specify fire rated doors for your project
          </h2>
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              <Link
                href="/collection"
                className="link-gold-underline"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#f5f0e8",
                  letterSpacing: "0.05em",
                }}
              >
                Browse our collection &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
