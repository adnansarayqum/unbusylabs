import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        ivory: "#F7F6F2",
        cobalt: "#3563FF",
        lime: "#C8FF3D",
        coral: "#FF6B5E",
        slate: "#667085",
        border: "#D9DEE7",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        conveyor: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-6px)" },
        },
        spin_slow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spin_slow_reverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        pulse_dot: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        travel: {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(560px)", opacity: "0" },
        },
      },
      animation: {
        conveyor: "conveyor 2.4s linear infinite",
        spin_slow: "spin_slow 6s linear infinite",
        spin_slow_reverse: "spin_slow_reverse 8s linear infinite",
        pulse_dot: "pulse_dot 2.2s ease-in-out infinite",
        travel: "travel 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
