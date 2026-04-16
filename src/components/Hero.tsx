"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    src: "/images/hero/steelr-black-ornate-medallion-stone.jpg",
    alt: "Black ornate steel entrance door with medallion and sidelights set in stone surround",
    objectPos: "center 48%",
    zoomOrigin: "center 48%",
  },
  {
    src: "/images/hero/steelr-navy-panelled-chrome-frosted.jpg",
    alt: "Navy panelled steel door with chrome hardware and frosted glass panels",
    objectPos: "center 50%",
    zoomOrigin: "center 50%",
  },
  {
    src: "/images/gallery/steelr-black-panelled-sidelights-palms.jpg",
    alt: "Black panelled steel door with sidelights and potted palms",
    objectPos: "center 45%",
    zoomOrigin: "center 45%",
  },
  {
    src: "/images/gallery/steelr-black-traditional-wide-frosted.jpg",
    alt: "Black traditional steel door with wide frosted sidelights",
    objectPos: "center 40%",
    zoomOrigin: "center 40%",
  },
  {
    src: "/images/gallery/steelr-black-traditional-columns-mansion.jpg",
    alt: "Grand mansion entrance with black steel door flanked by classical columns",
    objectPos: "center 80%",
    zoomOrigin: "center 80%",
  },
];

const CYCLE_DURATION = 12000;
const LOGO_FADE_IN_START = 8000;

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
    const timeout = setTimeout(() => setPrevious(null), 2000);
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
              transition: "opacity 2s ease-in-out",
              zIndex: isActive ? 2 : isPrevious ? 1 : 0,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={80}
              className="object-cover"
              style={{
                objectPosition: img.objectPos,
                transformOrigin: img.zoomOrigin,
                animation: isVisible
                  ? "kenburns 12s ease-out forwards"
                  : "none",
                transform: isVisible ? undefined : "scale(1)",
              }}
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </div>
        );
      })}

      {/* Logo flash between transitions — visible on all devices */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{
          opacity: showLogo ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
          background: showLogo ? "rgba(10, 10, 9, 0.45)" : "transparent",
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
              color: "rgba(201, 169, 110, 0.8)",
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
            "linear-gradient(to bottom, rgba(10,10,9,0.15) 0%, rgba(10,10,9,0.0) 40%, rgba(10,10,9,0.55) 100%)",
        }}
      />

      {/* Credentials — top left below nav, never overlaps centred logo */}
      <div className="absolute top-24 md:top-28 landscape-creds left-0 z-30 px-8 md:px-16">
        <p
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(245, 240, 232, 0.85)",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          SR3 &amp; SR4 (LPS 1175) Rated &middot; ISO 9001 &middot; Secured by Design
        </p>
      </div>

      {/* CTA — bottom left */}
      <div className="absolute bottom-0 left-0 z-30 p-8 md:p-16 max-w-xl">
        <h2
          className="mb-3"
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "#f5f0e8",
            lineHeight: 1.15,
            textShadow: "0 2px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          The UK&rsquo;s highest security entrance doors, made to your exact specification
        </h2>
        <p
          className="mb-5"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: 13,
            letterSpacing: "0.05em",
            color: "rgba(245, 240, 232, 0.75)",
            textShadow: "0 1px 6px rgba(0, 0, 0, 0.4)",
          }}
        >
          SR3 as standard · SR4 (LPS 1175) upgrade. Designed and installed nationwide. 8–12 week lead time.
        </p>

        <Link
          href="/contact"
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
          Request a Free Consultation
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
