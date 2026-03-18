import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  title: "SteelR | Bespoke Steel Entrance Doors | Nationwide UK",
  description:
    "Bespoke steel entrance doors designed and installed nationwide. SR3 rated, ISO 9001 certified, Secured by Design approved. Request a free consultation today.",
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://steelr.co.uk"),
  openGraph: {
    title: "SteelR | Bespoke Steel Entrance Doors",
    description: "Bespoke steel entrance doors designed and installed nationwide. SR3 rated, ISO 9001 certified.",
    url: "https://steelr.co.uk",
    siteName: "SteelR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SteelR | Bespoke Steel Entrance Doors",
    description: "Bespoke steel entrance doors designed and installed nationwide. SR3 rated, ISO 9001 certified.",
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
              "logo": "https://steelr.co.uk/favicon.svg",
              "image": "https://steelr.co.uk/images/hero/steelr-black-ornate-medallion-stone.jpg",
              "description": "Bespoke steel entrance doors manufactured and installed nationwide across the United Kingdom. SR3 rated, ISO 9001 certified, Secured by Design approved.",
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
              "knowsAbout": ["Steel entrance doors", "Bespoke doors", "Security doors", "SR3 rated doors", "Fire rated doors"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bespoke Steel Entrance Doors",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Contemporary Steel Entrance Door"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Traditional Steel Entrance Door"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Double Steel Entrance Doors"}}
                ]
              }
            }),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${tenorSans.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
