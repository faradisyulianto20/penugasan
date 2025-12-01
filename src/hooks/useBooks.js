"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { bookService } from "@/services/bookService";

export function useBooks({ page = 1, sort, year, genre, keyword, search }) {
  return useQuery({
    queryKey: ["books", { page, sort, year, genre, keyword, search }],
    queryFn: () =>
      bookService.getBooks({ page, sort, year, genre, keyword, search }),
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

export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await bookService.getCart();
      return response.data;
    },
  });
}

export function useAddToCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (book) => bookService.addToCart(book),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => bookService.removeFromCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}

export function useWishlist() {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await bookService.getWishlist();
      return response.data;
    },
  });
}

export function useAddToWishlist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (book) => bookService.addToWishlist(book),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
}

export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (_id) => bookService.removeFromWishlist(_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error) => {
      console.error("Penghapusan gagal di service layer:", error);
    },
  });
}

export function useStatsGenre() {
  return useQuery({
    queryKey: ["stats_genre"],
    queryFn: () => bookService.getStatsGenre(),
  });
}
