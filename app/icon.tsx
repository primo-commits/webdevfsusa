import { ImageResponse } from "next/og";
import { poppins } from "@/lib/og-font";
import { brand } from "@/lib/brand";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 6,
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: -1,
        }}
      >
        <span style={{ color: brand.cream }}>F</span>
        <span style={{ color: brand.gold }}>S</span>
      </div>
    ),
    { ...size, fonts: [await poppins(700)] }
  );
}
