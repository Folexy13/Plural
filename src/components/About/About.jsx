import React, { useEffect } from "react";
import xls from "../../assets/images/xls.png";
import xls2 from "../../assets/images/line2.png";
import "./About.scss";
import aim from "../../assets/images/aim.png";
import obj from "../../assets/images/obj.png";
import ethos from "../../assets/images/ethos.png";
import check from "../../assets/images/ant.png";
import { img2, img3 } from "../../assets/images/index";
import img1 from "../../assets/images/ethos.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";

const About = (props) => {
  useEffect(() => {
    Aos.init({
      disable: window.innerWidth < 1251,
    });
  });
  return (
    <div className="about" id="service">
      <div className="heading">
        <div className="line">
          <img src={xls} alt="" className="desktop" />
          <img src={xls2} alt="" className="mobile" />
        </div>
        <h1>About Us</h1>
        <div className="dx"></div>
      </div>
      <div className="img2">
        <img src={img2} alt="" />
      </div>
      <div className="body">
        <div className="flex">
          <div
            className="first"
            data-aos="fade-up-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>Aims</h1>
            <div className="dy"></div>
            <p>
              We aim to provide the highest possible standards of care to all
              our clients. Our person-centred care approach is promoted to meet
              each of our service user’s unique and lifestyle needs. We aim to
              provide a homely environment where care and support is provided
              involving all our clients, their relatives, friends, medical
              professionals and other relevant personnel as appropriate to meet
              the essential needs of our clients.
            </p>
          </div>
          <div
            className="second"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img src={aim} alt="alt" />
            </div>

            <div className="diff">
              <h1>Our aims include</h1>
              <div className="dy"></div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="img2">
          <img src={img3} alt="" />
        </div>
        <div className="flex">
          <div
            className="first"
            data-aos="fade-up-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>Objectives</h1>
            <div className="dy"></div>
            <p>
              We aim to provide the highest possible standards of care to all
              our clients. Our person-centred care approach is promoted to meet
              each of our service user’s unique and lifestyle needs. We aim to
              provide a homely environment where care and support is provided
              involving all our clients, their relatives, friends, medical
              professionals and other relevant personnel as appropriate to meet
              the essential needs of our clients.
            </p>
          </div>
          <div
            className="second"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img src={obj} alt="alt" />
            </div>
            <div className="diff">
              <h1>Our Objectives include</h1>
              <div className="dy"></div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="img2">
          <img src={img1} alt="" />
        </div>
        <div className="flex">
          <div
            className="first"
            data-aos="fade-up-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>Ethos and Philosophy</h1>
            <div className="dy"></div>
            <p>
              We aim to provide the highest possible standards of care to all
              our clients. Our person-centred care approach is promoted to meet
              each of our service user’s unique and lifestyle needs. We aim to
              provide a homely environment where care and support is provided
              involving all our clients, their relatives, friends, medical
              professionals and other relevant personnel as appropriate to meet
              the essential needs of our clients.
            </p>
          </div>
          <div
            className="second"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="img">
              <img src={ethos} alt="alt" />
            </div>
            <div className="diff">
              <h1>Our ethos and Philosophy include</h1>
              <div className="dy"></div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Offer skilled care to enable people supported by us to achieve
                  their optimum state of health and well-being.
                </p>
              </div>
            </div>
            <div className="new">
              <Button type={"header"} link="/appointment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
