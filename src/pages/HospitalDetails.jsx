import { ArrowLeft, Clipboard, ExternalLink, Heart, LocateFixed, MapPin, Navigation, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import { osmTileLayer } from '../config/map';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { fallbackHospitalImage, hospitals } from '../data/hospital';
import RouteFitBounds from '../components/RouteFitBounds';
import { getDrivingRoute } from '../services/routingService';
import { getStoredFavorites, toggleFavorite } from '../utils/storage';
import NotFound from './NotFound';

export default function HospitalDetails() {
  const { id } = useParams();
  const hospital = hospitals.find((item) => item.id === id);
  const imageUrl = hospital?.image?.url;
  const [favorites, setFavorites] = useState(getStoredFavorites());
  const [route, setRoute] = useState(null);
  const [routeError, setRouteError] = useState('');
  const [isRouting, setIsRouting] = useState(false);
  const [showManualLocation, setShowManualLocation] = useState(false);
  const [manualLatitude, setManualLatitude] = useState('');
  const [manualLongitude, setManualLongitude] = useState('');
  const [correctionText, setCorrectionText] = useState('');
  const [correctionFeedback, setCorrectionFeedback] = useState('');

  const handleImageError = (event) => {
    if (event.currentTarget.src !== fallbackHospitalImage) {
      event.currentTarget.src = fallbackHospitalImage;
    }
  };

  useEffect(() => {
    if (hospital) {
      document.title = `${hospital.name} | CareFinder NG`;
    }
  }, [hospital]);

  if (!hospital) {
    return <NotFound />;
  }

  const isSaved = favorites.includes(hospital.id);
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${hospital.name}, ${hospital.city}, ${hospital.state}, Nigeria`
  )}`;

  const handleToggleFavorite = () => {
    setFavorites(toggleFavorite(hospital.id));
  };

  const calculateRoute = async (start) => {
    if (!hospital.coordinates) {
      setRouteError('Directions are unavailable because this record has no facility coordinates.');
      return;
    }

    setIsRouting(true);
    setRouteError('');
    setRoute(null);
    try {
      const result = await getDrivingRoute(start, hospital.coordinates);
      setRoute({ ...result, start });
    } catch (error) {
      setRouteError(error.message);
    } finally {
      setIsRouting(false);
    }
  };

  const handleGetDirections = () => {
    if (!hospital.coordinates) {
      setRouteError('Directions are unavailable because this record has no facility coordinates.');
      return;
    }
    if (!navigator.geolocation) {
      setRouteError('Geolocation is not available in this browser. You can enter starting coordinates below.');
      setShowManualLocation(true);
      return;
    }

    setRouteError('');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        calculateRoute({ lat: position.coords.latitude, lng: position.coords.longitude });
      },
      (error) => {
        const message = error.code === error.PERMISSION_DENIED
          ? 'Location access was denied. You can enter starting coordinates below instead.'
          : 'Your location could not be determined. You can enter starting coordinates below instead.';
        setRouteError(message);
        setShowManualLocation(true);
      },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  };

  const handleManualRoute = (event) => {
    event.preventDefault();
    calculateRoute({ lat: Number(manualLatitude), lng: Number(manualLongitude) });
  };

  const formatDistance = (meters) => meters >= 1000
    ? `${(meters / 1000).toFixed(1)} km`
    : `${Math.round(meters)} m`;

  const formatDuration = (seconds) => {
    const minutes = Math.round(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours ? `${hours} hr ${remainingMinutes} min` : `${minutes} min`;
  };

  const getCorrectionDraft = () => [
    `Facility: ${hospital.name}`,
    `Record ID: ${hospital.id}`,
    `Source: ${hospital.sourceUrl || 'Not listed'}`,
    '',
    'Information to correct:',
    correctionText,
  ].join('\n');

  const handleCopyCorrection = async () => {
    try {
      await navigator.clipboard.writeText(getCorrectionDraft());
      setCorrectionFeedback('Correction draft copied. It has not been sent to CareFinder NG.');
    } catch (error) {
      console.warn('Could not copy the correction draft.', error);
      setCorrectionFeedback('Clipboard access is unavailable. Select and copy the draft text manually.');
    }
  };

  return (
    <>
      <Navbar />

      <main className="page-shell detail-page">
        <div className="container detail-header">
          <Link to="/explore" className="back-link">
            <ArrowLeft size={16} /> Back to search
          </Link>
        </div>

        <div className="container detail-layout">
          <div className="detail-hero">
            <div className="detail-image-wrap">
              <img src={imageUrl || fallbackHospitalImage} alt={hospital.image?.status === 'illustrative' ? `Custom illustration for ${hospital.name}` : imageUrl ? hospital.name : 'Hospital illustration'} className="detail-image" onError={handleImageError} />
              {hospital.image?.status === 'illustrative' && <span className="image-unavailable">Custom illustration · not a facility photo</span>}
              {!imageUrl && <span className="image-unavailable">Illustration · no facility photo available</span>}
              {hospital.image?.attribution && <span className="image-attribution">{hospital.image.attribution}</span>}
            </div>

            <div className="detail-copy">
              <div className="tag-row">
                <span className="pill status-pill">{hospital.verification?.status === 'sample' ? 'SAMPLE DATA' : hospital.verification?.status || hospital.verificationStatus}</span>
                <span className="pill type-pill">{hospital.type}</span>
              </div>

              <h1>{hospital.name}</h1>

              <div className="detail-meta-row">
                <span><MapPin size={15} /> {hospital.city}, {hospital.state}</span>
                {hospital.emergency && <span><ShieldCheck size={15} /> Emergency service</span>}
              </div>

              <div className="detail-actions">
                {hospital.coordinates ? (
                  <button type="button" className="primary-btn" onClick={handleGetDirections} disabled={isRouting}>
                    <Navigation size={16} /> {isRouting ? 'Finding route…' : 'Get directions'}
                  </button>
                ) : (
                  <a className="primary-btn" href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
                    <Navigation size={16} /> Find directions
                  </a>
                )}
                <button type="button" className={isSaved ? 'secondary-btn active' : 'secondary-btn'} onClick={handleToggleFavorite}>
                  <Heart size={16} /> {isSaved ? 'Saved' : 'Save to favourites'}
                </button>
              </div>
              {!hospital.coordinates && <p className="muted">This sample record has no verified coordinates. Google Maps will search by facility name and city; confirm the destination before traveling.</p>}
            </div>
          </div>

          <div className="detail-grid">
            <div className="detail-block">
              <h2>Facility overview</h2>
              <ul className="key-list">
                <li><span>Ownership</span><strong>{hospital.ownership}</strong></li>
                <li><span>State</span><strong>{hospital.state}</strong></li>
                <li><span>City</span><strong>{hospital.city}</strong></li>
                <li><span>LGA</span><strong>{hospital.lga || 'Not available'}</strong></li>
                <li><span>Address</span><strong>{hospital.address || 'Not publicly verified'}</strong></li>
                <li><span>Phone</span><strong>{hospital.phone || 'Not publicly verified'}</strong></li>
                <li><span>Website</span><strong>{hospital.website ? <a href={hospital.website} target="_blank" rel="noreferrer">Visit official website <ExternalLink size={14} /></a> : 'Not available'}</strong></li>
                <li><span>Coordinates</span><strong>{hospital.coordinates ? `${hospital.coordinates.lat}, ${hospital.coordinates.lng}` : 'Not available'}</strong></li>
              </ul>
            </div>

            <div className="detail-block">
              <h2>Services</h2>
              <div className="service-list">
                {hospital.services.map((service) => (
                  <span key={service} className="service-chip">{service}</span>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <h2>Hours and verification</h2>
              <ul className="key-list">
                <li>
                  <span>Operating hours</span>
                  <strong>{hospital.operatingHours || 'Hours not verified'}</strong>
                </li>
                <li>
                  <span>Last verified</span>
                  <strong>{hospital.verification?.lastChecked || hospital.lastVerified || 'Not verified'}</strong>
                </li>
                <li>
                  <span>Identity / address / location</span>
                  <strong>{[
                    hospital.verification?.identity || 'unverified',
                    hospital.verification?.address || 'unverified',
                    hospital.verification?.location || 'unverified',
                  ].join(' / ')}</strong>
                </li>
                <li>
                  <span>Data source</span>
                  <strong>{hospital.sourceName || 'No public source provided'}</strong>
                </li>
                <li>
                  <span>Source link</span>
                  <strong>{hospital.sourceUrl ? <a href={hospital.sourceUrl} target="_blank" rel="noreferrer">Open source</a> : 'Not available'}</strong>
                </li>
                <li>
                  <span>Coordinates source</span>
                  <strong>{hospital.coordinatesSource || 'Not available'}</strong>
                </li>
                <li>
                  <span>Image source and licence</span>
                  <strong>{hospital.image?.source ? `${hospital.image.source} · ${hospital.image.license || 'Licence not recorded'}${hospital.image.status === 'illustrative' ? ' · illustration, not a facility photograph' : ''}` : 'No facility photograph sourced'}</strong>
                </li>
              </ul>
            </div>

            <div className="detail-block">
              <h2>Location and directions</h2>
              <p className="muted route-disclaimer">
                {hospital.coordinates
                  ? 'Routes and travel times are estimates from the public OSRM demo service. They do not include live traffic and may not reflect local road conditions.'
                  : 'This sample record has no verified map location. Confirm any Google Maps search result with the facility before traveling.'}
              </p>
              {routeError && <p className="alert-banner route-error" role="alert">{routeError}</p>}
              {route && (
                <p className="route-summary" role="status">
                  Estimated drive: <strong>{formatDistance(route.distanceMeters)}</strong> · <strong>{formatDuration(route.durationSeconds)}</strong>
                </p>
              )}
              {showManualLocation && hospital.coordinates && (
                <form className="manual-location-form" onSubmit={handleManualRoute}>
                  <label>
                    <span>Starting latitude</span>
                    <input type="number" step="any" min="-90" max="90" value={manualLatitude} onChange={(event) => setManualLatitude(event.target.value)} required />
                  </label>
                  <label>
                    <span>Starting longitude</span>
                    <input type="number" step="any" min="-180" max="180" value={manualLongitude} onChange={(event) => setManualLongitude(event.target.value)} required />
                  </label>
                  <button type="submit" className="secondary-btn" disabled={isRouting}>
                    <LocateFixed size={16} /> Use these coordinates
                  </button>
                </form>
              )}
              {hospital.coordinates ? (
                <div className="location-map-box">
                  <MapContainer center={[hospital.coordinates.lat, hospital.coordinates.lng]} zoom={12} scrollWheelZoom={false} className="mini-map">
                    <TileLayer
                      attribution={osmTileLayer.attribution}
                      url={osmTileLayer.url}
                    />
                    {route && (
                      <>
                        <RouteFitBounds positions={route.positions} />
                        <Polyline positions={route.positions} pathOptions={{ color: '#087e8b', weight: 5 }} />
                        <Marker position={[route.start.lat, route.start.lng]}>
                          <Popup>Starting point</Popup>
                        </Marker>
                      </>
                    )}
                    <Marker position={[hospital.coordinates.lat, hospital.coordinates.lng]}>
                      <Popup>
                        <strong>{hospital.name}</strong><br />
                        {hospital.city}, {hospital.state}
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              ) : (
                <p className="muted">Map coordinates are not available for this facility record.</p>
              )}
            </div>

            <div className="detail-block">
              <h2>Report incorrect information</h2>
              <p className="muted">This frontend cannot receive reports. The draft stays on this page and is not sent to CareFinder NG. Only contact a real-world provider or source after independently confirming its identity.</p>
              <label className="correction-label">
                <span>What needs correction?</span>
                <textarea
                  value={correctionText}
                  onChange={(event) => {
                    setCorrectionText(event.target.value);
                    setCorrectionFeedback('');
                  }}
                  placeholder="Describe the information that appears incorrect."
                  rows={4}
                />
              </label>
              <button type="button" className="secondary-btn" onClick={handleCopyCorrection} disabled={!correctionText.trim()}>
                <Clipboard size={16} /> Copy correction draft
              </button>
              {correctionFeedback && <p className="muted" role="status">{correctionFeedback}</p>}
              <textarea className="correction-output" aria-label="Correction draft" readOnly value={getCorrectionDraft()} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
