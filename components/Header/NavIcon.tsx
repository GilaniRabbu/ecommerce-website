"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";

export default function NavIcon() {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("ENGLISH");
  const panelRef = useRef<HTMLDivElement>(null);
  const { cart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setActivePanel(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePanel = (panelName: string) => {
    setActivePanel(activePanel === panelName ? null : panelName);
  };

  const hotSearches = ["Plant", "Clock", "Chair", "Lamp"];

  return (
    <div className="relative z-50">
      <ul className="flex flex-row gap-4 justify-between md:justify-center">
        <li className="py-4 px-0 lg:px-2 md:px-1">
          <Link
            href={""}
            onClick={() => togglePanel("search")}
            className="text-lg transition-all hover:text-teal-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
              />
            </svg>
          </Link>
        </li>
        <li className="py-4 px-0 lg:px-2 md:px-1">
          <Link
            href={""}
            onClick={() => togglePanel("user")}
            className="text-lg transition-all hover:text-teal-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 8"
              />
            </svg>
          </Link>
        </li>
        <li className="py-4 px-0 lg:px-2 md:px-1">
          <Link
            href={"/favorites"}
            className="text-lg transition-all hover:text-teal-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM12 12.25"
              />
            </svg>
          </Link>
        </li>
        <li className="py-4 px-0 lg:px-2 md:px-1">
          <Link
            href={""}
            onClick={() => togglePanel("cart")}
            className="text-lg transition-all hover:text-teal-500 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425zm3.35 7h7z"
              />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-3 left-2 bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {/* Backdrop */}
      {activePanel && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setActivePanel(null)}
        />
      )}
      {/* Backdrop */}

      {/* Panel Container */}
      <div ref={panelRef}>
        {/* Search Panel */}
        <div
          className={`fixed inset-x-0 top-0 h-auto bg-white transition-transform duration-300 ease-in-out transform z-50 ${
            activePanel === "search" ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto p-8">
            <button
              onClick={() => setActivePanel(null)}
              className="absolute top-5 right-5 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="max-w-5xl mx-auto">
              <div className="relative mt-8 mb-12 flex items-center">
                <input
                  type="search"
                  placeholder="ENTER YOUR KEYWORDS"
                  className="w-full p-4 text-sm bg-transparent outline-none border border-teal-600"
                />
                <button className="text-xs absolute right-4">SEARCH</button>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4">HOT SEARCHES :</h3>
                <div className="flex flex-wrap gap-2">
                  {hotSearches.map((term) => (
                    <button
                      key={term}
                      className="px-4 py-2 text-sm bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Search Panel */}

        {/* User Panel */}
        <div
          className={`fixed inset-y-0 right-0 w-80 bg-white transition-transform duration-300 ease-in-out transform z-50 ${
            activePanel === "user" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-10">
            <button
              onClick={() => setActivePanel(null)}
              className="absolute top-5 right-5 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="space-y-8 my-10 pb-10 border-b border-b-gray-300">
              <Link
                href="/login"
                className="block transition-colors hover:text-teal-600"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block transition-colors hover:text-teal-600"
              >
                Register
              </Link>
              <Link
                href="/wishlist"
                className="block transition-colors hover:text-teal-600"
              >
                Wishlist
              </Link>
              <Link
                href="/checkout"
                className="block transition-colors hover:text-teal-600"
              >
                Check Out
              </Link>
            </nav>
            <div className="mt-8">
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-2">CURRENCY</h3>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full p-2 text-sm rounded text-gray-500 bg-gray-100"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">LANGUAGE</h3>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full text-sm p-2 rounded text-gray-500 bg-gray-100"
                >
                  <option value="ENGLISH">ENGLISH</option>
                  <option value="SPANISH">SPANISH</option>
                  <option value="FRENCH">FRENCH</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* User Panel */}

        {/* Cart Panel */}
        <div
          className={`fixed inset-y-0 right-0 w-80 overflow-y-scroll bg-white transition-transform duration-300 ease-in-out transform z-50 ${
            activePanel === "cart" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-5 py-5 px-8 border-b border-b-black/10">
            <p className="cursor-pointer text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
                />
              </svg>
            </p>
            <button
              onClick={() => setActivePanel(null)}
              className="text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-5">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 mb-5">
                Your cart is currently empty.
              </p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4 mb-4"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold mb-3">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-xs text-gray-600 hover:text-gray-800"
                        >
                          <FaMinus />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-xs text-gray-600 hover:text-gray-800"
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-semibold">
                    Total: $
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Cart Panel */}
      </div>
      {/* Panel Container */}
    </div>
  );
}
