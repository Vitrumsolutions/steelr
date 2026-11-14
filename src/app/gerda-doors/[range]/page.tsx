import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuickEnquiry from "@/components/QuickEnquiry";
import { gerdaDesigns, type GerdaSeries } from "@/data/gerda-designs";
import { GERDA_URL, gerdaColours, gerdaExtraColours, gerdaOptions, gerdaRanges, gerdaSeries, getGerdaRange } from "@/data/gerda";
import {
  Banner,
  Body,
  Breadcrumbs,
  BROWN,
  DesignGrid,
  Display,
  Eyebrow,
  FactGrid,
  FaqList,
  GoldButton,
  HAIRLINE,
  INK,
  SpecTable,
  TextLink,
} from "@/components/gerda/ui";

interface Props {
  params: Promise<{ range: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return gerdaRanges.map((r) => ({ range: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { range } = await params;
  const r = getGerdaRange(range);
  if (!r) return {};
  const url = `${GERDA_URL}/${r.slug}`;
  return {
    title: r.metaTitle,
    description: r.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: r.metaTitle,
      description: r.metaDescription,
      url,
      type: "website",
      // One shared 1200x630 JPEG: the range photos are portrait WebP, which
      // several social and messaging previews crop badly or do not render.
      images: [{ url: "/images/gerda/og-gerda.jpg", width: 1200, height: 630, alt: "Gerda front door in Dark Anthracite and Winchester on a white house" }],
    },
    twitter: { card: "summary_large_image", title: r.metaTitle, description: r.metaDescription, images: ["/images/gerda/og-gerda.jpg"] },
  };
}

const seriesOrder: GerdaSeries[] = ["Tempo", "Quadro", "Air Glass", "Elite 3D", "Classic"];
const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const BODY_FONT = "var(--font-body), Montserrat, sans-serif";
const FOCUS_DARK = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1a18]";

export default async function GerdaRangePage({ params }: Props) {
  const { range } = await params;
  const r = getGerdaRange(range);
  if (!r) notFound();

  const url = `${GERDA_URL}/${r.slug}`;
  const designs = gerdaDesigns.filter((d) => d.ranges.includes(r.slug));
  const groups = seriesOrder.map((s) => ({ series: s, designs: designs.filter((d) => d.series === s) })).filter((g) => g.designs.length > 0);
  const others = gerdaRanges.filter((o) => o.slug !== r.slug);
  const isPrime = r.slug === "thermo-prime-75";

  // Product schema follows the site rule: no offers block and no price. Brand
  // and manufacturer are Gerda; SteelR appears only as the page publisher.
  const productSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: r.fullName,
    description: r.metaDescription,
    image: [r.hero, ...r.gallery].map((g) => `https://steelr.co.uk${g.src}`),
    brand: { "@type": "Brand", name: "Gerda" },
    manufacturer: { "@type": "Organization", name: "Gerda", url: "https://gerda.pl/en/" },
    countryOfOrigin: { "@type": "Country", name: "Poland" },
    category: "Residential Entrance Door",
    url,
    additionalProperty: r.schemaProperties.map((p) => ({ "@type": "PropertyValue", name: p.name, value: p.value })),
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
      { "@type": "ListItem", position: 2, name: "Gerda Doors", item: GERDA_URL },
      { "@type": "ListItem", position: 3, name: r.fullName, item: url },
    ],
  });

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: r.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: productSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <Banner eyebrow="The Gerda Collection" title={r.fullName} />
      <Breadcrumbs trail={[{ href: "/", label: "Home" }, { href: "/gerda-doors", label: "Gerda Doors" }, { label: r.name }]} />

      {/* Overview. The heading and key facts come first in the markup, so a
          phone and a screen reader both meet them before the tall door photo.
          From the lg breakpoint the photo is moved to the left column. */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:order-2 lg:col-span-7">
            <Eyebrow>{r.eyebrow}</Eyebrow>
            <Display as="h1" size="lg" className="mb-6">
              {r.h1}
            </Display>
            {r.intro.map((p) => (
              <Body key={p} className="mb-5">
                {p}
              </Body>
            ))}
            <div className="mt-8 mb-8">
              <FactGrid facts={r.keyFacts} columns={2} />
            </div>
            <p className="mb-8" style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 12, lineHeight: 1.7, color: BROWN }}>
              {r.factsFootnote}
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <GoldButton href="#gerda-enquiry">Enquire About {r.name}</GoldButton>
              <TextLink href="#designs">See the {designs.length} designs</TextLink>
            </div>
          </div>
          <figure className="lg:order-1 lg:col-span-5" style={{ margin: 0 }}>
            <div className="relative overflow-hidden rounded-[4px]" style={{ aspectRatio: `${r.hero.w} / ${r.hero.h}` }}>
              <Image src={r.hero.src} alt={r.hero.alt} fill priority unoptimized className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
            </div>
            {r.hero.caption && (
              <figcaption className="mt-3" style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 12, color: BROWN }}>
                {r.hero.caption}
              </figcaption>
            )}
          </figure>
        </div>
      </section>

      {/* Construction */}
      <section className="py-16 md:py-24 px-6 md:px-16" style={{ background: "#ede8df" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Eyebrow>How it is built</Eyebrow>
            <Display className="mb-4">{r.constructionTitle}</Display>
            <Body className="mb-8">{r.constructionIntro}</Body>
            <dl style={{ margin: 0 }}>
              {r.features.map((f) => (
                <div key={f.title} style={{ borderTop: `1px solid ${HAIRLINE}`, padding: "16px 0" }}>
                  <dt style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 14, color: INK }}>{f.title}</dt>
                  <dd style={{ fontFamily: BODY_FONT, fontWeight: 300, fontSize: 15, lineHeight: 1.75, color: BROWN, margin: "4px 0 0" }}>{f.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="lg:col-span-5" style={{ margin: 0 }}>
            <div className="rounded-[4px] overflow-hidden" style={{ background: "#ffffff", border: `1px solid ${HAIRLINE}`, padding: 24 }}>
              <Image
                src={r.construction.src}
                alt={r.construction.alt}
                width={r.construction.w}
                height={r.construction.h}
                unoptimized
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <figcaption className="mt-3" style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 12, color: BROWN }}>
              {r.construction.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Designs */}
      <section id="designs" className="bg-cream py-16 md:py-24 px-6 md:px-16" style={{ scrollMarginTop: 90 }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Door designs</Eyebrow>
          <Display className="mb-4">
            {designs.length} designs in the {r.name} range
          </Display>
          <Body className="mb-6 max-w-3xl">{r.designsIntro}</Body>
          <nav aria-label={`${r.name} design series`} className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
            {groups.map((g) => (
              <a
                key={g.series}
                href={`#${anchor(g.series)}`}
                className={`link-gold-underline inline-block py-2 ${FOCUS_DARK}`}
                style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: INK }}
              >
                {g.series} ({g.designs.length})
              </a>
            ))}
          </nav>
          <div className="space-y-16">
            {groups.map((g) => {
              const size = r.seriesSizes.find((s) => s.series === g.series);
              return (
                <div key={g.series} id={anchor(g.series)} style={{ scrollMarginTop: 100 }}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8" style={{ borderTop: `1px solid ${INK}`, paddingTop: 20 }}>
                    <div className="lg:col-span-4">
                      <Display as="h3" size="sm">
                        {g.series}
                      </Display>
                      {size && (
                        <p className="mt-2" style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 12, color: BROWN, lineHeight: 1.6 }}>
                          Width {size.width} · Height {size.height}
                        </p>
                      )}
                    </div>
                    <div className="lg:col-span-8">
                      <Body>
                        {gerdaSeries[g.series].blurb}
                        {size?.note ? ` ${size.note}` : ""}
                      </Body>
                    </div>
                  </div>
                  <DesignGrid designs={g.designs} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installed examples */}
      <section className="py-16 md:py-24 px-6 md:px-16" style={{ background: INK }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow light>Gallery</Eyebrow>
          <Display light className="mb-10">
            {r.name} in place
          </Display>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {r.gallery.map((g) => (
              <figure key={g.src} style={{ margin: 0 }}>
                <div className="relative overflow-hidden rounded-[3px]" style={{ aspectRatio: "4 / 5" }}>
                  <Image src={g.src} alt={g.alt} fill unoptimized loading="lazy" className="object-cover" style={{ objectPosition: g.position ?? "center" }} sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <figcaption className="mt-3" style={{ fontFamily: BODY_FONT, fontWeight: 300, fontSize: 12, lineHeight: 1.6, color: "rgba(245,240,232,0.82)" }}>
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Colours and options */}
      <section className="bg-cream py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <Eyebrow>Finishes</Eyebrow>
            <Display className="mb-4">{r.name} colours</Display>
            <Body className="mb-8">{r.coloursIntro}</Body>
            <SpecTable
              caption={`${r.fullName} standard colours with maximum door height`}
              head={["Colour", "Ref", "Max door height"]}
              rows={gerdaColours.map((c) => [c.name, c.code, isPrime ? c.maxHeightPrime : c.maxHeight])}
            />
            <Body className="mt-6">Also available: {gerdaExtraColours.join(", ")}, and the RAL colour range.</Body>
          </div>
          <div>
            <Eyebrow>Options</Eyebrow>
            <Display className="mb-4">Hardware, glass and access</Display>
            <Body className="mb-8">{r.optionsIntro}</Body>
            <dl style={{ margin: 0 }}>
              {[...r.options, ...gerdaOptions].map((o) => (
                <div key={o.label} style={{ borderTop: `1px solid ${HAIRLINE}`, padding: "16px 0" }}>
                  <dt style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: BROWN }}>{o.label}</dt>
                  <dd style={{ fontFamily: BODY_FONT, fontWeight: 300, fontSize: 15, lineHeight: 1.75, color: INK, margin: "6px 0 0" }}>{o.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 md:px-16" style={{ background: "#ede8df" }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Questions</Eyebrow>
          <Display className="mb-8">{r.fullName}: common questions</Display>
          <FaqList faqs={r.faqs} />
        </div>
      </section>

      {/* Other ranges */}
      <section className="bg-cream py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>The rest of the collection</Eyebrow>
          <Display className="mb-10">Other Gerda ranges</Display>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/gerda-doors/${o.slug}`}
                className={`group block p-7 border border-[rgba(26,26,24,0.14)] hover:border-[#c9a96e] transition-colors duration-200 ${FOCUS_DARK}`}
              >
                <Display as="h3" size="sm" className="mb-2">
                  {o.fullName} <span aria-hidden="true" style={{ color: "#c9a96e" }}>&rarr;</span>
                </Display>
                <Body>{o.cardSummary}</Body>
              </Link>
            ))}
            <Link
              href="/collection"
              className={`group block p-7 border border-[rgba(26,26,24,0.14)] hover:border-[#c9a96e] transition-colors duration-200 ${FOCUS_DARK}`}
            >
              <Display as="h3" size="sm" className="mb-2">
                SteelR bespoke collection <span aria-hidden="true" style={{ color: "#c9a96e" }}>&rarr;</span>
              </Display>
              <Body>Made to measure steel entrance doors to your opening, in any RAL colour and at higher security ratings.</Body>
            </Link>
          </div>
        </div>
      </section>

      <div id="gerda-enquiry" style={{ scrollMarginTop: 90 }}>
        <QuickEnquiry source={`gerda-${r.slug}`} contextLabel={r.fullName} heading={`Enquire about ${r.fullName}`} />
      </div>
    </>
  );
}
