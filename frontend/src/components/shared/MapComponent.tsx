import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { latLngBounds, LatLngBounds, LatLngExpression } from 'leaflet';
import { useEffect, useMemo } from 'react';
import { STARTMAPPOSITION } from '@/utils/constants';
import { Pharmacy } from '@/types/pharmacy';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
// import { Pharmacy } from '@/types/pharmacy';

type Props = {
  pharmacies: (Pharmacy & { price?: number; quantity?: number })[];
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError;
  price?: number;
};

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

const createLabelIcon = (labelText: string) =>
  new L.DivIcon({
    html: `<div style="color:#464a52; background: #e6ffe8; padding: 2px 2px; border-radius: 3px; font-size: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.15); white-space: nowrap; display: inline-block; min-width: auto;">
             ${labelText} $
           </div>`,
    className: '', // Убираем className
    iconAnchor: [20, 0],
  });

const MapPinIcon = createCustomIcon('/src/components/icons/location.svg');

const position: LatLngExpression = STARTMAPPOSITION;

const MapComponent = ({ pharmacies, isLoading, error }: Props) => {
  // const { data: pharmacies = [], error, isLoading } = useGetPharmaciesQuery();

  const bounds = useMemo(() => {
    console.log('pharmacies=', pharmacies);
    if (pharmacies.length > 0) {
      return latLngBounds(pharmacies.map((pharmacy) => pharmacy.position));
    }
    return null;
  }, [pharmacies]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading pharmacies details</p>;

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
        <Marker key={index} position={pharmacy.position} icon={MapPinIcon}>
          {pharmacy.price !== undefined && (
            <Marker
              position={pharmacy.position}
              icon={createLabelIcon(pharmacy.price.toString())}
            />
          )}
          <Popup>
            {pharmacy.price && (
              <>
                <strong>{`${pharmacy.price} $`}</strong>
                <br />
              </>
            )}
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
