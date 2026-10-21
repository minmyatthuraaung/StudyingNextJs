import Image from "next/image";
import Link from "next/link";
import db from "../../db/db.json";
type Post = {
  id: number;
  title: string;
  body: string;
  author: string;
  createdAt: string;
  image: string;
};

export default async function Page() {
  const posts = db.posts as Post[];

  return (
    <main className="px-6 md:px-8 py-10 max-w-5xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border border-gray-200 rounded-xl p-5 bg-white shadow-md"
          >
            <Link href={`/post/${post.id}`}>
              <div>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              </div>
              <p className="text-indigo-600 font-bold mb-2">{post.author}</p>
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-3">{post.body}</p>
              <p className="text-sm text-gray-500">{post.createdAt}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
