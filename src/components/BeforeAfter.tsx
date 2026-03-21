"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-2xl mx-auto overflow-hidden rounded-[4px] cursor-ew-resize select-none touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* After image (full, underneath) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          quality={100}
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          quality={100}
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] z-10"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          background: "#c9a96e",
        }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: "#c9a96e",
            background: "rgba(10, 10, 9, 0.6)",
            backdropFilter: "blur(4px)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L1 8L5 13" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 3L15 8L11 13" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div
        className="absolute top-6 left-6 z-10 px-3 py-1"
        style={{
          background: "rgba(10, 10, 9, 0.5)",
          backdropFilter: "blur(4px)",
          fontFamily: "var(--font-body), Montserrat, sans-serif",
          fontWeight: 300,
          fontSize: 9,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(245, 240, 232, 0.8)",
        }}
      >
        {beforeLabel}
      </div>
      <div
        className="absolute top-6 right-6 z-10 px-3 py-1"
        style={{
          background: "rgba(10, 10, 9, 0.5)",
          backdropFilter: "blur(4px)",
          fontFamily: "var(--font-body), Montserrat, sans-serif",
          fontWeight: 300,
          fontSize: 9,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#c9a96e",
        }}
      >
        {afterLabel}
      </div>
    </div>
  );
}
