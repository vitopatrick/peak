"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import UpdateParcel from "../update-parcel/UpdateParcel";

export default function PackagesTable({ packages }: any) {
  const delete_parcel = async (id: any) => {};

  return (
    <>
      {packages && (
        <Table className="lg:w-[80%] mx-auto p-4">
          <TableHeader>
            <TableRow>
              <TableHead>Tracking No.</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Sender</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((parcel: any) => (
              <TableRow key={parcel.id}>
                <TableCell className="font-mono uppercase tracking-wider">
                  {parcel.id}
                </TableCell>
                <TableCell>{parcel.weight}kg</TableCell>
                <TableCell>{parcel.sender_name}</TableCell>
                <TableCell className="text-right  flex items-center gap-3">
                  <form action={delete_parcel.bind(null, parcel.id)}>
                    <Button variant={"destructive"}>
                      <Trash />
                    </Button>
                  </form>
                  <UpdateParcel id={parcel.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
