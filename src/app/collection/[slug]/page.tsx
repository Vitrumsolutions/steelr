import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doors, getDoorBySlug, getRelatedDoors } from "@/data/doors";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doors.map((door) => ({ slug: door.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const door = getDoorBySlug(slug);
  if (!door) return {};

  return {
    title: `${door.title} | SteelR`,
    description: door.description.length > 155 ? door.description.substring(0, 152) + '...' : door.description,
    alternates: { canonical: `https://steelr.co.uk/collection/${door.slug}` },
    openGraph: {
      title: door.title,
      description: door.description,
      url: `https://steelr.co.uk/collection/${door.slug}`,
      images: [{ url: door.src, width: 1200, height: 1600, alt: door.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: door.title,
      description: door.description.length > 155 ? door.description.substring(0, 152) + '...' : door.description,
      images: [door.src],
    },
  };
}

export default async function DoorPage({ params }: Props) {
  const { slug } = await params;
  const door = getDoorBySlug(slug);
  if (!door) notFound();

  const related = getRelatedDoors(door);

  return (
    <>
      {/* Schema.org Product + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: door.title,
            description: door.description,
            image: `https://steelr.co.uk${door.src}`,
            brand: { "@type": "Brand", name: "SteelR" },
            manufacturer: {
              "@type": "Organization",
              name: "SteelR",
              url: "https://steelr.co.uk",
            },
            category: `${door.style} Steel Entrance Door`,
            material: "Fire Rated Steel",
            countryOfOrigin: { "@type": "Country", name: "United Kingdom" },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Security Rating",
                value: "SR3 (BS EN 1627:2011)",
              },
              {
                "@type": "PropertyValue",
                name: "Colour",
                value: door.colour,
              },
              {
                "@type": "PropertyValue",
                name: "Style",
                value: door.style,
              },
            ],
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
              priceValidUntil: "2027-12-31",
              url: `https://steelr.co.uk/collection/${door.slug}`,
            },
            url: `https://steelr.co.uk/collection/${door.slug}`,
          }),
        }}
      />
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
                name: "Collection",
                item: "https://steelr.co.uk/collection",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: door.title,
                item: `https://steelr.co.uk/collection/${door.slug}`,
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
        <div className="text-center px-6">
          <p
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a96e",
              marginBottom: 12,
            }}
          >
            {door.style}
          </p>
          <p
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#f5f0e8",
              lineHeight: 1.15,
            }}
          >
            {door.title}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        className="bg-cream px-6 md:px-16 py-3"
        style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          {[
            { href: "/", label: "Home" },
            { href: "/collection", label: "Collection" },
          ].map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <Link
                href={crumb.href}
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  color: "#b8943f",
                  letterSpacing: "0.05em",
                }}
              >
                {crumb.label}
              </Link>
              <span style={{ color: "rgba(201,169,110,0.3)", fontSize: 11 }}>
                /
              </span>
            </span>
          ))}
          <span
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: 11,
              color: "#6b5a42",
              letterSpacing: "0.05em",
            }}
          >
            {door.title}
          </span>
        </div>
      </nav>

      {/* Main content — image + details */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — image */}
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-[4px] bg-[#ede8df]" style={{ minHeight: 400 }}>
              <Image
                src={door.src}
                alt={door.alt}
                width={1200}
                height={1600}
                quality={80}
                priority
                className="w-full h-auto rounded-[4px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Right — details */}
          <ScrollReveal direction="right">
            <div className="flex flex-col justify-center">
              <h1
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  color: "#1a1a18",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                {door.title}
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                  marginBottom: 32,
                }}
              >
                {door.description}
              </p>

              {/* Rich page content (when present) — adds substantial unique content for SEO indexing */}
              {door.pageContent && (
                <>
                  <div
                    className="mb-8 pb-8"
                    style={{
                      borderTop: "1px solid rgba(201,169,110,0.15)",
                      paddingTop: 32,
                    }}
                  >
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: 9,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#b8943f",
                      }}
                    >
                      Designer&apos;s Notes
                    </p>
                    <p
                      className="mb-5"
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 200,
                        fontSize: 14,
                        lineHeight: 1.9,
                        color: "#6b5a42",
                      }}
                    >
                      {door.pageContent.aesthetic}
                    </p>
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: 9,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#b8943f",
                      }}
                    >
                      Heritage &amp; Inspiration
                    </p>
                    <p
                      className="mb-5"
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 200,
                        fontSize: 14,
                        lineHeight: 1.9,
                        color: "#6b5a42",
                      }}
                    >
                      {door.pageContent.inspiration}
                    </p>
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: 9,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#b8943f",
                      }}
                    >
                      Ideal For
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 200,
                        fontSize: 14,
                        lineHeight: 1.9,
                        color: "#6b5a42",
                      }}
                    >
                      {door.pageContent.idealFor}
                    </p>
                  </div>
                </>
              )}

              {/* Specifications */}
              <div
                className="mb-8 pb-8"
                style={{
                  borderBottom: "1px solid rgba(201,169,110,0.15)",
                }}
              >
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
                  Specification
                </p>
                <div className="grid grid-cols-2 gap-y-3">
                  {[
                    { label: "Style", value: door.style },
                    { label: "Colour", value: door.colour },
                    { label: "Security", value: "SR3 Rated" },
                    { label: "Material", value: "Fire Rated Steel" },
                    { label: "Certification", value: "ISO 9001" },
                    { label: "Lead Time", value: "8–12 Weeks" },
                  ].map((spec) => (
                    <div key={spec.label}>
                      <p
                        style={{
                          fontFamily:
                            "var(--font-body), Montserrat, sans-serif",
                          fontWeight: 300,
                          fontSize: 11,
                          color: "rgba(107, 90, 66, 0.6)",
                          marginBottom: 2,
                        }}
                      >
                        {spec.label}
                      </p>
                      <p
                        style={{
                          fontFamily:
                            "var(--font-body), Montserrat, sans-serif",
                          fontWeight: 400,
                          fontSize: 14,
                          color: "#1a1a18",
                        }}
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-10">
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
                  Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {door.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full"
                      style={{
                        fontFamily:
                          "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 300,
                        fontSize: 11,
                        color: "#6b5a42",
                        padding: "6px 16px",
                        border: "1px solid rgba(201,169,110,0.2)",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Customisation note */}
              <p
                className="mb-8"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "#6b5a42",
                  fontStyle: "italic",
                }}
              >
                Every SteelR door is fully bespoke. This design can be customised
                with any RAL colour, alternative hardware finishes, glazing
                options and panel styles to suit your property.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
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
                    padding: "14px 36px",
                  }}
                >
                  Enquire About This Door
                </Link>
                <Link
                  href="/collection"
                  className="link-gold-underline inline-flex items-center"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 12,
                    color: "#1a1a18",
                    letterSpacing: "0.05em",
                    padding: "14px 0",
                  }}
                >
                  Back to full collection &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related doors */}
      {related.length > 0 && (
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
                You May Also Like
              </p>
              <h2
                className="mb-12"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1a1a18",
                }}
              >
                Similar {door.style.toLowerCase()} designs
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 0.1}>
                  <Link
                    href={`/collection/${r.slug}`}
                    className="group block"
                  >
                    <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-[4px]">
                      <Image
                        src={r.src}
                        alt={r.alt}
                        fill
                        quality={80}
                        className="object-cover"
                        style={{ objectPosition: "center top" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily:
                          "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 300,
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        color: "#1a1a18",
                      }}
                    >
                      {r.title}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
