import { restaurant } from "../data/data";

function Location() {
  return (
    <section className="location section" id="location">
      <div className="container">
        <h2 className="section-title">Où Nous Trouver</h2>
        
        <div className="location__wrapper">
          <div className="location__info">
            <h3>📍 {restaurant.name}</h3>
            <p>🏠 {restaurant.address}</p>
            <p>📞 {restaurant.phone}</p>
            <p>🕐 {restaurant.hours}</p>
            
            <a
              href={restaurant.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="location__info-cta"
            >
              Itinéraire →
            </a>
          </div>
          
          <div className="location__map">
            <iframe
              title="Localisation BelliFood"
              src={restaurant.maps.embed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;