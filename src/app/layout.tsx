import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Tenor_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import TelClickTracker from "@/components/TelClickTracker";
import { getAggregateRatingSchema } from "@/data/reviews";

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
  title: "SteelR | Bespoke Steel Front Doors UK | BS EN 1627 RC4",
  description:
    "Bespoke steel front doors for UK homes. Tested to BS EN 1627:2011 RC4 single leaf unglazed, PAS 24 certified, Secured by Design, FD30 fire rated. Nationwide install by SteelR.",
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
    title: "SteelR | Bespoke Steel Front Doors UK | BS EN 1627 RC4",
    description: "Bespoke steel front doors for UK homes. Tested to BS EN 1627:2011 RC4 single leaf unglazed, PAS 24 certified, Secured by Design, FD30 fire rated. Nationwide install by SteelR.",
    url: "https://steelr.co.uk",
    siteName: "SteelR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 2400,
        height: 1260,
        alt: "SteelR — Bespoke Steel Entrance Doors | BS EN 1627:2011 RC4 single leaf, unglazed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SteelR | Bespoke Steel Front Doors UK | BS EN 1627 RC4",
    description: "Bespoke steel front doors for UK homes. Tested to BS EN 1627:2011 RC4 single leaf unglazed, PAS 24 certified, Secured by Design, FD30 fire rated. Nationwide install by SteelR.",
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
              "@id": "https://steelr.co.uk/#business",
              "name": "SteelR",
              "alternateName": "SteelR Bespoke Entrance Doors",
              "telephone": "0800 861 1450",
              "email": "info@steelr.co.uk",
              "url": "https://steelr.co.uk",
              "logo": "https://steelr.co.uk/brand/steelr-logo-primary.png",
              "image": "https://steelr.co.uk/images/hero/steelr-black-ornate-medallion-stone.jpg",
              "description": "Bespoke steel front doors for homes across the United Kingdom. Tested to BS EN 1627:2011 RC4 single leaf, unglazed, PAS 24 certified, Secured by Design approved, FD30S fire and smoke rated, ISO 9001 certified. Approved Document Q compliant for new builds, flats and residential front steel doors.",
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "11 Silverbirch Close",
                "addressLocality": "Uxbridge",
                "addressRegion": "West London",
                "postalCode": "UB10 8AP",
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
              "knowsAbout": ["Steel entrance doors", "Steel front doors for your home", "Residential front steel doors", "Bespoke doors", "Security doors", "BS EN 1627", "BS EN 1627:2011", "BS EN 1627 RC4", "BS EN 1627 RC4 single leaf unglazed", "Resistance Class 4 doors", "PAS 24 certified doors", "Secured by Design doors", "FD30 fire rated doors", "FD60 fire rated doors", "Fire rated steel front doors", "Approved Document Q compliance", "Steel doors for new builds", "Steel doors for flats", "Bespoke security doors UK", "European-framework rated security doors"],
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
              },
              ...(getAggregateRatingSchema() ? { "aggregateRating": getAggregateRatingSchema() } : {})
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
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <TelClickTracker />
      </body>
    </html>
  );
}
