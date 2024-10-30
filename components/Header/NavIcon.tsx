import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUserAdd,
} from "react-icons/ai";

export default function NavIcon() {
  const profileNav = [
    { id: 1, icon: <AiOutlineSearch />, link: "/search" },
    { id: 2, icon: <AiOutlineUserAdd />, link: "/profile" },
    { id: 3, icon: <AiOutlineStar />, link: "/favorites" },
    { id: 4, icon: <AiOutlineShoppingCart />, link: "/cart" },
  ];

  return (
    <ul className="flex flex-row gap-5 justify-between md:justify-center">
      {profileNav.map((i) => (
        <li key={i.id} className="py-4 px-0 lg:px-2 md:px-1">
          <Link
            href={i.link}
            className="text-lg transition-all hover:text-teal-500"
          >
            {i.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
