import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "SR3 Residential Steel Door | BS EN 1627 Class 3 Explained | SteelR",
  description:
    "SR3 is the baseline rating on every SteelR residential steel front door. What SR3 means under BS EN 1627 Class 3, the 20-minute attack test, vs PAS 24.",
  alternates: { canonical: "https://steelr.co.uk/sr3-residential-steel-door" },
  openGraph: {
    title: "SR3 Residential Steel Door | BS EN 1627 Class 3 | SteelR",
    description:
      "What SR3 means on a residential steel front door, how BS EN 1627 Class 3 is tested, and how it compares with PAS 24 and the SR4 (LPS 1175) upgrade.",
    url: "https://steelr.co.uk/sr3-residential-steel-door",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does SR3 mean on a residential steel door?",
    answer:
      "SR3 is Security Rating 3 under the European standard BS EN 1627:2011, Class 3. It certifies that the door has been independently tested against a sustained forced-entry attack by an experienced intruder using heavy-duty hand and power tools. The test lasts twenty minutes of active attack time, uses crowbars, drills, chisels and heavy-duty cutting tools, and the door must resist entry for the full duration. Every SteelR residential front door is SR3 rated as standard.",
  },
  {
    question: "How is SR3 different from PAS 24?",
    answer:
      "PAS 24 is the UK minimum security standard required by Approved Document Q for new-build dwellings. It tests resistance to a casual opportunist attack of around one to three minutes using basic hand tools. SR3 is a higher tier. It tests resistance to a sustained twenty-minute attack using heavy-duty and power tools. PAS 24 is designed to stop casual burglars. SR3 is designed to stop experienced ones. SteelR doors meet PAS 24 and SR3 as standard on every residential front door.",
  },
  {
    question: "Is SR3 the highest residential security rating available?",
    answer:
      "SR3 is the upper end of the BS EN 1627 Class scale that applies to standard residential door specifications. The tiers above, SR4 to SR6, were originally written for commercial and government applications. SteelR offers SR4 under LPS 1175 Issue 8 as an upgrade on any residential front door. SR4 extends the attack duration further than SR3 and adds battery-operated cutting tools and larger prying equipment to the tool set. It is commercial-grade, rarely seen on a home front door, and an upgrade rather than the standard.",
  },
  {
    question: "Does SR3 affect home insurance premiums?",
    answer:
      "In most cases yes. Home insurers treat independently certified security standards as material reductions in forced-entry risk. SR3 certification, combined with Secured by Design approval, is usually sufficient evidence for insurers to accept the property as meeting or exceeding their minimum door specification, and in many cases to offer a premium adjustment. Always confirm with your insurer directly, referencing the SR3 and Secured by Design certificates supplied with the door.",
  },
  {
    question: "How does SR3 testing actually work?",
    answer:
      "SR3 is tested by an independent UKAS-accredited laboratory against a written methodology defined in BS EN 1627:2011. A trained tester attacks the door and frame assembly for twenty minutes of active attack time, using a tool set specified in the standard. The attacker must fail to create a passage large enough to enter. The test is conducted against the complete door system, frame, leaf, locking mechanism and hardware. Individual component certificates are not sufficient. The whole assembly must pass.",
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
      name: "SR3 Residential Steel Door",
      item: "https://steelr.co.uk/sr3-residential-steel-door",
    },
  ],
});

const webPageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SR3 Residential Steel Door",
  url: "https://steelr.co.uk/sr3-residential-steel-door",
  description:
    "SR3 is the baseline security rating on every SteelR residential steel front door. BS EN 1627 Class 3 explained, comparison with PAS 24, and relationship to the SR4 LPS 1175 upgrade.",
  about: [
    { "@type": "Thing", name: "SR3 rated doors" },
    { "@type": "Thing", name: "BS EN 1627 Class 3" },
    { "@type": "Thing", name: "Residential steel front doors" },
    { "@type": "Thing", name: "PAS 24" },
    { "@type": "Thing", name: "LPS 1175 Issue 8" },
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

export default function Sr3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webPageSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="SR3 Residential Steel Doors"
        h1="SR3 Residential Steel Door — BS EN 1627 Class 3 Explained"
        intro={{
          pretitle: "BS EN 1627 Class 3",
          title:
            "What an SR3 rating really means on a front door you actually live behind",
          body: (
            <>
              SR3 is the security rating on the outside of the envelope for
              a residential front door. It is a certification, not a marketing
              line. It means the door has been independently tested against a
              sustained, twenty-minute forced-entry attack by a trained
              attacker using heavy-duty hand and power tools, and has passed.
              Every SteelR residential steel front door is SR3 rated as
              standard. Not as an optional upgrade, not on selected designs.
              On every door.
            </>
          ),
          body2: (
            <>
              This page explains what SR3 actually tests, how the process
              compares with the PAS 24 certification most new-build homes
              receive, why SR3 is the threshold insurers and Secured by
              Design recognise as genuinely serious, and where the SR4
              commercial-grade upgrade sits in relation to it.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "The test itself",
            title: "Twenty minutes, heavy tools, trained attacker",
            body: (
              <>
                SR3 testing is conducted by an independent UKAS-accredited
                laboratory against the methodology defined in BS EN
                1627:2011 Class 3. The door is installed into a test frame
                that replicates the real fixing conditions it will face in
                a home. A trained tester then attacks the full assembly
                with the tool set specified for Class 3, which includes
                crowbars, heavy pry bars, chisels, drills and heavy-duty
                cutting tools.
              </>
            ),
            body2: (
              <>
                Twenty minutes of active attack time is a long time for a
                door to resist. Real-world burglaries are usually aborted
                after two to four minutes of noise and visible damage. SR3
                sits an order of magnitude above the real-world attack
                duration a residential door needs to survive, which is
                exactly the point. The test is not a prediction of what
                will happen, it is a stress test that proves what the door
                can take if it has to.
              </>
            ),
          },
          {
            pretitle: "How SR3 compares",
            title: "PAS 24 is the legal minimum. SR3 is a different tier",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point chrome locking mechanism on an SR3 rated steel front door",
            },
            body: (
              <>
                PAS 24:2022 is the UK security standard mandated by Approved
                Document Q of the Building Regulations for new-build
                dwellings. It is a respectable standard and meets the legal
                minimum. PAS 24 testing simulates a casual, opportunist
                attack lasting roughly one to three minutes using basic hand
                tools. It is designed to stop the class of attacker who
                gives up when the door does not open immediately.
              </>
            ),
            body2: (
              <>
                SR3 is designed to stop the class of attacker who does not
                give up. The tool set is heavier. The duration is longer by
                an order of magnitude. The testing body is independent. The
                outcome is a fundamentally higher tier of protection, not a
                marginal improvement. PAS 24 is the threshold to legally
                install a door on a new-build. SR3 is the threshold at
                which insurers, Secured by Design, and competent owners
                treat the door as genuinely secure. For the full PAS 24
                specification alongside SR3 and SR4, see the{" "}
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
            list: [
              "PAS 24: one to three minute casual attack, basic hand tools",
              "SR2: three minutes, screwdrivers, pliers, wedges",
              "SR3: twenty minutes, crowbars, drills, chisels, heavy-duty cutting tools",
              "SR4 (LPS 1175): longer duration, adds battery-operated cutting tools and larger prying equipment",
            ],
          },
          {
            pretitle: "The SR4 upgrade",
            title: "Where SR3 ends, SR4 begins",
            body: (
              <>
                SR4 is Security Rating 4 under LPS 1175 Issue 8, the Loss
                Prevention Certification Board scheme used for commercial
                security products. It is the certification used on bank
                vaults, data centres and high-risk commercial premises.
                It tests resistance to a longer attack than SR3, using a
                broader tool set that includes battery-operated cutting
                tools and larger prying equipment. Rarely seen on a
                residential front door.
              </>
            ),
            body2: (
              <>
                SteelR offers SR4 as an upgrade on any residential steel
                front door. It is the commercial-grade option for owners
                who want the certification standard used for data centre
                entrances on their home. It does not replace SR3. SR3 is
                the baseline on every door we make. SR4 is the step beyond.
                A deeper explanation sits on the{" "}
                <Link href="/security" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  security page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Why SR3 as standard matters",
            title: "Certifications that sit on every door, not just the flagship",
            body: (
              <>
                A recurring pattern in this category is manufacturers
                advertising high security ratings as available on the
                flagship design, then shipping lower-spec doors on the
                rest of the range. Every SteelR door is SR3 rated. The
                certification is not the flagship, it is the floor.
                Combined with PAS 24:2022, Secured by Design, FD30S
                fire and smoke rating, and ISO 9001 UK manufacturing,
                this is the package applied to every single door, whether
                the brief is a contemporary single-leaf townhouse entrance
                in Kensington or a double-door country estate entrance in
                Oxfordshire.
              </>
            ),
            body2: (
              <>
                The collection is browsable on the{" "}
                <Link href="/collection" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  collection page
                </Link>
                . Every door shown carries the same SR3 baseline, with SR4
                available on all of them.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/pas-24-steel-entrance-door",
              label: "PAS 24 steel entrance doors",
              description: "The Approved Document Q threshold, and why it is the floor and not the goal.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design",
              description: "UK police-preferred specification, insurance recognition, and how the approval process works.",
            },
            {
              href: "/security-specification",
              label: "Full PAS 24, SR3 and SR4 specification",
              description: "Side-by-side comparison of every standard a SteelR door meets.",
            },
            {
              href: "/bespoke-steel-front-doors-uk",
              label: "Bespoke steel front doors UK",
              description: "Hub page covering the full SteelR model, design process and regional coverage.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Specify with confidence"
        enquirySource="hub-sr3"
        enquiryContextLabel="SR3 Residential Steel Doors"
      />
    </>
  );
}
