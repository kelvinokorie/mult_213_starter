import './card.css';

export function Card({ title, subtitle, content, image, backgroundColor, onDelete }) {
  return (
    <div className="card" style={{ backgroundColor }}>
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{content}</p>
        <button className="card__delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
