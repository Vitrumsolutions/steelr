import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Steel Door Security Ratings | SR3, PAS 24, Secured by Design | SteelR",
  description:
    "Understand steel door security ratings for your home. SR3, PAS 24, Secured by Design and fire ratings explained in plain language for UK homeowners.",
  alternates: { canonical: "https://steelr.co.uk/security" },
  openGraph: {
    title: "Steel Door Security Ratings | SteelR",
    description: "SR3, PAS 24, Secured by Design — security certifications explained for homeowners.",
    url: "https://steelr.co.uk/security",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Door Security Ratings | SteelR",
    description: "SR3, PAS 24, Secured by Design — security certifications explained for homeowners.",
  },
};

const securityLevels = [
  { level: "SR1 / RC1", resistance: "Basic opportunistic", tools: "No tools — bodily force only", typical: "Budget uPVC doors", time: "Under 1 minute" },
  { level: "SR2 / RC2", resistance: "Casual burglar", tools: "Screwdrivers, pliers, wedges", typical: "Standard timber doors, basic composites", time: "3 minutes" },
  { level: "SR3 / RC3", resistance: "Experienced burglar", tools: "Crowbars, drills, hammers, angle grinders", typical: "SteelR bespoke steel doors", time: "20+ minutes", highlight: true },
  { level: "SR4 / RC4", resistance: "Professional attack", tools: "Power tools, reciprocating saws", typical: "High-security commercial premises", time: "30+ minutes" },
  { level: "SR5–SR6", resistance: "Organised crime / state", tools: "All power tools and cutting equipment", typical: "Government, military, embassies", time: "Extended" },
];

