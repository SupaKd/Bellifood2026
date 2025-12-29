import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faDrumstickBite, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { categories } from '../data/restaurant';

const Menu = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState(1);

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="menu section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <FontAwesomeIcon icon={faList} />
            Notre carte
          </span>
          <h2>Explorez notre <span>Menu</span></h2>
          <p>Des recettes authentiques préparées avec des ingrédients frais et de qualité</p>
        </div>

        <div className="menu__categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`menu__category ${activeCategory === category.id ? 'menu__category--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="menu__category-emoji">{category.emoji}</span>
              <span className="menu__category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="menu__content">
          <div className="menu__image-section">
            <div className="menu__image-wrapper">
              <img 
                src={currentCategory?.image} 
                alt={currentCategory?.name}
                className="menu__image"
              />
              <div className="menu__image-badge">
                <span>{currentCategory?.emoji}</span>
                <span>{currentCategory?.name}</span>
              </div>
            </div>
          </div>

          <div className="menu__products">
            <h3 className="menu__products-title">
              {currentCategory?.emoji} {currentCategory?.name}
            </h3>
            
            <div className="menu__products-list">
              {currentCategory?.products.map((product, index) => (
                <article 
                  key={index} 
                  className="menu__product"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => onProductClick({
                    ...product,
                    image: currentCategory.image,
                    category: currentCategory.name
                  })}
                >
                  <div className="menu__product-info">
                    <h4 className="menu__product-name">{product.name}</h4>
                    {product.description && (
                      <p className="menu__product-desc">{product.description}</p>
                    )}
                  </div>
                  <div className="menu__product-price-wrapper">
                    <span className="menu__product-line"></span>
                    <span className="menu__product-price">{product.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;