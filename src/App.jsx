import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bestsellers from './components/Bestsellers';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import './scss/main.scss';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Bestsellers onProductClick={handleProductClick} />
        <Menu onProductClick={handleProductClick} />
        <Contact />
      </main>
      <Footer />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;