import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Doors with Sidelights | Bespoke | SteelR",
  description:
    "SteelR bespoke steel front doors with sidelights. Single, double, glazed and panelled configurations. PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4 available.",
  alternates: {
    canonical: "https://steelr.co.uk/collection/sidelights",
  },
  openGraph: {
    title: "Steel Doors with Sidelights | Bespoke | SteelR",
    description:
      "SteelR bespoke steel front doors with sidelights. Single, double, glazed and panelled configurations. PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4 available.",
    url: "https://steelr.co.uk/collection/sidelights",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Doors with Sidelights | Bespoke | SteelR",
    description:
      "SteelR bespoke steel front doors with sidelights. Single, double, glazed and panelled configurations. PAS 24, BS EN 1627 RC4, LPS 1175 SR3/SR4 available.",
    images: ["/og-image.png"],
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
