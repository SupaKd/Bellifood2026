import { sauces, viandes } from "../data/data";

function Marquee() {
  const allItems = [...viandes, ...sauces, ...viandes, ...sauces];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {allItems.map((item, index) => (
          <span key={index} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;