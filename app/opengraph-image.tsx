import { ImageResponse } from "next/og";
import { company } from "@/lib/site-config";
import { poppins } from "@/lib/og-font";
import { brand } from "@/lib/brand";

export const alt = `${company.name}: get found, get called, get the yes.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: brand.navyDeep,
          color: brand.cream,
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
          <span style={{ color: brand.cream }}>Fee</span>
          <span style={{ color: brand.gold }}>Slayers</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.15, maxWidth: 1040 }}>
            Get found, get called, get the yes.
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: brand.gold }}>{company.phone}</div>
        </div>
      </div>
    ),
    { ...size, fonts: [await poppins(600), await poppins(700)] }
  );
}
