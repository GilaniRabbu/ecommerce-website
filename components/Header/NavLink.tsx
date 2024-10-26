"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function NavLink() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const links = [
  //   { id: 1, title: "Home", link: "/home" },
  //   { id: 2, title: "Collection", link: "/collection" },
  //   { id: 3, title: "Product", link: "/product" },
  //   { id: 4, title: "Other Page", link: "/other-page" },
  //   { id: 5, title: "Blog", link: "/blog" },
  // ];

  const Dropdown = [
    { id: 1, title: "Collection 1", link: "/collection-1" },
    { id: 2, title: "Collection 2", link: "/collection-2" },
    { id: 3, title: "Collection 3", link: "/collection-3" },
    { id: 4, title: "Collection 4", link: "/collection-4" },
  ];

  return (
    <ul className="flex flex-col md:flex-row gap-5 justify-center">
      <li>
        <Link href={"/home"} className="hover:text-teal-500">
          Home
        </Link>
      </li>
      <li
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link
          href="/collection"
          className="flex justify-between gap-2 items-center hover:text-teal-500"
        >
          <span>Collection</span>
          {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Link>
        {isDropdownOpen && (
          <ul className="md:absolute static top-full left-0 bg-white md:border w-full md:w-40 md:mt-0 mt-1 md:rounded md:shadow-lg z-10">
            {Dropdown.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="block md:px-4 py-2 hover:text-teal-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
      <li>
        <Link href={"/product"} className="hover:text-teal-500">
          Product
        </Link>
      </li>
      <Link href={"/other-page"} className="hover:text-teal-500">
        Other Page
      </Link>
      <li>
        <Link href={"/blog"} className="hover:text-teal-500">
          Blog
        </Link>
      </li>
    </ul>
  );
}
