import { useEffect } from "react";

function CategoryModal({ isOpen, onClose, category }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!category) return null;

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>×</button>
        <img src={category.image} alt={category.name} className="modal__img" />
        <div className="modal__body">
          <h3>{category.name} {category.emoji}</h3>
          
          <div className="category-modal__products">
            {category.products.map((product, index) => (
              <div key={index} className="category-modal__product">
                <span className="category-modal__product-name">{product.name}</span>
                <span className="category-modal__product-price">{product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;