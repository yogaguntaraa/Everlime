import ButtonWishlist from "@/components/buttonWishlist";
import { ProductType } from "@/db/models/Product";
import { Heart } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: Props, // parent itu turunan dari metadata di root layout
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug;
    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/api/products/${slug}`
    );
    const product: ProductType = await response.json();

    // fetch data
    // const product = await fetch(`https://.../${slug}`).then((res) => res.json());
    //
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];

    return {
        title: "EVERLIME - " + product.name,
        // openGraph: {
        //   images: ["/some-specific-page-image.jpg", ...previousImages],
        // },
    };
}

export default async function DetailProduct({
    params,
}: {
    readonly params: { slug: string };
}) {
    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/api/products/${params.slug}`
    );
    const product: ProductType = await response.json();

    return (
        <div className="flex flex-col md:flex-row md:px-40 mt-6">
            <div className="px-5 md:hidden">
                <h1 className="text-2xl text-black_nike font-medium">{product.name}</h1>
                <h3 className="text-black_nike font-semibold">{product.excerpt}</h3>
                <h3 className="my-5 font-semibold">
                    {product.price?.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                    })}
                </h3>
            </div>
            <Image
                src={product.thumbnail}
                alt="cover"
                width={1000}
                height={1000}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px"
                }}
            />
            <div className="p-5 md:px-20">
                <div className="hidden md:block">
                    <h1 className="text-2xl text-black_nike font-medium">
                        {product.name}
                    </h1>
                    <h3 className="text-black_nike font-semibold">{product.excerpt}</h3>
                    <h3 className="my-5 font-semibold">
                        {product.price?.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                        })}
                    </h3>
                </div>
                <div className="mb-4">
                    <p className="text-sm font-medium">SIZE</p>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                            <button
                                key={size}
                                className="p-2 border border-gray-300 hover:border-black"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <ButtonWishlist productId={product._id!} />
                </div>
                <p className="py-10">{product.description}</p>
            </div>
        </div>
    );
}