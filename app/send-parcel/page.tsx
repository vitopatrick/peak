import SendParcelForm from "@/components/send-parcel-form/SendParcelForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send Parcel",
  description: "Send Parcel To ...",
};

const SendParcel = () => {
  return (
    <div className="mx-auto w-[80%] p-4">
      <SendParcelForm />
    </div>
  );
};

export default SendParcel;
