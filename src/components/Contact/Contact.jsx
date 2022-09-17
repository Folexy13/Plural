import React, { useEffect } from "react";
import "./Contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import appoint from "../../assets/images/appoint.png";
import appoint2 from "../../assets/images/appoint2.png";
import xls2 from "../../assets/images/line2.png";

import xls from "../../assets/images/xls.png";
const Contact = () => {
  useEffect(() => {
    Aos.init({
      disable: window.innerWidth < 1251,
    });
  });
  return (
    <>
      <div className="contact" id="contact">
        <div className="heading">
          <div className="line">
            <img src={xls} alt="" className="desktop" />
            <img src={xls2} alt="" className="mobile" />
          </div>
          <h1>Book Appointment</h1>
          <div className="dx"></div>
        </div>
        <div className="container">
          <div
            className="first"
            data-aos="slide-right"
            data-aos-offset="100"
            data-aos-easing="ease-out"
            data-aos-duration="1400"
          >
            <img src={appoint} alt="" className="desk" />
            <img src={appoint2} alt="" className="mob" />
          </div>
          <div
            className="second"
            data-aos="slide-left"
            data-aos-offset="100"
            data-aos-easing="ease-out"
            data-aos-duration="1400"
          >
            <h3>Send us a message</h3>
            <form action="">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <select name="" id="">
                <option value="" disabled>
                  Select Service
                </option>
                <option value="">Home Care</option>
                <option value="">Care Services</option>
                <option value="">Child Care</option>
                <option value="">Health Consultation</option>
              </select>
              <input type="date" placeholder="Email Address" required />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                required
                placeholder="Enter Your message..."
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            class="gmap_iframe"
            width="100%"
            height="392px"
            title="map"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=800&amp;hl=en&amp;q=56 Queens Avenue, Gedling, Nothingham, NG4 4EJ&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
