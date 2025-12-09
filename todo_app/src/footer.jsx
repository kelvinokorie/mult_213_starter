import './footer.css';

export function Footer(props) {
  return (
    <footer>
      <p>{props.message}</p>
      <p className="footer__default">Copyright © 2023 My Website. All rights reserved.</p>
    </footer>
  );
}
