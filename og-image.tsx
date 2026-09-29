import { ImageResponse } from "next/og";
import { site } from "@/site";

/** Open Graph- ja X-jakokuva (1200 × 630), luodaan build-vaiheessa. */
export const alt = site.seoTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F5F0",
          padding: "72px 80px",
          color: "#15171A",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#15171A",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <div style={{ width: 36, height: 4, borderRadius: 2, background: "#E0612A" }} />
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 3 }}>{site.logo}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2, maxWidth: 980 }}>
            Oikea kypärä alkaa oikeasta käyttötarkoituksesta.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#5A5F66" }}>
            Kypärätyypit · Standardit · Koko- ja istuvuusopas
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {["EN 1078", "ECE R22.06", "EN 1077", "EN 12492", "EN 397"].map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                padding: "8px 16px",
                borderRadius: 999,
                background: "#173B5C",
                color: "#FFFFFF",
                fontSize: 22,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
