import { ImageResponse } from "next/og";

export const runtime = "edge";
export const dynamic = "force-static";
export const alt = "Anirut Butnongwa — Industrial Software Portfolio";
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
          justifyContent: "center",
          padding: "80px",
          background: "#F7F4EF",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#C85B1A",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ width: 32, height: 1, background: "#C85B1A", display: "block" }} />
          Industrial Software Portfolio
        </div>
        <div style={{ fontSize: 64, fontWeight: 400, color: "#1C1A17", lineHeight: 1.05 }}>
          Building Software
        </div>
        <div style={{ fontSize: 64, fontWeight: 400, color: "#1C1A17", lineHeight: 1.05 }}>
          for the{" "}
          <span style={{ color: "#C85B1A", fontStyle: "italic" }}>Factory</span> Floor.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            color: "#7A7268",
            display: "flex",
            gap: 32,
          }}
        >
          <span>Anirut Butnongwa</span>
          <span>·</span>
          <span>ME Graduate — SUT</span>
          <span>·</span>
          <span>3 Apps Built</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
