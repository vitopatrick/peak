"use client";

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Map = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          zoom={10}
          center={{
            lat: 7.2905715,
            lng: 80.6337262,
          }}
        >
          <MarkerF
            position={{
              lat: 7.2905715,
              lng: 80.6337262,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
