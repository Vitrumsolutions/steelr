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

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      {children}
    </>
  );
}
