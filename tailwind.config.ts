import type { Config } from "tailwindcss";
import { brand } from "./lib/brand";

// Brand tokens live in lib/brand.ts and app/globals.css. Do not hardcode hex values in components.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: brand.navy,
          deep: brand.navyDeep,
          soft: brand.navySoft,
        },
        gold: {
          DEFAULT: brand.gold,
          dark: brand.goldDark,
        },
        cream: {
          DEFAULT: brand.cream,
          dim: brand.creamDim,
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
