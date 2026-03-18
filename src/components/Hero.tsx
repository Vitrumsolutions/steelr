"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const heroImages = [
  {
    src: "/images/hero/steelr-black-ornate-checkerboard.jpg",
    alt: "Black ornate steel entrance door with checkerboard step",
    origin: "center 45%",
  },
  {
    src: "/images/hero/steelr-navy-panelled-lanterns.jpg",
    alt: "Navy blue panelled entrance door with lanterns and stone steps",
    origin: "center 50%",
  },
  {
    src: "/images/hero/steelr-black-traditional-lion-knocker.jpg",
    alt: "Black traditional steel door with lion knocker and gold hardware",
    origin: "40% 45%",
  },
  {
    src: "/images/hero/steelr-navy-traditional-vine-porch.jpg",
    alt: "Navy traditional steel door with vine-covered porch",
    origin: "center 40%",
  },
  {
    src: "/images/hero/steelr-black-contemporary-sidelight.jpg",
    alt: "Black contemporary steel entrance door with sidelight",
    origin: "center 45%",
  },
  {
    src: "/images/hero/steelr-black-ornate-checkerboard-canopy-wide.jpg",
    alt: "Black ornate steel door with checkerboard step and canopy wide view",
    origin: "center 45%",
  },
  {
    src: "/images/hero/steelr-black-ornate-medallion-stone.jpg",
    alt: "Black ornate steel door with medallion on stone entrance",
    origin: "center 48%",
  },
  {
    src: "/images/hero/steelr-cream-panelled-glass-atrium.jpg",
    alt: "Cream panelled steel door with glass atrium entrance",
    origin: "center 55%",
  },
  {
    src: "/images/hero/steelr-navy-panelled-chrome-frosted.jpg",
    alt: "Navy panelled steel door with chrome hardware and frosted glass",
    origin: "center 50%",
  },
];

const CYCLE_DURATION = 8000;
const LOGO_FADE_IN_START = 5500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevious(current);
      setCurrent((prev) => (prev + 1) % heroImages.length);
      setShowLogo(false);
    }, CYCLE_DURATION);

    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, LOGO_FADE_IN_START);

    return () => {
      clearInterval(timer);
      clearTimeout(logoTimer);
    };
  }, [current]);

  useEffect(() => {
    if (previous === null) return;
    const timeout = setTimeout(() => setPrevious(null), 1500);
    return () => clearTimeout(timeout);
  }, [previous]);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {heroImages.map((img, i) => {
        const isActive = i === current;
        const isPrevious = i === previous;
        const isVisible = isActive || isPrevious;

        return (
          <div
            key={img.src}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: isActive ? 2 : isPrevious ? 1 : 0,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={100}
              className="object-cover"
              style={{
                objectPosition: img.origin,
                transformOrigin: img.origin,
                animation: isVisible
                  ? "kenburns 6s ease-out forwards"
                  : "none",
                transform: isVisible ? undefined : "scale(1)",
              }}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        );
      })}

      {/* Logo flash between transitions */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{
          opacity: showLogo ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          background: showLogo ? "rgba(10, 10, 9, 0.4)" : "transparent",
          maxWidth: "90vw",
          margin: "0 auto",
          left: 0,
          right: 0,
        }}
      >
        <div className="flex flex-col items-center text-center">
          <span
            className="flex items-center"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 200,
              fontSize: 64,
              letterSpacing: "-0.02em",
              color: "#f5f0e8",
              lineHeight: 1,
            }}
          >
            steel
            <span
              className="inline-block flex-shrink-0"
              style={{
                width: 3,
                height: 76,
                background: "#c9a96e",
                margin: "0 5px",
              }}
            />
            r
          </span>
          <span
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: 10,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(201, 169, 110, 0.7)",
              marginTop: 12,
            }}
          >
            Bespoke Entrance Doors
          </span>
        </div>
      </div>

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
        {/* Fix 11: credentials visibility */}
        <p
          className="mb-5"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(245, 240, 232, 0.9)",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          SR3 Rated &middot; ISO 9001 Certified &middot; Secured by Design
        </p>

        {/* Fix 9 + 19: H1 hero size */}
        <h1
          style={{
            fontFamily:
              "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.1,
            letterSpacing: "0.05em",
            color: "rgba(245, 240, 232, 0.92)",
          }}
        >
          Bespoke Steel
          <br />
          Entrance Doors
        </h1>

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

        {/* Fix 10: CTA button text 11px */}
        <Link
          href="/contact"
          className="inline-block mt-10 transition-colors duration-300 hover:bg-cream"
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
          Request a Consultation
        </Link>
      </div>

      {/* Fix 10: scroll indicator 9px */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 flex flex-col items-center gap-3">
        <span
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 200,
            fontSize: 9,
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
