import Link from "next/link";
import { RiArmchairLine } from "react-icons/ri";

export default function NavTitle() {
  return (
    <Link
      href={"/"}
      className="flex gap-1 items-center text-xl sm:text-2xl hover:text-teal-500"
    >
      <RiArmchairLine /> FurStore
    </Link>
  );
}
