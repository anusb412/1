import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          300: { width: 300 },
          400: { width: 360 },
          500: { width: 420 },
          640: { width: 520 },
          768: { width: 620 },
          1024: { width: 720 }
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
