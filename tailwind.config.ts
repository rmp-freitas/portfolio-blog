import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", '"Courier New"', "monospace"],
      },
      colors: {
        canvas:  "var(--color-canvas)",
        surface: "var(--color-surface)",
        wire:    "var(--color-wire)",
        ink:     "var(--color-ink)",
        dim:     "var(--color-dim)",
        accent:  "var(--color-accent)",
      },
      animation: {
        "fade-up":  "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "blink":    "blink 1.2s step-end infinite",
        "copy-pop": "copyPop 0.35s cubic-bezier(0.34, 1.4, 0.64, 1) both",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        copyPop: {
          "0%":   { opacity: "0.6", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
