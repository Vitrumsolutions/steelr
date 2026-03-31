import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Doors with Sidelights | Bespoke Entrance Doors | SteelR",
  description:
    "Browse our collection of bespoke steel entrance doors with sidelights. Single, double, glazed and panelled sidelight configurations. SR3 security rated with nationwide installation.",
  alternates: {
    canonical: "https://steelr.co.uk/collection/sidelights",
  },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    { "@type": "ListItem", position: 2, name: "Collection", item: "https://steelr.co.uk/collection" },
    { "@type": "ListItem", position: 3, name: "Sidelights", item: "https://steelr.co.uk/collection/sidelights" },
  ],
});

export default function SidelightsLayout({
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
