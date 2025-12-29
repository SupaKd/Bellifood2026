import { useState, useEffect } from 'react';
import { restaurant } from '../data/restaurant';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Bestsellers', href: '#bestsellers' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <nav className="header__nav">
          <a href="#home" className="header__logo">
            <span className="header__logo-icon">🌮</span>
            <span className="header__logo-text">{restaurant.name}</span>
          </a>

          <ul className={`header__menu ${isMobileMenuOpen ? 'header__menu--open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="header__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__actions">
            <a href={`tel:${restaurant.phone}`} className="header__phone">
              <span className="header__phone-icon">📞</span>
              <span className="header__phone-text">{restaurant.phone}</span>
            </a>
            <a 
              href={restaurant.social.ubereats} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn--accent"
            >
              Commander
            </a>
          </div>

          <button 
            className={`header__burger ${isMobileMenuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;