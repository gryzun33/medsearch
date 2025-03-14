import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { latLngBounds, LatLngBounds, LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
// import { MapPin } from 'lucide-react';

type Pharmacy = {
  name: string;
  address: string;
  position: LatLngExpression;
};

const FitBounds = ({ bounds }: { bounds: LatLngBounds }) => {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds);
  }, [bounds, map]);

  return null;
};
// const pharmacies: Pharmacy[]

const pharmacies: Pharmacy[] = [
  {
    name: 'Louth Pharmacy',
    address: '12 Meadow Avenue, Louth',
    position: [53.38035576422182, -0.01085144853505665],
  },
  {
    name: 'Louth Health Centre Pharmacy',
    address: '89 Willow Grove, Louth',
    position: [53.37537553500994, -0.00790725238104947],
  },
  {
    name: 'Eastgate Pharmacy',
    address: '3 Elmwood Drive, Louth',
    position: [53.36895625572373, -0.00150647630544767],
  },
  {
    name: 'North Louth Pharmacy',
    address: '8 Abbey Rd, Louth',
    position: [53.3702545, 0.0105957],
  },
  {
    name: 'Louth Town Pharmacy',
    address: '15 Orchard Road, Louth',
    position: [53.362499226361585, -0.0034521963857893],
  },
  {
    name: 'The Chemist at Louth',
    address: '92 Bluebell Street, Louth',
    position: [53.3597978, 0.0075691],
  },
  {
    name: 'Green Pharmacy',
    address: '45 Birchwood Lane, Louth',
    position: [53.37064804323772, -0.00820970794874669],
  },
  {
    name: 'Louth Pharmacy Express',
    address: '63 Pine View Drive, Louth',
    position: [53.36685985270999, -0.0060669964664336],
  },
  {
    name: 'Willow Pharmacy',
    address: '27 Fern Way, Louth',
    position: [53.3686664, -0.0143993],
  },
  {
    name: 'Cornerstone Pharmacy',
    address: '5 Cedar Road, Louth',
    position: [53.37615761509849, -0.00543968534028656],
  },
  {
    name: 'Sunrise Pharmacy',
    address: '10 Eastfield Avenue, Louth',
    position: [53.38135576422182, -0.00185144853505665],
  },
  {
    name: 'Bright Health Pharmacy',
    address: '45 Sunny Lane, Louth',
    position: [53.3634641, 0.0060474],
  },
  {
    name: 'Harmony Pharmacy',
    address: '10 Coggle Cl, Louth',
    position: [53.3696977, 0.0146711],
  },
  {
    name: 'Aurora Pharmacy',
    address: '2 Queensway, Louth',
    position: [53.3655664, 0.0139193],
  },
  {
    name: 'East Louth Pharmacy',
    address: '87 Golden Rise Drive, Louth',
    position: [53.3734462, 0.0044515],
  },
];

const createCustomIcon = (svgUrl: string) => {
  return new L.Icon({
    iconUrl: svgUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const position: LatLngExpression = [53.3667, -0.0036];

const MapComponent = () => {
  const bounds = latLngBounds(pharmacies.map((pharmacy) => pharmacy.position));

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: '500px', width: '100%' }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
      {/* <Marker position={position}>
        <Popup>Welcome to Malton!</Popup>
      </Marker> */}

      {pharmacies.map((pharmacy, index) => (
        <Marker
          key={index}
          position={pharmacy.position}
          icon={createCustomIcon('/src/components/icons/location.svg')}
        >
          <Popup>
            <strong>{pharmacy.name}</strong>
            <br />
            {pharmacy.address}
          </Popup>
        </Marker>
      ))}
      <FitBounds bounds={bounds} />
    </MapContainer>
  );
};

export default MapComponent;
