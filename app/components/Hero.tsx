export default function Hero() {
  return (
    <section className="mt-20 max-w-3xl">

      <h1 className="text-6xl font-bold leading-tight">
        Building Smart Digital Solutions
        <br />
        for Modern Businesses
      </h1>

      <p className="mt-8 text-xl text-gray-600 leading-9">
        We help businesses transform ideas into successful digital
        products through website development, AI solutions,
        automation, graphic design, and CAD drafting.
      </p>

      <div className="mt-10 flex gap-5">

        <button className="rounded-full bg-black px-8 py-4 text-white font-semibold">
          Get Started
        </button>

        <button className="rounded-full border border-gray-300 px-8 py-4 font-semibold">
          View Portfolio
        </button>

      </div>

    </section>
  );
}