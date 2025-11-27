"use client";

import { useCart, useRemoveFromCart } from "@/hooks/useBooks"; 
import Link from "next/link";
import Image from "next/image";
import { XCircle, Loader2 } from "lucide-react";

export default function Cart() {
  const { 
    data: cartItems,
    isLoading, 
    isError 
  } = useCart();

  const { 
    mutate: removeFromCart, 
    isPending: isRemoving 
  } = useRemoveFromCart();

  const handleRemove = (id) => {
    removeFromCart(id, {
      onSuccess: () => {
        alert("Book successfully removed from cart!");
      },
      onError: (error) => {
        console.error("Failed to remove item from cart:", error);
        alert("Failed to remove item from cart.");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        <p className="ml-2">Loading Cart...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-red-600 text-center">
        Error loading cart. Please check your connection or service status.
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600">
          Time to fill it with some awesome books!
        </p>
        <Link href="/" className="text-blue-500 hover:underline mt-2 inline-block">
          Go to Books Page
        </Link>
      </div>
    );
  }

  const totalHarga = cartItems.reduce((sum, book) => {
    const priceValue = parseFloat(book.details?.price?.replace(/[^0-9.-]+/g, "") || 0);
    return sum + priceValue;
  }, 0);


  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        Shopping Cart ({cartItems.length} Items)
      </h1>

      <div className="space-y-6">
        {cartItems.map((book) => (
          <div
            key={book.id || book._id}
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
              <Link href={`/book?_id=${book._id}`} className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
                {book.title}
              </Link>
              <p className="text-sm text-gray-500">
                Author: {book.author.name || 'Unknown Author'}
              </p>
              <p className="text-lg font-bold text-red-600 mt-1">
                {book.details?.price || 'Price Unavailable'}
              </p>
            </div>

            <div className="flex flex-col items-end space-y ml-4">
              <button
                onClick={() => handleRemove(book.id || book._id)}
                disabled={isRemoving}
                className="p-1 text-red-500 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                title="Remove from Cart"
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
      <div className="mt-8 pt-4 border-t-2 flex justify-end items-center">
        <h2 className="text-xl font-bold mr-4">Total:</h2>
        <span className="text-xl font-bold text-blue-500">
          ${totalHarga.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-end mt-4">
         <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
           Proceed to Checkout
         </button>
      </div>
    </div>
  );
}