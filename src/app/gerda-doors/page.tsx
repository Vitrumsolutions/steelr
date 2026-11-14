import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuickEnquiry from "@/components/QuickEnquiry";
import { gerdaDesigns, type GerdaSeries } from "@/data/gerda-designs";
import {
  GERDA_URL,
  gerdaColours,
  gerdaComparison,
  gerdaExtraColours,
  gerdaHub,
  gerdaHubFaqs,
  gerdaOptions,
  gerdaRanges,
  gerdaSeries,
} from "@/data/gerda";
import {
  Banner,
  Body,
  Breadcrumbs,
  BROWN,
  DesignGrid,
  Display,
  Eyebrow,
  FaqList,
  GoldButton,
  HAIRLINE,
  INK,
  SpecTable,
  TextLink,
} from "@/components/gerda/ui";

export const metadata: Metadata = {
  title: gerdaHub.metaTitle,
  description: gerdaHub.metaDescription,
  alternates: { canonical: GERDA_URL },
  openGraph: {
    title: gerdaHub.metaTitle,
    description: gerdaHub.metaDescription,
    url: GERDA_URL,
    type: "website",
    images: [{ url: "/images/gerda/og-gerda.jpg", width: 1200, height: 630, alt: gerdaHub.ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: gerdaHub.metaTitle,
    description: gerdaHub.metaDescription,
    images: ["/images/gerda/og-gerda.jpg"],
  },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    { "@type": "ListItem", position: 2, name: "Gerda Doors", item: GERDA_URL },
  ],
});

const collectionSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${GERDA_URL}#collection`,
  name: gerdaHub.schemaName,
  description: gerdaHub.metaDescription,
  url: GERDA_URL,
  isPartOf: { "@type": "WebSite", url: "https://steelr.co.uk" },
  about: { "@type": "Brand", name: "Gerda" },
  provider: { "@id": "https://steelr.co.uk/#business" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: gerdaRanges.length,
    itemListElement: gerdaRanges.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.fullName,
      url: `${GERDA_URL}/${r.slug}`,
    })),
  },
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: gerdaHubFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

// One representative design per series for the series overview strip.
const seriesOrder: GerdaSeries[] = ["Tempo", "Quadro", "Air Glass", "Elite 3D", "Classic"];

