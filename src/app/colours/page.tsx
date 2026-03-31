import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Steel Door Colours & RAL Finishes | Bespoke Options | SteelR",
  description:
    "Choose from over 200 RAL colours for your bespoke steel entrance door. Dual-colour options, premium hardware finishes in chrome, brass, and matt black. Request a colour consultation.",
  alternates: {
    canonical: "https://steelr.co.uk/colours",
  },
  openGraph: {
    title: "Steel Door Colours & RAL Finishes | SteelR",
    description:
      "Choose from over 200 RAL colours for your bespoke steel entrance door. Dual-colour options and premium hardware finishes.",
    url: "https://steelr.co.uk/colours",
    siteName: "SteelR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 2400,
        height: 1260,
        alt: "SteelR — Bespoke Steel Entrance Doors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Door Colours & RAL Finishes | SteelR",
    description:
      "Over 200 RAL colours, dual-colour options, and premium hardware finishes for bespoke steel entrance doors.",
    images: ["/og-image.png"],
  },
};

const popularColours = [
  { name: "Jet Black", ral: "RAL 9005", hex: "#0A0A0A" },
  { name: "Anthracite Grey", ral: "RAL 7016", hex: "#293133" },
  { name: "Slate Grey", ral: "RAL 7015", hex: "#434B4D" },
  { name: "Cream White", ral: "RAL 9001", hex: "#F5F0E1" },
  { name: "Steel Blue", ral: "RAL 5011", hex: "#1A2B3C" },
  { name: "Olive Green", ral: "RAL 6003", hex: "#424632" },
  { name: "Wine Red", ral: "RAL 3005", hex: "#5E2028" },
  { name: "Champagne", ral: "RAL 1015", hex: "#E6D2B5" },
];

const hardwareFinishes = [
  {
    name: "Polished Chrome",
    description: "Mirror-bright finish for a sleek, contemporary aesthetic",
  },
  {
    name: "Brushed Satin",
    description: "Soft lustre that complements modern and traditional doors alike",
  },
  {
    name: "Antique Brass",
    description: "Warm, aged patina for heritage and period properties",
  },
  {
    name: "Polished Brass",
    description: "Classic high-shine gold tone for a traditional statement",
  },
  {
    name: "Matt Black",
    description: "Bold, understated finish for architectural entrances",
  },
  {
    name: "Brushed Gold",
    description: "Refined satin gold for a luxurious, contemporary feel",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/steelr-navy-panelled-chrome-palms.jpg",
    alt: "Navy panelled steel entrance door with chrome hardware",
    label: "Navy with Chrome",
  },
  {
    src: "/images/gallery/steelr-red-traditional-lion-knocker.jpg",
    alt: "Red traditional steel door with lion knocker",
    label: "Wine Red with Brass",
  },
  {
    src: "/images/gallery/steelr-sage-contemporary-bar-handle-sidelight.jpg",
    alt: "Sage green contemporary steel door with bar handle and sidelight",
    label: "Sage Green",
  },
  {
    src: "/images/gallery/steelr-cream-traditional-lion-knocker-topiary.jpg",
    alt: "Cream traditional steel door with lion knocker and topiary",
    label: "Cream White",
  },
  {
    src: "/images/gallery/steelr-espresso-contemporary-gold-inlay.jpg",
    alt: "Espresso brown contemporary steel door with gold inlay detail",
    label: "Espresso with Gold",
  },
  {
    src: "/images/gallery/steelr-olive-traditional-brass-pendant.jpg",
    alt: "Olive green traditional steel door with brass pendant light",
    label: "Olive Green with Brass",
  },
];

