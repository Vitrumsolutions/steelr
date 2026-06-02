import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Insurance-Approved Steel Front Doors UK | HNW Spec | SteelR",
  description:
    "When a UK home insurer specifies a minimum-security standard at the front door, what they typically mean and how SteelR's four-tier ladder maps to it. For high net worth homeowners, brokers and underwriting referrals.",
  alternates: {
    canonical: "https://steelr.co.uk/insurance-approved-steel-front-doors-uk",
  },
  openGraph: {
    title:
      "Insurance-Approved Steel Front Doors for High Net Worth UK Homes | SteelR",
    description:
      "What UK private-client home insurers typically specify at the front door, the independent verification routes available to any underwriter, and where SteelR's BS EN 1627 RC4 Standard plus LPS 1175 SR3 / SR4 / LPS 1673 upgrades fit.",
    url: "https://steelr.co.uk/insurance-approved-steel-front-doors-uk",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "What does insurance-approved actually mean on a UK steel front door?",
    answer:
      "There is no single regulator-issued mark called insurance-approved on UK home insurance policy schedules. In practice the term refers to the underlying certifications a UK home insurer treats as evidence that the door meets a sustained forced-entry resistance standard. The benchmarks most commonly referenced by UK private-client home insurance underwriters are LPS 1175 SR3 (the LPCB police-preferred Enhanced specification), BS EN 1627:2011 RC4 single leaf, unglazed (the European framework for sustained forced-entry resistance), Secured by Design accreditation (UK police-preferred), and PAS 24:2022 as the Approved Document Q baseline. SteelR's standard residential specification carries PAS 24, RC4, SBD and FD30S as standard, with LPS 1175 SR3 (Enhanced upgrade), LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade) and LPS 1673 attack-resistance (Ultra-high, by enquiry) available on every door.",
  },
  {
    question: "Will an SR3 specification reduce my home insurance premium?",
    answer:
      "In most cases the answer is conditional on the underwriter. Named UK private-client home insurance underwriters and Lloyd's-syndicate-backed HNW schemes treat LPS 1175 SR3 with Secured by Design accreditation as a material reduction in forced-entry risk. The reduction usually appears either as a premium adjustment or, more often on a high-sum-insured personal-lines book, as the basis for binding cover that would otherwise be refused or subject to a property warranty. Confirm the position with your broker against the LPCB certification reference for the door class fitted.",
  },
  {
    question: "Do I need SR4 for a five-million-pound-plus property?",
    answer:
      "Not automatically. Most named UK HNW underwriters accept LPS 1175 SR3 with Secured by Design at the front door as sufficient evidence at the £1M to £5M sum-insured tier on standard residential risk. SR4 (LPS 1175 D10 Issue 8, the Commercial-grade upgrade used in data centres and bank vaults) becomes the practical specification on two independent triggers. First, a household risk profile that the underwriter flags as elevated, such as an executive, public-figure or threat-assessed referral, independent of sum-insured. Second, a sum-insured tier above £10M where the surveyor's report requests commercial-grade certification. LPS 1673 attack-resistance is the next tier above SR4 and is available by enquiry where a documented threat assessment justifies the Ultra-high tier.",
  },
  {
    question: "How does an underwriter verify the door specification independently?",
    answer:
      "Every certification on a SteelR door is held by an independent certification body and listed on a public register the underwriter can query without involving SteelR. LPS 1175 SR3 and SR4 certifications are listed on the LPCB Red Book at redbooklive.com, searchable by manufacturer, product and class. Secured by Design accreditation is listed on the SBD member directory at securedbydesign.com. ISO 9001 UK manufacturing is listed on the BSI public register at bsigroup.com. The insurance-backed guarantee carried on every SteelR door is arranged through the Consumer Protection Association, an appointed representative of CPA Consumer Guard Ltd, authorised and regulated by the Financial Conduct Authority and listed on the FCA register at register.fca.org.uk. The underwriter, broker or loss-adjuster can verify the chain end to end against records SteelR does not control.",
  },
  {
    question: "What is the typical lead time when an insurer-stipulated installation is in scope?",
    answer:
      "Standard lead time is around eight weeks from initial brief through survey, design, manufacture and installation. Where a binding underwriting referral is the driver and a cover note is contingent on the door being in place by a specific date, accelerated programmes can sometimes be accommodated. The accelerated path requires the specification to be set during the design consultation rather than at the survey, and is subject to operational capacity in the factory at the time of booking. Discuss the underwriting timeline with the design team at first contact so the programme can be planned against the cover-note deadline.",
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
      name: "Insurance-Approved Steel Front Doors UK",
      item: "https://steelr.co.uk/insurance-approved-steel-front-doors-uk",
    },
  ],
});

const webPageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://steelr.co.uk/insurance-approved-steel-front-doors-uk#webpage",
  name: "Insurance-Approved Steel Front Doors for High Net Worth UK Homes",
  url: "https://steelr.co.uk/insurance-approved-steel-front-doors-uk",
  description:
    "What UK private-client home insurers typically specify at the front door, the independent verification routes available to any underwriter, and where SteelR's BS EN 1627 RC4 Standard plus LPS 1175 SR3 / SR4 / LPS 1673 upgrades fit on a high-value residential brief.",
  about: [
    { "@type": "Thing", name: "LPS 1175 SR3" },
    { "@type": "Thing", name: "LPS 1175 SR4" },
    { "@type": "Thing", name: "LPS 1673 attack-resistance" },
    { "@type": "Thing", name: "BS EN 1627 RC4" },
    { "@type": "Thing", name: "Secured by Design" },
    { "@type": "Thing", name: "Consumer Protection Association" },
    { "@type": "Thing", name: "Insurance-backed guarantee" },
    { "@type": "Thing", name: "UK home insurance" },
    { "@type": "Thing", name: "High net worth home insurance" },
    { "@type": "Thing", name: "Steel front door certification" },
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "High net worth UK homeowners, private-client insurance brokers, underwriting referral channels",
  },
  isPartOf: { "@type": "WebSite", url: "https://steelr.co.uk" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [
      "#insurance-quick-answer",
      "section[aria-labelledby='insurance-quick-answer'] p",
    ],
  },
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

