import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms & Conditions | SteelR",
  description:
    "Terms and conditions for using the SteelR website and enquiring about our bespoke steel entrance doors.",
  alternates: { canonical: "https://steelr.co.uk/terms" },
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

export default function TermsPage() {
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
            Terms &amp; Conditions
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p style={sectionStyle}>
            Last updated: March 2026
          </p>

          <h2 style={headingStyle}>Website use</h2>
          <p style={sectionStyle}>
            This website is operated by SteelR, a trading name of Supply Windows.
            By accessing and using steelr.co.uk you agree to be bound by these
            terms. If you do not agree, please do not use the site.
          </p>

          <h2 style={headingStyle}>Enquiries and quotations</h2>
          <p style={sectionStyle}>
            Information submitted through our contact form constitutes an enquiry
            only and does not form a binding contract. Quotations provided by SteelR
            are valid for 30 days from the date of issue unless otherwise stated.
            A contract is formed only when a written order confirmation is issued by
            SteelR and the agreed deposit has been received.
          </p>

          <h2 style={headingStyle}>Products and specifications</h2>
          <p style={sectionStyle}>
            All SteelR doors are manufactured to bespoke specifications agreed
            during the design stage. Images on this website are representative of
            our work and may not reflect the exact specification of your order.
            Colours may appear differently on screen compared to the finished
            product. RAL colour samples are available on request.
          </p>

          <h2 style={headingStyle}>Lead times</h2>
          <p style={sectionStyle}>
            Typical lead time from enquiry to installation is 8 to 12 weeks.
            This is an estimate and may vary depending on specification complexity,
            survey scheduling and manufacturing demand. Your specific timeline will
            be confirmed during the order process.
          </p>

          <h2 style={headingStyle}>Intellectual property</h2>
          <p style={sectionStyle}>
            All content on this website, including text, images, design and code,
            is the property of SteelR and is protected by copyright. You may not
            reproduce, distribute or use any content without prior written consent.
          </p>

          <h2 style={headingStyle}>Limitation of liability</h2>
          <p style={sectionStyle}>
            While we make every effort to ensure information on this website is
            accurate, SteelR does not warrant that the content is error-free. To
            the fullest extent permitted by law, SteelR shall not be liable for any
            indirect, incidental or consequential damages arising from use of this
            website.
          </p>

          <h2 style={headingStyle}>Governing law</h2>
          <p style={sectionStyle}>
            These terms are governed by the laws of England and Wales. Any disputes
            arising from these terms or your use of the website shall be subject to
            the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2 style={headingStyle}>Contact</h2>
          <p style={sectionStyle}>
            For questions about these terms, contact us at{" "}
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
