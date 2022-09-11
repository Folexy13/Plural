import Aos from "aos";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./multi-card.scss";
import "aos/dist/aos.css";
import james from "../../assets/images/test.png";
import Button from "../Button/Button";
function MultiCard({ type }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    Aos.init({
      disable: window.innerWidth < 1251,
    });
  });
  return (
    <>
      <div
        className="multi-card"
        data-aos="zoom-out-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h1>We Have Been There. We Understand You</h1>
        <Button link={"/appointment"} />
      </div>
      <div className="testimonial">
        <div
          className="diff"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1> Testimonials</h1>
          <div className="dx"></div>
          <p>What our client say</p>
        </div>
        <div className="container">
          <Slider {...settings}>
            <div className="card">
              <q />
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat Duis aute irure dolor in reprehenderit"
              <div className="flex">
                <img src={james} alt="" />
                <div>
                  <h1>James Smith</h1>
                  <p>Students</p>
                </div>
              </div>
            </div>
            <div className="card">
              <q />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat Duis aute irure dolor in reprehenderit"
              <div className="flex">
                <img src={james} alt="" />
                <div>
                  <h1>James Smith</h1>
                  <p>Students</p>
                </div>
              </div>
            </div>
            <div className="card">
              <q />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat Duis aute irure dolor in reprehenderit"
              <div className="flex">
                <img src={james} alt="" />
                <div>
                  <h1>James Smith</h1>
                  <p>Students</p>
                </div>
              </div>
            </div>
            <div className="card">
              <q />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat Duis aute irure dolor in reprehenderit"
              <div className="flex">
                <img src={james} alt="" />
                <div>
                  <h1>James Smith</h1>
                  <p>Students</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MultiCard;
