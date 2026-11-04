import { ArrowRight, HeartPulse, MapPinned, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  useEffect(() => {
    document.title = 'About | CareFinder NG';
  }, []);

  return (
    <>
      <Navbar />
      <main className="page-shell about-page">
        <section className="container content-section narrow">
          <div className="section-kicker">About CareFinder NG</div>
          <h1>Healthcare discovery made simpler for Nigerians.</h1>
          <p className="lead">
            CareFinder NG is a frontend preview. Its current facility entries are demonstrations only; it does not yet contain a verified nationwide directory.
          </p>
        </section>

        <section className="container content-section">
          <div className="info-grid three-up">
            <div className="info-card">
              <HeartPulse size={28} />
              <h3>What it is</h3>
              <p>
                CareFinder NG is a frontend-only hospital discovery platform designed to help users browse
                healthcare facilities, compare services, and find contact and location information.
              </p>
            </div>
            <div className="info-card">
              <MapPinned size={28} />
              <h3>What problem it solves</h3>
              <p>
                Many people struggle to find the right hospital when they are new to a place or need a
                specialist service quickly. This platform makes that discovery process clearer and easier.
              </p>
            </div>
            <div className="info-card">
              <ShieldCheck size={28} />
              <h3>How we handle information</h3>
              <p>
                Current entries are labelled as sample data, missing source evidence is disclosed, and
                no government approval or medical accreditation is implied.
              </p>
            </div>
          </div>
        </section>

        <section className="container content-section narrow">
          <div className="story-block">
            <h2>Our mission</h2>
            <p>
              CareFinder NG aims to make healthcare access information easier to find and understand for patients,
              caregivers, students, and travellers across Nigeria. The platform is built for discovery, not
              diagnosis or emergency response.
            </p>
          </div>

          <div className="story-block">
            <h2>Who it is for</h2>
            <p>
              The product is intended for members of the public looking for facilities in their state or city,
              family members helping a relative, students researching healthcare centres, and people relocating
              to unfamiliar areas.
            </p>
          </div>

          <div className="story-block">
            <h2>How it works</h2>
            <p>
              Users can search the local demonstration records by name, city, state, or service. Directions
              require sourced facility coordinates and user permission for location access; the current sample
              records do not have coordinates, so route requests are unavailable. Favourites remain on the device.
            </p>
          </div>
        </section>

        <section className="container content-section cta-section">
          <h2>Ready to explore hospitals in Nigeria?</h2>
          <Link to="/explore" className="primary-btn">
            Explore hospitals <ArrowRight size={18} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
