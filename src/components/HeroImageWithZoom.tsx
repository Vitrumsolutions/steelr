"use client";

/**
 * HeroImageWithZoom — client component for the door detail page hero.
 *
 * Two responsibilities:
 *
 * 1. Click-to-zoom. The hero image is a button. On click it opens a fixed
 *    full-screen modal with the natural-ratio image scaled to fit the
 *    viewport. Backdrop click, close button, and Escape key all dismiss
 *    the modal. While open, body scroll is locked.
 *
 * 2. Optional aspect-ratio crop. Most doors render at natural aspect via
 *    the default w-full h-auto layout. A handful (the newest six, defined
 *    in doors.ts doorHeroAspect) are shot at a much taller natural ratio
 *    that produces a hero nearly twice as tall as the visual rhythm of
 *    the older doors. For these, the container becomes a fixed-aspect
 *    box and object-cover + objectPosition crops to the door body.
 *
 * The component is wholly self-contained: no global state, no router
 * dependencies, no portal mount. Hydrates on top of the SSR'd document
 * structure of the door detail page.
 */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  /** When set, overrides the natural-ratio hero with a fixed box. */
  heroAspectRatio?: string;
  /** CSS object-position used when heroAspectRatio is set. */
  objectPosition?: string;
  /** Skip Next.js image optimization (raw JPG). */
  unoptimized?: boolean;
}

export default function HeroImageWithZoom({
  src,
  alt,
  heroAspectRatio,
  objectPosition = "center top",
  unoptimized,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const heroBox = heroAspectRatio ? (
    <div
      className="img-zoom relative overflow-hidden rounded-[4px] bg-[#ede8df] w-full"
      style={{ aspectRatio: heroAspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={80}
        priority
        unoptimized={unoptimized}
        className="object-cover rounded-[4px]"
        style={{ objectPosition }}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  ) : (
    <div
      className="img-zoom relative overflow-hidden rounded-[4px] bg-[#ede8df]"
      style={{ minHeight: 400 }}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1600}
        quality={80}
        priority
        unoptimized={unoptimized}
        className="w-full h-auto rounded-[4px]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[4px]"
        aria-label={`Open larger view of ${alt}`}
      >
        {heroBox}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${alt}`}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] bg-site-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center cursor-default"
          >
            {/* Plain <img> rather than next/image. Two reasons:
                1. Lazy loading: next/image's IntersectionObserver does not
                   fire reliably on a freshly-mounted, 0x0-collapsed element
                   inside a just-opened fixed-position modal. The image
                   sits with src set but never loads.
                2. The modal shows the full natural-ratio photo at viewport
                   scale, so the optimizer's responsive variants give no
                   meaningful benefit here. The raw JPG is what we want. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="eager"
              decoding="async"
              className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-[4px]"
            />
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close expanded view"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 flex items-center justify-center rounded-full bg-cream/90 hover:bg-cream transition-colors text-site-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontSize: 24, fontWeight: 200 }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      )}
    </>
  );
}
