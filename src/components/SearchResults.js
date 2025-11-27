"use client";

import { useBooks } from "@/hooks/useBooks";
import CardCustom from "@/components/CardCustom";
import Link from "next/link";
import { Loader2, X } from "lucide-react";

export default function SearchResults({ query, onClose }) {
  const {
    data: booksData,
    isLoading,
    isError,
  } = useBooks({
    keyword: query,
    page: 1,
  });

  if (!query) return null;

  if (isLoading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 max-h-96 overflow-auto z-50">
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" />
          <p>Searching...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-50">
        <p className="text-red-500">Error searching books</p>
      </div>
    );
  }

  const books = booksData?.data?.books || [];

  if (books.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-50">
        <p className="text-gray-500">No books found for "{query}"</p>
      </div>
    );
  }

  console.log(books);

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-4 max-h-96 overflow-auto z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold">Search Results ({books.length})</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          <X />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {books.map((book, index) => (
          <Link
            key={book._id}
            href={`/book?_id=${book._id}`}
            onClick={onClose}
            className="flex gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <img
              src={book.cover_image}
              alt={book.title}
              className="w-16 h-24 object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold line-clamp-1">{book.title}</h4>
              <p className="text-sm text-gray-600">{book.author.name}</p>
              <p className="text-sm text-gray-500">{book.category?.name}</p>
              <p className="text-sm font-bold text-blue-600">
                {book.details?.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
