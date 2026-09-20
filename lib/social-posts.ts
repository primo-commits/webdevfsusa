/**
 * Source of truth for the static Instagram / Facebook post images.
 *
 * These are brand-awareness posts: they say what we offer, region by region.
 * Rules baked in here on purpose:
 *   - No partner or third-party company is ever named in a post image.
 *   - US is "FeeSlayers" and runs a cash discount program.
 *   - Canada is "FeeSlayer" and runs a compliant surcharge program.
 * Copy is kept short enough to stay legible in a phone-sized feed thumbnail.
 */

export type Region = "us" | "ca";
export type SizeKey = "square" | "portrait" | "story";

export const BRAND = {
  navy: "#0D1B2A",
  navyDeep: "#060F18",
  navySoft: "#1A2E42",
  cream: "#F5F0E8",
  creamLight: "#FAF7F2",
  creamDark: "#E8DFD0",
  gold: "#C8922A",
  goldLight: "#D4A84B",
  goldDark: "#A67620",
  /* Monogram tones, matched to components/FeeSlayerLogo.tsx */
  monogramNavy: "#1B3A5C",
  monogramGold: "#C9A84C",
  site: "feeslayers.com",
  /** One site serves both markets — it goes on the footer of every card. */
  tagline: "Two countries. One website.",
} as const;

export type Theme = "navy" | "cream";

/** Two colourways drawn from the same tokens, for feed variety and ad A/B tests. */
export const THEMES: Record<
  Theme,
  {
    bg: string;
    ink: string;
    inkMuted: string;
    inkFaint: string;
    accent: string;
    wordmarkHead: string;
    rule: string;
    pillBorder: string;
    tileBg: string;
    tileBorder: string;
    glow: string;
    wash: string;
  }
> = {
  navy: {
    bg: BRAND.navy,
    ink: BRAND.cream,
    inkMuted: "rgba(245,240,232,0.62)",
    inkFaint: "rgba(245,240,232,0.34)",
    accent: BRAND.gold,
    wordmarkHead: BRAND.cream,
    rule: "rgba(245,240,232,0.14)",
    pillBorder: "rgba(245,240,232,0.18)",
    tileBg: "rgba(200,146,42,0.14)",
    tileBorder: "rgba(200,146,42,0.3)",
    glow: "rgba(200,146,42,0.13)",
    wash: "rgba(26,46,66,0.85)",
  },
  cream: {
    bg: BRAND.cream,
    ink: BRAND.navy,
    // Gold is too light for body copy on cream, so text accents step down a shade.
    inkMuted: "rgba(13,27,42,0.66)",
    inkFaint: "rgba(13,27,42,0.4)",
    accent: BRAND.goldDark,
    wordmarkHead: BRAND.navy,
    rule: "rgba(13,27,42,0.14)",
    pillBorder: "rgba(13,27,42,0.2)",
    tileBg: "rgba(200,146,42,0.16)",
    tileBorder: "rgba(166,118,32,0.4)",
    glow: "rgba(200,146,42,0.22)",
    wash: "rgba(232,223,208,0.9)",
  },
};

/** Canvas sizes. All 1080 wide so one type scale reads correctly across the set. */
export const SIZES: Record<SizeKey, { w: number; h: number; label: string }> = {
  square: { w: 1080, h: 1080, label: "Feed square — Instagram + Facebook" },
  portrait: { w: 1080, h: 1350, label: "Feed portrait — Instagram, largest feed footprint" },
  story: { w: 1080, h: 1920, label: "Story / Reel cover — Instagram + Facebook" },
};

/** Vertical padding per size. Story keeps clear of the Instagram story UI. */
export const SAFE_AREA: Record<SizeKey, { top: number; bottom: number; x: number }> = {
  square: { top: 72, bottom: 72, x: 80 },
  portrait: { top: 96, bottom: 96, x: 84 },
  story: { top: 300, bottom: 340, x: 88 },
};

/** Stroke icon paths, lifted from the icon set already used on the site. */
export const ICONS = {
  search:
    "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  megaphone:
    "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  card:
    "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  coin:
    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  trend:
    "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  check:
    "M5 13l4 4L19 7",
} as const;

export type IconKey = keyof typeof ICONS;

export interface Offer {
  /** Slug used in the generated filename. */
  id: string;
  icon: IconKey;
  /** Card headline. */
  title: string;
  /** Gold pill above the headline. */
  badge: string;
  /** One-line summary, used in the overview grid. */
  line: string;
  /** Body copy for the single-offer card. */
  desc: string;
}

export interface TrialCopy {
  badge: string;
  headline: [string, string, string];
  hook: string;
  points: string[];
  cta: string;
  fine: string;
}

/**
 * The 2-week advertising trial ad. Deliberately short: this is paid creative,
 * and every extra line costs attention in the feed.
 */
const TRIAL: TrialCopy = {
  badge: "Free Trial",
  headline: ["2 weeks of", "Facebook ads,", "on us."],
  hook: "You pay only the ad budget.",
  points: [
    "We build the creative",
    "We target and optimize",
    "Leads sent straight to you",
  ],
  // The domain already sits in the footer — repeating it here reads as a slip.
  cta: "Start your free trial",
  fine: "No contracts. Cancel anytime. Setup at no cost.",
};

