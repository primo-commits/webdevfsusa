import {
  BRAND,
  ICONS,
  REGIONS,
  SAFE_AREA,
  SIZES,
  THEMES,
  getOffer,
  type IconKey,
  type Post,
  type SizeKey,
  type Theme,
} from "@/lib/social-posts";

/* Type scale per canvas. Square is the tightest, so it steps down a little. */
const SCALE: Record<SizeKey, number> = { square: 0.84, portrait: 1, story: 1.04 };

type Palette = (typeof THEMES)[Theme];

function Icon({
  name,
  size,
  color,
  weight = 1.6,
}: {
  name: IconKey;
  size: number;
  color: string;
  weight?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={weight}
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

function Header({ post, k, c }: { post: Post; k: number; c: Palette }) {
  const cfg = REGIONS[post.region];
  // The tag names both markets on every card — the wordmark carries the region.
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 * k }}>
        <Monogram size={64 * k} />
        <span style={{ fontSize: 38 * k, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1 }}>
          <span style={{ color: c.wordmarkHead }}>{cfg.wordmarkHead}</span>
          <span style={{ color: c.accent }}>{cfg.wordmarkTail}</span>
        </span>
      </div>
      <span
        style={{
          fontSize: 20 * k,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: c.inkFaint,
          border: `2px solid ${c.pillBorder}`,
          borderRadius: 999,
          padding: `${10 * k}px ${22 * k}px`,
        }}
      >
        {BRAND.markets}
      </span>
    </div>
  );
}

/**
 * feeslayers.com and the tagline sit on every card — one site serves both
 * markets, so the footer says so. `note` carries any regional small print.
 */
function Footer({ k, c, note }: { k: number; c: Palette; note?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 * k }}>
      <div style={{ height: 2, background: c.rule }} />
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24 * k }}>
        <span style={{ fontSize: 26 * k, fontWeight: 700, color: c.accent, letterSpacing: "0.01em" }}>
          {BRAND.site}
        </span>
        <span
          style={{
            fontSize: 20 * k,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: c.inkFaint,
            whiteSpace: "nowrap",
          }}
        >
          {BRAND.tagline}
        </span>
      </div>
      {note ? (
        <span style={{ fontSize: 19 * k, color: c.inkFaint, opacity: 0.75, lineHeight: 1.35 }}>{note}</span>
      ) : null}
    </div>
  );
}

