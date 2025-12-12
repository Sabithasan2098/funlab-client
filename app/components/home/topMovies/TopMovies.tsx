"use client";
import movieDataJson from "../../../../public/movieData";
import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export interface Movie {
  id: string;
  name: string;
  movieIndustry: string;
  category: string;
  genres: string;
  video: string;
  thumbnail: string;
  imdbRatings: number;
  date: string;
  screenshots: string[];
}

export interface MovieData {
  data: Movie[];
}

const movieData = movieDataJson as MovieData;

const topMovies = movieData?.data?.filter((data) => {
  return data?.imdbRatings >= 8.0;
});

const TopMovies = () => {
  return (
    <div className="pt-5 md:pt-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {topMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            {" "}
            <Image
              src={movie.thumbnail}
              alt={movie.name}
              width={400}
              height={250}
              className=""
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopMovies;
