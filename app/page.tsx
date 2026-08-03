export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--secondary)]">
          Welcome to
        </p>

        <h1 className="text-5xl font-semibold text-[var(--primary)]">
          Avi Lanka
        </h1>

        <p className="mt-4 text-lg text-[var(--muted-foreground)]">
          Discover Sri Lanka, your way.
        </p>
      </div>
    </main>
  );
}