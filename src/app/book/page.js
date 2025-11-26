"use client";

import { useBookQuery } from "@/hooks/useBooks";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import { HrefButton } from "@/components/HrefButton";

export default function Book() {
  const searchParams = useSearchParams();
  const _id = searchParams.get("_id");

  const { data: booksData, isLoading, isError, error } = useBookQuery(_id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error : {error.message}</div>;

  const data = booksData?.data;

  console.log(booksData);

  console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-6">
      <Image
        alt={data.title}
        width={200}
        height={150}
        src={data.cover_image}
        className="mx-auto"
      />
      <div>
        <p className="font-bold text-3xl">{data.title}</p>
        <p className="font-semibold text-xl">Author: {data.author.name}</p>
        <p>
          <span className="font-semibold">Category :</span>
          {data.category.name}
        </p>
        <p>
          <span className="font-semibold">Format :</span> {data.details.format}
        </p>
        <p>
          <span className="font-semibold">ISBN :</span> {data.details.isbn}
        </p>
        <p>
          <span className="font-semibold">No GM :</span> {data.details.no_gm}
        </p>
        <p>
          <span className="font-semibold">Price :</span> {data.details.price}
        </p>
        <p>
          <span className="font-semibold">Publisher :</span> {data.publisher}
        </p>
        <p>
          <span className="font-semibold">Published date :</span>{" "}
          {data.details.published_date}
        </p>
        <p>
          <span className="font-semibold">Size :</span> {data.details.size}
        </p>
        <p>
          <span className="font-semibold">Total pages :</span>{" "}
          {data.details.total_pages}
        </p>
        <p className="text-gray-400">{data.summary}</p>
        <HrefButton href={data.buy_links[0].url} text={"Buy Now"} />
      </div>
    </div>
  );
}
