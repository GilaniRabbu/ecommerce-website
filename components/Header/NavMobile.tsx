"use client";

import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import NavIcon from "./NavIcon";
import NavLink from "./NavLink";
import NavTitle from "./NavTitle";

export default function NavMobile() {
  const [isMenuOpen, setMenu] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex p-3 gap-4 items-center">
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
        <div
          ref={panelRef}
          className="w-60 h-screen p-8 flex flex-col gap-8 absolute top-0 left-0 z-50 bg-white text-black shadow-lg"
        >
          <p className="px-2 mb-5">
            <IoClose
              onClick={() => setMenu(false)}
              className="text-2xl cursor-pointer transition-all hover:text-teal-500"
            />
          </p>
          <NavTitle />
          <NavLink />
        </div>
      </div>
    </div>
  );
}
