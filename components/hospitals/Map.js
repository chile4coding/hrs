import React, {useEffect, useState} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

export default function Map() {
    const { singleHospital } = useSelector((state) => state.hospitals);
    const [loc, setLoc] = useState(singleHospital.location.coordinates);

useEffect(()=>{
setLoc(singleHospital.location.coordinates
);
},[])



    const customIcon = new L.Icon({
      iconUrl: "/location.svg",
      iconSize: [32, 32], // Adjust the size of the icon
      iconAnchor: [16, 32], // Adjust the anchor point if necessary
    });

    if(loc){
    

  
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
        <Popup>{singleHospital.name}</Popup>
      </Marker>
    </MapContainer>
  );
    }
}
