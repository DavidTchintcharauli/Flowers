import Image from "next/image";

export default function ProductCard({
  name,
  description,
  price,
  image_url,
}: {
  name: string;
  description: string;
  price: number;
  image_url: string;
}) {
  const validImageUrl =
    image_url && image_url.startsWith("http")
      ? image_url
      : "/placeholder.png";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Image
        src={validImageUrl}
        alt={name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"

      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-600 font-bold text-lg">${price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            🛒 კალათაში დამატება
          </button>
        </div>
      </div>
    </div>
  );
}
