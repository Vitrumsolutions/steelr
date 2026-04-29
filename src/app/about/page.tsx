import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About SteelR | SR3 Standard, SR4 (LPS 1175) Upgrade, Secured by Design",
  description:
    "SteelR manufactures and installs bespoke steel front doors for UK homes. PAS 24, SR3 standard, SR4 LPS 1175 upgrade, Secured by Design, FD30, ISO 9001.",
  alternates: {
    canonical: "https://steelr.co.uk/about",
  },
};

const credentials = [
  "PAS 24:2022 Certified",
  "SR3 Standard & SR4 (LPS 1175) Available",
  "Secured by Design Approved",
  "FD30S Fire & Smoke Rated",
  "ISO 9001 Certified Manufacturing",
  "UK Manufactured Throughout",
  "Nationwide Installation Service",
  "Comprehensive Warranty & Aftercare",
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://steelr.co.uk"},{"@type":"ListItem","position":2,"name":"About","item":"https://steelr.co.uk/about"}]}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"AboutPage","url":"https://steelr.co.uk/about","name":"About SteelR","description":"SteelR is a UK manufacturer and installer of bespoke steel front doors for homes. PAS 24 certified, SR3 rated to BS EN 1627 Class 3 as standard with SR4 (LPS 1175 Issue 8) commercial-grade upgrade available, Secured by Design approved, FD30S fire and smoke rated, ISO 9001 certified.","mainEntity":{"@type":"Organization","name":"SteelR","url":"https://steelr.co.uk","sameAs":["https://www.instagram.com/steelrdoors","https://www.pinterest.co.uk/steelrdoors","https://www.linkedin.com/company/steelr","https://www.google.com/maps/place/SteelR+Bespoke+Steel+Entrance+Doors"]}}) }} />
      {/* Page banner */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 240, background: "#1a1a18", paddingTop: 80 }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.06) 50%, transparent 60%)",
        }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16" style={{ height: 1, background: "rgba(201,169,110,0.3)" }} />
        <p
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#f5f0e8",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          About
        </p>
      </section>

      {/* Brand statement */}
      <section className="bg-cream ribbon-bg py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
          <h1
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#1a1a18",
              lineHeight: 1.2,
            }}
          >
            Bespoke steel entrance doors for homes across the United Kingdom
          </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Two column — text + credentials */}
      <section className="bg-cream ribbon-bg pb-24 md:pb-40 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left — copy */}
          <ScrollReveal direction="left"><div>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              SteelR produces bespoke steel front doors for homes across the
              United Kingdom. Every door is engineered to SR3 high-security
              standards as the baseline, with SR4 (LPS 1175) available as a
              commercial-grade upgrade, and manufactured in the UK to ISO 9001
              certification.
            </p>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              We work with homeowners, architects and developers who understand
              that the entrance to a home should be both beautiful and
              impenetrable. From the initial consultation to final installation,
              every detail is considered.
            </p>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              No standard sizes. No off-the-shelf finishes. Every SteelR door is
              made to your exact specification.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/process"
                className="link-gold-underline"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#1a1a18",
                  letterSpacing: "0.05em",
                }}
              >
                See our 4-step process &rarr;
              </Link>
              <Link
                href="/collection"
                className="link-gold-underline"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#1a1a18",
                  letterSpacing: "0.05em",
                }}
              >
                Browse steel door designs &rarr;
              </Link>
            </div>
          </div></ScrollReveal>
          {/* Right — credentials */}
          <ScrollReveal direction="right"><div className="flex flex-col gap-4 justify-center">
            {credentials.map((cred) => (
              <div key={cred} className="flex items-center gap-3">
                <span
                  className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                  style={{ background: "#c9a96e" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#1a1a18",
                  }}
                >
                  {cred}
                </span>
              </div>
            ))}
          </div></ScrollReveal>
        </div>
      </section>

      {/* Detail images — flex layout */}
      <section className="bg-cream pb-4 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-3 overflow-hidden">
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[320px]">
            <Image
              src="/images/detail/steelr-navy-panelled-chrome-ring-closeup.jpg"
              alt="Close-up of steel door chrome ring knocker"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center top" }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[320px]">
            <Image
              src="/images/detail/steelr-black-panelled-brass-lion-closeup.jpg"
              alt="Brass lion head door knocker close-up"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center top" }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[320px]">
            <Image
              src="/images/detail/steelr-grey-panelled-chrome-multilock.jpg"
              alt="Multi-point chrome locking mechanism detail"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center top" }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative flex-1 min-w-[calc(50%-6px)] md:min-w-0 h-[320px]">
            <Image
              src="/images/detail/steelr-grey-panelled-brass-handle-closeup.jpeg"
              alt="Brass lever handle craftsmanship close-up"
              fill
              quality={80}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center top" }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream ribbon-bg py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              The Team
            </p>
            <h2
              className="mb-14"
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              The people behind every door
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Mani Sandhu",
                role: "Founder & Director",
                bio: "With over 15 years in the construction and fenestration industry, Mani founded SteelR to bring together the highest security standards with truly bespoke design. He oversees every project from initial enquiry to final installation.",
              },
              {
                name: "Design Team",
                role: "Bespoke Door Design",
                bio: "Our design team works directly with homeowners and architects to translate vision into specification. Every RAL colour, hardware choice and glazing option is considered to create a door that is uniquely yours.",
              },
              {
                name: "Installation Team",
                role: "Professional Fitting",
                bio: "Our in-house installation team — never subcontracted — carries out every fitting to the same exacting standards as the manufacturing process. Fully trained, DBS checked and insured.",
              },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.12}>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#1a1a18",
                      marginBottom: 4,
                    }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#c9a96e",
                      marginBottom: 12,
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 200,
                      fontSize: 13,
                      lineHeight: 1.8,
                      color: "#6b5a42",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-site-black py-16 md:py-24 px-6 md:px-16 mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-10"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#f5f0e8",
            }}
          >
            Every door begins with a conversation
          </h2>
          <ScrollReveal>
          <Link
            href="/contact"
            className="btn-cta inline-block transition-colors duration-300 hover:bg-cream"
            style={{
              background: "#c9a96e",
              color: "#1a1a18",
              fontFamily: "var(--font-body), Montserrat, sans-serif",
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
