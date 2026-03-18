import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process | From Enquiry to Installation | SteelR",
  description:
    "From initial enquiry to professional installation. Our bespoke steel door process explained. Nationwide coverage, 8 to 12 week lead time.",
};

const stages = [
  {
    num: "01",
    title: "Enquiry",
    text: "Get in touch by phone or online form. We discuss your property, your brief and your timeline. No obligation, no pressure.",
    image: "/images/gallery/steelr-gallery-01.jpg",
    alt: "Steel door enquiry consultation",
  },
  {
    num: "02",
    title: "Survey",
    text: "We visit your property nationwide. Full measurements, structural assessment and detailed specification agreed on site.",
    image: "/images/gallery/steelr-gallery-06.jpg",
    alt: "Property survey for bespoke steel door fitting",
  },
  {
    num: "03",
    title: "Design",
    text: "Your door is designed to your exact specification. Colour, hardware, glazing, panel style, finish. Every detail confirmed before manufacture begins.",
    image: "/images/gallery/steelr-gallery-04.jpg",
    alt: "Bespoke steel door design specification",
  },
  {
    num: "04",
    title: "Installation",
    text: "Professional installation by our team. Typically 8 to 12 weeks from enquiry to installation. Full aftercare and warranty included.",
    image: "/images/gallery/steelr-gallery-05.jpg",
    alt: "Professional steel door installation",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/hero/steelr-hero-04.jpeg"
          alt="SteelR bespoke door process"
          fill
          quality={100}
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,9,0.3), rgba(10,10,9,0.7))",
          }}
        />
        <div className="absolute inset-0 flex items-end p-8 md:p-16 z-10">
          <h1
            style={{
              fontFamily:
                "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#f5f0e8",
              lineHeight: 1.1,
            }}
          >
            Our Process
          </h1>
        </div>
      </section>

      {/* Process stages */}
      {stages.map((stage, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={stage.num}
            className="bg-cream py-16 md:py-28 px-6 md:px-16"
          >
            <div
              className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 ${
                imageLeft ? "" : "direction-rtl"
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] ${
                  !imageLeft ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  quality={90}
                  className="object-cover rounded-[4px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center ${
                  !imageLeft ? "lg:order-1" : ""
                }`}
              >
                <span
                  className="block mb-4"
                  style={{
                    fontFamily:
                      "var(--font-display), 'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: 80,
                    lineHeight: 1,
                    color: "rgba(201, 169, 110, 0.15)",
                  }}
                >
                  {stage.num}
                </span>
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c9a96e",
                  }}
                >
                  {stage.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 200,
                    fontSize: 14,
                    lineHeight: 1.9,
                    color: "#8a6f4e",
                    maxWidth: 480,
                  }}
                >
                  {stage.text}
                </p>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-site-black py-20 md:py-28 px-6 md:px-16">
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
            Ready to begin?
          </h2>
          <Link
            href="/contact"
            className="inline-block transition-colors duration-300 hover:bg-cream"
            style={{
              background: "#c9a96e",
              color: "#1a1a18",
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "16px 40px",
            }}
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
