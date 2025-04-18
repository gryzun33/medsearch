import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { latLngBounds, LatLngBounds, LatLngExpression } from 'leaflet';
import { useEffect, useMemo } from 'react';
import { useGetPharmaciesQuery } from '@/api/pharmacyApiSlice';
// import { Pharmacy } from '@/types/pharmacy';

const FitBounds = ({ bounds }: { bounds: LatLngBounds }) => {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds);
  }, [bounds, map]);

  return null;
};

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
  const { data: pharmacies = [], error, isLoading } = useGetPharmaciesQuery();

  const bounds = useMemo(() => {
    if (pharmacies.length > 1) {
      return latLngBounds(pharmacies.map((pharmacy) => pharmacy.position));
    }
    return null;
  }, [pharmacies]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading pharmacy details</p>;

  return (
    <MapContainer
      center={position}
      zoom={15}
      // style={{ height: '500px', width: '100%' }}
      attributionControl={false}
      className="h-full w-full min-h-[300px]"
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />

      {pharmacies?.map((pharmacy, index) => (
        <Marker
          key={index}
          position={pharmacy.position}
          icon={createCustomIcon('/src/components/icons/location.svg')}
        >
          <Popup>
            <strong>{pharmacy.name}</strong>
            <br />
            {pharmacy.address}
            <br />
            Hours: {pharmacy.hours}
          </Popup>
        </Marker>
      ))}
      {bounds && <FitBounds bounds={bounds} />}
    </MapContainer>
  );
};

export default MapComponent;
