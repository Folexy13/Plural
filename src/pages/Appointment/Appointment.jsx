import React, { useState } from "react";
import { Contact, Footer, Header, Sidebar } from "../../components";
import "./Styles.scss";
const Appointment = (props) => {
  const [show, setShow] = useState(false);
  const onclick = () => {
    setShow(!show);
  };
  return (
    <div className="appointment">
      <Sidebar show={show} />
      <Header show={show} click={onclick} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Appointment;
