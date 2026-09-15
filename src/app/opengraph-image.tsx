import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#0a0a0c",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.55), transparent 45%), radial-gradient(circle at 85% 75%, rgba(168,85,247,0.45), transparent 45%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #2563eb, #a855f7)",
              color: "white",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ color: "#a1a1aa", fontSize: 26, fontWeight: 500 }}>
            ahmed171102
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Ahmed Adel Goda
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            color: "#d4d4d8",
            fontSize: 32,
            fontWeight: 500,
            maxWidth: 900,
          }}
        >
          Full-stack · Machine Learning · Embedded Systems
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            color: "#93c5fd",
            fontSize: 26,
            fontWeight: 500,
          }}
        >
          Featuring Eshara — bilingual sign language recognition platform
        </div>
      </div>
    ),
    { ...size }
  );
}
