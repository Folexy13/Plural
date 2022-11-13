import Aos from "aos";
import React, { useEffect } from "react";
import { useState } from "react";
import xls from "../../assets/images/xls.png";
import check from "../../assets/images/ant.png";
import img2 from "../../assets/images/x.png";
import xls2 from "../../assets/images/line2.png";
import img from "../../assets/images/grid.png";
import img3 from "../../assets/images/y.png";
import img4 from "../../assets/images/z.png";
import "./service.scss";
import Button from "../Button/Button";
import { img1 } from "../../assets/images";

function Service() {
  const count = localStorage.getItem("count");
  const [active, setActive] = useState(parseFloat(count) || 0);
  const services = [
    { title: "Home Care", id: 1 },
    { title: "Care Service", id: 2 },
    { title: "Child Care ", id: 3 },
    { title: "Health consultation ", id: 4 },
  ];
  useEffect(() => {
    Aos.init();
    return () => localStorage.removeItem("count");
  });
  return (
    <div className="service" id="service">
      <div className="heading">
        <div className="line">
          <img src={xls} alt="" className="desktop" />
          <img src={xls2} alt="" className="mobile" />
        </div>
        <h1>Services</h1>
        <div className="dx"></div>
      </div>
      <div className="img2">
        <img src={img2} alt="" />
      </div>
      <div className="grid">
        {services.map((el, i) => {
          return (
            <button
              key={i}
              className={active === i ? "active " : ""}
              onClick={() => setActive(i)}
            >
              {el.title}
            </button>
          );
        })}
      </div>
      {active === 0 && (
        <div className="flex">
          <div className="first lx">
            <div className="img">
              <img src={img1} alt="alt" />
            </div>
          </div>
          <div
            className="second"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>{services[active].title}</h1>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                To make sure you receive the highest standards of care services
                that is person -centred/personalised.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                As the care home professionals we are committed to delivering
                high quality care and support that is personalised to you.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                We understand that your needs change as you get older and it is
                our role to make sure you live a happy and healthy life.
              </p>
            </div>

            <Button type={"header"} link="/appointment" />
          </div>
        </div>
      )}
      {active === 1 && (
        <div className="flex">
          <div className="first lx">
            <div className="img">
              <img src={img1} alt="alt" />
            </div>
          </div>
          <div
            className="second"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>{services[active].title}</h1>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Gives people real choice and control by helping them find a care
                service that is right for them.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                At the heart of the Care Service are our Quality Framework and
                Caring Well Check.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Plural health care brings together different kinds of care to
                improve your life.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                It's a care service that is person-centred, personalised and
                provided by different kinds of professionals with one thing in
                common: they all want the best outcomes for you
              </p>
            </div>
            <Button type={"header"} link="/appointment" />
          </div>
        </div>
      )}
      {active === 2 && (
        <div className="flex">
          <div className="first lx">
            <div className="img">
              <img src={img4} alt="alt" />
            </div>
          </div>
          <div
            className="second"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>{services[active].title}</h1>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                We offer a high standard of care – and service, with
                personalised attention to your needs as parents.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Our services are tailored to you and your child's needs as they
                grow up.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Child care services, health professio nals and parents/guardians
                can seek advice as to what is best for the child/young person
                and how to proceed.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Our standard of care services are developed with you, the
                parents, in mind – from birth to school age. this means keeping
                a watchful eye on all your child's developmental needs and
                always allowing room for growth and change.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                Our aim is to care for all your needs, so that you can enjoy the
                special relationship with your child in a safe and nurturing
                environment.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                The safety, health and welfare of our children, parents and
                staff are the guiding principles of our working practices.
              </p>
            </div>
            <Button type={"header"} link="/appointment" />
          </div>
        </div>
      )}
      {active === 3 && (
        <div className="flex">
          <div className="first lx">
            <div className="img">
              <img src={img3} alt="alt" />
            </div>
          </div>
          <div
            className="second"
            data-aos="fade-up-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>{services[active].title}</h1>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                When you require a service to help with your health and well-
                being, we can help.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                We offer a range of health care services to give you the right
                support in the right place at the right time
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                An expert in health consultation, professional support and
                patient engagement for people with chronic conditions, through
                person-centred, timely and targeted access to services.
              </p>
            </div>
            <div className="flexz">
              <img src={check} alt="icon" />
              <p>
                In the health consultation, we actively support the patient in
                navigating their way through the health and social care system
                to ensure that they receive the best possible service. Our goal
                is to empower you and your family to take control of your health
                and well-being
              </p>
            </div>
            <Button type={"header"} link="/appointment" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Service;
