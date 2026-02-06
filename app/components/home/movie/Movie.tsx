import { getAllData } from "@/app/api/getData";
import MovieCard from "../../shered/cards/MovieCard";

const Movie = async () => {
  const allData = await getAllData();
  const slicedData = allData.slice(0, 70);
  console.log(allData);
  return (
    <div className="md:pt-10 pt-5">
      <div className="flex gap-3 items-center md:pb-5 pb-3">
        <p className="bg-red-700 px-0.5 md:py-4 py-3"></p>
        <p className="md:text-[20px] text-[18px] font-semibold">
          Latest Movies
        </p>
      </div>
      <div className="grid md:grid-cols-7 grid-cols-3 gap-5">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          slicedData.map((data: any) => (
            <MovieCard
              key={data.id}
              name={data.name}
              thumbnail={data.thumbnail}
              imdbRating={data.imdbRating}
              releaseYear={data.releaseYear}
              language={data.language}
              dualAudio={data.dualAudio}
              id={data.id}
            ></MovieCard>
          ))
        }
      </div>
    </div>
  );
};

export default Movie;
