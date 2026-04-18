import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "How Steel Front Door Pricing Works | UK | SteelR",
  description:
    "Honest explainer on how bespoke steel front door pricing works in the UK. Every project is individually quoted. This page sets out the factors that actually move the number so you can assess quotes from any supplier with clear eyes.",
  alternates: { canonical: "https://steelr.co.uk/steel-front-door-cost-uk" },
  openGraph: {
    title: "How Steel Front Door Pricing Works | UK | SteelR",
    description:
      "The factors that actually move the number on a bespoke steel front door. Honest, plain English, no guesswork.",
    url: "https://steelr.co.uk/steel-front-door-cost-uk",
    type: "website",
  },
};

const faqs = [
  {
    question: "Why do you not publish prices for steel front doors?",
    answer:
      "Because there is no meaningful price that applies to every project. Every SteelR door is manufactured to the specific dimensions and specification of a single property. The aperture dimensions, the security rating, the finish, the hardware, the glazing, the sidelights and the installation access profile all change the cost materially. A published price would either be a misleading minimum that rarely applies or an intimidating maximum that also rarely applies. The honest approach is to quote against the actual project after a survey.",
  },
  {
    question: "Can I get a rough price range before the survey?",
    answer:
      "Yes. During the initial discovery call we can give you a realistic range once we understand the property type, rough dimensions, target security rating, whether sidelights or a fanlight are in scope, and the broad aesthetic direction. It is not a quote, it is a sanity check that the project is in the right ballpark for your budget before we book a survey visit. The formal written quotation is produced within five working days of the on-site survey.",
  },
  {
    question: "What is the biggest single driver of cost on a steel front door?",
    answer:
      "Size is usually the largest factor. A single-leaf door is cheaper than a double-door configuration, and a single-leaf door with no sidelights is cheaper than one with paired sidelights and a fanlight. After size, the next largest driver is the security specification. SR3 as standard is included in every SteelR quote. SR4 under LPS 1175 Issue 8, the commercial-grade upgrade, adds cost because the construction, hardware and certification are materially more expensive.",
  },
  {
    question: "Does finish or colour affect the price?",
    answer:
      "In most cases no. SteelR doors are finished in any RAL colour from the full Classic range, with dual-colour available so the inside can differ from the outside. This is included in the base price rather than an upgrade. The exception is some specialist finishes such as genuine metallic coatings or polished stainless hardware, which carry a component uplift reflecting the material itself rather than the application.",
  },
  {
    question: "Is there a deposit or staged payment structure?",
    answer:
      "Yes. Typically a deposit is taken at design sign-off to cover steel, materials and production scheduling. A stage payment is taken at the point manufacture begins. The final balance is payable on installation and handover. The exact structure is set out on the written quotation and can be discussed during the design stage. Nothing is chargeable before the design has been agreed in writing.",
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
      name: "How Steel Front Door Pricing Works",
      item: "https://steelr.co.uk/steel-front-door-cost-uk",
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

export default function CostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="How Steel Front Door Pricing Works"
        h1="How Steel Front Door Pricing Works in the UK"
        intro={{
          pretitle: "Honest pricing explainer",
          title:
            "We do not publish fixed prices. Here is exactly what moves the number on a bespoke steel front door",
          body: (
            <>
              Pricing pages in this category usually fall into two
              patterns. The first publishes a teaser minimum designed to
              draw a click, which almost never reflects the real project
              cost once the survey is complete. The second refuses to
              discuss pricing at all until the salesperson is in the
              property. We are not going to do either. This page sets
              out, in plain English, the factors that actually move the
              cost of a bespoke steel front door in the UK, so that you
              can assess a SteelR quote and any competing quote with
              clear eyes.
            </>
          ),
          body2: (
            <>
              The number you see on any specific quote is a function of
              these factors applied to your project. The rest of this
              page explains each factor and how it interacts with the
              others. No fixed numbers, because no fixed numbers would
              be honest given the bespoke nature of the product.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Factor one",
            title: "Size of the opening",
            body: (
              <>
                Size is usually the largest single factor. A
                single-leaf door is less expensive than a double-door
                configuration, and a single-leaf door with no sidelights
                is less expensive than one with paired sidelights and a
                fanlight. Larger apertures use more steel, more glazing,
                heavier hardware and more manufacturing time in the
                factory. Installation access may also require additional
                handling on larger configurations. Expect size to be the
                first number that changes when you change the
                specification.
              </>
            ),
          },
          {
            pretitle: "Factor two",
            title: "Security rating",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point locking mechanism on an SR3-rated steel front door",
            },
            body: (
              <>
                Every SteelR door is PAS 24 certified and SR3 rated to
                BS EN 1627 Class 3 as standard. The SR3 construction,
                hardware specification and testing certification are
                included in the base quote. There is no cheaper
                non-SR3 SteelR door. What adds cost is the SR4 upgrade
                under LPS 1175 Issue 8, the commercial-grade certification
                used on data centres and bank vaults. SR4 requires
                heavier construction, different hardware components and
                a separate certification process, all of which add cost.
              </>
            ),
            body2: (
              <>
                More detail on the two standards sits on the{" "}
                <Link
                  href="/sr3-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR3 residential steel door page
                </Link>{" "}
                and the{" "}
                <Link href="/security" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  security page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Factor three",
            title: "Fire rating",
            body: (
              <>
                FD30S fire and smoke rating is standard on every SteelR
                door. It is already in the base price. FD60, the
                sixty-minute fire rating, requires heavier construction,
                thicker intumescent seals, fire-rated glazing in any
                glazed section, and separate certification. FD60 is
                required in specific new-build and flat entrance
                applications, and adds cost reflective of those
                specification requirements.
              </>
            ),
            body2: (
              <>
                More detail on{" "}
                <Link
                  href="/fire-rated-fd30-front-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  FD30 and FD60 fire rated front doors
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Factor four",
            title: "Hardware, glazing and finish",
            body: (
              <>
                Hardware is selected from polished chrome, brushed satin,
                antique brass, polished brass, matt black and brushed
                gold. Most finishes sit in a similar price band. The
                exceptions are specialist options such as solid polished
                stainless hardware or hand-finished forged brass pieces,
                which carry a component uplift that reflects the material
                cost itself rather than any pricing uplift from SteelR.
              </>
            ),
            body2: (
              <>
                Glazing uplifts are driven by the specification of the
                unit. A clear double-glazed pane is the baseline. Triple
                glazing, fire-rated glazing, laminated security glass
                above the standard SBD requirement, stained or decorative
                glass, and obscured glazing with specific visual
                properties all carry cost changes proportional to the
                glazing specification itself. Any RAL colour is included
                in the base price, with dual-colour available at no
                additional cost.
              </>
            ),
          },
          {
            pretitle: "Factor five",
            title: "Installation access and location",
            body: (
              <>
                Installation itself is included in the quoted price. What
                can change the quote is the physical access profile of
                the installation site. A standard terrace frontage is the
                baseline. Mansion-block installations with managed access,
                central London pedestrianised streets requiring pedestrian
                delivery, upper-floor sidelight installations requiring
                scaffolding, and listed-building projects requiring
                heritage coordination with the planning authority all
                carry additional project management time.
              </>
            ),
            body2: (
              <>
                Geographically, SteelR does not charge a regional
                surcharge anywhere on the UK mainland. A project in
                Aberdeen is priced the same as a project in Aldershot
                for like-for-like specification. See the{" "}
                <Link href="/areas" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  areas directory
                </Link>{" "}
                for regional coverage.
              </>
            ),
          },
          {
            pretitle: "Factor six",
            title: "Lead time",
            body: (
              <>
                Standard lead time is eight to twelve weeks from first
                enquiry to finished door in place. That is included in
                the base price. Genuinely urgent projects, requiring
                priority slot in manufacture or accelerated certification
                scheduling, can sometimes be accommodated against a rush
                fee reflecting the operational impact on other projects
                in the factory. This is discussed during the design stage
                rather than at quote stage, because an accelerated
                programme is only possible for certain specifications.
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
              description: "The full SteelR model, explained end to end.",
            },
            {
              href: "/process",
              label: "Our process",
              description: "How survey, design, manufacture and installation work.",
            },
            {
              href: "/steel-front-door-vs-composite",
              label: "Steel vs composite front doors",
              description: "Upfront cost vs total cost of ownership, honest comparison.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Book a survey for a written quotation"
      />
    </>
  );
}
