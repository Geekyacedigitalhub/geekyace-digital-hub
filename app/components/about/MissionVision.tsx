import Container from "../ui/Container";

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              To help businesses succeed by delivering
              innovative, reliable, and scalable digital
              solutions tailored to their goals.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900">
              Our Vision
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              To become a trusted digital partner for businesses
              worldwide, creating technology that inspires
              growth and innovation.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}