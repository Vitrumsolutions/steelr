import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { GerdaDesign } from "@/data/gerda-designs";

/**
 * Shared presentational pieces for the Gerda collection (/gerda-doors and its
 * three range pages). Server components only: nothing here ships client JS.
 *
 * Type sizes are a step up from the bespoke collection pages (15px body at
 * weight 300, 11px eyebrows in the darker brown) because these pages carry
 * specification tables that have to be read, not just glanced at.
 */

const BODY_FONT = "var(--font-body), Montserrat, sans-serif";
const DISPLAY_FONT = "var(--font-display), 'Cormorant Garamond', serif";

export const INK = "#1a1a18";
export const BROWN = "#6b5a42";
export const GOLD = "#c9a96e";
export const HAIRLINE = "rgba(201,169,110,0.25)";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className="mb-4"
      style={{
        fontFamily: BODY_FONT,
        fontWeight: 500,
        fontSize: 11,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: light ? GOLD : BROWN,
      }}
    >
      {children}
    </p>
  );
}

export function Display({
  as: Tag = "h2",
  children,
  light = false,
  size = "md",
  className = "",
}: {
  as?: "h1" | "h2" | "h3" | "p";
  children: ReactNode;
  light?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const fontSize =
    size === "lg" ? "clamp(32px, 4.4vw, 52px)" : size === "md" ? "clamp(26px, 3.2vw, 38px)" : "clamp(20px, 2.2vw, 26px)";
  return (
    <Tag
      className={className}
      style={{ fontFamily: DISPLAY_FONT, fontWeight: 300, fontSize, lineHeight: 1.15, color: light ? "#f5f0e8" : INK }}
    >
      {children}
    </Tag>
  );
}

export function Body({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={className}
      style={{
        fontFamily: BODY_FONT,
        fontWeight: 300,
        fontSize: 15,
        lineHeight: 1.85,
        color: light ? "rgba(245,240,232,0.82)" : BROWN,
      }}
    >
      {children}
    </p>
  );
}

export function Banner({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 240, background: INK, paddingTop: 96, paddingBottom: 40 }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,169,110,0.06) 50%, transparent 60%)" }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16" style={{ height: 1, background: "rgba(201,169,110,0.3)" }} />
      <div className="relative text-center px-6">
        <p
          style={{
            fontFamily: BODY_FONT,
            fontWeight: 400,
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: 12,
          }}
        >
          {eyebrow}
        </p>
        <p style={{ fontFamily: DISPLAY_FONT, fontWeight: 300, fontSize: "clamp(30px, 4.6vw, 52px)", color: "#f5f0e8", lineHeight: 1.12 }}>
          {title}
        </p>
      </div>
    </section>
  );
}

