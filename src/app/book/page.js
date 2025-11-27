"use client";

import { useBookQuery, useAddToWishlist, useAddToCart } from "@/hooks/useBooks"; // <-- IMPORT HOOKS BARU
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import { HrefButton } from "@/components/HrefButton";
import DetailBookSkeleton from "@/components/DetailBookSkeleton";

import { Heart, ShoppingCart } from "lucide-react";

export default function Book() {
  const searchParams = useSearchParams();
  const _id = searchParams.get("_id");

  const { data: booksData, isLoading, isError, error } = useBookQuery(_id);

  const { mutate: addToWishlistMutate, isPending: isAddingToWishlist } = useAddToWishlist();

  const { mutate: addToCartMutate, isPending: isAddingToCart } = useAddToCart();

  if (isLoading) return <DetailBookSkeleton />;
  if (isError) return <div>Error : {error.message}</div>;

  const data = booksData?.data;

  if (!data) return <div>Book not found.</div>;

  const handleAddToWishlist = () => {
    addToWishlistMutate(data, {
      onSuccess: () => {
        alert(`${data.title} added to wishlist!`);
      },
      onError: (err) => {
        console.error("Failed to add to wishlist:", err);
        alert("Failed to add to wishlist.");
      },
    });
  };

  const handleAddToCart = () => {
    addToCartMutate(data, {
      onSuccess: () => {
        alert(`${data.title} added to cart!`);
      },
      onError: (err) => {
        console.error("Failed to add to cart:", err);
        alert("Failed to add to cart.");
      },
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
      <div className="flex justify-center items-start">
        <Image
          alt={data.title}
          width={400}
          height={600}
          src={data.cover_image}
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
      <div className="">
        <p className="font-bold text-3xl">{data.title}</p>
        <p className="font-semibold text-xl">Author: {data.author.name}</p>
        <p>
          <span className="font-semibold">Category: </span>
          {data.category.name}
        </p>
        <p className="text-gray-600 leading-relaxed my-6 max-h-48 overflow-auto">
          {data.summary}
        </p>
        
        <div className="pt-4 flex gap-3 items-center">
          <HrefButton href={data.buy_links?.[0]?.url || "#"} text={"Buy Now"} />
          <p className="text-xl font-bold">{data.details.price}</p>
          
          <button
            onClick={handleAddToWishlist}
            disabled={isAddingToWishlist}
            className="bg-blue-200 hover:bg-blue-100 flex justify-center items-center p-2 rounded-full w-10 h-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition"
            title={isAddingToWishlist ? "Adding to Wishlist..." : "Add to Wishlist"}
          >
            <Heart className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="bg-blue-200 hover:bg-blue-100 flex justify-center items-center p-2 rounded-full w-10 h-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition "
            title={isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 pt-4">
          <p>
            <span className="font-semibold">Format: </span>{" "}
            {data.details.format}
          </p>
          <p>
            <span className="font-semibold">ISBN: </span> {data.details.isbn}
          </p>
          <p>
            <span className="font-semibold">No GM: </span> {data.details.no_gm}
          </p>
          <p>
            <span className="font-semibold">Publisher: </span> {data.publisher}
          </p>
          <p>
            <span className="font-semibold">Published date: </span>{" "}
            {data.details.published_date}
          </p>
          <p>
            <span className="font-semibold">Size: </span> {data.details.size}
          </p>
          <p>
            <span className="font-semibold">Total pages: </span>{" "}
            {data.details.total_pages}
          </p>
        </div>
      </div>
    </div>
  );
}