export interface RegionConfig {
  region: Region;
  /** "FeeSlayers" for the US, "FeeSlayer" for Canada — the two are distinct marks. */
  wordmarkHead: string;
  wordmarkTail: string;
  label: string;
  overview: {
    badge: string;
    headline: [string, string];
    sub: string;
  };
  /** Small print along the bottom edge of the overview card. */
  disclaimer: string;
  trial: TrialCopy;
  offers: Offer[];
}

const US: RegionConfig = {
  region: "us",
  wordmarkHead: "Fee",
  wordmarkTail: "Slayers",
  label: "United States",
  overview: {
    badge: "Everything we offer",
    headline: ["We do more than", "save you fees."],
    sub: "Five ways we help service businesses grow — all under one roof.",
  },
  disclaimer: "Available to US businesses. Financing subject to lender approval.",
  trial: TRIAL,
  offers: [
    {
      id: "advertising",
      icon: "megaphone",
      title: "Facebook & Meta Advertising",
      badge: "2 Weeks Free",
      line: "Campaigns run end to end. You pay only the ad budget.",
      desc: "We handle creative, targeting, optimization, and lead delivery. Your leads land in your inbox. You pay only the ad budget.",
    },
    {
      id: "google-presence",
      icon: "search",
      title: "Google Presence",
      badge: "Included",
      line: "Show up first when they search your service.",
      desc: "Google Business Profile optimization, local SEO, and search visibility — so you show up when people search for what you do in your area.",
    },
    {
      id: "payment-processing",
      icon: "coin",
      title: "Payment Processing",
      badge: "Zero Cost",
      line: "Cash discount program. Zero cost on card transactions.",
      desc: "Our cash discount program takes your card processing cost to zero. You keep the full ticket on every sale.",
    },
    {
      id: "consumer-financing",
      icon: "card",
      title: "Consumer Financing",
      badge: "Coming Soon",
      line: "$1K to $100K, decisions in seconds.",
      desc: "Help your customers say yes to big-ticket work. Financing from $1K to $100K, decisions in seconds, funding as fast as the next business day.",
    },
    {
      id: "business-capital",
      icon: "trend",
      title: "Business Capital",
      badge: "Available Now",
      line: "Underwritten off revenue, not your credit score.",
      desc: "Capital underwritten off your business revenue — not your credit score. Bridge cash flow gaps and take on bigger jobs.",
    },
  ],
};

const CA: RegionConfig = {
  region: "ca",
  wordmarkHead: "Fee",
  wordmarkTail: "Slayer",
  label: "Canada",
  overview: {
    badge: "Everything we offer",
    headline: ["We do more than", "save you fees."],
    sub: "Five ways we help Canadian service businesses grow — all under one roof.",
  },
  disclaimer: "All provinces except Quebec. Services vary by province.",
  trial: TRIAL,
  offers: [
    {
      id: "advertising",
      icon: "megaphone",
      title: "Facebook & Meta Advertising",
      badge: "2 Weeks Free",
      line: "Campaigns run end to end. You pay only the ad budget.",
      desc: "We handle creative, targeting, optimization, and lead delivery. Your leads land in your inbox. You pay only the ad budget.",
    },
    {
      id: "google-presence",
      icon: "search",
      title: "Google Presence",
      badge: "Included",
      line: "Show up first when they search your service.",
      desc: "Google Business Profile optimization, local SEO, and search visibility — so you show up when people search for what you do in your city.",
    },
    {
      id: "payment-processing",
      icon: "coin",
      title: "Payment Processing",
      badge: "Zero Cost",
      line: "Compliant surcharge program. Your customers cover the card fee.",
      desc: "A compliant, government-authorized surcharge program. Your customers pay the card fee — not you. Zero cost on card transactions.",
    },
    {
      id: "consumer-financing",
      icon: "card",
      title: "Consumer Financing",
      badge: "Available",
      line: "High-ticket estimates close faster.",
      desc: "Help your customers say yes to big-ticket jobs. We connect them to financing so your high-ticket estimates close faster.",
    },
    {
      id: "business-capital",
      icon: "trend",
      title: "Business Capital",
      badge: "Available",
      line: "Underwritten off revenue, not your credit score.",
      desc: "Business funding underwritten off your revenue — not your credit score. Bridge cash flow gaps and take on bigger jobs.",
    },
  ],
};

export const REGIONS: Record<Region, RegionConfig> = { us: US, ca: CA };

interface PostBase {
  id: string;
  region: Region;
  theme: Theme;
}

export type Post =
  | (PostBase & { kind: "overview" })
  | (PostBase & { kind: "offer"; offerId: string })
  | (PostBase & { kind: "trial" });

/**
 * Every post we generate, per region: the awareness overview, one card per
 * offer, and the advertising-trial ad in both colourways so the two can be
 * split-tested against each other.
 */
export const POSTS: Post[] = (Object.keys(REGIONS) as Region[]).flatMap((region) => [
  { id: `${region}-overview`, region, theme: "navy" as const, kind: "overview" as const },
  { id: `${region}-trial`, region, theme: "navy" as const, kind: "trial" as const },
  { id: `${region}-trial-light`, region, theme: "cream" as const, kind: "trial" as const },
  ...REGIONS[region].offers.map((offer) => ({
    id: `${region}-${offer.id}`,
    region,
    theme: "navy" as const,
    kind: "offer" as const,
    offerId: offer.id,
  })),
]);

export function getPost(id: string): Post | undefined {
  return POSTS.find((p) => p.id === id);
}

export function getOffer(region: Region, offerId: string): Offer | undefined {
  return REGIONS[region].offers.find((o) => o.id === offerId);
}
