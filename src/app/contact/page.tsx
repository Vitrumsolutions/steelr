import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Consultation | SteelR",
  description:
    "Request a consultation for your bespoke steel entrance door. Call 0800 861 1450 or complete our online enquiry form. Nationwide UK coverage.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="flex items-center justify-center"
        style={{ height: 200, background: "#1a1a18", paddingTop: 80 }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 48,
            color: "#f5f0e8",
            textAlign: "center",
          }}
        >
          Get in Touch
        </h1>
      </section>

      <section className="bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9a96e",
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
              Begin your enquiry
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
                fontWeight: 200,
                fontSize: 12,
                color: "#8a6f4e",
              }}
            >
              Monday to Friday, 8am to 6pm
            </p>
            <a
              href="mailto:info@steelr.co.uk"
              className="transition-opacity duration-300 hover:opacity-70"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 13,
                color: "#8a6f4e",
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
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                }}
              >
                Coverage
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
                We design and install bespoke steel entrance doors nationwide
                across the United Kingdom. Our survey team will visit your
                property wherever you are located.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
