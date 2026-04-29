import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Bespoke Steel Front Doors UK | Made to Measure, Installed Nationwide | SteelR",
  description:
    "Bespoke steel front doors for UK homes. Made to measure, designed to your exact specification, installed by our own fitters. PAS 24, SR3, SR4 LPS 1175 upgrade.",
  alternates: { canonical: "https://steelr.co.uk/bespoke-steel-front-doors-uk" },
  openGraph: {
    title: "Bespoke Steel Front Doors UK | SteelR",
    description:
      "Bespoke steel front doors for UK homes. Made to measure in the UK, installed nationwide. PAS 24, SR3, SR4 (LPS 1175), Secured by Design, FD30.",
    url: "https://steelr.co.uk/bespoke-steel-front-doors-uk",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does bespoke mean for a steel front door?",
    answer:
      "Bespoke means the door is designed and manufactured specifically for your property. There are no standard sizes and no pre-built catalogue items. Dimensions are set from an on-site structural survey. Colour is any RAL, with dual-colour optional. Hardware, glazing, panel profiles, knockers, letterboxes, house numerals and sidelight configuration are all specified individually. Nothing is cut or welded until the final design has been approved in writing.",
  },
  {
    question: "Are SteelR doors made in the United Kingdom?",
    answer:
      "Yes. Every SteelR door is manufactured in our UK facility from UK-sourced or European steel. Manufacture typically takes six to eight weeks. Installation is carried out by SteelR employees directly, never subcontracted. We do not import finished doors or frames.",
  },
  {
    question: "How long is the lead time on a bespoke steel front door?",
    answer:
      "Typically eight to twelve weeks from first enquiry to finished door in place. That breaks down as a site survey within one to two weeks, a design stage of about one week, six to eight weeks of manufacture and quality control, and installation itself in one day for a single door or two days for double doors and sidelight configurations.",
  },
  {
    question: "Which security ratings do bespoke steel front doors carry?",
    answer:
      "Every SteelR residential steel front door is PAS 24:2022 certified and SR3 rated to BS EN 1627 Class 3 as standard. SR4 under LPS 1175 Issue 8, a commercial-grade certification used for data centres and high-risk premises, is available as an upgrade. Secured by Design approval is included on every door. FD30S fire and smoke rating is standard, with FD60 available on request.",
  },
  {
    question: "Do you install bespoke steel front doors across the whole UK?",
    answer:
      "Yes. SteelR surveys, designs, manufactures and installs across the UK mainland with no regional surcharge. Our most frequent installation regions are London, Surrey, Buckinghamshire, Hertfordshire, Kent, Essex, Berkshire, Oxfordshire, Hampshire, Sussex, Cheshire, Manchester, Birmingham, Yorkshire, the South West and Scotland.",
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
      name: "Bespoke Steel Front Doors UK",
      item: "https://steelr.co.uk/bespoke-steel-front-doors-uk",
    },
  ],
});

const webPageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bespoke Steel Front Doors UK",
  url: "https://steelr.co.uk/bespoke-steel-front-doors-uk",
  description:
    "Bespoke steel front doors for UK homes. Made to measure in the United Kingdom, designed to exact specification, installed nationwide. PAS 24 certified, SR3 standard, SR4 (LPS 1175) upgrade.",
  about: [
    { "@type": "Thing", name: "Bespoke steel front doors" },
    { "@type": "Thing", name: "Steel entrance doors" },
    { "@type": "Thing", name: "SR3 rated residential doors" },
    { "@type": "Thing", name: "SR4 LPS 1175 doors" },
    { "@type": "Thing", name: "PAS 24 certified doors" },
    { "@type": "Thing", name: "Fire rated steel front doors" },
  ],
  isPartOf: { "@type": "WebSite", url: "https://steelr.co.uk" },
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

