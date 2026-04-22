"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Thin client-only tracking component.
 *
 * Fires GA4 `generate_lead` conversion event if `window.gtag` is present.
 * SteelR hasn't installed GA4 yet (per CLAUDE.md) — this component will
 * no-op silently until it is. That means the moment gtag lands site-wide,
 * every thank-you page view will attribute a lead with source/context
 * without any further code change.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function ThankYouTracking() {
  const params = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const source = params.get("source") || "direct";
    const context = params.get("context") || "";

    // Fire GA4 generate_lead (gracefully no-ops if gtag not installed)
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        currency: "GBP",
        value: 1,
        lead_source: source,
        lead_context: context,
      });
    }

    // Also push to dataLayer for GTM-based setups (same graceful no-op if absent)
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "generate_lead",
        lead_source: source,
        lead_context: context,
      });
    }
  }, [params]);

  return null;
}
