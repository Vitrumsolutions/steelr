"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/gallery/steelr-gallery-01.jpg", alt: "Bespoke steel entrance door installation 1", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-02.jpg", alt: "Bespoke steel entrance door installation 2", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-03.jpg", alt: "Bespoke steel entrance door installation 3", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-04.jpg", alt: "Bespoke steel entrance door installation 4", style: "Double Doors" },
  { src: "/images/gallery/steelr-gallery-05.jpg", alt: "Bespoke steel entrance door installation 5", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-06.jpg", alt: "Bespoke steel entrance door installation 6", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-07.jpg", alt: "Bespoke steel entrance door installation 7", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-08.jpg", alt: "Bespoke steel entrance door installation 8", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-09.jpg", alt: "Bespoke steel entrance door installation 9", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-10.jpg", alt: "Bespoke steel entrance door installation 10", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-11.jpg", alt: "Bespoke steel entrance door installation 11", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-12.jpg", alt: "Bespoke steel entrance door installation 12", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-13.jpg", alt: "Bespoke steel entrance door installation 13", style: "Double Doors" },
  { src: "/images/gallery/steelr-gallery-14.jpg", alt: "Bespoke steel entrance door installation 14", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-15.jpg", alt: "Bespoke steel entrance door installation 15", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-16.jpg", alt: "Bespoke steel entrance door installation 16", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-17.jpg", alt: "Bespoke steel entrance door installation 17", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-18.jpg", alt: "Bespoke steel entrance door installation 18", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-19.jpg", alt: "Bespoke steel entrance door installation 19", style: "Double Doors" },
  { src: "/images/gallery/steelr-gallery-20.jpg", alt: "Bespoke steel entrance door installation 20", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-21.jpg", alt: "Bespoke steel entrance door installation 21", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-22.jpg", alt: "Bespoke steel entrance door installation 22", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-23.jpg", alt: "Bespoke steel entrance door installation 23", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-24.jpg", alt: "Bespoke steel entrance door installation 24", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-25.jpg", alt: "Bespoke steel entrance door installation 25", style: "Double Doors" },
  { src: "/images/gallery/steelr-gallery-26.jpg", alt: "Bespoke steel entrance door installation 26", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-27.jpg", alt: "Bespoke steel entrance door installation 27", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-28.jpg", alt: "Bespoke steel entrance door installation 28", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-29.jpg", alt: "Bespoke steel entrance door installation 29", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-30.jpg", alt: "Bespoke steel entrance door installation 30", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-31.jpg", alt: "Bespoke steel entrance door installation 31", style: "Double Doors" },
  { src: "/images/gallery/steelr-gallery-32.jpg", alt: "Bespoke steel entrance door installation 32", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-33.jpg", alt: "Bespoke steel entrance door installation 33", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-34.jpg", alt: "Bespoke steel entrance door installation 34", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-35.jpg", alt: "Bespoke steel entrance door installation 35", style: "Contemporary" },
  { src: "/images/gallery/steelr-gallery-36.jpg", alt: "Bespoke steel entrance door installation 36", style: "Traditional" },
  { src: "/images/gallery/steelr-gallery-37.jpeg", alt: "Bespoke steel entrance door installation 37", style: "Contemporary" },
];

const filters = ["All", "Contemporary", "Traditional", "Double Doors"];

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.style === activeFilter);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigate = useCallback(
    (dir: number) => {
      if (lightbox === null) return;
      const next = lightbox + dir;
      if (next >= 0 && next < filtered.length) setLightbox(next);
    },
    [lightbox, filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, navigate]);

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/hero/steelr-hero-01.jpg"
          alt="SteelR door collection hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,9,0.4), rgba(10,10,9,0.7))",
          }}
        />
        <div className="absolute inset-0 flex items-end p-8 md:p-16 z-10">
          <h1
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#f5f0e8",
              lineHeight: 1.1,
            }}
          >
            The Collection
          </h1>
        </div>
      </section>

      {/* Filter bar */}
      <div
        className="sticky top-[73px] z-30 bg-cream border-b px-6 md:px-16 py-4"
        style={{ borderColor: "rgba(201, 169, 110, 0.15)" }}
      >
        <div className="flex items-center gap-6 md:gap-10 max-w-7xl mx-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="transition-all duration-300 pb-1"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: activeFilter === f ? "#c9a96e" : "rgba(26, 26, 24, 0.4)",
                borderBottom:
                  activeFilter === f
                    ? "1px solid #c9a96e"
                    : "1px solid transparent",
                background: "none",
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <section className="bg-cream py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className="img-zoom relative aspect-[3/4] cursor-pointer group"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-site-black/0 group-hover:bg-site-black/60 transition-all duration-500 flex flex-col items-center justify-end p-8 opacity-0 group-hover:opacity-100">
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: 12,
                    color: "#f5f0e8",
                    letterSpacing: "0.05em",
                  }}
                >
                  {img.alt}
                </p>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:bg-cream"
                  style={{
                    background: "#c9a96e",
                    color: "#1a1a18",
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "10px 24px",
                    display: "inline-block",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(10, 10, 9, 0.95)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 z-50 transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 200,
              fontSize: 12,
              color: "rgba(245, 240, 232, 0.6)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
            onClick={closeLightbox}
          >
            Close
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 transition-opacity hover:opacity-70"
              style={{
                color: "rgba(245, 240, 232, 0.5)",
                fontSize: 32,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
            >
              &#8249;
            </button>
          )}

          {/* Next */}
          {lightbox < filtered.length - 1 && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 transition-opacity hover:opacity-70"
              style={{
                color: "rgba(245, 240, 232, 0.5)",
                fontSize: 32,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
            >
              &#8250;
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
