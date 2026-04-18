import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { locations, getHubLocations, getChildLocations } from "@/data/locations";
import { posts } from "@/data/blog";
import { doors } from "@/data/doors";

export const metadata: Metadata = {
  title: "Sitemap | SteelR",
  description:
    "Full list of pages on steelr.co.uk. Bespoke steel front doors, collection, areas we serve, blog, process, security specification and contact.",
  alternates: { canonical: "https://steelr.co.uk/sitemap" },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    { "@type": "ListItem", position: 2, name: "Sitemap", item: "https://steelr.co.uk/sitemap" },
  ],
});

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

const mainPages: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/collection/sidelights", label: "Steel Doors with Sidelights" },
  { href: "/about", label: "About SteelR" },
  { href: "/process", label: "Our Process" },
  { href: "/security", label: "Security and Certifications" },
  { href: "/security-specification", label: "PAS 24 and SR3 / SR4 Specification" },
  { href: "/fire-rated-doors", label: "Fire Rated Steel Front Doors" },
  { href: "/colours", label: "RAL Colours" },
  { href: "/design-estimate", label: "Design and Estimate" },
  { href: "/blog", label: "Blog" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
];

const topicPages: Array<{ href: string; label: string }> = [
  { href: "/bespoke-steel-front-doors-uk", label: "Bespoke Steel Front Doors UK (hub)" },
  { href: "/sr3-residential-steel-door", label: "SR3 Residential Steel Doors" },
  { href: "/pas-24-steel-entrance-door", label: "PAS 24 Steel Entrance Doors" },
  { href: "/secured-by-design-steel-front-door", label: "Secured by Design Steel Front Doors" },
  { href: "/thermally-broken-steel-front-door", label: "Thermally Broken Steel Front Doors" },
  { href: "/fire-rated-fd30-front-door", label: "Fire Rated FD30 Front Doors" },
  { href: "/steel-front-door-vs-composite", label: "Steel vs Composite Front Doors" },
  { href: "/uk-steel-doors-vs-imported", label: "UK-Made vs Imported Steel Doors" },
  { href: "/luxury-steel-entrance-door-london", label: "Luxury Steel Entrance Doors London" },
  { href: "/steel-front-door-cost-uk", label: "How Steel Front Door Pricing Works" },
];

export default function SitemapPage() {
  // Reshape location data: hub -> children mapping, preserving input order
  const hubs = getHubLocations();
  const areaSections = hubs.map((hub) => ({
    hub,
    children: getChildLocations(hub.slug).slice().sort((a, b) => a.name.localeCompare(b.name)),
  }));

  // Orphan areas (any area with no matching hub, shown in a final group)
  const hubSlugs = new Set(hubs.map((h) => h.slug));
  const orphans = locations.filter(
    (l) => l.type === "area" && (!l.parentSlug || !hubSlugs.has(l.parentSlug)),
  );

  // Blog posts sorted by date descending
  const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 200, background: "#1a1a18", paddingTop: 80 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.06) 50%, transparent 60%)",
          }}
        />
        <p
          style={{
            fontFamily: displayFont,
            fontWeight: 300,
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#f5f0e8",
            textAlign: "center",
          }}
        >
          Sitemap
        </p>
      </section>

      <h1 className="sr-only">SteelR Sitemap — All Pages</h1>

      {/* Intro */}
      <section className="bg-cream ribbon-bg py-12 md:py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p
              style={{
                fontFamily: bodyFont,
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              Every page on steelr.co.uk. Bespoke steel front doors for your
              home, organised by section. For an XML sitemap that search
              engines consume directly, see{" "}
              <a
                href="/sitemap.xml"
                className="link-gold-underline"
                style={{ color: "#1a1a18" }}
              >
                /sitemap.xml
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main pages */}
      <section className="bg-cream ribbon-bg pb-12 md:pb-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              className="mb-8"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(22px, 2.5vw, 30px)",
                color: "#1a1a18",
              }}
            >
              Main pages
            </h2>
          </ScrollReveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
            {mainPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="link-gold-underline"
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#1a1a18",
                    lineHeight: 1.6,
                  }}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Topic pages */}
      <section
        style={{ background: "#ede8df" }}
        className="ribbon-bg py-12 md:py-16 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              className="mb-8"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(22px, 2.5vw, 30px)",
                color: "#1a1a18",
              }}
            >
              Topic and comparison pages
            </h2>
          </ScrollReveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
            {topicPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="link-gold-underline"
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#1a1a18",
                    lineHeight: 1.6,
                  }}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Collection */}
      <section
        className="bg-cream ribbon-bg py-12 md:py-16 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              className="mb-8"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(22px, 2.5vw, 30px)",
                color: "#1a1a18",
              }}
            >
              Door collection ({doors.length} designs)
            </h2>
          </ScrollReveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
            {doors.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/collection/${d.slug}`}
                  className="link-gold-underline"
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 300,
                    fontSize: 13,
                    color: "#1a1a18",
                    lineHeight: 1.6,
                  }}
                >
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas (grouped by hub) */}
      <section
        style={{ background: "#ede8df" }}
        className="ribbon-bg py-12 md:py-16 px-6 md:px-16"
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              className="mb-8"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(22px, 2.5vw, 30px)",
                color: "#1a1a18",
              }}
            >
              Areas we serve ({locations.length} pages across {hubs.length} regions)
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {areaSections.map(({ hub, children }) => (
              <div key={hub.slug}>
                <Link
                  href={`/areas/${hub.slug}`}
                  className="block mb-3"
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 400,
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#c9a96e",
                  }}
                >
                  {hub.name}
                </Link>
                <ul className="flex flex-col gap-2">
                  {children.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/areas/${c.slug}`}
                        className="link-gold-underline"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 300,
                          fontSize: 13,
                          color: "#1a1a18",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {orphans.length > 0 && (
              <div>
                <p
                  className="block mb-3"
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 400,
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#c9a96e",
                  }}
                >
                  Other locations
                </p>
                <ul className="flex flex-col gap-2">
                  {orphans.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/areas/${c.slug}`}
                        className="link-gold-underline"
                        style={{
                          fontFamily: bodyFont,
                          fontWeight: 300,
                          fontSize: 13,
                          color: "#1a1a18",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="bg-cream ribbon-bg py-12 md:py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              className="mb-8"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(22px, 2.5vw, 30px)",
                color: "#1a1a18",
              }}
            >
              Blog ({sortedPosts.length} posts)
            </h2>
          </ScrollReveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {sortedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="link-gold-underline"
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 300,
                    fontSize: 13,
                    color: "#1a1a18",
                    lineHeight: 1.6,
                  }}
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
