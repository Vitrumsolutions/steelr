"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { CredentialsStrip } from "@/components/CredentialsBanner";
import { doors } from "@/data/doors";

const galleryImages = doors.map((d) => ({
  src: d.src,
  alt: d.alt,
  style: d.style,
  slug: d.slug,
  title: d.title,
}));

const filters = ["All", "Contemporary", "Traditional", "Double Doors"];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: (i % 3) * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

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
      if (next >= 0 && next < filtered.length) {
        setDirection(dir);
        setLightbox(next);
      }
    },
    [lightbox, filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightbox, navigate]);

  return (
    <>
      {/* Page banner */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: 240, background: "#1a1a18", paddingTop: 80 }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.06) 50%, transparent 60%)",
        }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16" style={{ height: 1, background: "rgba(201,169,110,0.3)" }} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#f5f0e8",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          The Collection
        </motion.p>
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
              className="relative transition-all duration-300 pb-1"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: activeFilter === f ? "#c9a96e" : "rgba(26, 26, 24, 0.4)",
                background: "none",
                cursor: "pointer",
                border: "none",
                borderBottom: "1px solid transparent",
              }}
            >
              {f}
              {activeFilter === f && (
                <motion.div
                  layoutId="filterUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <section className="bg-cream py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="sr-only">Bespoke Steel Entrance Door Collection</h1>
          <ScrollReveal>
            <p style={{ fontFamily: "var(--font-body), Montserrat, sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.8, color: "#6b5a42", maxWidth: 640, marginBottom: 32 }}>
              Browse our full collection of bespoke steel entrance doors. Each door is manufactured to SR3 security standards and available in contemporary, traditional and double door configurations. Every design is fully customisable to your specification. Popular across{" "}
              <Link href="/areas/london" className="link-gold-underline">London</Link>, the{" "}
              <Link href="/areas" className="link-gold-underline">Home Counties</Link> and nationwide.
            </p>
          </ScrollReveal>
        </div>
        <LayoutGroup>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col"
                >
                  <div
                    className="img-zoom relative aspect-[3/4] group"
                    onClick={() => openLightbox(i)}
                  >
                    {/* Skeleton shimmer */}
                    {!imageLoaded[img.src] && (
                      <div className="absolute inset-0 skeleton-shimmer rounded-[4px]" />
                    )}
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      quality={80}
                      className={`object-cover rounded-[4px] transition-opacity duration-500 ${imageLoaded[img.src] ? "opacity-100" : "opacity-0"}`}
                      style={{ objectPosition: "center top" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onLoad={() => setImageLoaded((prev) => ({ ...prev, [img.src]: true }))}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-site-black/0 group-hover:bg-site-black/60 transition-all duration-500 flex flex-col items-center justify-end p-8 opacity-0 group-hover:opacity-100 hidden md:flex">
                      <p
                        className="mb-3"
                        style={{
                          fontFamily: "var(--font-body), Montserrat, sans-serif",
                          fontWeight: 300,
                          fontSize: 12,
                          color: "#f5f0e8",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {img.title}
                      </p>
                      <div className="flex gap-3">
                        <Link
                          href={`/collection/${img.slug}`}
                          className="btn-cta transition-colors duration-300 hover:bg-cream"
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
                          View Details
                        </Link>
                        <Link
                          href="/contact"
                          className="transition-colors duration-300 hover:text-cream inline-flex items-center"
                          style={{
                            fontFamily: "var(--font-body), Montserrat, sans-serif",
                            fontWeight: 300,
                            fontSize: 9,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "rgba(245, 240, 232, 0.7)",
                            padding: "10px 12px",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Enquire
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Door name + mobile links */}
                  <Link
                    href={`/collection/${img.slug}`}
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 300,
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: "#1a1a18",
                      padding: "10px 0 4px",
                      display: "block",
                    }}
                  >
                    {img.title}
                  </Link>
                  <div className="flex gap-4 lg:hidden">
                    <Link
                      href={`/collection/${img.slug}`}
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 300,
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#c9a96e",
                        paddingBottom: 8,
                      }}
                    >
                      View Details &rarr;
                    </Link>
                    <Link
                      href="/contact"
                      style={{
                        fontFamily: "var(--font-body), Montserrat, sans-serif",
                        fontWeight: 300,
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(26, 26, 24, 0.4)",
                        paddingBottom: 8,
                      }}
                    >
                      Enquire
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </section>

      {/* Credentials Strip */}
      <CredentialsStrip />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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

            {/* Image with swipe + crossfade */}
            <motion.div
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 80) {
                  navigate(info.offset.x > 0 ? -1 : 1);
                }
              }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={filtered[lightbox].src}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={filtered[lightbox].src}
                    alt={filtered[lightbox].alt}
                    fill
                    quality={80}
                    className="object-contain"
                    sizes="90vw"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
