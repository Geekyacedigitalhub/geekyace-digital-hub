"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src?: string;
  alt: string;
  priority?: boolean;
}

function PreviewPlaceholder({ title }: { title?: string }) {
  const initial = (title || "P").trim().charAt(0).toUpperCase();
  // Deterministic hue based on initial so each placeholder has its own color.
  const hue = (initial.charCodeAt(0) * 37) % 360;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(15,23,42,0.03) 0%, rgba(15,23,42,0) 40%, rgba(15,23,42,0.05) 100%)",
        }}
        aria-hidden
      />
      {/* subtle grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="hsl(150, 10%, 20%)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>
      <div className="relative flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ring-1 ring-slate-200" style={{ background: `hsl(${hue}, 60%, 52%)` }}>
          <span className="text-2xl font-extrabold text-white">{initial}</span>
        </div>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Case study</p>
        <p className="mt-1 max-w-[240px] text-sm font-semibold text-slate-700">{title || "Project preview coming soon"}</p>
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
      quality={85}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover object-top"
      onError={() => setErrored(true)}
    />
  );
}
