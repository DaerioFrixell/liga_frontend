import "./logo.scss";
import { Link as ReactLink } from "react-router-dom";

function Logo() {
  return (
    <div id="home" className="logo">
      <ReactLink
        className="logo__link"
        to="/"
      ><p>Liga School</p> </ReactLink>
    </div>
  );
}

export default Logo;

