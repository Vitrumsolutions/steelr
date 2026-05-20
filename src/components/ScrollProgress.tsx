"use client";

import { useEffect, useRef } from "react";

// Pure CSS + rAF scroll-listener replacement for the previous framer-motion
// useScroll + useSpring implementation. The bar appears identical: a 2px gold
// line at the top of the viewport that scales horizontally from 0 to 1 as the
// document scrolls. Removes framer-motion from layout.tsx, so the bundle is
// no longer pulled into every page's initial JS chunk.
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? doc.scrollTop / max : 0;
      el.style.transform = `scaleX(${progress})`;
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
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[60] origin-left pointer-events-none"
      style={{ transform: "scaleX(0)", transition: "transform 120ms linear" }}
    />
  );
}
