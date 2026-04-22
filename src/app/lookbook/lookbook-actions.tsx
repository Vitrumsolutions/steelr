"use client";

/**
 * Client-side action island for the Lookbook.
 *
 * Adds a print/save-as-PDF trigger at the foot of the page, and a share button.
 * Kept tiny so the rest of the page stays a server component for SSR/SEO.
 */
export default function LookbookActions() {
  return (
    <div className="lb-actions">
      <button
        type="button"
        className="lb-actions__btn"
        onClick={() => window.print()}
      >
        Save this lookbook as PDF
      </button>
      <button
        type="button"
        className="lb-actions__btn lb-actions__btn--ghost"
        onClick={async () => {
          const url = "https://steelr.co.uk/lookbook";
          try {
            if (navigator.share) {
              await navigator.share({
                title: "SteelR · The Lookbook",
                text: "A curated lookbook of bespoke steel entrance doors by SteelR.",
                url,
              });
            } else {
              await navigator.clipboard.writeText(url);
              alert("Link copied to clipboard");
            }
          } catch {
            /* user dismissed share sheet */
          }
        }}
      >
        Share the lookbook
      </button>
    </div>
  );
}
