import React, { useEffect, useState } from "react";
import "./Contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import appoint from "../../assets/images/appoint.png";
import appoint2 from "../../assets/images/appoint2.png";
import xls2 from "../../assets/images/line2.png";
import Swal from "sweetalert2";
import axios from "axios";
import xls from "../../assets/images/xls.png";
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let payload = {
      name,
      phone,
      email,
      service,
      date,
      message,
    };
    if (!name || !phone || !email || !service || !date || !message) {
      Swal.fire("Error!", "All Fields are required", "error");
      setLoading(false);
      return;
    }
    axios
      .post(`https://cr-news-api.herokuapp.com/book-appointment`, payload)
      .then((res) => {
        if (res.data.status) {
          Swal.fire("Sucessful!", res.data.message, "success").then((res) => {
            if (res.isConfirmed) {
              setEmail("");
              setName("");
              setPhone("");
              setService("");
              setMessage("");
              setDate("");
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
  useEffect(() => {
    Aos.init({
      disable: window.innerWidth < 201,
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <select
                name=""
                id=""
                onChange={(e) => setService(e.target.value)}
              >
                <option value="" disabled selected>
                  Select Service
                </option>
                <option value="Home Care">Home Care</option>
                <option value="Care Service">Care Services</option>
                <option value="Child Care">Child Care</option>
                <option value="Health Consultation">Health Consultation</option>
              </select>
              <input
                type="date"
                placeholder="Email Address"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                required
                placeholder="Enter Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Send Message"}
              </button>
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
