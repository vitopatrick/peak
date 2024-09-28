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
import ParcelInfo from "../parcel-info/ParcelInfo";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { capitalizeFirstLetter } from "@/lib/utils";

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
  const [error, setError] = useState<any>(null);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const id = capitalizeFirstLetter(values.tracking_number);

      const docRef = doc(db, "packages", id);
      const parcelSnapshot = await getDoc(docRef);

      if (parcelSnapshot.exists()) {
        // Set the parcel data to state
        setParcel({ id: parcelSnapshot.id, ...parcelSnapshot.data() });
      } else {
        setError("Parcel not found");
      }
    } catch (error) {
      console.error("Error fetching parcel:", error);
      setError("An error occurred while fetching the parcel.");
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
      {error ? <p className="text-center uppercase">{error}</p> : null}
    </div>
  );
};

export default SearchForm;
