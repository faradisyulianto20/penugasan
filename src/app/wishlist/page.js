"use client";

import { useWishlist, useRemoveFromWishlist } from "@/hooks/useBooks";
import Link from "next/link";
import Image from "next/image";
import { XCircle, Loader2 } from "lucide-react";

export default function Wishlist() {
  const { data: wishlist, isLoading, isError } = useWishlist();

  const { mutate: removeFromWishlist, isPending: isRemoving } =
    useRemoveFromWishlist();

  const handleRemove = (id) => {
    console.log("ID yang Diterima untuk Hapus:", id);
    removeFromWishlist(id, {
      onSuccess: () => {
        alert("Book successfully removed from wishlist!");
      },
      onError: (error) => {
        console.error("Failed to remove item:", error);
        alert("Failed to remove item from wishlist.");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        <p className="ml-2">Loading Wishlist...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-red-600 text-center">
        Error loading wishlist. Please check your connection or service status.
      </div>
    );
  }

  console.log(wishlist);

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-600">
          Find some great books and add them to your wishlist!
        </p>
        <Link
          href="/"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Go to Books Page
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        My Wishlist ({wishlist.length} Items)
      </h1>

      <div className="space-y-6">
        {wishlist.map((book, index) => (
          <div
            key={index}
            className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="relative w-20 h-28 shrink-0 mr-4">
              <Image
                src={book.cover_image || "/placeholder.jpg"}
                alt={book.title}
                fill
                sizes="80px"
                className="object-contain rounded"
              />
            </div>

            <div className="grow">
              <Link
                href={`/book?_id=${book._id}`}
                className="text-xl font-semibold transition"
              >
                {book.title}
              </Link>
              <p className="text-sm text-gray-500">
                Author: {book.author.name || "Unknown Author"}
              </p>
              <p className="text-lg font-bold mt-1">
                {book.details?.price || "Price Unavailable"}
              </p>
            </div>

            <div className="flex flex-col items-end space-y-2 ml-4">
              <button
                onClick={() => handleRemove(book._id)}
                disabled={isRemoving}
                className="p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition"
                title="Remove from Wishlist"
              >
                {isRemoving ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <XCircle className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
