import { CardType } from "@/types/cardTypes";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineStarPurple500 } from "react-icons/md";

const MovieCard = ({
  id,
  name,
  thumbnail,
  imdbRating,
  releaseYear,
  language,
  dualAudio,
}: CardType) => {
  return (
    <Link href={`/movies/${id}`}>
      <div>
        <div className="relative ">
          <Image
            src={thumbnail}
            alt="movie thumbnail"
            height={400}
            width={600}
            className="md:h-[220px] h-[135px] w-[190px]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-1 right-1 w-full flex gap-0.5 items-center justify-end">
            <MdOutlineStarPurple500 className="text-yellow-500" size={14} />
            <p className="text-[12px]">{imdbRating}</p>
          </div>
          <p className="absolute uppercase bg-red-700 top-0 left-0 text-[11px] font-semibold px-1 py-px">
            {dualAudio === false ? language : "Dual Audio"}
          </p>
        </div>
        <h2 className="text-[14px] truncate">{name}</h2>
        <h3 className="text-[11px] text-slate-400">{releaseYear}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
