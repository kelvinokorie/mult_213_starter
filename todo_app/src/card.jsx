import './card.css';

export function Card({ title, subtitle, content, backgroundColor, onDelete }) {
  return (
    <div className="card" style={{ backgroundColor }}>
      <div className="card__content">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{content}</p>
        <button className="card__delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
