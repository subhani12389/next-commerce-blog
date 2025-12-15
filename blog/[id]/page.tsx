import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content: "This is a beginner guide to Next.js.",
  },
  {
    id: 2,
    title: "Understanding SSG, SSR, and ISR",
    content: "Learn about SSG, SSR, and ISR in Next.js.",
  },
  {
    id: 3,
    title: "Building E-commerce with Next.js",
    content: "Build an e-commerce app using Next.js.",
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <h1 className="p-6 text-2xl">Post Not Found</h1>;
  }

  return (
    <div className="p-6">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
