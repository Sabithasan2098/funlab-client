import { getData } from "@/app/api/getData";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const resolveParams = await params;
  const { id } = resolveParams;
  const data = await getData(id);
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default page;
