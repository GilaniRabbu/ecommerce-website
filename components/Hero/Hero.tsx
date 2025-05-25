"use client";

import React, { useRef } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    {
      text: "Discover And Find Your New Product",
      image: "/hero-img-1.jpg",
    },
    {
      text: "Your Next Favorite Product Awaits",
      image: "/hero-img-2.jpg",
    },
    {
      text: "Exclusive Product Just for You",
      image: "/hero-img-3.jpg",
    },
  ];

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
            <section className="h-full py-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">
              <div className="w-3/4 md:w-1/3 p-4 text-center md:text-left">
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-3 md:mt-5">
                  {slide.text}
                </h1>
                <button className="mt-8 md:mt-10 px-4 py-2 rounded transition-colors border text-white bg-black hover:text-white hover:bg-teal-600">
                  Shop Now
                </button>
              </div>
              <Image
                src={slide.image}
                alt="Product Image"
                width={400}
                height={400}
                className="object-cover w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full"
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
          background: #6b7080;
          transition: all 50ms ease;
        }
        .custom-bullet:hover {
          transform: scale(1.1);
        }
        .custom-bullet.active {
          background: #00bba7;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
