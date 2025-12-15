"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/products"
          className="bg-green-600 text-white p-6 rounded shadow hover:bg-green-700 transition text-center"
        >
          Manage Products
        </Link>
        <Link
          href="/cart"
          className="bg-yellow-600 text-white p-6 rounded shadow hover:bg-yellow-700 transition text-center"
        >
          View Cart
        </Link>
        <Link
          href="/blog"
          className="bg-blue-600 text-white p-6 rounded shadow hover:bg-blue-700 transition text-center"
        >
          Blog
        </Link>
        <Link
          href="/"
          className="bg-gray-800 text-white p-6 rounded shadow hover:bg-gray-900 transition text-center"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
