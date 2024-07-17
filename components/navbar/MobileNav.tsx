import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="space-y-4">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="hover:text-blue-800 transition-all ease-in hover:font-semibold block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
