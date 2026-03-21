import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-site-black py-16 px-6 md:px-16 ribbon-bg">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <Logo variant="stacked" theme="light" size="standard" />

        {/* Nav links */}
        <div className="flex items-center gap-8 mt-10">
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

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 200,
            fontSize: 10,
            color: "rgba(245, 240, 232, 0.3)",
          }}
        >
          &copy; 2025 SteelR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
