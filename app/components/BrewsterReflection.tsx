"use client";

import { useState } from "react";
import { IconTarget } from "@tabler/icons-react";

const MEDIA = [
  { name: "유리", n: 1.5 },
  { name: "물", n: 1.33 },
  { name: "다이아몬드", n: 2.42 },
];

const O = { x: 340, y: 195 };
const L = 145;
const r = 46;
const n1 = 1;

export default function BrewsterReflection() {
  const [ang, setAng] = useState(40);
  const [medIdx, setMedIdx] = useState(0);

  const n2 = MEDIA[medIdx].n;
  const t1 = (ang * Math.PI) / 180;
  const s2 = Math.min(1, (n1 / n2) * Math.sin(t1));
  const t2 = Math.asin(s2);
  const d2 = (t2 * 180) / Math.PI;
  const phi = 180 - (ang + d2);
  const brew = (Math.atan(n2 / n1) * 180) / Math.PI;
  const near = Math.abs(phi - 90) < 0.8;
  const col = near ? "#1D9E75" : "#EF9F27";
  const colT = near ? "#0F6E56" : "#BA7517";

  const ax = O.x + r * Math.sin(t1);
  const ay = O.y - r * Math.cos(t1);
  const bx = O.x + r * Math.sin(t2);
  const by = O.y + r * Math.cos(t2);
  const ml = ((ang - d2) / 2) * (Math.PI / 180) - Math.PI / 2;

  const snap = () => setAng(Math.round((Math.atan(n2 / n1) * 180) / Math.PI));

  return (
    <div className="widget">
      <h2 className="sr-only">
        입사각을 바꾸면 반사광과 굴절광 사이 각이 변하고, 브루스터 각에서만
        정확히 90도가 되는 시뮬레이션
      </h2>
      <svg width="100%" viewBox="0 0 680 380" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>반사광과 굴절광이 이루는 각</title>
        <defs>
          <marker id="rm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        <rect x="50" y="195" width="580" height="160" fill="var(--color-background-secondary)" />
        <line x1="50" y1="195" x2="630" y2="195" stroke="var(--color-border-primary)" strokeWidth="1" />
        <line x1="340" y1="45" x2="340" y2="355" stroke="var(--color-border-secondary)" strokeWidth="0.5" strokeDasharray="4 3" />
        <text x="348" y="58" style={{ fontSize: 12 }} fill="var(--color-text-tertiary)">법선</text>
        <text x="60" y="185" style={{ fontSize: 13 }} fill="var(--color-text-secondary)">공기 n₁ = 1.00</text>
        <text x="60" y="214" style={{ fontSize: 13 }} fill="var(--color-text-secondary)">
          {MEDIA[medIdx].name} n₂ = {n2.toFixed(2)}
        </text>

        <path
          fill="none"
          stroke={col}
          strokeWidth={near ? 3 : 2}
          d={`M ${ax.toFixed(1)} ${ay.toFixed(1)} A ${r} ${r} 0 0 1 ${bx.toFixed(1)} ${by.toFixed(1)}`}
        />
        <text
          style={{ fontSize: 13, fontWeight: 500 }}
          fill={colT}
          x={O.x + (r + 16) * Math.cos(ml)}
          y={O.y + (r + 16) * Math.sin(ml) + 4}
        >
          {Math.round(phi)}°
        </text>

        <line stroke="#888780" strokeWidth="2" markerEnd="url(#rm)" x1={O.x - L * Math.sin(t1)} y1={O.y - L * Math.cos(t1)} x2={O.x} y2={O.y} />
        <line stroke="#378ADD" strokeWidth="2" markerEnd="url(#rm)" x1={O.x} y1={O.y} x2={O.x + L * Math.sin(t1)} y2={O.y - L * Math.cos(t1)} />
        <line stroke="#D85A30" strokeWidth="2" markerEnd="url(#rm)" x1={O.x} y1={O.y} x2={O.x + L * Math.sin(t2)} y2={O.y + L * Math.cos(t2)} />

        <text style={{ fontSize: 13, fontWeight: 500 }} fill="#5F5E5A" textAnchor="middle" x={O.x - L * Math.sin(t1) - 2} y={O.y - L * Math.cos(t1) - 8}>입사광</text>
        <text style={{ fontSize: 13, fontWeight: 500 }} fill="#185FA5" textAnchor="middle" x={O.x + L * Math.sin(t1) + 4} y={O.y - L * Math.cos(t1) - 8}>반사광</text>
        <text style={{ fontSize: 13, fontWeight: 500 }} fill="#993C1D" textAnchor="middle" x={O.x + L * Math.sin(t2) + 4} y={O.y + L * Math.cos(t2) + 18}>굴절광</text>
      </svg>

      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "1rem 0", flexWrap: "wrap" }}>
        <label style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>매질</label>
        <select value={medIdx} onChange={(e) => setMedIdx(parseInt(e.target.value, 10))}>
          {MEDIA.map((m, i) => (
            <option key={i} value={i}>
              {m.name} (n={m.n.toFixed(2)})
            </option>
          ))}
        </select>
        <button onClick={snap} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <IconTarget size={16} aria-hidden />
          브루스터 각으로
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
        <label style={{ fontSize: 14, color: "var(--color-text-secondary)", minWidth: 60 }}>입사각 θ₁</label>
        <input type="range" min={0} max={89} step={1} value={ang} onChange={(e) => setAng(parseInt(e.target.value, 10))} style={{ flex: 1 }} />
        <span style={{ fontSize: 14, fontWeight: 500, minWidth: 40, textAlign: "right" }}>{ang}°</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 12 }}>
        <Card label="굴절각 θ₂" value={`${d2.toFixed(1)}°`} />
        <Card label="반사–굴절 각 φ" value={`${Math.round(phi)}°`} bg={near ? "var(--color-background-success)" : undefined} />
        <Card label="브루스터 각 θ_B" value={`${brew.toFixed(1)}°`} />
      </div>
      <div style={{ marginTop: 12, fontSize: 13, color: "var(--color-text-secondary)", minHeight: 20 }}>
        {near
          ? "φ = 90° — 브루스터 각입니다. 이때 반사광은 경계면과 나란한 방향으로 완전히 선편광됩니다."
          : ""}
      </div>
    </div>
  );
}

function Card({ label, value, bg }: { label: string; value: string; bg?: string }) {
  return (
    <div style={{ background: bg ?? "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "0.8rem 1rem" }}>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 500 }}>{value}</div>
    </div>
  );
}
