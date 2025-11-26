"use client";

import { useState } from "react";
import { useScanBook } from "@/hooks/useScanBook";

import Heading from "@/components/typography/Heading";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/hooks/useBooks";

import CardCustom from "@/components/CardCustom";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const { data, error, isPending, refetch } = useScanBook(file);

  const { data: booksData, isLoading, isError } = useBooks({});

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error {error.message}</div>;

  const books = booksData?.data?.books;

  console.log(books);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Heading text={"Scan Book Cover"} />

      <h3></h3>
      <div className="flex w-full justify-center gap-3">
        <div>
          <Input
            id="picture"
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <Button onClick={refetch} disabled={!file || isPending}>
          {isPending ? "Processing..." : "Search"}
        </Button>
      </div>

      {error && <p>{error.message}</p>}

      <div className="flex">
        {data && (
          <div className="border border-2-black w-full mx-auto px-6 py-4 rounded-2xl ">
            <p>
              <span className="font-bold">Title : </span>
              {data.title}
              {data.title == null && <p>"Data tidak terdeteksi"</p>}
            </p>
            <p>
              <span className="font-bold">Author : </span> {data.author}
              {data.author == null && <p>"Data tidak terdeteksi"</p>}
            </p>
            <p>
              <span className="font-bold">Year : </span> {data.year}
              {data.year == null && "Data tidak terdeteksi"}
            </p>
            <p>
              <span className="font-bold">Genre : </span> {data.genre}
              {data.genre == null && <p>"Data tidak terdeteksi"</p>}
            </p>
          </div>
        )}

        <div className="flex overflow-auto gap-3 my-6">
          {books.map((book, index) => {
            return (
              <div key={`${index}-${book.id || index}`} className="shrink-0">
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
      </div>
    </div>
  );
}
