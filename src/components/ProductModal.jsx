import { useEffect } from 'react';
import { restaurant, sauces, viandes } from '../data/restaurant';
import './ProductModal.scss';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!product) return null;

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal__container">
        <button className="modal__close" onClick={onClose} aria-label="Fermer">
          <span>×</span>
        </button>

        <div className="modal__content">
          <div className="modal__image-section">
            <img 
              src={product.image} 
              alt={product.name}
              className="modal__image"
            />
            <div className="modal__image-overlay">
              <span className="modal__category-badge">
                {product.category || '🌮 French Tacos'}
              </span>
            </div>
          </div>

          <div className="modal__details">
            <div className="modal__header">
              <h2 className="modal__title">{product.name}</h2>
              <span className="modal__price">{product.price}</span>
            </div>

            <p className="modal__description">
              {product.description || 'Une création savoureuse préparée avec des ingrédients frais de qualité.'}
            </p>

            <div className="modal__section">
              <h3 className="modal__section-title">
                <span>🥩</span> Choix de viande
              </h3>
              <div className="modal__tags">
                {viandes.map((viande, index) => (
                  <span key={index} className="modal__tag">
                    {viande}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal__section">
              <h3 className="modal__section-title">
                <span>🍯</span> Nos sauces
              </h3>
              <div className="modal__tags modal__tags--sauces">
                {sauces.map((sauce, index) => (
                  <span key={index} className="modal__tag modal__tag--sauce">
                    {sauce}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal__info">
              <div className="modal__info-item">
                <span className="modal__info-icon">🕐</span>
                <span>Préparation ~10 min</span>
              </div>
              <div className="modal__info-item">
                <span className="modal__info-icon">🔥</span>
                <span>Servi chaud</span>
              </div>
            </div>

            <div className="modal__actions">
              <a 
                href={restaurant.social.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--accent modal__order-btn"
              >
                <span>🛵</span>
                Commander sur Uber Eats
              </a>
              <a 
                href={`tel:${restaurant.phone}`}
                className="btn btn--secondary modal__call-btn"
              >
                <span>📞</span>
                Appeler pour commander
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;