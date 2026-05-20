"use client";

import dynamic from "next/dynamic";

// Client wrapper that defers HorizontalGallery off the initial JS chunk.
// HorizontalGallery imports framer-motion; the homepage is the only consumer
// and the section sits well below the fold, so SSR is unnecessary.
// loading: () => null avoids any visible placeholder, preserving the brand
// feel guardrail from the perf-recovery spec.
const HorizontalGallery = dynamic(() => import("./HorizontalGallery"), {
  ssr: false,
  loading: () => null,
});

export default function HorizontalGalleryLazy() {
  return <HorizontalGallery />;
}
