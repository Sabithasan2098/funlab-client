import { TSearchData } from "@/types/cardTypes";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const SearchCard = ({
  id,
  fullName,
  banner,
  name,
  description,
  releaseYear,
  imdbRating,
  industry,
}: TSearchData) => {
  return (
    <Link href={`/movies/${id}`} className="flex gap-2">
      <div className="xl:min-w-48 md:min-w-40 min-w-32 relative">
        <Image
          src={banner}
          alt={`${name} movie thumbnail`}
          height={400}
          width={600}
          className="xl:h-24 xl:w-48 md:w-40 md:h-[90px] w-32 h-[74px] rounded lg:rounded-md"
        />
        <div className="absolute bottom-1 right-1 lg:right-2 flex gap-1 items-center justify-center bg-black/65 px-1 py-0.5 ">
          <FaStar className="text-yellow-400 size-2.5 md:size-3 lg:size-3.5" />
          <p className="text-[10px] md:text-xs lg:text-sm">{imdbRating}</p>
        </div>
      </div>
      <div className="text-white">
        <h1 className="text-xs md:text-base lg:text-sm line-clamp-1 xl:line-clamp-2 font-semibold ">
          {fullName}
        </h1>
        <div className="flex items-center w-36 justify-between xl:my-1.5 lg:my-1 xl:pt-1 lg:pt-1 md:mt-1 mt-1">
          <p className="bg-black px-2 py-0.5 text-xs text-gray-100 capitalize">
            {industry}
          </p>
          <p className="bg-black px-2 py-0.5 text-xs text-gray-100 ">
            {releaseYear}
          </p>
        </div>
        <p className="text-[10px] md:text-sm lg:text-xs md:font-light line-clamp-2 xl:line-clamp-3 pt-1 leading-tight text-gray-200">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SearchCard;
