import type { Metadata } from "next";
import TopFiveMovie from "./components/home/topFive/TopFiveMovie";
import Movie from "./components/home/movie/Movie";

export const metadata: Metadata = {
  title: "Funlab | Home",
  description: "Video sharing platform",
};

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#152121] text-white">
      <div className="max-w-7xl mx-auto min-h-screen bg-[#0f1110] md:px-6 px-4 md:py-4 py-2">
        <TopFiveMovie />

        <Movie />
      </div>
    </div>
  );
}
