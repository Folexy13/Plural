// import { Fragment } from "react"
import { Link } from "react-router-dom";
import { IMAGES, ROUTES } from "../../constants";
import { Squash as Hamburger } from "hamburger-react";
import "./Header.scss";
import Button from "../Button/Button";
import { useEffect } from "react";
let pathname = window.location.pathname;

const Header = ({ click, show }) => {
  useEffect(() => {
    return () => (pathname = "");
  });

  return (
    <div className="header">
      <div className="flex-header">
        <p>info@pluralhealthcareltd.com</p>
        <p>For Consultation, Call: +44 7733718474</p>
      </div>
      <nav>
        <ul>
          <Link to={ROUTES.HOME} className="logo">
            <img src={IMAGES.Logo} alt="" />
          </Link>

          <div className="menu-list">
            <li>
              <a
                href={"/about"}
                className={pathname === "/about" ? "active" : ""}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={pathname === "/services" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li>
              <Button type={"header"} link={"/appointment"} />
            </li>
          </div>
          <div className="hamburger__menu" onClick={click}>
            <Hamburger toggled={show} toggle={click} />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
