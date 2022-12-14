import React from "react";
import "./logo.scss";
import { Link } from "react-scroll";
import { linkDuration } from "../../../styles/setting/smoothLink"
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

