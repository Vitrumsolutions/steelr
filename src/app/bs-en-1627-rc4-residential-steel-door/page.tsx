import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "BS EN 1627 RC4 Residential Steel Door | SteelR Standard Tier",
  description:
    "SteelR's Standard tier on every bespoke door: BS EN 1627:2011 RC4 single leaf, unglazed. The European framework for sustained forced-entry resistance.",
  alternates: { canonical: "https://steelr.co.uk/bs-en-1627-rc4-residential-steel-door" },
  openGraph: {
    title: "BS EN 1627 RC4 Residential Steel Door | SteelR Standard Tier",
    description:
      "SteelR's Standard tier on every bespoke door: BS EN 1627:2011 RC4 single leaf, unglazed. The European framework for sustained forced-entry resistance.",
    url: "https://steelr.co.uk/bs-en-1627-rc4-residential-steel-door",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "What does BS EN 1627:2011 RC4 single leaf, unglazed mean on a residential steel door?",
    answer:
      "RC4 is Resistance Class 4 under BS EN 1627:2011, the European standard for the burglar resistance of doors and windows. RC4 certifies that the complete door assembly has been independently tested at a UKAS-accredited laboratory against a sustained attack by an experienced intruder using heavy-duty hand tools and battery-operated power tools. The single-leaf, unglazed methodology is the conservative test specification within RC4: no glazing weak points, no inactive leaf reducing the attack surface. RC4 is materially above the PAS 24:2022 hardware-only test mandated for new-build dwellings, and is rarely offered as a residential standard in the UK. SteelR includes BS EN 1627:2011 RC4 single leaf, unglazed as the Standard tier on every bespoke door, with LPS 1175 SR3, SR4 and LPS 1673 available as upgrade tiers on the same door.",
  },
  {
    question: "How does BS EN 1627:2011 RC4 differ from PAS 24:2022?",
    answer:
      "PAS 24:2022 is the UK security performance standard published by the British Standards Institution and mandated by Approved Document Q of the Building Regulations for new-build dwellings in England and Wales. It tests resistance to a one-to-three-minute casual forced-entry attack using basic hand tools, plus a cut test against glazing and a cylinder attack against the locking mechanism. BS EN 1627:2011 RC4 is a different scheme entirely: a longer attack, a heavier tool set including battery-operated power tools, and a different test methodology (the complete door assembly tested as a system). PAS 24 is the regulatory minimum; RC4 is materially higher. Every SteelR door meets both standards: PAS 24:2022 as the regulatory baseline plus BS EN 1627:2011 RC4 single leaf, unglazed as the Standard tier on every door.",
  },
  {
    question: "How does BS EN 1627 RC4 differ from LPS 1175 SR3?",
    answer:
      "BS EN 1627:2011 (the European framework, classes RC1 to RC6) and LPS 1175 (the LPCB scheme, ratings SR1 to SR8) are parallel certification schemes operating under different methodologies and threat models. They are not equivalent: the Loss Prevention Certification Board has stated that over 90% of products tested under EN 1627 RC4 fail to achieve LPS 1175 SR2. The two schemes use different tool sets, different attack durations and different attack objectives. RC4 tests sustained forced-entry resistance against heavy-duty hand tools and battery-operated power tools; LPS 1175 SR3 (Issue 8) tests a five-minute power-tool attack against a defined Issue 8 tool catalogue and is the LPCB police-preferred residential specification recognised by UK home insurers and Secured by Design. SteelR ships RC4 as the Standard residential specification on every bespoke door, with LPS 1175 SR3 available as the Enhanced upgrade tier above it. SR3 is not a replacement for RC4; it is an additional layered accreditation on the same door.",
  },
  {
    question: "Why does SteelR include BS EN 1627 RC4 as Standard rather than as an upgrade?",
    answer:
      "RC4 is the European framework for sustained forced-entry resistance. It is the right baseline for any premium residential steel front door. Most UK manufacturers cap their standard residential offering at PAS 24:2022 (the regulatory minimum) and reserve RC4 or LPS 1175 ratings for flagship lines or commercial product. SteelR includes BS EN 1627:2011 RC4 single leaf, unglazed on every bespoke door, with no upgrade fee, no flagship-only restriction, and no exception. The position is that a homeowner specifying a bespoke steel front door from a UK manufacturer should not have to negotiate up from a PAS 24 baseline to get a serious certification. RC4 is the genuine baseline. Upgrade tiers (LPS 1175 SR3 Enhanced, LPS 1175 SR4 Commercial-grade, LPS 1673 Ultra-high) are available on every door for briefs that justify the additional certification.",
  },
  {
    question: "What documentation does SteelR provide for the BS EN 1627 RC4 certification?",
    answer:
      "Every SteelR door is supplied with the BS EN 1627:2011 RC4 single leaf, unglazed test certification documentation as part of the handover pack. The pack also includes the PAS 24:2022 certificate, Secured by Design accreditation, FD30S fire and smoke certification, and ISO 9001 manufacturing certifications. Where the door has been specified with an upgrade tier (LPS 1175 SR3, SR4, or LPS 1673), those certifications are included alongside the RC4 baseline. All test reports reference the UKAS-accredited laboratory that conducted the test and are valid for insurer submission, planning authority verification and Building Safety Act compliance documentation.",
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
      name: "BS EN 1627 RC4 Residential Steel Door",
      item: "https://steelr.co.uk/bs-en-1627-rc4-residential-steel-door",
    },
  ],
});

const webPageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "BS EN 1627 RC4 Residential Steel Door",
  url: "https://steelr.co.uk/bs-en-1627-rc4-residential-steel-door",
  description:
    "BS EN 1627:2011 RC4 single leaf, unglazed is SteelR's Standard tier on every bespoke residential steel front door. The European framework for sustained forced-entry resistance, materially above the PAS 24 hardware-only test mandated for new-build dwellings.",
  about: [
    { "@type": "Thing", name: "BS EN 1627:2011 RC4" },
    { "@type": "Thing", name: "Resistance Class 4 single leaf unglazed" },
    { "@type": "Thing", name: "Residential steel front doors" },
    { "@type": "Thing", name: "PAS 24:2022" },
    { "@type": "Thing", name: "Sustained forced-entry resistance" },
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

export default function Rc4Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webPageSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="BS EN 1627 RC4 Residential Steel Doors"
        h1="BS EN 1627:2011 RC4 Residential Steel Door. SteelR's Standard Tier"
        intro={{
          pretitle: "BS EN 1627:2011 RC4. SteelR's Standard tier on every door",
          title:
            "What BS EN 1627:2011 RC4 single leaf, unglazed actually means on the front door of a UK home",
          body: (
            <>
              BS EN 1627:2011 RC4 is the first tier in SteelR&apos;s
              four-tier residential security ladder. It is the Standard
              specification on every bespoke door we manufacture, with no
              upgrade fee and no flagship-only restriction. RC4 is
              Resistance Class 4 under the European standard for the
              burglar resistance of doors and windows, certifying the
              complete door assembly against a sustained attack by a
              trained tester using heavy-duty hand tools and
              battery-operated power tools. The single-leaf, unglazed
              methodology is the conservative test specification within
              RC4: no glazing weak points, no inactive leaf reducing the
              attack surface.
            </>
          ),
          body2: (
            <>
              This page explains what RC4 actually tests, why SteelR
              includes it as Standard rather than as an upgrade, how it
              differs from the PAS 24:2022 regulatory minimum mandated
              for new-build dwellings, how the European BS EN 1627
              framework relates to the parallel LPCB LPS 1175 scheme, and
              where the LPS 1175 SR3 Enhanced upgrade and SR4
              Commercial-grade upgrade sit in relation to it.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "The test itself",
            title: "Sustained attack with heavy hand tools and battery power tools, full assembly",
            body: (
              <>
                BS EN 1627:2011 RC4 testing is conducted at a
                UKAS-accredited laboratory against the complete door
                assembly. The door is installed into a test frame
                replicating the real fixing conditions it will face on
                site. A trained tester then attacks the assembly with the
                tool set specified for RC4, including drills (rotary and
                battery-operated), jigsaws, oscillating saws, larger
                crowbars and prying equipment.
              </>
            ),
            body2: (
              <>
                The test methodology assesses the complete door system:
                frame, leaf, locking mechanism, hinges and hardware.
                Individual component certifications are not sufficient;
                the whole assembly must pass. The single-leaf, unglazed
                methodology is the conservative test specification within
                RC4, the most demanding because it removes the
                glazing-cut weak point and the inactive-leaf attack
                surface that softer specifications include. SteelR
                certifies every bespoke door at this conservative
                methodology rather than the more permissive double-leaf
                or glazed specifications some manufacturers use.
              </>
            ),
          },
          {
            pretitle: "How RC4 compares to PAS 24",
            title: "PAS 24 is the legal minimum. RC4 is a different tier",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point chrome locking mechanism on a BS EN 1627 RC4 certified residential steel front door",
            },
            body: (
              <>
                PAS 24:2022 is the UK security performance standard
                published by the British Standards Institution. It is
                mandated by Approved Document Q of the Building
                Regulations for all new-build dwellings in England and
                Wales. PAS 24 testing simulates a one-to-three-minute
                casual forced-entry attack using basic hand tools, plus a
                cut test against glazing and a cylinder attack against
                the locking mechanism. It is the regulatory minimum and
                meets the legal threshold to install a door on a
                new-build property.
              </>
            ),
            body2: (
              <>
                BS EN 1627:2011 RC4 is a different tier of certification
                entirely. The attack duration is materially longer. The
                tool set adds heavy-duty hand tools and battery-operated
                power tools that PAS 24 does not include. The test
                methodology assesses the complete door assembly under
                sustained attack rather than a casual hardware probe.
                Every SteelR door meets both standards: PAS 24:2022 as
                the regulatory baseline plus RC4 as the Standard tier.
                For the side-by-side specification comparison, see the{" "}
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
              "PAS 24:2022 hardware-only test, one-to-three-minute casual attack, basic hand tools",
              "BS EN 1627:2011 RC2: three minutes, screwdrivers, pliers, wedges",
              "BS EN 1627:2011 RC3: heavier hand tools and longer duration than RC2",
              "BS EN 1627:2011 RC4 (SteelR Standard): sustained attack, heavy-duty hand tools and battery-operated power tools, full assembly tested",
            ],
          },
          {
            pretitle: "RC4 vs LPS 1175 SR3 / SR4",
            title: "Two parallel schemes. Both available on the same door",
            body: (
              <>
                BS EN 1627:2011 (the European framework, classes RC1 to
                RC6) and LPS 1175 (the LPCB scheme, ratings SR1 to SR8)
                are parallel certification schemes. They are not
                equivalent. The Loss Prevention Certification Board has
                stated that over 90% of products tested under EN 1627
                RC4 fail to achieve LPS 1175 SR2. The two schemes use
                different tool sets, different attack durations, and
                different attack objectives. Asking which is &quot;higher&quot; is
                the wrong frame: they test different threat models.
              </>
            ),
            body2: (
              <>
                SteelR offers both. BS EN 1627:2011 RC4 single leaf,
                unglazed is the Standard tier on every door. LPS 1175
                SR3 (the LPCB police-preferred residential
                specification) is available as the Enhanced upgrade
                tier. LPS 1175 SR4 (D10 Issue 8, the LPCB
                commercial-grade certification used in data centres and
                bank vaults) is available as the Commercial-grade
                upgrade tier. LPS 1673 attack-resistance is available as
                the Ultra-high tier by enquiry. All four certifications
                can be issued against the same door. SR3 / SR4 are not
                replacements for RC4; they are additional layered
                accreditations on the same assembly. Detail on the{" "}
                <Link
                  href="/sr3-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR3 page
                </Link>{" "}
                and the{" "}
                <Link
                  href="/sr4-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR4 page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Why SteelR includes RC4 as Standard",
            title: "The genuine baseline, not a flagship-only specification",
            body: (
              <>
                A recurring pattern in this category is manufacturers
                advertising high security ratings as available on the
                flagship design, then shipping lower-spec doors on the
                rest of the range. Most UK steel door manufacturers cap
                their standard residential offering at PAS 24:2022 (the
                regulatory minimum) and reserve BS EN 1627 RC4 or LPS
                1175 ratings for flagship lines or commercial product.
                SteelR&apos;s position is different: RC4 is the genuine
                baseline on every bespoke door, with no upgrade fee, no
                flagship-only restriction, and no exception.
              </>
            ),
            body2: (
              <>
                The standard residential specification on every SteelR
                door is BS EN 1627:2011 RC4 single leaf, unglazed plus
                PAS 24:2022 plus Secured by Design plus FD30S fire and
                smoke rating plus ISO 9001 UK manufacturing
                plus UK Manufactured. Upgrade tiers (LPS 1175
                SR3 Enhanced, LPS 1175 SR4 Commercial-grade, LPS 1673
                Ultra-high) are available on every door for briefs that
                justify the additional certification. The collection is
                browsable on the{" "}
                <Link href="/collection" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  collection page
                </Link>
                . Every door shown ships with RC4 as Standard.
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
              description: "The Approved Document Q regulatory minimum, what PAS 24 actually tests, why it sits below RC4 in the SteelR ladder.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3 (Enhanced upgrade)",
              description: "The LPCB police-preferred residential specification. SteelR's Enhanced upgrade tier above the BS EN 1627 RC4 Standard.",
            },
            {
              href: "/sr4-residential-steel-door",
              label: "LPS 1175 SR4 (Commercial-grade upgrade)",
              description: "The LPCB Commercial-grade certification used on data centres and bank vaults. Available on residential specification by upgrade.",
            },
            {
              href: "/lps-1673-attack-resistant-steel-door",
              label: "LPS 1673 attack-resistant steel doors",
              description: "The LPCB attack-resistance certification beyond forced-entry resistance. Ultra-high tier available by enquiry.",
            },
            {
              href: "/security-specification",
              label: "Full security specification page",
              description: "Side-by-side comparison of every standard a SteelR door meets, including the four-tier ladder.",
            },
            {
              href: "/bespoke-steel-front-doors-uk",
              label: "Bespoke steel front doors UK",
              description: "Hub page covering the full SteelR model, design process and regional coverage.",
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
            "Your specifier or insurer wants a European-standard reference (BS EN 1627 RC4) on the spec rather than the LPS 1175 ladder",
            "Your project is a high-value residential refurbishment where the door is the next major upgrade after kitchen and bathrooms",
            "You want a certified Standard tier without the additional cost or lead time of an LPS 1175 SR3 or SR4 upgrade",
            "Your architect needs a UK manufacturer who issues RC4 single-leaf, unglazed certification as standard, not as a paid extra",
            "You want the certificate referenced in the handover pack and a UK warranty enforced against a UK manufacturer",
          ],
        }}
        ctaHeading="Specify the Standard tier"
        enquirySource="hub-rc4"
        enquiryContextLabel="BS EN 1627 RC4 Residential Steel Doors"
      />
    </>
  );
}
