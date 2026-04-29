import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Request a Consultation | SteelR",
  description:
    "Request a free consultation on your bespoke steel front door. Call 0800 861 1450 or use the online form. Response in two working hours. Nationwide UK install.",
  alternates: {
    canonical: "https://steelr.co.uk/contact",
  },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://steelr.co.uk/contact" },
  ],
});

const contactFaqs = [
  {
    question: "What happens after I submit the enquiry form?",
    answer:
      "A senior member of the SteelR team, not a call handler, reads every new enquiry directly. You will receive a call or email the same working day, usually within two hours. If you enquire outside working hours, you will be contacted first thing the following working day. The first call is a short discovery conversation, typically fifteen minutes. There is no deposit, no tie-in, and nothing chargeable at this stage.",
  },
  {
    question: "Do you charge for the consultation or survey?",
    answer:
      "No. The initial consultation and the on-site structural survey are both free and no-obligation. You receive a written survey report, a scaled CAD drawing of the proposed door, and a detailed written quotation within five working days of the survey visit. You only pay once you have agreed a final specification and signed off a production order.",
  },
  {
    question: "Do you cover the whole of the UK?",
    answer:
      "Yes. SteelR designs, manufactures and installs across the entire UK mainland, from the Scottish Highlands to the south coast of England. There is no regional surcharge. Our in-house survey and installation teams travel to the property, not third-party subcontractors. Specific area coverage includes London, Surrey, Buckinghamshire, Hertfordshire, Kent, Essex, Berkshire, Oxfordshire, Hampshire, Sussex, Cheshire, Manchester, Birmingham, Yorkshire, the South West and Scotland.",
  },
  {
    question: "How long does the full process take?",
    answer:
      "Typically eight to twelve weeks from first enquiry to finished door in place. The structural survey is booked within one to two weeks of the enquiry. Design approval usually takes one week of dialogue. Manufacture in our UK facility runs six to eight weeks. Installation is completed in a single day for a single-leaf door, or two days for double doors or sidelight configurations. Full timeline is confirmed during the design stage.",
  },
  {
    question: "Can I discuss the project without committing to anything?",
    answer:
      "Yes. The discovery call and survey are both free and without obligation. We would rather tell you if your project is not a good fit for SteelR than quote for a job that does not suit our service. If your timeline is urgent, we will be upfront about whether the eight-to-twelve-week manufacture window can be compressed. If your budget is below the point where a bespoke steel door makes sense, we will tell you that too, and point you towards other options.",
  },
];

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

