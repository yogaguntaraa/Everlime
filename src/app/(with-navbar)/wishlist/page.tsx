"use client";

import ProductCard from "@/components/productCard";
import { WistListType } from "@/db/models/Wishlist";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  //kalau versi client tidak perlu pasang cookies manual karena auto ngebaca yang di browser

  const [wishlist, setWishlist] = useState<WistListType[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist"
      );
      const data = await response.json();
      // const data = await getWishlist();
      setWishlist(data);
    })();
  }, []);

  return (
    <div>
      <div className="flex my-5 mx-5 gap-2 border-[3px] p-2 rounded-lg">
        <Search strokeWidth={1} />
        <input type="text" className="bg-transparent flex-1 outline-none" />
      </div>
      <h1 className="p-5 text-xl font-bold">My Wishlist</h1>
      <div className="w-3/4 mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {wishlist?.map((w) => (
          <ProductCard
            setWishlist={setWishlist}
            buttonWishlist={false}
            buttonRemoveWishlist={true}
            key={w._id}
            dataWishlist={w}
          />
        ))}
      </div>
    </div>
  );
}