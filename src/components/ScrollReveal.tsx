"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  none: { x: 0, y: 0 },
};

// Pure CSS + IntersectionObserver replacement for the previous framer-motion
// implementation. Public API is unchanged so the 22 import sites continue to
// work without edit. Removes framer-motion from every page that only used it
// for reveal animations, which is the bulk of the site outside the hero.
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { rootMargin: "-60px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const offset = offsets[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0)"
          : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
