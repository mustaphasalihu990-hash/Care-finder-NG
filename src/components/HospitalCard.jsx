import { ArrowRight, Clock3, Heart, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fallbackHospitalImage } from '../data/hospital';

export default function HospitalCard({ hospital, isFavorite, onToggleFavorite }) {
  const imageUrl = hospital.image?.url;
  const handleImageError = (event) => {
    if (event.currentTarget.src !== fallbackHospitalImage) {
      event.currentTarget.src = fallbackHospitalImage;
    }
  };

  return (
    <article className="hospital-card">
      <div className="card-image-wrap">
        <img src={imageUrl || fallbackHospitalImage} alt={hospital.image?.status === 'illustrative' ? `Custom illustration for ${hospital.name}` : imageUrl ? hospital.name : 'Hospital illustration'} className="card-image" onError={handleImageError} />
        {hospital.image?.status === 'illustrative' && <span className="image-unavailable">Custom illustration · not a facility photo</span>}
        {!imageUrl && <span className="image-unavailable">Illustration · no facility photo available</span>}
        <button
          type="button"
          className={isFavorite ? 'favorite-btn active' : 'favorite-btn'}
          onClick={() => onToggleFavorite(hospital.id)}
          aria-label={isFavorite ? `Remove ${hospital.name} from favorites` : `Save ${hospital.name} to favorites`}
        >
          <Heart size={18} />
        </button>
      </div>

      <div className="card-body">
        <div className="card-topline">
          <span className="pill status-pill">{hospital.verification?.status === 'sample' ? 'SAMPLE DATA' : hospital.verification?.status || hospital.verificationStatus}</span>
          <span className="pill type-pill">{hospital.type}</span>
        </div>

        <h3>{hospital.name}</h3>

        <div className="card-meta">
          <span><MapPin size={14} /> {hospital.city}, {hospital.state}</span>
          {hospital.emergency && (
            <span><ShieldCheck size={14} /> Emergency service</span>
          )}
        </div>

        <p className="muted">
          {hospital.services.slice(0, 3).join(' • ')}
          {hospital.services.length > 3 ? ' • more' : ''}
        </p>

        <div className="card-footer">
          <span className="tiny-meta">
            <Clock3 size={14} /> {hospital.operatingHours ? hospital.operatingHours : 'Hours not verified'}
          </span>
          <Link to={`/hospital/${hospital.id}`} className="inline-link">
            View details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
