/**
 * Renders every Instagram / Facebook post image in lib/social-posts.ts.
 *
 *   npm run social
 *
 * Boots the Next dev server (unless one is already reachable), screenshots each
 * /og/<post>/<size> route with Chromium, and writes PNGs to public/social/.
 * Because the cards are real pages in this app, the images can never drift from
 * the brand tokens in tailwind.config.ts — they are rendered from them.
 *
 * Env:
 *   SOCIAL_BASE_URL   use an already-running server instead of spawning one
 *   SOCIAL_PORT       port for the spawned dev server (default 3111)
 */
import { spawn, type ChildProcess } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium, type Browser } from "playwright";
import { POSTS, REGIONS, SIZES, getOffer, type SizeKey } from "../lib/social-posts";

const PORT = Number(process.env.SOCIAL_PORT ?? 3111);
const BASE_URL = process.env.SOCIAL_BASE_URL ?? `http://127.0.0.1:${PORT}`;
const OUT_DIR = path.join(process.cwd(), "public", "social");
const SIZE_KEYS = Object.keys(SIZES) as SizeKey[];

async function isUp(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
    return res.ok || res.status === 404;
  } catch {
    return false;
  }
}

async function waitForServer(url: string, timeoutMs = 120_000): Promise<void> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await isUp(url)) return;
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Dev server never became reachable at ${url}`);
}

async function startServer(): Promise<ChildProcess | null> {
  if (await isUp(BASE_URL)) {
    console.log(`→ reusing server at ${BASE_URL}`);
    return null;
  }
  console.log(`→ starting next dev on port ${PORT}`);
  const child = spawn("npx", ["next", "dev", "-p", String(PORT)], {
    stdio: ["ignore", "ignore", "inherit"],
    env: process.env,
  });
  await waitForServer(BASE_URL);
  return child;
}

async function launchBrowser(): Promise<Browser> {
  const proxyUrl = process.env.HTTPS_PROXY ?? process.env.https_proxy;
  // Normally Playwright finds its own browser (`npx playwright install chromium`).
  // SOCIAL_CHROMIUM points at an existing Chromium instead, for CI images that
  // ship one already.
  const executablePath = process.env.SOCIAL_CHROMIUM;
  return chromium.launch({
    ...(executablePath ? { executablePath } : {}),
    args: ["--font-render-hinting=none", "--force-color-profile=srgb"],
    // The proxy is needed to reach fonts.googleapis.com, but the dev server is
    // local — without the bypass every page load would be tunnelled through it too.
    ...(proxyUrl
      ? { proxy: { server: proxyUrl, bypass: "127.0.0.1,localhost,::1" } }
      : {}),
  });
}

async function main(): Promise<void> {
  const server = await startServer();
  const browser = await launchBrowser();

  try {
    await rm(OUT_DIR, { recursive: true, force: true });
    await mkdir(OUT_DIR, { recursive: true });

    const context = await browser.newContext({
      deviceScaleFactor: 1,
      ignoreHTTPSErrors: true,
    });
    const page = await context.newPage();
    let fontWarned = false;
    const written: string[] = [];

    for (const post of POSTS) {
      for (const size of SIZE_KEYS) {
        const { w, h } = SIZES[size];
        await page.setViewportSize({ width: w, height: h });
        // Not networkidle: the dev server's HMR socket keeps the page busy forever.
        await page.goto(`${BASE_URL}/og/${post.id}/${size}`, { waitUntil: "load" });
        await page.locator("#card").waitFor({ state: "visible", timeout: 60_000 });

        // The dev-tools badge floats above the page and lands in the crop.
        await page.addStyleTag({
          content:
            "nextjs-portal,[data-next-badge-root],[data-nextjs-toast],#__next-build-watcher{display:none!important}",
        });

        // Inter comes in over the network; never shoot a fallback-font frame.
        await page.evaluate(() => document.fonts.ready);
        const hasInter = await page.evaluate(() => document.fonts.check("800 40px Inter"));
        if (!hasInter && !fontWarned) {
          fontWarned = true;
          console.warn(
            "⚠ Inter did not load — images will render in a fallback font. " +
              "Check network access to fonts.googleapis.com.",
          );
        }

        const file = path.join(OUT_DIR, `${post.id}-${size}.png`);
        await page.locator("#card").screenshot({ path: file });
        written.push(path.relative(process.cwd(), file));
        console.log(`  ✓ ${post.id}-${size}.png  (${w}×${h})`);
      }
    }

    await writeFile(path.join(OUT_DIR, "README.md"), buildReadme(), "utf8");
    console.log(`\nDone — ${written.length} images in public/social/`);
  } finally {
    await browser.close();
    server?.kill("SIGTERM");
  }
}

/** A plain index of what each file is, plus a starting caption per post. */
function buildReadme(): string {
  const lines: string[] = [
    "# Social post images",
    "",
    "Generated — do not edit by hand. Change the copy in `lib/social-posts.ts`",
    "or the layout in `components/social/SocialCard.tsx`, then run `npm run social`.",
    "Preview them in a browser at `/og` while the dev server is running.",
    "",
    "## Sizes",
    "",
    ...SIZE_KEYS.map((s) => `- **${s}** — ${SIZES[s].w}×${SIZES[s].h}. ${SIZES[s].label}`),
    "",
    "No third-party company is named in any of these images.",
    "",
  ];

  for (const region of ["us", "ca"] as const) {
    const cfg = REGIONS[region];
    lines.push(`## ${cfg.wordmarkHead}${cfg.wordmarkTail} — ${cfg.label}`, "");
    for (const post of POSTS.filter((p) => p.region === region)) {
      const title =
        post.kind === "overview"
          ? "Everything we offer (lead post)"
          : (getOffer(region, post.offerId)?.title ?? post.id);
      lines.push(
        `### ${title}`,
        "",
        `Files: ${SIZE_KEYS.map((s) => `\`${post.id}-${s}.png\``).join(", ")}`,
        "",
      );
    }
  }

  return lines.join("\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
