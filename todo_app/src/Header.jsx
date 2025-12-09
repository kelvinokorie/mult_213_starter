import './Header.css';

export function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
      <p className="header__message">{props.message}</p>
    </header>
  );
}
