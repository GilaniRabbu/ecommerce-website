"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlinePicture,
} from "react-icons/ai";

export const ProductSection = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const items = [
    {
      id: 1,
      title: "Uiamond Halo Stud",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-1.jpg",
      price: 628,
    },
    {
      id: 2,
      title: "Diamond Halo Stud Sociis",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-2.jpg",
      price: 200,
    },
    {
      id: 3,
      title: "Viamond Halo Stud Donec",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-3.jpg",
      price: 490,
    },
    {
      id: 4,
      title: "Diamond Halo Stud Quis",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-4.jpg",
      price: 736,
    },
  ];

  return (
    <main className="px-5 py-20">
      <section className="container mx-auto">
        <p className="text-center text-base text-gray-500">PRODUCT</p>
        <h1 className="text-center font-semibold text-2xl md:text-4xl">
          Our Newest Product Line
        </h1>

        <div className="pt-10 px-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-10 md:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto"
            >
              <div className="overflow-hidden rounded">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="cursor-pointer w-auto h-auto transition-transform duration-1000 group-hover:scale-125"
                />
              </div>

              <div className="absolute top-0 left-0 right-0 p-4 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="relative">
                  <button
                    className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                    onMouseEnter={() => setActiveTooltip(`cart-${item.id}`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <AiOutlineShoppingCart className="w-5 h-5" />
                  </button>
                  {activeTooltip === `cart-${item.id}` && (
                    <span
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-3 whitespace-nowrap z-20"
                      style={{
                        position: "absolute",
                        bottom: "calc(100% + 2px)", // places the tooltip above with space for arrow
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "black",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                        zIndex: 20,
                        fontSize: "0.75rem",
                        textAlign: "center",
                      }}
                    >
                      Quick Add
                      <span
                        style={{
                          position: "absolute",
                          top: "100%", // places arrow at the bottom of tooltip
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 0,
                          height: 0,
                          borderLeft: "5px solid transparent",
                          borderRight: "5px solid transparent",
                          borderTop: "5px solid black", // triangle arrow pointing down
                          zIndex: 20,
                        }}
                      />
                    </span>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                    onMouseEnter={() => setActiveTooltip(`wishlist-${item.id}`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <AiOutlineStar className="w-5 h-5" />
                  </button>
                  {activeTooltip === `wishlist-${item.id}` && (
                    <span
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-3 whitespace-nowrap z-20"
                      style={{
                        position: "absolute",
                        bottom: "calc(100% + 2px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "black",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                        zIndex: 20,
                        fontSize: "0.75rem",
                        textAlign: "center",
                      }}
                    >
                      Add to Wishlist
                      <span
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 0,
                          height: 0,
                          borderLeft: "5px solid transparent",
                          borderRight: "5px solid transparent",
                          borderTop: "5px solid black",
                          zIndex: 20,
                        }}
                      />
                    </span>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                    onMouseEnter={() => setActiveTooltip(`share-${item.id}`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <AiOutlinePicture className="w-5 h-5" />
                  </button>
                  {activeTooltip === `share-${item.id}` && (
                    <span
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-3 whitespace-nowrap z-20"
                      style={{
                        position: "absolute",
                        bottom: "calc(100% + 2px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "black",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap",
                        zIndex: 20,
                        fontSize: "0.75rem",
                        textAlign: "center",
                      }}
                    >
                      Quick View
                      <span
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 0,
                          height: 0,
                          borderLeft: "5px solid transparent",
                          borderRight: "5px solid transparent",
                          borderTop: "5px solid black",
                          zIndex: 20,
                        }}
                      />
                    </span>
                  )}
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
