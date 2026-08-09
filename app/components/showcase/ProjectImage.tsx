"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface ProjectImageProps {
  src?: string;
  alt: string;
  priority?: boolean;
}

export default function ProjectImage({
  src,
  alt,
  priority = false,
}: ProjectImageProps) {
  if (!src) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-green-600 shadow-sm">
          <ImageIcon size={30} aria-hidden="true" />
        </div>

        <p className="mt-4 font-semibold text-slate-700">
          Project Preview Coming Soon
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Case study image will be added soon.
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={80}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}