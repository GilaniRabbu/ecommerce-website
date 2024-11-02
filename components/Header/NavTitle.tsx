import Link from "next/link";
import { RiArmchairLine } from "react-icons/ri";

export default function NavTitle() {
  return (
    <Link
      href={"/"}
      className="p-3 flex gap-1 items-center text-xl sm:text-2xl transition-all hover:text-teal-500"
    >
      <RiArmchairLine /> FurStore
    </Link>
  );
}
