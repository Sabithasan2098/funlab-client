import type { Metadata } from "next";
import { getAllData, getTopFive } from "./api/getData";

export const metadata: Metadata = {
  title: "Funlab | Home",
  description: "Video sharing platform",
};

export default async function Home() {
  const allData = await getAllData();
  const topFive = await getTopFive();

  console.log(allData);
  console.log(topFive);

  return (
    <div>
      <div> hello</div>
    </div>
  );
}
