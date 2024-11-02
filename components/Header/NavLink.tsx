"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function NavLink() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const Dropdown = [
    { id: 1, title: "Collection 1", link: "/collection-1" },
    { id: 2, title: "Collection 2", link: "/collection-2" },
    { id: 3, title: "Collection 3", link: "/collection-3" },
    { id: 4, title: "Collection 4", link: "/collection-4" },
  ];

  return (
    <ul className="flex flex-col md:flex-row gap-5 justify-center">
      <li className="py-0 md:py-5 px-3 md:px-1">
        <Link href={"/home"} className="transition-all hover:text-teal-500">
          Home
        </Link>
      </li>
      <li
        className="py-0 md:py-5 px-3 md:px-1 relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link
          href={""}
          className="flex cursor-pointer justify-between gap-2 items-center transition-all hover:text-teal-500"
        >
          <span>Collection</span>
          {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Link>
        {isDropdownOpen && (
          <ul className="md:absolute static top-full left-0 bg-white md:border w-full md:w-40 md:mt-0 mt-1 md:shadow-lg z-10">
            {Dropdown.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="block md:px-4 py-2 transition-all hover:text-teal-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
      <li className="py-0 md:py-5 px-3 md:px-1">
        <Link href={"/product"} className="transition-all hover:text-teal-500">
          Product
        </Link>
      </li>
      <li className="py-0 md:py-5 px-3 md:px-1">
        <Link
          href={"/other-page"}
          className="transition-all hover:text-teal-500"
        >
          Other Page
        </Link>
      </li>
      <li className="py-0 md:py-5 px-3 md:px-1">
        <Link href={"/blog"} className="transition-all hover:text-teal-500">
          Blog
        </Link>
      </li>
    </ul>
  );
}
