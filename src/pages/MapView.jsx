import { LocateFixed, MapPinned } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { osmTileLayer } from '../config/map';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { hospitals, nigeriaStates } from '../data/hospital';

const nigeriaCenter = [9.082, 8.6753];

function MapViewUpdater({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center);
  }, [center, map]);

  return null;
}

export default function MapView() {
  const [stateFilter, setStateFilter] = useState('All states');
  const [cityFilter, setCityFilter] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    document.title = 'Facility Map | CareFinder NG';
  }, []);

  const visibleHospitals = useMemo(() => {
    return hospitals.filter((hospital) => {
      const matchesState = stateFilter === 'All states' || hospital.state === stateFilter;
      const matchesCity = !cityFilter || hospital.city.toLowerCase().includes(cityFilter.toLowerCase());
      return matchesState && matchesCity && hospital.coordinates;
    });
  }, [stateFilter, cityFilter]);

  const mapCenter = useMemo(
    () => userLocation ? [userLocation.lat, userLocation.lng] : nigeriaCenter,
    [userLocation]
  );

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not available in this browser. Please use state and city search instead.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
        setUserLocation(nextLocation);
        setLocationError('');
      },
      () => {
        setLocationError('Location access was denied. You can continue by using the location filters instead.');
      },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  };

  return (
    <>
      <Navbar />
      <main className="page-shell map-page">
        <div className="container map-header">
          <div>
            <span className="section-kicker">Interactive map</span>
            <h1>Explore healthcare locations</h1>
          </div>
          <button type="button" className="secondary-btn" onClick={handleUseCurrentLocation}>
            <LocateFixed size={16} /> Use my location
          </button>
        </div>

        <div className="container map-controls">
          <label>
            <span>State</span>
            <select value={stateFilter} onChange={(event) => setStateFilter(event.target.value)}>
              <option value="All states">All states</option>
              {nigeriaStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </label>

          <label>
            <span>City</span>
            <input
              type="text"
              value={cityFilter}
              onChange={(event) => setCityFilter(event.target.value)}
              placeholder="Search city"
            />
          </label>
        </div>

        <p className="container data-limit-note">
          This pilot contains demonstration records only. Records without independently sourced coordinates are not shown as map markers.
        </p>

        {locationError && <div className="container"><p className="alert-banner">{locationError}</p></div>}

        <div className="container map-layout">
          <div className="map-panel">
            <MapContainer center={mapCenter} zoom={6} scrollWheelZoom={true} className="real-map">
              <MapViewUpdater center={mapCenter} />
              <TileLayer
                attribution={osmTileLayer.attribution}
                url={osmTileLayer.url}
              />

              {visibleHospitals.map((hospital) => (
                <Marker key={hospital.id} position={[hospital.coordinates.lat, hospital.coordinates.lng]}>
                  <Popup>
                    <div className="map-popup">
                      <strong>{hospital.name}</strong>
                      <p>{hospital.city}, {hospital.state}</p>
                      <span>{hospital.type}</span>
                      <Link to={`/hospital/${hospital.id}`}>Open details</Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <aside className="map-sidebar">
            <div className="sidebar-header">
              <MapPinned size={18} />
              <h3>Facility markers</h3>
            </div>
            {visibleHospitals.length ? (
              <div className="map-list">
                {visibleHospitals.map((hospital) => (
                  <Link key={hospital.id} to={`/hospital/${hospital.id}`} className="map-item">
                    <strong>{hospital.name}</strong>
                    <span>{hospital.city}, {hospital.state}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="muted">No facilities with sourced coordinates are available for this selection. Sample records are not plotted at approximate locations.</p>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
