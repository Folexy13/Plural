import React, { useEffect } from "react";
import { Button } from "..";
import "./Hero.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import a from "../../assets/images/a.png";
import b from "../../assets/images/b.png";
import c from "../../assets/images/c.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    Aos.init({
      disable: window.innerWidth < 1251,
    });
    Aos.init();
  });
  return (
    <div className="hero-section">
      <div
        className="hero-title"
        data-aos="fade-down-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h1>Welcome to Plural Health Care Ltd</h1>
        <p>
          We believe in giving you the best medic care,you will never get
          anywhere
        </p>
        <Button link={"/appointment"} />
      </div>
      <div
        className="hero-title2"
        data-aos="fade-down-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Carousel
          showIndicators={false}
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showThumbs={false}
          showStatus={false}
          transitionTime={1500}
        >
          <div>
            <img src={a} alt="hh" />
          </div>
          <div>
            <img src={b} alt="hh" />
          </div>
          <div>
            <img src={c} alt="hh" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
