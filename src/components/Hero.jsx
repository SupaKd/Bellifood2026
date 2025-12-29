import { useState, useEffect } from 'react';
import { restaurant, heroImages } from '../data/restaurant';
import './Hero.scss';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__slider">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="container">
          <div className="hero__text">
            <span className="hero__badge">
              <span className="hero__badge-dot"></span>
              Ouvert maintenant
            </span>
            
            <h1 className="hero__title">
              L'authentique
              <span className="hero__title-accent">French Tacos</span>
            </h1>
            
            <p className="hero__subtitle">{restaurant.slogan}</p>
            
            <div className="hero__info">
              <div className="hero__info-item">
                <span className="hero__info-icon">📍</span>
                <span>{restaurant.address}</span>
              </div>
              <div className="hero__info-item">
                <span className="hero__info-icon">🕐</span>
                <span>{restaurant.hours}</span>
              </div>
            </div>
            
            <div className="hero__actions">
              <a 
                href={restaurant.social.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--accent"
              >
                <span>🛵</span>
                Commander maintenant
              </a>
              <a href="#menu" className="btn btn--ghost">
                Voir le menu
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`hero__indicator ${index === currentSlide ? 'hero__indicator--active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>

      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>
    </section>
  );
};

export default Hero;