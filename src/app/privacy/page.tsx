import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy | SteelR",
  description:
    "How SteelR collects, uses and protects your personal information when you use our website or enquire about our bespoke steel entrance doors.",
  alternates: { canonical: "https://steelr.co.uk/privacy" },
};

const sectionStyle = {
  fontFamily: "var(--font-body), Montserrat, sans-serif",
  fontWeight: 200 as const,
  fontSize: 14,
  lineHeight: 1.9,
  color: "#6b5a42",
};

const headingStyle = {
  fontFamily: "var(--font-body), Montserrat, sans-serif",
  fontWeight: 400 as const,
  fontSize: 16,
  color: "#1a1a18",
  marginBottom: 12,
  marginTop: 32,
};

export default function PrivacyPage() {
  return (
    <section
      style={{ background: "#f5f0e8" }}
      className="ribbon-bg pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-16"
    >
      <div className="max-w-3xl mx-auto">
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
            Legal
          </p>
          <h1
            className="mb-14"
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#1a1a18",
              lineHeight: 1.1,
            }}
          >
            Privacy Policy
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p style={sectionStyle}>
            Last updated: March 2026
          </p>

          <h2 style={headingStyle}>Who we are</h2>
          <p style={sectionStyle}>
            SteelR is a trading name of Supply Windows. We manufacture and install
            bespoke steel entrance doors across the United Kingdom. Our website
            address is https://steelr.co.uk.
          </p>

          <h2 style={headingStyle}>What data we collect</h2>
          <p style={sectionStyle}>
            When you submit an enquiry through our contact form, we collect your
            name, email address, telephone number, property type, door style
            preference and any additional details you provide in the message field.
            We do not collect payment information through our website.
          </p>

          <h2 style={headingStyle}>How we use your data</h2>
          <p style={sectionStyle}>
            We use the information you provide solely to respond to your enquiry,
            arrange surveys and consultations, and deliver our products and services.
            We do not sell, rent or share your personal information with third
            parties for marketing purposes.
          </p>

          <h2 style={headingStyle}>Cookies</h2>
          <p style={sectionStyle}>
            Our website uses essential cookies required for the site to function
            correctly. We use Vercel Analytics to understand how visitors use our
            site. This data is anonymised and cannot be used to identify individual
            visitors. We do not use advertising or tracking cookies.
          </p>

          <h2 style={headingStyle}>Data retention</h2>
          <p style={sectionStyle}>
            Enquiry data is retained for the duration of the project and for up to
            24 months after completion for warranty and follow-up purposes. You may
            request deletion of your data at any time by contacting us.
          </p>

          <h2 style={headingStyle}>Your rights</h2>
          <p style={sectionStyle}>
            Under UK GDPR, you have the right to access, correct, delete or restrict
            the processing of your personal data. To exercise any of these rights,
            contact us at info@steelr.co.uk or call 0800 861 1450.
          </p>

          <h2 style={headingStyle}>Contact</h2>
          <p style={sectionStyle}>
            If you have any questions about this privacy policy, contact us at{" "}
            <a
              href="mailto:info@steelr.co.uk"
              className="transition-colors duration-300 hover:text-gold"
              style={{ color: "#c9a96e" }}
            >
              info@steelr.co.uk
            </a>{" "}
            or call{" "}
            <a
              href="tel:08008611450"
              className="transition-colors duration-300 hover:text-gold"
              style={{ color: "#c9a96e" }}
            >
              0800 861 1450
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
