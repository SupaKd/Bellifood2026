import { restaurant } from '../data/restaurant';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <span>📍</span>
            Nous trouver
          </span>
          <h2>Venez nous <span>rencontrer</span></h2>
          <p>Passez nous voir ou commandez en ligne pour une livraison rapide</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__card">
              <div className="contact__card-icon">📍</div>
              <div className="contact__card-content">
                <h3>Adresse</h3>
                <p>{restaurant.address}</p>
                <a 
                  href={restaurant.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">🕐</div>
              <div className="contact__card-content">
                <h3>Horaires</h3>
                <p>{restaurant.hours}</p>
                <span className="contact__status">
                  <span className="contact__status-dot"></span>
                  Ouvert maintenant
                </span>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">📞</div>
              <div className="contact__card-content">
                <h3>Téléphone</h3>
                <p>{restaurant.phone}</p>
                <a 
                  href={`tel:${restaurant.phone}`}
                  className="contact__link"
                >
                  Appeler maintenant →
                </a>
              </div>
            </div>

            <div className="contact__social">
              <h3>Suivez-nous</h3>
              <div className="contact__social-links">
                <a 
                  href={restaurant.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={restaurant.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href={restaurant.social.ubereats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link contact__social-link--uber"
                  aria-label="Uber Eats"
                >
                  <span>🛵</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              src={restaurant.maps.embed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BelliFood Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;