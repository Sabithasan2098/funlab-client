import {
  FeaturedCardType,
  TopFiveCardTypes,
  TRelatedVideoData,
  TSearchData,
  TVideoData,
} from "@/types/cardTypes";

/* eslint-disable @typescript-eslint/no-explicit-any */
// get all data-------------------------->
export const getAllData = async () => {
  const res = await fetch("http://localhost:5000/api/v1/videos/getVideos", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.data;
};

// get top five data---------------------->
export const getTopFive = async (): Promise<TopFiveCardTypes[]> => {
  const allData = await getAllData();
  // console.log(allData);

  const topFive = allData
    .sort((a: any, b: any) => b.imdbRating - a.imdbRating)
    .slice(0, 5);
  return topFive;
};

// get featured data----------------------->
export const getFeatured = async (): Promise<FeaturedCardType[]> => {
  const allData = await getAllData();
  const featured = allData
    .filter((item: any) => item.genres.includes("adult"))
    .slice(0, 20);
  return featured;
};

// get related data------------------------>
export const getRelated = async (id: string): Promise<TRelatedVideoData[]> => {
  const related = await fetch(
    `http://localhost:5000/api/v1/videos/video/${id}/related`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await related.json();
  return data.data;
};

// get video by id------------------------->
export const getData = async (id: string): Promise<TVideoData> => {
  const res = await fetch(
    `http://localhost:5000/api/v1/videos/getVideo/${id}`,
    {
      next: { revalidate: 60 }, // ISR
    },
  );

  // check if fetch was successful
  if (!res.ok) {
    throw new Error(
      `Failed to fetch video with id ${id}, status: ${res.status}`,
    );
  }

  const data = await res.json();

  // check backend response structure
  if (!data.data) {
    throw new Error("API did not return 'data' property");
  }

  return data.data;
};

// search data--------------------------->
export const searchData = async (query: string): Promise<TSearchData[]> => {
  const res = await fetch(
    `http://localhost:5000/api/v1/seriesVideos/getSingleVideoOnSearch?search=${query}`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await res.json();
  return data?.data?.data || [];
};
