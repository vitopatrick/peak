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
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { addPackage } from "@/actions/package";
import { toast } from "sonner";

export const formSchema = z.object({
  sender_name: z.string().max(50),
  sender_phone: z.string().max(50),
  sender_address: z.string().max(50),
  receiver_name: z.string().max(50),
  receiver_phone: z.string().max(50),
  receiver_address: z.string().max(50),
  description: z.string().max(50),
  weight: z.string().max(50),
  package: z.string().max(50),
  pickup_date: z.date({
    required_error: "Select Pick up date",
  }),
  posting_date: z.date({
    required_error: "Select Post date",
  }),
});

const CreateParcelForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickup_date: new Date(),
      weight: "",
      description: "",
      posting_date: new Date(),
      receiver_address: "",
      receiver_name: "",
      receiver_phone: "",
      sender_name: "",
      sender_address: "",
      sender_phone: "",
      package: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const request: any = await addPackage(values);

    toast.success(request.message);
  }

  return (
    <div>
      {/* container */}
      <div className="lg:w-[80%] mx-auto p-4">
        {/* form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              {/* Parcel Information */}
              <div className="space-y-4">
                <h4 className="font-semibold uppercase">Parcel Information</h4>
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight</FormLabel>
                      <FormControl>
                        <Input placeholder="Parcel Weight" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* package */}
                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Package</FormLabel>
                      <FormControl>
                        <Input placeholder="Parcel name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* delivery information */}
              <div className="space-y-4">
                <h4 className="font-semibold uppercase">
                  Delivery Information
                </h4>
                <div className="space-y-5">
                  {/* name */}
                  <FormField
                    control={form.control}
                    name="receiver_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* phone */}
                  <FormField
                    control={form.control}
                    name="receiver_phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder=" Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* address */}
                  <FormField
                    control={form.control}
                    name="receiver_address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* posting date */}
                  <FormField
                    control={form.control}
                    name="posting_date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Posting Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value as any}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* pick up date */}
                  <FormField
                    control={form.control}
                    name="pickup_date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Pick Up Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value as any}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Send Info */}
            <div className="space-y-2">
              <h4 className="font-semibold uppercase">Sender Information</h4>
              <div className="space-y-3">
                {/* name */}
                <FormField
                  control={form.control}
                  name="sender_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Sender Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* phone */}
                <FormField
                  control={form.control}
                  name="sender_phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Sender Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* address */}
                <FormField
                  control={form.control}
                  name="sender_address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Sender Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Create Parcel</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateParcelForm;
