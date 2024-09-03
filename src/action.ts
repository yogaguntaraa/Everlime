"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = () => {
  const cookie = cookies();
  cookie.delete("authorization");
  redirect("/login");
};

export const addWishlist = async (productId: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist",
      {
        body: JSON.stringify({ productId }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const removeWishlist = async (wistListId: string | undefined) => {
  await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist", {
    body: JSON.stringify({ wistListId }),
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(), //karena dari server, cookies harus ditulis manual
    },
  });

  revalidatePath("/wishlist");
  // revalidatePath khusus untuk server
  // revalidatePath("/", "layout"); // ngehapus cache, sehingga ketika mengunjungi akan fetch lagi
};

export const getWishlist = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist",
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(), //karena dari server, cookies harus ditulis manual
      },
    }
  );
  return await response.json();
};
