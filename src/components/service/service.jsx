import Aos from "aos";
import React, { useEffect } from "react";
import { useState } from "react";
import xls from "../../assets/images/xls.png";
import check from "../../assets/images/ant.png";
import woman from "../../assets/images/img3.png";
import "./service.scss";
import Button from "../Button/Button";

function Service() {
  const count = localStorage.getItem("count");
  const [active, setActive] = useState(parseFloat(count) || 0);
  const services = [
    { title: "Home Care", id: 1 },
    { title: "Care Service", id: 2 },
    { title: "Child Care ", id: 3 },
    { title: "Health consultation ", id: 4 },
  ];
  useEffect(() => {
    Aos.init({
      disable: window.innerWidth < 1251,
    });
    return () => localStorage.removeItem("count");
  });
  return (
    <div className="service" id="service">
      <div className="heading">
        <div className="line">
          <img src={xls} alt="" />
        </div>
        <h1>Services</h1>
        <div className="dx"></div>
      </div>
      <div className="grid">
        {services.map((el, i) => {
          return (
            <button
              key={i}
              className={active === i ? "active " : ""}
              onClick={() => setActive(i)}
            >
              {el.title}
            </button>
          );
        })}
      </div>
      <div className="flex">
        <div className="first">
          <img src={woman} alt="alt" />
        </div>
        <div className="second">
          <h1>{services[active].title}</h1>
          <div className="flex">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flex">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flex">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flex">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flex">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flex">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flex">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <Button type={"header"} />
        </div>
      </div>
    </div>
  );
}

export default Service;
