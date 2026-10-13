import { ImageResponse } from "next/og";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };

/** Play-button logo drawn with SVG (no emoji, so no network fetch at build time). */
function Logo({ size }: { size: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: size, height: size, borderRadius: size * 0.26, background: "linear-gradient(135deg, #1557ff, #4f8bff)" }}>
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24">
        <path d="M7 4.5v15a1 1 0 0 0 1.5.87l12.5-7.5a1 1 0 0 0 0-1.74L8.5 3.63A1 1 0 0 0 7 4.5z" fill="#fff" />
      </svg>
    </div>
  );
}

export function logoImage(size: number) {
  return new ImageResponse(<Logo size={size} />, { width: size, height: size });
}

/** Branded 1200×630 social share card. */
export function shareImage({ kicker, title, footer }: { kicker: string; title: string; footer?: string }) {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 72, color: "#fff", background: "linear-gradient(135deg, #0a1633 0%, #122250 55%, #0d2f8f 100%)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Logo size={72} />
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800 }}>
            <span>Denvay</span><span style={{ color: "#6fa0ff" }}>Stream</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 30, color: "#7fa6ff", textTransform: "uppercase", letterSpacing: 3 }}>{kicker}</div>
          <div style={{ display: "flex", fontSize: title.length > 60 ? 54 : 66, fontWeight: 800, lineHeight: 1.1, maxWidth: 1050 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#c5cfee" }}>
          <span>{footer ?? "4K live TV · High-quality servers · Free 24h trial"}</span>
          <span>{site.domain}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
