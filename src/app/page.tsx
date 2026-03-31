import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import HorizontalGallery from "@/components/HorizontalGallery";
import ParallaxSection from "@/components/ParallaxSection";

const galleryPreview = [
  {
    src: "/images/gallery/steelr-black-panelled-double-letterbox.jpg",
    alt: "Black panelled double steel door with letterbox",
    pos: "center 40%",
  },
  {
    src: "/images/gallery/steelr-black-traditional-lion-knocker-open.jpg",
    alt: "Black traditional steel door with lion knocker open view",
    pos: "center 30%",
  },
  {
    src: "/images/gallery/steelr-teal-panelled-glass-hallway.jpg",
    alt: "Teal panelled steel door with glass hallway view",
    pos: "center 35%",
  },
];

const credentials = [
  "SR3 Rated",
  "ISO 9001 Certified",
  "Secured by Design",
  "UK Manufactured",
  "Fire Rated Steel",
];

const processSteps = [
  {
    num: "01",
    title: "Enquiry",
    desc: "Get in touch by phone or through our online form. We discuss your property, your brief and your timeline.",
  },
  {
    num: "02",
    title: "Survey",
    desc: "We visit your property nationwide. Full measurements and detailed specification agreed on site.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Your door is designed to your exact specification. Colour, hardware, glazing, panel style and finish confirmed.",
  },
  {
    num: "04",
    title: "Installation",
    desc: "Professional installation by our team. Typically 8 to 12 weeks from enquiry to completion.",
  },
];

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Hero />
      <h1 className="sr-only">Bespoke Steel Entrance Doors | Designed and Installed Nationwide</h1>

      {/* Section 2 — Collection Teaser */}
      <section style={{ background: "#f5f0e8" }} className="ribbon-bg py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              The Collection
            </p>
            <h2
              className="mb-14"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
                lineHeight: 1.1,
              }}
            >
              Every door is made to order
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryPreview.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 0.12}>
                <div className="img-zoom aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={800}
                    quality={80}
                    className="w-full h-full object-cover rounded-[4px]"
                    style={{ objectPosition: img.pos }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <Link
              href="/collection"
              className="inline-block mt-10 link-gold-underline"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "#1a1a18",
                letterSpacing: "0.05em",
              }}
            >
              View all bespoke steel door designs &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3 — Credentials Bar */}
      <section className="bg-site-black py-7 px-6 md:px-16 overflow-x-auto">
        <div className="flex items-center justify-center gap-4 md:gap-8 min-w-max mx-auto">
          {credentials.map((cred, i) => (
            <span key={cred} className="flex items-center gap-4 md:gap-8">
              <span
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(245, 240, 232, 0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                {cred}
              </span>
              {i < credentials.length - 1 && (
                <span
                  className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: "#c9a96e" }}
                />
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Section 3.5 — Testimonials */}
      <section style={{ background: "#f5f0e8" }} className="ribbon-bg py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p
              className="text-center mb-4"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              What Our Clients Say
            </p>
            <h2
              className="text-center mb-16"
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
              }}
            >
              Trusted nationwide
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "From the first consultation to the day of installation, the entire process was seamless. The door is absolutely stunning and the security it provides gives us real peace of mind.",
                name: "James & Sarah H.",
                location: "Surrey",
              },
              {
                quote: "We looked at several door companies but SteelR were the only ones offering genuine SR3 security with this level of design. The finished door exceeded every expectation.",
                name: "David T.",
                location: "Cheshire",
              },
              {
                quote: "The attention to detail is remarkable. Our architect recommended SteelR specifically and we can see why. It has completely transformed the front of our home.",
                name: "Rachel & Mark W.",
                location: "Edinburgh",
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div
                  className="p-8 rounded-[4px] h-full flex flex-col justify-between"
                  style={{ background: "rgba(255,255,255,0.5)" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 200,
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: "#6b5a42",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <p
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: 13,
                        color: "#1a1a18",
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 300,
                        fontSize: 11,
                        color: "#b8943f",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3.6 — Warranty & Guarantee */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-12 md:py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
          {[
            { num: "10", label: "Year Warranty", sub: "On all steel entrance doors" },
            { num: "SR3", label: "Security Rated", sub: "Highest residential standard" },
            { num: "100%", label: "UK Manufactured", sub: "ISO 9001 certified facility" },
          ].map((item) => (
            <ScrollReveal key={item.num}>
              <div className="flex flex-col items-center md:items-start">
                <span
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: 48,
                    color: "#c9a96e",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#1a1a18",
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 200,
                    fontSize: 11,
                    color: "#6b5a42",
                    marginTop: 2,
                  }}
                >
                  {item.sub}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section 4 — Statement */}
      <section style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #ede8df 100%)" }} className="ribbon-bg py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <ScrollReveal direction="left">
            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#b8943f",
                }}
              >
                Our Philosophy
              </p>
              <h2
                className="mb-10"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#1a1a18",
                  lineHeight: 1.15,
                }}
              >
                Engineered for permanence.
                <br />
                Designed for distinction.
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                Every SteelR door is manufactured to SR3 high security standards
                in the United Kingdom. We work with homeowners, architects and
                developers who understand that the entrance to a home should be
                both beautiful and impenetrable.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                No standard sizes. No off-the-shelf finishes. Every door is made
                to your exact specification, from the initial consultation to
                final installation.
              </p>
              <p
                className="mt-6"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: "#6b5a42",
                }}
              >
                We serve homeowners across{" "}
                <Link href="/areas/london" className="link-gold-underline">London</Link>,{" "}
                <Link href="/areas/surrey" className="link-gold-underline">Surrey</Link>,{" "}
                <Link href="/areas/buckinghamshire" className="link-gold-underline">Buckinghamshire</Link>{" "}
                and <Link href="/areas" className="link-gold-underline">throughout the UK</Link>.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/gallery/steelr-navy-panelled-chrome-palms.jpg"
                alt="Navy panelled steel door with chrome hardware and palms"
                fill
                quality={80}
                className="object-cover rounded-[4px]"
                style={{ objectPosition: "center 35%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5 — Process */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-center mb-16"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                color: "#1a1a18",
              }}
            >
              How It Works
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div>
                  <span
                    className="block mb-4"
                    style={{
                      fontFamily:
                        "var(--font-display), 'Cormorant Garamond', serif",
                      fontWeight: 300,
                      fontSize: 64,
                      lineHeight: 1,
                      color: "rgba(201, 169, 110, 0.2)",
                    }}
                  >
                    {step.num}
                  </span>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#b8943f",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 200,
                      fontSize: 13,
                      lineHeight: 1.8,
                      color: "#6b5a42",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.5 — Parallax Statement */}
      <ParallaxSection
        imageSrc="/images/gallery/steelr-black-ornate-lion-knocker-sidelights.jpg"
        imageAlt="Black ornate steel door with lion knocker and sidelights"
      />

      {/* Section 5.7 — Horizontal Gallery Scroll */}
      <HorizontalGallery />

      {/* Section 6 — Gallery CTA Banner */}
      <section className="bg-site-black py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2
              className="mb-10"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#f5f0e8",
              }}
            >
              Entrance Doors Designed With Your Vision
            </h2>
            <Link
              href="/collection"
              className="btn-cta inline-block transition-colors duration-300 hover:bg-cream"
              style={{
                background: "#c9a96e",
                color: "#1a1a18",
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "16px 40px",
              }}
            >
              Explore Our Steel Entrance Doors
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6.5 — FAQ */}
      <section className="bg-cream ribbon-bg py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-center mb-16" style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 3.5vw, 44px)",
              color: "#1a1a18",
            }}>
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          {[
            { q: "What is an SR3 security rating?", a: "SR3 is the highest level of physical security testing for entrance doors under European standard BS EN 1627:2011. During testing, the door must withstand sustained forced attack using heavy-duty tools — including crowbars, drills and angle grinders — for an extended period without the attacker gaining entry. There are five security classes (SR1–SR5), but SR3 is the highest rating commercially available for residential entrance doors. Every SteelR door achieves SR3 as standard, providing the maximum forced-entry resistance for your home." },
            { q: "Do you install nationwide?", a: "Yes. SteelR designs, manufactures and installs bespoke steel entrance doors across the entire United Kingdom — from the Scottish Highlands to the south coast of England. Our dedicated survey team travels to your property for precise on-site measurements, and our own installation team (never subcontracted) carries out the fitting. There are no regional restrictions or additional travel charges for mainland UK properties." },
            { q: "How long does the process take?", a: "From initial enquiry to completed installation, the typical lead time is 8 to 12 weeks. This includes a site survey within 1–2 weeks of enquiry, a design approval stage where you confirm colour, hardware and glazing, followed by 6–8 weeks of manufacturing in our UK facility. Installation itself is usually completed in a single day. More complex specifications or multi-door projects may require additional time, and your specific timeline is confirmed during the order process." },
            { q: "Can I choose any colour and finish?", a: "Every SteelR door is fully bespoke. You can choose from any colour in the RAL Classic range — over 200 colours — with the option of dual-colour specification (a different colour inside and outside). Hardware is available in chrome, brass, gold, bronze, black and satin nickel finishes. Glazing options include clear, frosted, tinted, decorative, stained glass and obscured panels. Panel styles, decorative elements, knockers, handles and letterboxes are all customisable to your exact requirements." },
            { q: "Are your doors fire rated?", a: "Yes. All SteelR doors are manufactured from fire-rated steel and can be specified to FD30 (30-minute fire resistance) or FD60 (60-minute fire resistance) standards where required by building regulations or customer preference. Fire-rated glazing is also available for doors with glass panels, ensuring the full door assembly meets the required fire performance specification." },
          ].map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="border-b py-8" style={{ borderColor: "rgba(201,169,110,0.15)" }}>
                <h3 style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 15,
                  color: "#1a1a18",
                  marginBottom: 8,
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#6b5a42",
                }}>
                  {faq.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "What is an SR3 security rating?", "acceptedAnswer": {"@type": "Answer", "text": "SR3 is the highest level of physical security testing for entrance doors under European standard BS EN 1627:2011. During testing, the door must withstand sustained forced attack using heavy-duty tools — including crowbars, drills and angle grinders — for an extended period without the attacker gaining entry. There are five security classes (SR1–SR5), but SR3 is the highest rating commercially available for residential entrance doors. Every SteelR door achieves SR3 as standard, providing the maximum forced-entry resistance for your home."}},
          {"@type": "Question", "name": "Do you install nationwide?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. SteelR designs, manufactures and installs bespoke steel entrance doors across the entire United Kingdom — from the Scottish Highlands to the south coast of England. Our dedicated survey team travels to your property for precise on-site measurements, and our own installation team (never subcontracted) carries out the fitting. There are no regional restrictions or additional travel charges for mainland UK properties."}},
          {"@type": "Question", "name": "How long does the process take?", "acceptedAnswer": {"@type": "Answer", "text": "From initial enquiry to completed installation, the typical lead time is 8 to 12 weeks. This includes a site survey within 1–2 weeks of enquiry, a design approval stage where you confirm colour, hardware and glazing, followed by 6–8 weeks of manufacturing in our UK facility. Installation itself is usually completed in a single day. More complex specifications or multi-door projects may require additional time, and your specific timeline is confirmed during the order process."}},
          {"@type": "Question", "name": "Can I choose any colour and finish?", "acceptedAnswer": {"@type": "Answer", "text": "Every SteelR door is fully bespoke. You can choose from any colour in the RAL Classic range — over 200 colours — with the option of dual-colour specification (a different colour inside and outside). Hardware is available in chrome, brass, gold, bronze, black and satin nickel finishes. Glazing options include clear, frosted, tinted, decorative, stained glass and obscured panels. Panel styles, decorative elements, knockers, handles and letterboxes are all customisable to your exact requirements."}},
          {"@type": "Question", "name": "Are your doors fire rated?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All SteelR doors are manufactured from fire-rated steel and can be specified to FD30 (30-minute fire resistance) or FD60 (60-minute fire resistance) standards where required by building regulations or customer preference. Fire-rated glazing is also available for doors with glass panels, ensuring the full door assembly meets the required fire performance specification."}}
        ]
      }) }} />

      {/* Section 7 — Contact */}
      <section style={{ background: "linear-gradient(180deg, #ede8df 0%, #f5f0e8 100%)" }} className="ribbon-bg py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — info */}
          <ScrollReveal direction="left">
            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#b8943f",
                }}
              >
                Get in Touch
              </p>
              <h2
                className="mb-8"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  color: "#1a1a18",
                  lineHeight: 1.1,
                }}
              >
                Begin your enquiry
              </h2>
              <a
                href="tel:08008611450"
                className="block transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontFamily:
                    "var(--font-display), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: 48,
                  color: "#1a1a18",
                  letterSpacing: "-0.02em",
                }}
              >
                0800 861 1450
              </a>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 12,
                  color: "#6b5a42",
                }}
              >
                Monday to Friday, 8am to 6pm
              </p>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right">
            <div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
