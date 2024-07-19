"use client";

import Jumbotron from "@/components/jumbotron/Jumbotron";
import useTidioChat from "@/hooks/useChatSupport";
import { Clock12, Computer, ShoppingBasket } from "lucide-react";

const services = [
  {
    icon: <Computer className="h-12 w-12" strokeWidth={1.2} color="#1d4ed8" />,
    title: "Latest Technology",
    about:
      "Technology and its application are fundamental at Peak. We understand the role of technology in providing an exceptional customer experience. For this reason, our processes, products and services are built around modern technology to help us deliver your shipments cheaper, safely and at the speed of light.",
  },
  {
    icon: (
      <ShoppingBasket className="h-12 w-12" strokeWidth={1.2} color="#1d4ed8" />
    ),
    title: "Social Commerce",
    about:
      "Pivotal to successful social commerce transactions is the ability for the end-user to receive items where and when needed. With an unmatched route network spanning urban and rural communities, Peak is the solution to efficient last-mile delivery. As a merchant, you only have to think about selling your products while Peak delivers to your customers worldwide.",
  },
  {
    icon: <Clock12 className="h-12 w-12" strokeWidth={1.2} color="#1d4ed8" />,
    title: "Guaranteed Delivery",
    about:
      "We are conscious of the relationship between time and money and utilize our resources optimally to meet your delivery needs. Our service commitment to you is hassle-free delivery. We are large enough to efficiently handle deliveries for large corporations yet small enough to deploy innovative delivery solutions that help small businesses.",
  },
];

const HomePage = () => {
  useTidioChat();

  return (
    <div>
      <Jumbotron
        title="Experience the Future of Delivery Today!"
        subtitle="Tired of waiting for your packages? Looking for a reliable and fast courier service that understands the urgency of your needs? Look no further!"
      />
      <div className="my-4">
        <h3 className="text-center font-bold text-3xl capitalize">
          We take the burden of logistics off you.
        </h3>
        <div className="lg:w-[80%] mx-auto p-3 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="space-y-3 flex items-center justify-center flex-col"
            >
              {service.icon}
              <h4 className="font-semibold">{service.title}</h4>
              <p className="text-sm leading-loose text-center line-clamp-4">
                {service.about}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* gallery */}
    </div>
  );
};

export default HomePage;
