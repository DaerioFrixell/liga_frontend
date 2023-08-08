import "./logo.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div id="home" className="logo">
      <Link
        className="logo__link"
        to="/"
      >
        <p>Liga School</p>
      </Link>
    </div>
  );
}

export default Logo;

