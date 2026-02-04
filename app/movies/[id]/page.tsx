import { getData } from "@/app/api/getData";
import { Metadata } from "next";
import Image from "next/image";
import "./data.css";
import Link from "next/link";

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
  const resolveParams = await params;
  const { id } = resolveParams;
  const data = await getData(id);
  console.log(data);
  return (
    <div className=" md:flex md:gap-10">
      <div className="flex gap-5 md:gap-10 pb-5 md:pb-0">
        <Image
          src={data.thumbnail}
          alt={`${data.name} movie thumbnail`}
          height={380}
          width={280}
          className="md:h-[380px] md:w-[280px] h-[170px] w-28 "
        />
        <div>
          <h1 className="text-2xl font-semibold movieName hidden md:block">
            {data.fullName}
          </h1>
          <h1 className="font-semibold movieName md:hidden">{data.name}</h1>
          <div className="flex gap-2 md:gap-10 flex-wrap pt-2 md:pt-5">
            {data.genres.map((genre: string) => (
              <span
                key={genre}
                className="px-2 py-0.5 text-xs rounded bg-slate-700"
              >
                {genre}
              </span>
            ))}
          </div>
          <p className="pt-2 md:pt-5 text-gray-400 text-sm md:text-base">
            {data.description}
          </p>
        </div>
      </div>
      <div className="hidden md:block w-px bg-gray-600 min-h-screen"></div>
      <div className="md:hidden border-t border-gray-600 pt-5 md:pt-0 "></div>
      <Link href={"/contact"}>
        <div className="flex flex-col items-center md:gap-10 gap-5">
          <h1 className="text-center movieName">
            If you have any question ? Please contact us.
          </h1>
          <p className="bg-black text-red-500 text-center py-10 w-52 movieName text-xl font-bold">
            Contact us
          </p>
        </div>
      </Link>
    </div>
  );
};

export default page;
