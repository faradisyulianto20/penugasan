import { Suspense } from "react";
import BookDetailContent from "./BookDetailContent"; 

export default function BookPage({ searchParams }) {
  const _id = searchParams._id;

  return (
    <Suspense fallback={<div>Loading book details...</div>}>
      <BookDetailContent _id={_id} />
    </Suspense>
  );
}