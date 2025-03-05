"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductById } from "../../server/product/getProductById";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const data = await getProductById(id as string);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">⏳ იტვირთება...</p>;

  if (!product)
    return (
      <div className="text-center text-red-500">
        ❌ პროდუქტი ვერ მოიძებნა!
        <br />
        <Link href="/products">
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            🔙 დაბრუნება პროდუქტებზე
          </button>
        </Link>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <Image
        src={product.image_url || "/fallback.jpg"}
        alt={product.name}
        width={600}
        height={400}
        className="w-full h-96 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
      <p className="text-gray-700 mt-3">{product.description}</p>
      <p className="text-green-600 font-bold text-xl mt-4">${product.price}</p>

      <div className="mt-6 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          🛒 კალათაში დამატება
        </button>
        <Link href="/products">
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400">
            🔙 უკან დაბრუნება
          </button>
        </Link>
      </div>
    </div>
  );
}
