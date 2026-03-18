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
              "@type": "LocalBusiness",
              name: "SteelR",
              telephone: "0800 861 1450",
              email: "info@steelr.co.uk",
              url: "https://steelr.co.uk",
              areaServed: "United Kingdom",
              description:
                "Bespoke steel entrance doors manufactured and installed nationwide",
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
