import GoBack from "./GoBack";
import "./Map.css";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'



export default function Map() { 
    const params = useParams();
    console.log(params.id);
    let cord=params.id.split("+");
    let lat=cord[0].slice(1);
    let long=cord[1];
  return (
    <>
    <GoBack /> 
    <p>{lat}</p>
    <p>{long}</p>
    <MapContainer center={[lat,long]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat,long]}>
    <Popup>
    marker
    </Popup>
  </Marker>
</MapContainer>
    </>
  )
}
