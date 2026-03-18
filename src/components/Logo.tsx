"use client";

interface LogoProps {
  variant?: "inline" | "stacked";
  theme?: "dark" | "light";
  size?: "nav" | "standard" | "hero";
}

const sizeConfig = {
  nav: {
    fontSize: 22,
    pipeHeight: 26,
    taglineSize: 7,
    taglineSpacing: "0.2em",
    taglineOpacity: 0.7,
  },
  standard: {
    fontSize: 48,
    pipeHeight: 52,
    taglineSize: 7,
    taglineSpacing: "0.2em",
    taglineOpacity: 0.6,
  },
  hero: {
    fontSize: 72,
    pipeHeight: 78,
    taglineSize: 8,
    taglineSpacing: "0.25em",
    taglineOpacity: 0.65,
  },
};

export default function Logo({
  variant = "inline",
  theme = "dark",
  size = "standard",
}: LogoProps) {
  const config = sizeConfig[size];
  const wordmarkColor = theme === "dark" ? "#1a1a18" : "#f5f0e8";
  const taglineBaseColor = theme === "dark" ? "#8a6f4e" : "#c9a96e";

  const wordmark = (
    <span
      className="flex items-center"
      style={{
        fontFamily: "var(--font-body), Montserrat, sans-serif",
        fontWeight: 200,
        fontSize: config.fontSize,
        letterSpacing: "-0.03em",
        color: wordmarkColor,
        lineHeight: 1,
      }}
    >
      steel
      <span
        className="inline-block flex-shrink-0"
        style={{
          width: 1.5,
          height: config.pipeHeight,
          background: "#c9a96e",
          margin: "0 3px 0 2px",
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
        color: taglineBaseColor,
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
        <div className="mt-2">{tagline}</div>
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
          height: config.pipeHeight * 0.6,
          background: taglineBaseColor,
          opacity: 0.3,
        }}
      />
      <span className="hidden sm:block">{tagline}</span>
    </div>
  );
}
