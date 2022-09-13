import React, { useState } from "react";
import { Footer, Header, Service, Sidebar } from "../../components";
import "./Styles.scss";

const Services = (props) => {
  const [show, setShow] = useState(false);
  const onclick = () => {
    setShow(!show);
  };
  return (
    <div className="services">
      <Sidebar show={show} />
      <Header show={show} click={onclick} />
      <Service />
      <Footer />
    </div>
  );
};

export default Services;
