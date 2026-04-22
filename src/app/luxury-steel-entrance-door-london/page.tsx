import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Luxury Steel Entrance Doors London | Bespoke, Installed to Any Borough | SteelR",
  description:
    "Bespoke luxury steel entrance doors installed across London. Kensington, Chelsea, Notting Hill, Holland Park, Hampstead, Mayfair, Belgravia, Primrose Hill and surrounding areas. PAS 24 certified, SR3 standard, SR4 (LPS 1175) upgrade, Secured by Design, FD30 fire rated.",
  alternates: { canonical: "https://steelr.co.uk/luxury-steel-entrance-door-london" },
  openGraph: {
    title: "Luxury Steel Entrance Doors London | SteelR",
    description:
      "Bespoke luxury steel entrance doors installed across all London boroughs. PAS 24, SR3, SR4 (LPS 1175) upgrade, Secured by Design, FD30.",
    url: "https://steelr.co.uk/luxury-steel-entrance-door-london",
    type: "website",
  },
};

const faqs = [
  {
    question: "Which London boroughs do you most frequently install in?",
    answer:
      "Our most frequent London installations are in West London, specifically Kensington, Chelsea, Fulham, Notting Hill, Holland Park, Chiswick, Hammersmith and Mayfair. We also regularly install in North London (Hampstead, Highgate, Primrose Hill, Belgravia, Marylebone), South West London (Putney, Barnes, Richmond, Wimbledon), and North London conservation areas (St John's Wood, Regent's Park). Every London borough is covered, with no borough surcharge.",
  },
  {
    question: "Do you work in London conservation areas and on listed buildings?",
    answer:
      "Yes. A significant proportion of our London work is in conservation areas, and we regularly specify doors for listed and grade-II listed properties. The door design is coordinated with the local planning authority and, where appropriate, the conservation officer. We supply the drawings and specification documents planning applications require. Steel doors in black, navy, heritage green, British racing green, or any RAL that respects the conservation area palette are all common specifications.",
  },
  {
    question: "How do you access central London townhouses for survey and installation?",
    answer:
      "London access is usually the first constraint discussed on the survey call. Parking permits, ULEZ, scaffolding for upper-floor sidelights, pedestrianised streets and tight terrace frontages are all handled as part of the project. Our installation vehicle and team are ULEZ-compliant. We coordinate with the property manager, porter or concierge on mansion block installations. On tight terrace frontages we stage delivery to minimise street presence.",
  },
  {
    question: "Can a steel entrance door match a Georgian or Victorian London townhouse?",
    answer:
      "Yes, and this is the majority of our London work. A bespoke steel door is fabricated, not moulded, so panel proportions, panel depths, moulding profiles, knocker placement and letterplate position are specified to match the architectural period of the building. Six-panel Georgian configurations, four-panel Victorian proportions, Edwardian glazed upper panels and Regency arched fanlights are all typical specifications in our London portfolio. Steel is the structural advantage; bespoke fabrication delivers the historical authenticity.",
  },
  {
    question: "What security standard should a luxury London front door meet?",
    answer:
      "For a central London townhouse, the baseline should be PAS 24 and SR3. PAS 24 is the regulatory minimum. SR3 under BS EN 1627 Class 3 is the insurer-recognised standard for genuine security, tested against a twenty-minute sustained attack with heavy tools. For higher-value properties or properties flagged by the owner's insurer, SR4 under LPS 1175 Issue 8 is the commercial-grade upgrade. SteelR delivers SR3 as standard on every door and offers SR4 as an upgrade on every door.",
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
      name: "Luxury Steel Entrance Doors London",
      item: "https://steelr.co.uk/luxury-steel-entrance-door-london",
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

export default function LondonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Luxury Steel Entrance Doors, London"
        h1="Luxury Steel Entrance Doors London — Bespoke, Installed Across All Boroughs"
        intro={{
          pretitle: "London coverage",
          title:
            "Bespoke steel entrance doors for central London townhouses, mansion blocks and conservation-area homes",
          body: (
            <>
              London is the majority of our UK work. The brief varies
              enormously, from a Georgian portico in Belgravia to a
              Victorian terrace in Chiswick to a contemporary Mayfair
              mansion block, but the underlying requirements tend to
              converge. Owners want a door that respects the architectural
              period of the building, meets serious security
              certifications, satisfies planning and conservation area
              constraints, and will still look correct in twenty-five
              years when the rest of the street has replaced its doors
              twice.
            </>
          ),
          body2: (
            <>
              This page sets out the specification patterns we see most
              often in London, the boroughs we work in most frequently,
              and how the survey-to-installation process handles the
              practical constraints of central London access. Every door
              is PAS 24 certified and SR3 rated as standard, with SR4
              (LPS 1175) available as a commercial-grade upgrade on every
              door.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Borough coverage",
            title: "Every London borough, no borough surcharge",
            image: {
              src: "/images/gallery/steelr-black-traditional-columns-mansion.jpg",
              alt: "Black traditional steel entrance door with stone columns on a London mansion",
            },
            body: (
              <>
                Our London installation volume is concentrated in West
                London and conservation-area property across the city.
                Kensington, Chelsea, Fulham, Notting Hill, Holland Park,
                Chiswick, Hammersmith and Mayfair are the boroughs we
                install in most frequently. We also regularly work in
                Belgravia, St John&apos;s Wood, Primrose Hill, Hampstead,
                Highgate, Marylebone and Regent&apos;s Park.
              </>
            ),
            body2: (
              <>
                South West London installations cover Putney, Barnes,
                Richmond, Wimbledon, Clapham and Dulwich. North London
                installations cover Islington, Crouch End and Muswell Hill.
                East London coverage extends to Shoreditch, Islington and
                the converted warehouse properties around Wapping. Every
                borough is covered at the same rate with no borough
                surcharge. A full listing of London area pages is on the{" "}
                <Link
                  href="/areas/london"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  London hub page
                </Link>
                .
              </>
            ),
            list: [
              "West London: Kensington, Chelsea, Fulham, Notting Hill, Holland Park, Chiswick, Hammersmith",
              "Central: Mayfair, Belgravia, Marylebone, St James's",
              "North: Hampstead, Highgate, St John's Wood, Primrose Hill",
              "South West: Putney, Barnes, Richmond, Wimbledon, Clapham, Dulwich",
              "Islington, Shoreditch, Wapping and wider E1 / N1",
            ],
          },
          {
            pretitle: "Conservation and planning",
            title: "Coordinated with the planning authority where required",
            body: (
              <>
                A substantial part of our London work sits inside
                conservation areas, and some inside listed or grade-II
                listed properties. The common pattern is a Victorian,
                Edwardian or Georgian property where the existing door is
                either original and failing, or an unsympathetic
                replacement from the 1980s that needs removing. The brief
                is usually to restore the period aesthetic in a door that
                meets current security and thermal performance standards.
              </>
            ),
            body2: (
              <>
                We supply drawings, elevations, sections and material
                specifications suitable for a planning application or a
                conservation area consent submission. Where the planning
                authority has a preferred palette, we specify within it.
                Steel allows for period-correct panel geometry, fanlight
                proportions, knocker placement and letterplate style that
                a composite or uPVC replacement simply cannot reproduce.
                For deeper coverage of the aesthetic patterns, see the{" "}
                <Link href="/colours" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  RAL colours page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Security specification",
            title: "The standard a central London door should meet",
            body: (
              <>
                Central London residential burglary patterns have shifted
                over the past decade. Opportunist attempts on doors have
                declined as PAS 24 certification has become universal on
                new-builds. Planned attacks on high-value properties
                involving power tools and sustained forced entry have
                increased. PAS 24 alone does not address this tier of
                attack.
              </>
            ),
            body2: (
              <>
                SR3 under BS EN 1627 Class 3 does, and is the standard we
                install on every London door as a matter of course. For
                owners whose insurer has flagged a higher risk profile, or
                who want the certification used for data centre entrances
                on their home, SR4 under LPS 1175 Issue 8 is the
                commercial-grade upgrade. It is rarely seen on a
                residential front door. It is offered on every SteelR
                door. More detail on the{" "}
                <Link href="/security" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  security page
                </Link>{" "}
                and the{" "}
                <Link
                  href="/sr3-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR3 residential steel door page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Access and installation",
            title: "Central London access is the first thing we survey for",
            body: (
              <>
                Parking permits, ULEZ compliance, scaffolding for
                upper-floor sidelights, pedestrianised streets, tight
                terrace frontages, managed mansion blocks, porter
                protocols, neighbour access agreements, time-of-day
                restrictions in conservation areas. Every London
                installation has access constraints. The survey visit
                covers them all before a single piece of steel is cut.
              </>
            ),
            body2: (
              <>
                Our installation vehicle is ULEZ-compliant. Fitters are
                DBS-checked and fully insured. Installation is completed
                in a single day for a single-leaf door, typically two
                days for a double-door or sidelight configuration. We
                coordinate with property managers, porters and concierge
                teams on mansion block installs and stage delivery to
                minimise street presence on tight frontages.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/areas/london",
              label: "London areas directory",
              description: "All thirty London boroughs covered, with dedicated borough pages for the most frequent.",
            },
            {
              href: "/bespoke-steel-front-doors-uk",
              label: "Bespoke steel front doors UK",
              description: "The full SteelR model, service process and national coverage.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "SR3 residential steel doors",
              description: "What SR3 certification means, how testing works, and why it is the London baseline.",
            },
            {
              href: "/colours",
              label: "RAL colour options",
              description: "Any RAL, dual-colour optional, heritage palettes for conservation areas.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Start with a London survey visit"
        enquirySource="hub-luxury-london"
        enquiryContextLabel="Luxury Steel Entrance Doors London"
      />
    </>
  );
}
