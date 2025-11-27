"use client";

import { useState } from "react";
import { useWishlist } from "@/hooks/useBooks";
import Heading from "@/components/typography/Heading";
import CardCustom from "@/components/CardCustom";
import { Button } from "@/components/ui/button";

import SkeletonCard from "@/components/SkeletonCard";
import Link from "next/link";

export default function ReadingList() {
  const [page, setPage] = useState(1);

  const { data: booksData, isLoading, isError } = useWishlist();

  const goToNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-6">
        <Heading text="Your Reading List" />
        <div className="flex gap-3 overflow-auto mb-3 scrollbar-hide">
          {[...Array(7)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
        <div className="mt-8 flex justify-between sm:justify-center gap-4">
          <div className="bg-gray-300 h-10 w-20 rounded animate-pulse"></div>
          <div className="bg-gray-300 h-6 w-20 rounded animate-pulse"></div>
          <div className="bg-gray-300 h-10 w-20 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (isError) return <p>Error fetching data</p>;

  const books = booksData;

  if (!books || books.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <Heading text={"Your Reading List"} />
        <p className="mt-4 text-gray-600">No books found on this page.</p>
      </div>
    );
  }

  console.log(booksData?.data?.pagination);
  const totalBooks = booksData?.length;
  console.log(books);

  return (
    <div className="flex flex-col gap-3 max-w-6xl mx-auto p-6 pr-0">
      <div>
        <Heading text={"Your Reading List"} />
      </div>
      <div className="flex overflow-auto gap-5 scrollbar-hide">
        {books.map((book, index) => {
          return (
            <Link
              key={`${page}-${book._id || index}`}
              className="shrink-0"
              href={`/book?_id=${book._id}`}
            >
              <CardCustom
                image_url={book.cover_image}
                title={book.title}
                genre={book.category.name}
                price={book.details.price}
                className="shadow-none transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
