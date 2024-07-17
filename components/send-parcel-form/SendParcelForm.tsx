import React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DatePicker from "../date-picker/DatePicker";
import { Button } from "../ui/button";

const SendParcelForm = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-center capitalize font-semibold underline text-xl">
        Fill in the form below to get an estimate for your item(s).
      </h2>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* delivery information */}
        <div className="space-y-4">
          <h3 className="font-semibold">Delivery Information</h3>
          <div className="space-y-3">
            {/* Posting Date */}
            <div className="flex flex-col gap-2">
              <Label>Posting Date</Label>
              <DatePicker />
            </div>
            {/* Posting State */}
            <div>
              <Label>Posting State</Label>
              <Input />
            </div>
            {/* Posting Country */}
            <div>
              <Label>Posting Country</Label>
              <Input />
            </div>
            {/* Estimated Date */}
            <div className="flex flex-col gap-2">
              <Label>Estimated Date</Label>
              <DatePicker />
            </div>
            {/* Destination State */}
            <div>
              <Label>Destination State</Label>
              <Input />
            </div>
            {/* Destination Country */}
            <div>
              <Label>Destination Country</Label>
              <Input />
            </div>
          </div>
        </div>
        {/* parcel information */}
        <div className="space-y-4">
          <h3 className="font-semibold">Parcel Information</h3>
          {/* Quantity */}
          <div>
            <Label>Quantity</Label>
            <Input />
          </div>
          {/* Weight */}
          <div>
            <Label>Weight</Label>
            <Input />
          </div>
          {/* height */}
          <div>
            <Label>Height</Label>
            <Input />
          </div>
          {/* package */}
          <div>
            <Label>Package</Label>
            <Input />
          </div>
          {/* parcel description */}
          <div>
            <Label>Parcel Description</Label>
            <Textarea />
          </div>
        </div>
      </main>

      {/* Sender Information */}
      <div className="space-y-4">
        <h3 className="font-semibold">Sender Information</h3>
        <div className="space-y-4">
          {/* Name */}
          <div>
            <Label>Name</Label>
            <Input />
          </div>
          {/* Phone */}
          <div>
            <Label>Phone</Label>
            <Input />
          </div>
          {/* Address */}
          <div>
            <Label>Address</Label>
            <Input />
          </div>
          {/* Email */}
          <div>
            <Label>Email</Label>
            <Input />
          </div>
          <Button>Send Request</Button>
        </div>
      </div>
    </div>
  );
};

export default SendParcelForm;
