import { getFeatured } from "@/app/api/getData";
import FeaturedMovieSlider from "./FeaturedMovieSlider";

const FeaturedMovie = async () => {
  const data = await getFeatured();
  return (
    <div className="md:pt-10 pt-5">
      <div className="flex gap-3 items-center md:pb-5 pb-3">
        <p className="bg-red-700 px-0.5 md:py-4 py-3"></p>
        <p className="md:text-[20px] text-[18px] font-semibold">Featured</p>
      </div>
      <FeaturedMovieSlider data={data} />
    </div>
  );
};

export default FeaturedMovie;
