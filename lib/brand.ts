/**
 * Brand color tokens. Single source for tailwind.config.ts and for the
 * image routes (icon, opengraph-image) that cannot read Tailwind classes.
 * Values from docs/BRAND_BIBLE.md section 5. Keep app/globals.css in sync.
 */
export const brand = {
  navy: "#162333",
  navyDeep: "#0E1826",
  navySoft: "#243449",
  gold: "#F0CB46",
  goldDark: "#D4AE2A",
  cream: "#F6F5F0",
  creamDim: "#E8E6DE",
} as const;
