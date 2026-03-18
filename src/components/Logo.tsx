"use client";

interface LogoProps {
  variant?: "inline" | "stacked";
  theme?: "dark" | "light";
  size?: "nav" | "standard" | "hero";
}

const sizeConfig = {
  nav: {
    fontSize: 32,
    pipeWidth: 2,
    pipeHeight: 38,
    pipeMargin: "0 4px",
    letterSpacing: "-0.02em",
    taglineSize: 8,
    taglineSpacing: "0.25em",
    taglineOpacity: 0.7,
    taglineMarginTop: 0,
  },
  standard: {
    fontSize: 48,
    pipeWidth: 2,
    pipeHeight: 56,
    pipeMargin: "0 4px",
    letterSpacing: "-0.02em",
    taglineSize: 9,
    taglineSpacing: "0.35em",
    taglineOpacity: 0.7,
    taglineMarginTop: 10,
  },
  hero: {
    fontSize: 72,
    pipeWidth: 3,
    pipeHeight: 84,
    pipeMargin: "0 5px",
    letterSpacing: "-0.02em",
    taglineSize: 11,
    taglineSpacing: "0.4em",
    taglineOpacity: 0.8,
    taglineMarginTop: 12,
  },
};

export default function Logo({
  variant = "inline",
  theme = "dark",
  size = "standard",
}: LogoProps) {
  const config = sizeConfig[size];
  const wordmarkColor = theme === "dark" ? "#1a1a18" : "#f5f0e8";
  const taglineColor =
    theme === "dark" ? "#8a6f4e" : "rgba(201, 169, 110, 0.7)";

  const wordmark = (
    <span
      className="flex items-center"
      style={{
        fontFamily: "var(--font-body), Montserrat, sans-serif",
        fontWeight: 200,
        fontSize: config.fontSize,
        letterSpacing: config.letterSpacing,
        color: wordmarkColor,
        lineHeight: 1,
      }}
    >
      steel
      <span
        className="inline-block flex-shrink-0"
        style={{
          width: config.pipeWidth,
          height: config.pipeHeight,
          background: "#c9a96e",
          margin: config.pipeMargin,
        }}
      />
      r
    </span>
  );

  const tagline = (
    <span
      style={{
        fontFamily: "var(--font-body), Montserrat, sans-serif",
        fontWeight: 300,
        fontSize: config.taglineSize,
        letterSpacing: config.taglineSpacing,
        textTransform: "uppercase" as const,
        color: taglineColor,
        opacity: config.taglineOpacity,
      }}
    >
      Bespoke Entrance Doors
    </span>
  );

  if (variant === "stacked") {
    return (
      <div className="flex flex-col items-center">
        {wordmark}
        <div style={{ marginTop: config.taglineMarginTop }}>{tagline}</div>
      </div>
    );
  }

  // Inline variant
  return (
    <div className="flex items-center gap-3">
      {wordmark}
      <span
        className="hidden sm:block"
        style={{
          width: 1,
          height: config.pipeHeight * 0.5,
          background: "rgba(201, 169, 110, 0.3)",
        }}
      />
      <span className="hidden sm:block">{tagline}</span>
    </div>
  );
}
