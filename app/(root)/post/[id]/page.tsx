import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
  author: string;
  createdAt: string;
  image: string;
};

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    notFound();
  }

  const post = (await response.json()) as Post;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Post detail
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              {post.title}
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Back to home
          </Link>
        </div>

        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/40">
          <div className="relative h-72 sm:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                By {post.author}
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg md:text-xl">
              {post.body}
            </p>

            <div className="rounded-3xl bg-slate-950/80 p-6 border border-slate-800">
              <h2 className="text-xl font-semibold text-slate-100">
                Quick summary
              </h2>
              <p className="mt-3 text-slate-400">
                This post is published by {post.author} and is part of the
                detail view. Use this section to highlight the most important
                information and keep the reader engaged.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page;
