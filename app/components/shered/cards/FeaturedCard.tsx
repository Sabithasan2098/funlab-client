import { FeaturedCardType } from "@/types/cardTypes";
import Image from "next/image";
const FeaturedCard = ({
  thumbnail,
  imdbRating,
  name,
  releaseYear,
}: FeaturedCardType) => {
  return (
    <div>
      <div className="relative ">
        <Image
          src={thumbnail}
          alt="movie thumbnail"
          height={400}
          width={600}
          className="md:h-[200px] h-[150px] w-[150px]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-2 w-full px-3 flex justify-end">
          <p>{imdbRating}</p>
        </div>
      </div>
      <h2 className="text-[14px]">{name}</h2>
      <h3 className="text-[11px] text-slate-400">{releaseYear}</h3>
    </div>
  );
};

export default FeaturedCard;
