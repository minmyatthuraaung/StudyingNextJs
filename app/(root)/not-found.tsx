import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="max-w-xl w-full rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/40 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          404 Error
        </p>
        <h1 className="mt-4 text-5xl font-bold sm:text-6xl">Page not found</h1>
        <p className="mt-4 text-lg text-slate-400">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
