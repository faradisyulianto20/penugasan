"use client";

import { useStatsGenre } from "@/hooks/useStats";

export default function StatsGenre() {
  const { data, isLoading, isError, error } = useStatsGenre();

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(data);

  const stats = data?.data;

  console.log(stats);

  const genres = stats?.genre_statistics;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Genres Statistics</h1>
      <div className="grid xsm:grid-cols-3 md:grid-cols-5 gap-3">
        {genres.map((genre, index) => (
          <div key={index} className="flex justify-between border-2">
            <div className="font-semibold">{genre.genre}</div>
            <div className="text-sm">{genre.count}</div>
          </div>
        ))}
      </div>
      <div>Total genres: {stats.total_genres}</div>
    </div>
  );
}
