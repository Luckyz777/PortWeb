import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anirut Butnongwa - Mechanical Engineer & Industrial Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#F8FAFC";
const TEXT = "#0F172A";
const ORANGE = "#F97316";
const BLUE = "#0369A1";
const MUTED = "#475569";
const BORDER = "#CBD5E1";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 72,
          background: BG,
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 48, left: 48, width: 56, height: 56, borderTop: `2px solid ${BORDER}`, borderLeft: `2px solid ${BORDER}` }} />
        <div style={{ position: "absolute", bottom: 48, right: 48, width: 56, height: 56, borderBottom: `2px solid ${BORDER}`, borderRight: `2px solid ${BORDER}` }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: BLUE,
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: "monospace",
            }}
          >
            <span style={{ width: 40, height: 2, background: BLUE, display: "block" }} />
            Mechanical Engineer / Industrial Software Developer
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 800, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              Production Tools
            </div>
            <div style={{ fontSize: 76, fontWeight: 800, color: TEXT, lineHeight: 1.0, letterSpacing: "-0.02em", marginTop: 4 }}>
              for <span style={{ color: ORANGE }}>Manufacturing.</span>
            </div>
            <div style={{ fontSize: 24, color: MUTED, marginTop: 28, maxWidth: 760 }}>
              CNC review, NC revision comparison, toolpath verification, and fixture workflows.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              borderTop: `1px solid ${BORDER}`,
              paddingTop: 24,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 30, color: TEXT, fontWeight: 800 }}>Anirut Butnongwa</div>
              <div style={{ fontSize: 15, color: MUTED, marginTop: 6, letterSpacing: "0.06em" }}>
                B.Eng. Mechanical / SUT / Available May 2026
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, fontSize: 13, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase" as const, fontFamily: "monospace" }}>
              <span style={{ padding: "7px 12px", border: `1px solid ${BORDER}` }}>Python</span>
              <span style={{ padding: "7px 12px", border: `1px solid ${BORDER}` }}>React</span>
              <span style={{ padding: "7px 12px", border: `1px solid ${BORDER}` }}>4 Tools</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
