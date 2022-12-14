import React from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import { linkDuration, linkOffset } from "../../../styles/setting/smoothLink"
import { Menu } from "../../UI/menu/Menu";
import useToggle from "../../../../hooks/useToggle";
// import { Link as ReactLink } from "react-router-dom";

export const Navbar = () => {
  const { isOpen, toggle } = useToggle()

  return (
    <nav className="navbar">
      <div onClick={() => toggle()} >
        <p className="navbar__link">меню</p>
        <Menu isOpen={isOpen} />
      </div>

      <Link
        className="navbar__link"
        activeClass="navbar__link--active"
        to="priceBlock"
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={linkOffset}
      >абонементы</Link>

      <Link
        className="navbar__link"
        activeClass="navbar__link--active"
        to="availableTimeBlock"
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={linkOffset}
      >доступное время</Link>

      <Link
        className="navbar__link"
        activeClass="navbar__link--active"
        to="lendingForm"
        smooth={true}
        spy={true}
        duration={linkDuration}
        offset={linkOffset}
      >записаться</Link>
    </nav >
  );
}
