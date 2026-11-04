import { HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">CF</span>
            <div>
              <strong>CareFinder NG</strong>
            </div>
          </div>
          <p className="fine-print">
            A healthcare discovery preview. Sample entries are not verified facility listings; confirm details directly with providers.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><Link to="/explore">Hospitals</Link></li>
            <li><Link to="/map">Map view</Link></li>
            <li><Link to="/favorites">Saved facilities</Link></li>
          </ul>
        </div>

        <div>
          <h3>About</h3>
          <ul className="footer-links">
            <li><Link to="/about">How it works</Link></li>
            <li><a href="https://www.openstreetmap.org/" target="_blank" rel="noreferrer">OpenStreetMap</a></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>

        <div>
          <h3>Disclaimer</h3>
          <p className="fine-print">
            CareFinder NG is for information discovery only and does not replace professional medical or
            emergency advice. Confirm details directly with each facility before visiting.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          <HeartPulse size={14} /> CareFinder NG • Built for accessible healthcare discovery
        </span>
      </div>
    </footer>
  );
}
