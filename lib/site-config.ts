/**
 * Single source of truth for facts and figures used on the site.
 * Rule: no number appears in a component unless it comes from here,
 * and no number lands here unless it is in docs/BRAND_BIBLE.md.
 */

export const company = {
  legalName: "FeeSlayers Inc.",
  name: "FeeSlayers",
  market: "United States",
  address: {
    street: "74 E Glenwood Avenue, Unit 5817",
    city: "Smyrna",
    state: "DE",
    zip: "19977",
  },
  phone: "(302) 520-5447",
  email: "info@feeslayers.com",
  url: "https://www.feeslayers.com",
  leadMagnet: "https://merchants.feeslayers.com",
  booking: "https://api.leadconnectorhq.com/widget/booking/6Y4RUBqnucK62JXW4J8A",
  tagline: "More Customers. More Capital. More Growth.",
} as const;

/** Hero strip under the headline, in the order given by primo. */
export const heroServices = [
  "Payments",
  "Consumer Financing",
  "Business Funding",
  "Google Visibility",
  "Advertising",
] as const;

/** Named publicly on purpose: shows the shop who is behind each service. */
export const partners = {
  consumerFinancing: "Flexxbuy",
  businessCapital: "CashBuoy",
  paymentProcessing: "MiCamp Solutions",
} as const;

/** Ordered deliberately: revenue first, margin protection last. */
export const services = [
  {
    slug: "google-presence",
    name: "Google presence",
    promise: "Get the shop found when someone searches nearby.",
    detail:
      "Google Business Profile setup and optimization for the map pack, plus ongoing review generation and management.",
  },
  {
    slug: "advertising",
    name: "Advertising and marketing",
    promise: "Get the phone ringing.",
    detail:
      "Paid campaigns built and run for the shop, managed monthly. Billed per campaign.",
  },
  {
    slug: "consumer-financing",
    name: "Consumer financing",
    promise: "Give customers a way to say yes to the big ticket.",
    detail:
      "A lender network behind every estimate, so a large repair does not turn into a declined job.",
  },
  {
    slug: "payment-processing",
    name: "Payment processing",
    promise: "Keep the full ticket once the sale is made.",
    detail:
      "A compliant cash discount program, so processing costs stop coming out of the margin.",
  },
  {
    slug: "business-capital",
    name: "Business capital",
    promise: "Funding for the shop itself.",
    detail:
      "Merchant cash advances underwritten off business statements, not credit score.",
  },
] as const;

/**
 * PUBLIC = safe to publish on the site.
 * QUOTE  = say it on a call, do not print it. Listed here so Claude Code
 *          never invents a number to fill a gap, but keep it off pages.
 */
export const pricing = {
  public: {
    ultimateStack: {
      name: "The Ultimate Payment Stack",
      price: "$99/month",
      includes: [
        "Consumer financing for your customers",
        "0% cost processing through a compliant cash discount program",
        "Clover Flex terminal placement included, no lease",
      ],
    },
    googlePresence: {
      name: "Google presence",
      note: "First 30 days free for clients on another FeeSlayers service.",
    },
  },
  quoteOnCall: {
    googlePresence: "$200/month, kept off the site per primo",
    financingStandalone: "Setup plus annual membership, first year billed together",
    financingFundingFee: "Funding fee applies only on funded loans",
    advertising: "Monthly management fee per campaign",
  },
} as const;

export const financing = {
  lenderNetwork: "35+ lenders",
  loanRange: "$1,000 to $100,000",
  decision: "Decisions in seconds",
  funding: "Funding as soon as the next business day",
  risk: "The lender carries the default risk, not the shop",
  processingImpact: "Works alongside whatever processing the shop already has",
} as const;

export const businessCapital = {
  range: "$2,500 to $250,000",
  monthlyRevenue: "$5,000/month gross revenue",
  creditRequirement: "No credit score requirement",
  funding: "Funding as fast as 24 hours",
} as const;

export const audience = {
  primary: [
    "Auto repair shops",
    "Tire centers",
    "Collision shops",
    "Mobile mechanics",
    "Detailers",
  ],
  secondary: ["Home services contractors"],
} as const;

/** Use verbatim. Do not paraphrase compliance language. */
export const legal = {
  financingDisclosure:
    "Financing is provided by third-party lenders. Approval, terms and rates depend on the applicant and are set by the lender.",
  cashDiscount:
    "Cash discount programs are implemented to comply with card brand rules and applicable state law.",
  notALender: "FeeSlayers is not a lender and does not make credit decisions.",
} as const;
