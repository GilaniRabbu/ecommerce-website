"use client";

import React, { useRef } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
// import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      text: "Discover And Find Your New Product",
      image: "https://dummyimage.com/400x400/000/fff",
    },
    {
      text: "Your Next Favorite Product Awaits",
      image: "https://dummyimage.com/400x400/111/fff",
    },
    {
      text: "Exclusive Product Just for You",
      image: "https://dummyimage.com/400x400/333/fff",
    },
  ];

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          document
            .querySelectorAll(".custom-bullet")
            .forEach((bullet, index) => {
              bullet.classList.toggle("active", index === swiper.activeIndex);
            });
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="h-full py-10 flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="w-3/4 md:w-1/3 p-4">
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <h1 className="text-2xl md:text-5xl font-bold mt-5">
                  {slide.text}
                </h1>
                <button className="mt-10 px-4 py-2 bg-blue-500 text-white rounded">
                  Shop Now
                </button>
              </div>
              <Image
                src={slide.image}
                alt="Product Image"
                width={400}
                height={400}
                className="object-cover"
              />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination mt-4 flex justify-center space-x-2">
        {slides.map((_id, index) => (
          <span
            key={index}
            className="custom-bullet mx-1 w-3 h-3 rounded-full cursor-pointer"
            onClick={() => swiperRef.current?.slideTo(index)}
          ></span>
        ))}
      </div>

      <style jsx>{`
        .custom-bullet {
          background: linear-gradient(to right, #374151, #6b7280);
          transition: all 50ms ease;
        }
        .custom-bullet:hover {
          transform: scale(1.1);
        }
        .custom-bullet.active {
          background: linear-gradient(to right, #3b82f6, #0ea5e9);
        }
      `}</style>
    </>
  );
};

export default HeroSection;
