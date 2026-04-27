"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { navLinks, PHONE_HREF, PHONE_DISPLAY } from "./nav-data";

const OVERLAY_ID = "mobile-nav-overlay";

/**
 * Mobile-only client island. Handles:
 *  - hamburger toggle (animated 3-line → X)
 *  - full-screen overlay open/close with fade transition
 *  - body scroll lock while open
 *  - Escape-to-close
 *  - focus management (first link on open, return to trigger on close)
 *  - focus trap (Tab/Shift+Tab cycle inside overlay)
 *
 * Renders nothing on >=lg viewports (CSS `lg:hidden`). The overlay portals
 * into <body> so its `position: fixed` is anchored to the viewport, not a
 * containing block created by `backdrop-filter` higher up the tree.
 *
 * Reads colour via the `data-scrolled` attribute on <body> (set by
 * NavScrollState) so the hamburger lines match the surrounding nav state
 * without re-implementing the scroll listener inside this component.
 */
export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);
  // Portal mount guard — createPortal needs document.body, only available
  // client-side. Setting `mounted` after first render avoids hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((p) => !p), []);

  /** Escape closes overlay */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  /** Body scroll lock while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** Focus first link on open, return to trigger on close (not initial mount). */
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      const first = overlayRef.current?.querySelector<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    } else if (wasOpenRef.current) {
      triggerRef.current?.focus();
    }
  }, [open]);

  /** Focus trap: keep Tab / Shift+Tab cycling inside overlay while open. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] nav-hamburger"
        onClick={toggle}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={OVERLAY_ID}
        data-open={open ? "true" : "false"}
      >
        <span
          className="block w-5 h-[1px] nav-hamburger-line"
          style={{
            transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
            transition:
              "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
          }}
        />
        <span
          className="block w-5 h-[1px] nav-hamburger-line"
          style={{
            opacity: open ? 0 : 1,
            transform: open ? "scaleX(0)" : "scaleX(1)",
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        />
        <span
          className="block w-5 h-[1px] nav-hamburger-line"
          style={{
            transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
            transition:
              "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
          }}
        />
      </button>

      {/* Portal overlay into <body> so its `position: fixed` is anchored to
          the viewport, not a parent with `backdrop-filter` (which becomes a
          containing block for fixed descendants on iOS Safari + Chromium). */}
      {mounted &&
        createPortal(
          <div
            ref={overlayRef}
            id={OVERLAY_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center lg:hidden"
            onClick={close}
            style={{
              background: "#0a0a09",
              opacity: open ? 1 : 0,
              pointerEvents: open ? "auto" : "none",
              transition: "opacity 500ms ease",
              paddingTop: "96px",
              paddingBottom: "64px",
            }}
            aria-hidden={!open}
            inert={!open}
          >
            <div
              className="flex flex-col items-center gap-6 sm:gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  className="transition-opacity duration-300"
                  style={{
                    fontFamily:
                      "var(--font-display), 'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: 26,
                    color: "#f5f0e8",
                    letterSpacing: "0.05em",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: open ? `${i * 80}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_HREF}
                aria-label={`Call SteelR on ${PHONE_DISPLAY}`}
                tabIndex={open ? 0 : -1}
                className="mt-12"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 16,
                  letterSpacing: "0.15em",
                  color: "#c9a96e",
                }}
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
