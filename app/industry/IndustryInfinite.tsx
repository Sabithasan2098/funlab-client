"use client";

import { CardType } from "@/types/cardTypes";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/shered/cards/MovieCard";

interface Props {
  industry: string;
}

const IndustryInfinite: React.FC<Props> = ({ industry }) => {
  const [movies, setMovies] = useState<CardType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // fetch movies for current page
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/videos/getVideoByIndustry?industry=${industry}&page=${page}&limit=70`,
        );
        const data = await res.json();

        if (data.success) {
          setMovies((prev) => {
            // duplicate check: একই id আছে কিনা
            const newItems = data.data.filter(
              (item: CardType) => !prev.some((m) => m.id === item.id),
            );
            return [...prev, ...newItems];
          });

          // যদি fetched data কম হয় limit এর চেয়ে, তাহলে more data নেই
          if (data.data.length < 70) setHasMore(false);
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [industry, page]);

  // scroll listener for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          name={movie.name}
          thumbnail={movie.thumbnail}
          dualAudio={movie.dualAudio}
          imdbRating={movie.imdbRating}
          language={movie.language}
          releaseYear={movie.releaseYear}
        />
      ))}

      {loading && (
        <div className="col-span-full text-center py-4 text-gray-400">
          Loading...
        </div>
      )}
      {!hasMore && movies.length > 0 && (
        <div className="col-span-full text-center py-4 text-gray-400">
          No more videos
        </div>
      )}
    </div>
  );
};

export default IndustryInfinite;
