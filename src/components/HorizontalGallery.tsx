"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const images = [
  { src: "/images/gallery/steelr-black-ornate-circular-fluted.jpg", alt: "Black ornate steel door with circular fluted design", pos: "center center" },
  { src: "/images/gallery/steelr-navy-panelled-chrome-palms.jpg", alt: "Navy panelled steel door with chrome hardware", pos: "center 35%" },
  { src: "/images/gallery/steelr-walnut-ribbed-columns.jpg", alt: "Walnut ribbed steel door with classical columns", pos: "center 40%" },
  { src: "/images/gallery/steelr-sage-traditional-arched-brick.jpg", alt: "Sage traditional steel door with arched brick", pos: "center 40%" },
  { src: "/images/gallery/steelr-cobalt-ornate-lion-knocker.jpg", alt: "Cobalt blue ornate steel door with lion knocker", pos: "center center" },
  { src: "/images/gallery/steelr-espresso-contemporary-gold-inlay.jpg", alt: "Espresso contemporary steel door with gold inlay", pos: "center center" },
  { src: "/images/gallery/steelr-cream-traditional-lion-knocker-topiary.jpg", alt: "Cream traditional steel door with topiary", pos: "center 35%" },
  { src: "/images/gallery/steelr-red-traditional-lion-knocker.jpg", alt: "Red traditional steel door with lion knocker", pos: "center 35%" },
  { src: "/images/gallery/steelr-olive-traditional-brass-pendant.jpg", alt: "Olive traditional steel door with brass pendant", pos: "center 35%" },
  { src: "/images/gallery/steelr-teal-panelled-glass-hallway.jpg", alt: "Teal panelled steel door with glass hallway", pos: "center 35%" },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-32"
      style={{ background: "#1a1a18" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
        <p
          className="mb-4"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#c9a96e",
          }}
        >
          Portfolio
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(28px, 3.5vw, 44px)",
            color: "#f5f0e8",
            lineHeight: 1.1,
          }}
        >
          A door for every vision
        </h2>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-4 pl-6 md:pl-16"
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="relative flex-shrink-0 w-[280px] md:w-[360px] aspect-[3/4] rounded-[4px] overflow-hidden group cursor-pointer"
            style={{ border: "1px solid transparent", transition: "border-color 0.5s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={100}
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.15]"
              style={{ objectPosition: img.pos, transformOrigin: img.pos }}
              sizes="360px"
            />
            {/* Overlay gradient — always visible on mobile, hover on desktop */}
            <div
              className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(0deg, rgba(26,26,24,0.8) 0%, rgba(26,26,24,0.1) 40%, transparent 100%)",
              }}
            />
            {/* Gold line accent — always visible on mobile */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ background: "#c9a96e" }}
            />
            {/* Text — always visible on mobile, hover on desktop */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
              <p
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 12,
                  color: "#f5f0e8",
                  letterSpacing: "0.03em",
                  marginBottom: 6,
                }}
              >
                {img.alt}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                }}
              >
                View Detail
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-12">
        <Link
          href="/collection"
          className="link-gold-underline"
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: 13,
            color: "rgba(245, 240, 232, 0.6)",
            letterSpacing: "0.05em",
          }}
        >
          View Full Collection &rarr;
        </Link>
      </div>
    </section>
  );
}
