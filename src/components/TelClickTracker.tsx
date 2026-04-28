"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Global click-to-call tracker.
 *
 * Listens once at document level for any click on an `<a href="tel:...">` link
 * and fires a GA4 `phone_click` event. Captures click-to-call across every
 * tel: link on the site (Nav desktop + mobile menu, Footer, QuickEnquiry CTA,
 * area pages, lookbook, contact page, etc.) without needing per-component
 * onClick handlers.
 *
 * Why this exists: bespoke steel door buyers convert overwhelmingly by phone,
 * not form. Without this, GA4 records zero conversions even when leads are
 * arriving by phone, which makes channel attribution impossible.
 *
 * Renders nothing. Mounted once at the root of the layout alongside
 * GoogleAnalytics. The listener is removed on unmount, although in practice
 * the component never unmounts because the layout is the persistent shell.
 *
 * Event shape:
 *   phone_click {
 *     phone_number: "08008611450"            // digits only, no spaces
 *     source: "<page-path>"                  // e.g. "/areas/cobham"
 *     link_text: "0800 861 1450"             // visible text of the link
 *   }
 */
export default function TelClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest("a[href^='tel:']") as HTMLAnchorElement | null;
      if (!link) return;
      if (typeof window === "undefined" || typeof window.gtag !== "function") return;

      const href = link.getAttribute("href") || "";
      const phoneNumber = href.replace(/^tel:/, "").replace(/\s+/g, "");
      const linkText = (link.textContent || "").trim().slice(0, 120);
      const source = window.location.pathname;

      window.gtag("event", "phone_click", {
        phone_number: phoneNumber,
        source,
        link_text: linkText,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