const faqs = [
  {
    question: "What is an SR3 security rating?",
    answer: "SR3 (Security Rating 3) is a classification under BS EN 1627:2011. It means the door has been tested against a sustained physical attack using heavy-duty tools — including crowbars, drills, hammers and angle grinders — for at least 20 minutes. It is the highest practical security rating available for residential entrance doors in the UK.",
  },
  {
    question: "Is PAS 24 enough for home security?",
    answer: "PAS 24 meets the minimum requirements of Building Regulations Part Q and is adequate for standard residential properties. However, it tests resistance to manual attack with lightweight tools for only 3 minutes — significantly lower than SR3. For high-value properties or security-conscious homeowners, SR3 provides substantially greater protection.",
  },
  {
    question: "What does Secured by Design mean?",
    answer: "Secured by Design (SBD) is the official police security initiative operated by Police Crime Prevention Initiatives Ltd. Products carrying the SBD accreditation have been independently tested and certified to meet police-preferred security standards. SBD-approved doors must pass PAS 24 testing as a minimum, but SteelR doors exceed this with SR3 certification.",
  },
  {
    question: "Are steel doors fire rated?",
    answer: "Steel is inherently fire-resistant. SteelR doors use fire-rated steel construction and can be specified to FD30 (30-minute fire resistance) or FD60 (60-minute fire resistance) standards. This provides an additional layer of safety that composite and timber doors cannot match without specialist construction.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
              { "@type": "ListItem", position: 2, name: "Security & Certifications", item: "https://steelr.co.uk/security" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 240, background: "#1a1a18", paddingTop: 80 }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.06) 50%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16" style={{ height: 1, background: "rgba(201,169,110,0.3)" }} />
        <p style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(36px, 5vw, 56px)", color: "#f5f0e8", lineHeight: 1.1, textAlign: "center" }}>
          Security &amp; Certifications
        </p>
      </section>

      <h1 className="sr-only">Steel Door Security Ratings — SR3, PAS 24 &amp; Secured by Design</h1>

      {/* Intro */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="mb-4" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b8943f" }}>
              Engineered for Protection
            </p>
            <h2 className="mb-8" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(28px, 3.5vw, 44px)", color: "#1a1a18", lineHeight: 1.2 }}>
              The most secure residential entrance doors in the UK
            </h2>
            <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 14, lineHeight: 1.9, color: "#6b5a42", maxWidth: 640 }}>
              Every SteelR door is engineered to SR3 security standards — the highest practical rating available for a residential entrance door. Combined with Secured by Design accreditation, ISO 9001 certified manufacturing and fire-rated steel construction, our doors offer uncompromising protection for your home and family.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Security Ratings Table */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="mb-4" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b8943f" }}>
              BS EN 1627:2011
            </p>
            <h2 className="mb-10" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(24px, 3vw, 36px)", color: "#1a1a18", lineHeight: 1.2 }}>
              Security ratings explained
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {securityLevels.map((s) => (
              <ScrollReveal key={s.level}>
                <div className="p-5 rounded-[4px]" style={{ background: s.highlight ? "rgba(201,169,110,0.12)" : "rgba(245,240,232,0.6)", border: s.highlight ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(201,169,110,0.08)" }}>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 13, color: s.highlight ? "#c9a96e" : "#1a1a18", minWidth: 90 }}>{s.level}</p>
                    <div className="flex-1">
                      <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 300, fontSize: 14, color: "#1a1a18", marginBottom: 4 }}>{s.resistance}</p>
                      <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 12, color: "#6b5a42" }}>Tools: {s.tools} · Typical: {s.typical} · Resistance time: {s.time}</p>
                    </div>
                    {s.highlight && <span style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e" }}>SteelR Standard</span>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAS 24 vs SR3 */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <div>
              <p className="mb-4" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b8943f" }}>PAS 24 vs SR3</p>
              <h2 className="mb-6" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(24px, 3vw, 36px)", color: "#1a1a18", lineHeight: 1.2 }}>Not all security standards are equal</h2>
              <p className="mb-4" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 14, lineHeight: 1.9, color: "#6b5a42" }}>
                <strong style={{ fontWeight: 400 }}>PAS 24</strong> is the minimum standard required by Building Regulations Part Q. It tests resistance to manual attack with lightweight tools for approximately 3 minutes. Most composite doors and standard security doors achieve this level.
              </p>
              <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 14, lineHeight: 1.9, color: "#6b5a42" }}>
                <strong style={{ fontWeight: 400 }}>SR3</strong> tests resistance to sustained, forceful attack using heavy-duty tools for 20+ minutes. This represents a fundamentally different level of protection — the difference between deterring an opportunistic attempt and withstanding a determined, equipped intruder.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[4px]">
              <Image src="/images/detail/steelr-grey-panelled-chrome-multilock.jpg" alt="Multi-point locking mechanism on SteelR steel door" fill quality={80} className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Secured by Design + Fire + ISO */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <ScrollReveal>
            <div>
              <p className="mb-3" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8943f" }}>Police Approved</p>
              <h3 className="mb-4" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: 24, color: "#1a1a18" }}>Secured by Design</h3>
              <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 13, lineHeight: 1.8, color: "#6b5a42" }}>
                The official UK police security initiative. SteelR doors carry SBD accreditation, meaning they meet and exceed police-preferred security standards. Properties with SBD-certified products are statistically less likely to be targeted.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div>
              <p className="mb-3" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8943f" }}>Fire Safety</p>
              <h3 className="mb-4" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: 24, color: "#1a1a18" }}>Fire Rated Construction</h3>
              <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 13, lineHeight: 1.8, color: "#6b5a42" }}>
                Steel is inherently fire-resistant. SteelR doors can be specified to FD30 or FD60 standards, providing 30 or 60 minutes of fire resistance. An additional layer of safety that composite and timber doors cannot match.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <p className="mb-3" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8943f" }}>Manufacturing Quality</p>
              <h3 className="mb-4" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: 24, color: "#1a1a18" }}>ISO 9001 Certified</h3>
              <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 13, lineHeight: 1.8, color: "#6b5a42" }}>
                Every SteelR door is manufactured in our UK workshop under ISO 9001 quality management certification. This guarantees consistent precision, traceability and quality control across every stage of production.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hardware images */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="mb-4" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b8943f" }}>Hardware &amp; Detail</p>
            <h2 className="mb-10" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(24px, 3vw, 36px)", color: "#1a1a18", lineHeight: 1.2 }}>Security in every detail</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg", alt: "Chrome multi-point locking mechanism" },
              { src: "/images/detail/steelr-grey-panelled-brass-handle-closeup.jpeg", alt: "Brass lever handle detail" },
              { src: "/images/detail/steelr-navy-panelled-chrome-ring-closeup.jpg", alt: "Chrome ring knocker detail" },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 0.1}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[4px]">
                  <Image src={img.src} alt={img.alt} fill quality={80} className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="mb-4" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b8943f" }}>Frequently Asked Questions</p>
            <h2 className="mb-10" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(24px, 3vw, 36px)", color: "#1a1a18", lineHeight: 1.2 }}>Common questions about door security</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-6 rounded-[4px]" style={{ background: "rgba(245,240,232,0.6)", border: "1px solid rgba(201,169,110,0.1)" }}>
                  <p className="mb-3" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 14, color: "#1a1a18" }}>{faq.question}</p>
                  <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 14, lineHeight: 1.9, color: "#6b5a42" }}>{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-site-black py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="mb-4" style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 4vw, 44px)", color: "#f5f0e8" }}>
              Discuss your security requirements
            </h2>
            <p className="mb-10" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 200, fontSize: 14, lineHeight: 1.8, color: "rgba(245,240,232,0.6)" }}>
              Every property is different. Get in touch to discuss the right security specification for your home.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-cta inline-block transition-colors duration-300 hover:bg-cream" style={{ background: "#c9a96e", color: "#1a1a18", fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", padding: "16px 40px" }}>
                Request a Free Consultation
              </Link>
              <Link href="/collection" className="link-gold-underline" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 300, fontSize: 13, color: "#c9a96e", letterSpacing: "0.05em" }}>
                Browse our collection &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
