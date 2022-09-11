import React from "react";
import { Contact, Footer, Header } from "../../components";
import "./Styles.scss";
const Appointment = (props) => {
  return (
    <div className="appointment">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default Appointment;
