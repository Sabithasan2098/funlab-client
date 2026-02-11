import IndustryInfinite from "../IndustryInfinite";
type Props = {
  params: {
    industry: string;
  };
};
const page = async ({ params }: Props) => {
  const search = await params;
  return (
    <div className="min-h-screen bg-[#152121] text-white">
      <div className="max-w-7xl mx-auto min-h-screen bg-[#0f1110] md:px-6 px-4 md:py-4 py-2">
        <div>
          <div className="flex gap-3 items-center md:pb-5 pb-3">
            <p className="bg-red-700 px-0.5 md:py-4 py-3"></p>
            <p className="md:text-[20px] text-[18px] font-semibold capitalize">
              {search.industry} Movies
            </p>
          </div>

          <IndustryInfinite industry={search.industry} />
        </div>
      </div>
    </div>
  );
};

export default page;
