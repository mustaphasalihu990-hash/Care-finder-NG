const OSRM_ROUTE_URL = 'https://router.project-osrm.org/route/v1/driving';

export async function getDrivingRoute(start, destination) {
  const coordinates = [start, destination];
  if (coordinates.some((coordinate) =>
    !coordinate || !Number.isFinite(coordinate.lat) || coordinate.lat < -90 || coordinate.lat > 90 ||
    !Number.isFinite(coordinate.lng) || coordinate.lng < -180 || coordinate.lng > 180
  )) {
    throw new Error('Enter valid latitude and longitude coordinates.');
  }

  const coordinatePath = coordinates.map(({ lat, lng }) => `${lng},${lat}`).join(';');
  let response;
  try {
    response = await fetch(`${OSRM_ROUTE_URL}/${coordinatePath}?overview=full&geometries=geojson&steps=false`);
  } catch (error) {
    throw new Error('The routing service could not be reached. Check your connection and try again.', { cause: error });
  }

  if (!response.ok) {
    throw new Error(`The routing service returned an error (${response.status}). Please try again later.`);
  }

  let result;
  try {
    result = await response.json();
  } catch (error) {
    throw new Error('The routing service returned an invalid response.', { cause: error });
  }

  const route = result.routes?.[0];
  const geometry = route?.geometry?.coordinates;
  if (result.code !== 'Ok' || !Array.isArray(geometry) || geometry.length < 2 ||
    geometry.some((point) => !Array.isArray(point) || point.length < 2 ||
      !Number.isFinite(point[0]) || point[0] < -180 || point[0] > 180 ||
      !Number.isFinite(point[1]) || point[1] < -90 || point[1] > 90) ||
    !Number.isFinite(route.distance) || route.distance < 0 ||
    !Number.isFinite(route.duration) || route.duration < 0) {
    throw new Error('No drivable route was found between those locations.');
  }

  return {
    positions: geometry.map(([lng, lat]) => [lat, lng]),
    distanceMeters: route.distance,
    durationSeconds: route.duration,
  };
}
