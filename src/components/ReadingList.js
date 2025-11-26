"use client";

import { useState } from "react";
import { useBooks } from "@/hooks/useBooks";
import Heading from "@/components/typography/Heading";
import CardCustom from "@/components/CardCustom";
import { Button } from "@/components/ui/button";

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
    setPage((prevPage) => Math.max(1, prevPage - 1));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  const books = booksData?.data?.books;

  const totalPages = booksData?.data?.last_page || 999;

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

  console.log(books);

  return (
    <div className="flex flex-col gap-3">
      <div>
        <Heading text={"Your Reading List"} />
      </div>
      <div className="flex overflow-auto gap-3">
        {books.map((book, index) => {
          return (
            <div key={index} className="shrink-0">
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
      <div className="mt-8 flex justify-center gap-4">
        <Button onClick={goToPrevPage} disabled={page === 1}>
          Prev
        </Button>
        <Button onClick={goToNextPage}>Next</Button>
      </div>
    </div>
  );
}
