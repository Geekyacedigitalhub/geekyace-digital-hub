import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="relative flex h-12 w-[180px] items-center"
      aria-label="GeekyAce Digital Hub Home"
    >
      <Image
        src="/images/logo.png"
        alt="GeekyAce Digital Hub"
        fill
        sizes="180px"
        className="object-contain object-left"
        priority
      />
    </Link>
  );
}