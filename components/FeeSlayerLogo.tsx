import Link from "next/link";

interface FeeSlayerLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function FeeSlayerLogo({ variant = "dark", className = "" }: FeeSlayerLogoProps) {
  const isLight = variant === "light";
  const feeColor = isLight ? "#F5F0E8" : "#0D1B2A";
  const slayersColor = "#C8922A";

  return (
    <Link href="/" className={`flex items-center gap-0 font-bold tracking-tight select-none ${className}`}>
      <span style={{ color: feeColor }} className="text-2xl">
        Fee
      </span>
      <span style={{ color: slayersColor }} className="text-2xl">
        Slayers
      </span>
    </Link>
  );
}
