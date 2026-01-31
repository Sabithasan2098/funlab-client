import type { Metadata } from "next";
import { getAllData } from "./api/getData";
import TopFiveMovie from "./components/home/topFive/TopFiveMovie";

export const metadata: Metadata = {
  title: "Funlab | Home",
  description: "Video sharing platform",
};

export default async function Home() {
  const allData = await getAllData();

  return (
    <div>
      <TopFiveMovie />
    </div>
  );
}
