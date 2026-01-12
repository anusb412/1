import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Hero1 from "../assets/GlowNest/Hero1.jpeg";
import Hero2 from "../assets/GlowNest/Hero2.jpeg";
import Hero3 from "../assets/GlowNest/Hero3.jpeg";
import Hero4 from "../assets/GlowNest/Hero4.jpeg";
import Hero5 from "../assets/GlowNest/Hero5.jpeg";

const images = [Hero1, Hero2, Hero3, Hero4, Hero5];

const ImageCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={14}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`GlowNest slide ${index + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
