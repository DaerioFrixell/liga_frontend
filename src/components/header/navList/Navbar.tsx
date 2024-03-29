import "./navbar.scss";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { linkDuration, linkOffset } from "../../../utils/settingScroll"
import useToggle from "../../../hooks/useToggle";
import { scrollLinks, menuLinks } from "./text";
import { Link } from "react-router-dom";


export const Navbar: FC = () => {
  const { isOpen, toggle } = useToggle()

  return (
    <nav className="navbar">
      <div >
        <p className="navbar__link" onMouseEnter={() => toggle()}>меню</p>

        {isOpen && (
          <div className="menu" onMouseLeave={() => toggle()}>
            {menuLinks.map(l =>
              <Link key={l.to} to={l.to} className="menu-link" >
                {l.text}
              </Link>
            )}
          </div>
        )}
      </div>

      {scrollLinks.map(l =>
        <p key={l.to}>
          <ScrollLink
            className="navbar__link"
            activeClass="navbar__link--active"
            to={l.to}
            smooth={true}
            spy={true}
            duration={linkDuration}
            offset={linkOffset}
          >
            {l.text}
          </ScrollLink>
        </p>
      )}
    </nav >
  );
}