const bodyFont = "var(--font-body), Montserrat, sans-serif";
const displayFont = "var(--font-display), 'Cormorant Garamond', serif";

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      {/* Hero banner */}
      <section
        className="flex items-center justify-center"
        style={{ height: 200, background: "#1a1a18", paddingTop: 80 }}
      >
        <p
          style={{
            fontFamily: displayFont,
            fontWeight: 300,
            fontSize: 48,
            color: "#f5f0e8",
            textAlign: "center",
          }}
        >
          Get in Touch
        </p>
      </section>

      <section className="ribbon-bg bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <ScrollReveal direction="left"><div>
            <p
              className="mb-4"
              style={{
                fontFamily: bodyFont,
                fontWeight: 400,
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              Get in Touch
            </p>
            <h1
              className="mb-8"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              Request a bespoke steel door consultation
            </h1>
            <p
              className="mb-8"
              style={{
                fontFamily: bodyFont,
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              Every enquiry is read directly by a senior member of the SteelR team.
              You will receive a response the same working day, usually within two
              hours. The initial conversation is a short, no-obligation discovery
              call to understand your property, the brief behind the door, and your
              timeline. Nothing is chargeable at this stage. No deposit is requested.
              If the project fit is not right, we will say so rather than waste your time.
            </p>
            <a
              href="tel:08008611450"
              className="block transition-opacity duration-300 hover:opacity-70"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: 48,
                color: "#1a1a18",
                letterSpacing: "-0.02em",
              }}
            >
              0800 861 1450
            </a>
            <p
              className="mt-3 mb-3"
              style={{
                fontFamily: bodyFont,
                fontWeight: 300,
                fontSize: 13,
                color: "#6b5a42",
              }}
            >
              Monday to Friday, 8am to 6pm
            </p>
            <a
              href="mailto:info@steelr.co.uk"
              className="transition-opacity duration-300 hover:opacity-70"
              style={{
                fontFamily: bodyFont,
                fontWeight: 300,
                fontSize: 14,
                color: "#6b5a42",
              }}
            >
              info@steelr.co.uk
            </a>

            <div className="mt-16">
              <p
                className="mb-4"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 400,
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#b8943f",
                }}
              >
                Coverage
              </p>
              <p
                className="mb-4"
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: "#8a6f4e",
                }}
              >
                SteelR designs and installs bespoke steel front doors across the
                entire UK mainland. Our in-house survey team travels to your
                property. Our in-house installation team fits the finished door.
                Neither is ever subcontracted. There is no regional surcharge.
              </p>
              <p
                style={{
                  fontFamily: bodyFont,
                  fontWeight: 200,
                  fontSize: 13,
                  lineHeight: 1.9,
                  color: "#8a6f4e",
                }}
              >
                Regions covered:{" "}
                <Link href="/areas/london" className="link-gold-underline">London</Link>,{" "}
                <Link href="/areas/surrey" className="link-gold-underline">Surrey</Link>,{" "}
                <Link href="/areas/buckinghamshire" className="link-gold-underline">Buckinghamshire</Link>,{" "}
                <Link href="/areas/hertfordshire" className="link-gold-underline">Hertfordshire</Link>,{" "}
                <Link href="/areas/kent" className="link-gold-underline">Kent</Link>,{" "}
                <Link href="/areas/essex" className="link-gold-underline">Essex</Link>,{" "}
                <Link href="/areas/berkshire" className="link-gold-underline">Berkshire</Link>,{" "}
                <Link href="/areas/oxfordshire" className="link-gold-underline">Oxfordshire</Link>,{" "}
                <Link href="/areas/hampshire" className="link-gold-underline">Hampshire</Link>,{" "}
                <Link href="/areas/sussex" className="link-gold-underline">Sussex</Link>,{" "}
                <Link href="/areas/cheshire" className="link-gold-underline">Cheshire</Link>,{" "}
                <Link href="/areas/manchester" className="link-gold-underline">Manchester</Link>,{" "}
                <Link href="/areas/birmingham" className="link-gold-underline">Birmingham</Link>,{" "}
                <Link href="/areas/yorkshire" className="link-gold-underline">Yorkshire</Link>,{" "}
                <Link href="/areas/south-west" className="link-gold-underline">the South West</Link>, and{" "}
                <Link href="/areas/scotland" className="link-gold-underline">Scotland</Link>.
              </p>
            </div>
          </div></ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right">
          <div>
            <ContactForm />
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What happens next — three-step block */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p
              className="mb-4 text-center"
              style={{
                fontFamily: bodyFont,
                fontWeight: 400,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              What Happens Next
            </p>
            <h2
              className="mb-12 text-center"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              From enquiry to your first conversation
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                num: "01",
                heading: "You enquire",
                body: "Submit the form or call the 0800 number. Every enquiry reaches a senior team member directly. No call handlers, no lead qualification outsourcing.",
              },
              {
                num: "02",
                heading: "We respond",
                body: "Same working day, typically within two hours. We arrange a short discovery call at a time that suits you. If your enquiry comes in after hours, expect a reply first thing the next working day.",
              },
              {
                num: "03",
                heading: "We book a survey",
                body: "If the project fit is right, we schedule a free on-site survey within one to two weeks. Our surveyor attends with laser measuring equipment, assesses the aperture and provides a detailed written quotation within five working days.",
              },
            ].map((step) => (
              <ScrollReveal key={step.num} delay={0.08}>
                <div>
                  <span
                    className="block mb-3"
                    style={{
                      fontFamily: displayFont,
                      fontWeight: 300,
                      fontSize: 56,
                      lineHeight: 1,
                      color: "rgba(201, 169, 110, 0.25)",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 400,
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#c9a96e",
                    }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 200,
                      fontSize: 14,
                      lineHeight: 1.85,
                      color: "#6b5a42",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — consultation questions */}
      <section className="bg-cream ribbon-bg py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p
              className="mb-4 text-center"
              style={{
                fontFamily: bodyFont,
                fontWeight: 400,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              Common Questions
            </p>
            <h2
              className="mb-12 text-center"
              style={{
                fontFamily: displayFont,
                fontWeight: 300,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                color: "#1a1a18",
                lineHeight: 1.2,
              }}
            >
              Before you enquire
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-8">
            {contactFaqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 0.06}>
                <div
                  className="pb-8"
                  style={{ borderBottom: "1px solid rgba(201,169,110,0.15)" }}
                >
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 400,
                      fontSize: 15,
                      color: "#1a1a18",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    style={{
                      fontFamily: bodyFont,
                      fontWeight: 200,
                      fontSize: 13,
                      lineHeight: 1.85,
                      color: "#6b5a42",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps embed — business name only, no street address shown */}
      <section style={{ padding: "60px 24px", background: "#1a1a18" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: 200, color: "#f5f0e8", marginBottom: 16, letterSpacing: "0.02em" }}>Find Us</h2>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(201,169,110,0.15)" }}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Steelr+Bespoke+Steel+Entrance+Doors,Uxbridge,UK&zoom=10`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SteelR location"
            />
          </div>
          <p style={{ fontSize: 12, color: "#8a6f4e", marginTop: 8 }}>Nationwide design, manufacture and installation across the United Kingdom</p>
        </div>
      </section>
    </>
  );
}
