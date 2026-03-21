import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Door Designs | SteelR Collection",
  description:
    "Browse the full SteelR collection of bespoke steel entrance doors. Contemporary and traditional designs fully bespoke to your specification. Nationwide installation.",
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
