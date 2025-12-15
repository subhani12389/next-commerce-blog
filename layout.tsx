import "./globals.css";
import Navbar from "./Navbar";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "Next-Commerce-Blog",
  description: "Learn Next.js, explore blogs, and shop products!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <CartProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
