import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b1320" }}>
        <div style={{ width: 18, height: 18, border: "2px solid #1f5fbf", transform: "rotate(45deg)" }} />
      </div>
    ),
    size,
  );
}
