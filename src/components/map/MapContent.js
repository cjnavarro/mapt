import React from 'react';
import  { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Map, Marker, TileLayer, LayerGroup, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import terminator from 'leaflet-terminator';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// leaflet-react markers broken out of box
let DefaultIcon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: iconShadow,
    //iconSize: [41, 51],
    iconAnchor: [20, 51],
    popupAnchor: [-7, -51]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapContent = ({actions, token, loggedIn}) => {

  if(!loggedIn) {
    return (<Redirect to='/login' />);
  }

  // Day/Night overlay
  let t = terminator();

  t.setStyle({
    weight: 2,
    fillOpacity: .5,
    color: '#090909',
    fillColor: '#090909'
  });

  return (
    <Map className="map" center={[42.505, -71]} minZoom={2} maxZoom={12} maxBounds={L.latLngBounds([-90, -180], [90, 180])} zoom={2}>
      <TileLayer url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'/>
      <LayerGroup ref={(map) => {
        if(map)
        {
          t.addTo(map.leafletElement);
        }
        }}/>
      <MarkerClusterGroup>
        <Marker position={[42.354940, -71.056590]}>
          <Popup><div>iboss</div></Popup>
        </Marker>
        <Marker position={[42.273960, -71.809680]}>
          <Popup><div>WPI</div></Popup>
        </Marker>
        <Marker position={[43.392070, -71.900200]}>
          <Popup><div>Hometown</div></Popup>
        </Marker>
        <Marker position={[55.797200, 37.531920]}>
          <Popup><div>WPI IQP</div></Popup>
        </Marker>
        <Marker position={[18.401430, -66.046710]}>
          <Popup><div>Vacation</div></Popup>
        </Marker>
        <Marker position={[55.953251, -3.188267]}>
          <Popup><div>Vacation</div></Popup>
        </Marker>
      </MarkerClusterGroup>
    </Map>
)};

MapContent.propTypes = {
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default MapContent;
