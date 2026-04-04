import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title:
    "PAS 24 vs SR3 Security Specification | Enhanced Door Security | SteelR",
  description:
    "SteelR doors exceed UK Building Regulations with SR3 (LPS 1175) security specification as standard. Compare PAS 24 vs SR3 and discover why our enhanced specification delivers superior protection.",
  alternates: { canonical: "https://steelr.co.uk/security-specification" },
  openGraph: {
    title:
      "PAS 24 vs SR3 Security Specification | Enhanced Door Security | SteelR",
    description:
      "SteelR doors exceed UK Building Regulations with SR3 (LPS 1175) security specification as standard. Compare PAS 24 vs SR3 protection levels.",
    url: "https://steelr.co.uk/security-specification",
    siteName: "SteelR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PAS 24 vs SR3 Security Specification | Enhanced Door Security | SteelR",
    description:
      "SteelR doors exceed UK Building Regulations with SR3 (LPS 1175) security specification as standard. Compare PAS 24 vs SR3 protection levels.",
  },
};

const comparisonRows = [
  {
    aspect: "Standard",
    pas24: "BS PAS 24:2022",
    sr3: "LPS 1175 Issue 8",
  },
  {
    aspect: "Attack duration",
    pas24: "~3 minutes",
    sr3: "20+ minutes",
  },
  {
    aspect: "Tool level",
    pas24: "Basic hand tools",
    sr3: "Heavy-duty power tools",
  },
  {
    aspect: "Building Regs",
    pas24: "Meets minimum (Doc Q)",
    sr3: "Far exceeds minimum",
  },
  {
    aspect: "Target market",
    pas24: "Standard residential",
    sr3: "High-value residential",
  },
  {
    aspect: "SteelR offering",
    pas24: "Available",
    sr3: "Standard specification",
  },
];

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

export default function SecuritySpecificationPage() {
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
                name: "Security Specification",
                item: "https://steelr.co.uk/security-specification",
              },
            ],
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
          Security Specification
        </p>
      </section>

      {/* sr-only H1 */}
      <h1 className="sr-only">
        PAS 24 &amp; SR3 Security Specification &mdash; Beyond Standard
        Compliance
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
              Enhanced Specification
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
              Enhanced Security Specification &mdash; Beyond Standard Compliance
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
              At SteelR, we go beyond the minimum security requirements expected
              in modern residential construction.
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
              All new homes in the UK are required to meet PAS 24 standards in
              accordance with Building Regulations (Approved Document Q). This
              provides a recognised level of protection against opportunistic
              intrusion.
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
              However, for clients seeking a higher level of security, we offer
              an upgraded specification using doors and security systems tested
              to LPS 1175 SR3.
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
              This enhanced standard is designed to resist more determined and
              aggressive methods of forced entry, using a wider range of tools
              and sustained attack techniques. As a result, it delivers a
              significantly higher level of physical security compared to
              standard PAS 24 products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits — What this means for you */}
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
                Client Benefits
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
                What this means for you
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
                Where specified, our SR3-rated systems are carefully selected to
                ensure they align with residential design requirements while
                delivering superior security performance.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-4 justify-center">
              {[
                "Increased resistance to forced entry",
                "Enhanced protection for occupants and valuables",
                "A more robust, security-focused build specification",
                "Peace of mind beyond standard regulatory requirements",
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
                      fontSize: 14,
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

      {/* Visual section — detail images */}
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

      {/* Comparison Table — PAS 24 vs SR3 */}
      <section className="bg-cream ribbon-bg py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
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
              Standards Compared
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
              PAS 24 vs SR3
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
              <table
                className="w-full"
                style={{
                  borderCollapse: "separate",
                  borderSpacing: 0,
                }}
              >
                <thead>
                  <tr>
                    <th
                      className="text-left py-4 px-5"
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 400,
                        fontSize: 9,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#6b5a42",
                        borderBottom: "1px solid rgba(201,169,110,0.3)",
                      }}
                    >
                      Aspect
                    </th>
                    <th
                      className="text-left py-4 px-5"
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 400,
                        fontSize: 9,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#6b5a42",
                        borderBottom: "1px solid rgba(201,169,110,0.3)",
                      }}
                    >
                      PAS 24
                    </th>
                    <th
                      className="text-left py-4 px-5"
                      style={{
                        fontFamily: bodyFont,
                        fontWeight: 400,
                        fontSize: 9,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#c9a96e",
                        borderBottom: "1px solid rgba(201,169,110,0.3)",
                      }}
                    >
                      SR3 (LPS 1175)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.aspect}>
                      <td
                        className="py-4 px-5"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 300,
                          fontSize: 13,
                          color: "#1a1a18",
                          borderBottom:
                            i < comparisonRows.length - 1
                              ? "1px solid rgba(201,169,110,0.1)"
                              : "none",
                        }}
                      >
                        {row.aspect}
                      </td>
                      <td
                        className="py-4 px-5"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 200,
                          fontSize: 13,
                          color: "#6b5a42",
                          borderBottom:
                            i < comparisonRows.length - 1
                              ? "1px solid rgba(201,169,110,0.1)"
                              : "none",
                        }}
                      >
                        {row.pas24}
                      </td>
                      <td
                        className="py-4 px-5"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 300,
                          fontSize: 13,
                          color: "#1a1a18",
                          borderBottom:
                            i < comparisonRows.length - 1
                              ? "1px solid rgba(201,169,110,0.1)"
                              : "none",
                          background: "rgba(201,169,110,0.06)",
                        }}
                      >
                        {row.sr3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Summary callout */}
      <section className="bg-cream ribbon-bg pb-24 md:pb-40 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div
              className="p-8 md:p-12 rounded-[4px] text-center"
              style={{
                background: "rgba(201,169,110,0.08)",
                border: "1px solid rgba(201,169,110,0.3)",
              }}
            >
              <p
                style={{
                  fontFamily: displayFont,
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 3vw, 24px)",
                  color: "#1a1a18",
                  lineHeight: 1.5,
                }}
              >
                PAS 24 meets the minimum required standard &mdash; our enhanced
                SR3 specification is designed to exceed it.
              </p>
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/design-estimate"
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
                Request a Security Specification
              </Link>
              <Link
                href="/contact"
                className="inline-block transition-colors duration-300"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#f5f0e8",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid rgba(201,169,110,0.4)",
                  paddingBottom: 2,
                }}
              >
                Or get in touch &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
