import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { latLngBounds } from 'leaflet'
import MapRoute from './MapRoute'
import 'leaflet/dist/leaflet.css'

const MapTest = () => {
  let map = React.createRef();
  
  return (
    <Map center={[0, 0]} minZoom={2} maxZoom={7} maxBounds={latLngBounds([-90, -180], [90, 180])} zoom={2} ref={map}>
        <TileLayer url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
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
