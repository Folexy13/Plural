import React, { useState } from "react";
import "./Footer.scss";
import whiteLogo from "../../assets/images/whiteLogo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FlexIcon } from "..";
import axios from "axios";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email };
    setLoading(true);
    axios
      .post(`https://cr-news-api.herokuapp.com/subscribe`, payload)
      .then((res) => {
        if (res.data.status) {
          Swal.fire("Sucessful!", res.data.message, "success").then((res) => {
            if (res.isConfirmed) {
              setEmail("");
              setLoading(false);
            }
          });
        } else {
          throw res.data;
        }
      })
      .catch((err) => {
        Swal.fire("Error!", err.message, "error").then((res) => {
          if (res.isConfirmed) {
            setLoading(false);
          }
        });
      });
  };
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
                  <a href="mailto:info@pluralhealthcareltd.com">
                    info@pluralhealthcareltd.com
                  </a>
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span> +44 7907 538847</span>
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
              <form className="form-control" onSubmit={handleSubmit}>
                <input type="email" />

                <button type="submit" disabled={loading}>
                  <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </form>
              <FlexIcon />
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
