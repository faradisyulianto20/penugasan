"use client";

import { useBookQuery } from "@/hooks/useBooks";
import { useSearchParams } from "next/navigation";

export default function Book() {
  const searchParams = useSearchParams();
  const _id = searchParams.get("_id");

  const { data: booksData, isLoading, isError, error } = useBookQuery(_id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error : {error.message}</div>;

  const data = booksData?.data;

  console.log(data);

  return (
    <div className="p-6">
      <p className="font-bold">{data.title}</p>
      <p>Author: {data.author.name}</p>
      <p>Category :{data.category.name}</p>
      <p className="text-gray-400">{data.summary}</p>
    </div>
  );
}
