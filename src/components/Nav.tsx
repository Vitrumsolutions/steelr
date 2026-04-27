import Link from "next/link";
import Logo from "./Logo";
import MobileNavToggle from "./MobileNavToggle";
import NavScrollState from "./NavScrollState";
import { navLinks, PHONE_HREF, PHONE_DISPLAY } from "./nav-data";

/**
 * Top navigation — server component.
 *
 * Rebuilt 28 Apr as an RSC shell + two tiny client islands. Mirrors the
 * Vitrums perf playbook (Nav split + CSS-only state). The previous
 * implementation was a 267-line `"use client"` component that hydrated on
 * every page and ran an IntersectionObserver, body-scroll lock, focus
 * management, and animated hamburger state inside the same hydration tree.
 *
 * Architecture:
 *  - Nav.tsx (this file, server) — zero JS, all colour/blur/border
 *    transitions driven by CSS scoped via `body[data-nav-scrolled="..."]`.
 *  - NavScrollState.tsx (client, ~20 lines) — sets the body attribute
 *    based on hero visibility. No rendering.
 *  - MobileNavToggle.tsx (client, ~140 lines) — hamburger + overlay +
 *    body-scroll lock + focus trap. The ONLY substantial client JS in the nav.
 *
 * Scroll-driven theming (preserved from old Nav):
 *  - default (over hero): transparent bg, cream/white text, white hamburger
 *  - scrolled (or non-homepage): cream-tinted bg with blur+border, dark
 *    muted text, dark hamburger
 *
 * The dropdown / megamenu pattern from Vitrums Nav is omitted — SteelR
 * has a flat 8-link nav with no submenus.
 */
export default function Nav() {
  return (
    <>
      {/* Scoped CSS for scroll-driven theme. Lives inside the server
          component so we don't have to touch globals.css. Selectors hang
          off `body[data-nav-scrolled]` which NavScrollState toggles. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .nav-root {
              background: transparent;
              backdrop-filter: none;
              -webkit-backdrop-filter: none;
              border-bottom: 1px solid transparent;
              transition: background 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease;
            }
            body[data-nav-scrolled="true"] .nav-root {
              background: rgba(245, 240, 232, 0.97);
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
              border-bottom-color: rgba(201, 169, 110, 0.15);
            }
            /* Desktop nav links + phone CTA — colour shifts on scroll */
            .nav-link {
              color: rgba(245, 240, 232, 0.95);
              text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
              transition: color 300ms ease, text-shadow 300ms ease;
            }
            body[data-nav-scrolled="true"] .nav-link {
              color: rgba(26, 26, 24, 0.6);
              text-shadow: none;
            }
            .nav-link:hover { color: #c9a96e; }
            body[data-nav-scrolled="true"] .nav-link:hover { color: #c9a96e; }
            /* Hamburger lines — bright on hero, dark on scrolled */
            .nav-hamburger-line {
              background: #f5f0e8;
              transition: background 300ms ease;
            }
            body[data-nav-scrolled="true"] .nav-hamburger-line {
              background: #1a1a18;
            }
            /* Logo wrapper — toggles theme via opacity layering. We render
               BOTH light and dark Logo variants and crossfade with CSS. */
            .nav-logo-light { opacity: 1; transition: opacity 300ms ease; }
            .nav-logo-dark { opacity: 0; transition: opacity 300ms ease;
              position: absolute; inset: 0; }
            body[data-nav-scrolled="true"] .nav-logo-light { opacity: 0; }
            body[data-nav-scrolled="true"] .nav-logo-dark { opacity: 1; }
          `,
        }}
      />
      <NavScrollState />
      <nav
        className="nav-root fixed top-0 left-0 right-0 z-50"
        aria-label="Primary"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          {/* Logo — render both themes, crossfade via CSS so the swap
              doesn't require client JS. The wrapper is `relative` so the
              absolute-positioned dark variant overlays the light one. */}
          <Link href="/" aria-label="SteelR home">
            <span className="relative inline-block">
              <span className="nav-logo-light">
                <Logo variant="inline" theme="light" size="nav" />
              </span>
              <span className="nav-logo-dark">
                <Logo variant="inline" theme="dark" size="nav" />
              </span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link link-gold-underline"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone (lg+) + hamburger client island */}
          <div className="flex items-center gap-6">
            <a
              href={PHONE_HREF}
              aria-label={`Call SteelR on ${PHONE_DISPLAY}`}
              className="hidden lg:block nav-link"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 12,
                letterSpacing: "0.1em",
              }}
            >
              {PHONE_DISPLAY}
            </a>
            <MobileNavToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
