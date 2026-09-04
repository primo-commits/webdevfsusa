import { company } from "@/lib/site-config";

/**
 * Text wordmark: "Fee" in navy (or cream on dark), "Slayers" in gold.
 * Matches public/logo.svg, which is the same mark with text as paths.
 */
export function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="font-bold tracking-tight" aria-label={company.name}>
      <span className={onDark ? "text-cream" : "text-navy"}>Fee</span>
      <span className="text-gold">Slayers</span>
    </span>
  );
}
