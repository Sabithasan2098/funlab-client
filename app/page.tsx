import type { Metadata } from "next";
import TopFiveMovie from "./components/home/topFive/TopFiveMovie";
import FeaturedMovie from "./components/home/featured/FeaturedMovie";
import Movie from "./components/home/movie/Movie";

export const metadata: Metadata = {
  title: "Funlab | Home",
  description: "Video sharing platform",
};

export default async function Home() {
  return (
    <div>
      <TopFiveMovie />
      <FeaturedMovie />
      <Movie />
    </div>
  );
}
