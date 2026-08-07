import Container from "@/app/components/ui/Container";

export default function Loading() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50">
      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          {/* Spinner */}
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-green-600" />

          <h2 className="mt-8 text-3xl font-bold text-slate-900">
            Loading...
          </h2>

          <p className="mt-4 text-slate-600">
            Please wait while we prepare your experience.
          </p>
        </div>
      </Container>
    </section>
  );
}