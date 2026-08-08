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
      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      quality={70}
      loading="lazy"
      placeholder="empty"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}