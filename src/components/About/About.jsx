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
    Aos.init();
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
              Our aim is to provide the highest possible standards of care to
              all our clients, enabling each person to live a fulfilling and
              independent life in their own home for as long as possible.
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
                  Reclaim your future through an integrated approach to help
                  restore you to full health, independence and well-being.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Our goal is to help each individual return to their highest
                  quality of life by providing a range of care services for all
                  ages.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Respect and encourage the right of independence of all Service
                  Users.
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
              We are a leading medium size care provider with a focus on the
              needs of our service users. We ensure that we recruit experienced
              and passionate staff because our priority is to make sure that we
              provide exemplary long-term care for all our clients.
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
                  Support Children, Elderly and Disabled Adults who needs full
                  or some assistance to meet their daily living needs which they
                  are unable to meet independently due to ill health, physical
                  disabilities, ageing or for recuperation.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Assist our clients to develop their own individualised support
                  plan.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Empower our clients by enabling them to choose their support
                  workers
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
              We work hard to promote independent living by supporting and
              encouraging our clients to maintain and enhance their abilities.
              We believe that our clients views are important and should be
              listened and responded to.
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
                  Promoting independent living, working within your range of
                  abilities and competencies.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Ensuring that your confidential information is protected at
                  all times and only shared with others strictly in accordance
                  with our policy on confidentiality.
                </p>
              </div>
              <div className="flexy">
                <img src={check} alt="alt" />
                <p>
                  Encourage our clients to complain about anything they feel is
                  unfair or unjust, and to have that complaint listened and
                  responded to.
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
