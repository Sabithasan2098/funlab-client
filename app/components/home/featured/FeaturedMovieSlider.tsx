"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FeaturedCardSlideType } from "@/types/cardTypes";
import FeaturedCard from "../../shered/cards/FeaturedCard";

type Props = {
  data: FeaturedCardSlideType[];
};

const FeaturedMovieSlider = ({ data }: Props) => {
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={20}
      speed={1000}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: { slidesPerView: 3 },
        768: { slidesPerView: 5 },
        1024: { slidesPerView: 7 },
      }}
    >
      {data.map((movie) => (
        <SwiperSlide key={movie._id}>
          <FeaturedCard
            id={movie._id}
            name={movie.name}
            imdbRating={movie.imdbRating}
            releaseYear={movie.releaseYear}
            thumbnail={movie.thumbnail}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedMovieSlider;
