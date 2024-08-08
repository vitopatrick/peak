"use server";

import { formSchema } from "@/components/createparcelForm/CreateParcelForm";
import { prisma } from "@/prisma/script";
import { z } from "zod";
import cuid from "cuid";
import { revalidatePath } from "next/cache";
import { updateSchema } from "@/components/update-parcel/UpdateParcel";

export const addPackage = async (values: z.infer<typeof formSchema>) => {
  try {
    const trackingNumber = cuid();

    const packageData = {
      tracking_number: trackingNumber,
      description: values.description,
      sender_address: values.sender_address,
      sender_name: values.sender_name,
      sender_phone: values.sender_phone,
      receiver_address: values.receiver_address,
      receiver_name: values.receiver_name,
      receiver_phone: values.receiver_phone,
      weight: values.weight,
      pickup_date: values.pickup_date,
      posting_date: values.pickup_date,
    };

    const createdPackage = await prisma.package.create({
      data: packageData,
    });

    // Consider conditional revalidation based on success
    if (createdPackage) {
      revalidatePath("/control");
    }

    return {
      message: "Package created successfully",
      packageId: createdPackage.id,
    };
  } catch (error) {
    console.error("Error creating package:", error);
    // Handle error based on error type (e.g., validation, database)
    return { error: "An error occurred while creating the package" };
  }
};

export const getPackages = async () => {
  try {
    return await prisma.package.findMany();
  } catch (error) {
    return error;
  }
};

export const findPackages = async (tracking_number: any) => {
  try {
    const parcel = await prisma.package.findFirst({
      where: {
        tracking_number,
      },
    });

    return parcel;
  } catch (error) {
    return error;
  }
};

export const updatePackage = async (
  values: z.infer<typeof updateSchema>,
  id: any
) => {
  try {
    const prevPackage = await prisma.package.findFirst({
      where: {
        id,
      },
    });

    await prisma.package.update({
      where: {
        id,
      },
      data: {
        lat: !prevPackage?.lat ? prevPackage?.lat : +values.lat,
        long: !prevPackage?.long ? prevPackage?.long : +values.long,
        current_location: !prevPackage?.current_location
          ? prevPackage?.current_location
          : values.current_location,
        book_status: !prevPackage?.book_status
          ? prevPackage?.book_status
          : values.status,
      },
    });

    revalidatePath("/control");

    return "Updated";
  } catch (error) {
    return error;
  }
};
