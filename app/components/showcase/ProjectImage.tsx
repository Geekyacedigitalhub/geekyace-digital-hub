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
      <div className="flex h-full min-h-[256px] flex-col items-center justify-center bg-slate-100 text-slate-500">
        <ImageIcon className="h-12 w-12" />
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
      quality={75}
      loading="lazy"
      sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}