"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
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
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Logo
              variant="inline"
              theme={scrolled ? "dark" : "light"}
              size="nav"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: scrolled
                    ? "rgba(26, 26, 24, 0.6)"
                    : "rgba(245, 240, 232, 0.95)",
                  textShadow: scrolled
                    ? "none"
                    : "0 1px 4px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#c9a96e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled
                    ? "rgba(26, 26, 24, 0.6)"
                    : "rgba(245, 240, 232, 0.95)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone + Hamburger */}
          <div className="flex items-center gap-6">
            <a
              href="tel:08008611450"
              className="hidden md:block transition-colors duration-300"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 10,
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

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-[1px] transition-all duration-300"
                style={{
                  background: scrolled ? "#1a1a18" : "#f5f0e8",
                  transform: menuOpen
                    ? "rotate(45deg) translate(2px, 2px)"
                    : "none",
                }}
              />
              <span
                className="block w-5 h-[1px] transition-all duration-300"
                style={{
                  background: scrolled ? "#1a1a18" : "#f5f0e8",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-[1px] transition-all duration-300"
                style={{
                  background: scrolled ? "#1a1a18" : "#f5f0e8",
                  transform: menuOpen
                    ? "rotate(-45deg) translate(2px, -2px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden"
        style={{
          background: "#0a0a09",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="transition-all duration-300"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 32,
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
            className="mt-8"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 200,
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "rgba(245, 240, 232, 0.4)",
            }}
          >
            0800 861 1450
          </a>
        </div>
      </div>
    </>
  );
}
