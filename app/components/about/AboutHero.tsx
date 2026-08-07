import Container from "../ui/Container";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-white via-green-50 to-emerald-100 py-28">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            About Geekyace
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
            Building Digital Solutions
            <br />
            That Empower Businesses
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            Geekyace Digital Hub helps businesses embrace technology through
            websites, mobile apps, AI solutions, automation, branding,
            and digital experiences designed for growth.
          </p>

        </div>

      </Container>
    </section>
  );
}