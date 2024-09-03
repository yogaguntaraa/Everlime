import ProductCard from "@/components/productCard";
import SlideBanner from "@/components/slideBanner";
import { ProductType } from "@/db/models/Product";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/products?search=&page=1"
  );
  const data: ProductType[] = await response.json();
  return (
    <div className='container'>
      <SlideBanner />
      <br />
      <div className="flex justify-between mt-7">
        <h2 className="text-xl font-bold mt-7">Featured</h2>
        <Link href="/products" className="text-sm font-bold mt-7">
          See all
        </Link>
      </div>
      <div className="w-auto mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 mb-6">
        {data?.slice(0, 4).map((p) => (
          <ProductCard
            key={p._id}
            buttonRemoveWishlist={false}
            buttonWishlist={false}
            width="500px"
            data={p}
          />
        ))}
      </div>
      <br />
      <div className="w-full relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold text-center">About Us</h1>
          <Link
            href={"/about"}
            className='bg-black px-9 py-2 text-white rounded hover:bg-opacity-80 transition mt-5'>
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}