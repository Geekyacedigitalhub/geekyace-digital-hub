import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-8 py-10">

       <Header />
<Hero />
<Services />
<Portfolio />
<About />
<Contact />
<Footer />

      </main>
    </div>
  );
}