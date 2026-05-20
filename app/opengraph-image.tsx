import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anirut Butnongwa — Mechanical Engineer & Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#F7F4EF";
const TEXT = "#1C1A17";
const ORANGE = "#C85B1A";
const TEAL = "#007A6E";
const MUTED = "#7A7268";
const BORDER = "#D6CFC3";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 72,
          background: PAPER,
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* corner brackets */}
        <div style={{ position: "absolute", top: 48, left: 48, width: 56, height: 56, borderTop: `1.5px solid ${BORDER}`, borderLeft: `1.5px solid ${BORDER}` }} />
        <div style={{ position: "absolute", bottom: 48, right: 48, width: 56, height: 56, borderBottom: `1.5px solid ${BORDER}`, borderRight: `1.5px solid ${BORDER}` }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          {/* Top: eyebrow */}
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: TEAL,
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: "monospace",
            }}
          >
            <span style={{ width: 40, height: 1, background: TEAL, display: "block" }} />
            Mechanical Engineer · Software Developer
          </div>

          {/* Middle: headline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 80, fontWeight: 400, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
              Building Software
            </div>
            <div style={{ fontSize: 80, fontWeight: 400, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.01em", marginTop: 4 }}>
              for{" "}
              <span style={{ color: ORANGE }}>Manufacturing.</span>
            </div>
            <div style={{ fontSize: 22, color: MUTED, marginTop: 28, maxWidth: 720, fontFamily: "sans-serif" }}>
              Tools built from the production floor &mdash; not from a tutorial.
            </div>
          </div>

          {/* Bottom: name + meta */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              borderTop: `1px solid ${BORDER}`,
              paddingTop: 24,
              fontFamily: "sans-serif",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, color: TEXT, fontFamily: "Georgia, serif" }}>Anirut Butnongwa</div>
              <div style={{ fontSize: 14, color: MUTED, marginTop: 4, letterSpacing: "0.06em" }}>
                B.Eng. Mechanical · SUT · Available May 2026
              </div>
            </div>
            <div style={{ display: "flex", gap: 18, fontSize: 13, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase" as const, fontFamily: "monospace" }}>
              <span style={{ padding: "6px 12px", border: `1px solid ${BORDER}` }}>Python</span>
              <span style={{ padding: "6px 12px", border: `1px solid ${BORDER}` }}>React</span>
              <span style={{ padding: "6px 12px", border: `1px solid ${BORDER}` }}>CNC</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
