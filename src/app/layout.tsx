import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-body",
  display: "swap",
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caption",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SteelR | Bespoke Steel Entrance Doors | PAS 24 Certified | Nationwide UK",
  description:
    "Bespoke PAS 24 certified steel entrance doors designed and installed nationwide. SR3 security rated, Secured by Design approved, FD30 fire rated. Approved Document Q compliant for new builds and flats. Request a free consultation.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/steelr-favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://steelr.co.uk"),
  openGraph: {
    title: "SteelR | Bespoke PAS 24 Certified Steel Entrance Doors",
    description: "Bespoke PAS 24 certified steel entrance doors. SR3 security rated, Secured by Design approved, FD30 fire rated. Nationwide installation.",
    url: "https://steelr.co.uk",
    siteName: "SteelR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 2400,
        height: 1260,
        alt: "SteelR — Bespoke Steel Entrance Doors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SteelR | Bespoke PAS 24 Certified Steel Entrance Doors",
    description: "Bespoke PAS 24 certified steel entrance doors. SR3 security rated, Secured by Design approved, FD30 fire rated. Nationwide installation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://steelr.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "SteelR",
              "alternateName": "SteelR Bespoke Entrance Doors",
              "telephone": "0800 861 1450",
              "email": "info@steelr.co.uk",
              "url": "https://steelr.co.uk",
              "logo": "https://steelr.co.uk/brand/steelr-logo-primary.png",
              "image": "https://steelr.co.uk/images/hero/steelr-black-ornate-medallion-stone.jpg",
              "description": "Bespoke PAS 24 certified steel entrance doors manufactured and installed nationwide across the United Kingdom. SR3 rated to BS EN 1627 Class 3, Secured by Design approved, FD30S fire and smoke rated, ISO 9001 certified. Approved Document Q compliant for new builds and flats.",
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "$$$$",
              "knowsAbout": ["Steel entrance doors", "Bespoke doors", "Security doors", "SR3 rated doors", "PAS 24 certified doors", "Secured by Design doors", "BS EN 1627 Class 3", "FD30 fire rated doors", "FD60 fire rated doors", "Approved Document Q compliance", "Steel doors for new builds", "Steel doors for flats", "Bespoke security doors UK"],
              "sameAs": [
                "https://www.instagram.com/steelrdoors",
                "https://www.pinterest.co.uk/steelrdoors",
                "https://www.linkedin.com/company/steelr"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bespoke Steel Entrance Doors",
                "itemListElement": [
                  {"@type": "OfferCatalog", "name": "Contemporary Steel Entrance Doors"},
                  {"@type": "OfferCatalog", "name": "Traditional Steel Entrance Doors"},
                  {"@type": "OfferCatalog", "name": "Double Steel Entrance Doors"}
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Mani Sandhu",
                "jobTitle": "Founder & Director"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${tenorSans.variable} antialiased`}
      >
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
