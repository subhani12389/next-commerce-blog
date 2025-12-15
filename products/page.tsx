"use client";

import { useState } from "react";
import { products } from "../../data/products";
import { useCart } from "../context/CartContext";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");

  // Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 w-full md:w-1/3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover mb-3 rounded"
            />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-900 font-medium">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
