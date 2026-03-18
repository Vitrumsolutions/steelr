import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SteelR | UK Manufactured Bespoke Steel Doors",
  description:
    "SteelR manufacture and install bespoke steel entrance doors across the UK. SR3 rated, fire rated, ISO 9001 certified. Every door made to order.",
};

const credentials = [
  "SR3 High Security Rated",
  "ISO 9001 Certified Manufacturing",
  "Secured by Design Approved",
  "Fire Rated Steel Construction",
  "UK Manufactured Throughout",
  "Nationwide Installation Service",
  "Full Structural Survey Included",
  "Comprehensive Warranty & Aftercare",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/hero/steelr-navy-panelled-lanterns.jpg"
          alt="Grand entrance with SteelR bespoke steel door"
          fill
          quality={100}
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,9,0.3), rgba(10,10,9,0.6))",
          }}
        />
        <div className="absolute inset-0 flex items-end p-12 md:p-16 z-10">
          <h1
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#f5f0e8",
              lineHeight: 1.1,
            }}
          >
            About SteelR
          </h1>
        </div>
      </section>

      {/* Brand statement */}
      <section className="bg-cream py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
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
        </div>
      </section>

      {/* Two column — text + credentials */}
      <section className="bg-cream pb-24 md:pb-40 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left — copy */}
          <div>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#8a6f4e",
              }}
            >
              SteelR produces bespoke steel entrance doors for homes across the
              United Kingdom. Every door is engineered to SR3 high security
              standards and manufactured in the UK to ISO 9001 certification.
            </p>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#8a6f4e",
              }}
            >
              We work with homeowners, architects and developers who understand
              that the entrance to a home should be both beautiful and
              impenetrable. From the initial consultation to final installation,
              every detail is considered.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#8a6f4e",
              }}
            >
              No standard sizes. No off-the-shelf finishes. Every SteelR door is
              made to your exact specification.
            </p>
          </div>

          {/* Right — credentials */}
          <div className="flex flex-col gap-4 justify-center">
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
          </div>
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
              quality={100}
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
              quality={100}
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
              quality={100}
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
              quality={100}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center top" }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-site-black py-16 md:py-24 px-6 md:px-16 mt-20">
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
          <Link
            href="/contact"
            className="inline-block transition-colors duration-300 hover:bg-cream"
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
        </div>
      </section>
    </>
  );
}
