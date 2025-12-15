"use client";

import { useRouter } from "next/navigation";

export default function ProductClient({ product }: any) {
  const router = useRouter();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <button
        onClick={() => router.push("/cart")}
        className="bg-blue-600 text-white px-4 py-2 mt-4"
      >
        Add to Cart
      </button>
    </main>
  );
}
