import { featuredProducts } from "../data/data";

function Featured() {
  return (
    <section className="featured section">
      <div className="container">
        <h2 className="section-title">Nos Produits du Moment</h2>
        
        <div className="featured__slider">
          {featuredProducts.map((product) => (
            <article key={product.id} className="featured__card">
              <img src={product.image} alt={product.name} />
              <div className="featured__card-overlay">
                <h3>{product.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;