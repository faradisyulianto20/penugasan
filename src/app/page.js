import RandomBook from "@/components/RandomBook";
import UseBook from "@/components/UseBook";
import StatsGenre from "@/components/StatsGenre";
import ScanCover from "@/components/ScanCover";
import Heroes from "@/components/Heroes";
import ReadingList from "@/components/ReadingList";
import BooksForYou from "@/components/BooksForYou";

export default function Home() {
  return (
    <div>
      <Heroes />
      <ScanCover />
      <ReadingList />
      <BooksForYou />
      <UseBook />
      <RandomBook />
      <StatsGenre />
    </div>
  );
}
