import { formalDate } from "@/lib/format";
// import Map from "../map/Map";

const ParcelInfo = ({ info }: any) => {
  return (
    <div className="lg:w-[50%] mx-auto p-3">
      {/* <Map /> */}
      {/* container */}
      {info && (
        <div className="grid grid-cols-2 gap-3">
          {/* send info */}
          <div>
            <h3 className="font-semibold capitalize">Sender Information</h3>
            <div className="space-y-3 mt-3">
              <p>Sender Name: {info.sender_name}</p>
              <p>Sender Phone: {info.sender_phone}</p>
              <p>Sender Address: {info.sender_address}</p>
              <p>Posting Date: {formalDate(info.posting_date)}</p>
            </div>
          </div>
          {/* Delivery Info */}
          <div>
            <h3 className="font-semibold capitalize">Delivery Information</h3>
            <div className="space-y-3 mt-3">
              <p>Receiver Name: {info.receiver_name}</p>
              <p>Weight: {info.weight}kg</p>
              <p>Receiver Phone: {info.receiver_phone}</p>
              <p>Receiver Address: {info.receiver_address}</p>
              <p>Pick Up Date:{formalDate(info.pickup_date)}</p>
              <p>Tracking Number: {info.tracking_number}</p>
              <p>Status:{info.book_status}</p>
              <p>last updated:{formalDate(info.updatedAt)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParcelInfo;
