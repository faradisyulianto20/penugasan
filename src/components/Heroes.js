"use client";

import { useRandomBook, useAddToCart } from "@/hooks/useBooks";

import Image from "next/image";

const data = {
  genre: ["Self-Improvement", "Techonlogy"],
  title: "Beyond The Start",
  price: "$1,123.42",
  avialability: "In Stock",
  description:
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. Author:Marcus pson",
  pages: "328",
  publisher: "Noir House Books",
  ISBN: "938-1-234567-90-6",
  published: "January 20, 2024",
};

import { HrefButton } from "@/components/HrefButton";
import {
  Heart,
  ShoppingCart,
  Eye,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { HeroesSkeleton } from "@/components/HeroesSkeleton";
import { useAddToWishlist } from "@/hooks/useBooks";

export default function Heroes() {
  const {
    data: randomBooksData,
    isLoading,
    isError,
    error,
    refetch,
  } = useRandomBook({});

  const { mutate: addToWishlistMutate, isPending: isAddingToWishlist } =
    useAddToWishlist();

  const { mutate: addToCartMutate, isPending: isAddingToCart } = useAddToCart();

  const getNewBook = () => {
    refetch();
  };

  if (isLoading) return <HeroesSkeleton />;
  if (isError) return <div>Error {error.message}</div>;

  const random_books = randomBooksData?.data;

  if (!random_books) return <div>No book data available.</div>;

  const handleAddToCart = () => {
    addToCartMutate(random_books, {
      onSuccess: () => {
        alert(`${random_books.title} added to cart!`);
      },
      onError: (err) => {
        console.error("Failed to add to cart:", err);
        alert("Failed to add to cart.");
      },
    });
  };

  const handleAddToWishlist = () => {
    addToWishlistMutate(random_books, {
      onSuccess: () => {
        alert(`${random_books.title} added to wishlist!`);
      },
      onError: (err) => {
        console.error("Failed to add to wishlist:", err);
        alert("Failed to add to wishlist.");
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex px-6 text-gray-500 w-fit mx-auto md:m-0">
        <span className="font-semibold text-black">Home</span> <ChevronRight />{" "}
        Shop
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
        <div className="relative w-full h-[500px] md:h-full flex items-center justify-center">
          <button
            onClick={getNewBook}
            disabled={isLoading}
            className="absolute left-4 z-10 p-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-300 hover:bg-gray-400 transition-colors rounded-full shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full h-full">
            <Image
              alt="book-image"
              src={random_books.cover_image || "/placeholder.jpg"}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={getNewBook}
            disabled={isLoading}
            className="absolute right-4 z-10 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed bg-gray-300 hover:bg-gray-400 transition-colors shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-3 justify-center">
          <div className="flex flex-col sm:flex-row gap-3">
            <span className="bg-gray-300 px-4 py-1 rounded-full w-fit">
              {random_books.category.name}
            </span>
          </div>
          <div className="mt-3">
            <h1 className="font-bold text-3xl md:text-4xl">{random_books.title}</h1>
            <h2 className="font-bold text-lg md:text-xl">{random_books.details.price}</h2>
            <h3 className="font-semibold text-gray-700">
              Availability:{" "}
              <span className="font-bold text-blue-400">
                {data.avialability}
              </span>
            </h3>
            <p className="text-gray-500 max-h-24 overflow-auto my-6">
              {random_books.summary}
            </p>
            <ul className="text-gray-500">
              <li>
                <span className="font-bold">Pages: </span>{" "}
                {random_books.details.total_pages}
              </li>
              <li>
                <span className="font-bold">Publisher: </span>{" "}
                {random_books.publisher}
              </li>
              <li>
                <span className="font-bold">ISBN: </span>{" "}
                {random_books.details.isbn}
              </li>
              <li>
                <span className="font-bold">Published: </span>{" "}
                {random_books.details.published_date}
              </li>
            </ul>
          </div>

          <div className="flex gap-3 items-center mt-6">
            <HrefButton
              text={"Buy Now"}
              href={random_books?.buy_links?.[0]?.url}
            />

            <button
              onClick={handleAddToWishlist}
              disabled={isAddingToWishlist}
              className="bg-blue-200 hover:bg-blue-100 flex justify-items-center p-1 rounded-full w-7 h-7 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title={isAddingToWishlist ? "Adding..." : "Add to Wishlist"}
            >
              <Heart className="w-5 h-5" />
            </button>

            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="bg-blue-200 hover:bg-blue-100 flex justify-items-center p-1 rounded-full w-7 h-7 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              title={isAddingToCart ? "Adding..." : "Add to Cart"}
            >
              <ShoppingCart className="w-5 h-5" />
            </button>

            <Link href={`/book?_id=${random_books._id}`}>
              <div className="bg-blue-200 hover:bg-blue-100 flex justify-items-center p-1 rounded-full w-7 h-7 cursor-pointer">
                <Eye className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
