import React from "react";
import "./Button.scss";

const Button = ({ type, label, hasArrow, link }) => {
  if (type === "header") {
    return (
      <a href={link} className="btn">
        <button className="ctn2">Book an Appointment</button>
      </a>
    );
  }
  return (
    <a href={link} className="btn">
      <button className="cnt">
        {label}{" "}
        {hasArrow && <i class="fa fa-long-arrow-right" aria-hidden="true"></i>}
      </button>
    </a>
  );
};

Button.defaultProps = {
  label: "Book an Appointment",
  link: "#",
};
export default Button;
