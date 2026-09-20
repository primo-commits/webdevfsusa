import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SocialCard from "@/components/social/SocialCard";
import { POSTS, SIZES, getPost, type SizeKey } from "@/lib/social-posts";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/** Pre-render every card so the generator never waits on a cold compile. */
export function generateStaticParams() {
  return POSTS.flatMap((post) =>
    (Object.keys(SIZES) as SizeKey[]).map((size) => ({ post: post.id, size })),
  );
}

export default async function OgCardPage({
  params,
}: {
  params: Promise<{ post: string; size: string }>;
}) {
  const { post: postId, size } = await params;
  const post = getPost(postId);
  if (!post || !(size in SIZES)) notFound();

  return (
    <div style={{ display: "inline-block" }}>
      <SocialCard post={post} size={size as SizeKey} />
    </div>
  );
}
