import Link from "next/link";

const company_links = [
  {
    href: "/",
    label: "Home",
  },
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
];

const services_links = [
  {
    href: "/send-parcel",
    label: "Send Parcel",
  },
  {
    href: "/track-parcel",
    label: "Track Parcel",
  },
  {
    href: "/faq",
    label: "FAQs",
  },
];

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white ">
      {/* links COMPANY SERVICES */}
      <div className="lg:w-[80%] mx-auto p-4 gap-4 grid-cols-1 lg:grid-cols-3 grid">
        <div>
          <h4 className="font-semibold">Company</h4>
          <div className="space-y-3 mt-2">
            {company_links.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-blue-800 transition-all ease-in"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <div className="space-y-3 mt-2">
            {services_links.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-blue-800 transition-all ease-in"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Contact Us:</h4>
          <p className="text-sm mt-2">contact@peakserve.online</p>
          <div className="space-y-2 mt-2 text-sm">
            <p>16th Station Bolshogo Fontana, Odessa 65000, Ukraine B-1/E-3,</p>
            <p>Al-ahmadi area 14 kilometers south of Kuwait city.</p>
          </div>
        </div>
      </div>
      {/* bottom Text */}
      <div className="p-4 mt-4">
        <p className="text-center text-sm">
          © 2024 Peak Serve. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
