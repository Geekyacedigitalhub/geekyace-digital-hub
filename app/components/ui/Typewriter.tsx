"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  className = "",
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1500,
}: {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    if (!deleting && sub === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setSub(deleting ? word.slice(0, sub.length - 1) : word.slice(0, sub.length + 1));
    }, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [sub, deleting, idx, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {sub}
      <span className="caret-blink ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-current align-middle" />
    </span>
  );
}
