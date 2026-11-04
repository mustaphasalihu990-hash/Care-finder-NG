import { ArrowRight, Building2, Compass, HeartPulse, MapPinned, ShieldCheck, Stethoscope } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HospitalCard from '../components/HospitalCard';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { exploreHighlights, hospitals, nigeriaStates } from '../data/hospital';
import { getStoredFavorites, toggleFavorite } from '../utils/storage';

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All states');
  const [selectedCity, setSelectedCity] = useState('');
  const [favorites, setFavorites] = useState(getStoredFavorites());

  useEffect(() => {
    document.title = 'CareFinder NG | Find Healthcare Facilities Across Nigeria';
  }, []);

  const featuredHospitals = hospitals.filter((hospital) => hospital.featured).slice(0, 3);

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    if (query.trim()) params.set('search', query.trim());
    if (selectedState && selectedState !== 'All states') params.set('state', selectedState);
    if (selectedCity.trim()) params.set('city', selectedCity.trim());

    navigate(`/explore?${params.toString()}`);
  };

  const handleToggleFavorite = (hospitalId) => {
    setFavorites(toggleFavorite(hospitalId));
  };

  return (
    <>
      <Navbar />

      <main className="page-shell">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="section-kicker">Healthcare discovery across Nigeria</span>
              <h1>Find Healthcare Facilities Across Nigeria.</h1>
              <p className="lead">
                Browse clearly marked sample facility records while we work toward a sourced, verifiable
                directory. These entries are not confirmed healthcare providers.
              </p>

              <div className="cta-row">
                <Link to="/explore" className="primary-btn">
                  Explore Hospitals <ArrowRight size={18} />
                </Link>
                <Link to="/map" className="secondary-btn">
                  Explore Map
                </Link>
              </div>

              <ul className="trust-points">
                <li><ShieldCheck size={16} /> Sample records are clearly identified</li>
                <li><HeartPulse size={16} /> Built for public healthcare discovery</li>
                <li><Stethoscope size={16} /> Search by services and location</li>
              </ul>
            </div>

            <div className="hero-panel">
              <form className="search-panel" onSubmit={handleSubmit}>
                <div className="panel-title-row">
                  <h2>Search facilities</h2>
                  <span className="pill soft-pill">Nigeria wide</span>
                </div>

                <div className="field-stack">
                  <label>
                    <span>Search term</span>
                    <SearchBar value={query} onChange={setQuery} placeholder="Hospital, clinic or service" />
                  </label>

                  <div className="double-field">
                    <label>
                      <span>State</span>
                      <select value={selectedState} onChange={(event) => setSelectedState(event.target.value)}>
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
                        value={selectedCity}
                        onChange={(event) => setSelectedCity(event.target.value)}
                        placeholder="e.g. Abuja"
                      />
                    </label>
                  </div>
                </div>

                <button type="submit" className="primary-btn full-width">
                  Search facilities
                </button>
              </form>
            </div>
          </div>
        </section>

        <p className="container data-limit-note">
          This preview does not yet contain independently verified facility listings, photographs, or map coordinates. Do not rely on sample entries to plan care or travel.
        </p>

        <section className="container content-section">
          <div className="section-header">
            <div>
              <span className="section-kicker">Browse by category</span>
              <h2>Find the right care quickly</h2>
            </div>
          </div>

          <div className="category-grid">
            {exploreHighlights.map((item) => (
              <button
                key={item.value}
                type="button"
                className="category-card"
                onClick={() => navigate(`/explore?search=${encodeURIComponent(item.value)}`)}
              >
                <Building2 size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="container content-section">
          <div className="section-header">
            <div>
              <span className="section-kicker">Sample records</span>
              <h2>Example entries only</h2>
            </div>
            <Link to="/explore" className="inline-link">
              View all facilities <ArrowRight size={16} />
            </Link>
          </div>

          <div className="card-grid three-up">
            {featuredHospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                hospital={hospital}
                isFavorite={favorites.includes(hospital.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </section>

        <section className="container content-section">
          <div className="section-header">
            <div>
              <span className="section-kicker">Explore by state</span>
              <h2>Browse facilities across Nigeria</h2>
            </div>
          </div>

          <div className="state-grid">
            {nigeriaStates.slice(0, 12).map((state) => (
              <button
                key={state}
                type="button"
                className="state-pill"
                onClick={() => navigate(`/explore?state=${encodeURIComponent(state)}`)}
              >
                <MapPinned size={16} /> {state}
              </button>
            ))}
          </div>
        </section>

        <section className="container content-section how-it-works">
          <div className="section-header">
            <div>
              <span className="section-kicker">How CareFinder works</span>
              <h2>Simple steps to find the right facility</h2>
            </div>
          </div>

          <div className="info-grid three-up">
            <div className="info-card">
              <Compass size={28} />
              <h3>1. Search</h3>
              <p>Find hospitals and clinics by name, city, or the medical service you need.</p>
            </div>
            <div className="info-card">
              <Building2 size={28} />
              <h3>2. Filter</h3>
              <p>Refine by state, facility type, ownership, and emergency service availability.</p>
            </div>
            <div className="info-card">
              <HeartPulse size={28} />
              <h3>3. Review</h3>
              <p>Compare details, save favourites, and choose the most suitable care option.</p>
            </div>
          </div>
        </section>

        <section className="container content-section trust-section">
          <div className="section-header">
            <div>
              <span className="section-kicker">Trust and transparency</span>
              <h2>Clear, honest healthcare information</h2>
            </div>
          </div>

          <div className="info-grid two-up">
            <div className="info-card transparent">
              <ShieldCheck size={28} />
              <h3>What to expect</h3>
              <p>
                We clearly label sample records and avoid presenting unverified information as confirmed fact.
                Missing details are shown honestly rather than guessed.
              </p>
            </div>
            <div className="info-card transparent">
              <Stethoscope size={28} />
              <h3>Important note</h3>
              <p>
                CareFinder NG is for healthcare discovery and information access. It is not a diagnosis tool,
                emergency service, or medical record platform.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
