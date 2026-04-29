import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title:
    "UK-Made Bespoke Steel Doors vs Imported Systems | SteelR",
  description:
    "Most premium steel front doors sold in the UK are imported. SteelR is UK manufactured. Practical differences in lead time, aftercare, warranty and install.",
  alternates: { canonical: "https://steelr.co.uk/uk-steel-doors-vs-imported" },
  openGraph: {
    title: "UK-Made Steel Doors vs Imported Systems | SteelR",
    description:
      "Practical differences between UK-made bespoke steel doors and imported systems on lead time, aftercare, warranty and installation quality.",
    url: "https://steelr.co.uk/uk-steel-doors-vs-imported",
    type: "website",
  },
};

const faqs = [
  {
    question: "Which countries do imported steel doors usually come from?",
    answer:
      "The premium imported steel door brands sold into the UK residential market are typically manufactured in Poland, Germany, Italy or the Czech Republic. Budget imports more often come from China. The imported brands are rebadged and resold by UK distributors who handle the sale and installation but not the manufacture.",
  },
  {
    question: "Is an imported steel door less secure than a UK-made one?",
    answer:
      "Not inherently. Several imported systems are independently certified to SR3 or SR4 under the European BS EN 1627 or LPS 1175 standards. Certification is certification regardless of country of manufacture. The practical differences are around service rather than structural. Lead time, in-country aftercare, warranty enforcement, and whether the installation team has manufactured the door they are fitting are the points where UK-made typically wins.",
  },
  {
    question: "How does lead time compare on imported versus UK-made?",
    answer:
      "UK-made bespoke from SteelR is typically eight to twelve weeks from first enquiry to installation, with six to eight of those weeks in manufacture. Imported systems usually carry twelve to twenty week lead times because the door has to be manufactured abroad, shipped, and cleared through UK customs before installation can be scheduled. Delays on customs or shipping lanes are out of your installer's hands when the factory is two thousand kilometres away.",
  },
  {
    question: "What happens if an imported steel door needs a warranty repair?",
    answer:
      "Warranty enforcement against an imported door depends on the continued relationship between the UK distributor and the foreign factory. If the distributor goes out of business, or the factory discontinues the model, or the particular hardware component is no longer manufactured, resolving a warranty claim becomes more complex. UK-made means warranty enforcement is against a UK company, with UK legal recourse, and replacement components are fabricated in the same facility that made the original door.",
  },
  {
    question: "Does UK-made mean every part of the door is UK-sourced?",
    answer:
      "No. We are direct about this. The steel itself is UK-sourced or European. Some hardware components, specialist glazing and certain finishes are sourced from European suppliers because the quality specification is higher than UK alternatives. The fabrication, assembly, finishing, certification and quality control happen in our UK facility. The door is a UK-manufactured assembly built from the best available components, not a UK-assembly-from-imported-parts arrangement.",
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
      name: "UK-Made Steel Doors vs Imported Systems",
      item: "https://steelr.co.uk/uk-steel-doors-vs-imported",
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

export default function UkVsImportedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <InfoPage
        heroTitle="UK-Made vs Imported Steel Doors"
        h1="UK-Made Bespoke Steel Doors vs Imported Systems"
        intro={{
          pretitle: "The honest comparison",
          title:
            "Most premium steel front doors sold in the UK are imported. SteelR is not. Here is what that actually changes",
          body: (
            <>
              The UK premium steel door market is dominated by imported
              systems. Most of the brands you will find quoted by
              high-end UK installers are manufactured in Poland, Germany,
              Italy, the Czech Republic or China, and rebadged and
              installed by a UK distributor. Certification standards are
              the same. The design language can be the same. The point
              where the two models diverge is service, lead time, and
              what happens if something needs attention in year three,
              ten or twenty of the door&apos;s life.
            </>
          ),
          body2: (
            <>
              This page is deliberately factual. Imported doors are not
              bad doors. They are a different service model. The question
              owners should actually ask is whether the trade-offs that
              come with importing work for the project.
            </>
          ),
        }}
        sections={[
          {
            pretitle: "Lead time",
            title: "Two thousand kilometres adds weeks, not days",
            body: (
              <>
                A UK-made SteelR door runs eight to twelve weeks from first
                enquiry to finished door in place. Six to eight of those
                weeks are manufacture in our UK facility, one to two weeks
                are the survey process, and installation itself is a single
                day for a single-leaf door.
              </>
            ),
            body2: (
              <>
                Imported systems typically quote twelve to twenty weeks.
                The door is designed in the UK, specified in the UK, then
                manufactured abroad, shipped, cleared through UK customs,
                and scheduled for installation. Each step in that chain
                has its own delay risk. Customs delays, factory holiday
                shutdowns, shipping disruptions and replacement-parts
                lead times all scale with distance. For an urgent project,
                the lead time difference is material.
              </>
            ),
          },
          {
            pretitle: "Aftercare",
            title: "Who you call, and who picks up",
            image: {
              src: "/images/detail/steelr-navy-panelled-chrome-ring-closeup.jpg",
              alt: "Close-up of chrome ring knocker detail on a UK-made SteelR steel front door",
            },
            body: (
              <>
                When a door needs adjustment, a hardware replacement, or a
                warranty repair, the response time is a function of how
                many links sit between the owner and the factory. A
                UK-made SteelR door is one link. You call us, the original
                surveyor has your specification on file, the original
                installer comes back to site. In most cases the fix is
                handled inside a week.
              </>
            ),
            body2: (
              <>
                An imported system is at least two links, and often three.
                You call the UK distributor. The distributor raises a case
                with the European factory. The factory ships the
                component. The distributor books a fitter. The process is
                not impossible, it is measured in weeks rather than days.
                For a residential front door this matters less than for,
                say, a commercial installation. It still matters.
              </>
            ),
          },
          {
            pretitle: "Warranty enforcement",
            title: "A warranty is only as good as the company standing behind it",
            body: (
              <>
                Warranty on a UK-made door is enforced against a UK
                company under UK consumer law. Replacement parts are
                fabricated in the same facility that built the original
                door. Specifications are on file against your property,
                indefinitely. If a hardware item is no longer in our
                standard catalogue in year fifteen, we will still have
                the drawings to fabricate a matching part.
              </>
            ),
            body2: (
              <>
                Warranty on an imported door is enforced against whichever
                UK distributor sold it. If that distributor has been
                acquired, restructured or dissolved between the install
                date and the warranty claim, the chain can break. If the
                foreign factory has discontinued the door model, the
                replacement component may not exist. These are edge
                cases, not normal outcomes, but the longer the service
                life of the door, the more likely you are to encounter
                them.
              </>
            ),
          },
          {
            pretitle: "Structural suitability",
            title: "UK building fabric, UK apertures, UK surveyors",
            body: (
              <>
                UK housing stock is older than most of continental Europe.
                Victorian, Georgian, Edwardian and interwar properties
                have apertures that rarely sit at standard metric
                dimensions. Stone, brick and timber sub-frames behave
                differently to the reinforced concrete and engineered
                timber common in newer European housing. A surveyor who
                has measured two thousand UK apertures has a
                pattern-recognition advantage that is genuinely difficult
                to replicate from abroad.
              </>
            ),
            body2: (
              <>
                Our surveyors are UK employees, DBS-checked, employed
                directly by SteelR. They attend every project in person.
                The installation team that fits your door is the same
                team that helped design it. There is no translation layer
                between the survey and the factory.
              </>
            ),
          },
          {
            pretitle: "Certification",
            title: "The same standards apply both ways",
            body: (
              <>
                We are not arguing that UK-made is more secure. It is not.
                Security comes from certification, and certification is
                conducted by independent laboratories against
                international standards that do not care where the door
                was made. PAS 24:2022, BS EN 1627 Class 3, LPS 1175 Issue 8
                and Secured by Design are the standards that matter.
                Imported doors and UK-made doors can both meet all of
                them. What certification does not cover is service,
                aftercare, lead time, and the availability of replacement
                parts fifteen years in.
              </>
            ),
            body2: (
              <>
                The security specification for every SteelR door is set
                out on the{" "}
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
        ]}
        related={{
          title: "Related reading",
          links: [
            {
              href: "/bespoke-steel-front-doors-uk",
              label: "Bespoke steel front doors UK",
              description: "The full SteelR service model, from design through installation.",
            },
            {
              href: "/process",
              label: "Our process",
              description: "The four-stage process from enquiry to finished door in place.",
            },
            {
              href: "/about",
              label: "About SteelR",
              description: "Who we are, how we work, and why we manufacture in the UK.",
            },
          ],
        }}
        faqs={faqs}
        ctaHeading="Start with a UK-made bespoke specification"
        enquirySource="hub-uk-vs-imported"
        enquiryContextLabel="UK Steel Doors vs Imported"
      />
    </>
  );
}
