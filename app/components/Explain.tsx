import { IconChevronDown } from "@tabler/icons-react";

export function Explain({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  return (
    <details className="explain">
      <summary>
        <span>{q}</span>
        <span className="chev">
          <IconChevronDown size={18} stroke={2} aria-hidden />
        </span>
      </summary>
      <div className="body">{children}</div>
    </details>
  );
}
