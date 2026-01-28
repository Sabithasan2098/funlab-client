"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import TopFiveCard from "../shered/topFive/TopFiveCard";
import { TopFiveCardTypes } from "@/types/cardTypes";

type Props = {
  data: TopFiveCardTypes[];
};

const TopFiveMovieSlider = ({ data }: Props) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      //   pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {data.map((movie) => (
        <SwiperSlide key={movie.name}>
          <TopFiveCard {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TopFiveMovieSlider;
