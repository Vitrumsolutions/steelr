import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "SR4 Residential Steel Doors UK | When to Upgrade | SteelR",
  description:
    "When LPS 1175 SR4 is the right Commercial-grade upgrade tier for a UK residential front door. Three buyer motivations: documented Commercial-grade certification on the door, an insurer or broker requesting LPCB-certified specification, or significant possessions behind the entrance.",
  alternates: { canonical: "https://steelr.co.uk/sr4-residential-steel-door" },
  openGraph: {
    title: "SR4 Residential Steel Doors UK: The Three Triggers That Justify the Upgrade | SteelR",
    description:
      "When LPS 1175 SR4 is the right Commercial-grade upgrade tier for a UK residential front door. Three buyer motivations: documented Commercial-grade certification on the door, an insurer or broker requesting LPCB-certified specification, or significant possessions behind the entrance.",
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
      "SR4 is the right tier for three motivation-led buyer situations and one smaller threat-led subset. The three normal triggers: (1) the owner wants documented Commercial-grade certification on the front door, with the LPCB SR4 mark sitting permanently on the deed, insurance documents and Building Control handover pack as a step beyond the standard residential specification; (2) the insurer, broker or loss-adjuster has asked for an LPCB-certified Commercial-grade specification, naming SR4 or commercial-grade certification on the policy schedule; (3) the address holds significant possessions or records the owner values, art, watch collections, family records, archives, irreplaceable objects, where the entrance door is part of an asset-protection narrative. None of these triggers depends on property value or sum insured. The smaller subset: properties with a documented threat assessment from a private security advisor, or constructed safe-room context where SR4 forms the front-door layer of a multi-layer plan. For owners outside both groups, the SR3 Enhanced upgrade or the BS EN 1627 RC4 Standard specification is the right tier.",
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
      "SR4 follows the standard SteelR design process with one additional step. After the on-site survey, the design team confirms whether the brief justifies the Commercial-grade tier or whether SR3 (Enhanced) or the standard BS EN 1627 RC4 specification is more appropriate. Lead time is approximately ten weeks from design sign-off to fitted installation, around two weeks longer than the standard SteelR specification, reflecting the additional certification process and the supply chain coordination required for the certified components. Pricing is individual to the project. There are no fixed tiers and no published prices.",
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
  name: "SR4 Residential Steel Doors UK. When to Specify the Commercial-grade Upgrade",
  url: "https://steelr.co.uk/sr4-residential-steel-door",
  description:
    "When LPS 1175 SR4 is the right Commercial-grade upgrade tier for a UK residential front door. Three motivation-led buyer triggers: documented Commercial-grade certification on the door, an insurer or broker request for LPCB-certified specification, or significant possessions behind the entrance. SteelR's third tier in the four-tier residential security ladder above BS EN 1627 RC4 Standard and LPS 1175 SR3 Enhanced.",
  about: [
    { "@type": "Thing", name: "LPS 1175 SR4" },
    { "@type": "Thing", name: "LPS 1175 D10 Issue 8" },
    { "@type": "Thing", name: "Commercial-grade security doors" },
    { "@type": "Thing", name: "Residential steel front doors" },
    { "@type": "Thing", name: "Loss Prevention Certification Board" },
    { "@type": "Thing", name: "Secured by Design" },
    { "@type": "Thing", name: "BS EN 1627 RC4" },
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
        heroTitle="SR4 Residential Steel Doors UK"
        h1="LPS 1175 SR4 Residential Steel Doors UK: The Three Triggers That Justify the Upgrade"
        intro={{
          pretitle: "LPS 1175 SR4. The Commercial-grade upgrade tier",
          title:
            "When LPS 1175 SR4 is the right specification for a UK residential front door",
          body: (
            <>
              LPS 1175 SR4 (D10 Issue 8) is the Commercial-grade
              certification used on data centres, bank vault outer
              doors and embassy residences, available on any SteelR
              residential bespoke front door as an upgrade above the
              SR3 Enhanced tier. The upgrade is the right call when
              one or more of three motivation-led triggers applies: the
              owner wants documented Commercial-grade certification on
              the door, an insurer or broker has asked for
              LPCB-certified Commercial-grade specification, or there
              are significant possessions or records behind the
              entrance the owner wants to protect at the residential
              mark that matches the Commercial-grade tier.
            </>
          ),
          body2: (
            <>
              None of these triggers depends on property value or
              postcode. The same certified door is available on any
              UK home where the owner chooses the tier, from a
              modestly-valued terrace to a high-value detached. For
              owners who do not recognise themselves in any of the
              three triggers, the SR3 Enhanced upgrade or the BS EN
              1627 RC4 Standard residential specification is the
              appropriate answer. The sections below set out each
              trigger in detail, identify the broader buyer profile
              that arrives at SR4, and explain how the certification
              integrates with the bespoke SteelR design language
              without changing the external aesthetic of the door.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Trigger 1",
            title: "You want documented Commercial-grade certification on the door",
            body: (
              <>
                The first trigger is what the owner wants on paper. SR4
                is the LPCB Commercial-grade certification, the
                independent mark used on data centres, bank vault outer
                doors and embassy residences. On a residential door it
                is a documented step beyond the standard residential
                specification. The certificate sits permanently on the
                deed, the insurance documents and the Building Control
                handover pack, and stays with the property if it
                changes hands. For owners who want the strongest
                independently certified residential mark currently
                available on a UK front door, the motivation is the
                certification itself, not any specific property
                profile.
              </>
            ),
            body2: (
              <>
                This trigger applies to any home where the owner has
                considered the difference between PAS 24, BS EN 1627
                RC4, LPS 1175 SR3 and LPS 1175 SR4 and decided that
                Commercial-grade is the right tier for their door. The
                upgrade carries no property-value gate. The same
                certified door is available on a £400,000 home and a
                £4 million home. The decision is the owner&apos;s, made
                at the design consultation, and SteelR&apos;s position
                is that the four tiers should be presented neutrally so
                the owner can choose the one that fits the brief rather
                than the one a price filter assigned to them.
              </>
            ),
          },
          {
            pretitle: "Trigger 2",
            title:
              "Your insurer or broker has asked for LPCB-certified Commercial-grade specification",
            body: (
              <>
                The second trigger is direct. A UK home insurer, broker
                or loss-adjuster has named SR4 or Commercial-grade
                certification on the policy schedule or in a survey
                report. The request can appear on a range of policy
                types and is not restricted to any specific sum-insured
                band. Where it appears, the door specification is part
                of the cover condition rather than an optional upgrade,
                and the SR4 certificate is the document the broker is
                looking for.
              </>
            ),
            body2: (
              <>
                Verifying the request takes one step. The underwriter
                or broker will name an LPCB certification reference;
                SteelR supplies the SR4 certificate held on the LPCB
                Red Book at redbooklive.com (searchable by manufacturer
                and product class), the Secured by Design
                member-directory entry at securedbydesign.com, and the
                ISO 9001 UK manufacturing entry on the BSI public
                register at bsigroup.com. The broker can independently
                verify all three records before cover is bound. The{" "}
                <Link
                  href="/insurance-approved-steel-front-doors-uk"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  insurance-approved steel front doors reference
                </Link>{" "}
                sets out the underwriting context in full for higher
                value private-client policies.
              </>
            ),
          },
          {
            pretitle: "Trigger 3",
            title:
              "You are protecting significant possessions or records behind the door",
            body: (
              <>
                The third trigger is what is behind the door. A watch
                collection. A family art piece. Jewellery. Wine.
                Documents that cannot be replaced. A musical instrument
                or piece of equipment that took decades to acquire. A
                child&apos;s belongings, or possessions held in trust
                for the next generation. None of these depends on
                property value. The motivation is to protect what is
                actually in the home, at the residential mark that
                matches the Commercial-grade tier the insurance industry
                recognises.
              </>
            ),
            body2: (
              <>
                This trigger applies whether the items are insured at a
                modest level or at a private-client level. It applies
                whether the home is a flat, a terrace, a semi or a
                detached property. The decision turns on what the owner
                is protecting and the certification they want on the
                door that stands in front of it, not on the
                buildings-cover figure or the postcode. SR4 is the
                LPCB-certified residential mark at the Commercial-grade
                tier, available on any bespoke SteelR door regardless
                of property profile.
              </>
            ),
          },
          {
            pretitle: "The buyer profile",
            title: "Who actually specifies SR4 on a residential brief",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point chrome locking mechanism on an SR4 rated steel front door",
            },
            body: (
              <>
                Combining the three triggers above, the SR4 residential
                buyer is consistently in one or more of the categories
                below. None is required. The conversation during the
                SteelR design consultation confirms which triggers
                apply and whether SR4 is the right tier for the brief.
                Property value is not a category on this list because
                it is not a trigger on this page.
              </>
            ),
            list: [
              "Owners who want the LPCB Commercial-grade certificate on the deed, the insurance documents and the Building Control handover pack for the long term, independent of property value",
              "Owners whose insurer, broker or loss-adjuster has named SR4 or Commercial-grade certification on the schedule, on any policy from standard residential to private-client",
              "Owners protecting significant possessions or records behind the door, including art, watch collections, family records, archives, irreplaceable objects, regardless of buildings-cover value",
              "Owners who have compared PAS 24, BS EN 1627 RC4, SR3 and SR4 and decided that Commercial-grade is the right tier for the reassurance alone, with no external requirement",
              "Owners replacing a front door as part of a wider refurbishment programme who want the certified specification to sit alongside the rest of the build documentation",
              "Owners of family-office, family-trust or trustee-held residences where the door specification forms part of the documented duty-of-care narrative",
            ],
            body2: (
              <>
                A smaller subset of SR4 specifications is driven by a
                documented threat assessment from a private security
                advisor, or by a layered safe-room context where SR4
                forms the front-door layer of a multi-layer security
                plan. Those are legitimate residential SR4 briefs, but
                they are not the headline audience. For a documented
                threat-assessed brief, the right tier the conversation
                should start at is{" "}
                <Link
                  href="/lps-1673-attack-resistant-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  LPS 1673 attack-resistance
                </Link>
                , not SR4. SR4 is the residential Commercial-grade
                tier; LPS 1673 is the Ultra-high tier above it.
              </>
            ),
          },
          {
            pretitle: "Against SR3",
            title: "Choosing between SR3 and SR4",
            body: (
              <>
                SR4 is the Commercial-grade tier above SR3 in the LPS
                1175 Issue 8 framework. Both ratings stack on the BS EN
                1627:2011 RC4 Standard specification on the same
                bespoke door. The side-by-side specification, tool
                catalogue, attack-duration matrix and decision content
                for the SR3 versus SR4 choice sits on the dedicated
                comparison page at{" "}
                <Link
                  href="/sr3-vs-sr4-residential-steel-doors-uk"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR3 vs SR4 residential steel doors UK
                </Link>
                . That page is the right starting point for buyers
                weighing the choice; this page is the right starting
                point for buyers who already know SR4 is in scope and
                need to understand the residential triggers and
                process.
              </>
            ),
          },
          {
            pretitle: "Bespoke aesthetic, commercial-grade certification",
            title: "Period proportions, conservation finishes, LPCB-certified internal assembly",
            body: (
              <>
                A frequent concern about Commercial-grade certification
                on a residential door is whether the door ends up
                looking commercial-grade. The answer is no. The
                certification attaches to the internal door assembly,
                frame integration, hardware specification and locking
                system. None of this is externally visible. A Georgian
                six-panel door in heritage racing green with solid
                brass hardware and a stained-glass fanlight is a viable
                SR4 specification. So is a contemporary flush leaf in
                matt anthracite with paired glazed sidelights.
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
                is the appropriate level. Where the property already
                has a documented threat assessment from a private
                security advisor, SteelR works directly with that
                advisor to align the specification with the wider
                security plan.
              </>
            ),
            body2: (
              <>
                Lead time is approximately ten weeks from signed design
                to fitted installation, two to three weeks longer than
                the standard SteelR specification, reflecting the
                additional certification process and the supply-chain
                coordination required for the certified components.
                Pricing is individual to the project and is provided in
                writing within five working days of the survey. There
                are no fixed tiers and no published prices. The full
                process for non-SR4 specifications is described on the{" "}
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
            "You want the LPCB Commercial-grade certification mark on your deed, insurance documents and Building Control handover pack permanently, regardless of property value",
            "Your insurer or broker has named SR4 or Commercial-grade certification on the policy schedule",
            "You are protecting significant possessions or records behind the door (art, watches, family archives, irreplaceable objects) and you want the residential certification tier to match what is behind it",
            "You have compared PAS 24, BS EN 1627 RC4, SR3 and SR4 and decided that Commercial-grade is the right tier for your home",
            "Your project allows the additional two to three weeks lead time that SR4 certification and supply-chain coordination require over the standard SteelR specification",
            "You want a UK manufacturer certifying at SR4 as a genuinely available upgrade tier on every bespoke door, not a one-off prototype or commercial-line spin-off",
          ],
        }}
        ctaHeading="Specify a Commercial-grade SR4 residential door"
        enquirySource="hub-sr4"
        enquiryContextLabel="LPS 1175 SR4 Commercial-Grade Steel Doors"
      />
    </>
  );
}
