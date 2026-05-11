import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Steel Front Doors for Housing Associations | SteelR",
  description:
    "Bespoke steel front doors for UK housing associations. Building Safety Act 2022 compliant. PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4, FD30/FD60. Single supplier.",
  alternates: {
    canonical: "https://steelr.co.uk/housing-associations",
  },
  openGraph: {
    title: "Steel Front Doors for Housing Associations | SteelR",
    description:
      "Bespoke steel front doors for UK housing associations. Building Safety Act 2022 compliant, FD30/FD60, PAS 24, BS EN 1627 RC4. Stock replacement programmes with phased delivery, single supplier, in-house install.",
    url: "https://steelr.co.uk/housing-associations",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question:
      "Can SteelR supply at the volume a housing association stock-replacement programme needs?",
    answer:
      "Yes. Every door is manufactured to order in our UK facility, which means we accommodate variable aperture sizes and specifications across a single development without retooling. Phased delivery is built into the programme from the survey stage onwards, scheduled against your build or replacement timetable rather than ours. We have delivered programmes ranging from a small block of flats through to multi-phase stock-replacement contracts spanning hundreds of units. The model is one supplier, one accountable manufacturer, one in-house install team. No subcontracted fitting.",
  },
  {
    question:
      "What does SteelR provide for Building Safety Act 2022 compliance?",
    answer:
      "Every SteelR steel front door ships with a complete certification pack: PAS 24:2022 certificate, BS EN 1627:2011 RC4 single leaf, unglazed certificate of compliance as Standard, FD30S fire and smoke rating to BS 476-22 or BS EN 1634-1, and Secured by Design accreditation. For higher-rise buildings or properties flagged under the Building Safety Act, FD60 fire rating and LPS 1175 SR3 (LPCB police-preferred Enhanced upgrade), SR4 D10 Issue 8 (Commercial-grade upgrade) or LPS 1673 attack-resistance (Ultra-high, by enquiry) certifications are available on every door. The certification pack is registered against the property address and held on file indefinitely so future audits, building safety case submissions or freeholder transfers have the evidence trail intact.",
  },
  {
    question:
      "Does SteelR work on FRA (Fire Risk Assessment) remediation programmes?",
    answer:
      "Yes. FRA remediation is one of the most common reasons a housing association replaces flat entrance doors, and one of the most common compliance gaps highlighted by the Fire Safety Act 2021. Our FD30S fire and smoke rated doors satisfy Approved Document B requirements for individual flat entrances; FD60 satisfies the higher requirement for common-area doors and protected escape routes. We work directly with your FRA report to confirm the door specification and installation evidence required, and provide the post-install certification needed to close out the action.",
  },
  {
    question: "Who installs the doors? Does SteelR subcontract?",
    answer:
      "No subcontracting. Installation is carried out exclusively by our own DBS-checked, fully insured fitters, who are employed directly by SteelR. The team that manufactures the door is the team that installs it. This is the only way to keep PAS 24, BS EN 1627 RC4, LPS 1175 and FD30/FD60 certifications valid against the installed door rather than just the door as it left the factory. Subcontracted installation, even when the spec is identical, often invalidates the as-tested certification because the fixing detail diverges from the certified construction.",
  },
  {
    question:
      "What about resident communication and minimising disruption during installation?",
    answer:
      "Single-leaf doors are typically installed inside one working day per unit. Double doors or sidelight configurations take two days. We provide resident communication packs in advance covering scope, timing, access requirements and out-of-hours contact details. For occupied units we work to scheduled time windows agreed with the housing association's resident liaison team. The site team operates with full PPE, dust sheets and end-of-day clean-down on every install. No mess left for the resident.",
  },
  {
    question:
      "Is there a single point of contact for a multi-phase contract?",
    answer:
      "Yes. Every SteelR contract has a named project lead from survey stage through to final handover, supported by a small team that does not rotate. The project lead is reachable directly by phone or email throughout. No ticket systems, no call-centre routing. For multi-phase contracts spanning years, we maintain the project file so a Phase 4 install in 2028 references the Phase 1 specification and certification pack from 2026 without requiring re-survey of the original units.",
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
      name: "Housing Associations",
      item: "https://steelr.co.uk/housing-associations",
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

export default function HousingAssociationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Steel Front Doors for Housing Associations"
        h1="Steel Front Doors for UK Housing Associations: Stock Replacement, Compliance and Single-Supplier Programmes"
        intro={{
          pretitle: "Built for managed stock",
          title:
            "Compliant, certified, installed by the manufacturer. Built for housing association procurement and asset management",
          body: (
            <>
              The pressure on UK housing associations to evidence
              compliance against the Building Safety Act 2022, the Fire
              Safety Act 2021 and Approved Documents B and Q has changed
              the procurement bar for entrance doors. Building safety
              cases, FRA action plans and freeholder due diligence all
              now require certification evidence that survives audit
              years after install. The era of an unregistered door from
              an unnamed installer has ended.
            </>
          ),
          body2: (
            <>
              SteelR manufactures and installs bespoke steel entrance
              doors directly, with full certification pack, single
              accountable point of contact and an in-house install team
              that is never subcontracted. This page sets out the
              specification, programme delivery model and aftercare
              terms most housing associations need to see during
              tender, framework or stock replacement procurement.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Compliance",
            title: "Every door arrives with the certification pack the audit asks for",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point locking on a SteelR housing association steel front door",
            },
            body: (
              <>
                The Standard SteelR specification carries PAS 24:2022,
                BS EN 1627:2011 RC4 single leaf, unglazed (the European
                framework for sustained forced-entry resistance, included
                as Standard on every door), Secured by Design approval
                and FD30S fire and smoke rating tested to BS 476-22 or
                BS EN 1634-1. Approved Document Q for security and
                Approved Document B for fire safety are both satisfied
                on the Standard tier alone, with no upgrade required.
              </>
            ),
            body2: (
              <>
                For higher-risk applications, LPS 1175 SR3 (LPCB
                police-preferred, Enhanced upgrade), LPS 1175 SR4 D10
                Issue 8 (Commercial-grade upgrade, used in data centres
                and bank vaults) and LPS 1673 attack-resistance
                (Ultra-high tier, by enquiry) are available as further
                upgrade tiers on every door. FD60 sixty-minute fire
                rating is available where common-area doors, protected
                escape routes or stairwell enclosures require it.
                Certification packs are address-registered and held on
                file indefinitely.
              </>
            ),
            list: [
              "PAS 24:2022 certified (Approved Document Q)",
              "BS EN 1627:2011 RC4 single leaf, unglazed (Standard)",
              "FD30S fire and smoke rated (Approved Document B)",
              "Secured by Design approved",
              "LPS 1175 SR3, SR4, LPS 1673 upgrades available",
              "FD60 fire rating available",
              "Address-registered certificate pack on every door",
            ],
          },
          {
            pretitle: "Stock replacement programmes",
            title: "Phased delivery against your programme, not ours",
            body: (
              <>
                Every door is manufactured to order, which means a
                stock-replacement programme is not constrained by
                standard sizes or catalogue lead times. Variable aperture
                dimensions across legacy 1960s and 1970s blocks are
                handled at survey stage. Door schedules are produced from
                the survey data, costed line by line, and signed off by
                the housing association before any manufacture begins.
              </>
            ),
            body2: (
              <>
                Phasing is scheduled against your build or replacement
                timetable, not ours. We have delivered programmes
                ranging from single blocks through to multi-phase
                contracts spanning hundreds of units. The same project
                lead and install team carry through every phase, so
                Phase 4 references the Phase 1 specification without
                drift. Pricing is fixed at programme commencement against
                the agreed door schedule and held for the duration of
                the contract.
              </>
            ),
          },
          {
            pretitle: "Installation",
            title: "Manufacturer-installed. Never subcontracted",
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
                Single-leaf doors install in one working day per unit.
                Double doors or sidelight configurations take two days.
                Resident communication packs are issued in advance,
                covering scope, timing, access requirements and
                out-of-hours contact. The site team operates with full
                PPE, dust sheets and end-of-day clean-down. No mess
                left for the resident, no follow-up call-out for damage
                during install.
              </>
            ),
          },
          {
            pretitle: "Aftercare",
            title: "Ten-year manufacturer warranty, single accountable contact",
            body: (
              <>
                The door construction is covered for ten years. The
                decorative finish is covered for five years. Hardware
                components are covered for three years. Every install is
                logged against the property address with the
                certification pack, finish RAL number, hardware
                specification and install date, so a future hardware
                upgrade, finish refresh or smart-lock retrofit fits the
                first time without re-survey.
              </>
            ),
            body2: (
              <>
                Aftercare contact is direct to our team by phone or
                email. No ticket systems, no call-centre routing. For
                multi-phase contracts, the project file is maintained
                across the duration of the framework so future works
                reference the original specification and certification
                evidence intact. This is particularly relevant for
                housing associations preparing building safety case
                submissions years after the original install, where the
                evidence trail is the determining factor.
              </>
            ),
          },
          {
            pretitle: "Procurement",
            title: "Framework, tender and direct-award routes",
            body: (
              <>
                We work via direct award where the housing association
                has discretion under their procurement thresholds, and
                via tender or framework where required. NBS-format
                specification clauses, BIM data, fire test certificates
                and full schedule pricing are supplied in the format
                your procurement team needs for evaluation. Pre-contract
                site survey is included at no obligation. Nothing is
                chargeable until the door schedule and price are agreed
                in writing.
              </>
            ),
            body2: (
              <>
                For framework callouts requiring a defined scope of
                works statement, certification register, insurance
                position and trading history reference, the document
                pack is held current and supplied on request.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/fire-rated-fd30-front-door",
              label: "FD30 + FD60 fire rated front doors",
              description:
                "What FD30 and FD60 mean, where each is required, and how fire rating combines with PAS 24, RC4 Standard and Secured by Design on one SteelR door.",
            },
            {
              href: "/pas-24-steel-entrance-door",
              label: "PAS 24 Steel Entrance Door",
              description:
                "PAS 24:2022 explained for new-build dwellings under Approved Document Q. The regulatory floor on every SteelR door.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design Steel Front Doors",
              description:
                "The UK police-preferred specification, recognised by housing association insurers and frequently referenced in framework requirements.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3 Enhanced upgrade",
              description:
                "LPCB police-preferred specification for higher-risk units. Available on every SteelR door above the BS EN 1627 RC4 Standard.",
            },
            {
              href: "/process",
              label: "How a SteelR project runs",
              description:
                "Survey, design, manufacture and install. The same model applies to single units and multi-phase stock replacement programmes.",
            },
            {
              href: "/areas",
              label: "Areas served",
              description:
                "Nationwide UK mainland coverage with no regional surcharge. Survey, manufacture and install across England, Scotland and Wales.",
            },
          ],
        }}
        faqs={faqs}
        whyConsider={{
          items: [
            "Your stock falls under the Building Safety Act 2022 and your evidence chain needs FD30S certification traceable to a UK manufacturer",
            "Your Regulator of Social Housing audit requires Approved Document B and Approved Document Q evidence in the document pack",
            "Your repairs programme benefits from a single accountable supplier across survey, manufacture and install rather than fragmented contracts",
            "Your tenant-facing programme needs a doorset with Secured by Design approval and a proven UK aftercare model",
            "Your portfolio scale supports a UK-manufactured doorset programme with consistent specification across blocks and predictable lead time",
          ],
        }}
        ctaHeading="Talk to our project team about your programme"
        enquirySource="hub-housing-associations"
        enquiryContextLabel="Housing Associations"
      />
    </>
  );
}
