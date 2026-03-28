import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Steel Door Guides & Advice | SteelR",
  description:
    "Expert guides on steel entrance doors, home security, door design and choosing the right door for your property. From the UK's bespoke steel door specialists.",
  alternates: { canonical: "https://steelr.co.uk/blog" },
};

export default function BlogPage() {
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
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://steelr.co.uk/blog" },
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
          Blog
        </p>
      </section>

      <h1 className="sr-only">Steel Door Guides, Security Advice &amp; Design Inspiration</h1>

      {/* Posts grid */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.8,
                color: "#6b5a42",
                maxWidth: 640,
                marginBottom: 32,
              }}
            >
              Expert guides on steel entrance doors, home security, design
              inspiration and choosing the right door for your property.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-4">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      quality={90}
                      priority={i === 0}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 9,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#b8943f",
                    }}
                  >
                    {post.category} &middot; {post.readTime}
                  </p>
                  <h2
                    className="mb-2"
                    style={{
                      fontFamily:
                        "var(--font-display), 'Cormorant Garamond', serif",
                      fontWeight: 300,
                      fontSize: 22,
                      color: "#1a1a18",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 200,
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "#6b5a42",
                    }}
                  >
                    {post.description}
                  </p>
                  <time
                    dateTime={post.date}
                    className="block mt-3"
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 300,
                      fontSize: 11,
                      color: "rgba(107, 90, 66, 0.5)",
                    }}
                  >
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </Link>
              </ScrollReveal>
            ))}
          </div>
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
              Ready to explore your options?
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
