import React from 'react';
import  { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Map, Marker, TileLayer, LayerGroup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import terminator from 'leaflet-terminator';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
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
    <Map className="map" center={[42.505, -71]} minZoom={2} maxZoom={7} maxBounds={L.latLngBounds([-90, -180], [90, 180])} zoom={2}>
      <TileLayer url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'/>
      <LayerGroup ref={(map) => {
        if(map)
        {
          t.addTo(map.leafletElement);
        }
        }}/>
      <MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[49.8497, 24.0307]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup>
    </Map>
)};

MapContent.propTypes = {
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default MapContent;
