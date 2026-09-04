# feeslayers-site

Marketing site for FeeSlayers Inc. (US). Next.js 15, TypeScript, Tailwind.

## First run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The home page is a scaffold placeholder on purpose.

## Before you start building

1. Replace `docs/BRAND_BIBLE.md` with the full brand bible file. Keep the name.
2. Drop the logo files into `public/` and correct the hex values in
   `docs/BRAND_BIBLE.md`, `tailwind.config.ts` and `app/globals.css`.
3. Fill in the booking link or form destination in `lib/site-config.ts`.

## Then, in Claude Code

```bash
cd feeslayers-site
claude
```

First prompt:

> Read CLAUDE.md and docs/BRAND_BIBLE.md in full. Then propose a design plan for
> the home page: palette tokens, type scale, layout concept, and the hero
> treatment. Do not write code yet.

Approve the plan, then have it build the home page. One page per session, review
each before moving on.

## Put it on GitHub

```bash
git init
git add .
git commit -m "Scaffold FeeSlayers site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/feeslayers-site.git
git push -u origin main
```

## Deploy

Import the repo at vercel.com, add the environment variables from
`.env.example`, and point the feeslayers.com DNS at it once the home page is
ready. Nothing needs a database yet.

## Layout

```
app/                Routes. app/api/chat is a stub for the phase 2 chatbot.
components/         Shared UI.
lib/site-config.ts  All facts, figures and legal lines. Single source of truth.
docs/BRAND_BIBLE.md The brand bible. Claude Code reads this first.
CLAUDE.md           Build rules and guardrails for Claude Code.
```
