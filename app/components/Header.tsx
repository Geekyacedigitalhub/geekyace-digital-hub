export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-3xl font-bold">
        Geekyace Digital Hub
      </h2>

      <nav className="flex gap-6 text-lg">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}