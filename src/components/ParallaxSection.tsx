"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxSectionProps {
  imageSrc: string;
  imageAlt: string;
}

// Native scroll-driven parallax. Replaces the previous framer-motion useScroll
// + useTransform implementation, which pulled the framer-motion bundle into
// the homepage initial JS chunk and (when this section was lazy-loaded via
// next/dynamic ssr:false) hid the section's brand copy from crawlers.
//
// The static markup (background Image, eyebrow, heading, body paragraph)
// renders server-side as plain JSX. A small client effect listens to scroll
// and writes inline transforms / opacity to two refs as the section moves
// through the viewport. Visual behaviour is preserved exactly:
//   - Background image: translateY from -10% to 10% as the section progresses.
//   - Text overlay: translateY from 30% to -30%, opacity fade 0->1->1->0
//     peaking when the section is centred in the viewport.
// rAF-batched so the scroll listener never does work more than once per frame.
export default function ParallaxSection({
  imageSrc,
  imageAlt,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageLayer = imageLayerRef.current;
    const textLayer = textLayerRef.current;
    if (!container || !imageLayer || !textLayer) return;

    // Respect reduced-motion users: skip the scroll-driven transforms entirely.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      textLayer.style.opacity = "1";
      return;
    }

    let rafId = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Progress is 0 when the section's top hits the bottom of the viewport
      // and 1 when its bottom hits the top of the viewport. Same scroll
      // window framer-motion used with offset ["start end", "end start"].
      const totalRange = rect.height + vh;
      const passed = vh - rect.top;
      const p = Math.max(0, Math.min(1, passed / totalRange));

      // Background image: -10% -> 10% translateY.
      const imageY = -10 + 20 * p;
      imageLayer.style.transform = `translateY(${imageY}%) scale(1.2)`;

      // Text overlay: 30% -> -30% translateY.
      const textY = 30 - 60 * p;
      textLayer.style.transform = `translateY(${textY}%)`;

      // Text opacity: 4-stop ramp matching the original transform values
      // [0, 0.3, 0.7, 1] -> [0, 1, 1, 0].
      let opacity = 0;
      if (p < 0.3) {
        opacity = p / 0.3;
      } else if (p < 0.7) {
        opacity = 1;
      } else {
        opacity = 1 - (p - 0.7) / 0.3;
      }
      textLayer.style.opacity = String(opacity);
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] md:h-[80vh] overflow-hidden"
    >
      {/* Parallax background image. Transform applied via the scroll effect
       * above; initial transform keeps the layer scaled and ready before the
       * first scroll event runs. */}
      <div
        ref={imageLayerRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateY(-10%) scale(1.2)" }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={80}
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,26,24,0.4) 0%, rgba(26,26,24,0.7) 50%, rgba(26,26,24,0.4) 100%)",
        }}
      />

      {/* Text overlay. Transform + opacity applied via the scroll effect
       * above. Initial opacity is 0 so the text fades in as the section
       * enters the viewport, matching the original behaviour. */}
      <div
        ref={textLayerRef}
        className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-16 text-center will-change-transform"
        style={{ transform: "translateY(30%)", opacity: 0 }}
      >
        <p
          className="mb-6"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#c9a96e",
          }}
        >
          Crafted in Britain
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(28px, 4.5vw, 64px)",
            color: "#f5f0e8",
            lineHeight: 1.1,
            maxWidth: "90vw",
          }}
        >
          Where security meets artistry
        </h2>
        <p
          className="mt-6 mx-auto"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 200,
            fontSize: 14,
            color: "rgba(245, 240, 232, 0.7)",
            maxWidth: "min(500px, 85vw)",
            lineHeight: 1.8,
          }}
        >
          Every handle, every hinge, every detail. Precision engineered
          and hand-finished to your specification
        </p>
      </div>
    </section>
  );
}
