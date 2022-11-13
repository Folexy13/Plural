import Aos from "aos";
import React, { useEffect } from "react";
import img1 from "../../assets/images/grid.png";
import img2 from "../../assets/images/grid2.png";
import img3 from "../../assets/images/grid3.png";
import img4 from "../../assets/images/grid4.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import "aos/dist/aos.css";
import "./mission-card.scss";
import { Link } from "react-router-dom";

function MissionCard() {
  const handleClick = (id) => {
    localStorage.setItem("count", id);
  };
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div
        id="mission"
        className="mission-card"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="first">
          <h1>Our Mission</h1>
          <p>
            At plural health care , we are dedicated to providing high - quality
            care - giving solutions that respect the dignity and independence of
            our clients. We believe that everyone deserves to receive the best
            possible care, and we are committed to providing it. With
            compassion, professionalism, and a commitment to excellence, we
            strive to make a positive difference in the lives of those we serve.
          </p>
        </div>
      </div>
      <div className="care">
        <div
          className="diff"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1>Every Care You Need</h1>
          <div className="dx"></div>
          <p>
            Simple, fast and affordable health care for every stage of life.
          </p>
        </div>
        <div className="grid">
          <div
            className="container"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={img1} alt="xls" />
            <div className="txt">
              <h2>Home Care</h2>
              <p>
                To make sure you receive the highest standards of care services
                that is person -centred/personalised.
              </p>
              <Link
                to="/services"
                className="ddd"
                onClick={() => handleClick(0)}
              >
                <span>Read More</span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div
            className="container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={img2} alt="xls" />
            <div className="txt">
              <h2>Care Services</h2>
              <p>
                Gives people real choice and control by helping them find a care
                service that is right for them.
              </p>
              <Link
                to="/services"
                className="ddd"
                onClick={() => handleClick(1)}
              >
                <span>Read More</span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div
            className="container"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={img3} alt="xls" />
            <div className="txt">
              <h2>Child Care</h2>
              <p>
                We offer a high standard of care – and service, with
                personalised attention to your needs as parents. Our services
                are tailored to you and your child's needs as they grow up.
              </p>
              <Link
                to="/services"
                className="ddd"
                onClick={() => handleClick(2)}
              >
                <span>Read More</span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div
            className="container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={img4} alt="xls" />
            <div className="txt">
              <h2>Health Consultation</h2>
              <p>
                When you require a service to help with your health and well-
                being, we can help you. We offer a range of health care services
                to give you the right support in the right place at the right
                time.
              </p>
              <Link
                to="/services"
                className="ddd"
                onClick={() => handleClick(3)}
              >
                <span>Read More</span>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="approach">
        <div
          className="diff"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1> Our Approach</h1>
          <div className="dx"></div>
          <p>Every step to get our service</p>
        </div>
        <div className="grid">
          <div
            className="container"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={icon1} alt="" />
            <h1>Book Appointment</h1>
            <p>
              One of the best ways to easily find, track care services and
              schedule your appointments online.
            </p>
          </div>
          <div
            className="container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={icon2} alt="" />
            <h1>Our Staff Come To Your House</h1>
            <p>
              With our Health Care Home Visits Services in Plural, you can
              continue living your life at home. Our health professionals will
              visit you at home and provide treatments and exercises customized
              to meet your specific needs.
            </p>
          </div>
          <div
            className="container"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={icon3} alt="" />
            <h1>Enjoy Our Servive and Make Payment</h1>
            <p>
              We will take care of all things for you, so you can concentrate on
              enjoying your service and making payment seamlessly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionCard;
