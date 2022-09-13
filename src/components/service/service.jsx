import Aos from "aos";
import React, { useEffect } from "react";
import { useState } from "react";
import xls from "../../assets/images/xls.png";
import check from "../../assets/images/ant.png";
import img2 from "../../assets/images/x.png";
import img3 from "../../assets/images/y.png";
import img4 from "../../assets/images/z.png";
import "./service.scss";
import Button from "../Button/Button";
import { img1 } from "../../assets/images";

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
      <div className="img2">
        <img src={img2} alt="" />
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
          <div className="img">
            <img src={img1} alt="alt" />
          </div>
        </div>
        <div className="second">
          <h1>{services[active].title}</h1>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>

          <Button type={"header"} link="/appointment" />
        </div>
      </div>
      <div className="xlx flex">
        <div className="second">
          <h1>{services[1].title}</h1>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>
          <div className="flexz">
            <img src={check} alt="icon" />
            <p>
              Offer skilled care to enable people supportedby us to achieve
              their optimum state of health and well-being.
            </p>
          </div>

          <Button type={"header"} link="/appointment" />
        </div>
      </div>
      <div className="ddee">
        <div className="img">
          <img src={img4} alt="alt" />
        </div>
        <div className="xlx flex nnn">
          <div className="second">
            <h1>{services[2].title}</h1>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>

            <Button type={"header"} link="/appointment" />
          </div>
        </div>
      </div>
      <div className="ddee">
        <div className="img" style={{ marginTop: "72px" }}>
          <img src={img3} alt="alt" />
        </div>
        <div className="xlx flex nnn">
          <div className="second">
            <h1>{services[3].title}</h1>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Offer skilled care to enable people supportedby us to achieve
                their optimum state of health and well-being.
              </p>
            </div>

            <Button type={"header"} link="/appointment" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
