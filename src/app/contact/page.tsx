import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Request a Consultation | SteelR",
  description:
    "Request a consultation for your bespoke steel entrance door. Call 0800 861 1450 or complete our online enquiry form. Nationwide UK coverage.",
  alternates: {
    canonical: "https://steelr.co.uk/contact",
  },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://steelr.co.uk/contact" },
  ],
});

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      {/* Hero banner */}
      <section
        className="flex items-center justify-center"
        style={{ height: 200, background: "#1a1a18", paddingTop: 80 }}
      >
        <p
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 48,
            color: "#f5f0e8",
            textAlign: "center",
          }}
        >
          Get in Touch
        </p>
      </section>

      <section className="ribbon-bg bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <ScrollReveal direction="left"><div>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              Get in Touch
            </p>
            <h1
              className="mb-8"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              Request a Bespoke Steel Door Consultation
            </h1>
            <a
              href="tel:08008611450"
              className="block transition-opacity duration-300 hover:opacity-70"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 48,
                color: "#1a1a18",
                letterSpacing: "-0.02em",
              }}
            >
              0800 861 1450
            </a>
            <p
              className="mt-3 mb-3"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "#6b5a42",
              }}
            >
              Monday to Friday, 8am to 6pm
            </p>
            <a
              href="mailto:info@steelr.co.uk"
              className="transition-opacity duration-300 hover:opacity-70"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 14,
                color: "#6b5a42",
              }}
            >
              info@steelr.co.uk
            </a>

            <div className="mt-16">
              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#b8943f",
                }}
              >
                Coverage
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: "#8a6f4e",
                }}
              >
                We design and install bespoke steel entrance doors nationwide
                across the United Kingdom. Our survey team will visit your
                property wherever you are located.
              </p>
            </div>
          </div></ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right">
          <div>
            <ContactForm />
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Google Maps embed — business name only, no street address shown */}
      <section style={{ padding: "60px 24px", background: "#1a1a18" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: 200, color: "#f5f0e8", marginBottom: 16, letterSpacing: "0.02em" }}>Find Us</h2>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(201,169,110,0.15)" }}>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Steelr+Bespoke+Steel+Entrance+Doors,Uxbridge,UK&zoom=10"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SteelR location"
            />
          </div>
          <p style={{ fontSize: 12, color: "#8a6f4e", marginTop: 8 }}>Nationwide design, manufacture and installation across the United Kingdom</p>
        </div>
      </section>
    </>
  );
}
