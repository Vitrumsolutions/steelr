"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Only use images that work well in landscape viewport
// Landscape and near-square images show full door without cropping
const heroImages = [
  {
    src: "/images/hero/steelr-black-ornate-medallion-stone.jpg",
    alt: "Black ornate steel entrance door with medallion and sidelights",
    pos: "center center",
  },
  {
    src: "/images/hero/steelr-navy-panelled-chrome-frosted.jpg",
    alt: "Navy panelled steel door with chrome hardware and frosted glass",
    pos: "center center",
  },
  {
    src: "/images/gallery/steelr-black-panelled-sidelights-palms.jpg",
    alt: "Black panelled steel door with sidelights and potted palms",
    pos: "center center",
  },
  {
    src: "/images/gallery/steelr-black-traditional-wide-frosted.jpg",
    alt: "Black traditional steel door with frosted sidelights",
    pos: "center center",
  },
  {
    src: "/images/gallery/steelr-black-traditional-columns-mansion.jpg",
    alt: "Grand mansion entrance with black steel door and columns",
    pos: "center 40%",
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
    <section id="hero" className="relative w-full h-[70vh] overflow-hidden">
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
                objectPosition: img.pos,
                transformOrigin: img.pos,
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
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{
          opacity: showLogo ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          background: showLogo ? "rgba(10, 10, 9, 0.4)" : "transparent",
        }}
      >
        <div className="flex flex-col items-center text-center px-8">
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
              style={{ width: 3, height: 76, background: "#c9a96e", margin: "0 5px" }}
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
            "linear-gradient(to bottom, rgba(10,10,9,0.0) 0%, rgba(10,10,9,0.0) 50%, rgba(10,10,9,0.6) 100%)",
        }}
      />

      {/* Content — bottom left */}
      <div className="absolute bottom-0 left-0 z-20 p-8 md:p-16 max-w-2xl">
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

        <h1
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.1,
            letterSpacing: "0.05em",
            color: "#f5f0e8",
            textShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
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
            fontWeight: 300,
            fontSize: 14,
            letterSpacing: "0.08em",
            color: "rgba(245, 240, 232, 0.8)",
            textShadow: "0 1px 6px rgba(0, 0, 0, 0.4)",
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
            fontSize: 11,
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
            fontSize: 9,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(245, 240, 232, 0.5)",
            writingMode: "vertical-lr",
          }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-12 overflow-hidden"
          style={{ background: "rgba(245, 240, 232, 0.15)" }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "rgba(245, 240, 232, 0.5)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
