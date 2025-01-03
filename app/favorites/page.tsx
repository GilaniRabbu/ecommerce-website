"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function Favorites() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main className="px-5 py-20">
      <section className="container mx-auto">
        <div className="py-10">
          <h1 className="text-center font-semibold text-2xl md:text-4xl">
            Your Wishlist
          </h1>
          <div className="flex justify-center items-center gap-2.5">
            <Link href={"/"}>Home</Link>-<p>Page Wishlist</p>
          </div>
        </div>

        <div className="py-10">
          {wishlist.length === 0 ? (
            <p className="text-center text-gray-500">Your wishlist is empty.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlist.map((item) => (
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
                          className="p-2 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                          onClick={() => removeFromWishlist(item.id)}
                          aria-label="Remove from Wishlist"
                        >
                          <AiOutlineStar className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="relative">
                        <button
                          className="p-2 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                          onMouseEnter={() =>
                            setActiveTooltip(`cart-${item.id}`)
                          }
                          onMouseLeave={() => setActiveTooltip(null)}
                          onClick={() =>
                            addToCart({
                              id: Number(item.id),
                              title: item.title,
                              price: item.price,
                              quantity: 1,
                              image: item.image,
                            })
                          }
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
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <p className="mt-3 text-teal-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
