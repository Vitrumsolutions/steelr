import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Luxury Steel Front Doors UK | Bespoke SR3 Specialists | SteelR",
  description:
    "Luxury steel front doors UK. Bespoke, UK-manufactured, BS EN 1627 RC4 as standard with LPS 1175 SR3 available on every door. SteelR specification reference.",
  alternates: { canonical: "https://steelr.co.uk/luxury-steel-front-doors-uk" },
  openGraph: {
    title: "Luxury Steel Front Doors UK | SteelR",
    description:
      "Luxury steel front doors UK. Bespoke, fully UK-manufactured, BS EN 1627 RC4 as standard with LPS 1175 SR3 available on every door.",
    url: "https://steelr.co.uk/luxury-steel-front-doors-uk",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question:
      "What is the difference between a luxury steel front door and a premium one?",
    answer:
      "Specification, not just finish. A premium steel front door typically meets PAS 24:2022 (the regulatory minimum for new-build dwellings under Approved Document Q), with multi-point locking and a thermally broken construction. A luxury steel front door at the architectural luxury tier carries BS EN 1627:2011 RC4 single leaf, unglazed certification as standard (materially above the PAS 24 baseline), with LPS 1175 SR3 (the LPCB Enhanced upgrade) available on every door. SteelR specifies at the architectural luxury tier as standard.",
  },
  {
    question: "Who makes the best luxury steel front doors in the UK?",
    answer:
      "A small number of UK steel-door specialists work at the architectural luxury specification tier. They split broadly into four positions: architectural pivot-door specialists (London showroom-led, ultra-modern slim-profile and large-format glazing); engineering-led security manufacturers (forced-entry resistance and thermal performance led, not luxury-branding led); London-local steel-door specialists with named showroom addresses and Maps-led discovery; and UK-wide install-included brands carrying survey, manufacture and install in a single legal entity. SteelR sits in the certification-led residential position: BS EN 1627 RC4 as standard, LPS 1175 SR3 and SR4 available on every door, FD30S fire-rated, Secured by Design approved, fully bespoke, UK-manufactured. The right choice depends on architectural style, security threshold, lead time, and where the buyer is in the UK.",
  },
  {
    question: "How much does a luxury steel front door cost in the UK?",
    answer:
      "SteelR does not publish fixed prices because every luxury steel front door is individually quoted after an on-site structural survey. The cost-driving factors, in order of typical impact, are size of the aperture (single leaf vs double vs sidelight or fanlight configurations), security tier specified (RC4 standard vs SR3 vs SR4 upgrade), hardware and finish, glazing requirements, heritage or planning context (Listed Building Consent applications add project management time), installation access, and lead time. For the full factor breakdown, see https://steelr.co.uk/steel-front-door-cost-uk. Written quotation supplied within five working days of the survey.",
  },
  {
    question:
      "Are luxury steel front doors worth it compared to standard front doors?",
    answer:
      "On total cost of ownership, yes, where the brief justifies the depth of fabrication and certification. A standard front door at the PAS 24 baseline is engineered to the regulatory minimum mandated by Approved Document Q for new-build dwellings. A luxury steel front door at the BS EN 1627 RC4 standard tier is engineered to a forced-entry resistance framework two tiers above PAS 24, fabricated rather than moulded so panel proportions and detailing match the property, certificated by the manufacturer that builds and installs it, and recognised by mainstream UK home insurers for premium reduction at the higher property-value brackets. The upfront difference reflects the depth of fabrication, certification and installation, not the door alone.",
  },
  {
    question:
      "What is the lead time for a bespoke luxury steel front door in the UK?",
    answer:
      "Eight to twelve weeks from first survey to installed door is the SteelR standard. Six to eight of those weeks are in-house manufacturing. One to two weeks are the survey and design specification stage. Installation is one day for a single-leaf door and two days for a double-leaf or sidelight configuration. Where Listed Building Consent or Conservation Area planning permission is required, allow an additional four to eight weeks for the statutory application window before manufacturing starts.",
  },
  {
    question:
      "Can a luxury steel front door be installed in a conservation area or on a listed property?",
    answer:
      "Yes, where the door is detailed sympathetically to the original. Listed Building Consent is governed by section 7 of the Planning (Listed Buildings and Conservation Areas) Act 1990 and is required for changes to a listed building of any grade. Conservation Area planning permission applies separately for non-listed buildings in a designated conservation area. SteelR detailing options that typically satisfy a conservation officer include six-panel Georgian or four-panel Victorian layouts, period-correct ironmongery (lion-head knockers, ring knockers, brass letter plates), heritage RAL colours, and no visible certification marks on the streetscape. For the full process, see https://steelr.co.uk/blog/steel-doors-conservation-areas-planning-guide.",
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
      name: "Luxury Steel Front Doors UK",
      item: "https://steelr.co.uk/luxury-steel-front-doors-uk",
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

const webPageSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Luxury Steel Front Doors UK",
  url: "https://steelr.co.uk/luxury-steel-front-doors-uk",
  about: [
    { "@type": "Thing", name: "Luxury steel front door" },
    { "@type": "Thing", name: "Premium steel front door" },
    { "@type": "Thing", name: "Bespoke steel front door" },
    { "@type": "Thing", name: "Made to measure steel front door" },
    { "@type": "Thing", name: "High-end steel front door" },
    { "@type": "Thing", name: "Architect-grade steel front door" },
    { "@type": "Thing", name: "BS EN 1627:2011 RC4" },
    { "@type": "Thing", name: "LPS 1175 SR3" },
    { "@type": "Thing", name: "LPS 1175 SR4" },
    { "@type": "Thing", name: "PAS 24:2022" },
    { "@type": "Thing", name: "Secured by Design" },
    { "@type": "Thing", name: "UK steel door manufacturer" },
  ],
});

export default function LuxurySteelFrontDoorsUkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchema }}
      />

      <InfoPage
        heroTitle="Luxury Steel Front Doors UK"
        h1="Luxury Steel Front Doors UK, Bespoke and UK-Manufactured at the Architectural Luxury Specification Tier"
        intro={{
          pretitle: "Specification-led category reference",
          title:
            "The UK steel front door market splits into four specification tiers, defined by certification not by price",
          body: (
            <>
              The four tiers, in order: entry security (PAS 24:2022 baseline
              only); mid-market premium (PAS 24 with optional LPS 1175 SR2);
              architectural luxury (BS EN 1627:2011 RC4 single leaf, unglazed
              certification as standard, with LPS 1175 SR3 available as an
              upgrade); and ultra-bespoke commissioned work (LPS 1175 SR3 or
              SR4 as specified, individually engineered, certificated to the
              project). SteelR&apos;s standard specification sits at the
              architectural luxury tier: RC4 as standard on every door, SR3
              and SR4 available as upgrades, FD30S fire and smoke rated,
              Secured by Design approved, fully bespoke, UK-manufactured and
              installed.
            </>
          ),
          body2: (
            <>
              Buyers searching &ldquo;luxury&rdquo;, &ldquo;premium&rdquo;,
              &ldquo;bespoke&rdquo; or &ldquo;made to measure&rdquo; steel
              front doors in the UK are usually specifying at the third or
              fourth tier. This page covers what each category term means in
              specification terms, the named UK steel-door specialists who
              work at the third tier alongside SteelR, where SteelR&apos;s
              standard specification sits above the category baseline, and
              where another manufacturer may be the better fit for a
              specific brief.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "What the category labels actually mean",
            title:
              "Luxury, premium, bespoke and made to measure, in specification terms",
            body: (
              <>
                The category labels used by buyers (luxury, premium, bespoke,
                made to measure, high-end, architect-grade) describe a real
                set of specification choices that separate a third-tier
                steel front door from the mid-market premium below it. The
                points below are how SteelR interprets each label against
                named published standards, not against category-typical
                reasoning.
              </>
            ),
            body2: (
              <>
                A door at the architectural luxury tier is fabricated rather
                than moulded: every panel proportion, moulding profile,
                glazing pattern and item of ironmongery is specified on the
                drawing, not selected from a catalogue. It is UK-manufactured
                rather than imported and rebadged, so the manufacturer
                carries the certification and the warranty in the same legal
                entity that survey-fits it. Its security baseline is
                BS EN 1627:2011 RC4 single leaf, unglazed (the European
                framework for sustained forced-entry resistance) with
                LPS 1175 SR3 (the LPCB police-preferred specification, the
                Enhanced upgrade tier) available as an upgrade on every
                door. Its fire rating is FD30S as standard, with FD60
                available where a specifier requires it. Its hardware range
                spans polished brass, satin nickel, dark bronze, matt black
                and gold finishes; its colour range covers the full RAL
                Classic palette with dual-colour interior and exterior
                available. Its lead time is eight to twelve weeks from
                survey to installed door. Installation is by a DBS-checked
                in-house team, not subcontracted to local fitters. Measured
                drawings, NBS specification clauses and a certification pack
                are supplied for any application requiring planning consent
                or Building Control sign-off.
              </>
            ),
          },
          {
            pretitle: "The architectural luxury tier, mapped by position",
            title:
              "How UK steel-door specialists at the architectural luxury tier position themselves",
            body: (
              <>
                The UK steel-door market at the architectural luxury tier is
                served by a small number of specialists. They split broadly
                into four positions, plus a heritage-joinery alternative.
                SteelR sits in the certification-led residential position;
                the rest of the tier is described by category so the buyer
                understands the shape of the shortlist they will compile.
              </>
            ),
            body2: (
              <>
                <strong>SteelR (certification-led residential).</strong>{" "}
                BS EN 1627:2011 RC4 single leaf, unglazed certification as
                standard on every door. LPS 1175 SR3 (Enhanced upgrade) and
                SR4 (Commercial-grade upgrade) available on every door.
                FD30S fire and smoke rated as standard, FD60 available.
                Secured by Design approved. UK Manufactured
                member, ISO 9001 manufactured. Survey,
                manufacture and install handled in-house with nationwide UK
                mainland coverage and no regional surcharge.
                <br />
                <br />
                <strong>Architectural pivot-door specialists.</strong>{" "}
                Showroom-led London makers focused on contemporary
                slim-profile systems, large-format glazing and pivot
                fabrication. Strongest fit where the brief is ultra-modern
                minimalist on a new build or major refurbishment.
                <br />
                <br />
                <strong>Engineering-led security manufacturers.</strong>{" "}
                Bespoke fabrication anchored in forced-entry resistance and
                thermal performance rather than the language of luxury
                branding. Suits briefs where the buyer values measurable
                longevity and custom security specification over showroom
                aesthetic.
                <br />
                <br />
                <strong>London-local steel-door specialists.</strong>{" "}
                West-London manufacturers covering both classical and
                contemporary residential briefs with named showroom
                addresses and Maps-led discovery. Suits buyers shortlisting
                via Google Maps and visiting showrooms in person.
                <br />
                <br />
                <strong>UK-wide install-included brands.</strong>{" "}
                Nationwide supply-and-fit services with a single legal
                entity carrying survey, manufacture and install. Strongest
                fit where the buyer wants a single contact across the whole
                process and the property sits outside Greater London.
                <br />
                <br />
                <strong>Heritage joinery alternative.</strong> Adjacent to
                the steel-door tier, not within it. Construction is
                hand-jointed timber with concealed steel reinforcement
                rather than a steel doorset. Worth knowing about because
                the same buyer shortlist often considers both routes
                before committing to material.
                <br />
                <br />
                All five positions are credible at the upper end of the UK
                residential entrance market. The right choice depends on
                architectural style, security threshold, lead time, project
                scale, and where in the UK the buyer is.
              </>
            ),
          },
          {
            pretitle: "Specification cross-reference",
            title:
              "What each category label implies, against SteelR's standard specification",
            body: (
              <>
                The table below maps the category labels buyers use against
                what those labels imply for specification, what SteelR
                supplies as standard against each, and the question a buyer
                should ask any manufacturer when comparing like-for-like.
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
                      Category labels mapped to specification implications,
                      SteelR&apos;s standard specification against each, and
                      the due-diligence question a buyer should ask any
                      manufacturer.
                    </caption>
                    <thead>
                      <tr style={{ background: "#1a1a18", color: "#f5f0e8" }}>
                        {[
                          "Category label",
                          "What it implies for specification",
                          "SteelR standard",
                          "What to ask any manufacturer",
                        ].map((h) => (
                          <th
                            key={h}
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
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          label: "Luxury",
                          implies:
                            "Security certification above PAS 24 baseline, refined detailing, premium hardware finishes, no visible commercial styling.",
                          steelr:
                            "BS EN 1627 RC4 single leaf, unglazed standard; SR3 / SR4 available; full RAL Classic palette; polished brass, satin nickel, dark bronze, matt black, gold finishes.",
                          ask:
                            "Is RC4 or SR3 included as standard, or is it an extra-cost upgrade?",
                        },
                        {
                          label: "Premium",
                          implies:
                            "A specification meaningfully above the PAS 24 floor; multi-point locking; thermally broken construction; manufacturer warranty.",
                          steelr:
                            "PAS 24:2022 plus RC4 standard plus thermally broken construction plus 10-year construction warranty (5 years finish, 3 years hardware).",
                          ask:
                            "What certifications does the standard build include before any upgrade?",
                        },
                        {
                          label: "Bespoke",
                          implies:
                            "Fabricated to the opening rather than configured from standard sizes; panel proportions, mouldings and hardware specified individually on the drawing.",
                          steelr:
                            "Every SteelR door is fabricated from the survey-measured opening. No standard sizes. Panel layout, mouldings, glazing pattern, knocker placement, letterplate style, sidelight and fanlight configuration specified on the drawing.",
                          ask:
                            "Is the product made from a fixed catalogue of moulds or fabricated to the drawing?",
                        },
                        {
                          label: "Made to measure",
                          implies:
                            "Manufactured to the exact opening size, not trimmed from a standard leaf or supplied with a sub-frame adjuster.",
                          steelr:
                            "Survey-measured aperture is the manufacturing input. No sub-frame adjusters, no trim packs on standard leaves.",
                          ask:
                            "Is the door cut from a standard leaf, or is the leaf fabricated to the survey?",
                        },
                        {
                          label: "High-end",
                          implies:
                            "Specification, finish and installation all at the upper end of the market, with the same legal entity carrying warranty across the three.",
                          steelr:
                            "SteelR designs, manufactures and installs in-house. One company, one warranty, one point of contact across survey, manufacture, install and aftercare.",
                          ask:
                            "Is the installer a subcontractor, or are they directly employed by the manufacturer?",
                        },
                        {
                          label: "Architect-grade",
                          implies:
                            "NBS specification clauses or RIBA Plan of Work stage 4 detail supplied as part of the quote; certificate pack supplied for Building Control sign-off.",
                          steelr:
                            "NBS Chorus clauses for the RC4 standard plus each upgrade tier (SR3, SR4 D10 Issue 8, LPS 1673) supplied on request. Per-door certificate pack supplied with every install.",
                          ask:
                            "Will you supply NBS clauses and a certificate pack, or is documentation a sales-only item?",
                        },
                      ].map((row) => (
                        <tr
                          key={row.label}
                          style={{
                            borderTop:
                              "1px solid rgba(201,169,110,0.15)",
                          }}
                        >
                          <th
                            scope="row"
                            style={{
                              textAlign: "left",
                              padding: "14px 16px",
                              fontWeight: 500,
                              verticalAlign: "top",
                            }}
                          >
                            {row.label}
                          </th>
                          <td
                            style={{
                              padding: "14px 16px",
                              verticalAlign: "top",
                            }}
                          >
                            {row.implies}
                          </td>
                          <td
                            style={{
                              padding: "14px 16px",
                              verticalAlign: "top",
                            }}
                          >
                            {row.steelr}
                          </td>
                          <td
                            style={{
                              padding: "14px 16px",
                              verticalAlign: "top",
                            }}
                          >
                            {row.ask}
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
                The six labels overlap. A door can be luxury, premium,
                bespoke, made to measure, high-end and architect-grade at
                the same time. SteelR&apos;s standard specification meets
                all six.
              </>
            ),
          },
          {
            pretitle: "Where SteelR sits above the category baseline",
            title:
              "Three places SteelR's standard specification exceeds the typical luxury-tier baseline",
            body: (
              <>
                A luxury steel front door is defined by what is included as
                standard, not by what is offered as an extra-cost upgrade.
                Three places where SteelR&apos;s standard specification sits
                above the architectural luxury tier baseline:
              </>
            ),
            body2: (
              <>
                <strong>BS EN 1627:2011 RC4 as standard, not upgrade.</strong>{" "}
                RC4 is the fourth tier of the European forced-entry
                resistance framework, materially above the PAS 24
                three-minute baseline mandated by Approved Document Q for
                new-build dwellings. RC4 testing covers a sustained attack
                by an experienced attacker with a full range of body tools
                and selected power tools. SteelR includes RC4 single leaf,
                unglazed certification on every door at the standard build
                price. Most category competitors offer RC4 only as a paid
                upgrade or do not certify to RC4 at all.
                <br />
                <br />
                <strong>LPS 1175 SR3 and SR4 available on every door.</strong>{" "}
                SR3 is the LPCB Enhanced upgrade tier (five-minute
                power-tool resistance, police-preferred specification
                recognised by UK home insurers). SR4 is the Commercial-grade
                upgrade (ten-minute power-tool resistance, the certification
                used in data centres and bank vaults). SteelR can specify
                either as an upgrade on the same door body, with no change
                to the bespoke detailing. Most category competitors limit
                SR3 to a separate commercial range that visibly differs
                from the residential aesthetic.
                <br />
                <br />
                <strong>FD30S fire and smoke rated as standard.</strong> The
                S suffix denotes smoke containment tested to BS 476-22, on
                top of the 30-minute fire rating tested to BS EN 1634-1.
                FD30S is mandated for flat-entrance doors in higher-risk
                buildings under the Building Safety Act 2022. SteelR
                includes FD30S certification on every door, with FD60
                available as an upgrade where the application requires it.
                Most category competitors offer FD30 only on a separate
                fire-rated range.
              </>
            ),
          },
          {
            pretitle: "Honest framing",
            title:
              "Where another category of manufacturer may suit a specific brief better",
            body: (
              <>
                SteelR is not always the right answer. Three briefs where
                another category of UK manufacturer may suit a specific
                buyer better:
              </>
            ),
            body2: (
              <>
                <strong>Ultra-modern pivot-led architectural briefs.</strong>{" "}
                If the brief is large-format pivot doors with concealed
                hinges, slim-profile glazing bars and minimalist sightlines
                on a contemporary new-build, an architectural pivot-door
                specialist with a showroom set up around exactly that
                aesthetic is likely the better fit. SteelR&apos;s
                certification-led residential focus is a different design
                language.
                <br />
                <br />
                <strong>
                  Mid-market premium specifications without RC4 or SR3.
                </strong>{" "}
                If the specification is PAS 24 baseline without the RC4 or
                SR3 upgrade, mid-market UK steel-door manufacturers serve
                that specification well at a different point in the spec
                ladder. SteelR&apos;s standard specification is
                over-engineered for that brief and the upfront cost will
                reflect that.
                <br />
                <br />
                <strong>Heritage-craftsmanship led briefs.</strong> If the
                brief requires hand-jointed timber with steel reinforcement
                concealed inside, rather than a steel door designed to
                read as period, a specialist heritage joinery firm is the
                credible alternative. That construction sits in a
                different category of fabrication from a steel doorset.
              </>
            ),
          },
          {
            pretitle: "What to expect",
            title:
              "Specifying a luxury steel front door, step by step",
            body: (
              <>
                The eight-to-twelve-week timeline from first enquiry to
                installed door is structured around six stages. Every stage
                is handled in-house by SteelR; no part is subcontracted.
              </>
            ),
            body2: (
              <>
                <strong>Stage one. Survey and measured drawings (week 1).</strong>{" "}
                A senior member of the SteelR team visits the property,
                surveys the aperture, photographs the elevation, and
                discusses the design brief with the owner or architect.
                Measured drawings are produced and signed off before any
                manufacturing decision is made.
                <br />
                <br />
                <strong>Stage two. Design specification (weeks 2 to 3).</strong>{" "}
                Panel layout, moulding profile, glazing pattern, hardware
                placement, sidelight and fanlight configuration, RAL colour
                and ironmongery finish are specified on the drawing. Where
                planning consent or Listed Building Consent is required,
                SteelR supplies the drawings and spec pack the application
                will need.
                <br />
                <br />
                <strong>Stage three. Written quote and sign-off (week 4).</strong>{" "}
                A written quotation is supplied within five working days of
                the survey. Once accepted, the door enters the manufacturing
                programme.
                <br />
                <br />
                <strong>Stage four. UK manufacture (weeks 5 to 10).</strong>{" "}
                Six to eight weeks of in-house fabrication. RC4 certificate
                pack is prepared in parallel.
                <br />
                <br />
                <strong>
                  Stage five. Installation (one day for a single leaf, two
                  for a double or sidelight configuration).
                </strong>{" "}
                Installation by the SteelR install team, DBS-checked and
                directly employed. The team are SteelR employees, not
                subcontracted local fitters.
                <br />
                <br />
                <strong>Stage six. Handover and aftercare.</strong> The
                certification pack, warranty paperwork (ten years on the
                door construction, five on the decorative finish, three on
                hardware), and aftercare contact route are handed over at
                the end of the install. Hinge adjustment, lock re-keying,
                seal replacement and hardware upgrades are handled by the
                team that originally made the door.
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
              description:
                "The full SteelR specification model: how a luxury door is designed, manufactured and installed end to end.",
            },
            {
              href: "/sr3-residential-steel-door",
              label: "SR3 residential steel doors",
              description:
                "The LPCB Enhanced upgrade tier explained: what SR3 tests, why it matters above PAS 24, when to specify it.",
            },
            {
              href: "/bs-en-1627-rc4-residential-steel-door",
              label: "BS EN 1627 RC4 residential steel door",
              description:
                "The European forced-entry resistance framework, applied to UK residential doors. The SteelR standard tier explained.",
            },
            {
              href: "/luxury-steel-entrance-door-london",
              label: "Luxury steel entrance doors London",
              description:
                "London-specific sister hub. Borough coverage, conservation area context, central London access.",
            },
            {
              href: "/steel-front-door-cost-uk",
              label: "How steel front door pricing works",
              description:
                "The factors that move the number, no displayed prices. Honest factor breakdown.",
            },
          ],
        }}
        faqs={faqs}
        whyConsider={{
          items: [
            "You are specifying at the BS EN 1627 RC4 standard tier or higher and want genuine RC4-as-standard certification, not as an extra-cost upgrade",
            "Your brief calls for true bespoke fabrication, not configurator-based selection from a fixed catalogue of moulds",
            "You value UK manufacture plus named LPS 1175 SR3 / SR4 certification plus in-house installation, over imported and rebadged systems",
            "Your project requires NBS specification clauses and a per-door certificate pack, not sales literature",
          ],
        }}
        ctaHeading="Specify your luxury steel front door"
        ctaHref="/contact"
        enquirySource="hub-luxury"
        enquiryContextLabel="Luxury Steel Front Doors"
      />
    </>
  );
}
