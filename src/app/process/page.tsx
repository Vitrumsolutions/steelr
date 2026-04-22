import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { CredentialsStrip } from "@/components/CredentialsBanner";
import QuickEnquiry from "@/components/QuickEnquiry";

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
    text: "Call the 0800 number or use the online enquiry form. Every enquiry reaches a senior member of the SteelR team the same working day, usually within two hours.",
    detail: "We run a short discovery conversation to understand three things: the property style and era, the brief behind the door (security concern, aesthetic upgrade, thermal performance, planning constraint, or a combination), and your realistic timeline. If the project fit is clear, we book a survey visit on the call. If it is not the right match, we say so rather than waste your time. Nothing is chargeable at this stage. No deposit is requested.",
    image: "/images/gallery/steelr-black-panelled-double-letterbox.jpg",
    alt: "Steel door enquiry consultation",
  },
  {
    num: "02",
    title: "Survey",
    text: "One of our in-house surveyors travels to your property, anywhere on the UK mainland, with no regional surcharge. The visit typically runs two to three hours.",
    detail: "Full laser measurements of the aperture are taken. The surrounding brickwork or stone is assessed for structural integrity and squareness. Thermal, acoustic and security requirements are noted against your brief. If the opening needs steelwork adjustments, we identify that on site rather than discover it later. You receive a written survey report, a scaled CAD drawing of the proposed door, and a detailed written quotation within five working days of the visit. No obligation, no follow-up pressure.",
    image: "/images/gallery/steelr-black-contemporary-dual-sidelights.jpg",
    alt: "Property survey for bespoke steel door fitting",
  },
  {
    num: "03",
    title: "Design",
    text: "Once the brief is agreed, the door is designed to your exact specification. Every detail is defined before a single piece of steel is cut.",
    detail: "You choose any RAL colour from the full Classic range, with dual-colour options so the inside can differ from the outside. Hardware is specified from polished chrome, brushed satin, antique brass, polished brass, matt black or brushed gold. Glazing options include clear, frosted, tinted, decorative, stained and obscured. Panel styles, mouldings, knockers, letterboxes, house numerals and sidelight configurations are all confirmed at this stage. You receive a full visual mock-up to approve. Revisions are included. Nothing goes into manufacture until you sign off.",
    image: "/images/gallery/steelr-navy-traditional-vine-porch.jpg",
    alt: "Bespoke steel door design specification",
  },
  {
    num: "04",
    title: "Manufacture and Installation",
    text: "Manufacture takes six to eight weeks in our UK facility. Every door is quality-checked before it leaves the factory. Installation is carried out by our own in-house team.",
    detail: "During manufacture, the steel frame is fabricated, the door leaf is built, fire and security certifications are verified, and the finish coat is applied under controlled conditions. Installation is carried out by DBS-checked, fully insured fitters employed directly by SteelR. Never subcontracted. A single-leaf door is usually fitted inside one working day; double doors or sidelight configurations take two. You are handed a ten-year manufacturer warranty, full care instructions, and direct contact details for aftercare. Typical total time from first enquiry to finished door in place is eight to twelve weeks.",
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
  name: "How to Get a Bespoke Steel Entrance Door Designed and Installed",
  description:
    "Our four-stage process from initial enquiry to professional installation of your bespoke steel entrance door, with an eight to twelve week total lead time.",
  totalTime: "P12W",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enquiry",
      text: "Call or submit an online enquiry. A senior team member responds the same working day, usually within two hours. A short discovery call covers the property style, the brief behind the door, and your timeline.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Survey",
      text: "An in-house surveyor visits the property on the UK mainland with no regional surcharge. Laser measurements, structural assessment, thermal, acoustic and security specification. Written report, CAD drawing and quotation within five working days.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Design",
      text: "Full bespoke specification including RAL colour (dual colour optional), hardware finish, glazing, panel style, knocker, letterbox, house numerals and sidelight configuration. Visual mock-up supplied for sign-off before manufacture.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Manufacture and Installation",
      text: "Six to eight weeks of UK manufacture with full QC. Installation by our own in-house DBS-checked team, never subcontracted. Ten-year manufacturer warranty. Total lead time eight to twelve weeks from first enquiry.",
    },
  ],
});

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

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
            fontFamily: displayFont,
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

      <h1 className="sr-only">How We Design and Install Your Bespoke Steel Front Door</h1>

      {/* Intro — how we work */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
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
              How We Work
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Every SteelR door begins with a conversation and ends with a door no other home has
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
              There are no configurators. No standard sizes. No catalogue to
              pick from. The process below runs the same way whether the brief
              is a single townhouse front door in{" "}
              <Link href="/areas/kensington" className="link-gold-underline">Kensington</Link>,
              a pair of gated-driveway doors for a country estate in{" "}
              <Link href="/areas/surrey" className="link-gold-underline">Surrey</Link>,
              or a replacement fire-rated flat entrance door in a new-build development.
              You deal with the same small team from first call to handover, with one
              point of contact the whole way through.
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
              Eight to twelve weeks from first enquiry to finished door in place.
              Nationwide UK coverage. No regional surcharges.
            </p>
          </ScrollReveal>
        </div>
      </section>

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
                    fontFamily: displayFont,
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
                    fontFamily: bodyFont,
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
                  className="mb-5"
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.9,
                    color: "#1a1a18",
                    maxWidth: 480,
                  }}
                >
                  {stage.text}
                </p>
                <p
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 200,
                    fontSize: 14,
                    lineHeight: 1.9,
                    color: "#6b5a42",
                    maxWidth: 480,
                  }}
                >
                  {stage.detail}
                </p>
                {stage.num === "02" && (
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 200,
                      fontSize: 14,
                      lineHeight: 1.9,
                      color: "#6b5a42",
                      maxWidth: 480,
                    }}
                  >
                    We survey properties across{" "}
                    <Link href="/areas/london" className="link-gold-underline">London</Link>,{" "}
                    <Link href="/areas/surrey" className="link-gold-underline">Surrey</Link>,{" "}
                    <Link href="/areas/cheshire" className="link-gold-underline">Cheshire</Link>,{" "}
                    the Home Counties and{" "}
                    <Link href="/areas" className="link-gold-underline">nationwide</Link>.
                  </p>
                )}
              </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* Aftercare and warranty — new section */}
      <section className="bg-cream ribbon-bg py-20 md:py-28 px-6 md:px-16">
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
                color: "#b8943f",
              }}
            >
              After Installation
            </p>
            <h2
              className="mb-10 text-center"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 40px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Aftercare, warranty and what happens next
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                label: "Warranty",
                heading: "Ten and twenty-five years",
                body: "Hardware is covered for ten years. The steel structure is covered for twenty-five. Fire and security certifications are registered against your address and kept on file in case future owners need to verify compliance.",
              },
              {
                label: "Maintenance",
                heading: "A guide left on site",
                body: "Most doors need only routine cleaning and an annual hinge check. The care sheet left with you on handover explains both. Our aftercare team is reachable by phone or email directly. No ticket systems.",
              },
              {
                label: "Future updates",
                heading: "Your spec is kept on file",
                body: "If you ever want to update hardware, repaint to a new RAL colour, or retrofit a smart lock, we keep your original specification on file. New parts fit the first time. No re-measure.",
              },
            ].map((block) => (
              <ScrollReveal key={block.label} delay={0.08}>
                <div>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 400,
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#c9a96e",
                    }}
                  >
                    {block.label}
                  </p>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: displayFont,
                      fontWeight: 300,
                      fontSize: 24,
                      color: "#1a1a18",
                      lineHeight: 1.2,
                    }}
                  >
                    {block.heading}
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
                    {block.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <CredentialsStrip />

      
      {/* Inline enquiry panel — source=hub-process */}
      <QuickEnquiry source="hub-process" contextLabel="Our Process" />
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
            Ready to begin
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
