import { getProducts } from "..//server/products.actions";
import ProductCard from "../components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛍️ ჩვენი პროდუქტები</h1>
      {products.length === 0 ? (
        <p className="text-gray-500 text-center">🚀 პროდუქტები ჯერ არ არის დამატებული.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}
