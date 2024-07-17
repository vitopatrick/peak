import Jumbotron from "@/components/jumbotron/Jumbotron";
import { PlaneTakeoff, ShipIcon, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: (
      <PlaneTakeoff className="h-12 w-12" strokeWidth={1.2} color="#1d4ed8" />
    ),
    title: "CORPORATE LOGISTICS",
    about:
      "We provide corporate organizations with the most reliable top-notch logistics support. Various leading organizations have established trusted partnerships with us, guaranteed by our history of credibility.",
  },
  {
    icon: <ShipIcon className="h-12 w-12" strokeWidth={1.2} color="#1d4ed8" />,
    title: "OVERSEAS SHIPPING",
    about:
      "Let us bring the world to your doorstep! Connect easily with foreign markets, expand your global network, export to and import from any international destination.",
  },
  {
    icon: (
      <ShoppingCart className="h-12 w-12" strokeWidth={1.2} color="#1d4ed8" />
    ),
    title: "E-commerce LOGISTICS",
    about:
      "We understand that running an Ecommerce business is demanding. This is why we make logistics one less thing for you to worry about.",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <div>
        <Jumbotron title="Our Services" />
        {/* services */}
        <div className="lg:w-[80%] mx-auto p-3 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {services.map((service) => (
            <div key={service.title} className="space-y-3">
              {service.icon}
              <h4 className="font-semibold">{service.title}</h4>
              <p className="text-sm leading-loose">{service.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
