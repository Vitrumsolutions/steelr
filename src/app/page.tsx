import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const galleryPreview = [
  {
    src: "/images/gallery/steelr-black-panelled-double-letterbox.jpg",
    alt: "Black panelled double steel door with letterbox",
  },
  {
    src: "/images/gallery/steelr-black-traditional-lion-knocker-open.jpg",
    alt: "Black traditional steel door with lion knocker open view",
  },
  {
    src: "/images/gallery/steelr-teal-panelled-glass-hallway.jpg",
    alt: "Teal panelled steel door with glass hallway view",
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

      {/* Section 2 — Collection Teaser */}
      <section style={{ background: "#f5f0e8" }} className="ribbon-bg py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryPreview.map((img) => (
              <div key={img.src} className="img-zoom aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  quality={100}
                  className="w-full h-full object-cover rounded-[4px]"
                  style={{ objectPosition: "center top" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          <Link
            href="/collection"
            className="inline-block mt-10 transition-opacity duration-300 hover:opacity-60"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: 13,
              color: "#1a1a18",
              letterSpacing: "0.05em",
            }}
          >
            View Full Collection &rarr;
          </Link>
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

      {/* Section 4 — Statement */}
      <section style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #ede8df 100%)" }} className="ribbon-bg py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
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
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="/images/gallery/steelr-navy-panelled-chrome-palms.jpg"
              alt="Navy panelled steel door with chrome hardware and palms"
              fill
              quality={100}
              className="object-cover rounded-[4px]"
              style={{ objectPosition: "center 30%" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 5 — Process */}
      <section style={{ background: "#ede8df" }} className="ribbon-bg py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step) => (
              <div key={step.num}>
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
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Gallery CTA Banner */}
      <section className="bg-site-black py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
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
            className="inline-block transition-colors duration-300 hover:bg-cream"
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
            Explore the Collection
          </Link>
        </div>
      </section>

      {/* Section 7 — Contact */}
      <section style={{ background: "linear-gradient(180deg, #ede8df 0%, #f5f0e8 100%)" }} className="ribbon-bg py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — info */}
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

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
