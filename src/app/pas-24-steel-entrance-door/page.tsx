import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "PAS 24 Steel Entrance Door | Approved Document Q Explained | SteelR",
  description:
    "PAS 24:2022 is the UK security standard mandated by Approved Document Q for new-build dwellings. This page explains what PAS 24 tests, how the certification is granted, and why SteelR treats it as the floor rather than the ceiling for residential security.",
  alternates: { canonical: "https://steelr.co.uk/pas-24-steel-entrance-door" },
  openGraph: {
    title: "PAS 24 Steel Entrance Door | SteelR",
    description:
      "What PAS 24:2022 tests, how Approved Document Q applies to new-build doors, and why PAS 24 is the floor rather than the ceiling on SteelR specifications.",
    url: "https://steelr.co.uk/pas-24-steel-entrance-door",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is PAS 24 and when was it introduced?",
    answer:
      "PAS 24 is the UK security performance standard for doors and windows. The current version is PAS 24:2022, published by the British Standards Institution. It was introduced to provide a single national benchmark for forced-entry resistance on residential openings and has been referenced by UK Building Regulations since 2015 via Approved Document Q of the regulations.",
  },
  {
    question: "Is PAS 24 a legal requirement for a new front door?",
    answer:
      "On a new-build dwelling, yes. Approved Document Q of the UK Building Regulations requires that entrance doors to new-build houses and flats in England and Wales meet PAS 24 as a minimum. On a replacement door in an existing property, PAS 24 is not legally required but is strongly recommended and is the default specification used by insurers. Every SteelR door is PAS 24 certified regardless of whether the installation is a new build or a replacement.",
  },
  {
    question: "How does PAS 24 testing actually work?",
    answer:
      "PAS 24:2022 testing is conducted by an independent UKAS-accredited laboratory against a defined methodology. The door assembly is subjected to a sequence of manual manipulation tests (prising, drilling, cylinder attack), a cut test against the glazing where glazing is fitted, and a forced-entry test against the locking mechanism. Each sub-test has a time limit of a few minutes. The door must resist the full sequence to be awarded certification. The test simulates a casual opportunist attack, not a sustained attack by an experienced intruder.",
  },
  {
    question: "How does PAS 24 compare to SR3?",
    answer:
      "PAS 24 is a one-to-three-minute casual attack test using basic hand tools. SR3 under BS EN 1627 Class 3 is a twenty-minute sustained attack test using heavy-duty hand and power tools. They test against fundamentally different threat profiles. PAS 24 is designed to stop the class of attacker who gives up when the door does not open immediately. SR3 is designed to stop the class of attacker who does not give up. SteelR doors meet both, with SR4 available as a further commercial-grade upgrade.",
  },
  {
    question: "Can a door lose PAS 24 certification after installation?",
    answer:
      "PAS 24 certification is granted against the specific door assembly as manufactured. Installation that deviates from the approved fixing specification can invalidate the certification in practice, because the tested assembly is no longer what is in situ. This is a strong argument for installation by the manufacturer's own team rather than a third-party installer, which is our model. Every SteelR installation maintains the fixing specification the certification was granted against.",
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
      name: "PAS 24 Steel Entrance Door",
      item: "https://steelr.co.uk/pas-24-steel-entrance-door",
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

export default function Pas24Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="PAS 24 Steel Entrance Doors"
        h1="PAS 24 Steel Entrance Door — Approved Document Q Compliance Explained"
        intro={{
          pretitle: "The UK minimum for new-build residential doors",
          title:
            "PAS 24 is the legal floor, not the ceiling. Here is what it actually tests",
          body: (
            <>
              PAS 24:2022 is the UK security performance standard for
              doors and windows mandated by Approved Document Q of the
              Building Regulations. For any new-build dwelling in England
              and Wales, an entrance door that does not meet PAS 24
              cannot legally be installed. This page explains what PAS
              24 tests, how the certification works, and why SteelR
              treats PAS 24 as the starting point for residential
              security rather than the destination.
            </>
          ),
          body2: (
            <>
              Every SteelR door is PAS 24 certified as standard. It is
              also SR3 rated to BS EN 1627 Class 3 as standard, Secured
              by Design approved as standard, and FD30S fire rated as
              standard. SR4 under LPS 1175 Issue 8 is available as a
              commercial-grade upgrade on every door. PAS 24 sits at
              the bottom of that stack, as the regulatory floor.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "What PAS 24 tests",
            title: "A one-to-three-minute casual attack sequence",
            body: (
              <>
                PAS 24:2022 testing is conducted by an independent
                UKAS-accredited laboratory. The door assembly is
                subjected to a defined sequence of attacks simulating
                an opportunist burglar with basic hand tools. The
                sequence includes manual manipulation (prising the
                door off its hinges, levering the locking mechanism),
                a cut test against any glazing panel to test laminate
                resistance, a cylinder attack against the lock, and a
                forced-entry test against the locking system as a
                whole.
              </>
            ),
            body2: (
              <>
                Each sub-test has a time limit measured in minutes.
                The whole sequence typically represents one to three
                minutes of active attack time. The door must resist
                the full sequence to be awarded certification. If it
                fails at any stage, the certification is not granted.
                This is sufficient to stop the class of attacker who
                abandons the effort when the door does not open
                immediately, which is the most common pattern in
                residential burglary attempts.
              </>
            ),
          },
          {
            pretitle: "Approved Document Q",
            title: "The Building Regulations reference that makes PAS 24 mandatory",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "PAS 24 compliant multi-point locking mechanism on a SteelR steel front door",
            },
            body: (
              <>
                Approved Document Q of the UK Building Regulations
                covers security in dwellings. It was introduced in 2015
                and applies to all new-build houses, new flats (including
                conversions created by material change of use), and any
                door that provides access to a new dwelling. The document
                specifies that entrance doors to new dwellings must
                resist unauthorised access, and that PAS 24 is the
                accepted standard to demonstrate compliance.
              </>
            ),
            body2: (
              <>
                For any new-build project, specifying a non-PAS 24 door
                is not an option at Building Control sign-off. Every
                SteelR door exceeds PAS 24 and comes with the PAS 24
                certificate as part of the handover pack, so Building
                Control sign-off is straightforward.
              </>
            ),
          },
          {
            pretitle: "Why PAS 24 is the floor",
            title: "A tier below where serious security actually begins",
            body: (
              <>
                PAS 24 is a test of whether a door resists the first
                three minutes of a casual forced-entry attempt. That is
                sufficient for the majority of residential burglary
                patterns, where the attacker has no tool beyond a
                screwdriver and abandons the attempt when the door
                does not yield quickly. It is not sufficient for a
                planned attack by an experienced intruder with heavy
                tools. That tier of threat requires SR3 under BS EN
                1627 Class 3, which tests against twenty minutes of
                sustained attack with crowbars, drills and heavy-duty
                cutting tools.
              </>
            ),
            body2: (
              <>
                The direct comparison sits on the{" "}
                <Link
                  href="/sr3-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR3 residential steel door page
                </Link>
                . The underlying point is that PAS 24 is necessary but
                not sufficient for a residential front door on a
                high-value property, a property in an area with
                elevated burglary rates, or a property whose insurer
                has specifically requested a higher standard.
              </>
            ),
          },
          {
            pretitle: "Installation and certification",
            title: "A PAS 24 door that is not installed properly is not a PAS 24 door",
            body: (
              <>
                PAS 24 certification is awarded against the complete
                door assembly as manufactured, installed against the
                fixing specification defined during testing. If the
                installation deviates from that specification, for
                example if the frame is not fixed through the required
                points, or the jamb depth does not match the
                certification, the installed door may no longer meet
                the standard it was tested to.
              </>
            ),
            body2: (
              <>
                This is why manufacturer installation matters. Third-
                party installers working from a generic handbook
                sometimes do not preserve the fixing specification the
                certification depends on. Every SteelR installation is
                carried out by the same team that manufactures the
                door, to the specification the door was certified to.
                The PAS 24 certificate you receive at handover is
                valid against the door in situ, not just the door as
                it left the factory. More on the installation process
                on the{" "}
                <Link href="/process" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  process page
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
              href: "/sr3-residential-steel-door",
              label: "SR3 residential steel doors",
              description: "The twenty-minute attack test that sits above PAS 24 on every SteelR door.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design steel front doors",
              description: "The UK police-preferred specification, which uses PAS 24 as a prerequisite.",
            },
            {
              href: "/security-specification",
              label: "Full PAS 24, SR3 and SR4 specification",
              description: "Every standard a SteelR door meets, set out side by side.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="PAS 24 certification is the floor. Start above it."
      />
    </>
  );
}
