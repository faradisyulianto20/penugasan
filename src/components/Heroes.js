import Image from "next/image";

const data = [
  {
    genre: ["Self-Improvement", "Techonlogy"],
    title: "Beyond The Start",
    price: "$1,123.42",
    avialability: "In Stock",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. Author:Marcus pson",
    pages: "328",
    publisher: "Noir House Books",
    ISBN: "938-1-234567-90-6",
    published: "January 20, 2024",
  },
];

import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye, ChevronRight } from "lucide-react";

export default function Heroes() {
  return (
    <>
      <div className="flex px-6 text-gray-500 w-fit mx-auto md:m-0">
        <span className="font-semibold text-black">Home</span> <ChevronRight />{" "}
        Books
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6">
        <div className="relative w-full h-64 md:h-80">
          <Image
            alt="book-image"
            src="/dummy-book.jpg"
            fill
            className="object-contain mx-auto"
          />
        </div>

        {data.map((book, index) => {
          return (
            <div className="py-6 flex flex-col gap-3" key={index}>
              <div className="flex flex-col sm:flex-row gap-3">
                {book.genre.map((genre, index) => {
                  return (
                    <span
                      className="bg-gray-300 px-4 py-1 rounded-full w-fit"
                      key={index}
                    >
                      {genre}
                    </span>
                  );
                })}
              </div>
              <div>
                <h1 className="font-bold text-4xl">{book.title}</h1>
                <h2 className="font-bold text-xl">{book.price}</h2>
                <h3 className="font-semibold">
                  Availability:{" "}
                  <span className="font-bold text-blue-400">
                    {book.avialability}
                  </span>
                </h3>
                <p className="text-gray-500">{book.description}</p>
                <ul className="text-gray-500">
                  <li>
                    <span className="font-bold">Pages: </span> {book.pages}
                  </li>
                  <li>
                    <span className="font-bold">Publisher: </span>{" "}
                    {book.publisher}
                  </li>
                  <li>
                    <span className="font-bold">ISBN: </span> {book.ISBN}
                  </li>
                  <li>
                    <span className="font-bold">Published: </span>{" "}
                    {book.published}
                  </li>
                </ul>
              </div>
              <div className="flex gap-3 items-center">
                <Button>Buy Now</Button>
                <div className="bg-blue-200 flex justify-items-center p-1 rounded-full w-7 h-7">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="bg-blue-200 flex justify-items-center p-1 rounded-full w-7 h-7">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div className="bg-blue-200 flex justify-items-center p-1 rounded-full w-7 h-7">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
