import { getFeatured } from "@/app/api/getData";
import FeaturedMovieSlider from "./FeaturedMovieSlider";

const FeaturedMovie = async () => {
  const data = await getFeatured();
  //   console.log({ data });
  return (
    <div className="pt-5">
      <div className="flex gap-3 items-center pb-2">
        <p className="bg-red-700 px-0.5 py-2.5"></p>
        <p className="text-[18px] font-semibold">Featured</p>
      </div>
      <FeaturedMovieSlider data={data} />
    </div>
  );
};

export default FeaturedMovie;
