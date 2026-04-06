import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Steel Door Designs | PAS 24 & SR3 Rated | SteelR Collection",
  description:
    "Browse the full SteelR collection of bespoke security doors. PAS 24 certified, SR3 rated, Secured by Design approved. Contemporary and traditional steel entrance doors for new builds, flats and homes. Nationwide installation.",
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
  description: "Browse the full collection of PAS 24 certified, SR3 rated bespoke steel entrance doors. Secured by Design approved, FD30S fire rated. BS EN 1627 Class 3 security standard. Steel doors for new builds, flats and homes across the UK.",
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
