import { TRelatedVideoData } from "@/types/cardTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchCard = ({
  id,
  fullName,
  banner,
  name,
  description,
}: TRelatedVideoData) => {
  return (
    <Link href={`/movies/${id}`} className="flex gap-2">
      <div className="xl:min-w-40 lg:min-w-36 md:min-w-48 min-w-32">
        <Image
          src={banner}
          alt={`${name} movie thumbnail`}
          height={400}
          width={600}
          className="xl:h-[88px] xl:w-40 lg:w-36 lg:h-[90px] md:w-48 md:h-[104px] w-32 h-[74px] rounded"
        />
      </div>
      <div className="text-white">
        <h1 className="text-xs md:text-base lg:text-sm line-clamp-1 xl:line-clamp-2 font-semibold ">
          {fullName}
        </h1>

        <p className="text-[10px] md:text-sm lg:text-xs md:font-light line-clamp-2 xl:line-clamp-3 pt-1 leading-tight text-gray-200">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SearchCard;
