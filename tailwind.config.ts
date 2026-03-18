import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f5f0e8",
        dark: "#1a1a18",
        gold: "#c9a96e",
        bronze: "#8a6f4e",
        "site-black": "#0a0a09",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ["Montserrat", "sans-serif"],
        caption: ['"Tenor Sans"', "sans-serif"],
      },
      letterSpacing: {
        wordmark: "-0.03em",
        wide: "0.2em",
        wider: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
