import NavTitle from "./NavTitle";
import NavLink from "./NavLink";
import NavIcon from "./NavIcon";
import NavMobile from "./NavMobile";

export default function Header() {
  return (
    <main className="shadow bg-white">
      <section className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div>
            <NavTitle />
          </div>

          <div className="md:block hidden">
            <NavLink />
          </div>

          <div className="md:block hidden">
            <NavIcon />
          </div>

          <div className="md:hidden block">
            <NavMobile />
          </div>
        </div>
      </section>
    </main>
  );
}
