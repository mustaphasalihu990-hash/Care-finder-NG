import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterPanel from '../components/FilterPanel';
import Footer from '../components/Footer';
import HospitalCard from '../components/HospitalCard';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { hospitals } from '../data/hospital';
import { getStoredFavorites, toggleFavorite } from '../utils/storage';

const defaultFilters = {
  state: 'All states',
  city: '',
  service: '',
  type: 'All types',
  ownership: 'All',
  emergencyOnly: false,
};

export default function Explore() {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const [filters, setFilters] = useState({
    ...defaultFilters,
    state: searchParams.get('state') || 'All states',
    city: searchParams.get('city') || '',
  });
  const [sortMode, setSortMode] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState(getStoredFavorites());
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = 'Explore Hospitals | CareFinder NG';
  }, []);

  const filteredHospitals = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    const results = hospitals.filter((hospital) => {
      const matchesSearch = !query || [
        hospital.name,
        hospital.city,
        hospital.state,
        hospital.type,
        hospital.services.join(' '),
      ].join(' ').toLowerCase().includes(query);

      const matchesState = filters.state === 'All states' || hospital.state === filters.state;
      const matchesCity = !filters.city || hospital.city.toLowerCase().includes(filters.city.toLowerCase());
      const matchesService = !filters.service || hospital.services.some((service) =>
        service.toLowerCase().includes(filters.service.toLowerCase())
      );
      const matchesType = filters.type === 'All types' || hospital.type === filters.type;
      const matchesOwnership = filters.ownership === 'All' || hospital.ownership === filters.ownership;
      const matchesEmergency = !filters.emergencyOnly || hospital.emergency;

      return matchesSearch && matchesState && matchesCity && matchesService && matchesType && matchesOwnership && matchesEmergency;
    });

    if (sortMode === 'name') {
      return [...results].sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortMode === 'state') {
      return [...results].sort((a, b) => a.state.localeCompare(b.state) || a.name.localeCompare(b.name));
    }

    return [...results].sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
  }, [filters, searchValue, sortMode]);

  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredHospitals.length / pageSize));
  const visibleHospitals = filteredHospitals.slice((page - 1) * pageSize, page * pageSize);

  const handleToggleFavorite = (hospitalId) => {
    setFavorites(toggleFavorite(hospitalId));
  };

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
    setPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setPage(1);
  };

  const handleSortChange = (value) => {
    setSortMode(value);
    setPage(1);
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
    setSearchValue('');
    setSortMode('featured');
    setPage(1);
  };

  return (
    <>
      <Navbar />

      <main className="page-shell explore-page">
        <div className="container explore-header">
          <div>
            <span className="section-kicker">Facility directory</span>
            <h1>Explore facility records</h1>
          </div>
          <div className="search-wrap-wide">
            <SearchBar value={searchValue} onChange={handleSearchChange} placeholder="Search by hospital, city, or service" />
          </div>
        </div>

        <p className="container data-limit-note">
          The current directory contains demonstration records only. Names, services, ownership, and emergency details are not independently verified.
        </p>

        <div className="container explore-layout">
          <FilterPanel
            filters={filters}
            onChange={handleFilterChange}
            onClear={clearFilters}
            totalResults={filteredHospitals.length}
            onSortChange={handleSortChange}
            sortMode={sortMode}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          <section className="results-panel">
            <div className="results-topbar">
              <div>
                <span className="section-kicker">Results</span>
                <h2>{filteredHospitals.length} records found</h2>
              </div>
              <span className="muted">Page {page} of {totalPages}</span>
            </div>

            {visibleHospitals.length > 0 ? (
              <div className={viewMode === 'grid' ? 'card-grid' : 'list-grid'}>
                {visibleHospitals.map((hospital) => (
                  <HospitalCard
                    key={hospital.id}
                    hospital={hospital}
                    isFavorite={favorites.includes(hospital.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No matching facilities</h3>
                <p>Try broadening your search or clearing some filters to see more results.</p>
                <button type="button" className="secondary-btn" onClick={clearFilters}>Reset filters</button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="pagination-row" aria-label="Pagination navigation">
                <button type="button" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>
                  Previous
                </button>
                <span>{page} / {totalPages}</span>
                <button type="button" disabled={page === totalPages} onClick={() => setPage((current) => Math.min(totalPages, current + 1))}>
                  Next
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
