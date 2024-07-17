"use client";

import { usePathname } from "next/navigation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Jumbotron = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  const pathname = usePathname();

  return (
    <div
      className="h-[50vh]"
      style={{
        backgroundImage:
          'url("https://giglogistics.com/static/media/banner.ca331fe5.jpeg")',
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-black/60 h-full flex items-center justify-center flex-col space-y-3">
        <h4 className="font-bold text-2xl lg:text-4xl text-white">{title}</h4>
        <p className="text-white text-center">{subtitle}</p>
        {pathname == "/" && (
          <div className=" w-full lg:w-[40%] mx-auto space-y-3">
            <Input
              className="bg-neutral-200 text-black"
              placeholder="Enter Tracking Number"
            />
            <Button className="w-full">Search</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jumbotron;
