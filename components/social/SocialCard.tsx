import {
  BRAND,
  ICONS,
  REGIONS,
  SAFE_AREA,
  SIZES,
  getOffer,
  type IconKey,
  type Post,
  type SizeKey,
} from "@/lib/social-posts";

/* Type scale per canvas. Square is the tightest, so it steps down a little. */
const SCALE: Record<SizeKey, number> = { square: 0.92, portrait: 1, story: 1.04 };

function Icon({ name, size, color }: { name: IconKey; size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

/** FS monogram, matching components/FeeSlayerLogo.tsx but sized for a 1080px canvas. */
function Monogram({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="8" fill={BRAND.monogramNavy} />
      <path d="M 36 0 H 44 V 8 Q 44 0 36 0 Z" fill={BRAND.monogramGold} />
      <text
        x="8"
        y="31"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={BRAND.cream}
        letterSpacing="-1"
      >
        F
      </text>
      <text
        x="23"
        y="31"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={BRAND.monogramGold}
        letterSpacing="-1"
      >
        S
      </text>
    </svg>
  );
}

function Header({ post, k }: { post: Post; k: number }) {
  const cfg = REGIONS[post.region];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 * k }}>
        <Monogram size={64 * k} />
        <span
          style={{
            fontSize: 38 * k,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: BRAND.cream }}>{cfg.wordmarkHead}</span>
          <span style={{ color: BRAND.gold }}>{cfg.wordmarkTail}</span>
        </span>
      </div>
      <span
        style={{
          fontSize: 20 * k,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "rgba(245,240,232,0.55)",
          border: "2px solid rgba(245,240,232,0.18)",
          borderRadius: 999,
          padding: `${10 * k}px ${22 * k}px`,
        }}
      >
        {cfg.label}
      </span>
    </div>
  );
}

function Footer({ post, k, note }: { post: Post; k: number; note?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 * k }}>
      <div style={{ height: 2, background: "rgba(245,240,232,0.12)" }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            fontSize: 26 * k,
            fontWeight: 600,
            color: BRAND.gold,
            letterSpacing: "0.02em",
          }}
        >
          {BRAND.site}
        </span>
        {note ? (
          <span
            style={{
              fontSize: 19 * k,
              color: "rgba(245,240,232,0.32)",
              textAlign: "right",
              maxWidth: 620 * k,
            }}
          >
            {note}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function Pill({ children, k }: { children: React.ReactNode; k: number }) {
  return (
    <span
      style={{
        alignSelf: "flex-start",
        background: BRAND.gold,
        color: BRAND.navy,
        fontSize: 22 * k,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        borderRadius: 999,
        padding: `${12 * k}px ${28 * k}px`,
      }}
    >
      {children}
    </span>
  );
}

function Overview({ post, k }: { post: Post; k: number }) {
  const cfg = REGIONS[post.region];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 34 * k }}>
      <Pill k={k}>{cfg.overview.badge}</Pill>

      <h1
        style={{
          margin: 0,
          fontSize: 78 * k,
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: "-0.03em",
          color: BRAND.cream,
        }}
      >
        {cfg.overview.headline[0]}
        <br />
        <span style={{ color: BRAND.gold }}>{cfg.overview.headline[1]}</span>
      </h1>

      <p
        style={{
          margin: 0,
          fontSize: 32 * k,
          lineHeight: 1.4,
          color: "rgba(245,240,232,0.6)",
          maxWidth: 820 * k,
        }}
      >
        {cfg.overview.sub}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 * k, marginTop: 8 * k }}>
        {cfg.offers.map((offer) => (
          <div key={offer.id} style={{ display: "flex", alignItems: "center", gap: 24 * k }}>
            <div
              style={{
                width: 68 * k,
                height: 68 * k,
                flexShrink: 0,
                borderRadius: 18 * k,
                background: "rgba(200,146,42,0.14)",
                border: "1px solid rgba(200,146,42,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name={offer.icon} size={34 * k} color={BRAND.gold} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 * k }}>
              <span style={{ fontSize: 33 * k, fontWeight: 700, color: BRAND.cream, letterSpacing: "-0.01em" }}>
                {offer.title}
              </span>
              <span style={{ fontSize: 25 * k, color: "rgba(245,240,232,0.5)", lineHeight: 1.3 }}>
                {offer.line}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfferCard({ post, k }: { post: Extract<Post, { kind: "offer" }>; k: number }) {
  const offer = getOffer(post.region, post.offerId);
  if (!offer) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 38 * k }}>
      <div
        style={{
          width: 128 * k,
          height: 128 * k,
          borderRadius: 32 * k,
          background: "rgba(200,146,42,0.14)",
          border: "2px solid rgba(200,146,42,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={offer.icon} size={64 * k} color={BRAND.gold} />
      </div>

      <Pill k={k}>{offer.badge}</Pill>

      <h1
        style={{
          margin: 0,
          fontSize: 82 * k,
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: "-0.03em",
          color: BRAND.cream,
          maxWidth: 900 * k,
        }}
      >
        {offer.title}
      </h1>

      <p
        style={{
          margin: 0,
          fontSize: 36 * k,
          lineHeight: 1.45,
          color: "rgba(245,240,232,0.62)",
          maxWidth: 880 * k,
        }}
      >
        {offer.desc}
      </p>
    </div>
  );
}

export default function SocialCard({ post, size }: { post: Post; size: SizeKey }) {
  const { w, h } = SIZES[size];
  const pad = SAFE_AREA[size];
  const k = SCALE[size];
  const cfg = REGIONS[post.region];

  return (
    <div
      id="card"
      style={{
        width: w,
        height: h,
        position: "relative",
        overflow: "hidden",
        background: BRAND.navy,
        fontFamily: "Inter, system-ui, sans-serif",
        lineHeight: 1.25,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: `${pad.top}px ${pad.x}px ${pad.bottom}px`,
        boxSizing: "border-box",
      }}
    >
      {/* Ambient gold glow, flattened from the hero treatment on the site */}
      <div
        style={{
          position: "absolute",
          top: -260,
          right: -200,
          width: 760,
          height: 760,
          borderRadius: "50%",
          background: "rgba(200,146,42,0.13)",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -280,
          left: -240,
          width: 680,
          height: 680,
          borderRadius: "50%",
          background: "rgba(26,46,66,0.85)",
          filter: "blur(140px)",
          pointerEvents: "none",
        }}
      />
      {/* Gold rule along the top edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          background: `linear-gradient(90deg, ${BRAND.gold}, ${BRAND.goldLight}, ${BRAND.goldDark})`,
        }}
      />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 0 }}>
        <Header post={post} k={k} />
      </div>

      <div style={{ position: "relative" }}>
        {post.kind === "overview" ? <Overview post={post} k={k} /> : <OfferCard post={post} k={k} />}
      </div>

      <div style={{ position: "relative" }}>
        <Footer post={post} k={k} note={post.kind === "overview" ? cfg.disclaimer : undefined} />
      </div>
    </div>
  );
}
