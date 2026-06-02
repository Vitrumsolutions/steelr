import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "How Steel Front Door Pricing Works | UK | SteelR",
  description:
    "Honest explainer on bespoke steel front door pricing in the UK. Every project is individually quoted. The factors that actually move the number.",
  alternates: { canonical: "https://steelr.co.uk/steel-front-door-cost-uk" },
  openGraph: {
    title: "How Steel Front Door Pricing Works | UK | SteelR",
    description:
      "The factors that actually move the number on a bespoke steel front door. Honest, plain English, no guesswork.",
    url: "https://steelr.co.uk/steel-front-door-cost-uk",
    type: "website",
    images: ["/og-image.png"],
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
      "Size is usually the largest factor. A single-leaf door is cheaper than a double-door configuration, and a single-leaf door with no sidelights is cheaper than one with paired sidelights and a fanlight. After size, the next largest driver is the security tier. The Standard tier (BS EN 1627:2011 RC4 single leaf, unglazed plus PAS 24, SBD, FD30S) is included in every SteelR quote. The LPS 1175 SR3 Enhanced upgrade (LPCB police-preferred), LPS 1175 SR4 D10 Issue 8 Commercial-grade upgrade (used in data centres and bank vaults) and LPS 1673 attack-resistance (Ultra-high, by enquiry) each add cost because the construction, hardware and certification are materially more expensive at each step.",
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

      <section aria-labelledby="cost-quick-answer" className="mb-12 rounded-2xl border border-gold/30 bg-cream/40 p-8" style={{ maxWidth: "48rem", margin: "2.5rem auto", padding: "2rem" }}>
        <h2 id="cost-quick-answer" className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: "#8a6f4e" }}>How much does a bespoke steel front door cost in the UK?</h2>
        <p className="text-lg leading-relaxed" style={{ color: "#1a1a18" }}>
          A bespoke steel front door from a UK manufacturer typically sits in the high four to low six figure range, depending on size, security rating, fire rating, hardware specification, glazing complexity, installation access, and lead-time priority. The factors below explain what drives the figure on any given project. SteelR quotes are written for one specific aperture, one specific brief, and one specific delivery window. No fixed numbers are published because no fixed numbers would be honest for a made-to-measure product.
        </p>
      </section>

      <section aria-labelledby="cost-tier-table" style={{ maxWidth: "48rem", margin: "0 auto 2.5rem", padding: "0 2rem" }}>
        <h2 id="cost-tier-table" className="text-2xl font-light text-dark mb-6">Where SteelR sits in the UK steel-door price band</h2>
        <p className="mb-4 text-dark/80">Symbol guide: £ = entry-level personnel door; ££ = stock contemporary steel doorset; £££ = made-to-measure premium with PAS 24; ££££ = bespoke residential with LPS 1175 SR3 and full hardware/glazing brief; £££££ = bespoke residential with SR4 commercial-grade or LPS 1673 ultra-high upgrade.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #c9a96e" }}>
                <th className="py-3 pr-4 font-medium" style={{ color: "#1a1a18" }}>Tier</th>
                <th className="py-3 pr-4 font-medium" style={{ color: "#1a1a18" }}>Typical category</th>
                <th className="py-3 pr-4 font-medium" style={{ color: "#1a1a18" }}>Price band</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #c9a96e33" }}>
                <td className="py-3 pr-4" style={{ color: "#1a1a18" }}>1</td>
                <td className="py-3 pr-4" style={{ color: "#1a1a18" }}>Budget stock steel personnel door (factory next-day delivery)</td>
                <td className="py-3 pr-4 font-medium" style={{ color: "#8a6f4e" }}>£</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #c9a96e33" }}>
                <td className="py-3 pr-4" style={{ color: "#1a1a18" }}>2</td>
                <td className="py-3 pr-4" style={{ color: "#1a1a18" }}>Stock contemporary steel doorset (UK or imported, fixed sizes)</td>
                <td className="py-3 pr-4 font-medium" style={{ color: "#8a6f4e" }}>££</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #c9a96e33" }}>
                <td className="py-3 pr-4" style={{ color: "#1a1a18" }}>3</td>
                <td className="py-3 pr-4" style={{ color: "#1a1a18" }}>Made-to-measure premium with PAS 24 certification</td>
                <td className="py-3 pr-4 font-medium" style={{ color: "#8a6f4e" }}>£££</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #c9a96e33" }}>
                <td className="py-3 pr-4 font-medium" style={{ color: "#1a1a18" }}>4 — SteelR Standard</td>
                <td className="py-3 pr-4" style={{ color: "#1a1a18" }}>Bespoke residential, BS EN 1627 RC4 + LPS 1175 SR3, full hardware and glazing brief</td>
                <td className="py-3 pr-4 font-medium" style={{ color: "#8a6f4e" }}>££££</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium" style={{ color: "#1a1a18" }}>5 — SteelR Upgrade</td>
                <td className="py-3 pr-4" style={{ color: "#1a1a18" }}>Bespoke residential, LPS 1175 SR4 commercial-grade or LPS 1673 ultra-high attack resistance</td>
                <td className="py-3 pr-4 font-medium" style={{ color: "#8a6f4e" }}>£££££</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
                Every SteelR door is PAS 24 certified and BS EN 1627:2011
                RC4 single leaf, unglazed certified as Standard. The RC4
                construction, hardware specification and testing
                certification are included in the base quote. What adds
                cost are the upgrade tiers: LPS 1175 SR3 (LPCB
                police-preferred, the Enhanced upgrade), LPS 1175 SR4 D10
                Issue 8 (Commercial-grade, used in data centres and bank
                vaults) and LPS 1673 attack-resistance (Ultra-high, by
                enquiry). Each tier requires heavier construction,
                different hardware components and a separate
                certification process, all of which add cost.
              </>
            ),
            body2: (
              <>
                More detail on the four-tier ladder sits on the{" "}
                <Link
                  href="/sr3-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR3 page
                </Link>
                , the{" "}
                <Link
                  href="/sr4-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR4 page
                </Link>
                , the{" "}
                <Link
                  href="/lps-1673-attack-resistant-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  LPS 1673 page
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
                Standard lead time is approximately eight weeks from first
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
            {
              href: "/uk-steel-doors-vs-imported",
              label: "UK-manufactured vs imported steel doors",
              description: "Where the price difference comes from once shipping, certification and warranty support are added back in.",
            },
            {
              href: "/architects",
              label: "For architects and specifiers",
              description: "How a SteelR door is priced into a Performance Specification, with NBS clauses and certification packs included in the supply.",
            },
            {
              href: "/developers",
              label: "For residential developers",
              description: "How door schedule pricing scales across phased programmes, NHBC-ready packs and fixed-rate delivery against the build programme.",
            },
            {
              href: "/housing-associations",
              label: "For housing associations",
              description: "Stock-replacement programme pricing, single-supplier coordination and Building Safety Act 2022 evidence packs for managed portfolios.",
            },
            {
              href: "/property-managers",
              label: "For property managers and managing agents",
              description: "Section 20 budgeting, FRA remediation pricing and managed-portfolio supply across leasehold blocks.",
            },
          ],
        }}
        faqs={faqs}
        whyConsider={{
          items: [
            "You are researching pricing before booking a survey, and want an honest factor-by-factor breakdown",
            "Your project budget can support a bespoke installed steel door specification — high four to low six figure range depending on specification",
            "You are planning a 10 to 15 year+ horizon where lifetime cost matters more than upfront price",
            "You are a specifier needing pricing visibility for a developer brief or insurance valuation",
            "Your budget sits at the mid-market composite price point, in which case a premium composite is the more honest fit for your project",
          ],
        }}
        ctaHeading="Book a survey for a written quotation"
        enquirySource="hub-cost-uk"
        enquiryContextLabel="Steel Front Doors Cost UK"
      />
    </>
  );
}
