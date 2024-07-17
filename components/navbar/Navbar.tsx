import Link from "next/link";
import MobileNav from "./MobileNav";

const links = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/track-parcel",
    label: "Track Parcel",
  },
  {
    href: "/send-parcel",
    label: "Send Parcel",
  },
];

const Navbar = () => {
  return (
    <nav className="text-white bg-stone-900">
      <div className="lg:w-[90%] mx-auto p-3 flex items-center justify-between">
        <Link
          href="/"
          className="tracking-widest uppercase font-bold text-2xl font-light"
        >
          Peak Serve
        </Link>
        <div className="space-x-5 hidden lg:block">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="hover:text-blue-400 transition-all ease-in hover:font-semibold font-light"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
