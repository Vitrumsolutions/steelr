import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  locations,
  getLocationBySlug,
  getChildLocations,
  getNearbyLocations,
} from "@/data/locations";
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

  const label = location.name;

  return {
    title:
      location.type === "hub"
        ? `Steel Entrance Doors ${label} | Bespoke Steel Doors | SteelR`
        : `Steel Entrance Doors ${label}, ${location.region} | SteelR`,
    description: `Bespoke PAS 24 certified steel entrance doors in ${label}, ${location.region}. SR3 security rated, Secured by Design approved, FD30 fire rated. Steel doors for new builds and flats. Request a free consultation from SteelR.`,
    alternates: { canonical: `https://steelr.co.uk/areas/${location.slug}` },
    openGraph: {
      title: `Steel Entrance Doors ${label} | SteelR`,
      description: `PAS 24 certified bespoke steel entrance doors in ${label}. SR3 rated, Secured by Design approved, FD30 fire rated. Free consultation available.`,
      url: `https://steelr.co.uk/areas/${location.slug}`,
      type: "website",
      images: [
        {
          url: location.heroImage,
          width: 1200,
          height: 900,
          alt: `Bespoke steel entrance door in ${label}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Steel Entrance Doors ${label} | SteelR`,
      description: `PAS 24 certified bespoke steel entrance doors in ${label}. SR3 rated, Secured by Design approved, FD30 fire rated. Free consultation available.`,
      images: [location.heroImage],
    },
  };
}

const credentials = [
  "PAS 24:2022 Certified",
  "SR3 High Security Rated",
  "Secured by Design Approved",
  "FD30S Fire & Smoke Rated",
  "ISO 9001 Certified Manufacturing",
  "UK Manufactured Throughout",
  "Nationwide Installation Service",
  "Comprehensive Warranty & Aftercare",
];

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const label = location.name;

  /* FAQ data — use location-specific FAQs if provided, otherwise generate defaults */
  const defaultFaqs = [
    {
      question: `How much do steel entrance doors cost in ${location.name}?`,
      answer: `Every SteelR door is bespoke, so pricing depends on the size, design complexity, glazing, hardware and finish you choose. As a guide, our steel entrance doors typically start from around £5,000. We offer a free, no-obligation consultation for ${location.name} homeowners where we discuss your requirements and provide a detailed quotation tailored to your property.`,
    },
    {
      question: `Do you install steel doors in ${location.name}?`,
      answer: `Yes. SteelR provides a full nationwide service, and we regularly install bespoke steel entrance doors in ${location.name} and across ${location.region}. Our service includes an initial design consultation, a full structural survey of your property, precision manufacturing in our UK workshop, and professional installation carried out by our own in-house fitting team — never subcontractors.`,
    },
    {
      question: `How long does installation take in ${location.name}?`,
      answer: `From your initial consultation to completion, the typical lead time is 8 to 12 weeks. This allows for the design process, structural survey, bespoke manufacturing and quality checks. The on-site installation itself is usually completed in a single day, minimising disruption to your ${location.name} home.`,
    },
    {
      question: `Are your steel doors suitable for conservation areas in ${location.name}?`,
      answer: `Absolutely. We have extensive experience designing steel entrance doors for properties in conservation areas and listed buildings across the UK, including ${location.name}. We can work closely with your local planning officers to ensure the design meets heritage requirements while still providing the security, thermal performance and aesthetic impact you expect from a SteelR door.`,
    },
  ];

  const faqs = location.faqs && location.faqs.length > 0 ? location.faqs : defaultFaqs;

  const parentHub = location.parentSlug
    ? getLocationBySlug(location.parentSlug)
    : undefined;
  const childLocations =
    location.type === "hub" ? getChildLocations(location.slug) : [];
  const nearbyLocations =
    location.type === "area" ? getNearbyLocations(location.slug) : [];

  /* Breadcrumb items */
  const breadcrumbs: { href?: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/areas", label: "Areas" },
  ];
  if (parentHub) {
    breadcrumbs.push({
      href: `/areas/${parentHub.slug}`,
      label: parentHub.name,
    });
  }
  breadcrumbs.push({ label }); // current page — no link

  /* Schema breadcrumb list */
  const schemaBreadcrumbs = breadcrumbs.map((b, i) => ({
    "@type": "ListItem" as const,
    position: i + 1,
    name: b.label,
    ...(b.href
      ? { item: `https://steelr.co.uk${b.href}` }
      : { item: `https://steelr.co.uk/areas/${location.slug}` }),
  }));

  return (
    <>
      {/* Schema: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaBreadcrumbs,
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
            description: `Bespoke PAS 24 certified steel entrance doors in ${label}, ${location.region}. SR3 security rated (BS EN 1627 Class 3), Secured by Design approved, FD30S fire rated. Steel doors for new builds and flats.`,
            url: `https://steelr.co.uk/areas/${location.slug}`,
            telephone: "0800 861 1450",
            areaServed:
              location.type === "hub"
                ? childLocations.map((c) => ({
                    "@type": "Place",
                    name: c.name,
                  }))
                : { "@type": "Place", name: `${label}, ${location.region}` },
            priceRange: "$$$$",
            image: `https://steelr.co.uk${location.heroImage}`,
            sameAs: [
              "https://www.instagram.com/steelrdoors",
              "https://www.pinterest.co.uk/steelrdoors",
              "https://www.linkedin.com/company/steelr"
            ],
          }),
        }}
      />

      {/* Schema: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
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
          alt={`Bespoke steel entrance door in ${label}`}
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
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#f5f0e8",
              lineHeight: 1.1,
            }}
          >
            {location.type === "hub"
              ? `Steel Doors Across ${label}`
              : `Steel Doors ${label}`}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        className="bg-cream px-6 md:px-16 py-3"
        style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}
      >
        <div className="max-w-5xl mx-auto flex items-center gap-2 flex-wrap">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <span key={i} className="flex items-center gap-2">
                {!isLast && crumb.href ? (
                  <>
                    <Link
                      href={crumb.href}
                      style={{
                        fontFamily:
                          "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 300,
                        fontSize: 11,
                        color: "#b8943f",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {crumb.label}
                    </Link>
                    <span
                      style={{
                        color: "rgba(201,169,110,0.3)",
                        fontSize: 11,
                      }}
                    >
                      /
                    </span>
                  </>
                ) : (
                  <span
                    style={{
                      fontFamily:
                        "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 300,
                      fontSize: 11,
                      color: "#6b5a42",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </nav>

      <h1 className="sr-only">
        {location.type === "hub"
          ? `Bespoke Steel Entrance Doors Across ${label}`
          : `Bespoke Steel Entrance Doors in ${label}`}
      </h1>

      {/* Main content */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
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
                {location.type === "hub"
                  ? `Steel Doors Across ${label}`
                  : `Steel Doors in ${label}`}
              </p>
              <h2
                className="mb-8"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#1a1a18",
                  lineHeight: 1.2,
                }}
              >
                Bespoke steel entrance doors for {label}{" "}
                {location.type === "hub" ? "properties" : "homes"}
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

            {/* Local features (if available) */}
            {location.localFeatures && location.localFeatures.length > 0 && (
              <ScrollReveal>
                <div
                  className="mb-6 p-5 rounded-[4px]"
                  style={{
                    background: "rgba(201,169,110,0.06)",
                    border: "1px solid rgba(201,169,110,0.12)",
                  }}
                >
                  <p
                    className="mb-3"
                    style={{
                      fontFamily:
                        "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#b8943f",
                    }}
                  >
                    Local Property Types
                  </p>
                  <ul className="space-y-2">
                    {location.localFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span
                          className="w-[4px] h-[4px] rounded-full flex-shrink-0 mt-[7px]"
                          style={{ background: "#c9a96e" }}
                        />
                        <span
                          style={{
                            fontFamily:
                              "var(--font-body), Montserrat, sans-serif",
                            fontWeight: 300,
                            fontSize: 13,
                            lineHeight: 1.6,
                            color: "#6b5a42",
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )}

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
                Every SteelR door is manufactured to your exact specification
                in the UK. We offer a complete service for {label} customers:
                from the initial design consultation through to a full
                structural survey, precision manufacturing and professional
                installation by our own in-house team. No subcontractors, no
                standard sizes, no compromise.
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
                Choose from any RAL colour, a wide selection of hardware
                finishes and glazing options, and a range of panel designs from
                ornate traditional to clean contemporary. Whether you are
                renovating a period property or completing a new build in{" "}
                {label}, SteelR will create an entrance door that is uniquely
                yours.
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
                {parentHub && (
                  <Link
                    href={`/areas/${parentHub.slug}`}
                    className="link-gold-underline"
                    style={{
                      fontFamily:
                        "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 300,
                      fontSize: 13,
                      color: "#1a1a18",
                      letterSpacing: "0.05em",
                    }}
                  >
                    All {parentHub.name} areas &rarr;
                  </Link>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Side image */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[4px]">
                <Image
                  src={location.galleryImages[0]}
                  alt={`Steel entrance door installation in ${label}`}
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

      {/* Hub: child areas grid */}
      {location.type === "hub" && childLocations.length > 0 && (
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
                Areas in {label}
              </p>
              <h2
                className="mb-10"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1a1a18",
                  lineHeight: 1.2,
                }}
              >
                Find your area
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {childLocations.map((child, i) => (
                <ScrollReveal
                  key={child.slug}
                  delay={Math.min(i * 0.06, 0.4)}
                >
                  <Link
                    href={`/areas/${child.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-3">
                      <Image
                        src={child.heroImage}
                        alt={`Steel entrance doors in ${child.name}`}
                        fill
                        quality={80}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(26,26,24,0.7) 0%, transparent 60%)",
                        }}
                      />
                      <div className="absolute bottom-0 left-0 p-4">
                        <p
                          style={{
                            fontFamily:
                              "var(--font-display), 'Cormorant Garamond', serif",
                            fontWeight: 300,
                            fontSize: 22,
                            color: "#f5f0e8",
                            lineHeight: 1.2,
                          }}
                        >
                          {child.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Credentials */}
      <section
        style={{ background: location.type === "hub" ? "#f5f0e8" : "#ede8df" }}
        className="ribbon-bg py-16 md:py-24 px-6 md:px-16"
      >
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
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
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
                Every SteelR door installed in {label} meets the same exacting
                standards as every door we produce. Our doors are tested and
                certified to the highest levels of security, fire resistance
                and thermal performance available for residential entrance
                doors in the UK.
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
                      fontFamily:
                        "var(--font-body), Montserrat, sans-serif",
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
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Steel doors suited to {label}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {location.galleryImages.slice(0, 3).map((img, i) => (
              <ScrollReveal key={img} delay={i * 0.1}>
                <Link href="/collection" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[4px]">
                    <Image
                      src={img}
                      alt={`Bespoke steel door example ${i + 1} for ${label}`}
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

      {/* Frequently Asked Questions */}
      <section
        style={{ background: "#ede8df" }}
        className="ribbon-bg py-16 md:py-24 px-6 md:px-16"
      >
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
              Frequently Asked Questions
            </p>
            <h2
              className="mb-10"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Common questions about steel doors in {label}
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div
                  className="p-5 rounded-[4px]"
                  style={{
                    background: "rgba(245,240,232,0.5)",
                    border: "1px solid rgba(201,169,110,0.12)",
                  }}
                >
                  <p
                    className="mb-3"
                    style={{
                      fontFamily:
                        "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      color: "#1a1a18",
                    }}
                  >
                    {faq.question}
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 200,
                      fontSize: 14,
                      lineHeight: 1.9,
                      color: "#6b5a42",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas (area pages only) */}
      {location.type === "area" && nearbyLocations.length > 0 && (
        <section
          style={{ background: "#ede8df" }}
          className="ribbon-bg py-16 md:py-24 px-6 md:px-16"
        >
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
                Nearby Areas
              </p>
              <h2
                className="mb-10"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#1a1a18",
                  lineHeight: 1.2,
                }}
              >
                We also serve these areas
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {nearbyLocations.slice(0, 5).map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas/${nearby.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-2">
                    <Image
                      src={nearby.heroImage}
                      alt={`Steel doors in ${nearby.name}`}
                      fill
                      quality={70}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(26,26,24,0.65) 0%, transparent 60%)",
                      }}
                    />
                    <p
                      className="absolute bottom-2 left-3"
                      style={{
                        fontFamily:
                          "var(--font-display), 'Cormorant Garamond', serif",
                        fontWeight: 300,
                        fontSize: 16,
                        color: "#f5f0e8",
                        lineHeight: 1.2,
                      }}
                    >
                      {nearby.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-site-black py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2
              className="mb-4"
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
              Get in touch to discuss your project in {label}. Free
              consultation, no obligation.
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