export default function InsuranceApprovedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

      {/* Quick Answer. Labelled section + Speakable target. */}
      <section
        aria-labelledby="insurance-quick-answer"
        className="mb-12 rounded-2xl border border-gold/30 bg-cream/40 p-8"
        style={{
          maxWidth: "48rem",
          margin: "2.5rem auto",
          padding: "2rem",
        }}
      >
        <h2
          id="insurance-quick-answer"
          className="text-sm uppercase tracking-[0.2em] mb-4"
          style={{ color: "#8a6f4e" }}
        >
          What insurers typically specify at the front door
        </h2>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "#1a1a18" }}
        >
          When a UK private-client home insurer specifies a minimum
          security standard at the front door of a high-value
          residential property, they are typically asking for LPS 1175
          SR3 (the LPCB police-preferred Enhanced upgrade) with
          Secured by Design accreditation, an FD30S fire and smoke
          rating, and PAS 24:2022 baseline certification. SteelR
          carries PAS 24, BS EN 1627:2011 RC4 single leaf, unglazed,
          Secured by Design and FD30S as standard on every door, with
          LPS 1175 SR3 (Enhanced), LPS 1175 SR4 D10 Issue 8
          (Commercial-grade) and LPS 1673 attack-resistance (Ultra-high,
          by enquiry) available as upgrades. Every certification is
          independently verifiable on public registers the manufacturer
          does not control. Every SteelR installation carries an
          insurance-backed guarantee arranged through the Consumer
          Protection Association, an FCA-regulated scheme.
        </p>
      </section>

      <InfoPage
        heroTitle="Insurance-Approved Steel Front Doors"
        h1="Insurance-Approved Steel Front Doors for High Net Worth UK Homes"
        intro={{
          pretitle: "For HNW homeowners, brokers and underwriting referrals",
          title:
            "What a UK home insurer is actually asking for when they specify the front door on a high-value property",
          body: (
            <>
              UK home insurance for high net worth and ultra high net
              worth households differs structurally from standard
              personal-lines cover. Sum-insured limits are higher, the
              schedule of valuable articles is itemised, and the
              underwriter often warrants minimum security
              specifications on the property as a condition of binding
              the cover. The front door is the most frequent
              warranty-triggered specification: it is the primary
              physical security boundary, it is what loss-adjusters
              inspect first after a forced-entry claim, and it is the
              single item on a property where independent certification
              is both available and straightforward to verify.
            </>
          ),
          body2: (
            <>
              This page explains what UK private-client home insurance
              underwriters typically reference at the front door, how
              SteelR&apos;s four-tier security ladder maps to those
              references, and how the chain of certifications and
              supplier-stability cover can be verified by the
              underwriter, the broker or the loss-adjuster against
              independent public records. No insurer is named on this
              page, no promised premium reduction is quoted, and no
              third-party endorsement is implied. The information
              below is the certification framework itself; whether
              your specific policy treats it as material is a
              conversation with your broker against the certification
              references for the door class fitted.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "The certifications underwriters reference",
            title:
              "LPS 1175, BS EN 1627, Secured by Design, PAS 24 and FD30S, in plain English",
            body: (
              <>
                Five certifications recur in UK home insurance
                surveyor reports and broker submissions for high net
                worth residential risk. LPS 1175 (the Loss Prevention
                Certification Board scheme, operated by BRE Global,
                UKAS-accredited) certifies the complete door assembly
                against a sustained forced-entry attack by a trained
                tester. Security Rating 3 (SR3) is the LPCB
                police-preferred Enhanced specification. Security
                Rating 4 (SR4, D10 Issue 8) is the Commercial-grade
                certification used on data centres, bank vaults and
                high-risk commercial premises, available as an
                upgrade on residential specification. BS EN 1627:2011
                RC4 is the European framework for sustained
                forced-entry resistance, single leaf, unglazed, and is
                SteelR&apos;s Standard residential specification.
              </>
            ),
            body2: (
              <>
                Secured by Design is the UK police-preferred
                accreditation scheme operated by Police Crime
                Prevention Initiatives. It certifies the complete
                product family (frame, leaf, locking mechanism,
                hardware) against an audited specification rather than
                just a single test. PAS 24:2022 is the UK security
                baseline required by Approved Document Q of the
                Building Regulations for new-build dwellings, and is
                the floor that any compliant front door must meet.
                FD30S is the 30-minute fire and smoke rating
                referenced under Approved Document B, the Fire Safety
                Act 2021 and the Building Safety Act 2022. SteelR
                carries all five as standard on every door, with the
                SR3, SR4 and LPS 1673 tiers available as upgrades.
                For the full standards detail see the{" "}
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
            pretitle: "What this page is not",
            title:
              "A front entrance specification, not a whole-property security audit",
            body: (
              <>
                This page covers the front entrance door
                specifically. It does not cover safe rooms or vault
                rooms inside the property. Those are a related but
                separate specification, typically commissioned where
                the underwriter has warranted a fortified secure
                space for high-value items, fine art, jewellery
                scheduled at agreed value, or where the household
                threat profile justifies a retreat space. SteelR
                manufactures bespoke front entrance doors. Where a
                whole-property safe-room programme is in scope, that
                requires a different specialist and a different
                product family.
              </>
            ),
            body2: (
              <>
                Equally, this page does not address shutter systems,
                window bar specifications, perimeter intrusion
                detection, or contents-grade safes. Those each
                involve a different certification framework. The
                front entrance is the single specification SteelR
                certifies, and it is the layer most commonly
                warranted in HNW residential policy schedules. For
                broader perimeter specifications, engage a property
                security consultant alongside the front-door
                installation.
              </>
            ),
          },
          {
            pretitle: "The four-tier ladder mapped to property profile",
            title:
              "Standard, Enhanced, Commercial-grade, Ultra-high. Two independent triggers for upgrade",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point chrome locking mechanism on an insurance-specified steel front door",
            },
            body: (
              <>
                There is no industry-issued matrix that ties a
                property sum-insured to a specific security tier.
                Underwriting decisions are policy-by-policy and are
                influenced by the schedule of valuable articles, the
                location, the surveyor&apos;s report, the
                claims-history of the postcode, and the threat profile
                of the household. The bands below describe the
                pattern SteelR sees most often referenced by brokers
                on private-client home insurance instructions, not an
                industry rule. Treat them as a conversation-starter
                with your broker, not a binding tier.
              </>
            ),
            body2: (
              <>
                Two independent triggers move a household up the
                ladder. The first is sum-insured: the Standard tier
                (PAS 24 plus BS EN 1627 RC4 plus Secured by Design
                plus FD30S) is commonly sufficient up to the
                lower-mid HNW range; LPS 1175 SR3 Enhanced is the
                middle-tier reference; LPS 1175 SR4 Commercial-grade
                comes in at the upper end. The second trigger is
                threat profile, independent of sum-insured. An
                executive, public-figure, heritage-asset or
                threat-assessed referral may call for SR4 or LPS
                1673 even at a lower sum-insured. The two triggers
                are not the same conversation. More detail on the
                upgrade tiers sits on the{" "}
                <Link
                  href="/sr3-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR3 page
                </Link>
                , the{" "}
                <Link
                  href="/sr4-residential-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  SR4 page
                </Link>{" "}
                and the{" "}
                <Link
                  href="/lps-1673-attack-resistant-steel-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  LPS 1673 page
                </Link>
                . The four-tier ladder explained end to end is on the{" "}
                <Link
                  href="/security"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  security page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "How an underwriter verifies the specification",
            title:
              "Independent public records, not a vendor-controlled document",
            body: (
              <>
                Every certification on a SteelR door is held by an
                independent certification body and listed on a public
                register the underwriter can query without involving
                SteelR. LPS 1175 SR3 and SR4 certifications are listed
                on the LPCB Red Book, searchable by manufacturer,
                product family and class. Secured by Design
                accreditation is listed on the SBD public member
                directory. ISO 9001 UK manufacturing is listed on the
                BSI public register. The Consumer Protection
                Association, the scheme behind the insurance-backed
                guarantee on every SteelR installation, is an
                appointed representative of CPA Consumer Guard Ltd,
                authorised and regulated by the Financial Conduct
                Authority and listed on the FCA register.
              </>
            ),
            body2: (
              <>
                The structural advantage for the underwriter is that
                each link in the certification chain can be verified
                against records SteelR does not control. Cover bound
                against the door references those records directly,
                not a vendor-controlled document the manufacturer
                could in principle revise. The chain is built to
                survive loss-adjuster scrutiny at claim time without
                relying on supplier-side paperwork. On request, the
                SteelR design team supplies the LPCB certificate
                references for the specific class fitted to your
                door, the SBD reference for the product family, and
                the insurance certificate reference for the IBG once
                registered after installation completion.
              </>
            ),
            list: [
              "LPCB Red Book at redbooklive.com. Search by manufacturer, product family or LPS 1175 class",
              "Secured by Design member directory at securedbydesign.com. Search by company",
              "BSI public register at bsigroup.com. ISO 9001 and other certified UK manufacturing",
              "FCA register at register.fca.org.uk. Lookup for CPA Consumer Guard Ltd, the entity behind the CPA insurance-backed guarantee",
            ],
          },
          {
            pretitle: "Supplier-stability cover",
            title:
              "The CPA insurance-backed guarantee, FCA-regulated",
            body: (
              <>
                SteelR is a member of the Consumer Protection
                Association, the UK home-improvement trade body
                authorised and regulated by the Financial Conduct
                Authority. Every SteelR installation carries an
                insurance-backed guarantee arranged through the CPA
                scheme. The IBG provides cover for the manufacturer&apos;s
                written guarantee period, underwritten by an
                authorised insurer. If the installer ceases to trade
                during the guarantee term, the IBG steps into the
                original guarantee terms so the householder is not
                exposed to a counterparty-failure outcome on a long-tail
                warranty.
              </>
            ),
            body2: (
              <>
                For UK private-client home insurance underwriters,
                this answers the supplier-stability question on the
                installer counterparty. The IBG is an FCA-regulated
                scheme rather than a single-company commitment, and
                CPA Consumer Guard Ltd is listed on the FCA public
                register where its authorisation status can be
                verified independently. The IBG insurance certificate
                is registered after installation completion and
                supplied to the householder for the policy file, on
                request to the broker for inclusion in the schedule.
              </>
            ),
          },
          {
            pretitle: "At claim time",
            title:
              "The chain of records the loss-adjuster verifies",
            body: (
              <>
                If a forced-entry claim arises on the property, the
                loss-adjuster typically asks for three things at the
                front door. First, the class of LPCB certification
                fitted, confirmable against the LPCB Red Book entry
                for the SteelR product family and the design records
                for the specific door. Second, the Secured by Design
                accreditation, confirmable against the SBD public
                member directory. Third, the IBG status, confirmable
                against the policyholder&apos;s registered insurance
                certificate and the FCA register entry for CPA
                Consumer Guard Ltd.
              </>
            ),
            body2: (
              <>
                Each link is verifiable against an independent record.
                The loss-adjuster does not need a single
                vendor-controlled document to substantiate the
                specification fitted to the door at the time of the
                claim. That is the structural difference between a
                documented specification and an undocumented one, and
                the difference SteelR is built around at the
                installation-record level. The design and survey team
                supplies on request the LPCB certificate references
                and product-family reference numbers that match the
                specific door installed at the property.
              </>
            ),
          },
          {
            pretitle: "Why this matters for the broker conversation",
            title:
              "Removing the warranty as a binding-stage blocker",
            body: (
              <>
                The most frequent failure mode at the underwriting
                referral stage is not the door, it is the audit
                trail. An underwriter cannot bind cover against a
                door whose certification cannot be produced on
                demand. A property warranty written into the policy
                schedule becomes a coverage gap if a forced-entry
                claim arises and the door lacks the referenced
                certification. The chain of independent records on a
                SteelR door is built to close that audit-trail gap
                end to end, in a form the underwriter and the
                loss-adjuster can both verify against LPCB, SBD,
                BSI and FCA public records.
              </>
            ),
            body2: (
              <>
                For the broker, this turns the front-door warranty
                from a friction point in the binding conversation
                into an evidenced specification on the schedule. For
                the homeowner, it turns the front door from a
                cover-condition into a fitted asset whose
                specification and supplier-stability cover are
                independently verifiable. For the underwriter, it
                turns a property risk into a documentable referral
                without requiring an additional surveyor visit.
                None of these are claims about premium reduction;
                they are claims about removing the most common
                procedural blocker between an HNW household and the
                cover they already want to buy.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/security",
              label: "The full four-tier security ladder",
              description:
                "PAS 24 plus BS EN 1627 RC4 Standard, LPS 1175 SR3 Enhanced, LPS 1175 SR4 Commercial-grade, LPS 1673 Ultra-high. The complete ladder explained.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3 residential steel door",
              description:
                "The LPCB police-preferred Enhanced upgrade. Test methodology, tool catalogue, and the certification underwriters reference most often.",
            },
            {
              href: "/sr4-residential-steel-door",
              label: "LPS 1175 SR4 residential steel door",
              description:
                "The Commercial-grade upgrade used on data centres and bank vaults, available on residential specification where the threat profile warrants it.",
            },
            {
              href: "/lps-1673-attack-resistant-steel-door",
              label: "LPS 1673 attack-resistant steel doors",
              description:
                "The Ultra-high tier above SR4, by enquiry where a documented threat assessment justifies it.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design steel front doors",
              description:
                "UK police-preferred accreditation, what it covers, and how it differs from LPS 1175.",
            },
            {
              href: "/security-specification",
              label: "Full PAS 24, SR3 and SR4 specification",
              description:
                "Side-by-side comparison of every standard a SteelR door meets.",
            },
            {
              href: "/luxury-steel-front-doors-uk",
              label: "Luxury steel front doors UK",
              description:
                "The aesthetic and tier-positioning hub. Sibling to this page; covers the premium-brief intent rather than the underwriting intent.",
            },
            {
              href: "/architects",
              label: "For architects and specifiers",
              description:
                "NBS-format clauses and Performance Specification narrative against the same four-tier ladder.",
            },
          ],
        }}
        faqs={faqs}
        whyConsider={{
          items: [
            "Your underwriter has warranted a minimum-security specification at the front door as a condition of binding cover",
            "Your broker has flagged LPS 1175 SR3, BS EN 1627 RC4 or Secured by Design as the specification threshold for the policy",
            "Your sum-insured sits in the HNW or UHNW range and a private-client scheme is in place or being placed",
            "Your household risk profile (executive, public-figure, threat-assessed) calls for SR4 Commercial-grade or LPS 1673 attack-resistance, independent of sum-insured",
            "You want every certification on the installed door to be independently verifiable from LPCB, SBD and BSI public records, plus FCA-regulated supplier-stability cover through the Consumer Protection Association",
          ],
        }}
        ctaHeading="Specify against the standards your underwriter references"
        enquirySource="hub-insurance-approved"
        enquiryContextLabel="Insurance-Approved Steel Front Doors"
      />
    </>
  );
}
