import { bestsellers } from '../data/restaurant';
import './Bestsellers.scss';

const Bestsellers = ({ onProductClick }) => {
  return (
    <section id="bestsellers" className="bestsellers section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <span>⭐</span>
            Favoris des clients
          </span>
          <h2>Nos <span>Bestsellers</span></h2>
          <p>Découvrez les créations qui font notre réputation depuis le premier jour</p>
        </div>

        <div className="bestsellers__grid">
          {bestsellers.map((product, index) => (
            <article 
              key={product.id} 
              className="bestsellers__card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onProductClick(product)}
            >
              <div className="bestsellers__image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="bestsellers__image"
                  loading="lazy"
                />
                <div className="bestsellers__overlay">
                  <span className="bestsellers__view">Voir détails</span>
                </div>
                <span className="bestsellers__badge">🔥 Best-seller</span>
              </div>
              
              <div className="bestsellers__content">
                <h3 className="bestsellers__name">{product.name}</h3>
                <p className="bestsellers__description">{product.description}</p>
                <div className="bestsellers__footer">
                  <span className="bestsellers__price">{product.price}</span>
                  <button className="bestsellers__btn">
                    <span>+</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;