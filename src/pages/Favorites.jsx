import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HospitalCard from '../components/HospitalCard';
import Navbar from '../components/Navbar';
import { hospitals } from '../data/hospital';
import { getStoredFavorites, toggleFavorite } from '../utils/storage';

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState(getStoredFavorites());

  useEffect(() => {
    document.title = 'Saved Facilities | CareFinder NG';
  }, []);

  const savedHospitals = hospitals.filter((hospital) => favoriteIds.includes(hospital.id));

  const handleToggleFavorite = (hospitalId) => {
    const next = toggleFavorite(hospitalId);
    setFavoriteIds(next);
  };

  return (
    <>
      <Navbar />
      <main className="page-shell favorites-page">
        <div className="container section-header">
          <div>
            <span className="section-kicker">Saved facilities</span>
            <h1>Your shortlist</h1>
          </div>
        </div>

        <div className="container">
          {savedHospitals.length > 0 ? (
            <div className="card-grid">
              {savedHospitals.map((hospital) => (
                <HospitalCard
                  key={hospital.id}
                  hospital={hospital}
                  isFavorite={true}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state large-empty">
              <h3>No facilities saved yet</h3>
              <p>Bookmark hospitals you may want to review later and they will stay here after a refresh.</p>
              <Link to="/explore" className="primary-btn">Find facilities</Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
