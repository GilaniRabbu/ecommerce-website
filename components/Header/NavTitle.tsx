import Link from "next/link";
import { RiArmchairLine } from "react-icons/ri";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({ subsets: ["latin"], weight: ["600"] });

export default function NavTitle() {
  return (
    <Link
      href={"/"}
      className={`${roboto.className} flex gap-1 items-center text-xl sm:text-2xl hover:text-teal-500`}
    >
      <RiArmchairLine /> FurStore
    </Link>
  );
}
