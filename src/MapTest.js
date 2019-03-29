import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
const MapTest = () => (
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.css" />
      <Map center={[51.505, -0.09]} zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
);

export default MapTest;
