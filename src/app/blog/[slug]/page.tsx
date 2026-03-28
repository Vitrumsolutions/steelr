import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | SteelR Blog`,
    description: post.description,
    alternates: { canonical: `https://steelr.co.uk/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://steelr.co.uk/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 900, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Convert markdown-style content to HTML-like sections
  const sections = post.content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(22px, 3vw, 30px)",
            color: "#1a1a18",
            lineHeight: 1.2,
            marginTop: 40,
            marginBottom: 16,
          }}
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3
          key={i}
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            color: "#1a1a18",
            marginTop: 28,
            marginBottom: 8,
          }}
        >
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="mb-4 pl-4" style={{ listStyleType: "none" }}>
          {items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 mb-2"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.8,
                color: "#6b5a42",
              }}
            >
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[10px]"
                style={{ background: "#c9a96e" }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace("- ", "")
                    .replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight:400;color:#1a1a18">$1</strong>'),
                }}
              />
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="mb-4"
        style={{
          fontFamily: "var(--font-body), Montserrat, sans-serif",
          fontWeight: 200,
          fontSize: 14,
          lineHeight: 1.9,
          color: "#6b5a42",
        }}
        dangerouslySetInnerHTML={{
          __html: block.replace(
            /\*\*(.*?)\*\*/g,
            '<strong style="font-weight:400;color:#1a1a18">$1</strong>'
          ),
        }}
      />
    );
  });

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: `https://steelr.co.uk${post.image}`,
            datePublished: post.date,
            author: { "@type": "Organization", name: "SteelR", url: "https://steelr.co.uk" },
            publisher: {
              "@type": "Organization",
              name: "SteelR",
              url: "https://steelr.co.uk",
              logo: "https://steelr.co.uk/favicon.svg",
            },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://steelr.co.uk/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://steelr.co.uk/blog/${post.slug}` },
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
        <div className="text-center px-6 max-w-3xl">
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
            {post.category}
          </p>
          <p
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(24px, 3.5vw, 40px)",
              color: "#f5f0e8",
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </p>
        </div>
      </section>

      {/* Breadcrumb + meta */}
      <nav
        className="bg-cream px-6 md:px-16 py-3"
        style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
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
              {post.title}
            </span>
          </div>
          <time
            dateTime={post.date}
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
            })}{" "}
            &middot; {post.readTime}
          </time>
        </div>
      </nav>

      {/* Featured image */}
      <section className="bg-cream pt-10 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[4px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              quality={100}
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="bg-cream ribbon-bg py-12 md:py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>{sections}</ScrollReveal>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
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
                Continue Reading
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.1}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-4">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        quality={90}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily:
                          "var(--font-display), 'Cormorant Garamond', serif",
                        fontWeight: 300,
                        fontSize: 22,
                        color: "#1a1a18",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </h3>
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
