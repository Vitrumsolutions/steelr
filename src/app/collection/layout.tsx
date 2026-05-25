import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Steel Door Collection | RC4 + LPS 1175 | SteelR",
  description:
    "Browse SteelR bespoke steel front doors. PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4 + LPS 1673 available. Secured by Design. UK install.",
  alternates: {
    canonical: "https://steelr.co.uk/collection",
  },
  openGraph: {
    title: "Bespoke Steel Door Collection | RC4 + LPS 1175 | SteelR",
    description:
      "Browse SteelR bespoke steel front doors. PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4 + LPS 1673 available. Secured by Design. UK install.",
    url: "https://steelr.co.uk/collection",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Steel Door Collection | RC4 + LPS 1175 | SteelR",
    description:
      "Browse SteelR bespoke steel front doors. PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4 + LPS 1673 available. Secured by Design. UK install.",
    images: ["/og-image.png"],
  },
};

// BreadcrumbList is intentionally NOT emitted here. This layout wraps
// /collection, /collection/sidelights and /collection/[slug]; emitting a
// BreadcrumbList at the layout level produced a second, shorter BreadcrumbList
// on the child routes (each of which injects its own complete one). The
// /collection index page now carries its own BreadcrumbList in page.tsx.
const collectionSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SteelR Bespoke Steel Door Collection",
  description: "Browse the full collection of PAS 24 certified bespoke steel front doors for the home. BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, with LPS 1175 SR3 (Enhanced upgrade), LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade) and LPS 1673 attack-resistance (Ultra-high, by enquiry) available. Secured by Design approved, FD30S fire rated. Steel doors for new builds, flats and homes across the UK.",
  url: "https://steelr.co.uk/collection",
  isPartOf: { "@type": "WebSite", url: "https://steelr.co.uk" },
});

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: collectionSchema }} />
      {children}
    </>
  );
}
