"use client";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import clsx from "clsx";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";
import NavTitle from "./NavTitle";

export default function NavMobile() {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <div>
      <div className="flex p-3 gap-5 items-center">
        <NavIcon />
        <AiOutlineMenu
          onClick={() => setMenu(true)}
          className="cursor-pointer text-lg transition-all hover:text-teal-500"
        />
      </div>
      <div
        className={clsx(
          "fixed h-full w-screen lg:hidden z-50 bg-black/60 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
          isMenuOpen && "translate-x-0"
        )}
      >
        <div className="w-60 h-screen p-8 flex flex-col gap-8 absolute top-0 left-0 z-50 bg-white text-black shadow-lg">
          <p className="p-1 mb-5">
            <AiOutlineClose
              onClick={() => setMenu(false)}
              className="text-xl cursor-pointer transition-all hover:text-teal-500"
            />
          </p>
          <NavTitle />
          <NavLink />
        </div>
      </div>
    </div>
  );
}
