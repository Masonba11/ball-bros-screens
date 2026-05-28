import { Link } from 'react-router-dom';
import { SITE } from '../data/site';

export default function MobileSticky() {
  return (
    <div className="mobile-sticky" role="complementary" aria-label="Mobile quick actions">
      <a href={`tel:${SITE.phone}`} className="btn btn-outline">Call Now</a>
      <Link to="/contact" className="btn btn-primary">Get Quote</Link>
    </div>
  );
}
