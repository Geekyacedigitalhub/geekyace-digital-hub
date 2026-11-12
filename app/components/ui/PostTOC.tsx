"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string; level: number };

export default function PostTOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;
    const hs = Array.from(article.querySelectorAll("h2, h3")) as HTMLHeadingElement[];
    const list = hs.map((h, i) => {
      const id = (h.id || h.textContent?.trim().toLowerCase().replace(/[^\w]+/g, "-") || `h-${i}`).replace(/-$/, "");
      h.id = id;
      return { id, text: h.textContent ?? "", level: h.tagName === "H3" ? 3 : 2 };
    });
    setHeadings(list);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    hs.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 3) return null;

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-28 max-w-[220px]">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">On this page</p>
        <ul className="space-y-1.5 border-l border-slate-200 dark:border-white/10">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block -ml-px border-l-2 py-1 pl-3 text-[13px] leading-tight transition-colors ${
                  active === h.id
                    ? "border-green-500 font-semibold text-green-700 dark:text-green-400"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                } ${h.level === 3 ? "pl-6 text-[12px]" : ""}`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
