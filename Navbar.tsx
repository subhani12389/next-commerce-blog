"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <nav className="flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/cart" className="hover:underline">Cart</Link>
        <Link href="/dashboard" className="hover:underline ml-4">Dashboard</Link>
      </nav>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded text-black sm:ml-4 flex-1"
      />
    </header>
  );
}
