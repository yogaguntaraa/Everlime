"use client";

import { addWishlist } from "@/action";
import { Heart } from "lucide-react"
import Swal from "sweetalert2";

export default function ButtonWishlist({ productId }: { productId: string }) {
  const handleAddWishlist = async () => {
    const { id } = await addWishlist(productId);
    if (id) {
      Swal.fire({
        title: "Success!",
        text: "Product added to Wishlist!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please login first!",
        icon: "error",
      });
    }
  };

  return (
    <button
      onClick={() => handleAddWishlist()}
      className=" w-full py-3 flex mt-2 bg-black justify-center items-center gap-3 text-white p-3 px-6 rounded-lg"
    >
      Add To Wishlist <Heart size={18} />
    </button>
  );
}