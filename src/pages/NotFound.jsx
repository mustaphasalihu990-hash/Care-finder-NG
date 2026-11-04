import { Home, SearchX } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | CareFinder NG';
  }, []);

  return (
    <>
      <Navbar />
      <main className="page-shell not-found-page">
        <div className="container not-found-box">
          <SearchX size={42} />
          <p className="section-kicker">404</p>
          <h1>We could not find that page.</h1>
          <p>
            The facility or page you are looking for may not exist or may have moved.
          </p>
          <Link to="/" className="primary-btn">
            <Home size={18} /> Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
