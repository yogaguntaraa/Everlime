"use client";
import { removeWishlist } from "@/action";
import { WistListType } from "@/db/models/Wishlist";
import { Dispatch, SetStateAction } from "react";
import Swal from "sweetalert2";

export default function ButtonRemoveWishlist({
  wistListId,
  setWishlist,
}: {
  readonly wistListId: string | undefined;
  setWishlist: Dispatch<SetStateAction<WistListType[]>>;
}) {
  const handleRemove = async () => {
    await removeWishlist(wistListId);
    setWishlist((prevWishlist: WistListType[]) =>
      prevWishlist.filter((item) => item._id!.toString() !== wistListId)
    );
    Swal.fire({
      title: "Removed!",
      text: "Product removed from Wishlist!",
      icon: "success",
    });
    // router.refresh();
  };

  return (
    <button
      className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 mt-5"
      onClick={() => handleRemove()}
    >
      Remove
    </button>
  );
}