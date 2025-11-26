"use client";

import { useQuery } from "@tanstack/react-query";
import { visionService } from "@/services/visionService";

export function useScanBook(file) {
  return useQuery({
    queryKey: ["scanBook", file],
    queryFn: () => visionService.scanBook(file).then(res => res.data),
    enabled: !!file, // hanya fetch jika file ada
    retry: 1,        // optional: coba ulang sekali kalau gagal
  });
}
