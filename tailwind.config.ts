import type { Config } from "tailwindcss";

// Brand tokens live here and in app/globals.css. Do not hardcode hex values in components.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#162333",
          deep: "#0E1826",
          soft: "#243449",
        },
        gold: {
          DEFAULT: "#F0CB46",
          dark: "#D4AE2A",
        },
        cream: {
          DEFAULT: "#F6F5F0",
          dim: "#E8E6DE",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
