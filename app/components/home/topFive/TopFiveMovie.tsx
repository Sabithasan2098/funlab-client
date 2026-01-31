import { getTopFive } from "@/app/api/getData";
import TopFiveMovieSlider from "./TopFiveMovieSlider";

const TopFiveMovie = async () => {
  const data = await getTopFive();
  return (
    <div>
      <div className="flex gap-3 items-center pb-2">
        <p className="bg-red-700 px-0.5 py-2.5"></p>
        <p className="text-[18px] font-semibold">Top Rated</p>
      </div>
      <TopFiveMovieSlider data={data} />
    </div>
  );
};

export default TopFiveMovie;
