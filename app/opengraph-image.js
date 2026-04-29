import { ImageResponse } from "next/og";

export const alt = "Blue Slide Studio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8f5ee",
          color: "#0a0a0a",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#0a0a0a",
            border: "4px solid #0a0a0a",
            boxShadow: "18px 18px 0 #2563eb",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            padding: 56,
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Blue Slide Studio
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              letterSpacing: -8,
              lineHeight: 0.9,
              maxWidth: 900,
              textTransform: "uppercase",
            }}
          >
            For the ones who do not blend in.
          </div>
          <div
            style={{
              color: "#d4d4d4",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            Strategy · Branding · Websites · Software · Growth
          </div>
        </div>
      </div>
    ),
    size
  );
}
