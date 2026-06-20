"use client";

import { useState } from "react";

export default function MalusLaw() {
  const [theta, setTheta] = useState(0);
  const I = Math.pow(Math.cos((theta * Math.PI) / 180), 2);

  return (
    <div className="widget">
      <h2 className="sr-only">
        두 편광판의 각도 차이에 따라 투과되는 빛의 세기가 코사인 제곱으로
        변하는 말뤼스 법칙 시뮬레이션
      </h2>
      <svg
        width="100%"
        viewBox="0 0 680 215"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>두 편광판 사이 각도와 투과 세기</title>
        <defs>
          <marker
            id="ar"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1L8 5L2 9"
              fill="none"
              stroke="context-stroke"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        <line x1="190" y1="100" x2="322" y2="100" stroke="var(--color-border-secondary)" strokeWidth="0.5" />
        <line x1="418" y1="100" x2="510" y2="100" stroke="var(--color-border-secondary)" strokeWidth="0.5" markerEnd="url(#ar)" />

        <circle cx="140" cy="100" r="48" fill="var(--color-background-secondary)" stroke="var(--color-border-secondary)" strokeWidth="0.5" />
        <line x1="116" y1="62" x2="116" y2="138" stroke="#534AB7" strokeWidth="1" opacity="0.5" />
        <line x1="128" y1="62" x2="128" y2="138" stroke="#534AB7" strokeWidth="1" opacity="0.5" />
        <line x1="140" y1="50" x2="140" y2="150" stroke="#534AB7" strokeWidth="2.5" />
        <line x1="152" y1="62" x2="152" y2="138" stroke="#534AB7" strokeWidth="1" opacity="0.5" />
        <line x1="164" y1="62" x2="164" y2="138" stroke="#534AB7" strokeWidth="1" opacity="0.5" />

        <line x1="256" y1="64" x2="256" y2="136" stroke="#1D9E75" strokeWidth="3" markerStart="url(#ar)" markerEnd="url(#ar)" />

        <circle cx="370" cy="100" r="48" fill="var(--color-background-secondary)" stroke="var(--color-border-secondary)" strokeWidth="0.5" />
        <g transform={`rotate(${theta} 370 100)`}>
          <line x1="346" y1="62" x2="346" y2="138" stroke="#534AB7" strokeWidth="1" opacity="0.5" />
          <line x1="358" y1="62" x2="358" y2="138" stroke="#534AB7" strokeWidth="1" opacity="0.5" />
          <line x1="370" y1="50" x2="370" y2="150" stroke="#534AB7" strokeWidth="2.5" />
          <line x1="382" y1="62" x2="382" y2="138" stroke="#534AB7" strokeWidth="1" opacity="0.5" />
          <line x1="394" y1="62" x2="394" y2="138" stroke="#534AB7" strokeWidth="1" opacity="0.5" />
        </g>

        <circle cx="560" cy="100" r="48" fill="var(--color-background-secondary)" stroke="var(--color-border-secondary)" strokeWidth="0.5" />
        <circle cx="560" cy="100" r="46" fill="#EF9F27" opacity={I.toFixed(3)} />

        <text className="th" x="140" y="190" textAnchor="middle">
          편광판 A
        </text>
        <text className="th" x="370" y="190" textAnchor="middle">
          검광자 B
        </text>
        <text className="th" x="560" y="190" textAnchor="middle">
          투과광
        </text>
      </svg>

      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "1.25rem 0 1rem" }}>
        <label style={{ fontSize: 14, color: "var(--color-text-secondary)", minWidth: 74 }}>
          각도 θ
        </label>
        <input
          type="range"
          min={0}
          max={90}
          step={1}
          value={theta}
          onChange={(e) => setTheta(parseInt(e.target.value, 10))}
          style={{ flex: 1 }}
        />
        <span style={{ fontSize: 14, fontWeight: 500, minWidth: 40, textAlign: "right" }}>
          {theta}°
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "0.9rem 1rem" }}>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>두 투과축 각도차</div>
          <div style={{ fontSize: 24, fontWeight: 500 }}>{theta}°</div>
        </div>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "0.9rem 1rem" }}>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>투과 세기 I / I₀ = cos²θ</div>
          <div style={{ fontSize: 24, fontWeight: 500 }}>{Math.round(I * 100)}%</div>
        </div>
      </div>
    </div>
  );
}
