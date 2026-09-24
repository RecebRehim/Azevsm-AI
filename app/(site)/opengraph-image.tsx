import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#0b1320", color: "#f7f8f6", padding: "72px" }}>
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#c4a35a" }}>AZEVSMAI SYSTEMS</div>
        <div style={{ fontSize: 68, lineHeight: 1.05, marginTop: 24, maxWidth: 900 }}>Institutional intelligence for evaluating companies and startups.</div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#d5dee6" }}>Structured evaluation. Traceable results.</div>
      </div>
    ),
    size,
  );
}
