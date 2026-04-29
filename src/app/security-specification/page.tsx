import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "PAS 24 Compliance & BS EN 1627:2011 RC4 Specification | SteelR",
  description:
    "Every SteelR residential steel front door is tested to BS EN 1627:2011 RC4 single leaf, unglazed and PAS 24 certified, with FD30S fire rating as standard. Approved Document Q compliant, Secured by Design approved.",
  alternates: { canonical: "https://steelr.co.uk/security-specification" },
  openGraph: {
    title: "PAS 24 & BS EN 1627 RC4 Specification | SteelR",
    description:
      "SteelR doors exceed UK Building Regulations with BS EN 1627:2011 RC4 single leaf, unglazed certification and FD30S fire rating on every residential front door.",
    url: "https://steelr.co.uk/security-specification",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAS 24 & BS EN 1627 RC4 Specification | SteelR",
    description:
      "SteelR doors exceed UK Building Regulations with BS EN 1627:2011 RC4 single leaf, unglazed certification and FD30S fire rating on every residential front door.",
  },
};

const standards = [
  {
    tier: "Building Regulations Minimum",
    standard: "PAS 24",
    name: "Document Q Compliant",
    highlight: false,
    features: [
      "Resists opportunist forced entry",
      "Multi-point locking required",
      "Laminated glazing if present",
      "Required for all new-build dwellings and flats",
      "Tested to 15-minute manual attack",
    ],
  },
  {
    tier: "SteelR Standard",
    standard: "BS EN 1627 RC4",
    name: "Single leaf, unglazed · FD30S",
    highlight: true,
    features: [
      "Resists sustained forced-entry attack with heavy-duty hand tools and battery-operated power tools",
      "Tested under BS EN 1627:2011, the European framework for forced-entry resistance",
      "Fitted on every residential steel front door we make",
      "FD30S fire rated — 30-minute fire and smoke resistance",
      "Intumescent seals and cold smoke brushes as standard",
      "Satisfies Approved Document Q, Part B and the Fire Safety Act 2021",
      "Secured by Design police-preferred specification",
    ],
  },
  {
    tier: "Available on Enquiry",
    standard: "LPS 1673",
    name: "LPCB attack-resistance · Beyond forced-entry",
    highlight: false,
    features: [
      "Separate LPCB scheme testing resistance to a sustained, directed attack on the asset behind the door",
      "Different threat model from BS EN 1627: the protected asset is the target, not opportunist forced entry",
      "Four ratings: AR.A300, AR.B180E, AR.B300E, AR.C120E (with E denoting power-tool inclusion)",
      "Used on bank vault outer doors, data centre internal cores and embassy residences",
      "Available on residential specification by enquiry where a documented threat assessment justifies it",
      "Lead time 12 to 16 weeks. Pricing individual to the project",
    ],
  },
];

const certifications = [
  { label: "PAS 24:2022", desc: "Security Standard" },
  { label: "BS EN 1627 RC4", desc: "Single leaf, unglazed" },
  { label: "FD30S", desc: "Fire & Smoke Rated" },
  { label: "Secured by Design", desc: "Police Preferred Spec" },
  { label: "ISO 9001", desc: "Certified Manufacturer" },
  { label: "LPS 1673", desc: "Attack-Resistant on Enquiry" },
];

const regulations = [
  {
    title: "Approved Document Q",
    text: "Security — dwellings. Mandatory for all new-build houses and flats in England and Wales.",
  },
  {
    title: "Approved Document B — Part B",
    text: "Fire safety. FD30S rating provides 30 minutes fire resistance and cold smoke control.",
  },
  {
    title: "Fire Safety Act 2021",
    text: "Flat entrance doors in multi-occupied buildings confirmed within scope. Responsible persons bear legal liability.",
  },
  {
    title: "Fire Safety (England) Regulations 2022",
    text: "Annual inspection duties for flat entrance doors in buildings over 11m. SteelR doors are designed for longevity and ongoing compliance.",
  },
  {
    title: "Building Safety Act 2022",
    text: "Higher-risk buildings regime. SteelR\u2019s BS EN 1627 RC4 + FD30S certification satisfies the gateway process requirements for higher-risk residential buildings.",
  },
  {
    title: "Secured by Design — Police Preferred Specification",
    text: "The UK police initiative accrediting doors to the highest independently verified security standard.",
  },
];

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

