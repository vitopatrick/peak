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
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function PackagesTable({ packages }: any) {
  const navigate = useRouter();

  const delete_parcel = async (id: any) => {
    const ref = doc(db, "packages", id);

    await deleteDoc(ref);

    toast.success("Deleted Package");

    navigate.refresh();
  };

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
                <TableCell className="font-mono tracking-wider">
                  {parcel.id}
                </TableCell>
                <TableCell>{parcel.weight}kg</TableCell>
                <TableCell>{parcel.sender_name}</TableCell>
                <TableCell className="text-right  flex items-center gap-3">
                  <Button
                    variant={"destructive"}
                    onClick={() => delete_parcel(parcel.id)}
                  >
                    <Trash />
                  </Button>

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
