"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/design-estimate", label: "Get Estimate" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    const hero = document.getElementById("hero");
    if (hero) {
      observer.observe(hero);
    } else {
      setScrolled(true);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
        style={{
          background: scrolled ? "rgba(245, 240, 232, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(201, 169, 110, 0.15)"
            : "1px solid transparent",
          // CRITICAL: when the mobile menu is open, the menu overlay sits at
          // z-40 BELOW this z-50 nav. Without disabling pointer events on the
          // entire nav element, even a transparent/empty nav bar intercepts
          // taps on any menu item in its vertical band (first-listed items
          // like Collection, Lookbook, Areas).
          //
          // pointer-events:none on the nav lets taps pass through to the
          // overlay underneath. The hamburger button explicitly opts back
          // into pointer-events:auto so the menu can still be closed.
          pointerEvents: menuOpen ? "none" : "auto",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Logo
              variant="inline"
              theme={scrolled ? "dark" : "light"}
              size="nav"
            />
          </Link>

          {/* Desktop nav links — Fix 10: 11px */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-gold-underline transition-colors duration-300 hover:text-gold"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: scrolled
                    ? "rgba(26, 26, 24, 0.6)"
                    : "rgba(245, 240, 232, 0.95)",
                  textShadow: scrolled
                    ? "none"
                    : "0 1px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone (Fix 18: hidden below lg) + Hamburger */}
          <div className="flex items-center gap-6">
            <a
              href="tel:08008611450"
              className="hidden lg:block transition-colors duration-300"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 12,
                letterSpacing: "0.1em",
                color: scrolled
                  ? "rgba(26, 26, 24, 0.5)"
                  : "rgba(245, 240, 232, 1)",
                textShadow: scrolled
                  ? "none"
                  : "0 1px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              0800 861 1450
            </a>

            <button
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu-overlay"
              // Always clickable so the user can close an open menu, even
              // though the parent flex div has pointerEvents:none when open.
              style={{ pointerEvents: "auto" }}
            >
              <span
                className="block w-5 h-[1px]"
                style={{
                  background: scrolled ? "#1a1a18" : "#f5f0e8",
                  transform: menuOpen
                    ? "rotate(45deg) translate(4px, 4px)"
                    : "none",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
                }}
              />
              <span
                className="block w-5 h-[1px]"
                style={{
                  background: scrolled ? "#1a1a18" : "#f5f0e8",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
              />
              <span
                className="block w-5 h-[1px]"
                style={{
                  background: scrolled ? "#1a1a18" : "#f5f0e8",
                  transform: menuOpen
                    ? "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-menu-overlay"
        className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-500 lg:hidden"
        onClick={() => setMenuOpen(false)}
        style={{
          background: "#0a0a09",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          // Top padding clears the fixed nav band (logo + hamburger live in
          // the top ~80px of the viewport). Without this, justify-center can
          // place the first menu item (Collection) at y ~ 45-65px, visually
          // and tap-target overlapping the nav. Bottom padding mirrors so
          // centering still feels balanced. Increased to 64px to give the
          // tel CTA breathing room from the viewport bottom edge.
          paddingTop: "96px",
          paddingBottom: "64px",
        }}
      >
        <div
          className="flex flex-col items-center gap-6 sm:gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="transition-opacity duration-300"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 26,
                color: "#f5f0e8",
                letterSpacing: "0.05em",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:08008611450"
            className="mt-12"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: 16,
              letterSpacing: "0.15em",
              color: "#c9a96e",
            }}
          >
            0800 861 1450
          </a>
        </div>
      </div>
    </>
  );
}
