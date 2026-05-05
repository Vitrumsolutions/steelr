import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "SR3 Residential Steel Door | LPS 1175 Enhanced | SteelR",
  description:
    "LPS 1175 SR3 is SteelR's Enhanced upgrade tier above the BS EN 1627 RC4 Standard. The LPCB police-preferred specification, available on every door.",
  alternates: { canonical: "https://steelr.co.uk/sr3-residential-steel-door" },
  openGraph: {
    title: "SR3 Residential Steel Door | LPS 1175 Enhanced Upgrade | SteelR",
    description:
      "LPS 1175 SR3 is SteelR's Enhanced upgrade tier above the BS EN 1627 RC4 Standard. The LPCB police-preferred specification, available on every door.",
    url: "https://steelr.co.uk/sr3-residential-steel-door",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does LPS 1175 SR3 mean on a residential steel door?",
    answer:
      "SR3 is Security Rating 3 under the LPCB scheme LPS 1175. It certifies that the door has been independently tested against a sustained forced-entry attack by an experienced intruder using heavy-duty hand and power tools. The LPCB methodology tests the complete door assembly under a defined tool set and attack-duration matrix. SR3 is SteelR's Enhanced upgrade tier, sitting above the BS EN 1627 RC4 standard residential specification. It is available on any SteelR door and is the recommended specification for high-value properties, conservation areas, listed buildings, and properties where an insurer or specifier has requested a police-preferred LPCB scheme certification.",
  },
  {
    question: "How is SR3 different from PAS 24 and BS EN 1627 RC4?",
    answer:
      "PAS 24 is the UK minimum security standard required by Approved Document Q for new-build dwellings. It tests resistance to a casual opportunist attack of around one to three minutes using basic hand tools. BS EN 1627 RC4 (the European framework, single leaf, unglazed) is SteelR's standard residential specification, testing sustained forced-entry resistance with heavy-duty hand tools and battery-operated power tools. LPS 1175 SR3 is the LPCB-operated UK scheme used for police-preferred specifications, with a different tool-set and attack-duration methodology. SteelR offers all three on every door: PAS 24 as the regulatory baseline, RC4 as the European standard, SR3 as the LPCB-certified Enhanced upgrade.",
  },
  {
    question: "Is SR3 the highest residential security rating available?",
    answer:
      "SR3 is SteelR's Enhanced upgrade tier. SR4 (LPS 1175 D10 Issue 8) is the Commercial-grade tier above it, used in data centres and bank vaults, available on residential specification by upgrade. LPS 1673 attack-resistance certification (the AR.A300, AR.B180E, AR.B300E and AR.C120E classes used on bank vault outer doors and embassy residences) is the Ultra-high tier, available by enquiry where a documented threat assessment justifies it. SteelR offers a four-tier ladder: PAS 24 plus RC4 standard, SR3 enhanced, SR4 commercial-grade, LPS 1673 ultra-high.",
  },
  {
    question: "Does SR3 affect home insurance premiums?",
    answer:
      "In most cases yes. Home insurers treat independently certified security standards as material reductions in forced-entry risk. LPS 1175 SR3 certification, combined with Secured by Design approval, is usually sufficient evidence for insurers to accept the property as meeting or exceeding their minimum door specification, and in many cases to offer a premium adjustment. High-net-worth specialist insurers in particular recognise the LPCB scheme as a benchmark. Always confirm with your insurer directly, referencing the SR3 certificate and Secured by Design accreditation supplied with the door.",
  },
  {
    question: "How does LPS 1175 SR3 testing actually work?",
    answer:
      "LPS 1175 testing is conducted by the Loss Prevention Certification Board (LPCB), part of BRE Global, a UKAS-accredited certification body. A trained tester attacks the complete door and frame assembly using the tool set specified for the SR3 class, for the LPS 1175 attack-duration matrix. The attacker must fail to create a passage large enough to enter. The test is conducted against the complete door system: frame, leaf, locking mechanism and hardware. Individual component certificates are not sufficient. The whole assembly must pass. SteelR's SR3 specifications use this LPCB-certified pathway.",
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
        h1="LPS 1175 SR3 Residential Steel Door. The Enhanced Upgrade Tier"
        intro={{
          pretitle: "LPS 1175 SR3. SteelR's Enhanced upgrade tier",
          title:
            "What an LPS 1175 SR3 rating really means on a front door you actually live behind",
          body: (
            <>
              LPS 1175 SR3 is the second tier in SteelR&apos;s four-tier
              security ladder. It sits above the BS EN 1627 RC4 standard
              residential specification, and below the SR4 Commercial-grade
              upgrade. It means the door has been independently certified
              by the Loss Prevention Certification Board (LPCB), part of
              BRE Global, against a sustained forced-entry attack by a
              trained attacker using heavy-duty hand and power tools.
              SR3 is available on any SteelR door as the Enhanced upgrade
              specification. It is the police-preferred LPCB scheme,
              recognised by UK home insurers, conservation officers, and
              specifiers for high-value or threat-assessed residential
              briefs.
            </>
          ),
          body2: (
            <>
              This page explains what SR3 actually tests, how the LPCB
              scheme differs from the European BS EN 1627 framework SteelR
              uses for the standard residential specification, why SR3 is
              the threshold UK home insurers recognise as genuinely
              serious, and where the SR4 commercial-grade upgrade and
              LPS 1673 ultra-high tiers sit in relation to it.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "The test itself",
            title: "LPCB-certified attack methodology with heavy tools and a trained tester",
            body: (
              <>
                LPS 1175 SR3 testing is conducted by the Loss Prevention
                Certification Board (LPCB), part of BRE Global, a
                UKAS-accredited certification body. The door is installed
                into a test frame that replicates the real fixing
                conditions it will face in a home. A trained tester then
                attacks the full assembly with the tool set specified for
                the SR3 class under LPS 1175. The tool set includes
                crowbars, heavy pry bars, chisels, drills and heavy-duty
                cutting tools.
              </>
            ),
            body2: (
              <>
                Real-world burglaries are usually aborted after two to four
                minutes of noise and visible damage. SR3 certification
                sits well above the real-world attack duration a
                residential door needs to survive, which is exactly the
                point. The test is not a prediction of what will happen,
                it is a stress test that proves what the door can take if
                it has to. SteelR offers SR3 as the Enhanced upgrade tier
                on any door, alongside the BS EN 1627 RC4 standard
                residential specification, the SR4 Commercial-grade
                upgrade, and LPS 1673 attack-resistance available by
                enquiry.
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
              "LPS 1175 SR3 (Issue 8): five minutes against crowbars, drills, chisels, heavy-duty cutting tools and a defined power-tool catalogue",
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
            pretitle: "Why the four-tier ladder matters",
            title: "Certifications available on any door, not just the flagship",
            body: (
              <>
                A recurring pattern in this category is manufacturers
                advertising high security ratings as available on the
                flagship design, then shipping lower-spec doors on the
                rest of the range. SteelR&apos;s four-tier ladder is
                available on every bespoke door. The standard residential
                specification (BS EN 1627 RC4 single leaf, unglazed,
                with PAS 24:2022, Secured by Design, FD30S fire and
                smoke rating, and ISO 9001 + ISO 14001 UK manufacturing,
                Made in Britain certified) sits as the baseline. The
                Enhanced upgrade (LPS 1175 SR3), the Commercial-grade
                upgrade (LPS 1175 SR4) and the Ultra-high tier (LPS 1673
                by enquiry) are each available on any door, whether the
                brief is a contemporary single-leaf townhouse entrance
                in Kensington or a double-door country estate entrance
                in Oxfordshire.
              </>
            ),
            body2: (
              <>
                The collection is browsable on the{" "}
                <Link href="/collection" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  collection page
                </Link>
                . Every door shown is available with any tier of the
                four-tier security ladder, configured to the brief during
                the design consultation.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/bs-en-1627-rc4-residential-steel-door",
              label: "BS EN 1627 RC4 (SteelR Standard tier)",
              description: "The European framework for sustained forced-entry resistance. Standard on every SteelR door, the tier SR3 sits above as the Enhanced upgrade.",
            },
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
              href: "/sr4-residential-steel-door",
              label: "LPS 1175 SR4 residential steel doors (Commercial-grade upgrade)",
              description: "The LPCB Commercial-grade certification used on data centres and bank vaults. SteelR's tier above SR3 in the four-tier residential security ladder.",
            },
            {
              href: "/lps-1673-attack-resistant-steel-door",
              label: "LPS 1673 attack-resistant steel doors",
              description: "The LPCB attack-resistance certification used on bank vaults and data centres, beyond forced-entry resistance. Available on residential specification by enquiry.",
            },
            {
              href: "/bespoke-steel-front-doors-uk",
              label: "Bespoke steel front doors UK",
              description: "Hub page covering the full SteelR model, design process and regional coverage.",
            },
            {
              href: "/housing-associations",
              label: "For housing associations",
              description: "Building Safety Act 2022 + FRA remediation procurement model with stock-replacement scheduling.",
            },
            {
              href: "/developers",
              label: "For residential developers",
              description: "Approved Doc Q + NHBC-ready certification packs. Door schedules and phased delivery against build programmes.",
            },
            {
              href: "/architects",
              label: "For architects + specifiers",
              description: "NBS-format clauses, BIM data, performance specification narrative. Direct line to the design team across RIBA stages.",
            },
            {
              href: "/property-managers",
              label: "For managing agents",
              description: "FRA action close-out, Section 20 consultation support, portfolio-level supplier programme.",
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
