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
import { CredentialsStrip } from "@/components/CredentialsBanner";
import QuickEnquiry from "@/components/QuickEnquiry";

/* ─── Boilerplate paragraph variants rotated by parent hub ─── */
type BoilerplateVariants = {
  manufacturing: ((label: string) => string)[];
  customisation: ((label: string) => string)[];
};

const boilerplateVariants: BoilerplateVariants = {
  manufacturing: [
    (label: string) =>
      `Every SteelR door is manufactured to your exact specification in the UK. We offer a complete service for ${label} customers: from the initial design consultation through to a full structural survey, precision manufacturing and professional installation by our own in-house team. No subcontractors, no standard sizes, no compromise.`,
    (label: string) =>
      `Each SteelR entrance door is precision-built in our UK workshop to your individual requirements. For ${label} homeowners, we provide an end-to-end service — an in-depth design consultation, a thorough structural survey of your property, bespoke manufacturing and expert fitting carried out exclusively by our own team. Every detail is made to measure; nothing is off the shelf.`,
    (label: string) =>
      `SteelR doors are crafted entirely in the United Kingdom to the precise dimensions and design you specify. Our ${label} clients benefit from a fully managed process: personal design consultation, on-site structural survey, meticulous manufacturing and installation by our dedicated in-house fitters. We never use subcontractors, and we never produce standard-size doors.`,
    (label: string) =>
      `From raw steel to finished entrance, every SteelR door is produced in our UK manufacturing facility to your exact brief. ${label} customers receive our complete bespoke service — a one-to-one design consultation, a detailed structural assessment of your property, precision fabrication and professional installation by our own specialist team. No two doors are alike.`,
  ],
  customisation: [
    (label: string) =>
      `Choose from any RAL colour, a wide selection of hardware finishes and glazing options, and a range of panel designs from ornate traditional to clean contemporary. Whether you are renovating a period property or completing a new build in ${label}, SteelR will create an entrance door that is uniquely yours.`,
    (label: string) =>
      `Select from the full RAL colour palette, an extensive choice of hardware in chrome, brass, gold or black, and glazing from clear to decorative. From classic period detailing to minimal contemporary lines, every element is tailored to your taste. Whether your ${label} project is a renovation or a new build, the finished door will be one of a kind.`,
    (label: string) =>
      `Your door can be finished in any RAL colour — including dual-colour inside and out — paired with your preferred hardware, glass and panel style. Traditional, ornate, contemporary or minimalist: the design is entirely yours. For ${label} properties of every era, SteelR delivers a truly bespoke entrance.`,
    (label: string) =>
      `With over 200 RAL colours, multiple hardware finishes and a broad range of glazing and panel configurations, every SteelR door is designed around your vision. Whether your ${label} home calls for heritage elegance or sharp modern lines, we ensure the entrance is unmistakably yours.`,
  ],
};

/** Pick a variant index (0-3) based on the hub slug, ensuring consistent rotation */
function getVariantIndex(hubSlug: string | undefined): number {
  if (!hubSlug) return 0;
  const hubs = [
    "london", "buckinghamshire", "surrey", "hertfordshire",
    "kent", "essex", "berkshire", "oxfordshire",
    "cheshire", "manchester", "birmingham", "yorkshire",
    "south-west", "hampshire", "sussex", "scotland",
  ];
  const idx = hubs.indexOf(hubSlug);
  if (idx === -1) return 0;
  return idx % 4;
}

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
        ? `Steel Doors ${label} | Bespoke Steel Front Doors, SR3 Rated | SteelR`
        : `Steel Doors ${label}, ${location.region} | Bespoke Steel Front Doors, SR3 Rated | SteelR`,
    description: `Bespoke steel front doors in ${label}. SR3 rated as standard, PAS 24 certified, Secured by Design, FD30 fire rated. UK manufactured by SteelR.`,
    alternates: { canonical: `https://steelr.co.uk/areas/${location.slug}` },
    openGraph: {
      title: `Steel Doors ${label} | SteelR`,
      description: `Steel doors in ${label}: bespoke front doors with SR3 rating as standard, PAS 24 certified, Secured by Design approved, FD30 fire rated. UK manufactured by SteelR.`,
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
      title: `Steel Doors ${label} | SteelR`,
      description: `Steel doors in ${label}: bespoke front doors with SR3 rating as standard, PAS 24 certified, Secured by Design approved, FD30 fire rated. UK manufactured by SteelR.`,
      images: [location.heroImage],
    },
  };
}

const credentials = [
  "PAS 24:2022 Certified",
  "SR3 Standard & SR4 (LPS 1175) Available",
  "Secured by Design Approved",
  "FD30S Fire & Smoke Rated",
  "ISO 9001 Certified Manufacturing",
  "UK Manufactured Throughout",
  "Nationwide Installation Service",
  "Comprehensive Warranty & Aftercare",
];

