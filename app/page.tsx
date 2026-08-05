import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-8 py-10">

        <Header />
<Hero />
<Services />
      </main>
    </div>
  );
}