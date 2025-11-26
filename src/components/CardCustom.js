import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";

const DEFAULT_IMAGE_URL = "/default.png";

export default function CardCustom({
  image_url,
  title = "Title",
  genre = "Genre",
  price = "Price",
}) {
  const [currentImageUrl, setCurrentImageUrl] = useState(image_url);

  const handleError = () => {
    setCurrentImageUrl(DEFAULT_IMAGE_URL);
  };

  return (
    <Card className={"bg-white rounded-none w-[209px] gap-0 p-0 shadow-none"}>
      <CardHeader className={"p-0 flex"}>
        <Image
          src={currentImageUrl}
          alt={"Book Image"}
          width={150}
          height={150}
          className="aspect-3/4 w-full object-cover"
          onError={handleError}
        />
      </CardHeader>
      {/* <CardContent><p>Card Content</p></CardContent> */}
      <CardFooter className={"flex gap-2 font-bold flex-col items-start p-6"}>
        <CardTitle className={"font-bold overflow-auto h-12"}>
          {title}
        </CardTitle>
        <CardDescription className={"font-semibold text-gray-500"}>
          {genre}
        </CardDescription>
        <div className="flex gap-3">
          <p className="text-gray-300">{price}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
