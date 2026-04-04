import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design & Estimate | Get a Quote for Your Steel Door | SteelR",
  description:
    "Use our online design tool to specify your bespoke steel entrance door and receive a tailored estimate. Free, no obligation.",
  alternates: {
    canonical: "https://steelr.co.uk/design-estimate",
  },
};

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://steelr.co.uk" },
    { "@type": "ListItem", position: 2, name: "Design & Estimate", item: "https://steelr.co.uk/design-estimate" },
  ],
});

export default function DesignEstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      {children}
    </>
  );
}
