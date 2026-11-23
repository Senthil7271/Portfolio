import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0B0B0A",
          secondary: "#141411",
          elevated: "#1D1C17",
        },
        electric: {
          yellow: "#FACC15",
          deep: "#EAB308",
          amber: "#D4A017",
          white: "#FFFDF5",
          dim: "rgba(250, 204, 21, 0.12)",
          // Aliases to avoid breakage in any existing classes
          blue: "#EAB308",
          cyan: "#FACC15",
          glow: "rgba(250, 204, 21, 0.2)",
        },
        surface: {
          DEFAULT: "#141411",
          elevated: "#1D1C17",
          highlight: "#26251E",
          border: "#34332A",
        },
        text: {
          primary: "#F5F1E6",
          secondary: "#A6A397",
          muted: "#6B695E",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "circuit-trace": "circuitTrace 4s ease-in-out infinite",
        "chip-rotate": "chipRotate 25s linear infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
        circuitTrace: {
          "0%": { strokeDashoffset: "100%" },
          "50%": { strokeDashoffset: "0%" },
          "100%": { strokeDashoffset: "-100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
