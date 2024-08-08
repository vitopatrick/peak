import { formalDate } from "@/lib/format";
import LeafletMap from "../map/Map";
// import Map from "../map/Map";

const ParcelInfo = ({ info }: any) => {
  console.log(info);
  return (
    <div className="lg:w-[50%] mx-auto p-3">
      {info && (
        <LeafletMap
          lat={+info.lat}
          long={+info.long}
          location={info.current_location}
        />
      )}
      {/* container */}
      {info && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* send info */}
          <div>
            <h3 className="font-semibold capitalize">Sender Information</h3>
            <div className="space-y-3 mt-3">
              <p>
                Sender Name:{" "}
                <span className="font-semibold capitalize">
                  {info.sender_name}
                </span>
              </p>
              <p>
                Sender Phone:{" "}
                <span className="font-semibold capitalize">
                  {info.sender_phone}
                </span>
              </p>
              <p>
                Sender Address:{" "}
                <span className="font-semibold capitalize">
                  {" "}
                  {info.sender_address}
                </span>
              </p>
              <p>
                Posting Date:{" "}
                <span className="font-semibold capitalize">
                  {formalDate(info.posting_date)}
                </span>{" "}
              </p>
            </div>
          </div>
          {/* Delivery Info */}
          <div>
            <h3 className="font-semibold capitalize">Delivery Information</h3>
            <div className="space-y-3 mt-3">
              <p>
                Receiver Name:{" "}
                <span className="font-semibold capitalize">
                  {info.receiver_name}
                </span>{" "}
              </p>
              <p>
                Weight:{" "}
                <span className="font-semibold capitalize">
                  {info.weight}kg
                </span>{" "}
              </p>
              <p>
                Receiver Phone:{" "}
                <span className="font-semibold capitalize">
                  {" "}
                  {info.receiver_phone}
                </span>
              </p>
              <p>
                Receiver Address:{" "}
                <span className="font-semibold capitalize">
                  {" "}
                  {info.receiver_address}
                </span>
              </p>
              <p>
                Pick Up Date:{" "}
                <span className="font-semibold capitalize">
                  {formalDate(info.pickup_date)}
                </span>
              </p>
              <p>
                Tracking Number:{" "}
                <span className=" uppercase font-mono">
                  {info.tracking_number}
                </span>{" "}
              </p>
              <p>
                Status:{" "}
                <span className="font-semibold capitalize">
                  {info.book_status === null ? "in Office" : info.book_status}
                </span>
              </p>
              <p>
                last updated:{" "}
                <span className="font-semibold capitalize">
                  {formalDate(info.updatedAt)}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParcelInfo;
