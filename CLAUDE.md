# FeeSlayers website: working instructions

You are building the marketing site for FeeSlayers Inc. (US). Read
`docs/BRAND_BIBLE.md` in full before writing any page. The bible is the source of
truth. If this file and the bible disagree, the bible wins.

## Non-negotiables

1. **No invented numbers.** Every price, percentage, lender count, loan range or
   date must already exist in `docs/BRAND_BIBLE.md` and be exported from
   `lib/site-config.ts`. If a figure is missing, leave a `TODO(primo):` comment
   and move on. Do not estimate.
2. **US only.** No mention of Canada, feeslayer.ca, Nuvei, French, or a Canadian
   entity anywhere on the site.
3. **Public vs quote-on-call.** Only figures under `pricing.public` may appear on
   a page. Everything under `pricing.quoteOnCall` stays off the site.
4. **Do not name the advertising agency.** It is subcontracted under FeeSlayers
   and presented as a FeeSlayers service.
5. **Compliance lines are verbatim.** Use the strings in `legal` from
   `lib/site-config.ts` exactly. Do not reword them to sound better.
6. **Positioning.** FeeSlayers is a business development company, not a credit
   card processor. Lead with what brings the shop new revenue (found, called,
   closed) and land on payments as the thing that protects the margin.

## Audience and voice

Written for a shop owner between jobs, on a phone, not for a CFO. Plain verbs,
sentence case, short sentences, no jargon. Say what a thing does before saying
why it is good. Never open a section with a tracked-out all-caps label.

## Stack

Next.js 15 (App Router), TypeScript, Tailwind. No CMS, no UI kit, no animation
library unless a specific need justifies it. Static where possible.

- `lib/site-config.ts` holds all facts and copy constants
- `components/` holds shared UI
- `app/api/chat/route.ts` is a stub for the chatbot, phase 2, leave it alone
- Brand tokens live in `tailwind.config.ts` and `app/globals.css`. Never hardcode
  a hex value in a component.

## Build order

Work one page at a time. Do not scaffold every route at once.

1. Home
2. Services overview, then one page per service line
3. The Ultimate Payment Stack offer page
4. About and contact
5. Privacy policy and terms
6. Metadata, sitemap, robots, OG images
7. Chatbot widget (blocked until the site is live)

Stop after each page and ask for a review before starting the next.

## Design direction

The palette is navy, gold and cream, carried over from existing collateral.
Spend the boldness in one place per page rather than decorating every section.
Avoid the generic tells: identical rounded cards for every block, a soft grey
shadow under everything, fade-up entrances on each section, arrows appended to
button text, and numbered markers on content that is not actually a sequence.

Quality floor, unannounced: responsive to mobile, visible keyboard focus,
reduced motion respected, real contrast on gold over navy, and no layout shift
on load.

## Every page needs

- One clear next action. The site exists to book calls and capture leads.
- A phone number that is tappable on mobile.
- Copy a shop owner would actually say out loud.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass before any commit
```
