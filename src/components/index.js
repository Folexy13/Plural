import Button from "./Button/Button";
import Hero from "./Hero/Hero";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import Blog2 from "./Blog/Blog2";
import MissionCard from "./mission-card/MissionCard";
import MultiCard from "./multi-card/MultiCard";
import Service from "./service/service";
import Contact from "./Contact/Contact";
import Preloader from "./Preloader/Preloader";
import AboutComp from "./About/About";
import { Link } from "react-router-dom";

export {
  Button,
  Hero,
  Header,
  Blog,
  MissionCard,
  Blog2,
  MultiCard,
  Service,
  Footer,
  FlexIcon,
  Contact,
  Preloader,
  AboutComp,
};

const style = {
  display: "flex",
  gap: "20px",
  fontSize: "10px",
};
function FlexIcon() {
  return (
    <div className="flexicon" style={style}>
      <Link to="#">
        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
      </Link>
      <Link to="#">
        <i class="fa fa-google" aria-hidden="true"></i>
      </Link>
      <Link to="#">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </Link>
      <Link to="#">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
