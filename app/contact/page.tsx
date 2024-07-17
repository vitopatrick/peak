import Jumbotron from "@/components/jumbotron/Jumbotron";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <Jumbotron title="Contact Us" />
      <div className="lg:w-[40%] mx-auto p-4 my-4 space-y3">
        <h4 className="text-center p-3 capitalize font-semibold text-2xl">
          Contact Us Today
        </h4>
        <p className="text-center font-semibold text-gray-400">
          Reach out to us or contact us via email{" "}
        </p>
        {/* form */}
        <div className="space-y-6">
          {/* name */}
          <div>
            <Label>Name</Label>
            <Input placeholder="John Doe" />
          </div>
          {/* email */}
          <div>
            <Label>Email</Label>
            <Input placeholder="John Doe" />
          </div>
          {/* message */}
          <div>
            <Label>Message</Label>
            <Textarea />
          </div>
          {/* button */}
          <Button>Send Message</Button>
        </div>
      </div>
      <div className="h-12"></div>
    </div>
  );
};

export default ContactUsPage;
