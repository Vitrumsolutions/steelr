"use client";

import dynamic from "next/dynamic";

/**
 * Vercel Analytics + Speed Insights deferred out of the initial JS bundle.
 *
 * Both packages were previously imported statically in src/app/layout.tsx,
 * loading on every page on first paint. Lighthouse's `unused-javascript`
 * audit flagged 93 KB of unused JS on the homepage after Phase 1-3 of the
 * 2026-05-19 mobile-perf recovery, with these two packages contributing
 * the largest share.
 *
 * Both renderers produce zero SSR markup — they only inject a tracking
 * script and a vitals beacon respectively. Safe to load with ssr:false
 * and loading: () => null so there is no FOUC. They beacon a few seconds
 * later than before, which is a tracking-quality trade we accept for the
 * TBT win on the LCP path.
 *
 * Pattern mirrors vitrums/src/components/DeferredClientOverlays.tsx.
 */
const VercelAnalytics = dynamic(
  () => import("@vercel/analytics/react").then((m) => m.Analytics),
  {
    ssr: false,
    loading: () => null,
  }
);

const VercelSpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then((m) => m.SpeedInsights),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function DeferredAnalytics() {
  return (
    <>
      <VercelAnalytics />
      <VercelSpeedInsights />
    </>
  );
}
