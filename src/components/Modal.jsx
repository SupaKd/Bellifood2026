import { useEffect } from "react";

function Modal({ isOpen, onClose, product }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ×
        </button>
        <img src={product.image} alt={product.name} className="modal__img" />
        <div className="modal__body">
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;