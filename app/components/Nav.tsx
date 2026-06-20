"use client";

import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const ITEMS = [
  { id: "intro", label: "들어가며" },
  { id: "sec1", label: "1. 토대: 파동의 분류" },
  { id: "sec2", label: "2. 편광: 횡파의 자유도" },
  { id: "sec3", label: "3. 경계면에서의 빛" },
  { id: "sec4", label: "4. 브루스터 각" },
  { id: "sec5", label: "5. 개념 정리" },
];

export default function Nav() {
  const [active, setActive] = useState("intro");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ITEMS.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label="목차 열기">
        {open ? <IconX size={18} /> : <IconMenu2 size={18} />}
        목차
      </button>
      <div className={`scrim${open ? " open" : ""}`} onClick={() => setOpen(false)} />
      <nav className={`toc${open ? " open" : ""}`}>
        <h2>목차</h2>
        <ol>
          {ITEMS.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={active === it.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
