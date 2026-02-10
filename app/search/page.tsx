type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

const page = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const query = params.q;

  const res = await fetch(
    `http://localhost:5000/api/v1/seriesVideos/getSingleVideoOnSearch?search=${query}`,
  );

  const data = await res.json();
  const movies = data.data.data;

  return (
    <div className="min-h-screen bg-[#152121] text-white">
      <div className="max-w-7xl mx-auto min-h-screen bg-[#0f1110] md:px-6 px-4 md:py-4 py-2">
        {!movies.length ? (
          <h1>Sorry no video avilable</h1>
        ) : (
          <h1>{movies.length}</h1>
        )}
      </div>
    </div>
  );
};

export default page;
