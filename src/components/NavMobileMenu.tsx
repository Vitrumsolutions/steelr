"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface NavMobileMenuProps {
  navLinks: ReadonlyArray<NavLink>;
}

// All client-side behaviour for the mobile menu lives here so the parent
// Nav.tsx can stay a Server Component and stop shipping its static markup as
// client JS. Renders two things in sequence:
//   1. The hamburger button (visually positioned inside the nav-bar right
//      cluster by the parent grid).
//   2. The full-screen overlay menu (position: fixed inset-0, so DOM ancestry
//      does not affect layout).
//
// While the menu is open, this component also toggles `body[data-menu-open]`
// so the CSS layer in globals.css can disable pointer-events on the nav bar
// itself (so taps fall through to the menu items behind the bar) while keeping
// the hamburger interactive (so the user can still close the menu).
export default function NavMobileMenu({ navLinks }: NavMobileMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for focus management when the mobile menu opens/closes.
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const prevMenuOpenRef = useRef(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.dataset.menuOpen = "true";
      document.body.style.overflow = "hidden";
      firstMenuLinkRef.current?.focus();
    } else {
      delete document.body.dataset.menuOpen;
      document.body.style.overflow = "";
      // Only return focus to the hamburger when transitioning from open to
      // closed, not on the initial render where menuOpen has always been false.
      if (prevMenuOpenRef.current) {
        hamburgerRef.current?.focus();
      }
    }
    prevMenuOpenRef.current = menuOpen;
    return () => {
      delete document.body.dataset.menuOpen;
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Esc-to-close + Tab focus trap: standard disclosure-pattern keyboard support.
  useEffect(() => {
    if (!menuOpen) return;

    const overlay = document.getElementById("mobile-menu-overlay");
    const getFocusable = () =>
      overlay
        ? Array.from(
            overlay.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !overlay?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <button
        ref={hamburgerRef}
        className="nav-bar-hamburger lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu-overlay"
      >
        <span
          className="nav-bar-hamburger-bar block w-5 h-[1px]"
          style={{
            transform: menuOpen
              ? "rotate(45deg) translate(4px, 4px)"
              : "none",
            transition:
              "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
          }}
        />
        <span
          className="nav-bar-hamburger-bar block w-5 h-[1px]"
          style={{
            opacity: menuOpen ? 0 : 1,
            transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        />
        <span
          className="nav-bar-hamburger-bar block w-5 h-[1px]"
          style={{
            transform: menuOpen
              ? "rotate(-45deg) translate(4px, -4px)"
              : "none",
            transition:
              "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
          }}
        />
      </button>

      {/* Mobile overlay
       *
       * Layout history:
       *  - Original: `justify-center` with paddingTop:96 to clear the fixed nav.
       *    Worked while menu had 8 items.
       *  - 2026-05-10: added 9th "Specifiers" item in commit 2979e07. On
       *    iPhone SE class viewports (375x667) the 9 items + gaps + tel CTA
       *    total ~574px content but only ~507px is available after the
       *    top/bottom padding. With `justify-center`, centring overflowed
       *    content upward — first item (Collection) was clipped behind the
       *    fixed nav band.
       *  - 2026-05-11 fix: `justify-start sm:justify-center` so small
       *    viewports start the menu at the top (just below the nav), tablets
       *    keep the centred look. `overflow-y-auto` allows scroll if content
       *    still overflows. Tightened gap and tel-CTA margin on small to
       *    reclaim ~56px while keeping desktop tablet aesthetic.
       */}
      <div
        id="mobile-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        aria-hidden={!menuOpen}
        className="fixed inset-0 z-40 flex flex-col items-center justify-start sm:justify-center overflow-y-auto transition-opacity duration-500 lg:hidden"
        onClick={() => setMenuOpen(false)}
        style={{
          background: "#0a0a09",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          paddingTop: "96px",
          paddingBottom: "64px",
          // iOS Safari fix. Without these, the outer div's onClick (close-on-
          // backdrop-tap) causes iOS to treat the whole overlay as needing a
          // hover-then-click sequence. The first tap on any descendant Link
          // gets consumed by iOS hover-state simulation; the second tap fires
          // the click. cursor:pointer tells iOS the element is click-targetable
          // (skips hover delay). touch-action:manipulation skips the 300ms
          // double-tap-zoom detection window.
          cursor: "pointer",
          touchAction: "manipulation",
        }}
      >
        <div
          className="flex flex-col items-center gap-4 sm:gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              ref={i === 0 ? firstMenuLinkRef : undefined}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a96e]"
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
            aria-label="Call SteelR on 0800 861 1450"
            tabIndex={menuOpen ? 0 : -1}
            className="mt-6 sm:mt-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a96e]"
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
