"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    src: "/images/hero/steelr-hero-01.jpg",
    alt: "Bespoke steel entrance door exterior view",
  },
  {
    src: "/images/hero/steelr-hero-02.jpg",
    alt: "Grand entrance with bespoke steel door",
  },
  {
    src: "/images/hero/steelr-hero-03.jpg",
    alt: "Contemporary steel entrance door on new build property",
  },
  {
    src: "/images/hero/steelr-hero-04.jpeg",
    alt: "Steel entrance door with architectural canopy",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            style={{
              animation: i === current ? "kenburns 6s ease-out forwards" : "none",
            }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,9,0.3) 0%, rgba(10,10,9,0.15) 40%, rgba(10,10,9,0.8) 100%)",
        }}
      />

      {/* Content — bottom left */}
      <div className="absolute bottom-0 left-0 z-20 p-8 md:p-16 max-w-2xl">
        {/* Credentials label */}
        <p
          className="mb-5"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 200,
            fontSize: 9,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(245, 240, 232, 0.5)",
          }}
        >
          SR3 Rated &middot; ISO 9001 Certified &middot; Secured by Design
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily:
              "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(48px, 7vw, 96px)",
            lineHeight: 1.0,
            color: "#f5f0e8",
          }}
        >
          Bespoke Steel
          <br />
          Entrance Doors
        </h1>

        {/* Subline */}
        <p
          className="mt-5"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 200,
            fontSize: 14,
            letterSpacing: "0.08em",
            color: "rgba(245, 240, 232, 0.6)",
          }}
        >
          Designed and installed nationwide
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-block mt-10 transition-colors duration-300 hover:bg-cream"
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

      {/* Scroll indicator — bottom right */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 flex flex-col items-center gap-3">
        <span
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 200,
            fontSize: 8,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(245, 240, 232, 0.4)",
            writingMode: "vertical-lr",
          }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-12 overflow-hidden"
          style={{ background: "rgba(245, 240, 232, 0.1)" }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "rgba(245, 240, 232, 0.4)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
