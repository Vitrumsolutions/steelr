/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
