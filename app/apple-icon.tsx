import { ImageResponse } from "next/og";
import { poppins } from "@/lib/og-font";
import { brand } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.navy,
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: 112,
          letterSpacing: -6,
        }}
      >
        <span style={{ color: brand.cream }}>F</span>
        <span style={{ color: brand.gold }}>S</span>
      </div>
    ),
    { ...size, fonts: [await poppins(700)] }
  );
}
