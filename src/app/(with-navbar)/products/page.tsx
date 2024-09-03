"use client";

import ProductCard from "@/components/productCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "use-debounce"

type ProductType = {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [value] = useDebounce(search, 1000);

  const fetchData = async (search: string = "") => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/api/products?search=${search}&page=${page}`
      );
      const data = await res.json();
      setProducts((prevProducts) => [...prevProducts, ...data]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(data.length > 0);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    fetchData(value);
  }, [value]);

  // const products = await fetchProducts();

  console.log(products);

  return (
    <div>

      {/* <div className="flex md:hidden p-5 gap-5 border-b-2 overflow-x-auto no-scrollbar">
        <h1 className="font-medium">Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
        <h1>Lifestyle</h1>
      </div> */}

      <div className="flex p-5 justify-between items-center">
        {/* <h3 className="font-medium text-gray-500">{products.length} Results</h3> */}
        <div className="flex gap-2 border-[1px] py-1 px-4 rounded-full items-center">
          <span className="font-medium">Filter</span>
          <SlidersHorizontal size={20} />
        </div>
      </div>
      <div  className="flex my-5 mx-5 gap-2 border-[3px] p-2 rounded-lg">
        <Search strokeWidth={1} />
        <input
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="bg-transparent flex-1 outline-none"
        />
      </div>

      <InfiniteScroll
        dataLength={products.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center", color: "red"}}>
            <b>You have seen it all</b>
          </p>
        }
      >
        <div className="w-3/4 mx-auto grid grid-cols-2 md:grid-cols-3 gap-7">
          {products?.map((p) => (
            <ProductCard
              buttonRemoveWishlist={false}
              buttonWishlist={true}
              key={p.slug}
              data={p}
            />
          ))}
        </div>
      </InfiniteScroll>

      {/* {products?.map((p) => (
          <ProductCard
            buttonRemoveWishlist={false}
            buttonWishlist={true}
            key={p.slug}
            data={p}
          />
        ))} */}
    </div>
  );
}