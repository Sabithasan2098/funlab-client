import { searchData } from "../api/getData";
import SearchCard from "../components/shered/cards/SearchCard";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

const page = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const query = params.q || "";
  const data = (await searchData(query)) || [];
  const movies = data;
  // console.log({ movies });

  return (
    <div className="min-h-screen bg-[#152121] text-white ">
      <div className="max-w-7xl mx-auto min-h-screen bg-[#0f1110] xl:pt-20 md:px-6 px-4 md:py-4 py-2">
        <div className="max-w-5xl mx-auto">
          {movies?.length === 0 ? (
            <h1>Sorry no video avilable</h1>
          ) : (
            <>
              <div className="flex gap-2 pb-5 ">
                <p className="bg-red-700 px-0.5 "></p>
                <h1 className="text-white text-sm lg:text-lg leading-4 lg:leading-5">
                  Result Found : {query}
                </h1>
              </div>
              <div className="flex flex-col gap-5">
                {movies.map((data) => (
                  <SearchCard
                    banner={data.banner}
                    fullName={data.fullName}
                    id={data.id}
                    name={data.name}
                    description={data.description}
                    imdbRating={data.imdbRating}
                    industry={data.industry}
                    releaseYear={data.releaseYear}
                    key={data.id}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
