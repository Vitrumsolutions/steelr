import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: `Steel Entrance Doors ${location.city} | Bespoke Steel Doors | SteelR`,
    description: `Bespoke steel entrance doors in ${location.city}, ${location.region}. SR3 security rated, UK manufactured, nationwide installation. Request a free consultation from SteelR.`,
    alternates: { canonical: `https://steelr.co.uk/areas/${location.slug}` },
    openGraph: {
      title: `Steel Entrance Doors ${location.city} | SteelR`,
      description: `Bespoke steel entrance doors in ${location.city}. SR3 rated, ISO 9001 certified, made to measure. Free consultation available.`,
      url: `https://steelr.co.uk/areas/${location.slug}`,
      type: "website",
      images: [{ url: location.heroImage, width: 1200, height: 900, alt: `Bespoke steel entrance door in ${location.city}` }],
    },
  };
}

const credentials = [
  "SR3 High Security Rated",
  "ISO 9001 Certified Manufacturing",
  "Secured by Design Approved",
  "Fire Rated Steel Construction",
  "UK Manufactured Throughout",
  "Nationwide Installation Service",
  "Full Structural Survey Included",
  "Comprehensive Warranty & Aftercare",
];

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <>
      {/* Schema: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
              { "@type": "ListItem", position: 2, name: "Areas", item: "https://steelr.co.uk/areas" },
              { "@type": "ListItem", position: 3, name: location.city, item: `https://steelr.co.uk/areas/${location.slug}` },
            ],
          }),
        }}
      />

      {/* Schema: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "SteelR",
            description: `Bespoke steel entrance doors in ${location.city}, ${location.region}. SR3 security rated, UK manufactured.`,
            url: `https://steelr.co.uk/areas/${location.slug}`,
            telephone: "0800 861 1450",
            areaServed: {
              "@type": "Place",
              name: `${location.city}, ${location.region}`,
            },
            priceRange: "$$$$",
            image: `https://steelr.co.uk${location.heroImage}`,
            sameAs: ["https://steelr.co.uk"],
          }),
        }}
      />

      {/* Hero banner */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 320, background: "#1a1a18", paddingTop: 80 }}
      >
        <Image
          src={location.heroImage}
          alt={`Bespoke steel entrance door in ${location.city}`}
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ opacity: 0.25 }}
          sizes="100vw"
        />
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
        <div className="relative text-center px-6 z-10">
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
            {location.region}
          </p>
          <p
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#f5f0e8",
              lineHeight: 1.1,
            }}
          >
            Steel Doors {location.city}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        className="bg-cream px-6 md:px-16 py-3"
        style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}
      >
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          {[
            { href: "/", label: "Home" },
            { href: "/areas", label: "Areas" },
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
              <span style={{ color: "rgba(201,169,110,0.3)", fontSize: 11 }}>/</span>
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
            {location.city}
          </span>
        </div>
      </nav>

      <h1 className="sr-only">Bespoke Steel Entrance Doors in {location.city}</h1>

      {/* Main content */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3">
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
                Steel Doors in {location.city}
              </p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#1a1a18",
                  lineHeight: 1.2,
                }}
              >
                Bespoke steel entrance doors for {location.city} homes
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
                  color: "#6b5a42",
                }}
              >
                {location.description}
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                Every SteelR door is manufactured to your exact specification in the UK. We offer a complete service for {location.city} customers: from the initial design consultation through to a full structural survey, precision manufacturing and professional installation by our own in-house team. No subcontractors, no standard sizes, no compromise.
              </p>
            </ScrollReveal>
            <ScrollReveal>
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
                Choose from any RAL colour, a wide selection of hardware finishes and glazing options, and a range of panel designs from ornate traditional to clean contemporary. Whether you are renovating a period property or completing a new build in {location.city}, SteelR will create an entrance door that is uniquely yours.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collection"
                  className="link-gold-underline"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "#1a1a18",
                    letterSpacing: "0.05em",
                  }}
                >
                  Browse our collection &rarr;
                </Link>
                <Link
                  href="/process"
                  className="link-gold-underline"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "#1a1a18",
                    letterSpacing: "0.05em",
                  }}
                >
                  See our 4-step process &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Side image — 2 cols */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[4px]">
                <Image
                  src={location.galleryImages[0]}
                  alt={`Steel entrance door installation in ${location.city}`}
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal direction="left">
            <div>
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
                Specifications &amp; Credentials
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1a1a18",
                  lineHeight: 1.2,
                }}
              >
                Engineered to the highest standards
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                Every SteelR door installed in {location.city} meets the same exacting standards as every door we produce. Our doors are tested and certified to the highest levels of security, fire resistance and thermal performance available for residential entrance doors in the UK.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-4 justify-center">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-3">
                  <span
                    className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                    style={{ background: "#c9a96e" }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 300,
                      fontSize: 14,
                      color: "#1a1a18",
                    }}
                  >
                    {cred}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
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
              Our Work
            </p>
            <h2
              className="mb-10"
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Steel doors suited to {location.city}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {location.galleryImages.map((img, i) => (
              <ScrollReveal key={img} delay={i * 0.1}>
                <Link href="/collection" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[4px]">
                    <Image
                      src={img}
                      alt={`Bespoke steel door example ${i + 1} for ${location.city}`}
                      fill
                      quality={90}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-8 text-center">
              <Link
                href="/collection"
                className="link-gold-underline"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#1a1a18",
                  letterSpacing: "0.05em",
                }}
              >
                View the full collection &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-site-black py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#f5f0e8",
              }}
            >
              Every door begins with a conversation
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.6)",
              }}
            >
              Get in touch to discuss your project in {location.city}. Free consultation, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <a
                href="tel:08008611450"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#c9a96e",
                  letterSpacing: "0.05em",
                }}
              >
                or call 0800 861 1450
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