// Per-region "guides for homeowners" — curated blog links that bridge
// 161 area pages to the 40-post corpus. Closes the area→blog gap flagged
// by the 22 Apr audit (previously every area page had zero blog outbound).
function getAreaGuides(region: string | undefined, locationType: string): Array<{ slug: string; title: string }> {
  const common = { slug: "period-property-front-door-ultimate-guide", title: "Period Property Front Doors: Ultimate Guide" };
  const security = { slug: "front-door-security-ratings-compared-sr1-to-sr3", title: "Front Door Security Ratings: SR1 to SR3" };
  const colour = { slug: "ral-colours-front-doors-complete-guide", title: "The Complete Guide to RAL Colours" };
  const londonTownhouses = { slug: "front-doors-london-townhouses-guide", title: "Front Doors for London Townhouses" };
  const londonPeriod = { slug: "best-areas-london-period-property-renovations", title: "Best London Areas for Period Renovations" };
  const bucks = { slug: "steel-entrance-doors-buckinghamshire-homes", title: "Steel Entrance Doors for Buckinghamshire Homes" };
  const surrey = { slug: "steel-entrance-doors-surrey-properties", title: "Steel Entrance Doors for Surrey Properties" };
  const kent = { slug: "steel-entrance-doors-kent-properties", title: "Steel Entrance Doors for Kent Properties" };
  const countryHomes = { slug: "steel-doors-country-homes-guide", title: "Steel Doors for Country Homes" };
  const newBuilds = { slug: "best-front-doors-new-builds-uk", title: "Best Front Doors for New Builds" };

  const r = (region || "").toLowerCase();
  if (r.includes("london") || locationType === "city") {
    return [londonTownhouses, londonPeriod, security];
  }
  if (r.includes("buckinghamshire") || r.includes("bucks")) {
    return [bucks, common, colour];
  }
  if (r.includes("surrey")) {
    return [surrey, countryHomes, colour];
  }
  if (r.includes("kent")) {
    return [kent, common, security];
  }
  if (r.includes("berkshire") || r.includes("oxfordshire") || r.includes("hampshire")) {
    return [countryHomes, common, colour];
  }
  if (r.includes("essex") || r.includes("hertfordshire") || r.includes("sussex")) {
    return [common, security, colour];
  }
  if (r.includes("manchester") || r.includes("birmingham") || r.includes("cheshire") || r.includes("yorkshire") || r.includes("scotland")) {
    return [newBuilds, security, colour];
  }
  return [common, security, colour];
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const label = location.name;
  const areaGuides = getAreaGuides(location.region, location.type);

  /* FAQ data — use location-specific FAQs if provided, otherwise generate defaults */
  const defaultFaqs = [
    {
      question: `How much do steel entrance doors cost in ${location.name}?`,
      answer: `Every SteelR door is individually priced after an on-site survey and a written design consultation, because each door is made to measure with no two specifications alike. Size, security tier (SR3 standard or SR4 commercial-grade upgrade), fire rating, glazing, hardware specification, RAL colour and panel design all factor into the quotation. We provide a free, no-obligation consultation for ${location.name} homeowners with a detailed written breakdown of every specification choice.`,
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

  /* Determine hub for boilerplate rotation */
  const hubSlug = location.type === "hub" ? location.slug : location.parentSlug;
  const variantIdx = getVariantIndex(hubSlug);
  const manufacturingParagraph = boilerplateVariants.manufacturing[variantIdx](label);
  const customisationParagraph = boilerplateVariants.customisation[variantIdx](label);

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
            // @id reference to the canonical business in layout.tsx so
            // Google merges these per-area schema blocks with the parent
            // entity (which has the full address, geo, openingHours, etc.).
            // Avoids the LocalBusiness "missing required fields" warning
            // that the schema validator flagged on 29 Apr 2026.
            "@id": "https://steelr.co.uk/#business",
            name: "SteelR",
            description: `Bespoke steel front doors for homes in ${label}, ${location.region}. PAS 24 certified, SR3 standard with SR4 (LPS 1175) upgrade, Secured by Design approved, FD30S fire rated. Residential steel front doors, fire rated steel front doors and commercial-grade security.`,
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
          ? `Steel Doors ${label}: Bespoke Steel Front Doors, SR3 Rated`
          : `Steel Doors ${label}, ${location.region}: Bespoke Steel Front Doors, SR3 Rated`}
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
                {manufacturingParagraph}
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
                {customisationParagraph}
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

      {/* Credentials Strip */}
      <CredentialsStrip />

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

      {/* Guides for {label} homeowners — bridges this area page to topical blog
          content. Region-aware picks via getAreaGuides(). Added 22 Apr to close
          the internal-linking gap flagged by audit (161 area pages had zero blog
          outbound links). */}
      <section className="bg-cream py-16 md:py-20 px-6 md:px-16 border-t border-[rgba(26,26,24,0.08)]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#8a8a82",
              }}
            >
              Guides for {label} Homeowners
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
              What to know before choosing a steel front door
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {areaGuides.map((g, i) => (
              <ScrollReveal key={g.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${g.slug}`}
                  className="group block p-6 border border-[rgba(26,26,24,0.12)] hover:border-[#c9a96e] transition-colors duration-200"
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: "clamp(16px, 1.8vw, 20px)",
                      color: "#1a1a18",
                      lineHeight: 1.3,
                    }}
                  >
                    {g.title} <span style={{ color: "#c9a96e" }}>&rarr;</span>
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inline enquiry panel — auto-tags source=area-<slug> for lead attribution */}
      <QuickEnquiry source={`area-${location.slug}`} contextLabel={label} />

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
