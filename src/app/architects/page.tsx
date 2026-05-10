import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Steel Front Doors for Architects | NBS + BIM | SteelR",
  description:
    "Bespoke steel front doors for UK architects. NBS clauses, BIM data, certification PDFs, U-values, RIBA support. PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4.",
  alternates: {
    canonical: "https://steelr.co.uk/architects",
  },
  openGraph: {
    title: "Steel Front Doors for Architects | SteelR",
    description:
      "Bespoke steel front doors for UK architects and specifiers. NBS-format clauses, BIM data, full certification library and direct line to the SteelR design team across RIBA stages 0-7.",
    url: "https://steelr.co.uk/architects",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Do you supply NBS-format specification clauses?",
    answer:
      "Yes. NBS-format clauses for the standard SteelR specification (PAS 24, BS EN 1627:2011 RC4 single leaf, unglazed, FD30S, Secured by Design) and for each upgrade tier (LPS 1175 SR3 Enhanced, SR4 D10 Issue 8 Commercial-grade, LPS 1673 attack-resistance) are supplied on request, ready for paste into NBS Chorus or your practice's specification template. We also supply Performance Specification narrative for projects where the design team is writing a Performance rather than Prescriptive specification, with the certification thresholds left for the contractor to meet on supply.",
  },
  {
    question: "Is BIM data available, and at what level?",
    answer:
      "Yes. BIM Level 2 compliant data is supplied for SteelR doors at the specification stage, including geometric data (door leaf, frame, ironmongery), specification metadata (PAS 24, RC4, fire rating, U-value, hardware specification, RAL colour) and IFC export for federation into the wider model. Files are supplied in Revit (.rvt), IFC (.ifc) and dwg formats. Level 3 (full federated lifecycle) data is available on enquiry for projects where the design team is operating to that specification.",
  },
  {
    question: "What U-values and acoustic performance can SteelR achieve?",
    answer:
      "Standard SteelR thermally broken construction achieves U-values from 1.5 W/m2K, with thermal-upgrade specifications available down to 0.8 W/m2K, materially below the 1.4 W/m2K Approved Document L 2021 threshold for new-build entrance doors. Acoustic performance for the standard specification is around 32 dB Rw; enhanced acoustic specifications reach 42 dB Rw with appropriate glazing and seal upgrades. Test data and Declarations of Performance are supplied on request for inclusion in the project Performance Specification.",
  },
  {
    question:
      "Does SteelR work on listed buildings and conservation area projects?",
    answer:
      "Yes, regularly. Steel allows period-correct panel proportions, moulding profiles, knocker placement, fanlight geometry and any RAL colour, including hand-mixed heritage palettes, while delivering modern thermal, security and fire performance the original timber door cannot. We supply drawings, elevations, sections, material specifications and performance data at the level of detail planning officers and conservation officers expect. Listed Building Consent and Conservation Area Consent applications are supported with the documentation pack the planning authority requires.",
  },
  {
    question:
      "How early in RIBA stages does SteelR get involved?",
    answer:
      "From RIBA stage 2 (Concept Design) onwards is the most useful entry point: it allows door geometry, performance specification and lead time to be designed into the project rather than retrofitted at stage 4. Earlier engagement at stages 0 or 1 is welcome for high-end residential or speculative scheme work. Stage 3 (Spatial Coordination) and stage 4 (Technical Design) are the busiest stages for our design team's involvement: NBS clauses, performance data, BIM federation and tender package preparation. Stages 5-7 cover manufacture, install and handover with the same project team carrying through.",
  },
  {
    question: "Is there a direct line to the design team, or only sales?",
    answer:
      "Direct line to the design team. Architects, specifiers and project leads talk to our technical lead, not a sales filter. NBS queries, performance data requests, BIM federation issues, tender clarifications and post-tender amendments are all handled directly by the team that owns the technical specification. The named project lead carries through from first contact to handover, with the same supporting design team that does not rotate.",
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
      name: "Architects",
      item: "https://steelr.co.uk/architects",
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

export default function ArchitectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Steel Front Doors for Architects and Specifiers"
        h1="Steel Front Doors for UK Architects: NBS Clauses, BIM Data, Performance Specifications and Direct Design Team Access"
        intro={{
          pretitle: "Built for the specification library",
          title:
            "NBS-format clauses, BIM Level 2 data, full performance test pack and a direct line to the technical design team",
          body: (
            <>
              Specifying entrance doors at the level a Performance
              Specification, BIM federation or tender package requires
              is rarely supported by the catalogue side of the market.
              Generic product data sheets, missing test certificates,
              BIM data that turns out to be a placeholder block and a
              sales filter between the architect and anyone who can
              answer a U-value question are the typical pattern.
            </>
          ),
          body2: (
            <>
              SteelR runs a different model. NBS-format clauses, BIM
              Level 2 data, Declarations of Performance, full
              certification PDFs and direct contact with the technical
              design team are supplied at specification stage on
              request, in the format your practice needs to drop into
              NBS Chorus, federate into the model and submit through
              tender. This page sets out the specification, technical
              data and stage-by-stage involvement the architectural
              design team most often needs to see.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Specification + BIM",
            title: "NBS Chorus clauses, IFC + Revit + dwg, Declarations of Performance",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point locking detail on a SteelR steel front door specified for an architect-led project",
            },
            body: (
              <>
                NBS-format specification clauses are supplied for the
                Standard SteelR specification (PAS 24:2022, BS EN
                1627:2011 RC4 single leaf, unglazed, FD30S fire and
                smoke rated, Secured by Design approved) and for each
                upgrade tier separately (LPS 1175 SR3 Enhanced upgrade,
                SR4 D10 Issue 8 Commercial-grade upgrade, LPS 1673
                attack-resistance Ultra-high tier). Performance
                Specification narrative is also supplied where the
                design team is writing a Performance rather than
                Prescriptive spec.
              </>
            ),
            body2: (
              <>
                BIM Level 2 compliant data is supplied at specification
                stage in Revit (.rvt), IFC (.ifc) and dwg formats with
                full geometric and metadata content (door leaf, frame,
                ironmongery, certification metadata, U-value, fire
                rating, RAL colour, hardware specification). Level 3
                federated lifecycle data is available on enquiry for
                projects working to that level.
              </>
            ),
            list: [
              "NBS Chorus clauses for the Standard tier and 3 upgrade tiers, supplied on request",
              "Performance Specification narrative supplied on request",
              "BIM Level 2 data in Revit (.rvt), IFC (.ifc) and dwg, supplied per project at specification stage",
              "Declarations of Performance per certified standard, supplied on request",
              "Full PDF certification library available on request",
              "Test data on request: U-value, acoustic, water, wind, security",
              "Manufacturer data sheets in CIBSE / NBS template, supplied per project",
            ],
          },
          {
            pretitle: "Specifier pack on request",
            title: "What you receive when you make contact, and who to ask",
            body: (
              <>
                Specifier support is run as a project-led service rather
                than a self-serve download library. A typical first contact
                from an architect goes to the SteelR design team within one
                working day and produces a project-tailored specifier pack
                back to you, typically within five working days. The
                cadence is confirmed on the first call to match your stage
                deadlines. Nothing is gated behind a download form.
              </>
            ),
            body2: (
              <>
                Direct technical line: Mani Sandhu, Founder and Director,
                handles specification enquiries personally for architect-led
                projects. The named project lead carries through from first
                contact to handover with no rotation. Specifier-pack
                contents and their timing on a typical project run are set
                out below. Bespoke deliverables (NBS clauses against your
                practice template, BIM federation files in the format your
                model uses, project-specific Declarations of Performance)
                are produced against the brief, not pulled from a generic
                archive.
              </>
            ),
            list: [
              "Day 1. Enquiry acknowledged. Named project lead assigned. Brief and stage deadlines captured",
              "Day 2 to 3. NBS clauses drafted against your specification template. BIM data scoped to required level",
              "Day 3 to 5. Project-tailored specifier pack emailed: NBS clauses, BIM Level 2 data, certification PDFs, Declarations of Performance, U-value and acoustic test data",
              "Day 5 onwards. Sample finishes, hardware samples, on-site survey or design-team call booked on request, no charge at this stage",
            ],
          },
          {
            pretitle: "Performance specification",
            title: "Test data architects can drop straight into the spec",
            body: (
              <>
                U-values from 1.5 W/m2K standard, down to 0.8 W/m2K on
                thermal-upgrade specification, materially below the 1.4
                W/m2K threshold for new-build entrance doors under
                Approved Document L 2021. Acoustic performance from 32
                dB Rw standard up to 42 dB Rw enhanced. Wind loading to
                BS EN 12211 Class A3 (1200 Pa) standard, with higher
                exposure-class certification available for coastal and
                exposed-site projects.
              </>
            ),
            body2: (
              <>
                Security: PAS 24:2022 plus BS EN 1627:2011 RC4 single
                leaf, unglazed Standard, with LPS 1175 SR3 (Enhanced),
                SR4 D10 Issue 8 (Commercial-grade) and LPS 1673
                attack-resistance (Ultra-high, by enquiry) available.
                Fire rating FD30S standard, FD60 available. Test data
                and Declarations of Performance supplied per project
                for inclusion in the Performance Specification or
                tender package.
              </>
            ),
          },
          {
            pretitle: "Heritage and conservation",
            title: "Period-correct in steel, Listed Building Consent supported",
            body: (
              <>
                Steel allows period-correct panel proportions, moulding
                profiles, knocker placement, fanlight geometry and any
                RAL colour, including hand-mixed heritage palettes,
                while delivering modern thermal, security and fire
                performance the original timber door cannot. Six-panel
                Georgian, four-panel Victorian, Edwardian glazed upper
                panels and Regency arched fanlights are all standard
                specifications in our portfolio.
              </>
            ),
            body2: (
              <>
                Listed Building Consent and Conservation Area Consent
                applications are supported with drawings, elevations,
                sections, material specifications and performance data
                at the level of detail planning officers and
                conservation officers expect. The conservation officer
                liaison is handled by the SteelR design team where the
                architect prefers, or supplied as a documentation pack
                for the architect to submit through their normal
                planning channel.
              </>
            ),
          },
          {
            pretitle: "RIBA stages",
            title: "Most useful entry from RIBA stage 2, full involvement to stage 7",
            body: (
              <>
                From RIBA stage 2 (Concept Design) onwards is the most
                useful entry point: door geometry, performance
                specification and lead time can be designed into the
                project rather than retrofitted at stage 4. Earlier
                engagement at stages 0 or 1 is welcome for high-end
                residential, speculative scheme work or competition
                entries where the entrance door is treated as a
                signature element of the elevation.
              </>
            ),
            body2: (
              <>
                Stage 3 (Spatial Coordination) and stage 4 (Technical
                Design) are the busiest stages for our design team&apos;s
                involvement: NBS clause provision, performance data
                handover, BIM federation, tender package preparation
                and clarification responses. Stages 5-7 (Manufacture,
                Construction, Use) cover manufacture, install and
                handover with the same project team carrying through
                from stage 2. Single point of contact across all
                stages, no rotation.
              </>
            ),
          },
          {
            pretitle: "Direct design team",
            title: "Talk to the technical lead, not a sales filter",
            body: (
              <>
                Architects, specifiers and project leads talk to the
                SteelR technical lead directly. NBS queries, performance
                data requests, BIM federation issues, tender
                clarifications and post-tender amendments are all
                handled by the team that owns the technical
                specification, not routed through a sales gatekeeper.
              </>
            ),
            body2: (
              <>
                The named project lead carries through from first
                contact to handover, supported by a small design team
                that does not rotate. For multi-phase or framework
                projects, the relationship and the project file
                continue across the duration. This matters most at
                tender clarification and at site stage 5, where slow
                or sales-filtered responses cost the architect
                programme time.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/security-specification",
              label: "Full security specification",
              description:
                "PAS 24, BS EN 1627 RC4 Standard, LPS 1175 SR3/SR4 and LPS 1673 set out side by side with the certification thresholds architects need for the spec.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3 Enhanced upgrade",
              description:
                "LPCB police-preferred specification, the most-specified upgrade tier on architect-led projects above the BS EN 1627 RC4 Standard.",
            },
            {
              href: "/sr4-residential-steel-door",
              label: "LPS 1175 SR4 Commercial-grade upgrade",
              description:
                "The certification used for data centres, embassies and bank vaults. Available on residential specification for high-net-worth or threat-assessed projects.",
            },
            {
              href: "/thermally-broken-steel-front-door",
              label: "Thermally broken steel front door",
              description:
                "How the SteelR thermal break construction achieves U-values down to 0.8 W/m2K and avoids the cold-bridge problem on budget steel doors.",
            },
            {
              href: "/luxury-steel-entrance-door-london",
              label: "Luxury steel entrance doors London",
              description:
                "London borough coverage, conservation area work and the design pattern most-specified by London-based architectural practices.",
            },
            {
              href: "/process",
              label: "How a SteelR project runs",
              description:
                "Survey, design, manufacture and install. The same model applies to single-house architect-led projects and multi-unit developments.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Talk to our design team about your specification"
        enquirySource="hub-architects"
        enquiryContextLabel="Architects and Specifiers"
      />
    </>
  );
}
