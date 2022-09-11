import React from "react";
import { IMAGES } from "../../constants";
import "./Blog2.scss";
import Aside from "./Aside";
import Icons from "../Button/Icons";

const Blog2 = () => {
  return (
    <div className="post_container">
      <div className="post">
        <h3>Caring and Responsive service</h3>
        <img src={IMAGES.Img_1} alt="" id="img_blog" />
        <p>
          We aim to provide the highest possible standards of care to all our
          clients. Our person-centred care approach is promoted to meet each of
          our service user’s unique and lifestyle needs. We aim to provide a
          homely environment where care and support is provided involving all
          our clients, their relatives, friends, medical professionals and oWe
          aim to provide the highest possible standards of care to all our
          clients. Our person-centred care approach is promoted to meet each of
          our service user’s unique and lifestyle needs. We aim to provide a
          homely environment where care and support is provided involving all
          our clients, their relatives, friends, medical professionals and o
        </p>
        <div className="img_flex">
          <img src={IMAGES.Img_2} alt="" />
          <img src={IMAGES.Img_3} alt="" />
        </div>
        <p id="all">
          <b>What does PURAL HEALTH CARE LTD. stand for?</b>
        </p>
        <ul>
          <li>
            Offer skilled care to enable people supported by us to achieve their
            optimum state of health and well-being.
          </li>
          <li>
            Treat all people supported by us and all people who work here with
            respect at all times.
          </li>
          <li>
            Uphold the human and citizenship rights of all who work and visit
            here and of all Service Users
          </li>
          <li>
            Respect and encourage the right of independence of all Service
            Users.
          </li>
          <li>
            Recognise the individual uniqueness of Service Users, staff and
            visitors, and always treat them with dignity and respect
          </li>
          <li>
            Recognise the individual need for personal fulfilment and offer
            person-centred programs of meaningful activity to satisfy that need
            of Service Users and staff.
          </li>
          <li>
            Respect individual requirement for privacy at all times and treat
            all information relating to individuals in a confidential manner
            according to principles of GDPR
          </li>
        </ul>

        <span>
          <p id="left">Share this article</p>
          <Icons />
        </span>
      </div>
      <Aside />
    </div>
  );
};

export default Blog2;
