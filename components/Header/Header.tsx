"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUserAdd,
  AiOutlineMenu,
} from "react-icons/ai";
import { RiArmchairLine } from "react-icons/ri";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "Collection", link: "/collection" },
    { id: 3, title: "Product", link: "/product" },
    { id: 4, title: "Other Page", link: "/other-page" },
    { id: 5, title: "Blog", link: "/blog" },
  ];

  const profileNav = [
    { id: 1, icon: <AiOutlineSearch />, link: "/search" },
    { id: 2, icon: <AiOutlineUserAdd />, link: "/profile" },
    { id: 3, icon: <AiOutlineStar />, link: "/favorites" },
    { id: 4, icon: <AiOutlineShoppingCart />, link: "/cart" },
  ];

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-row justify-between items-center p-4">
        <div>
          <h1 className="flex gap-1 font-bold items-center">
            <RiArmchairLine /> FurStore
          </h1>
        </div>

        <div className="md:block hidden">
          <ul className="flex flex-col md:flex-row gap-5 justify-center p-2">
            {links.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:block hidden">
          <ul className="flex flex-col md:flex-row gap-5 justify-center p-2">
            {profileNav.map((i) => (
              <li key={i.id}>
                <Link href={i.link} className="text-lg">
                  {i.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*<div className="md:hidden block">
          <button onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>
        </div>*/}
        {/* Mobile Menu */}

        <div className="md:hidden block relative">
          <button onClick={toggleMenu} className="menu">
            <AiOutlineMenu />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
              <div>
                <ul className="flex flex-col gap-3 p-3 border-b">
                  {links.map((item) => (
                    <li key={item.id}>
                      <Link href={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="flex justify-between gap-3 p-3">
                  {profileNav.map((i) => (
                    <li key={i.id}>
                      <Link href={i.link} className="block text-lg">
                        {i.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
