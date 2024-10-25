"use client";

import Link from "next/link";
import { useState } from "react";

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
    <ul className="flex flex-col md:flex-row gap-5 justify-center p-2">
      <li>
        <Link href={"/home"}>Home</Link>
      </li>
      <li
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link href="/collection">Collection</Link>
        {isDropdownOpen && (
          <ul className="absolute top-full left-0 bg-white border w-40 mt-1 rounded shadow-lg z-10">
            {Dropdown.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
      <li>
        <Link href={"/product"}>Product</Link>
      </li>
      <Link href={"/other-page"}>Other Page</Link>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
    </ul>
  );
}
