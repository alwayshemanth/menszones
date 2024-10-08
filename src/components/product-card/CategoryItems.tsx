import Image from "next/image";
import Link from "next/link";

interface ProductType {
  id:number
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
}

interface ProductCardProps {
  productDetails: ProductType;
}

export default function CategoryItems({ productDetails }: ProductCardProps) {
  // console.log(productDetails)
  return (
    <Link href = {`product/${productDetails.id}`}>
      <div className="m-4 p-4 h-96 w-96 flex flex-col items-center justify-between bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden rounded-lg group">
          {productDetails.imageUrl && (
            <Image
              src={productDetails.imageUrl}
              alt={productDetails.name}
              width={300}
              height={300}
              className="transition-transform duration-300 transform group-hover:scale-105"
            />
          )}
        </div>

        <div className="mt-4 flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold">{productDetails.name}</h2>
          <p className="text-gray-600">{productDetails.description}</p>
          <span className="text-lg font-bold">
            £{productDetails.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
