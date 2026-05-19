import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Heritage Steel Front Doors UK | Listed Buildings | SteelR",
  description:
    "Heritage steel front doors for Grade II listed buildings, conservation areas and period properties. Listed Building Consent guidance from a UK manufacturer.",
  alternates: { canonical: "https://steelr.co.uk/heritage-steel-front-doors-uk" },
  openGraph: {
    title: "Heritage Steel Front Doors UK | SteelR",
    description:
      "Heritage steel front doors for Grade II listed buildings, conservation areas and period properties. Listed Building Consent guidance from a UK manufacturer.",
    url: "https://steelr.co.uk/heritage-steel-front-doors-uk",
    type: "website",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    question: "Is a steel door allowed on a Grade II listed building?",
    answer:
      "Yes, where the conservation officer is satisfied that the design preserves the building's special architectural and historic interest. Historic England states directly that listing does not prevent all changes or freeze a building in time. The legal test is set by section 7 of the Planning (Listed Buildings and Conservation Areas) Act 1990, which requires Listed Building Consent for works that affect a listed building's character. The conservation officer assesses the proposed door's panel proportions, glazing pattern, ironmongery, finish and colour against the period of the original. A bespoke steel door faithfully detailed to match the original profile, finished in a heritage RAL colour with period-correct hardware, can pass that test. The framing seen in Google's AI Overview that steel is generally prohibited is a misread; the test is consent-based, not a material ban.",
  },
  {
    question:
      "What is the difference between Listed Building Consent and Conservation Area planning permission?",
    answer:
      "Listed Building Consent (LBC) is required for any work that affects the character of a listed building, regardless of grade. It applies to Grade I, Grade II* and Grade II properties. The application is made to the Local Planning Authority, which is advised by the council's conservation officer. Historic England is statutorily consulted on Grade I and Grade II* applications only, not standard Grade II. Conservation Area planning permission is a separate route that applies to non-listed buildings located inside a designated conservation area, where the change affects the streetscape. Some conservation areas operate under Article 4 directions, which withdraw permitted development rights for specific elevation works, so a door replacement may require permission even without LBC. Both routes go through the same Local Planning Authority. If your property is listed and in a conservation area, LBC alone is sufficient.",
  },
  {
    question:
      "How long does Listed Building Consent take and what does it cost?",
    answer:
      "There is no application fee for Listed Building Consent under Planning Portal guidance. The statutory determination period is 8 weeks from validation of the application. Within that window, a 21-day public consultation period allows neighbours, civic societies and statutory consultees to comment. Most decisions are issued within the 8-week period; complex applications can be extended by agreement with the Local Planning Authority. If consent is refused, the applicant has 6 months from the decision date to appeal to the Planning Inspectorate. Consent, once granted, typically allows 3 years to commence works before it lapses. SteelR supplies the measured drawings, design specification and certification pack required to support the LBC application as part of the door commission, so the conservation officer receives a complete dossier rather than a partial submission.",
  },
  {
    question:
      "Can a steel door visually match my original Victorian, Georgian or Edwardian timber door?",
    answer:
      "Yes, if the door is specified to the period rather than ordered from a catalogue. Steel is fabricated, not moulded, so panel proportions, mouldings and glazing bars can be cut to match the original profile exactly. The finish is powder-coated in any RAL colour, which can be matched to a heritage palette (RAL 9005 jet black, RAL 6007 bottle green, RAL 3011 brown red for Georgian; RAL 3005 wine red or RAL 8016 mahogany brown for Victorian; RAL 6021 pale green or RAL 9001 cream for Edwardian). Hardware is selected individually: lion-head knockers, ring knockers, polished brass letter plates, period-correct handle profiles. At normal viewing distance from the streetscape, a well-specified heritage steel door is visually indistinguishable from a painted timber original. The structural advantage of steel sits behind the visible face, not in place of it.",
  },
  {
    question:
      "What if my property is in a Crittall-original or Arts and Crafts context?",
    answer:
      "Honest answer: it depends on the building. A property with a continuous Crittall steel-glazing fenestration tradition, common in 1920s and 1930s townhouses and industrial conversions, is typically better served by a Crittall-replica multi-pane glazed steel door than a solid steel panelled door, because the door must read against the visual language of the windows. SteelR can manufacture multi-pane glazed steel doors in that idiom. Arts and Crafts properties from the 1880s to 1910 tolerate a wider range of steel detailing because the movement itself emphasised honest material expression, and a faithfully proportioned steel door in a heritage RAL with hand-forged ironmongery can suit Arts and Crafts joinery convincingly. The decision is made against the specific building, not against the movement in general. Send photographs of the existing door and surrounding fenestration and we will assess whether steel is the right specification.",
  },
  {
    question:
      "Which UK home insurers recognise SR3 certification on heritage properties?",
    answer:
      "Specialist high-value UK insurers recognise LPS 1175 SR3 as a security upgrade above PAS 24. Home & Legacy, Hiscox and Chubb routinely reference SR3 on policies covering high-value properties, and the SR3 specification can support a renewal-stage security upgrade discussion with these insurers. Listing status does not change the security rating recognition: an SR3-certified door carries the same certification on a Grade II property as on a new-build. Many heritage properties have insurer surveys that flag the original timber door as a security weakness, and an SR3 replacement is one of the most direct ways to address that finding without compromising the building's character. SteelR provides the full UKAS-accredited test report pack with every door, which is what the insurer's risk team requires when underwriting the upgraded specification.",
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
      name: "Heritage Steel Front Doors UK",
      item: "https://steelr.co.uk/heritage-steel-front-doors-uk",
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
  name: "Heritage Steel Front Doors UK",
  url: "https://steelr.co.uk/heritage-steel-front-doors-uk",
  about: [
    { "@type": "Thing", name: "Listed Building Consent" },
    { "@type": "Thing", name: "Conservation Area planning permission" },
    {
      "@type": "Thing",
      name: "Planning (Listed Buildings and Conservation Areas) Act 1990",
    },
    { "@type": "Thing", name: "Historic England" },
    { "@type": "Thing", name: "Local Authority Building Control" },
    { "@type": "Thing", name: "Grade II listed building" },
    { "@type": "Thing", name: "Conservation area" },
    { "@type": "Thing", name: "PAS 24:2022" },
    { "@type": "Thing", name: "BS EN 1627:2011 RC4" },
    { "@type": "Thing", name: "LPS 1175 SR3" },
    { "@type": "Thing", name: "LPS 1175 SR4" },
    { "@type": "Thing", name: "Secured by Design" },
  ],
});

