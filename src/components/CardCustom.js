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
import { useState } from "react";

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
    <Card className={"bg-white rounded-none w-[209px] gap-0 p-0 shadow-none border-none"}>
      <CardHeader className={"p-0 flex overflow-hidden"}>
        <Image
          src={currentImageUrl}
          alt={"Book Image"}
          width={239}
          height={280}
          className="aspect-3/4 w-full object-cover transition-transform duration-300 hover:scale-110"
          onError={handleError}
        />
      </CardHeader>
      <CardFooter className={"flex gap-2.5 font-bold flex-col items-start p-6"}>
        <CardTitle className={"font-semibold overflow-auto h-10"}>
          {title}
        </CardTitle>
        <CardDescription className={"font-semibold text-gray-500 max-h-5 overflow-auto"}>
          {genre}
        </CardDescription>
        <div className="flex gap-3">
          <p className="text-gray-300">{price}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
