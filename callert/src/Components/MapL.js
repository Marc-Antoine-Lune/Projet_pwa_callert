import React from 'react'
import './MapL.css'
import L from 'leaflet'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'



const grenIcon = L.icon({
 iconUrl: "https://sisnerover.com/wp-content/uploads/2017/08/what-to-take-on-trekking.png",

 //iconUrl:  "http://www.myiconfinder.com/uploads/iconsets/256-256-8e171979eaca02c98d4402a362198403.png",
  iconSize:     [40, 40], // size of the icon

  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

  popupAnchor:  [-3, -76]
});


function MapL() {
  return (
 
<div className="map">

    <MapContainer  center={[42.309410, 9.149022]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[42.309410, 9.149022]} icon={grenIcon}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <Marker position={[42.300020, 9.19922]} icon={grenIcon}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>

  <Marker position={[42.36000, 9.299022]} icon={grenIcon}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</div>
  );
}

export default MapL