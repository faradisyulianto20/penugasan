"use client";

import { useState } from "react";
import { useBooks } from "@/hooks/useBooks";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UseBook() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useBooks({
    page,
    // sort: "asc",
    // year: 2023,
    // genre: "horror",
    // keyword: "",
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  console.log(data);

  const books = data?.data?.books;

  console.log(books);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Book List</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {books.map((book) => (
          <div key={book._id} className="border p-2">
            <p className="font-semibold">{book.title}</p>
            <p className="text-sm text-gray-500">{book.author.name}</p>
            <Link href={`/home/book?_id=${book._id}`}>
              <Button>Lihat</Button>
            </Link>
          </div>
        ))}
      </div>

      <Button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
        Prev
      </Button>

      <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
    </div>
  );
}
