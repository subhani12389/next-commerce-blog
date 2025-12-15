"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h1 className="text-xl">Your cart is empty</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-white p-4 mb-4 rounded shadow"
        >
          <img src={item.image} className="h-20 w-20 rounded" />
          <div className="flex-1">
            <h2 className="font-semibold">{item.name}</h2>
            <p>₹{item.price} × {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
