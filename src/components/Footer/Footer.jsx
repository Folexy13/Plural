import React from "react";
import "./Footer.scss";
import whiteLogo from "../../assets/images/whiteLogo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <AnimationOnScroll animateIn="animate__tada" initiallyVisible>
            <div>
              <img src={whiteLogo} alt="" />
              <p style={{ margin: "10px 0" }}>
                PLURAK HEALTH CARE LTD is Domiciliary Care Company, Incorporated
                in England & Wales as a Private limited Company, with a
                registration number of 13666845.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__tada" initiallyVisible>
            <div className="diff">
              <h1>Contact Us</h1>
              <ul>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span style={{ marginLeft: 5 }}>
                    Address: 56 Queens Avenue, Gedling, Nothingham, NG4 4EJ
                  </span>
                </li>
                <li>
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                  <span> Info@pluralhealthcareltd.co.uk</span>
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span> +447733718474</span>
                </li>
              </ul>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__tada" initiallyVisible>
            <div>
              <h1>Subscribe</h1>
              <p>
                Get healthy news, tip and solutions to your problems from our
                experts.
              </p>
              <form className="form-control">
                <input type="email" />

                <button type="submit">
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div className="second-footer">
        <p>&copy; 2021 PURAL HEALTH CARE LTD.Care Services LTD.</p>
      </div>
    </>
  );
};

export default Footer;
