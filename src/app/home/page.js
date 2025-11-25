import RandomBook from "@/components/RandomBook";
import UseBook from "@/components/UseBook";
import StatsGenre from "@/components/StatsGenre";
import ScanCover from "@/components/ScanCover";

export default function Home() {
  return (
    <div>
      <ScanCover />
      <UseBook />
      <RandomBook />
      <StatsGenre />
    </div>
  );
}
