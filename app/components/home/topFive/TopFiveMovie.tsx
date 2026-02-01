import { getTopFive } from "@/app/api/getData";
import TopFiveMovieSlider from "./TopFiveMovieSlider";

const TopFiveMovie = async () => {
  const data = await getTopFive();
  return (
    <div>
      <div className="flex gap-3 items-center md:pb-5 pb-3">
        <p className="bg-red-700 px-0.5 md:py-4 py-3"></p>
        <p className="md:text-[20px] text-[18px] font-semibold">Top Rated</p>
      </div>
      <TopFiveMovieSlider data={data} />
    </div>
  );
};

export default TopFiveMovie;
