import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { restaurant } from '../data/restaurant';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <FontAwesomeIcon icon={faMapPin} />
            Nous trouver
          </span>
          <h2>Venez nous <span>rencontrer</span></h2>
          <p>Passez nous voir ou commandez en ligne pour une livraison rapide</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__card">
              <div className="contact__card-icon">
                <FontAwesomeIcon icon={faMapPin} />
              </div>
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
              <div className="contact__card-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
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
              <div className="contact__card-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
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
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a 
                  href={restaurant.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="TikTok"
                >
                  <FontAwesomeIcon icon={faTiktok} />
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