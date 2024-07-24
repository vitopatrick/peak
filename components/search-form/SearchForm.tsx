"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { findPackages } from "@/actions/package";
import ParcelInfo from "../parcel-info/ParcelInfo";

const formSchema = z.object({
  tracking_number: z.string(),
});

const SearchForm = () => {
  const form = useForm({
    defaultValues: {
      tracking_number: "",
    },
    resolver: zodResolver(formSchema),
  });

  const [parcel, setParcel] = useState<any>();
  const [error, setError] = useState<any>();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const parcel = await findPackages(values.tracking_number);

    if (parcel) {
      setParcel(parcel);
    } else {
      setError("Parcel Does not exist");
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="lg:w-[50%] mx-auto p-3 space-y-2"
        >
          <FormField
            control={form.control}
            name="tracking_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tracking Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Tracking Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Send Request</Button>
        </form>
      </Form>
      <ParcelInfo info={parcel} />
      {error && <p className="text-center p-4 text-red-800 text-xl">{error}</p>}
    </div>
  );
};

export default SearchForm;
