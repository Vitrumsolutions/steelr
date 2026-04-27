import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const topicLinks = [
  { href: "/bespoke-steel-front-doors-uk", label: "Bespoke Doors" },
  { href: "/luxury-steel-entrance-door-london", label: "London Luxury" },
  { href: "/sr3-residential-steel-door", label: "SR3 Residential" },
  { href: "/pas-24-steel-entrance-door", label: "PAS 24 Spec" },
  { href: "/secured-by-design-steel-front-door", label: "Secured by Design" },
  { href: "/fire-rated-fd30-front-door", label: "FD30 Fire Rated" },
  { href: "/thermally-broken-steel-front-door", label: "Thermal Performance" },
  { href: "/steel-front-door-vs-composite", label: "vs Composite" },
  { href: "/uk-steel-doors-vs-imported", label: "UK vs Imported" },
  { href: "/steel-front-door-cost-uk", label: "Cost Guide" },
];

export default function Footer() {
  return (
    <footer className="bg-site-black py-16 px-6 md:px-16 ribbon-bg">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <Logo variant="stacked" theme="light" size="standard" />

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-10">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-gold-underline transition-colors duration-300 hover:text-cream"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245, 240, 232, 0.5)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Topics column */}
        <div className="flex flex-col items-center mt-10">
          <h3
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: 9,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(201, 169, 110, 0.7)",
              marginBottom: 14,
            }}
          >
            Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-3xl">
            {topicLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-gold-underline transition-colors duration-300 hover:text-cream"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(245, 240, 232, 0.5)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-2 mt-10">
          <a
            href="tel:08008611450"
            className="transition-colors duration-300 hover:text-gold"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 200,
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "rgba(245, 240, 232, 0.4)",
            }}
          >
            0800 861 1450
          </a>
          <a
            href="mailto:info@steelr.co.uk"
            className="transition-colors duration-300 hover:text-gold"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 200,
              fontSize: 11,
              letterSpacing: "0.05em",
              color: "rgba(245, 240, 232, 0.3)",
            }}
          >
            info@steelr.co.uk
          </a>
        </div>

        {/* Divider */}
        <div
          className="w-12 mt-12 mb-6"
          style={{ height: 1, background: "rgba(201, 169, 110, 0.2)" }}
        />

        {/* Legal links */}
        <div className="flex items-center gap-6 mb-4">
          {[
            { href: "/sitemap", label: "Sitemap" },
            { href: "/ai-answers", label: "AI Answers" },
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms & Conditions" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-cream"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 9,
                letterSpacing: "0.15em",
                color: "rgba(245, 240, 232, 0.25)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 200,
            fontSize: 10,
            color: "rgba(245, 240, 232, 0.3)",
          }}
        >
          &copy; 2026 SteelR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
