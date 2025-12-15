// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Next-Commerce-Blog</h1>
      <p className="mb-4">Learn Next.js, explore blogs, and shop products all in one place!</p>
      <Link href="/blog" className="text-blue-500 underline">Go to Blog</Link>
    </div>
  );
}
