import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
import { restaurant } from '../data/restaurant';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-text">{restaurant.name}</span>
            </a>
            <p className="footer__tagline">{restaurant.slogan}</p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#bestsellers">Bestsellers</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href={`tel:${restaurant.phone}`}>
                    <FontAwesomeIcon icon={faPhone} /> {restaurant.phone}
                  </a>
                </li>
                <li>
                  <a href={restaurant.maps.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMapPin} /> {restaurant.address}
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} /> {restaurant.hours}
                </li>
              </ul>
            </div>

         
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} {restaurant.name}. Tous droits réservés.</p>
          <p className="footer__credit">
            Powered by <a href="https://supaco-digital.com/" target="_blank" rel="noopener noreferrer">Supaco</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;