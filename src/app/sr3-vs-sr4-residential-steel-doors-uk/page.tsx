import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "SR3 vs SR4 Residential Steel Doors UK | Side by Side | SteelR",
  description:
    "LPS 1175 SR3 vs SR4 explained for UK homes. Tool catalogue, attack duration, when each tier is right, and the four-tier SteelR security ladder.",
  alternates: { canonical: "https://steelr.co.uk/sr3-vs-sr4-residential-steel-doors-uk" },
  openGraph: {
    title: "SR3 vs SR4 Residential Steel Doors UK | SteelR",
    description:
      "LPS 1175 SR3 vs SR4 explained for UK homes. Tool catalogue, attack duration, when each tier is right, and the four-tier SteelR ladder.",
    url: "https://steelr.co.uk/sr3-vs-sr4-residential-steel-doors-uk",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question:
      "What is the actual difference between LPS 1175 SR3 and SR4 on a residential steel door?",
    answer:
      "SR3 and SR4 are both Security Ratings under LPS 1175 Issue 8, the LPCB scheme operated by BRE Global. The methodology is the same. The difference is the tool catalogue and the attack duration. SR3 is tested against a defined Issue 8 tool set including bolt cutters, hammers, drills, crowbars and battery-operated power tools, with a five-minute working-time threshold. SR4 (D10 designation under Issue 8) extends the tool catalogue with larger crowbars, heavier prying equipment and battery-operated cutting tools, and increases the attack duration. SR4 is the certification used on data centres, bank vaults and embassy residences. SteelR offers SR3 as the Enhanced upgrade tier and SR4 as the Commercial-grade upgrade tier on every bespoke residential door.",
  },
  {
    question:
      "Where does SR3 sit in the SteelR four-tier residential security ladder?",
    answer:
      "SteelR ships every bespoke door at the Standard tier: PAS 24:2022 plus BS EN 1627:2011 RC4 single leaf, unglazed (the European framework for sustained forced-entry resistance) plus FD30S fire and smoke rating plus Secured by Design plus ISO 9001 plus UK Manufactured. LPS 1175 SR3 (Issue 8) is the Enhanced upgrade tier above the Standard. SR4 (LPS 1175 D10 Issue 8) is the Commercial-grade upgrade tier above SR3. LPS 1673 attack-resistance is the Ultra-high tier, available by enquiry. The four tiers stack on the same door rather than replace one another.",
  },
  {
    question: "Who specifies SR4 on a residential front door rather than SR3?",
    answer:
      "SR4 is rare on a private home. The legitimate audience is owners with a documented threat assessment from a private security advisor; clients of specialist private banks where the underwriter has flagged a higher risk profile; residences for security-sensitive professions including legal, political and senior financial roles; properties with constructed safe rooms or panic rooms where SR4 sits behind the front door as part of a layered security plan; and owners who, having understood the difference between PAS 24, RC4, SR3 and SR4, decide they want the commercial-grade certification for the reassurance alone. For everyone else, the SR3 Enhanced upgrade or the BS EN 1627 RC4 Standard is the right answer.",
  },
  {
    question: "Does SR4 affect home insurance premiums differently from SR3?",
    answer:
      "In most cases the difference is marginal at the homeowner end. Both SR3 and SR4 are LPCB-certified ratings recognised by UK home insurers. SR3 is typically sufficient for standard high-value home policies; specialist high-net-worth insurers (Home and Legacy, Hiscox Private Client, Chubb Premier) recognise SR3 as a benchmark and may offer premium adjustments. SR4 is rarely required by insurers but is occasionally requested for properties with bespoke contents schedules above a defined threshold, or where a specialist underwriter has flagged the address. Always confirm with your insurer directly, referencing the LPCB certificate supplied with the door.",
  },
  {
    question:
      "Does SR4 affect the look or design of the door compared to SR3?",
    answer:
      "No. Both SR3 and SR4 certifications attach to the internal door assembly, frame integration, hardware specification and locking system, not the external aesthetic. A Georgian six-panel door in a heritage colour with brass hardware is a viable SR3 or SR4 specification. So is a contemporary flush leaf in matt anthracite. Period proportions, the full RAL colour palette, hardware finish options and integrated sidelight or fanlight configurations are all available within both tiers. The certification operates inside the door; it does not impose a commercial aesthetic on the outside.",
  },
  {
    question: "How is the SR3 vs SR4 lead time decided, and how does it compare?",
    answer:
      "SR3 follows the standard SteelR design process at the standard eight-week lead time. SR4 adds approximately two to three weeks to the standard, reflecting the additional certification process and supply chain coordination for the Commercial-grade certified components. After the on-site survey, the SteelR design team confirms whether the brief justifies the SR4 Commercial-grade tier, the SR3 Enhanced upgrade, or whether the BS EN 1627 RC4 Standard residential specification is more appropriate. There is no obligation to commit to a tier before the survey conversation.",
  },
  {
    question:
      "Can SR3 or SR4 be combined with FD30S, FD60 or LPS 1673 on the same door?",
    answer:
      "Yes. SteelR's bespoke construction stacks certifications rather than choosing between them. Every door ships at FD30S as standard. FD60 fire and smoke rating is available as an upgrade for protected escape routes, stairwells and Higher-Risk Buildings under the Building Safety Act 2022. SR3 or SR4 can be combined with FD30S or FD60 on the same door assembly. LPS 1673 attack-resistance certification (Ultra-high, AR.A300, AR.B180E, AR.B300E, AR.C120E) is available by enquiry where a documented threat assessment justifies it, and stacks above SR4 on the same door. The four-tier ladder is the rule; nothing is mutually exclusive.",
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
      name: "SR3 vs SR4 Residential Steel Doors UK",
      item: "https://steelr.co.uk/sr3-vs-sr4-residential-steel-doors-uk",
    },
  ],
});

const webPageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SR3 vs SR4 Residential Steel Doors UK",
  url: "https://steelr.co.uk/sr3-vs-sr4-residential-steel-doors-uk",
  description:
    "LPS 1175 SR3 vs SR4 explained for UK residential steel doors. Tool catalogue, attack duration, certification methodology, when each tier applies, and the four-tier SteelR security ladder.",
  about: [
    { "@type": "Thing", name: "LPS 1175 SR3" },
    { "@type": "Thing", name: "LPS 1175 SR4" },
    { "@type": "Thing", name: "LPS 1175 D10 Issue 8" },
    { "@type": "Thing", name: "Loss Prevention Certification Board" },
    { "@type": "Thing", name: "Residential steel front doors" },
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

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

export default function Sr3VsSr4Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webPageSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="SR3 vs SR4 Residential Steel Doors"
        h1="LPS 1175 SR3 vs SR4 on a UK Residential Steel Front Door, Side by Side"
        intro={{
          pretitle: "LPS 1175 Issue 8. Two tiers, one ladder",
          title:
            "SR3 is the Enhanced upgrade tier. SR4 is the Commercial-grade upgrade tier. Both stack on the BS EN 1627 RC4 Standard on the same SteelR door",
          body: (
            <>
              SR3 and SR4 are the second and third tiers of SteelR&apos;s
              four-tier residential security ladder. They are not separate
              schemes. They are different rating bands within LPS 1175
              Issue 8, the Loss Prevention Certification Board scheme
              operated by BRE Global. The methodology is the same. The
              tool catalogue and the attack duration are different.
            </>
          ),
          body2: (
            <>
              The four-tier SteelR ladder is: BS EN 1627:2011 RC4 single
              leaf, unglazed as Standard on every door, LPS 1175 SR3 as
              the Enhanced upgrade above the Standard, LPS 1175 SR4
              (D10 Issue 8) as the Commercial-grade upgrade above SR3,
              and LPS 1673 attack-resistance as the Ultra-high tier
              above SR4 (available by enquiry). This page sets out the
              SR3 vs SR4 decision specifically, where the two tiers
              actually differ, who specifies each, and how the two
              certifications behave when stacked with FD30S, FD60 and
              LPS 1673 on the same bespoke door.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Side by side",
            title: "SR3 and SR4 compared on the four metrics that matter",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point locking detail on a SteelR steel front door specified at LPS 1175 SR3 or SR4",
            },
            body: (
              <>
                Both SR3 and SR4 test the complete door assembly at a
                UKAS-accredited laboratory, against a defined LPS 1175
                Issue 8 tool catalogue, for a defined attack duration.
                Both certify the door, frame, locking mechanism and
                hardware as a system rather than individual components.
                Both are the LPCB police-preferred specification within
                their tier. The differences sit in the tool catalogue,
                the attack duration, the typical specification context
                and the lead-time impact on a SteelR build.
              </>
            ),
            body2: (
              <>
                The summary below restates the two ratings as SteelR
                writes them across the rest of the site: SR3 is the
                Enhanced upgrade above the BS EN 1627 RC4 Standard, SR4
                is the Commercial-grade upgrade above SR3. They are not
                a substitute for each other. SR4 is what an owner with a
                documented threat profile specifies when SR3 is below
                the brief; SR3 is what most high-value UK homeowners
                specify when the BS EN 1627 RC4 Standard is at the brief
                but the LPCB police-preferred mark is required by
                insurer or specifier.
              </>
            ),
            list: [
              "Tool catalogue. SR3 covers bolt cutters, hammers, drills, crowbars and battery-operated power tools under Issue 8. SR4 (D10 Issue 8) extends with larger crowbars, heavier prying equipment and battery-operated cutting tools",
              "Attack duration. SR3 working-time threshold is 5 minutes under Issue 8. SR4 increases the attack window beyond SR3 within the same Issue 8 framework",
              "Typical specification context. SR3: high-value properties, conservation areas, listed buildings, insurer-specified or LPCB-preferred briefs. SR4: documented threat assessment, specialist private-bank clients, security-sensitive professions, layered safe-room specs",
              "SteelR lead time. SR3: standard approximately 8 weeks from sign-off. SR4: standard plus approximately 2 to 3 weeks for the additional Commercial-grade certification process and supply chain coordination",
              "Standards stacking. Both SR3 and SR4 stack with FD30S (or FD60 upgrade), Secured by Design, PAS 24, ISO 9001 on the same door assembly",
            ],
          },
          {
            pretitle: "Methodology",
            title:
              "How LPS 1175 Issue 8 SR3 and SR4 are actually tested",
            body: (
              <>
                LPS 1175 testing is carried out by the Loss Prevention
                Certification Board (LPCB), part of BRE Global, a
                UKAS-accredited certification body. A trained tester
                attacks the complete door and frame assembly using the
                tool set specified for the rating, for the LPS 1175
                attack-duration matrix. The attacker must fail to create
                a passage large enough to enter for the duration of the
                test. The certification attaches to the assembly as a
                whole. Individual component certificates are not
                sufficient.
              </>
            ),
            body2: (
              <>
                The difference between SR3 and SR4 in the test schedule
                is the catalogue of tools the attacker is permitted to
                use, and the working-time threshold the door must
                resist. The SR4 D10 Issue 8 designation extends the
                Issue 8 tool catalogue with battery cutting tools and
                larger prying equipment, increasing the realistic
                attack-energy budget the door must resist. Pass criteria
                are identical: no passage created within the prescribed
                working time, against the prescribed tool set, on the
                complete assembly.
              </>
            ),
          },
          {
            pretitle: "When each tier applies",
            title:
              "SR3 for the high-value home brief, SR4 for documented threat or layered safe-room work",
            body: (
              <>
                SR3 is the upgrade tier most commonly specified on
                SteelR residential projects above the BS EN 1627 RC4
                Standard. Typical reasons: insurer requires LPCB
                police-preferred specification on a high-value home
                policy; conservation officer accepts the door subject
                to the LPCB certification mark being supplied; the
                property is in a higher-risk postcode and the owner
                wants the police-preferred residential mark on the
                certificate pack; or the architect is writing a
                Performance Specification that explicitly references
                LPS 1175 SR3 as the residential threshold.
              </>
            ),
            body2: (
              <>
                SR4 is genuinely rare on a private UK home. When it is
                specified, the brief usually involves a documented
                threat assessment from a private security advisor, a
                client of a specialist private bank where the underwriter
                has flagged the address, a residence for a
                security-sensitive profession (legal, political,
                financial), or a property with a constructed safe room
                or panic room where SR4 sits as the front-door layer of
                a multi-layer security plan. For owners reading this
                page who are not in one of those categories, SR3 is the
                appropriate tier above the BS EN 1627 RC4 Standard, not
                SR4.
              </>
            ),
          },
          {
            pretitle: "Specifying the right tier",
            title:
              "How the SteelR survey conversation arrives at SR3 or SR4",
            body: (
              <>
                The tier conversation happens during the on-site survey,
                not before. SteelR is one of the few UK manufacturers
                offering all four tiers of the residential security
                ladder on the same bespoke door, so the design team is
                neutral on which tier you specify. The survey covers
                the property, the threat profile, the insurer
                relationship, the architectural context and the brief
                behind the door. The output is a written specification
                that names the appropriate tier with reasoning, which
                you can take to your insurer, conservation officer,
                specifier or solicitor before signing off the
                production order.
              </>
            ),
            body2: (
              <>
                If the brief is unclear, SR3 is usually the right
                default for a high-value UK home above the BS EN 1627
                RC4 Standard. SR4 is reserved for the briefs where SR3
                is below the threshold the owner, insurer or threat
                assessment requires. There is no upsell pressure to
                move from RC4 Standard to SR3, or from SR3 to SR4.
                Every tier is genuinely available on every bespoke
                door, and the appropriate choice is the one that fits
                the brief, not the most expensive one on the ladder.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3 residential steel door (Enhanced upgrade)",
              description:
                "What SR3 means on a UK residential front door, how the LPCB police-preferred specification differs from PAS 24 and BS EN 1627 RC4, and why SteelR offers it as the Enhanced upgrade.",
            },
            {
              href: "/sr4-residential-steel-door",
              label: "LPS 1175 SR4 residential steel door (Commercial-grade upgrade)",
              description:
                "The LPCB Commercial-grade certification used on data centres, bank vaults and embassy residences. SteelR's third tier on the four-tier ladder, available on every residential bespoke door.",
            },
            {
              href: "/bs-en-1627-rc4-residential-steel-door",
              label: "BS EN 1627 RC4 (SteelR Standard tier)",
              description:
                "The European framework for sustained forced-entry resistance. Single leaf, unglazed, on every bespoke door before any upgrade is added.",
            },
            {
              href: "/lps-1673-attack-resistant-steel-door",
              label: "LPS 1673 attack-resistant steel doors (Ultra-high)",
              description:
                "The LPCB attack-resistance certification used on bank vault outer doors and embassy residences. The fourth and highest tier on the SteelR ladder, available by enquiry.",
            },
            {
              href: "/security-specification",
              label: "Full SteelR security specification",
              description:
                "All four tiers set out side by side with the certification thresholds, test methodology, and the seven concurrent certifications on the Standard tier.",
            },
            {
              href: "/pas-24-steel-entrance-door",
              label: "PAS 24 steel entrance doors",
              description:
                "The UK regulatory minimum under Approved Document Q for new-build dwellings, and why SteelR exceeds it by a wide margin on every door.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design steel front doors",
              description:
                "The UK police-preferred specification, what it covers across the four-tier ladder, and how home insurers recognise it.",
            },
            {
              href: "/architects",
              label: "For architects and specifiers",
              description:
                "NBS Chorus clauses, BIM data and Performance Specification narrative supplied at specification stage on request, across all four tiers of the ladder.",
            },
            {
              href: "/blog/sr4-lps-1175-commercial-grade-residential",
              label: "Blog: SR4 (LPS 1175) on a residential front door",
              description:
                "Long-form coverage of when SR4 is appropriate on a UK home, how the certification differs from SR3, and the typical buyer profile.",
            },
            {
              href: "/blog/front-door-security-ratings-compared-sr1-to-sr3",
              label: "Blog: SR1 to SR3 security ratings compared",
              description:
                "How LPS 1175 SR1, SR2 and SR3 differ, why most UK homes need SR3 not SR1, and how to read the LPCB certificate pack.",
            },
          ],
        }}
        faqs={faqs}
        whyConsider={{
          items: [
            "You have a documented threat assessment from a private security advisor",
            "You are a client of a specialist private bank where the underwriter has flagged the address",
            "Your home is the residence for a security-sensitive profession (legal, political, senior financial)",
            "Your property includes a constructed safe room or panic room behind the front door",
            "Most homeowners need SR3, not SR4 — and that is worth saying upfront",
          ],
        }}
        ctaHeading="Talk to our design team about which tier fits your brief"
        enquirySource="hub-sr3-vs-sr4"
        enquiryContextLabel="SR3 vs SR4 Comparison"
      />

      {/* Inline supplementary navigation back to the four-tier ladder */}
      <section className="bg-cream py-12 md:py-16 px-6 md:px-16" aria-label="Four-tier ladder">
        <div className="max-w-5xl mx-auto">
          <p
            className="mb-3 text-center"
            style={{
              fontFamily: bodyFont,
              fontWeight: 400,
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#b8943f",
            }}
          >
            The four-tier ladder
          </p>
          <h2
            className="mb-8 text-center"
            style={{
              fontFamily: displayFont,
              fontWeight: 300,
              fontSize: "clamp(22px, 2.6vw, 30px)",
              color: "#1a1a18",
              lineHeight: 1.2,
            }}
          >
            SR3 and SR4 sit between the Standard and the Ultra-high tiers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/bs-en-1627-rc4-residential-steel-door"
              className="group block p-5 border border-[rgba(26,26,24,0.12)] hover:border-[#c9a96e] focus-visible:border-[#c9a96e] focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2 transition-colors duration-200"
            >
              <p className="mb-2" style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6f4e" }}>
                Tier 1. Standard
              </p>
              <p style={{ fontFamily: displayFont, fontWeight: 400, fontSize: 16, color: "#1a1a18", lineHeight: 1.3 }}>
                BS EN 1627 RC4 <span aria-hidden="true" style={{ color: "#c9a96e" }}>&rarr;</span>
              </p>
            </Link>
            <Link
              href="/sr3-residential-steel-door"
              className="group block p-5 border border-[rgba(26,26,24,0.12)] hover:border-[#c9a96e] focus-visible:border-[#c9a96e] focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2 transition-colors duration-200"
            >
              <p className="mb-2" style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6f4e" }}>
                Tier 2. Enhanced
              </p>
              <p style={{ fontFamily: displayFont, fontWeight: 400, fontSize: 16, color: "#1a1a18", lineHeight: 1.3 }}>
                LPS 1175 SR3 <span aria-hidden="true" style={{ color: "#c9a96e" }}>&rarr;</span>
              </p>
            </Link>
            <Link
              href="/sr4-residential-steel-door"
              className="group block p-5 border border-[rgba(26,26,24,0.12)] hover:border-[#c9a96e] focus-visible:border-[#c9a96e] focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2 transition-colors duration-200"
            >
              <p className="mb-2" style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6f4e" }}>
                Tier 3. Commercial-grade
              </p>
              <p style={{ fontFamily: displayFont, fontWeight: 400, fontSize: 16, color: "#1a1a18", lineHeight: 1.3 }}>
                LPS 1175 SR4 <span aria-hidden="true" style={{ color: "#c9a96e" }}>&rarr;</span>
              </p>
            </Link>
            <Link
              href="/lps-1673-attack-resistant-steel-door"
              className="group block p-5 border border-[rgba(26,26,24,0.12)] hover:border-[#c9a96e] focus-visible:border-[#c9a96e] focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2 transition-colors duration-200"
            >
              <p className="mb-2" style={{ fontFamily: bodyFont, fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a6f4e" }}>
                Tier 4. Ultra-high
              </p>
              <p style={{ fontFamily: displayFont, fontWeight: 400, fontSize: 16, color: "#1a1a18", lineHeight: 1.3 }}>
                LPS 1673 <span aria-hidden="true" style={{ color: "#c9a96e" }}>&rarr;</span>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
