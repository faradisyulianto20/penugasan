"use client";

import { useQuery } from "@tanstack/react-query";
import { bookService } from "@/services/bookService";

export function useBooks({ page = 1, sort, year, genre, keyword }) {
  return useQuery({
    queryKey: ["books", { page, sort, year, genre, keyword }],
    queryFn: () => bookService.getBooks({ page, sort, year, genre, keyword }),
    keepPreviousData: true,
  });
}

export function useBook(id) {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => bookService.getBookById(id),
    enabled: !!id,
  });
}

export function useBookQuery(id) {
  return useQuery({
    queryKey: ["book_query", id],
    queryFn: () => bookService.getBookByIdQuery(id),
    enabled: !!id,
  });
}

export function useRandomBook({ year, genre, keyword }) {
  return useQuery({
    queryKey: ["random_book", { year, genre, keyword }],
    queryFn: () => bookService.getRandomBook({ year, genre, keyword }),
    keepPreviousData: true,
  });
}
