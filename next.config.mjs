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
    ];
  },
};

export default nextConfig;
