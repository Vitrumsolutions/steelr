import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Fire Rated FD30 Front Door | Flats, New Builds, HMOs | SteelR",
  description:
    "FD30 and FD60 fire rated steel front doors. Standard on every SteelR specification. This page explains what FD30 means, where it is legally required, how FD30 relates to FD30S and FD60, and how fire rating combines with PAS 24, SR3 and Secured by Design on a single door.",
  alternates: { canonical: "https://steelr.co.uk/fire-rated-fd30-front-door" },
  openGraph: {
    title: "Fire Rated FD30 Front Door | SteelR",
    description:
      "What FD30 means, where it is legally required, and how fire rating combines with PAS 24, SR3 and Secured by Design on one SteelR door.",
    url: "https://steelr.co.uk/fire-rated-fd30-front-door",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does FD30 actually mean on a front door?",
    answer:
      "FD30 means the door is rated to resist the passage of fire for 30 minutes under a standardised fire resistance test, typically to BS 476-22 or BS EN 1634-1. Integrity is maintained for 30 minutes, giving occupants time to evacuate and fire services time to arrive. FD30S adds the S for smoke, which means the door also resists the passage of cold smoke under separate testing. FD60 is the 60-minute equivalent, required in higher-risk applications.",
  },
  {
    question: "Where is an FD30 front door legally required?",
    answer:
      "FD30 is required on entrance doors to individual flats within multi-occupied residential buildings under Approved Document B of the Building Regulations. Since the Building Safety Act 2022 and the Fire Safety Act 2021, enforcement is materially stricter, particularly in buildings over 11 metres. HMOs, houses in multiple occupation, typically require FD30 or higher on entrance and bedroom doors. Standalone dwellings do not legally require FD30 on the front door, but the rating is often specified by insurers or architects for high-value properties.",
  },
  {
    question: "What is the difference between FD30 and FD30S?",
    answer:
      "FD30 is a 30-minute fire integrity rating. FD30S adds the S suffix for smoke seal performance, meaning the door is also tested against cold smoke passage through intumescent and smoke seals fitted to the frame and leaf. FD30S is the current standard for flat entrance doors in multi-occupied buildings because cold smoke is a major cause of fatality in dwelling fires, often ahead of the fire itself reaching occupants. Every SteelR door is FD30S rated as standard.",
  },
  {
    question: "Do I need FD60 rather than FD30?",
    answer:
      "FD60 is required in specific applications: doors onto protected escape routes in larger buildings, doors in stairwell enclosures, doors in higher-risk buildings as defined under the Building Safety Act, and doors where the building's fire strategy specifies 60-minute rather than 30-minute compartmentation. A fire risk assessment or the building's approved fire strategy document will specify the requirement. SteelR offers FD60 as an upgrade on every door where the application requires it.",
  },
  {
    question: "Can one door be fire rated, security rated and thermally engineered all at once?",
    answer:
      "Yes, and every SteelR door is all three as standard. FD30S fire and smoke rating, PAS 24 security certification and SR3 rating to BS EN 1627 Class 3 are all applied to the same door as standard. Secured by Design approval is also included. Thermal break engineering is built into the base profile. SR4 under LPS 1175 Issue 8 and FD60 are both available as upgrades. The point of a bespoke steel door is that you do not have to choose between fire, security and thermal performance; the door is engineered to deliver all three simultaneously.",
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
      name: "Fire Rated FD30 Front Door",
      item: "https://steelr.co.uk/fire-rated-fd30-front-door",
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

export default function Fd30Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Fire Rated FD30 Front Doors"
        h1="Fire Rated FD30 Front Door — Flats, New Builds, HMOs and High-Value Homes"
        intro={{
          pretitle: "FD30, FD30S and FD60 explained",
          title:
            "A fire rated front door for your home, flat or development that also meets serious security standards",
          body: (
            <>
              Every SteelR door carries FD30S fire and smoke rating as
              standard. Not as an upgrade, not on selected designs. On
              every door. FD60 is available as an upgrade where the
              application requires it. This page explains what the
              ratings mean, where they are legally required, and how
              fire rating combines with PAS 24, SR3 and Secured by
              Design on a single door assembly.
            </>
          ),
          body2: (
            <>
              There is a broader sibling page on{" "}
              <Link
                href="/fire-rated-doors"
                className="link-gold-underline"
                style={{ color: "#1a1a18" }}
              >
                fire rated steel doors
              </Link>{" "}
              aimed at developers, architects and housing associations
              specifying at scale. This page is focused on the front
              door of an individual home, flat or HMO.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "The rating itself",
            title: "FD30 is 30 minutes of fire integrity, tested to BS 476-22 or BS EN 1634-1",
            body: (
              <>
                FD30 rating is awarded against a standardised fire
                resistance test, typically to the UK standard BS 476-22
                or the European equivalent BS EN 1634-1. The door is
                installed into a test furnace rig and exposed to a
                defined fire curve rising to above 800°C over the test
                duration. For FD30, the door must maintain its structural
                integrity and prevent flame passage through the leaf,
                frame and door-to-frame seal for a minimum of 30
                minutes.
              </>
            ),
            body2: (
              <>
                FD30S adds smoke performance to the rating. The S suffix
                means the door has also been tested against cold smoke
                passage through intumescent seals and smoke brushes
                fitted to the leaf and frame. Cold smoke is a major
                cause of fatality in dwelling fires, often before the
                fire itself reaches occupants. FD30S is the current
                best-practice rating for flat entrance doors and is
                the standard on every SteelR door.
              </>
            ),
            list: [
              "FD30: 30 minutes integrity against flame and hot gas",
              "FD30S: 30 minutes integrity plus cold smoke seal performance",
              "FD60: 60 minutes integrity against flame and hot gas",
              "FD60S: 60 minutes integrity plus cold smoke seal performance",
            ],
          },
          {
            pretitle: "Where it is legally required",
            title: "Approved Document B, Fire Safety Act 2021, Building Safety Act 2022",
            image: {
              src: "/images/gallery/steelr-black-panelled-double-letterbox.jpg",
              alt: "Fire rated FD30S black steel flat entrance door with double letterbox",
            },
            body: (
              <>
                Approved Document B of the Building Regulations mandates
                FD30 as a minimum on entrance doors to individual flats
                within multi-occupied residential buildings. The Fire
                Safety Act 2021 extended the scope of the Fire Safety
                Order 2005 to explicitly cover flat entrance doors in
                common parts. The Building Safety Act 2022 introduced a
                higher-risk building regime and a gateway process for
                residential buildings over 18 metres, with stricter
                enforcement on fire door specification and maintenance.
              </>
            ),
            body2: (
              <>
                For houses in multiple occupation, FD30 is typically
                required on entrance doors and internal protected
                escape routes. For individual private dwellings, FD30
                is not legally required on the front door but is often
                specified by insurers on higher-value properties and
                is a sensible upgrade where the property has high-value
                contents or complex evacuation geometry.
              </>
            ),
          },
          {
            pretitle: "Fire plus security plus thermal",
            title: "One door, four certifications, plus thermal engineering",
            body: (
              <>
                The practical advantage of a bespoke steel door is that
                fire, security and thermal performance are engineered
                into the same assembly rather than chosen between. Every
                SteelR door is FD30S rated, PAS 24 certified, SR3 rated
                to BS EN 1627 Class 3 and Secured by Design approved
                as the standard specification. The thermal break is
                built into the base profile so U-values meet or exceed
                Part L.
              </>
            ),
            body2: (
              <>
                Upgrades are available against every dimension. FD60
                replaces FD30S where the application requires 60-minute
                integrity. SR4 under LPS 1175 Issue 8 replaces SR3 where
                a commercial-grade security certification is specified.
                Both can be applied to the same door assembly. The full
                specification stack is set out on the{" "}
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
          {
            pretitle: "Installation",
            title: "A fire door is only rated in situ if installed to specification",
            body: (
              <>
                Fire door certification is awarded against a complete
                assembly installed against a defined fixing specification.
                Incorrect installation invalidates the rating in practice
                because the tested assembly is no longer what is in place.
                Issues commonly seen on third-party installations include
                incorrect gap clearances (compressing intumescent seals
                beyond their rated range), missing cold smoke brushes,
                frame packing that breaks the tested fixing line, and
                incorrect hinge specification that prevents the leaf
                closing fully under fire conditions.
              </>
            ),
            body2: (
              <>
                Every SteelR installation is carried out by our own
                in-house fitters to the specification the door was
                certified to. The FD30S certificate supplied at
                handover applies to the door in situ, not just the
                door as it left the factory. For flat and HMO
                applications where fire door inspection regimes apply
                under the Fire Safety (England) Regulations 2022, the
                installation and certification records are provided
                as part of the handover pack for the building&apos;s
                responsible person to file.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/fire-rated-doors",
              label: "Fire rated steel doors for developers and architects",
              description: "Broader coverage for new builds, flats, HMOs and housing association specifications.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "SR3 residential steel doors",
              description: "The security rating that sits alongside FD30S on every SteelR door.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design steel front doors",
              description: "The UK police-preferred specification, which sits on top of PAS 24.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Fire, security, thermal. One door."
      />
    </>
  );
}
