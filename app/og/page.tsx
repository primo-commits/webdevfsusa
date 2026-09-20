import Link from "next/link";
import type { Metadata } from "next";
import { POSTS, REGIONS, SIZES, type SizeKey } from "@/lib/social-posts";

export const metadata: Metadata = {
  title: "Social post previews",
  robots: { index: false, follow: false },
};

/**
 * Contact sheet for the generated Instagram / Facebook images.
 * Not linked from the site — it exists so copy and layout can be checked in a
 * real browser before `npm run social` renders the PNGs.
 */
export default function OgIndexPage() {
  const sizes = Object.keys(SIZES) as SizeKey[];

  return (
    <main style={{ padding: "48px 32px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 30, fontWeight: 800, marginBottom: 8 }}>Social post previews</h1>
      <p style={{ color: "#555", marginBottom: 32 }}>
        {POSTS.length} posts × {sizes.length} sizes. Run <code>npm run social</code> to render them
        into <code>public/social/</code>.
      </p>

      {POSTS.map((post) => (
        <div key={post.id} style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            {post.id}{" "}
            <span style={{ fontWeight: 400, color: "#777" }}>
              — {REGIONS[post.region].label}
            </span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {sizes.map((size) => (
              <Link
                key={size}
                href={`/og/${post.id}/${size}`}
                style={{ color: "#C8922A", textDecoration: "underline" }}
              >
                {size} ({SIZES[size].w}×{SIZES[size].h})
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
