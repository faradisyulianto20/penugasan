import RandomBook from "@/components/RandomBook";
import UseBook from "@/components/UseBook";
import StatsGenre from "@/components/StatsGenre";

export default function Home() {
  return (
    <div>
      <UseBook />
      <RandomBook />
      <StatsGenre />
    </div>
  );
}
