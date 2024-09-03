"use client";
import { WistListType } from "@/db/models/Wishlist";
import { ProductType } from "@/db/models/Product";
import Image from "next/image";
import Link from "next/link"
import { Dispatch, SetStateAction } from "react";
import ButtonWishlist from "./buttonWishlist";
import ButtonRemoveWishlist from "./buttonRemoveWishlist";

export default function ProductCard({
    width,
    data,
    dataWishlist,
    buttonWishlist,
    buttonRemoveWishlist,
    setWishlist,
}: Readonly<{
    setWishlist?: Dispatch<SetStateAction<WistListType[]>>;
    width?: string;
    data?: ProductType;
    dataWishlist?: WistListType;
    buttonWishlist: boolean;
    buttonRemoveWishlist: boolean;
}>) {
    return (
        <div className="card w-[600px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-7 mt-4">
            <Link href={`/products/${data?.slug || dataWishlist?.product?.slug}`}>
                <Image
                    // className=" rounded-t-lg h-[400px] w-[400px]"
                    src={data?.thumbnail! || dataWishlist?.product?.thumbnail!}
                    alt="cover"
                    width={2000}
                    height={2000}
                    style={{ width: "100%" }}
                />
            </Link>
            <div className="card-body justify beetwen space-y-6">
                <a href="#">
                    <h3 className="text-black font-semibold tracking-tight text-dark text-center mt-5">
                        {data?.name || dataWishlist?.product?.name}
                    </h3>
                    <br />
                    <h3 className="text-gray-500 font-semibold tracking-tight text-dark text-center mb-5">
                        {data?.excerpt || dataWishlist?.product?.excerpt}
                    </h3>
                </a>

                <div className="container">
                    <span className="font-bold text-dark flex container items-center justify-between">
                        {(data?.price || dataWishlist?.product?.price)?.toLocaleString(
                            "id-ID",
                            {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                            }
                        )}
                    </span>
                    {buttonWishlist && <ButtonWishlist productId={data?._id!} />}
                    {buttonRemoveWishlist && (
                        <ButtonRemoveWishlist
                            setWishlist={setWishlist!}
                            wistListId={dataWishlist?._id}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
{/* <div className="price-wishlist-container" style={{
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
}}> */}