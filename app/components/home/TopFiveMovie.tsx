import { getTopFive } from "@/app/api/getData";
import TopFiveMovieSlider from "./TopFiveMovieSlider";

const TopFiveMovie = async () => {
  const data = await getTopFive();
  console.log(data);
  return (
    <div>
      <TopFiveMovieSlider data={data} />
    </div>
  );
};

export default TopFiveMovie;
