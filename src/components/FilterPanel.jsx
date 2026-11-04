import { Filter, Search } from 'lucide-react';
import { nigeriaStates } from '../data/hospital';

export default function FilterPanel({
  filters,
  onChange,
  onClear,
  totalResults,
  onSortChange,
  sortMode,
  viewMode,
  onViewModeChange
}) {
  return (
    <aside className="filter-panel">
      <div className="panel-header">
        <span><Filter size={16} /> Filters</span>
        <button type="button" className="text-btn" onClick={onClear}>
          Clear all
        </button>
      </div>

      <div className="filter-group">
        <label>
          <span>State</span>
          <select value={filters.state} onChange={(event) => onChange('state', event.target.value)}>
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
            value={filters.city}
            onChange={(event) => onChange('city', event.target.value)}
            placeholder="Search city"
          />
        </label>

        <label>
          <span>Service</span>
          <input
            type="text"
            value={filters.service}
            onChange={(event) => onChange('service', event.target.value)}
            placeholder="e.g. maternity"
          />
        </label>
      </div>

      <div className="filter-group options-group">
        <label>
          <span>Type</span>
          <select value={filters.type} onChange={(event) => onChange('type', event.target.value)}>
            <option value="All types">All types</option>
            <option value="General Hospital">General Hospital</option>
            <option value="Teaching Hospital">Teaching Hospital</option>
            <option value="Specialist Hospital">Specialist Hospital</option>
            <option value="Clinic">Clinic</option>
            <option value="Diagnostic Centre">Diagnostic Centre</option>
            <option value="Maternity Centre">Maternity Centre</option>
          </select>
        </label>

        <label>
          <span>Ownership</span>
          <select value={filters.ownership} onChange={(event) => onChange('ownership', event.target.value)}>
            <option value="All">All ownership</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select>
        </label>
      </div>

      <div className="filter-checkboxes">
        <label className="check-row">
          <input
            type="checkbox"
            checked={filters.emergencyOnly}
            onChange={(event) => onChange('emergencyOnly', event.target.checked)}
          />
          <span>Emergency service available</span>
        </label>
      </div>

      <div className="panel-footer">
        <div className="stats-box">
          <Search size={14} />
          <span>{totalResults} facility results</span>
        </div>

        <div className="sort-panel">
          <label>
            <span>Sort by</span>
            <select value={sortMode} onChange={(event) => onSortChange(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="name">Name</option>
              <option value="state">State</option>
            </select>
          </label>
        </div>
      </div>

      <div className="view-toggle" aria-label="Layout view">
        <button type="button" className={viewMode === 'grid' ? 'active' : ''} onClick={() => onViewModeChange('grid')}>
          Grid view
        </button>
        <button type="button" className={viewMode === 'list' ? 'active' : ''} onClick={() => onViewModeChange('list')}>
          List view
        </button>
      </div>
    </aside>
  );
}
