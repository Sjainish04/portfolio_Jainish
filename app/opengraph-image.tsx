import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0e1525 0%, #1a2236 50%, #050813 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row — small monospace eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#a5b4fc",
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "#34d399",
            }}
          />
          Toronto · ML Engineer
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 150,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "#fafafa",
            }}
          >
            {firstName}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 170,
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#a5b4fc",
              fontFamily: "Georgia, serif",
            }}
          >
            {lastName}
            <span style={{ color: "#fbbf24" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "#d4d4d8",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Building practical ML systems across computer vision, NLP, and
            physics-informed networks.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#71717a",
            fontFamily: "monospace",
            letterSpacing: "0.15em",
          }}
        >
          <div>SCML 2024 · AMII AI for Earth Scholar</div>
          <div>jainishsolanki.dev</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
