import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = 'Search hospitals or services' }) {
  return (
    <label className="search-input-wrap" aria-label={placeholder}>
      <Search size={18} />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </label>
  );
}
