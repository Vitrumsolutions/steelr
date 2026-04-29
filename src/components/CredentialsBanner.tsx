import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const credentials = [
  "PAS 24 Certified",
  "BS EN 1627 RC4",
  "Single Leaf Unglazed",
  "Secured by Design",
  "FD30S Fire Rated",
  "ISO 9001 Certified",
  "UK Manufactured",
];

/**
 * Dark horizontal credentials strip — drop between any two sections.
 * Links to /security-specification for PAS 24 detail.
 */
export function CredentialsStrip() {
  return (
    <section className="bg-site-black py-7 px-6 md:px-16 overflow-x-auto">
      <div className="flex items-center justify-center gap-4 md:gap-8 min-w-max mx-auto">
        {credentials.map((cred, i) => (
          <span key={cred} className="flex items-center gap-4 md:gap-8">
            <span
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(245, 240, 232, 0.5)",
                whiteSpace: "nowrap",
              }}
            >
              {cred}
            </span>
            {i < credentials.length - 1 && (
              <span
                className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "#c9a96e" }}
              />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}

/**
 * Certification callout block on cream/light backgrounds.
 * Shows PAS 24, BS EN 1627 RC4, Secured by Design, FD30S with a brief explainer
 * and link to the full security specification page.
 */
export function CertificationCallout() {
  return (
    <section
      style={{ background: "#ede8df" }}
      className="ribbon-bg py-16 md:py-24 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ScrollReveal direction="left">
          <div>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#b8943f",
              }}
            >
              Certification &amp; Compliance
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily:
                  "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "#1a1a18",
                lineHeight: 1.15,
              }}
            >
              PAS 24 certified. BS EN 1627:2011 RC4.
              <br />
              Secured by Design approved.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: 1.9,
                color: "#6b5a42",
              }}
            >
              Every Steelr entrance door exceeds the PAS 24 security standard
              mandated by Approved Document Q for all new-build dwellings. Our
              doors are independently tested to BS EN 1627:2011 RC4 single leaf,
              unglazed — the European framework for sustained forced-entry
              resistance. All doors carry FD30S fire and smoke certification as
              standard.
            </p>
            <Link
              href="/security-specification"
              className="inline-block mt-8 link-gold-underline"
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "#1a1a18",
                letterSpacing: "0.05em",
              }}
            >
              View full PAS 24 compliance specification &rarr;
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "BS EN 1627 RC4", sub: "Single leaf, unglazed" },
              { label: "PAS 24:2022", sub: "Approved Document Q" },
              { label: "FD30S", sub: "Fire & Smoke Rated" },
              { label: "Secured by Design", sub: "Police Preferred Spec" },
            ].map((cert) => (
              <div
                key={cert.label}
                className="p-5 rounded-[4px]"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(201,169,110,0.12)",
                }}
              >
                <span
                  className="block mb-1"
                  style={{
                    fontFamily:
                      "var(--font-display), 'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: 22,
                    color: "#c9a96e",
                    lineHeight: 1.2,
                  }}
                >
                  {cert.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body), Montserrat, sans-serif",
                    fontWeight: 400,
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#6b5a42",
                  }}
                >
                  {cert.sub}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
