type Post = {
  id: number;
  title: string;
  body: string;
  author: string;
  createdAt: string;
};

export default async function Page() {
  const res = await fetch("http://localhost:3001/posts", {
    next: { revalidate: 10 },
  });
  const posts = (await res.json()) as Post[];

  return (
    <main style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Posts</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "1.25rem",
              background: "#fff",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
            }}
          >
            <p
              style={{
                color: "#1f2937",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              {post.author}
            </p>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              {post.title}
            </h2>
            <p
              style={{
                color: "#4b5563",
                lineHeight: 1.6,
                marginBottom: "0.75rem",
              }}
            >
              {post.body}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
              {post.createdAt}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
