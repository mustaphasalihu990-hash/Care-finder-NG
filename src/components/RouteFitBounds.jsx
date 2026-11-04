import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function RouteFitBounds({ positions }) {
  const map = useMap();

  useEffect(() => {
    if (positions?.length) {
      map.fitBounds(positions, { padding: [24, 24] });
    }
  }, [map, positions]);

  return null;
}