function Pill({ children, k, c }: { children: React.ReactNode; k: number; c: Palette }) {
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

function IconTile({ name, k, c, size = 68 }: { name: IconKey; k: number; c: Palette; size?: number }) {
  return (
    <div
      style={{
        width: size * k,
        height: size * k,
        flexShrink: 0,
        borderRadius: size * k * 0.26,
        background: c.tileBg,
        border: `2px solid ${c.tileBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon name={name} size={size * k * 0.5} color={c.accent} />
    </div>
  );
}

function Overview({ post, k, c }: { post: Post; k: number; c: Palette }) {
  const cfg = REGIONS[post.region];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 34 * k }}>
      <Pill k={k} c={c}>{cfg.overview.badge}</Pill>

      <h1
        style={{
          margin: 0,
          fontSize: 78 * k,
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: "-0.03em",
          color: c.ink,
        }}
      >
        {cfg.overview.headline[0]}
        <br />
        <span style={{ color: c.accent }}>{cfg.overview.headline[1]}</span>
      </h1>

      <p style={{ margin: 0, fontSize: 32 * k, lineHeight: 1.4, color: c.inkMuted, maxWidth: 820 * k }}>
        {cfg.overview.sub}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 * k, marginTop: 8 * k }}>
        {cfg.offers.map((offer) => (
          <div key={offer.id} style={{ display: "flex", alignItems: "center", gap: 24 * k }}>
            <IconTile name={offer.icon} k={k} c={c} />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 * k }}>
              <span style={{ fontSize: 33 * k, fontWeight: 700, color: c.ink, letterSpacing: "-0.01em" }}>
                {offer.title}
              </span>
              <span style={{ fontSize: 25 * k, color: c.inkMuted, lineHeight: 1.3 }}>{offer.line}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OfferCard({ post, k, c }: { post: Extract<Post, { kind: "offer" }>; k: number; c: Palette }) {
  const offer = getOffer(post.region, post.offerId);
  if (!offer) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 38 * k }}>
      <IconTile name={offer.icon} k={k} c={c} size={128} />
      <Pill k={k} c={c}>{offer.badge}</Pill>
      <h1
        style={{
          margin: 0,
          fontSize: 82 * k,
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: "-0.03em",
          color: c.ink,
          maxWidth: 900 * k,
        }}
      >
        {offer.title}
      </h1>
      <p style={{ margin: 0, fontSize: 36 * k, lineHeight: 1.45, color: c.inkMuted, maxWidth: 880 * k }}>
        {offer.desc}
      </p>
    </div>
  );
}

/**
 * Paid ad creative for the 2-week advertising trial. Built to be read in the
 * time it takes to scroll past: one big claim, the catch, three proof points,
 * one destination.
 */
function TrialCard({ post, k, c }: { post: Post; k: number; c: Palette }) {
  const { trial } = REGIONS[post.region];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 * k }}>
      <Pill k={k} c={c}>{trial.badge}</Pill>

      <h1
        style={{
          margin: 0,
          fontSize: 92 * k,
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.035em",
          color: c.ink,
        }}
      >
        {trial.headline[0]}
        <br />
        {trial.headline[1]}
        <br />
        <span style={{ color: c.accent }}>{trial.headline[2]}</span>
      </h1>

      {/* The catch, stated up front — it is the whole offer. */}
      <div
        style={{
          alignSelf: "flex-start",
          display: "flex",
          alignItems: "center",
          gap: 18 * k,
          background: c.tileBg,
          border: `2px solid ${c.tileBorder}`,
          borderRadius: 20 * k,
          padding: `${20 * k}px ${28 * k}px`,
        }}
      >
        <Icon name="coin" size={36 * k} color={c.accent} />
        <span style={{ fontSize: 34 * k, fontWeight: 700, color: c.ink, letterSpacing: "-0.01em" }}>
          {trial.hook}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 * k }}>
        {trial.points.map((point) => (
          <div key={point} style={{ display: "flex", alignItems: "center", gap: 16 * k }}>
            <Icon name="check" size={32 * k} color={c.accent} weight={2.6} />
            <span style={{ fontSize: 31 * k, color: c.inkMuted }}>{point}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 * k, marginTop: 4 * k }}>
        <span
          style={{
            alignSelf: "flex-start",
            background: BRAND.gold,
            color: BRAND.navy,
            fontSize: 28 * k,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            borderRadius: 14 * k,
            padding: `${20 * k}px ${32 * k}px`,
          }}
        >
          {trial.cta}
        </span>
        <span style={{ fontSize: 22 * k, color: c.inkFaint }}>{trial.fine}</span>
      </div>
    </div>
  );
}

export default function SocialCard({ post, size }: { post: Post; size: SizeKey }) {
  const { w, h } = SIZES[size];
  const pad = SAFE_AREA[size];
  const k = SCALE[size];
  const c = THEMES[post.theme];
  const cfg = REGIONS[post.region];

  return (
    <div
      id="card"
      style={{
        width: w,
        height: h,
        position: "relative",
        overflow: "hidden",
        background: c.bg,
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
          background: c.glow,
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
          background: c.wash,
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

      <div style={{ position: "relative" }}>
        <Header post={post} k={k} c={c} />
      </div>

      <div style={{ position: "relative" }}>
        {post.kind === "overview" ? (
          <Overview post={post} k={k} c={c} />
        ) : post.kind === "trial" ? (
          <TrialCard post={post} k={k} c={c} />
        ) : (
          <OfferCard post={post} k={k} c={c} />
        )}
      </div>

      <div style={{ position: "relative" }}>
        <Footer k={k} c={c} note={post.kind === "overview" ? cfg.disclaimer : undefined} />
      </div>
    </div>
  );
}
