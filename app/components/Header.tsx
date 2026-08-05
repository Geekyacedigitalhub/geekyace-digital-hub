import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <a href="/">
          <Image
  src="/images/logo.png"
  alt="Geekyace Digital Hub Logo"
  width={320}
  height={80}
  priority
  style={{ width: "auto", height: "60px" }}
/>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <a
            href="#"
            className="text-gray-700 hover:text-green-500 transition"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-gray-700 hover:text-green-500 transition"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="text-gray-700 hover:text-green-500 transition"
          >
            Portfolio
          </a>

          <a
            href="#about"
            className="text-gray-700 hover:text-green-500 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-700 hover:text-green-500 transition"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition"
          >
            Get Started
          </a>

        </nav>

      </div>
    </header>
  );
}