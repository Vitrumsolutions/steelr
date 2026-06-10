import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Steel Front Doors for Developers | NHBC Ready | SteelR",
  description:
    "Bespoke steel front doors for UK residential developers. Approved Doc Q + PAS 24 + BS EN 1627 RC4 + LPS 1175 SR3/SR4. Door schedules, phased delivery.",
  alternates: {
    canonical: "https://steelr.co.uk/developers",
  },
  openGraph: {
    title: "Steel Front Doors for Developers | SteelR",
    description:
      "Bespoke steel front doors for UK residential developers and housebuilders. Approved Doc Q compliant, NHBC-ready certification packs, door schedules and phased delivery against your build programme.",
    url: "https://steelr.co.uk/developers",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question:
      "Are SteelR doors compliant with Approved Document Q for new-build dwellings?",
    answer:
      "Yes. Every SteelR steel front door is PAS 24:2022 certified, which is the standard referenced by Approved Document Q for residential entrance doors in new-build dwellings in England and Wales. The certification pack is supplied at handover for Building Control sign-off. Each door also carries BS EN 1627:2011 RC4 single leaf, unglazed certification as Standard, sitting above PAS 24 in attack resistance. LPS 1175 SR3 (LPCB police-preferred Enhanced upgrade), SR4 D10 Issue 8 (Commercial-grade upgrade) and LPS 1673 attack-resistance (Ultra-high, by enquiry) are available on every door for higher-risk specifications.",
  },
  {
    question:
      "Do you supply door schedules for multi-unit developments?",
    answer:
      "Yes. Door schedules are produced from the survey data for each project, costed line by line against the agreed specification, and signed off by the developer or QS before any manufacture begins. Schedules accommodate variable aperture sizes, mixed unit types (houses, flats, leasehold, HMO) and phased plot release within a single development. Pricing is fixed at programme commencement and held for the duration of the contract.",
  },
  {
    question: "What lead time should I plan into the build programme?",
    answer:
      "Standard lead time is approximately eight weeks from agreed door schedule to finished door in place. Phased delivery against your build programme is the default model: doors are scheduled to arrive at the plot when first-fix is complete and the aperture is ready for installation. For multi-phase developments spanning multiple plot releases, the project lead and install team carry through every phase, so Phase 4 references the Phase 1 specification without drift. Accelerated programmes are possible on selected specifications via prior arrangement at the design stage.",
  },
  {
    question:
      "Does SteelR work directly with the main contractor, or via the developer?",
    answer:
      "Both routes work. We contract directly with the developer where the developer holds the door package separately, and we work as a tier-2 specialist supplier under the main contractor where the package sits inside the main works contract. NBS-format specification clauses, BIM data and schedule-of-rates pricing are supplied in whichever format the procurement team needs. JCT and NEC contract terms are familiar territory; specific contract amendments are reviewed at tender stage.",
  },
  {
    question:
      "What happens during the defects liability period if a door issue arises?",
    answer:
      "Every SteelR door carries a ten-year manufacturer warranty on the door construction, five years on the decorative finish and three years on hardware. During the defects liability period, the developer's site team has direct access to our project lead by phone or email; defects are assessed and resolved on site by the same install team that fitted the door. Certification packs are address-registered against each plot and held on file indefinitely, which simplifies the developer's handover pack and any subsequent freehold or management transfer.",
  },
  {
    question:
      "Can SteelR supply at the unit volume a multi-plot development needs?",
    answer:
      "Yes. Manufacturing is to order in our UK facility, which means there is no constraint from standard sizes or catalogue ranges. We have delivered programmes ranging from individual high-end self-builds through to multi-phase residential developments spanning hundreds of plots. The model is one supplier, one accountable manufacturer, one in-house install team across the duration. No subcontracted fitting at any phase.",
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
      name: "Developers",
      item: "https://steelr.co.uk/developers",
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

export default function DevelopersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Steel Front Doors for Residential Developers"
        h1="Steel Front Doors for UK Residential Developers: Approved Document Q, NHBC-Ready and Built into Your Programme"
        intro={{
          pretitle: "Built for the build programme",
          title:
            "Compliant, scheduled, certified for handover. Built for residential developer procurement and Building Control sign-off",
          body: (
            <>
              Approved Document Q has been mandatory on residential
              entrance doors since 2015. Building Control sign-off
              requires PAS 24 certification on every plot. NHBC, LABC
              and Premier Guarantee handover packs all expect the
              certification evidence in the right format on the right
              date. Missing it means delayed certificates of practical
              completion and held-back release payments.
            </>
          ),
          body2: (
            <>
              SteelR manufactures and installs bespoke steel entrance
              doors directly, with full Approved Doc Q certification
              pack supplied per plot, single accountable point of
              contact, and an in-house install team scheduled against
              the build programme. This page sets out the specification,
              programme delivery and contract model most residential
              developers need to see during tender, framework or direct
              award procurement.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Approved Document Q",
            title: "PAS 24 + RC4 Standard on every door, certification pack per plot",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point locking on a SteelR steel front door specified for residential developer projects",
            },
            body: (
              <>
                Every SteelR door is PAS 24:2022 certified, which is the
                standard referenced by Approved Document Q for new-build
                residential entrance doors in England and Wales.
                Certification documents are supplied per plot at
                handover for Building Control sign-off, registered
                against the property address and held on file
                indefinitely for future audit, freehold transfer or
                management handover.
              </>
            ),
            body2: (
              <>
                Above PAS 24, every door carries BS EN 1627:2011 RC4
                single leaf, unglazed certification as Standard (the
                European framework for sustained forced-entry
                resistance). LPS 1175 SR3 (LPCB police-preferred
                Enhanced upgrade), SR4 D10 Issue 8 (Commercial-grade
                upgrade) and LPS 1673 attack-resistance (Ultra-high, by
                enquiry) are available on every door where the unit
                type, location or specification calls for higher
                attack-resistance. FD30S fire and smoke rating to BS
                476-22 or BS EN 1634-1 is standard; FD60 is available
                for common-area doors and protected escape routes.
              </>
            ),
            list: [
              "PAS 24:2022 certified (Approved Document Q minimum)",
              "BS EN 1627:2011 RC4 single leaf, unglazed (Standard)",
              "FD30S fire and smoke rated (Approved Document B)",
              "Secured by Design approved",
              "LPS 1175 SR3, SR4, LPS 1673 upgrades available",
              "FD60 fire rating available for common areas",
              "Certification pack per plot, address-registered",
            ],
          },
          {
            pretitle: "Door schedules",
            title: "Costed schedules, mixed unit types, fixed pricing for the contract",
            body: (
              <>
                Door schedules are produced from survey data for each
                project, costed line by line against the agreed
                specification and signed off by the developer or QS
                before any manufacture begins. Schedules accommodate
                variable aperture sizes, mixed unit types (detached,
                terraced, flatted, leasehold, HMO) and phased plot
                release within a single development.
              </>
            ),
            body2: (
              <>
                Pricing is fixed at programme commencement against the
                agreed door schedule and held for the duration of the
                contract, regardless of how many phases the development
                spans. NBS-format specification clauses, BIM data, fire
                test certificates and schedule-of-rates pricing are
                supplied in the format your procurement team needs for
                evaluation, whether the package is being tendered, run
                under JCT or NEC, or direct-awarded.
              </>
            ),
          },
          {
            pretitle: "Phased delivery",
            title: "Doors arrive at the plot when first-fix is complete",
            body: (
              <>
                Phased delivery against your build programme is the
                default model. Doors are scheduled to arrive at each
                plot when first-fix is complete and the aperture is
                ready for installation, not in bulk on day one with a
                storage cost attached. For multi-phase developments
                spanning multiple plot releases, the same project lead
                and install team carry through every phase, so Phase 4
                in 2028 references the Phase 1 specification and
                certification format from 2026 without drift.
              </>
            ),
            body2: (
              <>
                Standard lead time is approximately eight weeks from agreed
                door schedule to finished door in place per plot.
                Accelerated programmes are possible on selected
                specifications via prior arrangement at the design
                stage. We do not pretend a four-week lead time on a
                bespoke product; we do commit to the eight-week
                programme in writing and hit it.
              </>
            ),
          },
          {
            pretitle: "Installation",
            title: "Installed by the manufacturer, never subcontracted",
            body: (
              <>
                The team that manufactures the door is the team that
                installs it. Every fitter is DBS-checked, employed
                directly by SteelR, and trained against the certified
                fixing specification. This is the only way the
                certification pack remains valid against the installed
                door, not just the door as it left the factory.
                Subcontracted installation, even on an identical door,
                often invalidates the as-tested certification because
                the fixing detail diverges from the construction the
                certification was awarded against.
              </>
            ),
            body2: (
              <>
                Single-leaf doors install in one working day per plot.
                Double doors or sidelight configurations take two days.
                The site team operates with full PPE, dust sheets and
                end-of-day clean-down. No mess left for the next trade,
                no follow-up call-out for snagging the install
                disturbed.
              </>
            ),
          },
          {
            pretitle: "Aftercare",
            title: "Defects period support, address-registered for handover",
            body: (
              <>
                During the defects liability period, the developer&apos;s
                site team has direct access to our project lead by
                phone or email; defects are assessed and resolved on
                site by the same install team that fitted the door.
                Every SteelR door carries a ten-year manufacturer
                warranty on the door construction, five years on the
                decorative finish and three years on hardware, which
                continues beyond the defects period and transfers with
                the property to the eventual homeowner or freeholder.
              </>
            ),
            body2: (
              <>
                Certification packs are address-registered against each
                plot and held on file indefinitely. This simplifies the
                developer&apos;s handover pack to NHBC, LABC or Premier
                Guarantee, the buyer&apos;s solicitor enquiry pack and any
                subsequent freehold or management company transfer. For
                build-to-rent operators retaining the freehold long
                term, the certification register stays accessible for
                future Building Safety Act 2022 case submissions.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/pas-24-steel-entrance-door",
              label: "PAS 24 Steel Entrance Door",
              description:
                "PAS 24:2022 explained for new-build dwellings under Approved Document Q. The regulatory floor on every SteelR door.",
            },
            {
              href: "/fire-rated-fd30-front-door",
              label: "FD30 + FD60 fire rated front doors",
              description:
                "What FD30 and FD60 mean, where each is required on a residential development, and how fire rating combines with PAS 24, RC4 Standard and Secured by Design.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design Steel Front Doors",
              description:
                "The UK police-preferred specification, frequently referenced in developer planning conditions and insurer requirements.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3 Enhanced upgrade",
              description:
                "LPCB police-preferred specification for higher-risk plots within a development. Available on every SteelR door above the BS EN 1627 RC4 Standard.",
            },
            {
              href: "/bs-en-1627-rc4-residential-steel-door",
              label: "BS EN 1627 RC4 residential steel door",
              description:
                "The European Standard tier on every SteelR door. The procurement reference architects increasingly write into Performance Specifications above PAS 24.",
            },
            {
              href: "/thermally-broken-steel-front-door",
              label: "Thermally broken steel front door",
              description:
                "Part L 2025 thermal performance: how the SteelR thermal break achieves the U-values needed on new-build entrance doors without cold-bridging.",
            },
            {
              href: "/housing-associations",
              label: "Steel front doors for housing associations",
              description:
                "Procurement model for stock-replacement programmes and Building Safety Act 2022 evidence. Useful where the development is being delivered for an RP partner.",
            },
            {
              href: "/process",
              label: "How a SteelR project runs",
              description:
                "Survey, design, manufacture and install. The same model applies to single-plot self-builds and multi-phase developments.",
            },
          ],
        }}
        faqs={faqs}
        whyConsider={{
          items: [
            "You are building plots in the £1m to £20m+ bracket where the front door materially affects sale price and viewing conversion",
            "Your warranty provider (NHBC, Premier Guarantee, LABC) requires PAS 24 evidence and Approved Document Q compliance in the handover pack",
            "Your programme needs a UK lead time of around eight weeks with predictable install dates, not foreign manufacture with customs risk",
            "You want one supplier accountable across plots, with the same survey, fabrication and install team, rather than three subcontractors per door",
            "Your sales team need a specification line that estate agents and surveyors recognise as a value driver, not a generic composite",
          ],
        }}
        ctaHeading="Talk to our project team about your build programme"
        enquirySource="hub-developers"
        enquiryContextLabel="Residential Developers"
      />
    </>
  );
}
