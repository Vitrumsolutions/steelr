import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Thermally Broken Steel Front Door | U-Values and Condensation Explained | SteelR",
  description:
    "A thermally broken steel front door solves the cold-bridge problem that makes budget steel doors condense. This page explains the thermal break, why it matters, achievable U-values, and how SteelR engineers the break into every door.",
  alternates: { canonical: "https://steelr.co.uk/thermally-broken-steel-front-door" },
  openGraph: {
    title: "Thermally Broken Steel Front Door | SteelR",
    description:
      "What a thermal break is, why budget steel doors perform badly on U-value and condensation, and how a correctly engineered thermal break solves it.",
    url: "https://steelr.co.uk/thermally-broken-steel-front-door",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a thermal break on a steel front door?",
    answer:
      "A thermal break is a non-conductive polymer section engineered into the door and frame profile between the outer and inner skins. Steel conducts heat efficiently. Without a thermal break, heat moves directly through the door from warm side to cold side. The thermal break interrupts the conductive path, separating the cold outer skin from the warm inner skin. The door stays warm on the inside even in sub-zero external conditions, and condensation is prevented.",
  },
  {
    question: "Why do some steel front doors suffer from condensation?",
    answer:
      "Condensation on a steel front door almost always indicates the door does not have a thermal break, or the break is poorly engineered. Without a thermal break, the inner skin of the door reaches the dew point temperature of indoor air in cold weather, and water condenses on it. Over time this causes the internal finish to deteriorate, and in extreme cases the timber sub-frame around the door to decay. A correctly specified thermally broken door eliminates the problem.",
  },
  {
    question: "What U-value can a thermally broken steel door achieve?",
    answer:
      "A correctly engineered thermally broken steel door achieves U-values comparable to premium composite and timber doors. Typical values range from 1.0 to 1.4 W/m²K depending on glazing specification, insulation core density and any sidelight configuration. That meets or exceeds the thermal performance required under Part L of the Building Regulations for new residential installations. Specific U-value calculations for your project are provided as part of the design specification.",
  },
  {
    question: "Is a thermally broken steel door more expensive?",
    answer:
      "The engineering cost is built into the base SteelR specification. Every SteelR door is thermally broken as standard. There is no thermally-broken upgrade because there is no non-thermally-broken SteelR door. Budget steel doors sold into the UK market that are not thermally broken are a materially different product, not a cheaper version of the same thing.",
  },
  {
    question: "Does the thermal break affect security?",
    answer:
      "No. A correctly engineered thermal break sits inside the door and frame profile and does not compromise the structural integrity of the steel. The security certification is against the complete door system including the break. SR3 and SR4 certifications apply to the door as manufactured, thermal break included. The thermal break is a thermal engineering solution, not a security compromise.",
  },
];

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Thermally Broken Steel Front Door",
      item: "https://steelr.co.uk/thermally-broken-steel-front-door",
    },
  ],
});

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export default function ThermallyBrokenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Thermally Broken Steel Front Doors"
        h1="Thermally Broken Steel Front Door — U-Values and Condensation Explained"
        intro={{
          pretitle: "The thermal engineering behind a warm steel door",
          title:
            "Why budget steel doors condense, and how a correctly engineered thermal break solves it",
          body: (
            <>
              Steel conducts heat. That is a physical property of the
              material and it is not something that changes. A steel door
              with no thermal engineering is effectively a large, flat
              heat pipe connecting the cold outside of the property to
              the warm inside. In cold weather, heat moves outward and
              water condenses on the inner face of the door. Over years,
              this causes finish deterioration and, at the extreme, decay
              of the timber sub-frame the door is installed into.
            </>
          ),
          body2: (
            <>
              A thermally broken steel door solves this problem
              structurally. This page explains what a thermal break is,
              why it matters for U-value, condensation and comfort, and
              why a correctly engineered thermal break is standard on
              every SteelR door rather than an optional upgrade.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "The thermal break itself",
            title: "A non-conductive polymer section inside the profile",
            body: (
              <>
                A thermal break is an insulating polymer section, typically
                a high-density rigid polyamide reinforced with glass fibre,
                extruded into the door and frame profile between the outer
                and inner steel skins. It runs the full height and width
                of the door and frame, sits inside the visible door
                profile and is invisible from the outside once the door is
                installed. The polymer does not conduct heat, so the
                conductive path from cold outer skin to warm inner skin
                is interrupted.
              </>
            ),
            body2: (
              <>
                The break works because it replaces a continuous piece of
                steel with a two-part assembly: cold steel outside, warm
                steel inside, polymer between them. Heat can no longer
                travel efficiently from one to the other. The inner skin
                stays close to room temperature even when the outer skin
                is at sub-zero, and condensation is prevented because the
                inner surface never reaches the dew point.
              </>
            ),
          },
          {
            pretitle: "U-values",
            title: "What a thermally broken steel door actually achieves",
            image: {
              src: "/images/gallery/steelr-grey-panelled-lever-handle.jpg",
              alt: "Grey panelled thermally broken steel front door with lever handle",
            },
            body: (
              <>
                Thermal performance is measured as a U-value in watts per
                square metre per kelvin (W/m²K). Lower is better. Part L
                of the UK Building Regulations sets minimum U-values for
                new-build residential installations, currently 1.4 W/m²K
                for replacement doors and 1.0 W/m²K for new-build
                envelopes under the 2021 Approved Document L update.
              </>
            ),
            body2: (
              <>
                A thermally broken SteelR door publishes U-values from
                1.0 to 1.4 W/m²K depending on the specific configuration.
                Solid panels perform best. Glazed configurations depend on
                the glazing unit specification, which is typically triple
                glazed with argon fill on our higher thermal performance
                specs. Specific U-value calculations against Part L
                compliance are provided as part of the written design
                specification for every project.
              </>
            ),
            list: [
              "Part L minimum for replacement doors: 1.4 W/m²K",
              "Part L minimum for new-build envelopes: 1.0 W/m²K",
              "Typical thermally broken SteelR range: 1.0 to 1.4 W/m²K",
              "Glazed configurations depend on glazing unit specification",
            ],
          },
          {
            pretitle: "Why budget steel doors fail",
            title: "If the door has no thermal break, it will condense",
            body: (
              <>
                The most common negative review pattern you will find
                online for steel front doors in the UK is condensation
                on the inner face. The second most common is cold draughts
                at the door edges. Both are symptoms of the same problem:
                the door was not thermally engineered. The steel is acting
                as a heat pipe, the inner face is reaching dew point in
                cold weather, water is condensing on it, and the building
                fabric around the door is being compromised.
              </>
            ),
            body2: (
              <>
                This is not a problem with steel as a material. It is a
                problem with steel doors that skip the thermal break to
                hit a lower price point. Budget imported steel doors in
                the residential UK market frequently skip the break
                because it adds manufacturing complexity and cost. The
                result performs worse than a correctly specified composite
                or timber door. A correctly thermally broken steel door
                outperforms both.
              </>
            ),
          },
          {
            pretitle: "Standard on every door",
            title: "Not an upgrade on the SteelR specification",
            body: (
              <>
                Every SteelR door is thermally broken as standard. There
                is no non-thermally-broken option in our catalogue. The
                engineering is built into the base profile. This is not
                the case with every steel door in the market, and it is
                worth confirming explicitly when comparing quotes from
                other suppliers.
              </>
            ),
            body2: (
              <>
                Alongside the thermal break, every SteelR door is PAS 24
                certified, SR3 rated to BS EN 1627 Class 3, Secured by
                Design approved and FD30S fire and smoke rated. SR4 under
                LPS 1175 Issue 8 is available as a commercial-grade
                upgrade. The full specification is set out on the{" "}
                <Link
                  href="/security-specification"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  security specification page
                </Link>
                .
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/bespoke-steel-front-doors-uk",
              label: "Bespoke steel front doors UK",
              description: "The full SteelR service model from design through installation.",
            },
            {
              href: "/steel-front-door-vs-composite",
              label: "Steel vs composite front doors",
              description: "Side-by-side comparison on security, longevity and thermal performance.",
            },
            {
              href: "/uk-steel-doors-vs-imported",
              label: "UK-made vs imported steel doors",
              description: "Why imported budget steel doors often skip the thermal break, and what it costs you.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Specify the right thermal performance"
        enquirySource="hub-thermal"
        enquiryContextLabel="Thermally Broken Steel Doors"
      />
    </>
  );
}
