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
  title: "SteelR | Bespoke Steel Front Doors UK | SR3 / SR4 Available",
  description:
    "Bespoke steel front doors UK. 4-tier ladder: BS EN 1627 RC4 Standard, LPS 1175 SR3/SR4 + LPS 1673 available. PAS 24, Secured by Design, FD30S. UK install.",
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
    title: "SteelR | Bespoke Steel Front Doors UK | SR3 / SR4 Available",
    description: "Bespoke steel front doors UK. 4-tier ladder: BS EN 1627 RC4 Standard, LPS 1175 SR3/SR4 + LPS 1673 available. PAS 24, Secured by Design, FD30S. UK install.",
    url: "https://steelr.co.uk",
    siteName: "SteelR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 2400,
        height: 1260,
        alt: "SteelR. Bespoke Steel Entrance Doors. BS EN 1627:2011 RC4 single leaf, unglazed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SteelR | Bespoke Steel Front Doors UK | SR3 / SR4 Available",
    description: "Bespoke steel front doors UK. 4-tier ladder: BS EN 1627 RC4 Standard, LPS 1175 SR3/SR4 + LPS 1673 available. PAS 24, Secured by Design, FD30S. UK install.",
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
    <html lang="en-GB">
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
              "description": "Bespoke steel front doors for homes across the United Kingdom. Standard residential specification at BS EN 1627:2011 RC4 single leaf, unglazed, with LPS 1175 SR3 and SR4 enhanced and commercial-grade certifications available, and LPS 1673 attack-resistance available by enquiry. PAS 24 certified, Secured by Design approved, FD30S fire and smoke rated, ISO 9001 and ISO 14001 certified, Made in Britain. Approved Document Q compliant for new builds, flats and residential front steel doors.",
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
              "makesOffer": [
                {
                  "@type": "Service",
                  "name": "Bespoke Steel Entrance Door Manufacture and Installation",
                  "description": "UK-manufactured bespoke steel front doors made to measure for individual properties. PAS 24:2022 certified, BS EN 1627:2011 RC4 single leaf, unglazed certified as Standard, with LPS 1175 SR3 (Enhanced upgrade), SR4 D10 Issue 8 (Commercial-grade upgrade) and LPS 1673 (Ultra-high, by enquiry) available. Secured by Design approved, FD30S fire and smoke rated.",
                  "provider": {"@id": "https://steelr.co.uk/#business"},
                  "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "serviceType": "Bespoke Steel Front Door Manufacture and Installation"
                },
                {
                  "@type": "Service",
                  "name": "PAS 24 Certified Steel Front Doors for New Builds",
                  "description": "PAS 24:2022 certified steel front doors meeting Approved Document Q for new-build dwellings, flats and HMOs. Standard on every SteelR door. Building Control sign-off included.",
                  "provider": {"@id": "https://steelr.co.uk/#business"},
                  "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "serviceType": "PAS 24 Certified Door Supply"
                },
                {
                  "@type": "Service",
                  "name": "FD30 and FD60 Fire Rated Steel Front Doors",
                  "description": "FD30S fire and smoke rated steel front doors standard on every SteelR specification. FD60 available as upgrade for common-area doors and protected escape routes. Tested to BS 476-22 or BS EN 1634-1. Approved Document B compliant.",
                  "provider": {"@id": "https://steelr.co.uk/#business"},
                  "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "serviceType": "Fire Rated Door Supply and Installation"
                },
                {
                  "@type": "Service",
                  "name": "Secured by Design Approved Steel Front Doors",
                  "description": "UK police-preferred Secured by Design specification on every SteelR door. Whole-doorset approval covering frame, leaf, locking and hardware. Recognised by UK home insurers.",
                  "provider": {"@id": "https://steelr.co.uk/#business"},
                  "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "serviceType": "Secured by Design Approved Door Supply"
                },
                {
                  "@type": "Service",
                  "name": "LPS 1175 SR3 and SR4 Commercial-Grade Steel Front Doors",
                  "description": "LPCB police-preferred LPS 1175 SR3 (Enhanced upgrade) and LPS 1175 SR4 D10 Issue 8 (Commercial-grade upgrade, used in data centres and bank vaults) available on every SteelR residential door.",
                  "provider": {"@id": "https://steelr.co.uk/#business"},
                  "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "serviceType": "Commercial-Grade Security Door Supply"
                },
                {
                  "@type": "Service",
                  "name": "Custom RAL Colour and Bespoke Hardware Door Design",
                  "description": "Any RAL colour with dual-colour inside/out at no additional cost. Hardware in chrome, brass, gold or matt black. Bespoke panel mouldings, knockers, letterplates and house numerals. Visual mock-up before manufacture.",
                  "provider": {"@id": "https://steelr.co.uk/#business"},
                  "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "serviceType": "Bespoke Door Design"
                },
                {
                  "@type": "Service",
                  "name": "UK Mainland Door Installation by In-House Team",
                  "description": "DBS-checked, fully insured installation team employed directly by SteelR. Never subcontracted. Same team manufactures and installs the door, preserving as-tested certification validity. No regional surcharge.",
                  "provider": {"@id": "https://steelr.co.uk/#business"},
                  "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "serviceType": "Front Door Installation"
                },
                {
                  "@type": "Service",
                  "name": "Door Aftercare, Warranty and Hardware Servicing",
                  "description": "Ten-year manufacturer warranty on door construction, five years on decorative finish, three years on hardware. Direct phone and email contact, no ticket systems. Hinge adjustments, lock re-keying, seal replacement and hardware upgrades by the original install team.",
                  "provider": {"@id": "https://steelr.co.uk/#business"},
                  "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "serviceType": "Door Aftercare and Maintenance"
                }
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "ISO 9001 Quality Management System",
                  "recognizedBy": {"@type": "Organization", "name": "UKAS"}
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "ISO 14001 Environmental Management System",
                  "recognizedBy": {"@type": "Organization", "name": "UKAS"}
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "PAS 24:2022 Security Performance Standard",
                  "recognizedBy": {"@type": "Organization", "name": "British Standards Institution"}
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "BS EN 1627:2011 Resistance Class 4 (RC4) single leaf, unglazed",
                  "recognizedBy": {"@type": "Organization", "name": "British Standards Institution"}
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "LPS 1175 Issue 8 Security Rating SR3 and SR4",
                  "recognizedBy": {"@type": "Organization", "name": "Loss Prevention Certification Board (LPCB), BRE Global"}
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "Secured by Design Approved",
                  "recognizedBy": {"@type": "Organization", "name": "Police Crime Prevention Initiatives Limited"}
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "FD30S Fire and Smoke Rated to BS 476-22 / BS EN 1634-1",
                  "recognizedBy": {"@type": "Organization", "name": "BRE Global / Warringtonfire"}
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "certification",
                  "name": "Made in Britain Marque",
                  "recognizedBy": {"@type": "Organization", "name": "Made in Britain Campaign"}
                }
              ],
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
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <ScrollProgress />
        <Nav />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <TelClickTracker />
      </body>
    </html>
  );
}
