import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "LPS 1673 Attack-Resistant Steel Door | UK Residential | SteelR",
  description:
    "LPS 1673 is the LPCB attack-resistance certification beyond forced-entry resistance. Used in bank vaults and data centres, available on UK residential specification by enquiry.",
  alternates: { canonical: "https://steelr.co.uk/lps-1673-attack-resistant-steel-door" },
  openGraph: {
    title: "LPS 1673 Attack-Resistant Steel Doors | SteelR",
    description:
      "The LPCB attack-resistance certification beyond forced-entry resistance. Used on bank vaults, data centres and government infrastructure. Available on residential specification by enquiry.",
    url: "https://steelr.co.uk/lps-1673-attack-resistant-steel-door",
    type: "website",
  },
};

const faqs = [
  {
    question:
      "What is the difference between BS EN 1627:2011 RC4 and LPS 1673?",
    answer:
      "They test against different threat profiles. BS EN 1627:2011 (the European framework, with classes RC1 to RC6) tests a doorset's resistance to forced entry. The threat model is an intruder attempting to break in. RC4 is the standard SteelR residential specification, single leaf and unglazed, and is the right answer for the vast majority of UK homes. LPS 1673 is a separate Loss Prevention Certification Board (LPCB) scheme, run by BRE Global, that tests resistance to a sustained, deliberate, directed attack on whatever asset is protected behind the door. The threat model is an attacker with a specific objective beyond the door, prepared to invest more time and a broader tool catalogue including heavy-duty power tools. LPS 1673 is the next tier above forced-entry resistance entirely, and a separate product specification.",
  },
  {
    question: "Who actually needs an LPS 1673 specification on a residential door?",
    answer:
      "LPS 1673 is genuinely a commercial and institutional certification. The standard residential audience for it is small but real: properties with a documented threat assessment from a private security advisor, homes with a constructed safe room or panic room behind the entrance, residences used by clients of specialist private banks where the insurer has flagged a higher risk profile, family offices that store legal records or controlled documents in the home, and ultra-high-net-worth properties where the owner's specific risk has been assessed. For everyone else, the standard SteelR specification at BS EN 1627:2011 RC4 single leaf, unglazed is the appropriate residential answer.",
  },
  {
    question: "Does an LPS 1673 specification affect how the door looks?",
    answer:
      "No. The certification attaches to the internal door assembly, frame integration, hardware specification and locking system, not the external aesthetic. A Georgian-proportioned six-panel door in a heritage colour is a viable LPS 1673 specification. So is a contemporary flush leaf with glazed sidelights. SteelR's LPS 1673 specifications use the same bespoke design language as the rest of the residential collection. Period panel mouldings, the full RAL colour palette, hardware finish options and glazing configurations are all available. The certification operates inside the door; it does not impose a commercial aesthetic on the outside.",
  },
  {
    question: "Is LPS 1673 certification visible from the outside?",
    answer:
      "No. The door reads as a SteelR bespoke residential entrance from the street. The internal locking, hinge specification, frame fixings and assembly are what carry the certification, and these are not externally visible. For owners who specifically want the certification to be evident as a deterrent, hardware can be finished in heavier-grade chrome, polished stainless or industrial brass to suggest commercial heritage without compromising the residential design language. For owners who prefer the certification to be invisible, the same external finish as any other SteelR door is achievable.",
  },
  {
    question: "How is an LPS 1673 specification priced and what is the lead time?",
    answer:
      "LPS 1673 is priced individually after the on-site survey and design consultation. The material, hardware, certification cost and assembly complexity are materially higher than a standard SR3 or SR4 specification, so the quotation reflects that. There are no published prices and no fixed tiers, because every LPS 1673 specification is assessed against the property and the threat profile. Lead time is twelve to sixteen weeks from design sign-off, two to four weeks longer than a standard SteelR specification, accounting for the additional certification process and the supply chain coordination required for the certified components.",
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
      name: "LPS 1673 Attack-Resistant Steel Door",
      item: "https://steelr.co.uk/lps-1673-attack-resistant-steel-door",
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

export default function Lps1673Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="LPS 1673 Attack-Resistant Steel Doors"
        h1="LPS 1673 Attack-Resistant Steel Doors. The LPCB Certification Beyond Forced-Entry Resistance"
        intro={{
          pretitle: "Beyond forced-entry resistance. The LPCB attack-resistance standard.",
          title:
            "LPS 1673 is the LPCB attack-resistance certification used on bank vaults, data centres and critical infrastructure. Available on residential specification by enquiry",
          body: (
            <>
              Every SteelR residential steel front door is tested to
              BS EN 1627:2011 RC4 (single leaf, unglazed) as standard.
              For the vast majority of UK homes that specification is
              more than sufficient. There is, however, a tier above
              forced-entry resistance entirely: LPS 1673. This is a
              separate Loss Prevention Certification Board scheme that
              tests resistance to a deliberate, sustained, directed
              attack on the asset behind the door. The threat model is
              fundamentally different from BS EN 1627, and the
              certification is significantly rarer.
            </>
          ),
          body2: (
            <>
              LPS 1673 doors are normally specified for bank vault outer
              doors, data centre internal cores, telecoms infrastructure,
              embassy and consul residences, and high-value asset
              storage. SteelR offers LPS 1673 on residential
              specification where the property, the owner&apos;s threat
              profile, or the insurer&apos;s requirement justifies it. The
              certification attaches to the internal door assembly and
              the locking specification. The external aesthetic remains
              fully bespoke and integrates within the same design
              language used across the rest of the SteelR collection.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "LPS 1673 explained",
            title: "A separate certification scheme with a different threat profile",
            body: (
              <>
                LPS 1673 is issued by the Loss Prevention Certification
                Board (LPCB), part of BRE Global, the same independent
                body that runs LPS 1175. Issue 1 of LPS 1673 was
                launched in 2024. The standard tests doorsets against a
                deliberate, sustained, directed attack on whatever asset
                is protected behind the door. Tools used in testing
                include heavy-duty power tools, cutting equipment,
                prising and drilling implements, applied for tested
                durations measured in seconds rather than minutes. The
                attack methodology is more aggressive than BS EN 1627
                forced-entry testing because the threat model is
                different.
              </>
            ),
            body2: (
              <>
                Three independent test schemes operate in parallel. BS
                EN 1627:2011 (the European framework, with classes RC1
                to RC6) tests resistance to forced entry over a
                sustained manual attack. LPS 1175 (an LPCB-operated
                scheme, with ratings SR1 to SR4) tests forced entry
                against a different tool catalogue and methodology. LPS
                1673 (an LPCB scheme, with classes A, B, C, D) tests
                resistance to a directed asset-protection attack with a
                broader power-tool catalogue. SteelR&apos;s standard
                residential specification sits under BS EN 1627:2011 at
                RC4 single leaf, unglazed. LPS 1673 is available as the
                next tier when the property and threat profile call for
                it.
              </>
            ),
          },
          {
            pretitle: "The rating tiers",
            title: "AR.A300, AR.B180E, AR.B300E and AR.C120E",
            body: (
              <>
                LPS 1673 ratings carry a letter for the threat class,
                a number for the tested attack duration in seconds, and
                an optional E suffix where the test includes electric or
                battery-operated power tools. The four ratings currently
                available on certified production are AR.A300 (Class A,
                300 seconds), AR.B180E (Class B, 180 seconds, with power
                tools), AR.B300E (Class B, 300 seconds, with power
                tools) and AR.C120E (Class C, 120 seconds, with a
                broader power-tool catalogue).
              </>
            ),
            body2: (
              <>
                For comparison, BS EN 1627:2011 RC4 (the SteelR
                residential standard) tests sustained manual forced
                entry over a controlled duration with the European
                tool catalogue. AR.C120E under LPS 1673 tests a
                deliberate directed attack with a broader power-tool
                catalogue under a different methodology, for two
                minutes. The shorter duration reflects the more
                aggressive tool set and the different threat model. AR.C
                is rare in residential specification, and appropriate
                only where the protected asset behind the door justifies
                the certification cost and complexity.
              </>
            ),
          },
          {
            pretitle: "The buyer profile",
            title: "Who actually specifies LPS 1673 on a residential door",
            body: (
              <>
                LPS 1673 is genuinely a commercial and institutional
                certification. Its standard applications are bank vault
                outer doors, internal cores within data centres, telecoms
                exchange and substation buildings, pharmaceutical and
                controlled-substance storage, embassy and consul
                residences (where the building itself forms part of
                asset protection), and high-value art and document
                storage facilities. None of this is residential.
              </>
            ),
            body2: (
              <>
                The legitimate residential audience for LPS 1673 is
                smaller, but it is real. SteelR specifies LPS 1673
                doorsets for the following categories of brief.
              </>
            ),
            list: [
              "Properties with a documented threat assessment prepared by a private security advisor",
              "Homes with a constructed safe room or panic room behind the front entrance",
              "Residences used by clients of specialist private banks or risk-focused insurers, where the underwriter has flagged a higher risk profile",
              "Properties used as principal accommodation by clients in security-sensitive professions, including legal, political and senior financial roles",
              "Family offices that store legal records, art or controlled documents within the residence",
              "Ultra-high-net-worth properties where the owner's specific risk has been assessed and the brief calls for the highest available certification",
            ],
          },
          {
            pretitle: "Bespoke aesthetic, commercial-grade certification",
            title: "Period proportions, conservation-area finish, LPCB-certified internal assembly",
            body: (
              <>
                One frequent concern about commercial-grade certification
                on a residential door is whether the door ends up looking
                commercial-grade. The answer is no. The certification
                attaches to the internal door assembly, the frame
                integration, the hardware specification and the locking
                system. None of this is externally visible. A Georgian
                six-panel door in heritage racing green, with solid
                brass hardware and stained-glass fanlight detailing, is
                a viable LPS 1673 specification. So is a contemporary
                flush leaf in matt anthracite with paired glazed
                sidelights.
              </>
            ),
            body2: (
              <>
                Period panel mouldings, the full RAL colour palette,
                hardware finish options across polished chrome, brushed
                satin, antique brass, polished brass, matt black and
                brushed gold, and integrated sidelight or fanlight
                configurations are all available within the LPS 1673
                product line. The certification does not impose a
                commercial aesthetic on the outside. Detailed coverage
                of design options sits on the{" "}
                <Link
                  href="/colours"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  RAL colours page
                </Link>{" "}
                and the{" "}
                <Link
                  href="/luxury-steel-entrance-door-london"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  London luxury page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Specification and lead time",
            title: "Survey, threat assessment, design sign-off, manufacture",
            body: (
              <>
                LPS 1673 specification follows the standard SteelR
                process with one additional step. Following the on-site
                structural survey, a threat-assessment conversation
                determines whether the BS EN 1627:2011 RC4 standard
                specification is appropriate or whether LPS 1673 is
                justified. Where the property already has a documented
                threat assessment from a private security advisor,
                SteelR works directly with that advisor to align the
                specification with the wider security plan for the
                property. Where the brief is originating from the
                owner&apos;s own risk perception, the SteelR senior team
                walks through the difference between tiers in plain
                terms before any specification is signed off.
              </>
            ),
            body2: (
              <>
                Lead time for an LPS 1673 specification is twelve to
                sixteen weeks from signed design to fitted
                installation. This is two to four weeks longer than a
                standard SteelR specification, reflecting the additional
                certification process and the supply chain coordination
                required for the certified components. Pricing is
                individual to the project and is provided in writing
                within five working days of the survey and threat
                assessment. There are no fixed tiers and no published
                prices. The full process for non-LPS 1673 specifications
                is described on the{" "}
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
              href: "/security-specification",
              label: "Full security specification",
              description:
                "Every certification level applied across the SteelR range, including BS EN 1627:2011 RC4 single leaf, unglazed (the residential standard) and LPS 1673.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "BS EN 1627 forced-entry resistance explained",
              description:
                "How the European framework tests doorsets against sustained manual attack, and why it sits at the heart of the SteelR residential specification.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design steel front doors",
              description:
                "The UK police-preferred specification, applied alongside BS EN 1627:2011 RC4 and PAS 24 on every SteelR door.",
            },
            {
              href: "/luxury-steel-entrance-door-london",
              label: "Luxury steel entrance doors London",
              description:
                "Bespoke residential specification across all London boroughs, with conservation-area and listed-building experience.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Specify a door beyond forced-entry resistance. By enquiry only."
        enquirySource="hub-lps-1673"
        enquiryContextLabel="LPS 1673 Attack-Resistant Steel Doors"
      />
    </>
  );
}
