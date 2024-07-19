"use server";

import { formSchema } from "@/components/createparcelForm/CreateParcelForm";
import { prisma } from "@/prisma/script";
import { z } from "zod";
import cuid from "cuid";
import { revalidatePath } from "next/cache";
import { updateSchema } from "@/components/update-parcel/UpdateParcel";

export const addPackage = async (values: z.infer<typeof formSchema>) => {
  try {
    let tracking_number = cuid();

    await prisma.package.create({
      data: {
        tracking_number,
        description: values.description,
        pickup_date: `${values.pickup_date}`,
        posting_date: `${values.posting_date}`,
        sender_address: values.sender_address,
        sender_name: values.sender_name,
        sender_phone: values.sender_phone,
        receiver_address: values.receiver_address,
        receiver_name: values.receiver_name,
        receiver_phone: values.receiver_phone,
        weight: values.weight,
      },
    });

    revalidatePath("/control");

    return {
      message: "Created Package",
    };
  } catch (error) {
    return error;
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
    await prisma.package.update({
      where: {
        id,
      },
      data: {
        lat: values.lat,
        long: values.long,
        current_location: values.current_location,
        book_status: values.status,
      },
    });

    return "Updated";
  } catch (error) {
    return error;
  }
};
