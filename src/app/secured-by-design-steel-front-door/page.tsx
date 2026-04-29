import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "Secured by Design Steel Front Doors | Police-Preferred Specification | SteelR",
  description:
    "Every SteelR steel front door is Secured by Design approved (UK police-preferred). What SBD covers, how approval works, and what it means for insurance.",
  alternates: { canonical: "https://steelr.co.uk/secured-by-design-steel-front-door" },
  openGraph: {
    title: "Secured by Design Steel Front Doors | SteelR",
    description:
      "What Secured by Design covers, how the UK police-preferred specification is approved, and what it means for insurance and new-build requirements.",
    url: "https://steelr.co.uk/secured-by-design-steel-front-door",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is Secured by Design?",
    answer:
      "Secured by Design (SBD) is the official UK police security initiative, owned by Police Crime Prevention Initiatives Limited and endorsed by police forces across the UK. It sets a nationally recognised benchmark for crime prevention in buildings and the products installed in them. Products carrying the SBD mark have been independently tested and approved as meeting the specification preferred by UK police forces for reducing burglary, forced entry and anti-social behaviour.",
  },
  {
    question: "What does SBD approval actually cover on a front door?",
    answer:
      "SBD approval is granted against the complete door assembly, not against individual components. That means the frame, leaf, locking mechanism, hinges, hardware and glazing are all assessed as a single system. Individual component certifications are not sufficient to carry the SBD mark; the whole assembly must pass. This is an important distinction because it prevents the common industry practice of advertising a door as secure because it uses a high-rated lock, while the frame or hinges are the actual weak point.",
  },
  {
    question: "Does Secured by Design approval affect home insurance premiums?",
    answer:
      "Most UK home insurers recognise Secured by Design as a material reduction in forced-entry risk. Combined with BS EN 1627:2011 RC4 single leaf, unglazed certification, SBD is usually sufficient for insurers to accept the property as meeting or exceeding their minimum door specification, and in many cases to offer a premium adjustment or reduced excess on theft claims. Confirm the specific policy treatment with your insurer directly, referencing the SBD certificate supplied with the door.",
  },
  {
    question: "Is SBD the same as PAS 24?",
    answer:
      "No. PAS 24:2022 is a security performance standard that tests a door against a one-to-three-minute casual forced-entry attack. Secured by Design is a broader specification that requires PAS 24 as a prerequisite and then adds additional requirements covering construction, locking mechanisms, hinge specification, glazing laminate thickness, and overall system integrity. A door can be PAS 24 certified without being SBD approved. Every SteelR door is both.",
  },
  {
    question: "Do I need a Secured by Design door for a new build?",
    answer:
      "PAS 24 compliance is mandatory under Approved Document Q for new-build dwellings. SBD approval is often required by planning authorities for larger residential developments, by housing associations on their new-build specifications, and increasingly by insurers on higher-value new builds. SBD is the safer default. For any new-build project where planning authority approval is required, SBD-approved doors are a sensible specification choice and rarely questioned.",
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
      name: "Secured by Design Steel Front Doors",
      item: "https://steelr.co.uk/secured-by-design-steel-front-door",
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

export default function SbdPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="Secured by Design Steel Front Doors"
        h1="Secured by Design Steel Front Door — Police-Preferred Specification Explained"
        intro={{
          pretitle: "The UK police-preferred specification",
          title:
            "What Secured by Design actually covers on a front door, and why every SteelR door carries it",
          body: (
            <>
              Secured by Design is the official UK police security
              initiative. It is not a marketing scheme, not a trade
              association certificate, and not an industry self-assessment.
              It is the specification preferred by UK police forces for
              products that reduce the likelihood of burglary, forced entry
              and related crime. Every SteelR door carries Secured by
              Design approval as standard.
            </>
          ),
          body2: (
            <>
              This page explains what the approval actually covers, how
              the testing process works, how SBD sits alongside PAS 24
              and BS EN 1627 RC4, and what it means practically for home
              insurance and new-build planning requirements.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Ownership",
            title: "Not a trade body. The UK police crime prevention initiative",
            body: (
              <>
                Secured by Design is owned and operated by Police Crime
                Prevention Initiatives Limited, a police-owned organisation
                established in 1989 to reduce crime through product
                specification, building design and physical security. The
                scheme is endorsed by all UK police forces and sits under
                the National Police Chiefs&apos; Council. That ownership
                structure is what makes SBD different from an industry
                self-assessment. It is a police-operated certification
                scheme, not a vendor-written trust mark.
              </>
            ),
            body2: (
              <>
                The practical consequence of police ownership is that the
                specification is designed around reducing real-world
                burglary rates, not around product marketing. The testing
                methodology references actual attack patterns identified
                by police crime data, not generic tool lists.
              </>
            ),
          },
          {
            pretitle: "Scope",
            title: "The whole door system, not individual components",
            image: {
              src: "/images/detail/steelr-grey-panelled-chrome-multilock.jpg",
              alt: "Multi-point locking mechanism on a Secured by Design approved steel front door",
            },
            body: (
              <>
                A common pattern in the door industry is to advertise a
                door as secure on the basis of one certified component,
                typically the lock. A high-rated lock on a weak frame is
                a weak door. A high-rated frame with a weak hinge
                specification is also a weak door. Secured by Design
                addresses this by assessing the complete door assembly.
              </>
            ),
            body2: (
              <>
                SBD approval on a front door covers the frame, the leaf,
                the locking mechanism, the hinges, all hardware, and the
                glazing. If any single element does not meet specification,
                the door cannot carry SBD approval even if every other
                element is certified at a higher level. This forces whole-
                system thinking at the manufacturing stage, which is the
                only way to build a door that actually resists sustained
                forced entry rather than one that simply has a good lock.
              </>
            ),
            list: [
              "Frame construction and fixing specification",
              "Door leaf structure, skin and core",
              "Multi-point locking mechanism with police-approved cylinder rating",
              "Hinge specification, number and bolt-through security",
              "Glazing laminate thickness where glazing is fitted",
              "Hardware including handles, knockers and letterplate",
            ],
          },
          {
            pretitle: "SBD alongside PAS 24 and BS EN 1627 RC4",
            title: "How the three certifications interact",
            body: (
              <>
                PAS 24 is a single performance test against a one-to-three-
                minute casual attack. BS EN 1627:2011 RC4 is a higher-tier
                performance test against a sustained, multi-stage attack
                using heavy-duty hand tools and battery-operated power
                tools. Secured by Design is a specification that requires
                PAS 24 as a minimum and adds further system-level
                requirements. SBD is not a replacement for PAS 24 or
                BS EN 1627 RC4; it is a layer on top of them.
              </>
            ),
            body2: (
              <>
                Every SteelR door is PAS 24 certified, tested to
                BS EN 1627:2011 RC4 single leaf, unglazed, and Secured by
                Design approved as standard. In other words, every SteelR
                door satisfies the UK minimum regulatory standard, the
                European framework for sustained forced-entry resistance,
                and the UK police preferred specification. Detailed
                comparison on the{" "}
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
            pretitle: "Insurance",
            title: "What insurers usually do with an SBD certificate",
            body: (
              <>
                Home insurers generally treat independently certified
                security standards as material reductions in forced-entry
                risk. Secured by Design certification, combined with
                BS EN 1627:2011 RC4, is usually sufficient for a UK home
                insurer to accept the property as meeting or exceeding
                their specified minimum door standard. In many cases
                insurers will offer a premium adjustment, reduced excess
                on theft claims, or a waiver of the requirement for
                additional security devices such as internal bolts.
              </>
            ),
            body2: (
              <>
                The practical step is to provide your insurer with the
                SBD certificate and the BS EN 1627 RC4 certificate at
                policy renewal or at the point the door is installed.
                Both are supplied as part of the handover pack on every
                SteelR installation.
              </>
            ),
          },
          {
            pretitle: "New build and planning",
            title: "When SBD is effectively required rather than optional",
            body: (
              <>
                For planning applications on larger residential
                developments, SBD approval is frequently required by the
                local planning authority as a condition of approval. For
                housing association new-build specifications, SBD is
                typically the mandated baseline. For developers of higher-
                value new builds, SBD is often required by the insurer
                providing the development&apos;s structural warranty.
              </>
            ),
            body2: (
              <>
                For a private owner replacing a front door on an existing
                home, SBD is not legally required, but it is the sensible
                default. The incremental cost over a non-SBD door is
                minimal, the insurance treatment is usually favourable,
                and the certificate is a genuine pointer to build quality.
                More on{" "}
                <Link
                  href="/fire-rated-fd30-front-door"
                  className="link-gold-underline"
                  style={{ color: "#1a1a18" }}
                >
                  fire rated FD30 front doors
                </Link>{" "}
                for new-build and flat entrance applications where
                further specifications apply.
              </>
            ),
          },
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/sr3-residential-steel-door",
              label: "SR3 residential steel doors",
              description: "BS EN 1627 Class 3, the twenty-minute attack test, and how SR3 works alongside SBD.",
            },
            {
              href: "/pas-24-steel-entrance-door",
              label: "PAS 24 steel entrance doors",
              description: "The UK minimum for new-build security, and why SBD builds on top of it.",
            },
            {
              href: "/bespoke-steel-front-doors-uk",
              label: "Bespoke steel front doors UK",
              description: "The full SteelR service model from survey through installation.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Specify a Secured by Design approved steel door"
        enquirySource="hub-sbd"
        enquiryContextLabel="Secured by Design Steel Doors"
      />
    </>
  );
}
