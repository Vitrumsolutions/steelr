"use client";

import { useEffect } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

/** Tracked CTA link — call from the closing section. */
export function TrackedLink({
  href,
  event,
  className,
  children,
  external = false,
}: {
  href: string;
  event: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const onClick = () => track(event);
  if (external) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * Client-side action island for the Lookbook.
 *
 * Renders three share buttons (WhatsApp, Generic Share, Save as PDF)
 * and also wires up scroll-depth tracking via Vercel Analytics custom events.
 */
export default function LookbookActions() {
  // Scroll depth tracking — fires once per 25% bucket (25/50/75/100)
  useEffect(() => {
    const buckets = [25, 50, 75, 100];
    const fired = new Set<number>();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const viewport = window.innerHeight;
      const total = document.body.scrollHeight - viewport;
      if (total <= 0) return;
      const pct = Math.min(100, Math.round((scrollTop / total) * 100));
      for (const b of buckets) {
        if (pct >= b && !fired.has(b)) {
          fired.add(b);
          track("lookbook_scroll_depth", { depth: b });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LOOKBOOK_URL = "https://steelr.co.uk/lookbook";
  const SHARE_TEXT =
    "Take a look at our current lookbook. Forty installed steel entrance doors.";

  const handleWhatsApp = () => {
    track("lookbook_share_whatsapp");
    const message = encodeURIComponent(`${SHARE_TEXT} ${LOOKBOOK_URL}`);
    // wa.me opens WhatsApp app on mobile, WhatsApp Web on desktop
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleGenericShare = async () => {
    track("lookbook_share_generic");
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: "SteelR · The Lookbook",
          text: SHARE_TEXT,
          url: LOOKBOOK_URL,
        });
      } else if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(LOOKBOOK_URL);
        alert("Link copied to clipboard");
      }
    } catch {
      /* user dismissed share sheet — not an error */
    }
  };

  const handlePrint = () => {
    track("lookbook_print_pdf");
    window.print();
  };

  return (
    <div className="lb-actions">
      <button type="button" className="lb-actions__btn lb-actions__btn--whatsapp" onClick={handleWhatsApp}>
        Send via WhatsApp
      </button>
      <button type="button" className="lb-actions__btn" onClick={handleGenericShare}>
        Share the link
      </button>
      <button type="button" className="lb-actions__btn lb-actions__btn--ghost" onClick={handlePrint}>
        Save as PDF
      </button>
    </div>
  );
}
