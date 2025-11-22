"use client";

import { useRandomBook } from "@/hooks/useBooks";

export default function RandomBook() {
  const { data, isLoading, isError, error } = useRandomBook({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error {error.message}</div>;

  console.log(data);

  const random_books = data?.data;

  console.log(random_books);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Random Books</h1>

      <div className="border p-2">
        <p className="font-semibold">{random_books.title}</p>
        <p className="text-sm text-gray-500">{random_books.author.name}</p>
      </div>
    </div>
  );
}
