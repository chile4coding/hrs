import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
    const [loc, setLoc] = useState([4.8472226, 6.974604])

    const customIcon = new L.Icon({
      iconUrl: "/location.svg",
      iconSize: [32, 32], // Adjust the size of the icon
      iconAnchor: [16, 32], // Adjust the anchor point if necessary
    });
  return (
    <MapContainer
      center={loc}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "80vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={loc} icon={customIcon}>
        <Popup>Life Save Hospital</Popup>
      </Marker>
    </MapContainer>
  );
}
