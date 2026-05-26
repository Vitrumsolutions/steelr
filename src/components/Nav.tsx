import Link from "next/link";
import NavScrollState from "./NavScrollState";
import NavMobileMenu from "./NavMobileMenu";

const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/areas", label: "Areas" },
  { href: "/architects", label: "Specifiers" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

// Server Component. Renders the static nav markup directly to HTML so no
// nav-bar JavaScript is shipped in the initial page bundle on first paint.
// Two thin client children handle the only genuinely interactive bits:
//   - <NavScrollState />: invisible. Watches the hero element via
//     IntersectionObserver and toggles `body[data-scrolled]` so CSS rules in
//     globals.css can flip the nav theme from transparent/light to cream/dark.
//   - <NavMobileMenu />: the hamburger button plus the full-screen overlay
//     menu. Owns the open/close state and the keyboard focus trap.
//
// The previous version of this file was a single ~310-line client component
// where every colour binding read React state. The split is the perf-recovery
// spec's Phase 2.
export default function Nav() {
  return (
    <>
      <NavScrollState />
      <nav className="nav-bar fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link href="/" aria-label="SteelR home">
            {/* Inline logo, hand-rolled so the theme can be driven by CSS
             * data-attr selectors on <body> rather than a React prop. Matches
             * the Logo component's `variant="inline" size="nav"` configuration
             * exactly: 32px wordmark, 2x38 gold pipe, 8px tagline.
             */}
            <div className="flex items-center gap-3">
              <span
                className="flex items-center"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 200,
                  fontSize: 32,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                <span className="nav-bar-wordmark">steel</span>
                <span
                  className="inline-block flex-shrink-0"
                  style={{
                    width: 2,
                    height: 38,
                    background: "#c9a96e",
                    margin: "0 4px",
                  }}
                />
                <span className="nav-bar-wordmark">r</span>
              </span>
              <span
                className="hidden sm:block"
                style={{
                  width: 1,
                  height: 19,
                  background: "rgba(201, 169, 110, 0.3)",
                }}
              />
              <span
                className="nav-bar-tagline hidden sm:block"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 8,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                }}
              >
                Bespoke Entrance Doors
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-bar-link link-gold-underline"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone (hidden below lg) + Hamburger (handled by NavMobileMenu) */}
          <div className="flex items-center gap-6">
            <a
              href="tel:08008611450"
              aria-label="Call SteelR on 0800 861 1450"
              className="nav-bar-phone hidden lg:block"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 12,
                letterSpacing: "0.1em",
              }}
            >
              0800 861 1450
            </a>

            <NavMobileMenu navLinks={navLinks} />
          </div>
        </div>
      </nav>
    </>
  );
}
