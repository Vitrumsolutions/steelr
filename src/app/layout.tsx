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
  title: "SteelR | Bespoke Steel Front Doors for Your Home | SR3 & SR4 (LPS 1175) | Nationwide UK",
  description:
    "Bespoke steel front doors for your home, designed and installed nationwide. PAS 24 certified, SR3 rated as standard with SR4 (LPS 1175) commercial-grade upgrade, Secured by Design approved, FD30 fire rated. Residential front steel doors, fire rated steel front doors and Approved Document Q compliant.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/steelr-favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://steelr.co.uk"),
  openGraph: {
    title: "SteelR | Bespoke Steel Front Doors | SR3 Standard, SR4 (LPS 1175) Upgrade",
    description: "Bespoke steel front doors for your home. PAS 24 certified, SR3 standard with SR4 (LPS 1175) commercial-grade upgrade, Secured by Design approved, FD30 fire rated. Nationwide installation.",
    url: "https://steelr.co.uk",
    siteName: "SteelR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 2400,
        height: 1260,
        alt: "SteelR — Bespoke Steel Entrance Doors | SR3 Standard, SR4 (LPS 1175) Upgrade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SteelR | Bespoke Steel Front Doors | SR3 Standard, SR4 (LPS 1175) Upgrade",
    description: "Bespoke steel front doors for your home. PAS 24 certified, SR3 standard with SR4 (LPS 1175) commercial-grade upgrade, Secured by Design approved, FD30 fire rated. Nationwide installation.",
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
              "description": "Bespoke steel front doors for homes across the United Kingdom. PAS 24 certified, SR3 rated to BS EN 1627 Class 3 as standard with SR4 (LPS 1175 Issue 8) commercial-grade upgrade available, Secured by Design approved, FD30S fire and smoke rated, ISO 9001 certified. Approved Document Q compliant for new builds, flats and residential front steel doors.",
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Uxbridge",
                "addressRegion": "West London",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.5513,
                "longitude": -0.7732
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "$$$$",
              "knowsAbout": ["Steel entrance doors", "Steel front doors for your home", "Residential front steel doors", "Bespoke doors", "Security doors", "SR3 rated doors", "SR4 rated doors", "LPS 1175", "LPS 1175 Issue 8", "LPS 1175 Security Rating 4", "SR4 Class 4", "PAS 24 certified doors", "Secured by Design doors", "BS EN 1627 Class 3", "FD30 fire rated doors", "FD60 fire rated doors", "Fire rated steel front doors", "Approved Document Q compliance", "Steel doors for new builds", "Steel doors for flats", "Bespoke security doors UK", "Commercial-grade residential security doors"],
              "sameAs": [
                "https://www.instagram.com/steelrdoors",
                "https://www.pinterest.co.uk/steelrdoors",
                "https://www.linkedin.com/company/steelr",
                "https://www.google.com/maps/place/SteelR+Bespoke+Steel+Entrance+Doors"
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
