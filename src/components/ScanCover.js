"use client";

import { useState } from "react";
import { useScanBook } from "@/hooks/useScanBook";

import Heading from "@/components/typography/Heading";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/hooks/useBooks";

import CardCustom from "@/components/CardCustom";
import BookScanSkeleton from "@/components/BookScanSkeleton";
import Link from "next/link";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [page, setPage] = useState(null);
  const [sort, setSort] = useState(null);
  const [year, setYear] = useState(null);
  const [genre, setGenre] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const { data, error, isPending, refetch } = useScanBook(file);

  const {
    data: booksData,
    isLoading,
    isError,
    error: booksError,
  } = useBooks({ page, sort, year, genre, keyword });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSearch = async () => {
    const result = await refetch();

    if (result.data) {
      setGenre(result.data.genre || null);
    }
  };

  if (isLoading) return <BookScanSkeleton />;
  if (isError) return <div>Error {booksError?.message}</div>;

  const books = booksData?.data?.books || [];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Heading text={"Scan Book Cover"} />

      <div className="flex w-full justify-center gap-3 my-6">
        <div>
          <Input
            id="picture"
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
          />
        </div>

        <Button onClick={handleSearch} disabled={!file || isPending}>
          {isPending ? "Processing..." : "Search"}
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded my-4">
          {error.message}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6 my-6">
        {preview && data && (
          <div className="w-full md:w-1/3">
            <img
              src={preview}
              alt="Uploaded book cover"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        )}

        {data && (
          <div className="border-2 border-gray-300 w-full px-6 py-4 rounded-md">
            <h1 className="font-bold text-xl mb-2">Scan Result</h1>
            <div className="">
              <p>
                <span className="font-bold">Title: </span>
                {data.title || (
                  <span className="text-gray-500 italic">
                    Data tidak terdeteksi
                  </span>
                )}
              </p>
              <p>
                <span className="font-bold">Author: </span>
                {data.author || (
                  <span className="text-gray-500 italic">
                    Data tidak terdeteksi
                  </span>
                )}
              </p>
              <p>
                <span className="font-bold">Year: </span>
                {data.year || (
                  <span className="text-gray-500 italic">
                    Data tidak terdeteksi
                  </span>
                )}
              </p>
              <p>
                <span className="font-bold">Genre: </span>
                {data.genre || (
                  <span className="text-gray-500 italic">
                    Data tidak terdeteksi
                  </span>
                )}
              </p>
            </div>
          </div>
        )}
      </div>

      {data && (
        <div className="my-6">
          <h2 className="text-2xl font-bold mb-4">
            Similar Books {books.length > 0 && `(${books.length})`}
          </h2>

          {books.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No similar books found
            </div>
          ) : (
            <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide">
              {books.map((book, index) => (
                <Link
                  key={book._id || `${index}-${book.title}`}
                  href={`/book?_id=${book._id}`}
                  className="shrink-0"
                >
                  <CardCustom
                    image_url={book.cover_image}
                    title={book.title}
                    genre={book.category?.name}
                    price={book.details?.price}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