export default function BespokeHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webPageSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Bespoke Steel Front Doors, UK"
        h1="Bespoke Steel Front Doors UK — Made to Measure, Installed Nationwide"
        intro={{
          pretitle: "Made in the United Kingdom",
          title:
            "A steel front door designed for one property, built for one owner, installed once",
          body: (
            <>
              A bespoke steel front door is the opposite of a configurator.
              There are no standard sizes. No catalogue designs. No off-the-shelf
              hardware kits. Every SteelR door is designed around the aperture
              of a specific property, the architectural context it sits in,
              and a brief agreed with the owner. It is then manufactured in
              the UK and installed by the same small team that designed it.
            </>
          ),
          body2: (
            <>
              This page is the starting point. It explains what genuine
              bespoke means in this category, how a SteelR project runs from
              first call to handover, the technical standards we meet or
              exceed, and the supporting pages that go deeper on security
              ratings, thermal performance, fire compliance and the
              comparisons owners typically want to see before they commit.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "What bespoke means",
            title: "No configurators, no catalogues, no shortcuts",
            image: {
              src: "/images/gallery/steelr-navy-panelled-chrome-palms.jpg",
              alt: "Navy panelled bespoke steel front door with chrome hardware",
              objectPosition: "center 35%",
            },
            body: (
              <>
                Most front doors sold in the UK are standard sizes from a
                manufacturer catalogue, fitted to whatever opening the property
                happens to have. Composite, uPVC and even most timber doors
                come out of a small number of shared toolings. The owner picks
                a colour, a glazing pattern and maybe a handle finish, and the
                rest of the door is identical to every other door of that spec
                installed that year.
              </>
            ),
            body2: (
              <>
                A SteelR door is the reverse of that process. The dimensions
                start from your aperture, not a catalogue. The colour is any
                RAL, with dual-colour available so the inside face can differ
                from the outside. The hardware, glazing, panel mouldings,
                knocker, letterplate, house numerals, sidelights and toplights
                are each selected individually, then drawn up as a single
                coordinated specification before any steel is cut.
              </>
            ),
            list: [
              "Any RAL colour, dual-colour optional",
              "Polished chrome, brushed satin, antique brass, polished brass, matt black, brushed gold",
              "Clear, frosted, tinted, decorative, stained or obscured glazing, fire-rated where required",
              "Flat, raised, ribbed, fluted and bespoke moulded panel profiles",
              "Sidelights and toplights in any configuration the aperture allows",
            ],
          },
          {
            pretitle: "How a project runs",
            title: "Four stages, one point of contact, eight to twelve weeks",
            body: (
              <>
                Every SteelR project runs through the same four stages,
                handled by the same small team, with a single point of
                contact from first enquiry to finished door. Stage one is a
                short discovery call within two hours of your enquiry landing.
                Stage two is an on-site structural survey carried out by our
                own surveyor, typically within one to two weeks, with a
                written report, CAD drawing and quotation back to you within
                five working days.
              </>
            ),
            body2: (
              <>
                Stage three is design. You approve the RAL colour, hardware,
                glazing, panels, knockers, letterplate, house numerals and
                sidelight configuration. Revisions are included. Nothing goes
                into manufacture until you sign off. Stage four is six to
                eight weeks of UK manufacture followed by a single-day
                installation by our own DBS-checked fitters. A full
                walkthrough of the process is set out on the{" "}
                <Link href="/process" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  process page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "What a SteelR door is built to",
            title: "Certifications that apply to every door as standard",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point chrome locking mechanism on a SteelR steel front door",
              objectPosition: "center 35%",
            },
            body: (
              <>
                Every SteelR residential front door meets PAS 24:2022, the
                UK security standard mandated by Approved Document Q for
                new-build dwellings. Every door is also rated to SR3 under
                BS EN 1627:2011 Class 3, tested against a sustained
                twenty-minute attack using crowbars, drills, chisels and
                heavy-duty cutting tools. Every door carries Secured by
                Design approval, the UK police-preferred specification.
                Every door carries FD30S fire and smoke certification.
                None of these are upgrades. They are the baseline on every
                door we ship.
              </>
            ),
            body2: (
              <>
                The upgrade owners ask for most often is SR4 under LPS 1175
                Issue 8, the Loss Prevention Certification Board standard
                used for commercial security products such as bank vaults,
                data centres and high-risk premises. SR4 extends the attack
                duration and adds battery-operated cutting tools to the
                tool set. It is offered on every SteelR door as an upgrade,
                and it is rarely seen on a residential front door. Read
                more on the{" "}
                <Link href="/security" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  security page
                </Link>{" "}
                or the{" "}
                <Link
                  href="/security-specification"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  full PAS 24, SR3 and SR4 specification
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Where we work",
            title: "UK mainland, no regional surcharge",
            body: (
              <>
                SteelR surveys, designs, manufactures and installs across
                the UK mainland. There is no regional surcharge, regardless
                of distance. Most projects are concentrated in the Home
                Counties and the major conurbations, but nothing in the
                service model changes when the property is further afield.
                The same surveyor attends, the same factory builds the door,
                the same installation team fits it.
              </>
            ),
            body2: (
              <>
                Area pages are linked from the{" "}
                <Link href="/areas" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  main areas directory
                </Link>
                . Some of the most frequent regions are{" "}
                <Link href="/areas/london" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  London
                </Link>
                ,{" "}
                <Link href="/areas/surrey" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  Surrey
                </Link>
                ,{" "}
                <Link
                  href="/areas/buckinghamshire"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  Buckinghamshire
                </Link>
                ,{" "}
                <Link href="/areas/cheshire" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  Cheshire
                </Link>
                ,{" "}
                <Link href="/areas/kent" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  Kent
                </Link>
                ,{" "}
                <Link href="/areas/hampshire" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  Hampshire
                </Link>
                , and{" "}
                <Link href="/areas/scotland" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  Scotland
                </Link>
                .
              </>
            ),
          },
        ]}
        related={{
          title: "Supporting pages that go deeper",
          links: [
            {
              href: "/sr3-residential-steel-door",
              label: "SR3 residential steel doors",
              description: "What SR3 means for a home front door, and how BS EN 1627 Class 3 testing works.",
            },
            {
              href: "/pas-24-steel-entrance-door",
              label: "PAS 24 steel entrance doors",
              description: "The UK minimum for new-build security, and why we exceed it by a wide margin on every door.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design steel front doors",
              description: "What the UK police-preferred specification actually covers, and what it means for insurance.",
            },
            {
              href: "/lps-1673-attack-resistant-steel-door",
              label: "LPS 1673 attack-resistant steel doors",
              description: "The LPCB attack-resistance certification used on bank vaults and data centres, beyond forced-entry resistance. Available on residential specification by enquiry.",
            },
            {
              href: "/fire-rated-fd30-front-door",
              label: "Fire rated FD30 front doors",
              description: "FD30 and FD60 fire compliance for flats, HMOs, new builds and any home over eleven metres.",
            },
            {
              href: "/thermally-broken-steel-front-door",
              label: "Thermally broken steel front doors",
              description: "How a correctly engineered thermal break solves the cold-bridge problem on steel doors.",
            },
            {
              href: "/luxury-steel-entrance-door-london",
              label: "Luxury steel entrance doors in London",
              description: "Specification notes and portfolio highlights from London townhouses and country estates.",
            },
            {
              href: "/steel-front-door-vs-composite",
              label: "Steel front door versus composite",
              description: "Honest side-by-side comparison on security, longevity, thermal performance and cost.",
            },
            {
              href: "/uk-steel-doors-vs-imported",
              label: "UK-made steel doors versus imported systems",
              description: "Why we make in the UK, and how that affects lead time, aftercare and warranty terms.",
            },
            {
              href: "/steel-front-door-cost-uk",
              label: "How steel front door pricing works",
              description: "The factors that actually move the number, explained in plain English without guesswork.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Start with a conversation"
        enquirySource="hub-bespoke"
        enquiryContextLabel="Bespoke Steel Front Doors UK"
      />
    </>
  );
}
