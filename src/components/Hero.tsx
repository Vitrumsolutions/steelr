"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const heroImages = [
  {
    src: "/images/hero/steelr-black-ornate-checkerboard.jpg",
    alt: "Black ornate steel entrance door with checkerboard step",
  },
  {
    src: "/images/hero/steelr-navy-panelled-lanterns.jpg",
    alt: "Navy blue panelled entrance door with lanterns and stone steps",
  },
  {
    src: "/images/hero/steelr-black-traditional-lion-knocker.jpg",
    alt: "Black traditional steel door with lion knocker and gold hardware",
  },
  {
    src: "/images/hero/steelr-navy-traditional-vine-porch.jpg",
    alt: "Navy traditional steel door with vine-covered porch",
  },
  {
    src: "/images/hero/steelr-black-contemporary-sidelight.jpg",
    alt: "Black contemporary steel entrance door with sidelight",
  },
];

// Total cycle: 8s per image
// Image displays: 5s → logo fades in 0.5s → logo holds 1s → logo fades out 0.5s → next image crossfades 1s
const CYCLE_DURATION = 8000;
const LOGO_FADE_IN_START = 5300;
// Logo visible for 2.7s total: 0.6s fade in + 1.5s hold + 0.6s fade out

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

    // Show logo before transition
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
      {/* Images */}
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
                objectPosition: "center top",
                transformOrigin: "center center",
                animation: isVisible
                  ? "kenburns 8s ease-out forwards"
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
        className="absolute inset-0 z-[8] flex items-center justify-center pointer-events-none"
        style={{
          opacity: showLogo ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <Logo variant="stacked" theme="light" size="hero" />
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
        <p
          className="mb-5"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: 9,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(245, 240, 232, 0.9)",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          SR3 Rated &middot; ISO 9001 Certified &middot; Secured by Design
        </p>

        <h1
          style={{
            fontFamily:
              "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(32px, 4vw, 52px)",
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

      {/* Scroll indicator */}
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
