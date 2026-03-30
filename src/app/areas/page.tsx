import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  locations,
  getHubLocations,
  getChildLocations,
} from "@/data/locations";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Areas We Serve | Steel Entrance Doors Nationwide | SteelR",
  description:
    "SteelR installs bespoke steel entrance doors across the UK. From London to Edinburgh, we provide a complete nationwide service including survey, manufacture and installation.",
  alternates: { canonical: "https://steelr.co.uk/areas" },
};

export default function AreasPage() {
  const hubs = getHubLocations();
  /* Standalone areas (no parent hub, type "area") */
  const standaloneAreas = locations.filter(
    (l) => l.type === "area" && !l.parentSlug
  );

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
                name: "Areas",
                item: "https://steelr.co.uk/areas",
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
          Areas We Serve
        </p>
      </section>

      <h1 className="sr-only">
        Steel Entrance Doors &mdash; Areas We Serve Across the UK
      </h1>

      {/* Intro */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.8,
                color: "#6b5a42",
                maxWidth: 640,
                marginBottom: 12,
              }}
            >
              SteelR manufactures and installs bespoke steel entrance doors for
              homes across the United Kingdom. Our nationwide service includes a
              full structural survey, precision manufacturing and professional
              installation by our own in-house team.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.8,
                color: "#6b5a42",
                maxWidth: 640,
              }}
            >
              Select a region below to explore our service in your area, or
              browse individual towns and cities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hub cards — featured regions */}
      <section className="bg-cream ribbon-bg pb-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              Our Regions
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub, i) => {
              const children = getChildLocations(hub.slug);
              return (
                <ScrollReveal
                  key={hub.slug}
                  delay={Math.min(i * 0.06, 0.4)}
                >
                  <Link
                    href={`/areas/${hub.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-3">
                      <Image
                        src={hub.heroImage}
                        alt={`Steel entrance doors in ${hub.name}`}
                        fill
                        quality={80}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(26,26,24,0.75) 0%, transparent 60%)",
                        }}
                      />
                      <div className="absolute bottom-0 left-0 p-5">
                        <p
                          style={{
                            fontFamily:
                              "var(--font-display), 'Cormorant Garamond', serif",
                            fontWeight: 300,
                            fontSize: 26,
                            color: "#f5f0e8",
                            lineHeight: 1.2,
                          }}
                        >
                          {hub.name}
                        </p>
                        <p
                          style={{
                            fontFamily:
                              "var(--font-body), Montserrat, sans-serif",
                            fontWeight: 400,
                            fontSize: 9,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#c9a96e",
                            marginTop: 4,
                          }}
                        >
                          {children.length} area
                          {children.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* All areas by region — compact text lists */}
      <section
        style={{ background: "#ede8df" }}
        className="ribbon-bg py-16 md:py-24 px-6 md:px-16"
      >
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
              Browse All Areas
            </p>
            <h2
              className="mb-12"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 3.5vw, 40px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Every area we serve
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {hubs.map((hub) => {
              const children = getChildLocations(hub.slug);
              return (
                <ScrollReveal key={hub.slug}>
                  <div>
                    <Link
                      href={`/areas/${hub.slug}`}
                      className="link-gold-underline inline-block mb-4"
                      style={{
                        fontFamily:
                          "var(--font-display), 'Cormorant Garamond', serif",
                        fontWeight: 400,
                        fontSize: 20,
                        color: "#1a1a18",
                      }}
                    >
                      {hub.name}
                    </Link>
                    <ul className="space-y-1.5">
                      {children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={`/areas/${child.slug}`}
                            className="transition-colors duration-200 hover:text-gold"
                            style={{
                              fontFamily:
                                "var(--font-body), Montserrat, sans-serif",
                              fontWeight: 300,
                              fontSize: 13,
                              color: "#6b5a42",
                              letterSpacing: "0.02em",
                            }}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}

            {/* Standalone cities */}
            {standaloneAreas.length > 0 && (
              <ScrollReveal>
                <div>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily:
                        "var(--font-display), 'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: 20,
                      color: "#1a1a18",
                    }}
                  >
                    Other Cities
                  </p>
                  <ul className="space-y-1.5">
                    {standaloneAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}`}
                          className="transition-colors duration-200 hover:text-gold"
                          style={{
                            fontFamily:
                              "var(--font-body), Montserrat, sans-serif",
                            fontWeight: 300,
                            fontSize: 13,
                            color: "#6b5a42",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {area.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Nationwide note */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
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
              Nationwide Service
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 3.5vw, 40px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Don&apos;t see your area listed?
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              We install bespoke steel entrance doors across the entire United
              Kingdom. Wherever your property is located, our team will carry
              out a full structural survey and professional installation. Get in
              touch to discuss your project.
            </p>
            <Link
              href="/contact"
              className="link-gold-underline"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "#1a1a18",
                letterSpacing: "0.05em",
              }}
            >
              Contact us about your area &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-site-black py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
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
              Request a Free Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
