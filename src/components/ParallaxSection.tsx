"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  imageSrc: string;
  imageAlt: string;
}

export default function ParallaxSection({ imageSrc, imageAlt }: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[70vh] md:h-[80vh] overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale: 1.2 }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={100}
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(26,26,24,0.4) 0%, rgba(26,26,24,0.7) 50%, rgba(26,26,24,0.4) 100%)",
        }}
      />

      {/* Scrolling text overlay */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-16 text-center"
        style={{ y: textY, opacity }}
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
          Every handle, every hinge, every detail — precision engineered
          and hand-finished to your specification
        </p>
      </motion.div>
    </section>
  );
}
