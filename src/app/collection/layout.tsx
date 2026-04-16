import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Steel Door Designs | SR3 Standard, SR4 (LPS 1175) Upgrade | SteelR Collection",
  description:
    "Browse the full SteelR collection of bespoke steel front doors for the home. PAS 24 certified, SR3 rated as standard with SR4 (LPS 1175) commercial-grade upgrade, Secured by Design approved. Contemporary and traditional steel entrance doors. Nationwide installation.",
  alternates: {
    canonical: "https://steelr.co.uk/collection",
  },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    { "@type": "ListItem", position: 2, name: "Collection", item: "https://steelr.co.uk/collection" },
  ],
});

const collectionSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "SteelR Bespoke Steel Door Collection",
  description: "Browse the full collection of PAS 24 certified bespoke steel front doors for the home. SR3 rated as standard (BS EN 1627 Class 3) with SR4 (LPS 1175 Issue 8) commercial-grade upgrade available. Secured by Design approved, FD30S fire rated. Steel doors for new builds, flats and homes across the UK.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: collectionSchema }} />
      {children}
    </>
  );
}