export default function SecuritySpecificationPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
              { "@type": "ListItem", position: 2, name: "PAS 24 & BS EN 1627 RC4 Specification", item: "https://steelr.co.uk/security-specification" },
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
            mainEntity: [
              { "@type": "Question", name: "What is PAS 24 and why is it required?", acceptedAnswer: { "@type": "Answer", text: "PAS 24:2022 is the UK security standard for doors and windows mandated by Approved Document Q of the Building Regulations. All new-build dwellings and flats in England and Wales must have entrance doors that meet PAS 24. It tests resistance to opportunist forced entry over a 15-minute manual attack." }},
              { "@type": "Question", name: "What is BS EN 1627 RC4 and how does it differ from PAS 24?", acceptedAnswer: { "@type": "Answer", text: "BS EN 1627:2011 RC4 is the European framework for sustained forced-entry resistance, certifying the complete door assembly against heavy-duty hand tools and battery-operated power tools. It far exceeds PAS 24, which tests a 1–3 minute casual attack with basic hand tools. Every SteelR residential steel front door is tested to BS EN 1627:2011 RC4 single leaf, unglazed as standard." }},
              { "@type": "Question", name: "Does SteelR carry an LPS 1175 SR rating?", acceptedAnswer: { "@type": "Answer", text: "No. LPS 1175 (operated by LPCB / BRE) is a different test scheme to BS EN 1627 — over 90% of products tested under EN 1627 RC4 fail to even achieve LPS 1175 SR2 because the tool sets, attack duration and methodology differ. SteelR is certified under the European framework BS EN 1627:2011 RC4 single leaf, unglazed; we do not claim an LPS 1175 SR rating." }},
              { "@type": "Question", name: "What does Secured by Design mean?", acceptedAnswer: { "@type": "Answer", text: "Secured by Design is the official UK police security initiative. Products carrying the Secured by Design accreditation have been independently tested and certified to the police-preferred specification for crime prevention. SteelR doors are Secured by Design approved." }},
              { "@type": "Question", name: "Are SteelR doors fire rated?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every SteelR door carries FD30S certification providing 30 minutes of fire and smoke resistance as standard. FD60 (60-minute) ratings are available on request. This satisfies Approved Document B, the Fire Safety Act 2021, and the Building Safety Act 2022 for flat entrance doors." }},
              { "@type": "Question", name: "Are SteelR doors suitable for new builds and flats?", acceptedAnswer: { "@type": "Answer", text: "Yes. SteelR doors exceed Approved Document Q (PAS 24) for security and Approved Document B for fire safety. The BS EN 1627 RC4 + FD30S specification satisfies all current UK Building Regulations for new-build houses, flats, HMOs, and housing association properties. They are regularly specified by developers, architects and housing associations." }},
              { "@type": "Question", name: "Is LPS 1673 available on a SteelR residential door?", acceptedAnswer: { "@type": "Answer", text: "Yes, by enquiry. LPS 1673 is a separate LPCB attack-resistance scheme that tests directed assault on the asset behind the door, distinct from forced-entry resistance under BS EN 1627. SteelR offers LPS 1673 specifications on residential by enquiry where a documented threat assessment, safe room construction or insurer requirement justifies it. Lead time 12 to 16 weeks. Pricing is individual to the project. See the dedicated LPS 1673 page for the four rating tiers (AR.A300, AR.B180E, AR.B300E, AR.C120E) and the typical buyer profile." }},
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 280, background: "#1a1a18", paddingTop: 80 }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.06) 50%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16" style={{ height: 1, background: "rgba(201,169,110,0.3)" }} />
        <div className="relative text-center px-6 z-10">
          <p style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a96e", marginBottom: 16 }}>
            Building Regulations · Approved Document Q
          </p>
          <p style={{ fontFamily: displayFont, fontWeight: 300, fontSize: "clamp(32px, 5vw, 56px)", color: "#f5f0e8", lineHeight: 1.1 }}>
            Exceeding <em style={{ fontStyle: "italic", color: "#d4b07a" }}>PAS 24</em> as standard
          </p>
        </div>
      </section>

      <h1 className="sr-only">PAS 24 Compliance and BS EN 1627 RC4 Security Specification — Approved Document Q</h1>

      {/* Intro */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p style={{ fontFamily: bodyFont, fontWeight: 200, fontSize: 14, lineHeight: 1.9, color: "#6b5a42" }}>
              Every SteelR entrance door is certified beyond the PAS 24 threshold mandated by UK Building Regulations — meeting both Approved Document Q and the fire safety requirements of the Fire Safety Act 2021. Our BS EN 1627:2011 RC4 single leaf, unglazed classification and FD30S fire rating deliver a level of protection that far exceeds the regulatory minimum.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Standards Comparison */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="mb-4 text-center" style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b8943f" }}>
              Security Standard Comparison
            </p>
            <h2 className="mb-12 text-center" style={{ fontFamily: displayFont, fontWeight: 300, fontSize: "clamp(24px, 3.5vw, 40px)", color: "#1a1a18", lineHeight: 1.2 }}>
              From building regulations to commercial-grade
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {standards.map((s, i) => (
              <ScrollReveal key={s.standard} delay={i * 0.1}>
                <div
                  className="p-8 rounded-[4px] h-full"
                  style={{
                    background: s.highlight ? "rgba(201,169,110,0.08)" : "rgba(245,240,232,0.6)",
                    border: s.highlight ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(201,169,110,0.08)",
                  }}
                >
                  <p style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: s.highlight ? "#c9a96e" : "#999", marginBottom: 12 }}>
                    {s.tier}
                  </p>
                  <p style={{ fontFamily: displayFont, fontWeight: 300, fontSize: "clamp(36px, 4vw, 48px)", color: s.highlight ? "#1a1a18" : "#999", lineHeight: 1, marginBottom: 4 }}>
                    {s.standard}
                  </p>
                  <p style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: s.highlight ? "#c9a96e" : "#999", marginBottom: 20 }}>
                    {s.name}
                  </p>
                  <div className="w-8 mb-5" style={{ height: 1, background: s.highlight ? "rgba(201,169,110,0.5)" : "rgba(201,169,110,0.15)" }} />
                  <ul className="space-y-3">
                    {s.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="mt-[5px] flex-shrink-0" style={{ fontSize: 10, color: s.highlight ? "#c9a96e" : "#bbb" }}>
                          {s.highlight ? "✦" : "—"}
                        </span>
                        <span style={{ fontFamily: bodyFont, fontWeight: 300, fontSize: 12, lineHeight: 1.5, color: s.highlight ? "#6b5a42" : "#999" }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Strip */}
      <section className="bg-cream ribbon-bg py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-0">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.label} delay={i * 0.08}>
              <div className="text-center p-6" style={{ borderRight: i < certifications.length - 1 ? "1px solid rgba(201,169,110,0.12)" : "none" }}>
                <p style={{ fontFamily: displayFont, fontWeight: 300, fontSize: 18, color: "#c9a96e", marginBottom: 4 }}>{cert.label}</p>
                <p style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999" }}>{cert.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Compliance Explainer */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <div>
              <h2 className="mb-6" style={{ fontFamily: displayFont, fontWeight: 300, fontSize: "clamp(24px, 3vw, 36px)", color: "#1a1a18", lineHeight: 1.2 }}>
                Why <em style={{ fontStyle: "italic", color: "#c9a96e" }}>new builds and flats</em> require PAS 24 — and why BS EN 1627 RC4 is what specifiers choose
              </h2>
              <p className="mb-4" style={{ fontFamily: bodyFont, fontWeight: 200, fontSize: 13, lineHeight: 1.9, color: "#6b5a42" }}>
                Under <strong style={{ fontWeight: 400, color: "#1a1a18" }}>Approved Document Q of the Building Regulations</strong>, all new-build homes and flats — including those created by material change of use — must be fitted with entrance doors that resist unauthorised access. PAS 24:2022 is the accepted standard to satisfy this requirement.
              </p>
              <p className="mb-4" style={{ fontFamily: bodyFont, fontWeight: 200, fontSize: 13, lineHeight: 1.9, color: "#6b5a42" }}>
                The <strong style={{ fontWeight: 400, color: "#1a1a18" }}>Fire Safety Act 2021</strong> further extended the Fire Safety Order to explicitly cover flat entrance doors in multi-occupied residential buildings. FD30S fire-rated doorsets are now the mandated minimum standard for any flat entrance door leading onto common parts.
              </p>
              <p style={{ fontFamily: bodyFont, fontWeight: 200, fontSize: 13, lineHeight: 1.9, color: "#6b5a42" }}>
                Every SteelR door satisfies both requirements — and exceeds both. BS EN 1627:2011 RC4 single leaf, unglazed certification means your door has been independently tested to withstand sustained forced entry with heavy-duty hand tools and battery-operated power tools, not just opportunist attack. It is the standard demanded by <strong style={{ fontWeight: 400, color: "#1a1a18" }}>housing associations, developers and planning authorities</strong> on high-specification projects.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h2 className="mb-8" style={{ fontFamily: displayFont, fontWeight: 300, fontSize: "clamp(24px, 3vw, 36px)", color: "#1a1a18", lineHeight: 1.2 }}>
                What your SteelR door <em style={{ fontStyle: "italic", color: "#c9a96e" }}>satisfies</em>
              </h2>
              <div className="space-y-0 rounded-[4px] overflow-hidden" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
                {regulations.map((reg) => (
                  <div key={reg.title} className="p-4 flex items-start gap-3" style={{ borderBottom: "1px solid rgba(201,169,110,0.1)", background: "rgba(245,240,232,0.5)" }}>
                    <span className="mt-[2px] flex-shrink-0" style={{ fontSize: 11, color: "#c9a96e" }}>✦</span>
                    <div>
                      <p style={{ fontFamily: bodyFont, fontWeight: 500, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1a1a18", marginBottom: 3 }}>{reg.title}</p>
                      <p style={{ fontFamily: bodyFont, fontWeight: 300, fontSize: 11, lineHeight: 1.5, color: "#6b5a42" }}>{reg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-site-black py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="mb-4" style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#b8943f" }}>
              Specify with confidence
            </p>
            <h2 className="mb-10" style={{ fontFamily: displayFont, fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 4vw, 44px)", color: "#f5f0e8" }}>
              Request a compliance specification sheet or discuss your project
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-cta inline-block transition-colors duration-300 hover:bg-cream"
                style={{ background: "#c9a96e", color: "#1a1a18", fontFamily: bodyFont, fontWeight: 400, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", padding: "16px 40px" }}
              >
                Request a Free Consultation
              </Link>
              <Link
                href="/security"
                className="link-gold-underline"
                style={{ fontFamily: bodyFont, fontWeight: 300, fontSize: 13, color: "#c9a96e", letterSpacing: "0.05em" }}
              >
                Full security specification &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
