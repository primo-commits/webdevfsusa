import Link from "next/link";

interface FeeSlayerLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showText?: boolean;
}

export default function FeeSlayerLogo({ variant = "dark", className = "", showText = true }: FeeSlayerLogoProps) {
  const isLight = variant === "light";
  const bgColor = isLight ? "#F9F6F1" : "#1B3A5C";
  const textColor = isLight ? "#F5F0E8" : "#0D1B2A";
  const gold = "#C9A84C";

  return (
    <Link href="/" className={`flex items-center gap-3 select-none ${className}`}>
      {/* FS Monogram SVG */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="FeeSlayers FS Monogram"
      >
        {/* Navy background hexagon-ish rounded square */}
        <rect width="44" height="44" rx="8" fill="#1B3A5C" />

        {/* Gold top-right accent corner */}
        <path d="M 36 0 H 44 V 8 Q 44 0 36 0 Z" fill="#C9A84C" />

        {/* F — white/cream */}
        <text
          x="8"
          y="31"
          fontFamily="'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill={isLight ? "#1B3A5C" : "#F5F0E8"}
          letterSpacing="-1"
        >
          F
        </text>

        {/* S — gold */}
        <text
          x="23"
          y="31"
          fontFamily="'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill="#C9A84C"
          letterSpacing="-1"
        >
          S
        </text>
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className={`flex items-baseline gap-0 font-bold tracking-tight ${isLight ? "text-white" : "text-[#0D1B2A]"}`}>
          <span style={{ color: isLight ? "#F5F0E8" : textColor }} className="text-xl">
            Fee
          </span>
          <span style={{ color: gold }} className="text-xl">
            Slayers
          </span>
        </span>
      )}
    </Link>
  );
}