export default function HeritageSteelFrontDoorsUkPage() {
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
        heroTitle="Heritage Steel Front Doors"
        h1="Heritage Steel Front Doors for Grade II Listed Buildings, Conservation Areas and Period Properties"
        intro={{
          pretitle: "Written by a UK manufacturer working in heritage contexts",
          title:
            "Steel front doors can be installed on listed and conservation-area properties, where the design respects the building",
          body: (
            <>
              The most common claim made about steel doors on Grade II listed
              buildings is that they are not allowed. Google&apos;s AI Overview
              puts it bluntly: &ldquo;generally prohibited unless it is an
              exact, like-for-like replacement of a historical steel
              original.&rdquo; That framing is a misread of the actual
              regulatory test. Historic England, the Local Authority Building
              Control consumer guidance, and the Planning (Listed Buildings
              and Conservation Areas) Act 1990 all frame this as a consent
              test, not a material ban. Historic England&apos;s published
              position is direct:{" "}
              <em>
                listing does not prevent all changes or freeze a building in
                time
              </em>
              .
            </>
          ),
          body2: (
            <>
              What the conservation officer actually assesses is whether the
              proposed door preserves the special architectural or historic
              interest of the building. A faithfully detailed steel door,
              with period-correct proportions, ironmongery, glazing pattern
              and finish, can satisfy that test. This page sets out the legal
              framework, the design specification that wins approval, the
              period-by-period detailing, and the step-by-step Listed
              Building Consent process, from a manufacturer that has supplied
              doors to Grade II listed terraces in Kensington and
              conservation-area properties in Hampstead.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "The legal framework",
            title:
              "What Grade II listed and conservation status actually require",
            body: (
              <>
                Three distinct regulatory frameworks govern changes to a
                front door on a heritage property in England. Each has its
                own consent path, its own decision-maker, and its own
                grounds for refusal.
              </>
            ),
            body2: (
              <>
                Listed Building Consent is governed by section 7 of the
                Planning (Listed Buildings and Conservation Areas) Act 1990.
                It applies to any listed building, regardless of grade, and
                is required for any work that would affect the character of
                the building as one of special architectural or historic
                interest. Replacing a front door on a Grade I, Grade II*
                or Grade II property falls within scope. The application is
                determined by the Local Planning Authority, advised by the
                council&apos;s conservation officer. Historic England is
                statutorily consulted on Grade I and Grade II* applications
                only. Standard Grade II applications, which make up the
                majority of the listed-building stock in England, are
                determined by the LPA without Historic England referral.
                Conservation Area planning permission applies separately.
                Within a designated conservation area, changes to a front
                elevation that affect the streetscape can require planning
                permission even where the building itself is not listed.
                Some areas operate under Article 4 directions that withdraw
                permitted development rights for specific elevation works.
                Properties in an Area of Outstanding Natural Beauty are
                subject to additional landscape-character considerations
                that influence material and colour choices. The Listed
                Building Consent process itself carries a zero-pound
                application fee per Planning Portal guidance. The statutory
                determination period is 8 weeks, which includes a 21-day
                public consultation window during which neighbours, civic
                societies and statutory consultees can submit comments. If
                consent is refused, the applicant has 6 months to appeal to
                the Planning Inspectorate. Consent, once granted, typically
                allows 3 years to commence works before lapsing. Historic
                England guidance on door replacement and the Local
                Authority Building Control consumer guidance are the two
                published authorities most often cited by conservation
                officers when determining a residential front-door
                application. Both are written for owners, not specialists.
              </>
            ),
          },
          {
            pretitle: "At a glance",
            title: "Heritage steel vs heritage timber, side by side",
            body: (
              <>
                The choice on a heritage frontage is rarely between steel
                and budget composite imitations. Conservation officers
                frequently refuse composite as visibly modern, and the
                heritage-aware buyer is typically deciding between heritage
                steel and heritage timber. The points below cover that
                real-world comparison. SteelR figures reference the
                UKAS-accredited test report pack supplied with every door.
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
                      Spec-by-spec comparison of heritage steel, heritage
                      composite imitation, and heritage timber traditional
                      front doors.
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
                          Heritage steel (SteelR bespoke)
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
                          Heritage timber traditional
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          spec: "Security certification",
                          steel:
                            "PAS 24:2022, BS EN 1627 RC4 as standard, LPS 1175 SR3 / SR4 available on every door",
                          timber:
                            "None as standard; rim deadlocks and chain bolts retrofitted on a case-by-case basis",
                        },
                        {
                          spec: "Thermal performance",
                          steel:
                            "Thermally broken construction; substantially lower heat loss than solid timber",
                          timber:
                            "Solid timber; draughts at the frame typically dominate the heat-loss figure",
                        },
                        {
                          spec: "Fire rating",
                          steel: "FD30S as standard, FD60 available",
                          timber:
                            "FD30 by specialist joinery specification; FD60 atypical",
                        },
                        {
                          spec: "Service life",
                          steel: "25 to 30 years",
                          timber:
                            "15 to 25 years with sustained maintenance",
                        },
                        {
                          spec: "Maintenance cycle",
                          steel:
                            "None beyond periodic hinge adjustment",
                          timber:
                            "Sand, prime, repaint every 3 to 5 years; rot prevention at the base",
                        },
                        {
                          spec: "Visual authenticity",
                          steel:
                            "Panel proportions, mouldings and glazing fabricated to match the original specification",
                          timber:
                            "Authentic in material; vulnerable to warp, swell and joint movement over time",
                        },
                        {
                          spec: "Bespoke flexibility",
                          steel:
                            "Panels, mouldings, glazing, hardware and sidelights specified individually",
                          timber:
                            "Full bespoke joinery available; lead times typically 10 to 16 weeks",
                        },
                        {
                          spec: "Conservation-officer acceptability",
                          steel:
                            "Approvable where design respects original detailing; case-by-case",
                          timber:
                            "Default conservation-officer preference; usually approvable with sympathetic detailing",
                        },
                      ].map((row) => (
                        <tr
                          key={row.spec}
                          style={{
                            borderTop: "1px solid rgba(201,169,110,0.15)",
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
                            {row.spec}
                          </th>
                          <td
                            style={{ padding: "14px 16px", verticalAlign: "top" }}
                          >
                            {row.steel}
                          </td>
                          <td
                            style={{ padding: "14px 16px", verticalAlign: "top" }}
                          >
                            {row.timber}
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
                Conservation officers default to timber for its material
                authenticity and the proven planning record across the
                listed-building stock. Heritage steel makes the case where
                security, fire performance, thermal efficiency or the
                maintenance burden of timber are weighed against that
                authenticity. Many Grade II owners specify timber for
                elevations facing a public streetscape and consider steel
                for less visible secondary entrances, or specify steel
                outright when an unsuccessful timber installation needs
                replacing within a decade.
              </>
            ),
          },
          {
            pretitle: "Conservation-officer-led design",
            title: "Designing a steel door that wins approval",
            body: (
              <>
                Conservation officers approve or refuse against the special
                architectural and historic interest of the building, not
                against the material. A steel door designed without reference
                to the original profile, finished in modern hardware and a
                non-period colour, will be refused regardless of how well it
                performs. A steel door designed against the building, with the
                conservation officer&apos;s published preferences in mind, can
                be approved as a sympathetic intervention. The five elements
                that decide most applications are: panel layout matched to the
                original; mouldings cut to the original section profile;
                glazing pattern and bar widths matching the period; hardware
                specified individually, not selected from a generic catalogue;
                and a finish in a colour appropriate to the period and the
                streetscape.
              </>
            ),
            body2: (
              <>
                <strong>Where steel does not work for heritage.</strong> Two
                cases where the honest answer is that steel is the wrong
                material. The first is a continuous Crittall-original facade,
                where the steel windows are themselves listed or have been
                determined as character-defining features of the streetscape.
                In those cases a Crittall-replica multi-pane glazed steel
                door, not a solid panelled steel door, is the correct
                specification. The second is a building where the original
                front door has been formally identified by the conservation
                officer as a character-defining historic feature in its own
                right, often where the door retains substantial historic
                fabric (original lock, hinges, glazing). In those cases the
                conservation route is timber restoration, not steel
                replacement. Telling owners both of these on the survey,
                before the application is drafted, is part of the SteelR
                specification process.
              </>
            ),
          },
          {
            pretitle: "Period detailing",
            title:
              "Designing for Georgian, Victorian, Edwardian and Inter-war properties",
            body: (
              <>
                The single most common reason a steel front door is refused on
                a heritage application is a design specified without reference
                to the building&apos;s actual period. Each period has a
                vocabulary of panel proportions, glazing patterns, hardware
                profiles and colour conventions that conservation officers
                expect to see. The notes below are not a style guide; they
                are the design parameters most commonly accepted by
                conservation officers across the four main residential periods
                on the UK heritage stock.
              </>
            ),
            body2: (
              <>
                <strong>Georgian (1714 to 1837).</strong> Six-panel layouts
                with deep mouldings, rectangular fanlights above with radial
                or spider-web glazing bars, restrained surrounds. Proportions
                taller than wide. Period-tied RAL: RAL 9005 jet black, RAL
                6007 bottle green, RAL 3011 brown red, RAL 5011 steel blue.
                Hardware restrained: brass or polished steel knocker, brass
                letter plate centred, brass knob handle.
                <br />
                <br />
                <strong>Victorian (1837 to 1901).</strong> Four-panel doors
                with the upper two panels often glazed, frequently with
                leaded or stained-glass panels using floral, geometric or
                memorial motifs. Deeper and more ornate mouldings than
                Georgian. Period-tied RAL: RAL 6007 bottle green, RAL 3005
                wine red, RAL 8016 mahogany brown, RAL 5011 steel blue, RAL
                9005 jet black. Decorative hardware: lion-head knockers,
                ring knockers, ornate brass letter plates, lever handles
                with detailed escutcheons.
                <br />
                <br />
                <strong>Edwardian (1901 to 1910).</strong> Simpler panel
                layouts than Victorian, often a single large upper glazed
                panel and one or two lower solid panels. Stained-glass detail
                in the upper light, often with Art Nouveau or Arts and Crafts
                motifs. Wider openings than Georgian or Victorian.
                Period-tied RAL: RAL 6021 pale green, RAL 9001 cream, RAL
                6003 olive green, RAL 5024 pastel blue. Lighter hardware
                than Victorian: Art Nouveau handle profiles, simpler
                knockers, polished or satin brass.
                <br />
                <br />
                <strong>Inter-war (1918 to 1939).</strong> Flush or three-panel
                layouts with geometric glazing, Bauhaus and Modernist
                influences in selected urban stock. Suburban semi-detached
                properties of this period often have Crittall-style steel
                windows that the door should read against. Period-tied RAL:
                RAL 9005 jet black, RAL 7016 anthracite grey, RAL 6003 olive
                green. Geometric hardware: square or rectangular handle
                profiles, simple letter plates, polished chrome or satin
                nickel.
              </>
            ),
          },
          {
            pretitle: "The application process",
            title: "Listed Building Consent, step by step",
            body: (
              <>
                The Listed Building Consent process is straightforward once
                the design is settled. The harder part is reaching agreement
                with the conservation officer on the proposed specification
                before the formal application is submitted. The steps below
                describe the route most SteelR heritage installations
                follow, from initial survey through to signed-off works.
              </>
            ),
            body2: (
              <>
                <strong>1. Measured site survey.</strong> In the first one
                to two weeks. SteelR records the opening dimensions, the
                original door&apos;s panel layout, moulding profiles,
                glazing pattern, hardware specification and finish colour.
                Photographs are taken from the streetscape and at the
                threshold.
                <br />
                <br />
                <strong>2. Pre-application enquiry</strong> with the
                conservation officer. Informal, not the formal LBC
                application. The proposed specification (drawings, RAL
                colour, hardware schedule) is shared with the conservation
                officer for early feedback. Most refusals on heritage
                applications come from owners who skip this step and submit
                a formal application without checking the design against the
                officer&apos;s preferences first.
                <br />
                <br />
                <strong>3. Formal LBC application</strong> submitted via the
                Planning Portal. The application includes measured drawings,
                photographs of the existing door, the proposed
                specification, a heritage statement explaining how the
                design preserves the building&apos;s character, and the
                certification pack (PAS 24, BS EN 1627, LPS 1175 SR3 if
                specified). Application fee: zero pounds.
                <br />
                <br />
                <strong>4. 21-day public consultation window.</strong>{" "}
                Within the 8-week statutory determination period, the
                application is published for public comment. Neighbours,
                civic societies (such as the Victorian Society or the
                Twentieth Century Society depending on the period) and
                statutory consultees can submit observations. The
                conservation officer considers these alongside their own
                assessment.
                <br />
                <br />
                <strong>5. Decision.</strong> The Local Planning Authority
                issues a decision within the 8-week statutory period, with
                extensions agreed in writing if needed. If granted, consent
                typically allows 3 years to commence works before lapsing.
                If refused, the applicant has 6 months from the decision
                date to appeal to the Planning Inspectorate.
                <br />
                <br />
                <strong>6. Manufacture and installation.</strong> Once
                consent is granted, SteelR proceeds to bespoke manufacture
                against the approved specification, with a lead time of 8
                to 12 weeks. Installation is handled by the in-house team,
                typically completing in a single day for a single-leaf door
                or two days for double-leaf or sidelight configurations.
              </>
            ),
          },
          {
            pretitle: "Quick reference",
            title: "Heritage RAL palette by period",
            body: (
              <>
                A single reference card for the heritage RAL palette.
                Conservation officers expect to see colours from the
                period-appropriate range; specifying a non-period colour,
                even a tasteful modern shade, is one of the most common
                single-line refusal points on a heritage application. Use the
                codes below as a starting position; the final colour is
                decided against the surrounding brick, render, stone and
                existing fenestration on the building.
              </>
            ),
            body2: (
              <>
                <strong>Georgian (1714 to 1837).</strong> RAL 9005 jet
                black. RAL 6007 bottle green. RAL 3011 brown red. RAL 5011
                steel blue.
                <br />
                <br />
                <strong>Victorian (1837 to 1901).</strong> RAL 6007 bottle
                green. RAL 3005 wine red. RAL 8016 mahogany brown. RAL 5011
                steel blue. RAL 9005 jet black.
                <br />
                <br />
                <strong>Edwardian (1901 to 1910).</strong> RAL 6021 pale
                green. RAL 9001 cream. RAL 6003 olive green. RAL 5024
                pastel blue.
                <br />
                <br />
                <strong>Inter-war (1918 to 1939).</strong> RAL 9005 jet
                black. RAL 7016 anthracite grey. RAL 6003 olive green.
                <br />
                <br />
                Dual-colour finishing, where the exterior face is in the
                heritage RAL and the interior is in a complementary modern
                colour, is supported and frequently accepted by conservation
                officers, because the streetscape elevation is the assessed
                face.
              </>
            ),
          },
          {
            pretitle: "Ironmongery",
            title: "Hardware that reads as authentic to the period",
            body: (
              <>
                Conservation officers assess hardware against the visible
                profile from the streetscape at normal viewing distance. The
                decision is not whether the lock is mechanically authentic;
                it is whether the knocker, letter plate and visible handle
                match the period. The notes below cover the hardware
                specification most commonly approved across heritage
                applications.
              </>
            ),
            body2: (
              <>
                <strong>Knockers.</strong> Lion-head knockers in polished
                brass are the default for Georgian and Victorian terraces.
                Ring knockers on a circular backplate suit Victorian,
                Edwardian and Arts and Crafts properties. Doctor&apos;s
                knockers (the simple D-shaped pull) are appropriate where
                the original specification used one, common on London
                townhouses of all periods.
                <br />
                <br />
                <strong>Letter plates.</strong> Centred letter plates in
                polished brass, satin brass or antique brass match Georgian,
                Victorian and Edwardian properties. Letter plates positioned
                low on the door are an Inter-war convention. Vertical letter
                plates are not period; specifying one on a heritage
                application invites refusal.
                <br />
                <br />
                <strong>Handles and pulls.</strong> Lever handles with
                decorative escutcheons suit Victorian. Knob handles, often
                centred on the door rather than on the leading edge, suit
                Georgian. Art Nouveau handle profiles suit Edwardian.
                Geometric pull handles in polished chrome or satin nickel
                suit Inter-war.
                <br />
                <br />
                <strong>Finishes.</strong> Polished brass, satin brass,
                antique brass and polished nickel are the four most-specified
                period finishes. Polished chrome and matt black are
                appropriate for Inter-war and certain Modernist Edwardian
                properties only.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/sr3-residential-steel-door",
              label: "LPS 1175 SR3 Enhanced upgrade",
              description:
                "The LPCB police-preferred residential security tier. The most-specified upgrade on heritage properties carrying high-value insurance.",
            },
            {
              href: "/secured-by-design-steel-front-door",
              label: "Secured by Design steel front doors",
              description:
                "The UK police-preferred specification. Frequently cited in conservation-area planning conditions and high-value insurer surveys.",
            },
            {
              href: "/blog/steel-doors-conservation-areas-planning-guide",
              label: "Steel doors for conservation areas",
              description:
                "Longer companion blog covering the conservation-area planning route in depth, separate from Listed Building Consent.",
            },
            {
              href: "/luxury-steel-entrance-door-london",
              label: "Luxury steel entrance doors London",
              description:
                "London-specific sister hub. Borough-by-borough conservation context, including Kensington, Chelsea, Hampstead and Notting Hill.",
            },
          ],
        }}
        faqs={faqs}
        whyConsider={{
          items: [
            "If your property is Grade II listed or sits in a designated conservation area, and you have time for the Listed Building Consent route.",
            "If your conservation officer has indicated openness to a material upgrade with sympathetic design.",
            "If you want heritage proportions and a 25-year service life without the three-to-five year maintenance cycle of a timber entrance door.",
          ],
        }}
        ctaHeading="Specify a heritage door"
        ctaHref="/contact"
        enquirySource="hub-heritage"
        enquiryContextLabel="Heritage Steel Front Doors"
      />
    </>
  );
}
