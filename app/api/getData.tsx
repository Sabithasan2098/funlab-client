import { TopFiveCardTypes } from "@/types/cardTypes";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllData = async () => {
  const res = await fetch("http://localhost:5000/api/v1/videos/getVideos");
  const data = await res.json();
  return data.data;
};

export const getTopFive = async (): Promise<TopFiveCardTypes[]> => {
  const allData = await getAllData();

  const topFive = allData
    .sort((a: any, b: any) => b.imdbRating - a.imdbRating)
    .slice(0, 5);
  return topFive;
};