export function Breadcrumbs({ trail }: { trail: Array<{ href?: string; label: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream px-6 md:px-16 py-1.5" style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}>
      <ol role="list" className="max-w-7xl mx-auto flex flex-wrap items-center gap-2" style={{ listStyle: "none", margin: "0 auto", padding: 0 }}>
        {trail.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-2">
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="link-gold-underline inline-block py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1a18]"
                style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 12, color: "#7a5f2a", letterSpacing: "0.04em" }}
              >
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 12, color: BROWN, letterSpacing: "0.04em" }}>
                {crumb.label}
              </span>
            )}
            {i < trail.length - 1 && (
              <span aria-hidden="true" style={{ color: "rgba(107,90,66,0.5)", fontSize: 12 }}>
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Label / value pairs. Renders as a definition list so the pairing is real markup, not two stacked paragraphs. */
export function FactGrid({ facts, columns = 2 }: { facts: Array<{ label: string; value: string }>; columns?: 2 | 3 }) {
  return (
    <dl className={`grid grid-cols-1 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-x-8 gap-y-5`} style={{ margin: 0 }}>
      {facts.map((f) => (
        <div key={f.label} style={{ borderTop: `1px solid ${HAIRLINE}`, paddingTop: 12 }}>
          <dt style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: BROWN }}>
            {f.label}
          </dt>
          <dd style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 15, color: INK, margin: "4px 0 0", lineHeight: 1.5 }}>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function SpecTable({
  caption,
  head,
  rows,
  minWidth = 0,
}: {
  caption: string;
  head: string[];
  rows: string[][];
  /** Width below which the table scrolls sideways inside its box. Leave at 0
   * for tables that should simply fit (three short columns fit a 320px phone). */
  minWidth?: number;
}) {
  return (
    <div className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1a18]" tabIndex={0} role="region" aria-label={caption}>
      <table className="w-full" style={{ borderCollapse: "collapse", minWidth, fontFamily: BODY_FONT }}>
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={h}
                scope="col"
                style={{
                  textAlign: "left",
                  padding: "12px 16px 12px 0",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: i === 0 ? BROWN : INK,
                  borderBottom: `1px solid ${INK}`,
                  verticalAlign: "bottom",
                  lineHeight: 1.4,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((cell, i) =>
                i === 0 ? (
                  <th
                    key={i}
                    scope="row"
                    style={{ textAlign: "left", padding: "12px 16px 12px 0", fontWeight: 400, fontSize: 13, color: BROWN, borderBottom: `1px solid ${HAIRLINE}`, verticalAlign: "top" }}
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={i} style={{ padding: "12px 16px 12px 0", fontWeight: 400, fontSize: 14, color: INK, borderBottom: `1px solid ${HAIRLINE}`, verticalAlign: "top", lineHeight: 1.5 }}>
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Design references SR3, SR4 and SR5 (the Tromso designs) are hidden on
 * purpose: elsewhere on this site SR3 and SR4 mean LPS 1175 security ratings,
 * and printing them beside a door would read as a security claim.
 */
function showRef(code: string) {
  return code !== "Hawkstone" && !/^SR\d$/.test(code);
}

export function DesignGrid({ designs }: { designs: GerdaDesign[] }) {
  return (
    <ul role="list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8" style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {designs.map((d) => (
        <li key={d.code}>
          <div className="rounded-[3px] overflow-hidden" style={{ background: "#ffffff", border: `1px solid ${HAIRLINE}`, padding: "14px 14px 0" }}>
            <Image
              src={d.img}
              alt={`Gerda ${d.name} door design, ${d.series} series`}
              width={d.w}
              height={d.h}
              unoptimized
              loading="lazy"
              className="block mx-auto"
              style={{ width: "100%", maxWidth: 150, height: "auto" }}
            />
          </div>
          <p style={{ fontFamily: BODY_FONT, fontWeight: 500, fontSize: 13, color: INK, marginTop: 10, lineHeight: 1.3 }}>{d.name}</p>
          {showRef(d.code) && (
            <p style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 11, color: BROWN, letterSpacing: "0.08em", marginTop: 2 }}>Ref {d.code}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <div>
      {faqs.map((f) => (
        <div key={f.question} style={{ borderTop: `1px solid ${HAIRLINE}`, padding: "24px 0" }}>
          <h3 style={{ fontFamily: DISPLAY_FONT, fontWeight: 400, fontSize: "clamp(19px, 2vw, 23px)", color: INK, lineHeight: 1.3, marginBottom: 10 }}>
            {f.question}
          </h3>
          <Body>{f.answer}</Body>
        </div>
      ))}
    </div>
  );
}

export function GoldButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="btn-cta inline-block transition-colors duration-300 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1a18]"
      style={{
        background: GOLD,
        color: INK,
        fontFamily: BODY_FONT,
        fontWeight: 500,
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        padding: "15px 34px",
      }}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="link-gold-underline inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1a18]"
      style={{ fontFamily: BODY_FONT, fontWeight: 400, fontSize: 13, color: INK, letterSpacing: "0.04em", padding: "14px 0" }}
    >
      {children} <span aria-hidden="true">&nbsp;&rarr;</span>
    </Link>
  );
}
