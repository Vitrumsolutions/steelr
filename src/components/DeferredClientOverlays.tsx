"use client";

import dynamic from "next/dynamic";

/**
 * Site-wide client overlays loaded AFTER the critical LCP.
 *
 * ScrollProgress is a framer-motion component that pulls in the framer
 * runtime (~30KB gz) and registers a scroll listener. None of that is
 * needed for first paint — users don't see the progress bar until they
 * scroll. Wrapping it in next/dynamic with ssr:false pushes its JS out
 * of the initial client bundle and defers hydration to idle time.
 *
 * Vitrums playbook port (28 Apr 2026). See vitrums perf section in
 * Vitrums CLAUDE.md for the measured TBT delta on this pattern.
 */
const ScrollProgress = dynamic(() => import("./ScrollProgress"), {
  ssr: false,
  loading: () => null,
});

export default function DeferredClientOverlays() {
  return <ScrollProgress />;
}