export default function ColoursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://steelr.co.uk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Colours & Finishes",
                item: "https://steelr.co.uk/colours",
              },
            ],
          }),
        }}
      />

      {/* Page banner */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 240, background: "#1a1a18", paddingTop: 80 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.06) 50%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16"
          style={{ height: 1, background: "rgba(201,169,110,0.3)" }}
        />
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
          Colours &amp; Finishes
        </p>
      </section>

      {/* sr-only H1 */}
      <h1 className="sr-only">
        Steel Door Colours and Finishes — Bespoke RAL Colour Options
      </h1>

      {/* Intro section */}
      <section className="bg-cream ribbon-bg py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
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
              Unlimited Possibilities
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Your door, your colour
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              Every SteelR door is available in any colour from the full RAL
              spectrum — over 200 shades to match your property, your taste, and
              your vision. Choose a single colour throughout, or opt for a
              dual-colour finish with a different shade on each side of the door.
              Paired with a choice of premium hardware finishes, every detail is
              yours to define.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Popular Colours section */}
      <section className="bg-cream ribbon-bg pb-24 md:pb-40 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
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
              RAL Colours
            </p>
            <h2
              className="mb-14"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              Popular colour choices
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {popularColours.map((colour, i) => (
              <ScrollReveal key={colour.ral} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 shadow-sm"
                    style={{
                      backgroundColor: colour.hex,
                      border:
                        colour.hex === "#F5F0E1" || colour.hex === "#E6D2B5"
                          ? "1px solid rgba(0,0,0,0.08)"
                          : "none",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "#1a1a18",
                      marginBottom: 2,
                    }}
                  >
                    {colour.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 300,
                      fontSize: 11,
                      color: "#6b5a42",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {colour.ral}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p
              className="mt-12 text-center"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 13,
                lineHeight: 1.8,
                color: "#6b5a42",
              }}
            >
              These are our most requested shades, but you are not limited to
              this selection. Any RAL colour can be specified — simply provide
              the code or bring us a sample, and we will match it precisely.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dual Colour section */}
      <section className="bg-site-black py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
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
              Dual Colour
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#f5f0e8",
                lineHeight: 1.1,
              }}
            >
              Two sides, two finishes
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "rgba(245,240,232,0.7)",
              }}
            >
              A SteelR door does not have to be one colour. Our dual-colour
              option allows you to choose a different finish for the exterior and
              interior faces of your door. A classic black exterior can open to
              reveal a warm cream interior that complements your hallway. A
              contemporary anthracite facade can conceal a rich navy inner face.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "rgba(245,240,232,0.7)",
              }}
            >
              This is one of the most popular upgrades chosen by our clients —
              it allows the door to work with both your exterior architecture and
              interior design scheme, without compromise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hardware Finishes section */}
      <section className="bg-cream ribbon-bg py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
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
              Hardware
            </p>
            <h2
              className="mb-14"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              Premium hardware finishes
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {hardwareFinishes.map((finish, i) => (
              <ScrollReveal key={finish.name} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <span
                    className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[7px]"
                    style={{ background: "#c9a96e" }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: 14,
                        color: "#1a1a18",
                        marginBottom: 4,
                      }}
                    >
                      {finish.name}
                    </p>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 200,
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#6b5a42",
                      }}
                    >
                      {finish.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p
              className="mt-12"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 13,
                lineHeight: 1.8,
                color: "#6b5a42",
              }}
            >
              All hardware — handles, knockers, letterplates, and locking
              mechanisms — is available in each finish. Your design consultant
              will help you select the combination that best suits your door
              style and property.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery section */}
      <section className="bg-cream pb-4 px-6 md:px-16">
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
              Colour in Context
            </p>
            <h2
              className="mb-14"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              See the range
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 0.08}>
                <div className="relative group">
                  <div className="relative h-[320px] md:h-[440px] overflow-hidden rounded-[4px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      quality={80}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: "center top" }}
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <p
                    className="mt-3 mb-6"
                    style={{
                      fontFamily:
                        "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 300,
                      fontSize: 12,
                      color: "#6b5a42",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {img.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-site-black py-16 md:py-24 px-6 md:px-16 mt-12">
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
            Request a colour consultation
          </h2>
          <ScrollReveal>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "rgba(245,240,232,0.6)",
                maxWidth: 520,
                margin: "0 auto 40px",
              }}
            >
              Not sure which colour or finish is right for your property? Our
              design team will guide you through the options and provide physical
              samples to help you decide.
            </p>
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
