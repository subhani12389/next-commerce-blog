// app/api/cart/route.ts
import { NextRequest, NextResponse } from "next/server";

let cart: any[] = []; // In-memory cart (for demo)

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(req: NextRequest) {
  const product = await req.json();
  cart.push(product);
  return NextResponse.json(cart);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  cart = cart.filter((p) => p.id !== id);
  return NextResponse.json(cart);
}
