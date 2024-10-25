"use client";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import clsx from "clsx";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";

export default function NavMobile() {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <div>
      <div className="flex p-3 gap-5 items-center">
        <NavIcon />
        <AiOutlineMenu
          onClick={() => setMenu(true)}
          className="cursor-pointer text-lg"
        />
      </div>
      <div
        className={clsx(
          "fixed right-0 top-0 h-full w-60 p-8 bg-white shadow-lg flex flex-col gap-8 z-50 transition-all",
          isMenuOpen ? "translate-x-0" : "translate-x-[500%]"
        )}
      >
        <AiOutlineClose
          onClick={() => setMenu(false)}
          className="mb-5 text-lg cursor-pointer"
        />
        <NavLink />
      </div>
    </div>
  );
}
