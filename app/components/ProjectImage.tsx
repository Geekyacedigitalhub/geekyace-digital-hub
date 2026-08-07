import Image from "next/image";

interface ProjectImageProps {
  image: string;
  title: string;
}

export default function ProjectImage({
  image,
  title,
}: ProjectImageProps) {
  return (
    <div className="relative h-56 overflow-hidden rounded-2xl bg-gray-100">

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

    </div>
  );
}