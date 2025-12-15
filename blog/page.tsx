// app/blog/page.tsx
import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className="text-blue-500 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
