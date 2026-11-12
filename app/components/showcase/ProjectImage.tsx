"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ProjectImageProps {
  src?: string;
  alt: string;
  priority?: boolean;
}

function PreviewPlaceholder({ title }: { title?: string }) {
  const initial = (title || "P").trim().charAt(0).toUpperCase();
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/40">
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-green-400/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden />
      <div className="relative flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(22,163,74,0.4)] ring-1 ring-green-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <span className="text-2xl font-extrabold">{initial}</span>
          </div>
        </div>
        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Case study</p>
        <p className="mt-1 max-w-[220px] text-sm font-semibold text-slate-700">
          {title || "Project preview coming soon"}
        </p>
        <p className="mt-1 text-xs text-slate-400">Detailed showcase in progress</p>
      </div>
    </div>
  );
}

export default function ProjectImage({ src, alt, priority = false }: ProjectImageProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) return <PreviewPlaceholder title={alt} />;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={82}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setErrored(true)}
    />
  );
}
