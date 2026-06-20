"use client";

import { useEffect, useRef, useState } from "react";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

const N = 16;
const x0 = 190;
const x1 = 630;
const span = (x1 - x0) / (N - 1);
const k = 0.036;
const w = 1.8;
const A1 = 20;
const A2 = 15;
const R = 15;

const xs = Array.from({ length: N }, (_, i) => x0 + i * span);

export default function WaveMotion() {
  const r1 = useRef<(SVGCircleElement | null)[]>([]);
  const r2 = useRef<(SVGCircleElement | null)[]>([]);
  const r3 = useRef<(SVGCircleElement | null)[]>([]);
  const waveRef = useRef<SVGPolylineElement | null>(null);

  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  // keep latest play/speed without restarting the rAF loop
  const playingRef = useRef(playing);
  const speedRef = useRef(speed);
  playingRef.current = playing;
  speedRef.current = speed;

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) setPlaying(false);

    let t = 0;
    let last: number | null = null;
    let raf = 0;

    const render = () => {
      for (let i = 0; i < N; i++) {
        const ph = k * xs[i] - w * t;
        r1.current[i]?.setAttribute("cy", (80 - A1 * Math.sin(ph)).toFixed(1));
        r2.current[i]?.setAttribute("cx", (xs[i] + A2 * Math.sin(ph)).toFixed(1));
        r3.current[i]?.setAttribute("cx", (xs[i] + R * Math.cos(ph)).toFixed(1));
        r3.current[i]?.setAttribute("cy", (310 - R * Math.sin(ph)).toFixed(1));
      }
      let pts = "";
      for (let j = 0; j <= 44; j++) {
        const xx = x0 + (j * (x1 - x0)) / 44;
        const yy = 80 - A1 * Math.sin(k * xx - w * t);
        pts += `${xx.toFixed(0)},${yy.toFixed(1)} `;
      }
      waveRef.current?.setAttribute("points", pts);
    };

    const frame = (now: number) => {
      if (last === null) last = now;
      const dt = (now - last) / 1000;
      last = now;
      if (playingRef.current) t += dt * speedRef.current;
      render();
      raf = requestAnimationFrame(frame);
    };

    render();
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const ringX = xs.filter((_, i) => i % 5 === 3);

  return (
    <div className="widget">
      <h2 className="sr-only">
        횡파는 진행 방향에 수직으로, 종파는 진행 방향과 나란하게, 표면파는 원
        궤도로 입자가 진동하는 모습을 비교하는 애니메이션
      </h2>
      <svg
        width="100%"
        viewBox="0 0 680 360"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>횡파·종파·표면파의 입자 운동 비교</title>
        <defs>
          <marker
            id="pg"
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

        <text className="ts" x="540" y="22" textAnchor="end">
          진행 방향
        </text>
        <line x1="548" y1="17" x2="624" y2="17" className="arr" markerEnd="url(#pg)" />

        <text className="th" x="22" y="76">
          횡파
        </text>
        <text className="ts" x="22" y="94">
          진동 ⊥ 진행
        </text>
        <polyline ref={waveRef} fill="none" stroke="#1D9E75" strokeWidth="1" opacity="0.3" />
        <g>
          {xs.map((x, i) => (
            <circle
              key={i}
              ref={(el) => {
                r1.current[i] = el;
              }}
              r="4.5"
              fill="#1D9E75"
              cx={x}
              cy={80}
            />
          ))}
        </g>

        <text className="th" x="22" y="196">
          종파
        </text>
        <text className="ts" x="22" y="214">
          진동 ∥ 진행
        </text>
        <g>
          {xs.map((x, i) => (
            <circle
              key={i}
              ref={(el) => {
                r2.current[i] = el;
              }}
              r="4.5"
              fill="#EF9F27"
              cx={x}
              cy={190}
            />
          ))}
        </g>

        <text className="th" x="22" y="316">
          표면파
        </text>
        <text className="ts" x="22" y="334">
          원·타원 궤도
        </text>
        <g>
          {ringX.map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={310}
              r={R}
              fill="none"
              stroke="#7F77DD"
              strokeWidth="0.5"
              opacity="0.35"
            />
          ))}
        </g>
        <g>
          {xs.map((x, i) => (
            <circle
              key={i}
              ref={(el) => {
                r3.current[i] = el;
              }}
              r="4.5"
              fill="#7F77DD"
              cx={x}
              cy={310}
            />
          ))}
        </g>
      </svg>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "1rem" }}>
        <button
          onClick={() => setPlaying((p) => !p)}
          style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
        >
          {playing ? (
            <IconPlayerPause size={16} aria-hidden />
          ) : (
            <IconPlayerPlay size={16} aria-hidden />
          )}
          <span>{playing ? "일시정지" : "재생"}</span>
        </button>
        <label style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>속도</label>
        <input
          type="range"
          min={0.3}
          max={2}
          step={0.1}
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          style={{ flex: 1 }}
        />
        <span style={{ fontSize: 14, fontWeight: 500, minWidth: 36, textAlign: "right" }}>
          {speed.toFixed(1)}×
        </span>
      </div>
    </div>
  );
}
