import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
};

/** The site's one call to action, styled consistently everywhere it appears. */
export function CtaLink({ href, children, variant = "solid" }: Props) {
  const external = href.startsWith("http");
  const className =
    variant === "solid"
      ? "inline-block rounded bg-gold px-6 py-3 font-medium text-navy-deep hover:bg-gold-dark"
      : "inline-block rounded border border-cream/40 px-6 py-3 font-medium text-cream hover:border-cream";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