export default function GerdaDoorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: collectionSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <Banner eyebrow="Supplied and installed by SteelR" title="The Gerda Collection" />
      <Breadcrumbs trail={[{ href: "/", label: "Home" }, { label: "Gerda Doors" }]} />

      {/* Intro */}
      <section className="bg-cream ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>{gerdaHub.eyebrow}</Eyebrow>
            <Display as="h1" size="lg" className="mb-6">
              {gerdaHub.h1}
            </Display>
            {gerdaHub.intro.map((p) => (
              <Body key={p} className="mb-5">
                {p}
              </Body>
            ))}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-8">
              <GoldButton href="#gerda-enquiry">Enquire About a Gerda Door</GoldButton>
              <TextLink href="#ranges">Compare the three ranges</TextLink>
            </div>
          </div>
          <figure className="lg:col-span-6" style={{ margin: 0 }}>
            <div className="relative overflow-hidden rounded-[4px]" style={{ aspectRatio: "1226 / 827" }}>
              <Image
                src={gerdaHub.heroImage.src}
                alt={gerdaHub.heroImage.alt}
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 12, color: BROWN }}>
              {gerdaHub.heroImage.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Three ranges. The leaf thickness numeral is the range's own identifier (it is in the product name), so it leads each card. */}
      <section id="ranges" className="py-16 md:py-24 px-6 md:px-16" style={{ background: "#ede8df", scrollMarginTop: 90 }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Three ranges</Eyebrow>
          <Display className="mb-4">Choose by thermal performance and locking</Display>
          <Body className="mb-12 max-w-3xl">{gerdaHub.rangesIntro}</Body>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gerdaRanges.map((r) => (
              <article key={r.slug} className="flex flex-col rounded-[4px] overflow-hidden" style={{ background: "#f5f0e8", border: `1px solid ${HAIRLINE}` }}>
                <Link href={`/gerda-doors/${r.slug}`} className="group block img-zoom relative overflow-hidden" style={{ aspectRatio: "4 / 5" }} tabIndex={-1} aria-hidden="true">
                  <Image src={r.hero.src} alt={r.hero.alt} fill unoptimized className="object-cover" style={{ objectPosition: r.hero.position ?? "center" }} sizes="(max-width: 768px) 100vw, 33vw" />
                </Link>
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontWeight: 300, fontSize: 56, lineHeight: 0.9, color: INK }}>
                      {r.leafMm}
                    </span>
                    <span style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: BROWN }}>
                      mm door leaf
                    </span>
                  </div>
                  <Display as="h3" size="sm" className="mb-3">
                    {r.fullName}
                  </Display>
                  <Body className="mb-5">{r.cardSummary}</Body>
                  <dl className="mb-6" style={{ margin: 0 }}>
                    {r.cardFacts.map((f) => (
                      <div key={f.label} className="flex justify-between gap-4" style={{ borderTop: `1px solid ${HAIRLINE}`, padding: "9px 0" }}>
                        <dt style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 12, color: BROWN }}>{f.label}</dt>
                        <dd style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 500, fontSize: 13, color: INK, margin: 0, textAlign: "right" }}>{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-auto pt-2">
                    <TextLink href={`/gerda-doors/${r.slug}`}>View {r.name}</TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-side specification */}
      <section className="bg-cream py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>Side by side</Eyebrow>
          <Display className="mb-4">Gerda range specification compared</Display>
          <Body className="mb-10 max-w-3xl">{gerdaComparison.intro}</Body>
          <SpecTable caption="Gerda Optima 60, Thermo Premium 75 and Thermo Prime 75 specification compared" head={gerdaComparison.head} rows={gerdaComparison.rows} />
          <p className="mt-5" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: 1.7, color: BROWN }}>
            {gerdaComparison.footnote}
          </p>
        </div>
      </section>

      {/* Bespoke or Gerda */}
      <section className="py-16 md:py-24 px-6 md:px-16" style={{ background: INK }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow light>Two different doors</Eyebrow>
            <Display light className="mb-5">
              {gerdaHub.versus.title}
            </Display>
            <Body light>{gerdaHub.versus.intro}</Body>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {gerdaHub.versus.columns.map((c) => (
              <div key={c.title} style={{ borderTop: "1px solid rgba(201,169,110,0.4)", paddingTop: 20 }}>
                <Display as="h3" size="sm" light className="mb-4">
                  {c.title}
                </Display>
                <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {c.points.map((pt) => (
                    <li key={pt} style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "rgba(245,240,232,0.82)", padding: "7px 0" }}>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <Link
                    href={c.href}
                    className="link-gold-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a96e]"
                    style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 400, fontSize: 13, color: "#c9a96e", letterSpacing: "0.04em" }}
                  >
                    {c.linkLabel} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design series */}
      <section className="bg-cream py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Design series</Eyebrow>
          <Display className="mb-4">{gerdaDesigns.length} door designs across five series</Display>
          <Body className="mb-12 max-w-3xl">{gerdaHub.seriesIntro}</Body>
          <div className="space-y-14">
            {seriesOrder.map((s) => {
              const all = gerdaDesigns.filter((d) => d.series === s);
              const info = gerdaSeries[s];
              return (
                <div key={s} className="grid grid-cols-1 lg:grid-cols-12 gap-8" style={{ borderTop: `1px solid ${HAIRLINE}`, paddingTop: 28 }}>
                  <div className="lg:col-span-4">
                    <Display as="h3" size="sm" className="mb-2">
                      {s}
                    </Display>
                    <p className="mb-3" style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: "0.08em", color: BROWN }}>
                      {all.length} designs · {info.availableIn}
                    </p>
                    <Body>{info.blurb}</Body>
                  </div>
                  <div className="lg:col-span-8">
                    <DesignGrid designs={info.showcase.map((code) => all.find((d) => d.code === code)).filter((d): d is (typeof all)[number] => Boolean(d))} />
                  </div>
                </div>
              );
            })}
          </div>
          <Body className="mt-12">
            Every design is shown with its name on the range pages:{" "}
            {gerdaRanges.map((r, i) => (
              <span key={r.slug}>
                <Link href={`/gerda-doors/${r.slug}#designs`} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a1a18]" style={{ color: INK, fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 3 }}>
                  {r.name} designs
                </Link>
                {i < gerdaRanges.length - 1 ? ", " : "."}
              </span>
            ))}
          </Body>
        </div>
      </section>

      {/* Colours and options */}
      <section className="py-16 md:py-24 px-6 md:px-16" style={{ background: "#ede8df" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <Eyebrow>Finishes</Eyebrow>
            <Display className="mb-4">Colours and woodgrains</Display>
            <Body className="mb-8">{gerdaHub.coloursIntro}</Body>
            <SpecTable
              caption="Gerda standard door colours with maximum door height"
              head={["Colour", "Ref", "Max height, Optima 60 and Thermo Premium 75", "Max height, Thermo Prime 75"]}
              rows={gerdaColours.map((c) => [c.name, c.code, c.maxHeight, c.maxHeightPrime])}
            />
            <Body className="mt-6">
              Also available: {gerdaExtraColours.join(", ")}, and the RAL colour range. {gerdaHub.twoColour}
            </Body>
          </div>
          <div>
            <Eyebrow>Options</Eyebrow>
            <Display className="mb-4">Glass, hardware and access</Display>
            <Body className="mb-8">{gerdaHub.optionsIntro}</Body>
            <dl style={{ margin: 0 }}>
              {gerdaOptions.map((o) => (
                <div key={o.label} style={{ borderTop: `1px solid ${HAIRLINE}`, padding: "16px 0" }}>
                  <dt style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: BROWN }}>
                    {o.label}
                  </dt>
                  <dd style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.75, color: INK, margin: "6px 0 0" }}>{o.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Questions</Eyebrow>
          <Display className="mb-8">Gerda doors: common questions</Display>
          <FaqList faqs={gerdaHubFaqs} />
        </div>
      </section>

      <div id="gerda-enquiry" style={{ scrollMarginTop: 90 }}>
        <QuickEnquiry source="gerda-doors" contextLabel="the Gerda collection" heading="Enquire about a Gerda door" />
      </div>
    </>
  );
}
