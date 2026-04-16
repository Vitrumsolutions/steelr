import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { CredentialsStrip } from "@/components/CredentialsBanner";

export const metadata: Metadata = {
  title: "Our Process | PAS 24 Certified Steel Door Installation | SteelR",
  description:
    "From enquiry to professional installation of bespoke steel front doors for your home. PAS 24 certified, SR3 rated as standard with SR4 (LPS 1175) commercial-grade upgrade, Secured by Design approved. Nationwide coverage, 8 to 12 week lead time.",
  alternates: {
    canonical: "https://steelr.co.uk/process",
  },
};

const stages = [
  {
    num: "01",
    title: "Enquiry",
    text: "Get in touch by phone or online form. We discuss your property, your brief and your timeline. No obligation, no pressure.",
    image: "/images/gallery/steelr-black-panelled-double-letterbox.jpg",
    alt: "Steel door enquiry consultation",
  },
  {
    num: "02",
    title: "Survey",
    text: "We visit your property nationwide. Full measurements, structural assessment and detailed specification agreed on site.",
    image: "/images/gallery/steelr-black-contemporary-dual-sidelights.jpg",
    alt: "Property survey for bespoke steel door fitting",
  },
  {
    num: "03",
    title: "Design",
    text: "Your door is designed to your exact specification. Colour, hardware, glazing, panel style, finish. Every detail confirmed before manufacture begins.",
    image: "/images/gallery/steelr-navy-traditional-vine-porch.jpg",
    alt: "Bespoke steel door design specification",
  },
  {
    num: "04",
    title: "Installation",
    text: "Professional installation by our team. Typically 8 to 12 weeks from enquiry to installation. Full aftercare and warranty included.",
    image: "/images/gallery/steelr-navy-panelled-chrome-palms.jpg",
    alt: "Professional steel door installation",
  },
];

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    { "@type": "ListItem", position: 2, name: "Process", item: "https://steelr.co.uk/process" },
  ],
});

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Bespoke Steel Entrance Door Installed",
  description: "Our four-step process from initial enquiry to professional installation of your bespoke steel entrance door.",
  totalTime: "P12W",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enquiry", text: "Get in touch by phone or online form. We discuss your property, your brief and your timeline." },
    { "@type": "HowToStep", position: 2, name: "Survey", text: "We visit your property nationwide. Full measurements, structural assessment and detailed specification agreed on site." },
    { "@type": "HowToStep", position: 3, name: "Design", text: "Your door is designed to your exact specification. Colour, hardware, glazing, panel style, finish. Every detail confirmed before manufacture begins." },
    { "@type": "HowToStep", position: 4, name: "Installation", text: "Professional installation by our team. Typically 8 to 12 weeks from enquiry to installation. Full aftercare and warranty included." },
  ],
});

export default function ProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToSchema }} />
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
            fontFamily:
              "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#f5f0e8",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Our Process
        </p>
      </section>

      <h1 className="sr-only">How We Design &amp; Install Your Bespoke Steel Door</h1>

      {/* Process stages — clean alternating layout */}
      {stages.map((stage, i) => {
        const imageRight = i % 2 === 0;
        return (
          <section
            key={stage.num}
            className="ribbon-bg py-16 md:py-24 px-6 md:px-16"
            style={{ background: i % 2 === 0 ? "#f5f0e8" : "#ede8df" }}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* Image */}
              <ScrollReveal direction={imageRight ? "right" : "left"}>
              <div
                className={`relative aspect-[3/4] overflow-hidden rounded-[4px] ${
                  imageRight ? "lg:order-2" : "lg:order-1"
                }`}
                style={{ maxHeight: 520 }}
              >
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  quality={80}
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              </ScrollReveal>

              {/* Text */}
              <ScrollReveal direction={imageRight ? "left" : "right"} delay={0.15}>
              <div
                className={`flex flex-col justify-center ${
                  imageRight ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span
                  className="block mb-2"
                  style={{
                    fontFamily:
                      "var(--font-display), 'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: 72,
                    lineHeight: 1,
                    color: "rgba(201, 169, 110, 0.15)",
                  }}
                >
                  {stage.num}
                </span>
                <h2
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c9a96e",
                  }}
                >
                  {stage.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.9,
                    color: "#6b5a42",
                    maxWidth: 440,
                  }}
                >
                  {stage.text}
                </p>
                {stage.num === "02" && (
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 200,
                      fontSize: 14,
                      lineHeight: 1.9,
                      color: "#6b5a42",
                    }}
                  >
                    We survey properties across{" "}
                    <Link href="/areas/london" className="link-gold-underline">London</Link>,{" "}
                    <Link href="/areas/surrey" className="link-gold-underline">Surrey</Link>,{" "}
                    <Link href="/areas/cheshire" className="link-gold-underline">Cheshire</Link>{" "}
                    and <Link href="/areas" className="link-gold-underline">nationwide</Link>.
                  </p>
                )}
              </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* Credentials Strip */}
      <CredentialsStrip />

      {/* CTA */}
      <section className="bg-site-black py-20 md:py-28 px-6 md:px-16">
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
            Ready to begin?
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
