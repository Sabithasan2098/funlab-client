"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FeaturedCardType } from "@/types/cardTypes";
import FeaturedCard from "../../shered/cards/FeaturedCard";

type Props = {
  data: FeaturedCardType[];
};

const FeaturedMovieSlider = ({ data }: Props) => {
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={20}
      autoplay={{
        delay: 2000,
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
        <SwiperSlide key={movie.name}>
          <FeaturedCard {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedMovieSlider;
