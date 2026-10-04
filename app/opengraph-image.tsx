import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BWIDE Media — Creative Advertising & Digital Marketing Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #07050f 0%, #0f0b1d 50%, #1a0f3a 100%)",
          fontFamily: "system-ui",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "400px",
            height: "400px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "rgba(139, 92, 246, 0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo text */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
          <span
            style={{
              fontSize: "80px",
              fontWeight: 700,
              color: "#f5f3ff",
              letterSpacing: "-0.03em",
            }}
          >
            BWIDE
          </span>
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#8b5cf6",
            }}
          />
          <span
            style={{
              fontSize: "80px",
              fontWeight: 300,
              color: "#a1a1b5",
              letterSpacing: "0.05em",
            }}
          >
            MEDIA
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            marginTop: "24px",
            fontSize: "24px",
            color: "#a1a1b5",
            letterSpacing: "0.1em",
          }}
        >
          STRATEGY. CREATIVITY. STORYTELLING. DIGITAL.
        </p>

        {/* Description */}
        <p
          style={{
            marginTop: "16px",
            fontSize: "18px",
            color: "#6b6b80",
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Creative Advertising & Digital Marketing Agency — Kerala, India
        </p>
      </div>
    ),
    { ...size }
  );
}
