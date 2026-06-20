import katex from "katex";

export function Tex({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export function TexBlock({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
  });
  return <div className="eq" dangerouslySetInnerHTML={{ __html: html }} />;
}
