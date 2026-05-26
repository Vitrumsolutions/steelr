/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prefer AVIF over WebP for image responses. AVIF averages 30-50% smaller
  // than WebP at the same visual quality. Supported by Chrome 85+, Safari 16+,
  // Firefox 93+. Browsers without AVIF support fall back to WebP automatically.
  // The hero LCP image (~537 KB at the time of the perf-recovery work)
  // measurably benefits from this for mobile LCP.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Canonical: www -> non-www as 308 Permanent (better link equity than Vercel's default 307)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.steelr.co.uk" }],
        destination: "https://steelr.co.uk/:path*",
        permanent: true,
      },
      // Cannibalisation cleanup (22 Apr 2026) — collapse overlapping blog posts
      // onto the thickest / best-slugged version so Google stops splitting
      // ranking signal across duplicates. All 308 Permanent so link equity
      // consolidates on the surviving URL.
      {
        source: "/blog/steel-entrance-doors-cost-uk",
        destination: "/blog/how-much-do-steel-doors-cost-uk",
        permanent: true,
      },
      {
        source: "/blog/steel-entrance-doors-pricing-factors",
        destination: "/blog/how-much-do-steel-doors-cost-uk",
        permanent: true,
      },
      // 28 Apr 2026 — composite-vs-steel-doors-2026-updated-comparison merged
      // into /steel-front-door-vs-composite topic hub. Both old slugs now point
      // straight to the hub so no chained redirects.
      {
        source: "/blog/steel-vs-composite-doors",
        destination: "/steel-front-door-vs-composite",
        permanent: true,
      },
      {
        source: "/blog/composite-vs-steel-doors-2026-updated-comparison",
        destination: "/steel-front-door-vs-composite",
        permanent: true,
      },
      {
        source: "/blog/front-door-ideas-design-trends",
        destination: "/blog/modern-front-door-ideas-inspiration-2026",
        permanent: true,
      },
      {
        source: "/blog/front-door-design-trends-2026",
        destination: "/blog/modern-front-door-ideas-inspiration-2026",
        permanent: true,
      },
      // Second wave cannibalisation cleanup (22 Apr 2026). Two more duplicate
      // pairs spotted while auditing the remaining thin posts.
      {
        source: "/blog/steel-entrance-doors-architects-specifiers",
        destination: "/blog/specifying-steel-doors-architects-guide-2026",
        permanent: true,
      },
      {
        source: "/blog/secured-by-design-doors",
        destination: "/blog/secured-by-design-homes-guide-2026",
        permanent: true,
      },
      // Third wave cannibalisation cleanup (02 May 2026). The cannibalisation
      // auditor flagged two blog/topic-page duplicates created by the recent
      // BS EN 1627 RC4 + LPS 1673 + warranty/U-value rewrites.
      {
        source: "/blog/what-is-sr3-security-rating",
        destination: "/sr3-residential-steel-door",
        permanent: true,
      },
      {
        source: "/blog/how-much-do-steel-doors-cost-uk",
        destination: "/steel-front-door-cost-uk",
        permanent: true,
      },
      // Fourth wave cannibalisation cleanup (19 May 2026). Heritage hub ships,
      // collapsing two period-property blogs that were strict subsets of the
      // new /heritage-steel-front-doors-uk topic page. Third redirect
      // collapses a 4-min stub onto its 9-min legally-rigorous companion blog,
      // not the hub (different primary intent — conservation-area planning).
      {
        source: "/blog/best-front-doors-period-properties",
        destination: "/heritage-steel-front-doors-uk",
        permanent: true,
      },
      {
        source: "/blog/period-property-front-door-ultimate-guide",
        destination: "/heritage-steel-front-doors-uk",
        permanent: true,
      },
      {
        source: "/blog/conservation-area-door-requirements-uk",
        destination: "/blog/steel-doors-conservation-areas-planning-guide",
        permanent: true,
      },
      // 26 May 2026 — kill /design-estimate (4-step 19-field form that asked
      // the buyer to specify door width, security class and fire rating
      // before the survey). 301 to /contact, the canonical lead form on the
      // site. ContactForm covers the same intent without the friction. See
      // the 26 May session for the deep-reviewer / security-auditor sign-off.
      {
        source: "/design-estimate",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  async headers() {
    // Long-cache static binary assets so repeat visitors skip the re-download
    // and Vercel image-optimisation endpoint round-trip. Files in
    // /public/images/ are content-addressed by filename — when image content
    // changes the filename changes, so 1-year immutable is safe. Favicons
    // cached 1 week (occasionally rotated). Mirrors the vitrums pattern.
    //
    // Repeat-visit benefit is the larger win here: CrUX field metrics (which
    // Google actually ranks on) improve materially when image bytes are cached
    // across navigation.
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/favicon-:size.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
      {
        source: "/apple-touch-icon.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
};

export default nextConfig;
