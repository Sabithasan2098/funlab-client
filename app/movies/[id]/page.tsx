import { getData, getRelated } from "@/app/api/getData";
import MoviePlayer from "@/app/components/Player/Player";
import RelatedCard from "@/app/components/shered/cards/RelatedCard";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

// 🔥 Dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const data = await getData(id);

  return {
    title: `Funlab | ${data.name}`,
    description: data.description || "Watch movies on Funlab",
  };
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  const data = await getData(id);
  const related = await getRelated(data.id);

  return (
    <div className="flex flex-col lg:flex-row bg-[#0f1110] min-h-screen">
      {/* Main Video Section */}
      <div className="lg:w-2/3 w-full px-4 lg:px-10 pt-5 lg:shadow-2xl   lg:shadow-white">
        <MoviePlayer
          banner={data.banner}
          sources={data.video.sources}
          name={data.name}
        />
        <div className="text-gray-200 xl:pl-5 pt-3">
          <h1 className="lg:text-lg md:text-xl text-base font-semibold lg:font-bold">
            {data.fullName}
          </h1>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="lg:w-1/3 w-full px-4 lg:px-5 pt-10 lg:pt-5 ">
        <div className="flex gap-1 pb-5 ">
          <p className="bg-red-700 px-0.5 "></p>
          <h1 className="text-white text-base md:font-semibold lg:font-normal md:text-xl lg:text-base">
            Related Videos Here...
          </h1>
        </div>
        <div className="flex flex-col gap-5 pb-2 md:pb-5">
          {related.map((data) => (
            <RelatedCard
              key={data.id}
              id={data.id}
              dualAudio={data.dualAudio}
              imdbRating={data.imdbRating}
              language={data.language}
              releaseYear={data.releaseYear}
              banner={data.banner}
              category={data.category}
              comic
              fullName={data.fullName}
              name={data.name}
              genres={data.genres}
              hindiDubbed
              tv
              description={data.description}
              industry={data.industry}
              views={data.views}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
