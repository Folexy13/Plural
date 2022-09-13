import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Styles.scss";

const Sidebar = ({ show }) => {
  return (
    <>
      {show && (
        <div className="sidebar">
          <div
            style={{ transform: show ? "translateY(0)" : "translateY(-100vh)" }}
            className="container"
          >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Service</Link>
              </li>
            </ul>
            <Button type={"header"} />
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
