import { MapLayer, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine/src';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

class MapRoute extends MapLayer {
  createLeafletElement() {
    const { color, map, from, to } = this.props;

    let leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(from[0], from[1]),
        L.latLng(to[0], to[1]),
      ],
      router: L.Routing.mapbox('TOKEN'),
      lineOptions: {
        styles: [{
          color,
          opacity: .8,
          weight: 6
        }]
      },
      units: 'imperial',
      addWaypoints: true,
      draggableWaypoints: true,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      altLineOptions: { styles: [{opacity: 1}] },
      //createMarker: () => { return null; }
    })
    .addTo(map.current.leafletElement);

    //leafletElement.hide(true); // hide road description

    return leafletElement.getPlan();
  }
}

export default withLeaflet(MapRoute);
