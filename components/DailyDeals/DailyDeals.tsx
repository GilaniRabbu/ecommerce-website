"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlinePicture,
} from "react-icons/ai";

const DailyDeals = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 4,
    minutes: 30,
    seconds: 1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      id: 1,
      title: "Ciamond Halo Stud",
      description: "Lorem ipsum dolor sit ame",
      image: "/daily-deal-1.jpg",
      price: 300,
    },
    {
      id: 2,
      title: "Diamond Halo Stud Magnis",
      description: "Lorem ipsum dolor sit ame",
      image: "/daily-deal-2.jpg",
      price: 325,
    },
    {
      id: 3,
      title: "Diamond Halo Stud Dolor",
      description: "Lorem ipsum dolor sit ame",
      image: "/daily-deal-3.jpg",
      price: 269,
    },
    {
      id: 4,
      title: "Diamond Halo Stud Massa",
      description: "Lorem ipsum dolor sit ame",
      image: "/daily-deal-4.jpg",
      price: 269,
    },
  ];

  return (
    <main className="px-5 py-20">
      <section className="container mx-auto">
        <div className="px-4 flex gap-4 flex-col md:flex-row items-center md:justify-between">
          <h1 className="text-center font-semibold text-2xl md:text-4xl">
            Deal Of The Day
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="px-2 py-4 w-20 text-center rounded-sm bg-gray-100"
              >
                <div className="text-2xl font-bold mb-1">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 px-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-10 md:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto"
            >
              <div className="relative overflow-hidden rounded">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="relative">
                    <button
                      className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                      onMouseEnter={() => setActiveTooltip(`cart-${item.id}`)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="Quick Add"
                    >
                      <AiOutlineShoppingCart className="w-5 h-5" />
                    </button>
                    {activeTooltip === `cart-${item.id}` && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-2 whitespace-nowrap z-20">
                        Quick Add
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                      onMouseEnter={() =>
                        setActiveTooltip(`wishlist-${item.id}`)
                      }
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="Add to Wishlist"
                    >
                      <AiOutlineStar className="w-5 h-5" />
                    </button>
                    {activeTooltip === `wishlist-${item.id}` && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-2 whitespace-nowrap z-20">
                        Add to Wishlist
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                      onMouseEnter={() => setActiveTooltip(`share-${item.id}`)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="Quick View"
                    >
                      <AiOutlinePicture className="w-5 h-5" />
                    </button>
                    {activeTooltip === `share-${item.id}` && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-2 whitespace-nowrap z-20">
                        Quick View
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 text-center">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="mt-2 text-gray-500">{item.description}</p>
                <h3 className="mt-3 text-teal-600">${item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DailyDeals;
