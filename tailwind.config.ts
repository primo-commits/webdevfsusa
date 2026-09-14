import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          deep: "#060F18",
          soft: "#1A2E42",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          light: "#FAF7F2",
          dark: "#E8DFD0",
        },
        gold: {
          DEFAULT: "#C8922A",
          light: "#D4A84B",
          dark: "#A67620",
        },
        sage: "#7A9E7E",
        rust: "#B85C38",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
