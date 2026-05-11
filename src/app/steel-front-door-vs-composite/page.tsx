import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Steel Front Door vs Composite | UK Comparison | SteelR",
  description:
    "Steel front door vs composite: honest side-by-side comparison on security, longevity, thermal, fire rating and cost of ownership. From a UK steel manufacturer.",
  alternates: { canonical: "https://steelr.co.uk/steel-front-door-vs-composite" },
  openGraph: {
    title: "Steel Front Door vs Composite | SteelR",
    description:
      "Honest side-by-side comparison of steel and composite front doors on security, longevity, thermal performance, fire rating and cost of ownership.",
    url: "https://steelr.co.uk/steel-front-door-vs-composite",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Is a steel front door really more secure than a composite one?",
    answer:
      "Yes, substantially. Most composite doors on the UK market are PAS 24:2022 certified, which tests resistance to a one-to-three-minute casual attack. Every SteelR door is PAS 24 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, and offers the LPS 1175 SR3 Enhanced upgrade tier (the LPCB police-preferred specification, five-minute power-tool resistance) on every door. A small number of premium composite doors also offer SR3, but the baseline for the category is PAS 24. For the same house and budget, a steel door is typically a full certification tier above the composite equivalent.",
  },
  {
    question: "How long does a steel door last compared to composite?",
    answer:
      "A correctly engineered steel door is designed for a twenty-five to thirty year service life with routine maintenance. Composite doors typically carry a ten to fifteen year warranty, with GRP skins subject to fading, cracking under thermal stress and delamination at the edges over time. Steel does not warp, swell, delaminate or fade in the way composite can. The finish is a UV-stable powder coat applied under factory conditions, not a pigmented GRP laminate.",
  },
  {
    question: "Are composite doors more thermally efficient than steel?",
    answer:
      "Composite doors typically publish U-values around 1.2 to 1.4 W/m²K. Thermally broken steel doors with a correctly engineered thermal break and insulated core achieve similar or lower U-values. The thermal performance of steel depends entirely on the frame construction. A budget steel door with no thermal break will perform poorly. A thermally broken SteelR door performs comparably to a premium composite and without the skin degradation issues that composite suffers over time.",
  },
  {
    question: "Can a composite door be made to match a period property?",
    answer:
      "Composite doors are manufactured from a limited number of moulds. The panel profiles, knocker positions and glazing patterns are fixed by the tooling. A skilled installer can produce a credible period look with the right colour and hardware, but the geometry is constrained. A bespoke steel door is fabricated rather than moulded, so panel proportions, mouldings, knocker placement, letterplate style and sidelight configuration are specified individually to match the property.",
  },
  {
    question: "Which is better value over a ten-year period?",
    answer:
      "A composite door is lower initial cost. A steel door is higher initial cost and lower total cost of ownership because of the longer service life, lower maintenance requirement, and resistance to finish degradation. On a ten-year horizon the running costs favour steel. On a twenty-five-year horizon the gap widens further, because a composite door will typically need replacement within that period while a steel door will not.",
  },
  {
    question: "Do home insurers differentiate between composite and steel doors?",
    answer:
      "Increasingly, yes. Mainstream insurers and high-net-worth specialists in particular recognise the difference between PAS 24 and SR3 certification when assessing residential property risk. Properties with SR3-rated entrance doors may qualify for reduced premiums or are sometimes specifically requested by underwriters at higher property values. Secured by Design accreditation carries additional weight in those assessments. PAS 24-only composite doors meet the regulatory minimum for new builds but do not move the dial on insurer risk profiles in the same way SR3 does.",
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
      name: "Steel Front Door vs Composite",
      item: "https://steelr.co.uk/steel-front-door-vs-composite",
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

export default function SteelVsCompositePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Steel vs Composite Front Doors"
        h1="Steel Front Door vs Composite — Honest UK Comparison"
        intro={{
          pretitle: "A written-by-the-manufacturer comparison",
          title:
            "An honest side-by-side on security, longevity, thermal performance and cost of ownership",
          body: (
            <>
              Composite front doors dominate the UK residential door market
              by volume. They are sold by almost every window and door
              company in the country, and for a lot of properties they are
              a perfectly sensible choice. A steel door is not the right
              answer for every home. It is, however, a materially different
              category of product. This page is an honest side-by-side
              comparison, written by a steel door manufacturer, covering
              the points owners usually want to understand before
              committing either way.
            </>
          ),
          body2: (
            <>
              We will cover security, longevity, thermal performance, fire
              rating, aesthetic flexibility and total cost of ownership in
              order. No marketing lines, no hidden tradeoffs.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "At a glance",
            title: "Spec-by-spec comparison",
            body: (
              <>
                The numbers below are typical UK market figures for a premium
                composite door alongside the SteelR specification, drawn from
                manufacturer-published U-values, certification test reports
                and standard product warranties. SteelR figures are
                verifiable against our published technical sheet and the
                UKAS-accredited test reports in the certificate pack.
                <div
                  className="mt-8 overflow-x-auto"
                  style={{
                    border: "1px solid rgba(201,169,110,0.2)",
                    borderRadius: 4,
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontSize: 13,
                      color: "#1a1a18",
                    }}
                  >
                    <caption className="sr-only">
                      Spec-by-spec comparison of a premium composite front
                      door and a SteelR bespoke steel front door
                    </caption>
                    <thead>
                      <tr style={{ background: "#1a1a18", color: "#f5f0e8" }}>
                        <th
                          scope="col"
                          style={{
                            textAlign: "left",
                            padding: "12px 16px",
                            fontWeight: 400,
                            fontSize: 10,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                          }}
                        >
                          Specification
                        </th>
                        <th
                          scope="col"
                          style={{
                            textAlign: "left",
                            padding: "12px 16px",
                            fontWeight: 400,
                            fontSize: 10,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                          }}
                        >
                          Premium composite door
                        </th>
                        <th
                          scope="col"
                          style={{
                            textAlign: "left",
                            padding: "12px 16px",
                            fontWeight: 400,
                            fontSize: 10,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#c9a96e",
                          }}
                        >
                          SteelR bespoke steel
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ fontWeight: 300, lineHeight: 1.6 }}>
                      {[
                        ["Security baseline", "PAS 24:2022", "PAS 24:2022 + BS EN 1627:2011 RC4 single leaf, unglazed"],
                        ["Security upgrade", "SR3 on a handful of premium models", "LPS 1175 SR3 (Enhanced) standard upgrade; SR4 (Commercial-grade) on request"],
                        ["U-value (standard)", "1.0 to 1.4 W/m²K (premium); 1.6 to 1.8 W/m²K (budget)", "From 1.5 W/m²K, with thermal-upgrade specifications to 0.8 W/m²K"],
                        ["Building Regs Part L max", "1.8 W/m²K", "1.8 W/m²K (comfortably met as standard)"],
                        ["Acoustic attenuation", "Typically 29 to 32 dB Rw", "33 dB Rw standard; up to 39 dB Rw on acoustic upgrade"],
                        ["Door leaf thickness", "44 to 48 mm typical", "70 mm"],
                        ["Steel skin / frame gauge", "n/a (GRP skin over insulated core)", "1.5 mm outer steel skin; 2 mm reinforced box-section frame"],
                        ["Service life", "10 to 15 years typical", "25 to 30 years with routine maintenance"],
                        ["Manufacturer warranty", "10 years typical (whole door)", "10 years door construction; 5 years finish; 3 years hardware"],
                        ["Fire rating (standard)", "Not fire rated on most product; FD30 on premium variants", "FD30S standard; FD60 available as upgrade"],
                        ["End-of-life recyclability", "Mostly landfill (multi-material bond limits recycling)", "Fully recyclable steel core; UK steel ≥85% recycled stream"],
                      ].map(([spec, comp, steel], rowIdx) => (
                        <tr
                          key={String(spec)}
                          style={{
                            background:
                              rowIdx % 2 === 0
                                ? "rgba(201,169,110,0.04)"
                                : "transparent",
                            borderTop: "1px solid rgba(201,169,110,0.12)",
                          }}
                        >
                          <th
                            scope="row"
                            style={{
                              textAlign: "left",
                              padding: "12px 16px",
                              fontWeight: 400,
                              verticalAlign: "top",
                              whiteSpace: "normal",
                            }}
                          >
                            {spec}
                          </th>
                          <td
                            style={{
                              padding: "12px 16px",
                              verticalAlign: "top",
                              color: "#6b5a42",
                            }}
                          >
                            {comp}
                          </td>
                          <td
                            style={{
                              padding: "12px 16px",
                              verticalAlign: "top",
                            }}
                          >
                            {steel}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ),
            body2: (
              <>
                Composite figures are representative of premium UK brands at
                the SR3 or PAS 24 tier and may vary by model. SteelR figures
                are common to every door specified and uplift on
                acoustic-upgrade, thermal-upgrade and SR4 routes are
                available on request. The certification, test and warranty
                evidence chain is supplied in the project pack on every
                completed door.
              </>
            ),
          },
          {
            pretitle: "Security",
            title: "A full certification tier apart",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point locking on a SteelR steel front door",
            },
            body: (
              <>
                The UK minimum for a new-build front door is PAS 24:2022,
                under Approved Document Q. Nearly every composite door on
                the market is PAS 24 certified. PAS 24 tests resistance to
                a one-to-three-minute casual attack using basic hand tools.
                It is designed to stop the class of attacker who gives up
                when the door does not open immediately.
              </>
            ),
            body2: (
              <>
                Every SteelR door is PAS 24 certified and BS EN 1627:2011
                RC4 single leaf, unglazed certified as Standard. The
                LPS 1175 SR3 Enhanced upgrade tier (the LPCB
                police-preferred specification, five minutes of power-tool
                resistance against a defined Issue 8 catalogue) is
                available on every door. A small number of premium
                composite doors are also SR3 rated, but they are the
                exception. LPS 1175 SR4 (D10 Issue 8), the
                Commercial-grade certification used for data centres and
                bank vaults, is available as a further upgrade on every
                SteelR door. No composite manufacturer currently offers
                LPS 1175 on a residential door. See the
                detail on the{" "}
                <Link href="/security" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  security page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Longevity",
            title: "Thirty-year steel vs fifteen-year composite",
            body: (
              <>
                Composite doors are a GRP skin bonded to an insulated core
                inside a timber or uPVC frame. The GRP skin is factory
                pigmented, so the colour is part of the material rather
                than a surface coating. That is a strength in early years
                and a weakness in later ones. GRP is vulnerable to thermal
                expansion cracking, UV-induced fading and edge delamination
                where the skin meets the frame. Most manufacturers warrant
                composite doors for ten years. Real-world service life is
                typically fifteen years before the door looks old enough
                to need replacement.
              </>
            ),
            body2: (
              <>
                Steel does not warp, swell, delaminate or crack. The finish
                is a UV-stable powder coat applied under factory
                conditions, baked onto the metal substrate. Service life
                is twenty-five to thirty years with routine maintenance. A
                correctly specified steel door installed in 2026 should
                still be in service and in condition in 2056. The
                difference matters most on the second cycle. A composite
                door fitted now will be replaced once within the service
                life of a steel door fitted alongside it.
              </>
            ),
          },
          {
            pretitle: "Thermal performance",
            title: "The thermal break is the whole story",
            body: (
              <>
                Composite doors typically publish U-values around 1.0 to
                1.4 W/m²K for premium products, with budget composites
                landing closer to 1.6 to 1.8. The insulated core sits
                behind a polymer skin that does not conduct heat
                efficiently. Steel conducts heat. Untreated steel doors
                perform badly on U-value. A steel door without a thermal
                break is a cold bridge from outside to inside and will
                condense in cold weather. Owners who have had a bad
                experience with steel entrance doors have almost always
                had a badly specified one, with no thermal break.
              </>
            ),
            body2: (
              <>
                A thermally broken steel door separates the outer and
                inner skins with an insulating polymer section inside the
                frame. That interrupts the heat path. A correctly
                engineered SteelR door with a mineral-wool insulated core
                comfortably exceeds the Building Regulations Part L
                maximum of 1.8 W/m²K, with thermal-upgrade specifications
                available that achieve 0.8 W/m²K. Performance also stays
                consistent over decades because the core does not
                degrade. Detailed coverage on the{" "}
                <Link
                  href="/thermally-broken-steel-front-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  thermally broken steel front door page
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Fire rating",
            title: "FD30 and FD60 on steel. Rare on composite",
            body: (
              <>
                FD30S fire and smoke rating is standard on every SteelR
                door. FD60 is available on request. Most composite doors
                on the market are not fire rated. Premium composite
                manufacturers offer FD30 variants, but they are a separate
                product line with different construction and typically a
                higher cost. For flat entrance doors in new builds,
                buildings over eleven metres, HMOs and housing
                association properties, fire rating is a regulatory
                requirement, not an option. Steel is the more natural fit
                because it has inherent fire resistance the base material
                is known for. More on{" "}
                <Link
                  href="/fire-rated-fd30-front-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  FD30 and FD60 fire rated front doors
                </Link>
                .
              </>
            ),
          },
          {
            pretitle: "Aesthetic flexibility",
            title: "Moulded panels vs fabricated panels",
            body: (
              <>
                Composite doors are produced from a limited number of
                moulds. The panel profile, glazing pattern, knocker
                position and letterplate position are fixed by the tool.
                Colour is selected, hardware is fitted, but the underlying
                geometry is industrial. That is efficient, and at scale it
                is why composite is the dominant category by volume.
              </>
            ),
            body2: (
              <>
                A bespoke steel door is fabricated. Every panel moulding
                is cut and welded individually. Proportions, spacing,
                knocker placement, letterplate style, house numerals and
                sidelight configuration are specified per door. For period
                properties, conservation area work, mansion blocks and
                architect-designed new builds where the door needs to sit
                inside a specific aesthetic rather than impose one,
                fabricated geometry is the point. The{" "}
                <Link href="/collection" className="link-gold-underline" style={{ color: "#1a1a18" }}>
                  collection
                </Link>{" "}
                shows representative examples across contemporary,
                traditional and double door configurations.
              </>
            ),
          },
          {
            pretitle: "Cost over time",
            title: "Lower upfront, higher lifetime",
            body: (
              <>
                Composite is lower initial cost. Steel is higher initial
                cost. The difference at the point of sale is significant,
                and owners who are anchored on the upfront number will
                choose composite every time, which is rational for a lot
                of properties. The calculation changes at ten to fifteen
                years, when a composite door typically needs replacement
                and a steel door does not. Over a twenty-five year
                horizon, the total cost of ownership converges and then
                favours steel.
              </>
            ),
            body2: (
              <>
                What actually drives cost on a steel front door is covered
                in plain terms on the{" "}
                <Link
                  href="/steel-front-door-cost-uk"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  steel front door pricing page
                </Link>
                , without specific numbers.
              </>
            ),
          },
          {
            pretitle: "Environmental impact",
            title: "End-of-life and recyclability",
            body: (
              <>
                Steel is one of the most recycled materials on earth. Over
                eighty-five percent of structural steel in the UK is
                recycled at end of life, and a steel door can be fully
                recycled without loss of material quality. UK steel
                production has also become significantly cleaner as
                electric arc furnace capacity has expanded. The longer the
                service life of the door, the lower the embedded carbon
                cost per year of use.
              </>
            ),
            body2: (
              <>
                Composite doors present a more difficult picture. The
                multi-material construction, GRP skin, foam core, timber
                or steel sub-frame and adhesives, makes recycling
                economically unviable. Most composite doors end up in
                landfill at end of life because separating the constituent
                materials is not practical. Foam cores are typically
                polyurethane-based and derived from petrochemicals. A
                product that does not need replacing is inherently more
                sustainable than one that must be manufactured,
                transported and installed twice within the same building
                lifetime.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/bespoke-steel-front-doors-uk",
              label: "Bespoke steel front doors UK",
              description: "Hub page covering the SteelR model from design through installation.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "SR3 residential steel doors",
              description: "What SR3 means, how it is tested, and why it matters.",
            },
            {
              href: "/thermally-broken-steel-front-door",
              label: "Thermally broken steel front doors",
              description: "The thermal break, why budget steel doors perform badly, and how engineering fixes it.",
            },
            {
              href: "/steel-front-door-cost-uk",
              label: "How steel front door pricing works",
              description: "The factors that actually move the number, no guesswork and no hidden extras.",
            },
            {
              href: "/architects",
              label: "For architects and specifiers",
              description: "Performance specification context for the steel vs composite decision, with NBS clauses and BIM data to support either route.",
            },
            {
              href: "/developers",
              label: "For residential developers",
              description: "How the steel vs composite decision plays out across new-build phasing, NHBC sign-off and Approved Document Q compliance.",
            },
            {
              href: "/housing-associations",
              label: "For housing associations",
              description: "Steel as the Building Safety Act 2022 specification floor for higher-risk buildings, beyond the composite-door baseline.",
            },
            {
              href: "/property-managers",
              label: "For property managers and managing agents",
              description: "Steel doorset specification for FRA remediation and managed-portfolio replacement programmes where composite is below brief.",
            },
          ],
        }}
        faqs={faqs}
        whyConsider={{
          items: [
            "You have lived with a composite door for 8 to 15 years and want the structural next step up",
            "Your property sits in the upper bracket of the UK market where door lifetime cost favours steel over composite",
            "Your architect has previously specified composite and wants a higher-tier structural option",
            "You value longer service life and lower lifetime cost over a lower upfront price",
            "Your budget sits at the mid-market composite price point, in which case a premium composite is the more honest fit",
          ],
        }}
        ctaHeading="Ready to specify"
        enquirySource="hub-vs-composite"
        enquiryContextLabel="Steel vs Composite Doors"
      />
    </>
  );
}
