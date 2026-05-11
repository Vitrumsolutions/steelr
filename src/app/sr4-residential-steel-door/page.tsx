import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "SR4 Residential Steel Door | LPS 1175 Commercial | SteelR",
  description:
    "LPS 1175 SR4 (D10 Issue 8): SteelR's Commercial-grade upgrade tier, the LPCB certification used on data centres and bank vaults. Residential available.",
  alternates: { canonical: "https://steelr.co.uk/sr4-residential-steel-door" },
  openGraph: {
    title: "SR4 Residential Steel Door | Commercial-Grade Upgrade | SteelR",
    description:
      "LPS 1175 SR4 (D10 Issue 8): SteelR's Commercial-grade upgrade tier, the LPCB certification used on data centres and bank vaults. Residential available.",
    url: "https://steelr.co.uk/sr4-residential-steel-door",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "What does LPS 1175 SR4 mean on a residential steel door?",
    answer:
      "SR4 is Security Rating 4 under LPS 1175 Issue 8 (the D10 designation in the Issue 8 rating matrix), the Loss Prevention Certification Board scheme operated by BRE Global. It certifies that the door has been independently tested against a sustained forced-entry attack with a broader tool set including battery-operated cutting tools and larger prying equipment, for a longer attack duration than SR3. It is commercial-grade certification, used in data centres, bank vaults, embassy residences and high-risk commercial premises. SteelR offers SR4 as the Commercial-grade upgrade tier on any residential front door.",
  },
  {
    question: "Who actually specifies SR4 on a residential door?",
    answer:
      "SR4 is rare on a private home, but the legitimate audience is real. Owners with a documented threat assessment from a private security advisor. Properties used by clients of specialist private banks where the underwriter has flagged a higher risk profile. Residences for security-sensitive professions including legal, political and senior financial roles. Properties with constructed safe rooms or panic rooms where SR4 sits behind the front door as part of a layered security plan. Owners who, having understood the difference between PAS 24, RC4, SR3 and SR4, decide they want the commercial-grade certification for the reassurance alone. For everyone else, the Enhanced SR3 upgrade or the BS EN 1627 RC4 standard residential specification is the appropriate answer.",
  },
  {
    question: "How does SR4 differ from SR3 and from BS EN 1627 RC4?",
    answer:
      "BS EN 1627 RC4 (the European framework, single leaf, unglazed) is SteelR's standard residential specification. LPS 1175 SR3 is the Enhanced upgrade, the LPCB police-preferred scheme. LPS 1175 SR4 (D10 Issue 8) is the Commercial-grade upgrade above SR3. The differences are tool set and attack duration. SR4 testing adds battery-operated cutting tools, larger crowbars and a longer attack window to the SR3 methodology. The result is a certification that materially exceeds residential threat models and addresses commercial-grade asset protection. The four-tier ladder is: PAS 24 plus RC4 standard, SR3 enhanced, SR4 commercial-grade, LPS 1673 ultra-high.",
  },
  {
    question: "Does SR4 affect the look or design of the door?",
    answer:
      "No. The SR4 certification attaches to the internal door assembly, frame integration, hardware specification and locking system, not the external aesthetic. A Georgian six-panel door in a heritage colour with brass hardware is a viable SR4 specification. So is a contemporary flush leaf in matt anthracite. Period proportions, the full RAL colour palette, hardware finish options and integrated sidelight or fanlight configurations are all available within the SR4 product line. The certification operates inside the door; it does not impose a commercial aesthetic on the outside.",
  },
  {
    question: "How is SR4 specified and what is the lead time?",
    answer:
      "SR4 follows the standard SteelR design process with one additional step. After the on-site survey, the design team confirms whether the brief justifies the Commercial-grade tier or whether SR3 (Enhanced) or the standard BS EN 1627 RC4 specification is more appropriate. Lead time is ten to fourteen weeks from design sign-off to fitted installation, two to three weeks longer than the standard SteelR specification, reflecting the additional certification process and the supply chain coordination required for the certified components. Pricing is individual to the project. There are no fixed tiers and no published prices.",
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
      name: "SR4 Residential Steel Door",
      item: "https://steelr.co.uk/sr4-residential-steel-door",
    },
  ],
});

const webPageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SR4 Residential Steel Door",
  url: "https://steelr.co.uk/sr4-residential-steel-door",
  description:
    "LPS 1175 SR4 (D10 Issue 8) is SteelR's Commercial-grade upgrade tier above SR3 Enhanced and the BS EN 1627 RC4 Standard. The LPCB certification used on data centres, bank vaults and embassy residences, available on residential specification.",
  about: [
    { "@type": "Thing", name: "LPS 1175 SR4" },
    { "@type": "Thing", name: "LPS 1175 D10 Issue 8" },
    { "@type": "Thing", name: "Commercial-grade security doors" },
    { "@type": "Thing", name: "Residential steel front doors" },
    { "@type": "Thing", name: "Loss Prevention Certification Board" },
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

export default function Sr4Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webPageSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="SR4 Residential Steel Doors"
        h1="LPS 1175 SR4 Residential Steel Door. The Commercial-Grade Upgrade Tier"
        intro={{
          pretitle: "LPS 1175 SR4 (D10 Issue 8). SteelR&apos;s Commercial-grade upgrade tier",
          title:
            "The certification used on data centres and bank vaults. Available on residential specification by upgrade",
          body: (
            <>
              LPS 1175 SR4 is the third tier in SteelR&apos;s four-tier
              security ladder. It sits above the SR3 Enhanced upgrade
              and below LPS 1673 attack-resistance. SR4 is the
              commercial-grade certification (D10 in the LPS 1175 Issue 8
              rating matrix) used on data centre internal cores, bank
              vault outer doors, embassy and consul residences, and
              high-risk commercial premises. Available on any SteelR
              residential front door by upgrade. It is rarely seen on a
              private home, and it is offered for the small set of
              briefs where a documented threat profile, specialist
              insurer requirement, or owner preference for
              commercial-grade certification on the home justifies it.
            </>
          ),
          body2: (
            <>
              This page explains what SR4 actually tests, how it differs
              from the SR3 Enhanced upgrade and the BS EN 1627 RC4
              standard residential specification, who specifies SR4 on
              residential briefs in the UK, and how it integrates with
              the bespoke SteelR design language without compromising
              the external aesthetic.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "The test itself",
            title: "Longer attack duration, broader tool set, LPCB-certified",
            body: (
              <>
                LPS 1175 SR4 (D10 Issue 8) testing is conducted by the
                Loss Prevention Certification Board (LPCB), part of BRE
                Global, a UKAS-accredited certification body. The
                methodology builds on the SR3 test by adding
                battery-operated cutting tools, larger crowbars, more
                aggressive prying equipment, and extending the attack
                duration. The complete door assembly is tested, including
                the frame, leaf, multi-point locking system, hinges and
                hardware. The whole assembly must resist the certified
                tool-and-time matrix to pass.
              </>
            ),
            body2: (
              <>
                The threat model SR4 is designed to stop is not the
                opportunist burglar (which PAS 24 already addresses) and
                not the experienced burglar with hand tools (which RC4
                and SR3 already address). SR4 addresses the determined
                attacker with a specific objective beyond the door,
                prepared to invest more time and a broader tool catalogue
                including power tools. This is the threat profile a
                commercial security manager designs for at a data centre
                or vault entrance. SR4 brings that level of certification
                to a residential front door.
              </>
            ),
          },
          {
            pretitle: "How SR4 compares",
            title: "The four-tier residential security ladder",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point chrome locking mechanism on an SR4 rated steel front door",
            },
            body: (
              <>
                SteelR&apos;s residential security ladder runs across four
                certified tiers, each genuinely available on any
                bespoke door. The ladder allows the design consultation
                to match the cert to the brief, rather than offering a
                single inflexible specification.
              </>
            ),
            body2: (
              <>
                For most homes, the standard residential specification
                meets the threat profile. For high-value properties,
                conservation areas, or insurer-mandated specifications,
                the Enhanced SR3 upgrade is appropriate. For threat-
                assessed properties, the Commercial-grade SR4 upgrade
                is appropriate. For documented ultra-high security
                briefs, LPS 1673 attack-resistance is available by
                enquiry. The full specification ladder sits on the{" "}
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
              "Standard: PAS 24:2022 + BS EN 1627 RC4 single leaf unglazed (every SteelR door)",
              "Enhanced: PAS 24 + RC4 + LPS 1175 SR3 (LPCB police-preferred scheme)",
              "Commercial-grade: PAS 24 + RC4 + LPS 1175 SR4 D10 Issue 8 (data centres, bank vaults)",
              "Ultra-high: PAS 24 + RC4 + LPS 1673 attack-resistance (AR.A300 / B180E / B300E / C120E)",
            ],
          },
          {
            pretitle: "The buyer profile",
            title: "Who actually specifies SR4 on a residential brief",
            body: (
              <>
                SR4 is genuinely a commercial certification. Its standard
                applications are bank vault doors, data centre internal
                cores, telecoms exchange and substation buildings,
                embassy and consul residences (where the building is
                part of asset protection), and high-value art or
                document storage. None of this is normal residential.
              </>
            ),
            body2: (
              <>
                The legitimate residential audience for SR4 is small but
                real. SteelR specifies SR4 doorsets for the following
                categories of brief.
              </>
            ),
            list: [
              "Properties with a documented threat assessment prepared by a private security advisor",
              "Residences used by clients of specialist private banks or risk-focused insurers, where the underwriter has flagged a higher risk profile",
              "Properties used as principal accommodation by clients in security-sensitive professions, including legal, political and senior financial roles",
              "Homes with a constructed safe room or panic room behind the entrance, where SR4 forms part of a layered security plan",
              "Family offices or private residences storing legal records, art or controlled documents",
              "Owners who, having understood the difference between PAS 24, RC4, SR3 and SR4, decide they want commercial-grade certification on their home for the reassurance alone",
            ],
          },
          {
            pretitle: "Bespoke aesthetic, commercial-grade certification",
            title: "Period proportions, conservation finishes, LPCB-certified internal assembly",
            body: (
              <>
                A frequent concern about commercial-grade certification on
                a residential door is whether the door ends up looking
                commercial-grade. The answer is no. The certification
                attaches to the internal door assembly, frame
                integration, hardware specification and locking system.
                None of this is externally visible. A Georgian six-panel
                door in heritage racing green with solid brass hardware
                and a stained-glass fanlight is a viable SR4
                specification. So is a contemporary flush leaf in matt
                anthracite with paired glazed sidelights.
              </>
            ),
            body2: (
              <>
                Period panel mouldings, the full RAL colour palette,
                hardware finish options across polished chrome, brushed
                satin, antique brass, polished brass, matt black and
                brushed gold, and integrated sidelight, fanlight or
                overpanel configurations are all available within the
                SR4 product line. The certification does not impose a
                commercial aesthetic on the outside. Detailed coverage
                of design options sits on the{" "}
                <Link
                  href="/colours"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  RAL colours page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Specification and lead time",
            title: "Survey, design sign-off, certified manufacture and installation",
            body: (
              <>
                SR4 specification follows the standard SteelR design
                process with one additional step. After the on-site
                survey, the design team confirms whether the brief
                justifies the Commercial-grade tier or whether SR3
                (Enhanced) or the standard BS EN 1627 RC4 specification
                is the appropriate level. Where the property already has
                a documented threat assessment from a private security
                advisor, SteelR works directly with that advisor to
                align the specification with the wider security plan.
              </>
            ),
            body2: (
              <>
                Lead time is ten to fourteen weeks from signed design to
                fitted installation, two to three weeks longer than the
                standard SteelR specification, reflecting the additional
                certification process and the supply-chain coordination
                required for the certified components. Pricing is
                individual to the project and is provided in writing
                within five working days of the survey. There are no
                fixed tiers and no published prices. The full process
                for non-SR4 specifications is described on the{" "}
                <Link
                  href="/process"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
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
              href: "/sr3-vs-sr4-residential-steel-doors-uk",
              label: "SR3 vs SR4 residential steel doors compared",
              description:
                "Side-by-side comparison of LPS 1175 SR3 and SR4 on a UK residential front door. Tool catalogue, attack duration, when each tier applies, and how the four-tier ladder stacks.",
            },
            {
              href: "/bs-en-1627-rc4-residential-steel-door",
              label: "BS EN 1627 RC4 (SteelR Standard tier)",
              description:
                "The European framework for sustained forced-entry resistance. SteelR's Standard tier on every door, the baseline above which SR3, SR4 and LPS 1673 sit as upgrades.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3. Enhanced upgrade tier",
              description:
                "The LPCB police-preferred specification. SteelR's Enhanced upgrade tier above the BS EN 1627 RC4 standard.",
            },
            {
              href: "/lps-1673-attack-resistant-steel-door",
              label: "LPS 1673 attack-resistant steel doors",
              description:
                "The LPCB attack-resistance certification beyond forced-entry resistance. Used on bank vaults and data centres. Available on residential specification by enquiry.",
            },
            {
              href: "/security-specification",
              label: "Full security specification ladder",
              description:
                "PAS 24 + BS EN 1627 RC4 standard, LPS 1175 SR3 / SR4, LPS 1673 set out side by side.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design steel front doors",
              description:
                "The UK police-preferred specification, applied alongside PAS 24 and the LPS 1175 ladder.",
            },            {
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
        whyConsider={{
          items: [
            "Your property profile is genuinely high-risk — public-facing principal, ultra-high-value contents, or documented attempted intrusion history",
            "Your insurer has set LPS 1175 SR4 (or equivalent BS EN 1627 RC4) as a binding requirement, not a suggestion",
            "Your security consultant has specified commercial-grade certification on the residential entrance for parity with the perimeter",
            "Your project allows the additional lead time and budget that SR4 fabrication and ironmongery carry over SR3",
            "You want a UK manufacturer certifying at SR4 as an upgrade tier rather than a one-off prototype",
          ],
        }}
        ctaHeading="Specify a Commercial-grade SR4 residential door"
        enquirySource="hub-sr4"
        enquiryContextLabel="LPS 1175 SR4 Commercial-Grade Steel Doors"
      />
    </>
  );
}
