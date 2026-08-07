import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center"
    >
      <Image
        src="/images/logo.png"
        alt="Geekyace Digital Hub"
        width={180}
        height={60}
        priority
        className="h-auto w-[180px] object-contain"
      />
    </Link>
  );
}