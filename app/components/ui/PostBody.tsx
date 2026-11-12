"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function PostBody({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const pres = Array.from(root.querySelectorAll("pre"));
    pres.forEach((pre, i) => {
      if (pre.parentElement?.classList.contains("code-block-wrap")) return;
      const wrap = document.createElement("div");
      wrap.className = "code-block-wrap relative group";
      pre.parentNode?.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> Copy`;
      btn.className = "absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold text-slate-300 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-slate-700";
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(pre.innerText);
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied`;
          setCopiedIdx(i);
          setTimeout(() => {
            btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> Copy`;
            setCopiedIdx(null);
          }, 1500);
        } catch {}
      });
      wrap.appendChild(btn);
    });
  }, [html]);

  return <div ref={ref} className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg" dangerouslySetInnerHTML={{ __html: html }} />;
}
