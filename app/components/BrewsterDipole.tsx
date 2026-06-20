"use client";

import { useState } from "react";
import { IconTarget } from "@tabler/icons-react";

const MEDIA = [
  { name: "유리", n: 1.5 },
  { name: "물", n: 1.33 },
  { name: "다이아몬드", n: 2.42 },
];

const O = { x: 340, y: 210 };
const Rmax = 95;
const Lin = 150;
const Lr = 120;
const n1 = 1;

export default function BrewsterDipole() {
  const [ang, setAng] = useState(40);
  const [medIdx, setMedIdx] = useState(0);

  const n2 = MEDIA[medIdx].n;
  const t1 = (ang * Math.PI) / 180;
  const s2 = Math.min(1, (n1 / n2) * Math.sin(t1));
  const t2 = Math.asin(s2);
  const d2 = (t2 * 180) / Math.PI;
  const phi = 180 - (ang + d2);
  const brew = (Math.atan(n2 / n1) * 180) / Math.PI;

  const ax = Math.cos(t2);
  const ay = -Math.sin(t2);
  const aAng = Math.atan2(ay, ax);

  // sin^2 radiation lobe
  const lobePts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const al = (i / 120) * 2 * Math.PI;
    const rr = Rmax * Math.abs(Math.sin(al - aAng));
    lobePts.push(
      `${(O.x + rr * Math.cos(al)).toFixed(1)},${(O.y + rr * Math.sin(al)).toFixed(1)}`
    );
  }
  const lobeD = "M" + lobePts.join("L") + "Z";

  const rAng = Math.atan2(-Math.cos(t1), Math.sin(t1));
  const sinTR = Math.abs(Math.sin(rAng - aAng));
  const rR = Rmax * sinTR;
  const Ip = sinTR * sinTR;
  const near = Math.abs(phi - 90) < 0.8;

  const snap = () => setAng(Math.round((Math.atan(n2 / n1) * 180) / Math.PI));

  return (
    <div className="widget">
      <h2 className="sr-only">
        p편광 쌍극자의 sin제곱 복사 패턴을 보여주며, 브루스터 각에서 반사
        방향이 쌍극자 축의 복사 영점과 일치해 반사 세기가 0이 되는 시뮬레이션
      </h2>
      <svg width="100%" viewBox="0 0 680 400" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>브루스터 각에서의 쌍극자 복사 영점</title>
        <defs>
          <marker id="dm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        <rect x="40" y="210" width="600" height="160" fill="var(--color-background-secondary)" />
        <line x1="40" y1="210" x2="640" y2="210" stroke="var(--color-border-primary)" strokeWidth="1" />
        <line x1="340" y1="40" x2="340" y2="372" stroke="var(--color-border-secondary)" strokeWidth="0.5" strokeDasharray="4 3" />
        <text x="348" y="54" style={{ fontSize: 12 }} fill="var(--color-text-tertiary)">법선</text>
        <text x="50" y="200" style={{ fontSize: 12 }} fill="var(--color-text-tertiary)">공기</text>
        <text x="50" y="228" style={{ fontSize: 12 }} fill="var(--color-text-tertiary)">유리</text>

        <path d={lobeD} fill="#EF9F27" fillOpacity="0.22" stroke="#EF9F27" strokeWidth="1" />

        <line stroke="#888780" strokeWidth="2" markerEnd="url(#dm)" x1={O.x - Lin * Math.sin(t1)} y1={O.y - Lin * Math.cos(t1)} x2={O.x} y2={O.y} />
        <line stroke="#D85A30" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#dm)" x1={O.x} y1={O.y} x2={O.x + Lr * Math.sin(t2)} y2={O.y + Lr * Math.cos(t2)} />
        <line stroke="#378ADD" strokeWidth="2" markerEnd="url(#dm)" x1={O.x} y1={O.y} x2={O.x + Lin * Math.sin(t1)} y2={O.y - Lin * Math.cos(t1)} />
        <line stroke="#7F77DD" strokeWidth="3" markerStart="url(#dm)" markerEnd="url(#dm)" x1={O.x - 58 * ax} y1={O.y - 58 * ay} x2={O.x + 58 * ax} y2={O.y + 58 * ay} />
        <circle r="4" fill="var(--color-text-primary)" cx={O.x} cy={O.y} />
        <circle r="5" fill={near ? "#1D9E75" : "#378ADD"} stroke="var(--color-background-primary)" strokeWidth="1.5" cx={O.x + rR * Math.cos(rAng)} cy={O.y + rR * Math.sin(rAng)} />

        <text style={{ fontSize: 13, fontWeight: 500 }} fill="#185FA5" textAnchor="middle" x={O.x + Lin * Math.sin(t1) + 4} y={O.y - Lin * Math.cos(t1) - 8}>반사광</text>
        <text style={{ fontSize: 12 }} fill="#993C1D" textAnchor="middle" x={O.x + Lr * Math.sin(t2) + 4} y={O.y + Lr * Math.cos(t2) + 16}>굴절파</text>
        <text style={{ fontSize: 12, fontWeight: 500 }} fill="#534AB7" textAnchor="middle" x={O.x + 64 * ax} y={O.y + 64 * ay - 4}>쌍극자 축</text>
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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12 }}>
        <div style={{ background: near ? "var(--color-background-success)" : "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "0.8rem 1rem" }}>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>반사 방향 p편광 복사세기 (상대)</div>
          <div style={{ fontSize: 22, fontWeight: 500 }}>{Math.round(Ip * 100)}%</div>
        </div>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "0.8rem 1rem" }}>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>반사–굴절 각</div>
          <div style={{ fontSize: 22, fontWeight: 500 }}>{Math.round(phi)}°</div>
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 13, color: "var(--color-text-secondary)", minHeight: 20 }}>
        {near
          ? `반사 방향이 쌍극자 축과 정확히 일치 → p편광 복사 0. 반사광은 s편광만 남아 완전 편광됩니다. (브루스터 각 ≈ ${brew.toFixed(1)}°)`
          : ""}
      </div>
    </div>
  );
}
