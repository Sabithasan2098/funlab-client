import { TopFiveCardTypes } from "@/types/cardTypes";
import Image from "next/image";

const TopFiveCard = ({
  name,
  banner,
  category,
  releaseYear,
}: TopFiveCardTypes) => {
  return (
    <div className="relative ">
      <Image
        src={banner}
        alt="movie thumbnail"
        height={400}
        width={600}
        className="h-[150px] md:h-[200px] w-[700]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-2 w-full px-3">
        <h2>{name}</h2>
        <div className="flex justify-between items-center w-full">
          <h3>{releaseYear}</h3>
          <p className="bg-red-700 px-1.5 py-0.5 text-[12px] uppercase">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopFiveCard;
