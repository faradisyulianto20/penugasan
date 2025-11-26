import RandomBook from "@/components/RandomBook";
import UseBook from "@/components/UseBook";
import StatsGenre from "@/components/StatsGenre";
import ScanCover from "@/components/ScanCover";
import Heroes from "@/components/Heroes";

export default function Home() {
  return (
    <div>
      <Heroes />
      <ScanCover />
      <UseBook />
      <RandomBook />
      <StatsGenre />
    </div>
  );
}
