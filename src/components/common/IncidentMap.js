import React from 'react';
import { Map, Marker, TileLayer, LayerGroup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { latLngBounds } from 'leaflet';
import terminator from 'leaflet-terminator';
import 'leaflet/dist/leaflet.css';

const IncidentMap = () => {

  // Day/Night overlay
  let t = terminator();

  t.setStyle({
    weight: 2,
    fillOpacity: .5,
    color: '#090909',
    fillColor: '#090909'
  });

  return (
    <Map className="map" center={[42.505, -71]} minZoom={2} maxZoom={7} maxBounds={latLngBounds([-90, -180], [90, 180])} zoom={2}>
      <TileLayer url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'/>
        <MarkerClusterGroup>
          <Marker position={[49.8397, 24.0297]} />
          <Marker position={[52.2297, 21.0122]} />
          <Marker position={[51.5074, -0.0901]} />
        </MarkerClusterGroup>
      <LayerGroup ref={(map) => {t.addTo(map.leafletElement)}}/>
    </Map>
)};

export default IncidentMap;
