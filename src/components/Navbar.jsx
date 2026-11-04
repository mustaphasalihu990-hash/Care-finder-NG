import { Menu, Moon, Sun, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../utils/theme-context';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'Map', to: '/map' },
  { label: 'Favorites', to: '/favorites' },
  { label: 'About', to: '/about' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand" aria-label="CareFinder NG home">
          <span className="brand-mark">CF</span>
          <div>
            <strong>CareFinder NG</strong>
            <small>Find Healthcare. Find the Right Facility.</small>
          </div>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(nextTheme)}
          aria-label={`Switch to ${nextTheme} theme`}
          title={`Switch to ${nextTheme} theme`}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>

        <div className="nav-cta">
          <NavLink to="/explore" className="primary-btn small-btn">
            Explore Hospitals
          </NavLink>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
