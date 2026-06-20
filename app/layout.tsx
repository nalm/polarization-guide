import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "빛·파동·편광 — 인터랙티브 가이드",
  description:
    "파동의 분류부터 말뤼스 법칙, 반사·굴절 기하, 브루스터 각과 쌍극자 복사까지 — 편광 현상을 인터랙티브 시뮬레이션으로 종합 설명하는 학습 페이지.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
