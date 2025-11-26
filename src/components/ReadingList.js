"use client";

import { useState } from "react";
import { useBooks } from "@/hooks/useBooks";
import Heading from "@/components/typography/Heading";
import CardCustom from "@/components/CardCustom";
import { Button } from "@/components/ui/button";

import SkeletonCard from "@/components/SkeletonCard";

export default function ReadingList() {
  const [page, setPage] = useState(1);

  const {
    data: booksData,
    isLoading,
    isError,
  } = useBooks({
    page,
  });

  const goToNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto">
        <Heading text="Your Reading List" />
        <div className="flex gap-3 overflow-auto my-6">
          {[...Array(7)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 animate-pulse">
          <div className="bg-gray-300 h-5 rounded w-32"></div>
          <div className="bg-gray-300 h-5 rounded w-28"></div>
          <div className="bg-gray-300 h-5 rounded w-36"></div>
          <div className="bg-gray-300 h-5 rounded w-28"></div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <div className="bg-gray-300 h-10 w-20 rounded animate-pulse"></div>
          <div className="bg-gray-300 h-10 w-20 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (isError) return <p>Error fetching data</p>;

  const books = booksData?.data?.books;

  if (!books || books.length === 0) {
    return (
      <div className="text-center p-10">
        <Heading text={"Your Reading List"} />
        <p className="mt-4 text-gray-600">No books found on this page.</p>

        <div className="mt-4">
          <Button onClick={goToPrevPage}>Back to Page {page - 1}</Button>
        </div>
      </div>
    );
  }

  console.log(booksData?.data?.pagination);
  const itemsPerPage = booksData?.data?.pagination?.itemsPerPage;
  const totalItems = booksData?.data?.pagination?.totalItems;
  const totalPages = booksData?.data?.pagination?.totalPages;
  console.log(books);

  return (
    <div className="flex flex-col gap-3 max-w-7xl mx-auto p-6 pr-0">
      <div>
        <Heading text={"Your Reading List"} />
      </div>
      <div className="flex overflow-auto gap-3">
        {books.map((book, index) => {
          return (
            <div key={`${page}-${book.id || index}`} className="shrink-0">
              <CardCustom
                image_url={book.cover_image}
                title={book.title}
                genre={book.category.name}
                price={book.details.price}
              />
            </div>
          );
        })}
      </div>
      <div>
        <div className="grid grid-cols-2">
          <div>Current page: {page}</div>
          <div>Total Items: {totalItems}</div>
          <div>Items per Pages : {itemsPerPage}</div>
          <div>Total Pages: {totalPages}</div>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button onClick={goToPrevPage} disabled={page === 1}>
          Prev
        </Button>
        <Button onClick={goToNextPage}>Next</Button>
      </div>
    </div>
  );
}
