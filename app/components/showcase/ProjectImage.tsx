"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface ProjectImageProps {
  src?: string;
  alt: string;
}

export default function ProjectImage({
  src,
  alt,
}: ProjectImageProps) {
  if (!src) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 text-center">
        <ImageIcon
          size={56}
          className="text-slate-400"
        />

        <p className="mt-4 font-medium text-slate-600">
          Project Preview Coming Soon
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
      priority={false}
    />
  );
}