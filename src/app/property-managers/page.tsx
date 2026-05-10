import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Steel Front Doors for Property Managers | FRA Ready | SteelR",
  description:
    "Bespoke steel front doors for UK managing agents. FRA remediation, Section 20 support, Building Safety Act 2022 evidence, FD30/FD60. Single supplier.",
  alternates: {
    canonical: "https://steelr.co.uk/property-managers",
  },
  openGraph: {
    title: "Steel Front Doors for Property Managers | SteelR",
    description:
      "Bespoke steel front doors for UK managing agents and property managers. FRA remediation, Section 20 consultation, Building Safety Act 2022 evidence pack and single-supplier programme across managed portfolios.",
    url: "https://steelr.co.uk/property-managers",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question:
      "Can SteelR help us close out FRA action items on flat entrance doors?",
    answer:
      "Yes. FRA remediation on flat entrance doors is one of the most common reasons a managing agent contacts us. Our FD30S fire and smoke rated doors satisfy Approved Document B requirements for individual flat entrance doors, with FD60 available for common-area doors and protected escape routes. We work directly from the FRA report to confirm specification, install evidence and the certification documentation required to close out each action item. Address-registered certificate packs are supplied per door for the building safety case file.",
  },
  {
    question:
      "Does SteelR support Section 20 consultation requirements?",
    answer:
      "Yes. Where the works exceed the Section 20 threshold under the Landlord and Tenant Act 1985, we supply the cost-itemised written specification, the schedule of rates and the supporting technical documentation that the managing agent needs to satisfy the consultation requirements. Where the leaseholder consultation includes the requirement to obtain estimates, we supply our quotation in the format that aligns with how managing agents present competing bids to lessees. Pricing is fixed at programme commencement and held for the duration of the contract.",
  },
  {
    question:
      "What evidence does SteelR provide for the Building Safety Act 2022 building safety case?",
    answer:
      "Every SteelR door ships with a complete certification pack: PAS 24:2022 certificate, BS EN 1627:2011 RC4 single leaf, unglazed certificate of compliance as Standard, FD30S fire and smoke rating to BS 476-22 or BS EN 1634-1, and Secured by Design accreditation. For Higher-Risk Buildings as defined under the Building Safety Act 2022, FD60 fire rating and LPS 1175 SR3 (LPCB police-preferred Enhanced upgrade), SR4 D10 Issue 8 (Commercial-grade upgrade) or LPS 1673 attack-resistance (Ultra-high, by enquiry) are available where the building safety case justifies the upgrade. Certification packs are address-registered against each unit and held on file indefinitely so future case submissions, transfer of accountable person or freehold transfer have the evidence trail intact.",
  },
  {
    question:
      "How do you minimise disruption to residents during installation?",
    answer:
      "Single-leaf doors install in one working day per unit. Double doors or sidelight configurations take two days. Resident communication packs are issued in advance covering scope, timing, access requirements and out-of-hours contact details. For occupied units we work to scheduled time windows agreed with the managing agent's resident liaison or block management team. PEEP (Personal Emergency Evacuation Plan) considerations for vulnerable residents are coordinated with the managing agent before scheduling. The site team operates with full PPE, dust sheets and end-of-day clean-down on every install. No mess left for the resident, no follow-up call from the agent.",
  },
  {
    question:
      "Can we run a single-supplier programme across multiple buildings?",
    answer:
      "Yes. Portfolio-level supplier programmes are standard. The same project lead and install team carry through every building in the portfolio, so specifications, certification format, install standard and aftercare are consistent across the managed stock. The project file is maintained centrally so a Building 4 install in 2028 references the Building 1 specification and certification format from 2026 without drift. Pricing is fixed at programme commencement against the agreed schedule and held for the duration of the contract, regardless of how many buildings the programme covers.",
  },
  {
    question:
      "Is there a single point of contact across the duration of a programme?",
    answer:
      "Yes. Every SteelR contract has a named project lead from survey stage through to handover and into the warranty period, supported by a small team that does not rotate. The project lead is reachable directly by phone or email throughout. For multi-building portfolio programmes spanning years, we maintain the project file so a Building 4 install in 2028 references the Building 1 specification from 2026 without re-survey of the original units. This particularly matters for managing agents who change Building Safety Manager personnel during the programme.",
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
      name: "Property Managers",
      item: "https://steelr.co.uk/property-managers",
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

export default function PropertyManagersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Steel Front Doors for Managing Agents and Property Managers"
        h1="Steel Front Doors for UK Property Managers: FRA Remediation, Section 20 Support, Building Safety Act 2022 Evidence"
        intro={{
          pretitle: "Built for the managed portfolio"
          ,
          title:
            "FRA remediation, Section 20 consultation, building safety case evidence and single-supplier portfolio programmes",
          body: (
            <>
              Managing agents have absorbed more compliance load in the
              last five years than the previous twenty. Fire Safety Act
              2021 obligations, Building Safety Act 2022 case
              submissions, FRA action items inherited from previous
              agents, Section 20 consultation evidence trails for
              leasehold works, PEEP coordination, principal accountable
              person registration. Front doors sit in the middle of
              most of it, because the front door is the line between
              the unit and the common parts.
            </>
          ),
          body2: (
            <>
              SteelR manufactures and installs bespoke steel entrance
              doors directly, with full certification pack registered
              against each unit, Section 20 itemisation supplied in the
              format leasehold consultation requires, and a single
              accountable point of contact across a multi-building
              portfolio. This page sets out the specification,
              consultation support and aftercare model most managing
              agents and block managers need to see during procurement.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "FRA remediation",
            title: "FD30S standard, FD60 available, evidence pack per unit",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point locking on a SteelR fire-rated steel front door specified for FRA remediation",
            },
            body: (
              <>
                FD30S fire and smoke rating to BS 476-22 or BS EN
                1634-1 is included as Standard on every SteelR door,
                satisfying Approved Document B for individual flat
                entrance doors. FD60 is available for common-area
                doors, protected escape routes and stairwell enclosures
                where the FRA action specifies the higher rating.
                Working directly from the FRA report, we confirm the
                door specification, install evidence and certification
                documentation required to close out each action item.
              </>
            ),
            body2: (
              <>
                The Standard SteelR specification also carries
                PAS 24:2022, BS EN 1627:2011 RC4 single leaf, unglazed
                certification (the European framework for sustained
                forced-entry resistance) and Secured by Design
                approval, all on the same door. LPS 1175 SR3 (LPCB
                police-preferred Enhanced upgrade), SR4 D10 Issue 8
                (Commercial-grade upgrade) and LPS 1673
                attack-resistance (Ultra-high, by enquiry) are
                available on every door where the building safety case
                or insurer requirement justifies the upgrade.
              </>
            ),
            list: [
              "FD30S fire and smoke rated (Approved Document B)",
              "FD60 available for common areas and escape routes",
              "PAS 24:2022 certified (Approved Document Q)",
              "BS EN 1627:2011 RC4 single leaf, unglazed (Standard)",
              "Secured by Design approved",
              "LPS 1175 SR3, SR4, LPS 1673 upgrades available",
              "Address-registered certificate pack per unit",
            ],
          },
          {
            pretitle: "Section 20 consultation",
            title: "Itemised written specification, schedule of rates, fixed pricing",
            body: (
              <>
                Where the works exceed the Section 20 threshold under
                the Landlord and Tenant Act 1985, we supply the
                cost-itemised written specification, the schedule of
                rates and the supporting technical documentation the
                managing agent needs to satisfy the consultation
                requirements. The quotation format aligns with how
                managing agents present competing bids to lessees
                during the consultation period.
              </>
            ),
            body2: (
              <>
                Pricing is fixed at programme commencement against the
                agreed schedule and held for the duration of the
                contract. This protects the managing agent from
                in-flight cost variations during the consultation
                period and from leaseholder challenge under the
                reasonableness test that follows. For multi-building
                portfolio programmes, fixed pricing carries across the
                whole portfolio, not per building.
              </>
            ),
          },
          {
            pretitle: "Building Safety Act 2022",
            title: "Address-registered evidence pack, supports the case file",
            body: (
              <>
                For Higher-Risk Buildings as defined under the Building
                Safety Act 2022 (residential buildings of 18m or
                higher, or 7 storeys or more, with 2 or more
                residential units), the building safety case file
                requires evidence of the entrance door specification,
                fire performance, install date and certification
                authority for every flat entrance door in the building.
                SteelR ships every door with that evidence pack
                registered against the unit address.
              </>
            ),
            body2: (
              <>
                The certification pack is held on file indefinitely so
                future case submissions, transfer of principal
                accountable person, change of Building Safety Manager
                or freehold transfer have the evidence trail intact.
                For buildings transitioning into the new safety regime
                or addressing legacy gaps in the case file, SteelR can
                provide retrospective documentation pack for previously
                installed SteelR doors on request.
              </>
            ),
          },
          {
            pretitle: "Resident communication",
            title: "Single-day install per unit, full PPE, end-of-day clean-down",
            body: (
              <>
                Single-leaf doors install in one working day per unit.
                Double doors or sidelight configurations take two days.
                Resident communication packs are issued in advance
                covering scope, timing, access requirements and
                out-of-hours contact. The site team operates with full
                PPE, dust sheets and end-of-day clean-down on every
                install. No mess left for the resident, no follow-up
                call from the leaseholder to the managing agent about
                damage or disturbance during the install.
              </>
            ),
            body2: (
              <>
                For occupied units we work to scheduled time windows
                agreed with the managing agent&apos;s resident liaison
                team. PEEP (Personal Emergency Evacuation Plan)
                considerations for vulnerable residents are coordinated
                with the managing agent before scheduling. Where a
                resident has accessibility, mobility or medical
                requirements that affect access during the install
                day, those are agreed in writing in advance.
              </>
            ),
          },
          {
            pretitle: "Portfolio programme",
            title: "Single supplier, single contact, consistent across the managed stock",
            body: (
              <>
                Portfolio-level supplier programmes are standard. The
                same project lead and install team carry through every
                building in the portfolio, so specifications,
                certification format, install standard and aftercare
                are consistent across the managed stock. The project
                file is maintained centrally so a Building 4 install in
                2028 references the Building 1 specification and
                certification format from 2026 without drift.
              </>
            ),
            body2: (
              <>
                Aftercare contact is direct to our team by phone or
                email. No ticket systems, no call-centre routing. For
                managing agents who change Building Safety Manager or
                resident liaison personnel during a multi-year
                programme, the SteelR project lead and design team
                continuity protects the documentation trail and the
                relationship the managing agent&apos;s predecessor
                established.
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
                "What FD30 and FD60 mean, where each is required for FRA remediation, and how fire rating combines with PAS 24, RC4 Standard and Secured by Design.",
            },
            {
              href: "/housing-associations",
              label: "Steel front doors for housing associations",
              description:
                "Procurement model for housing association stock-replacement programmes. Useful where the managing agent operates buildings for an RP or shared-ownership freeholder.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design Steel Front Doors",
              description:
                "The UK police-preferred specification, recognised by managed-stock insurers and frequently referenced in block management procurement.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3 Enhanced upgrade",
              description:
                "LPCB police-preferred specification for higher-risk units within the portfolio. Available on every SteelR door above the BS EN 1627 RC4 Standard.",
            },
            {
              href: "/security-specification",
              label: "Full security + fire specification",
              description:
                "PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4, LPS 1673 and FD30/FD60 set out side by side with the certification thresholds property managers need for the FRA file.",
            },
            {
              href: "/process",
              label: "How a SteelR project runs",
              description:
                "Survey, design, manufacture and install. The same model applies to single-block FRA remediation and multi-building portfolio programmes.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Talk to our project team about your portfolio"
        enquirySource="hub-property-managers"
        enquiryContextLabel="Property Managers"
      />
    </>
  );
}
