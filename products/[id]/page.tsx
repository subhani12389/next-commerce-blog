import ProductClient from "./ProductClient";
import axios from "axios";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function ProductPage({ params }: Props) {
  const res = await axios.get(
    `https://fakestoreapi.com/products/${params.id}`
  );

  if (!res.data) notFound();

  return <ProductClient product={res.data} />;
}
