import { getData } from "@/app/api/getData";
import MoviePlayer from "@/app/components/Player/Player";
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

  return (
    <div className="flex flex-col lg:flex-row bg-[#0f1110] min-h-screen">
      {/* Main Video Section */}
      <div className="lg:w-2/3 w-full px-4 lg:px-10 pt-5">
        <MoviePlayer
          banner={data.banner}
          sources={data.video.sources}
          name={data.name}
        />
        <div className="text-white">
          <h1>hello</h1>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="lg:w-1/3 w-full px-4 lg:px-5 pt-5">
        <h1 className="text-white">Related Videos Here...</h1>
      </div>
    </div>
  );
};

export default page;
