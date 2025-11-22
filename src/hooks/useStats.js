"use client";

import { useQuery } from "@tanstack/react-query";
import { bookService } from "@/services/bookService";

export function useStatsGenre() {
  return useQuery({
    queryKey: ["genre"],
    queryFn: () =>
      bookService.getStatsGenre(),
    keepPreviousData: true,
  });
}