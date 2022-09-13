import React, { useState } from "react";
import { AboutComp, Footer, Header, Sidebar } from "../../components";
const About = (props) => {
  const [show, setShow] = useState(false);
  const onclick = () => {
    setShow(!show);
  };
  return (
    <>
      <Sidebar show={show} />
      <Header show={show} click={onclick} />
      <AboutComp />
      <Footer />
    </>
  );
};

export default About;
