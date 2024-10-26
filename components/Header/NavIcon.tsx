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
    <ul className="flex flex-row gap-5 justify-between md:justify-center p-0 md:p-2">
      {profileNav.map((i) => (
        <li key={i.id}>
          <Link href={i.link} className="text-lg hover:text-teal-500">
            {i.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
