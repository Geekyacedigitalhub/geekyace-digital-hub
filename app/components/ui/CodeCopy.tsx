"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Attaches copy buttons to every <pre> block inside its children. Runs once
 * on mount — zero rAF, zero listeners after initialization.
 */
export default function CodeCopy() {
  const [copied, setCopied] = useState<number | null>(null);
  useEffect(() => {
    const blocks = Array.from(document.querySelectorAll<HTMLPreElement>("article pre"));
    blocks.forEach((pre, i) => {
      if (pre.parentElement?.classList.contains("code-block-wrap")) return;
      const wrap = document.createElement("div");
      wrap.className = "code-block-wrap relative group";
      pre.parentNode?.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-btn absolute right-3 top-3 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-slate-300 opacity-0 transition group-hover:opacity-100 hover:bg-white/10";
      btn.textContent = "Copy";
      btn.addEventListener("click", async () => {
        const text = pre.innerText;
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = "Copied!";
          setCopied(i);
          setTimeout(() => { btn.textContent = "Copy"; setCopied(null); }, 1500);
        } catch {}
      });
      wrap.appendChild(btn);
    });
  }, []);

  // Re-render trigger only; UI is injected into the DOM directly.
  return copied !== null ? <span className="hidden" /> : null;
}
