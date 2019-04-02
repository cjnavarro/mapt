import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import MapRoute from './MapRoute'
import 'leaflet/dist/leaflet.css';

const MapTest = () => {
  let map = React.createRef();
  return (
    <Map center={[51.505, -0.09]} zoom={14} ref={map}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
    </Map>
)
};

export default MapTest;

// <Marker position={[42.505, -71]}>
//   <Popup>
//     A pretty CSS3 popup. <br/> Easily customizable.
//   </Popup>
// </Marker>
// <MapRoute color="#3498DB" from={[42.402571,-71.1181906]} to={[43.3920026,-71.9017829]} map={map}/>
