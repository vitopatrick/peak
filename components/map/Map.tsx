"use client";

// LeafletMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define the default icon
const DefaultIcon = L.icon({
  iconUrl: '/marker-icon.png'
});


const LeafletMap = ({
  lat = 46.4702,
  long = 30.7306,
  location='Store'
}: {
  lat?: number;
    long?: number;
  location?:string
}) => {
  const position: any = [lat, long];

  return (
    <div className="mb-5">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={DefaultIcon}>
          <Popup>{location}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
