import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import social from "../Assest/Logos/Symbol.svg";
import social1 from "../Assest/Logos/Symbol-1.svg";
import social2 from "../Assest/Logos/Symbol-2.svg";
import social3 from "../Assest/Logos/Symbol-3.svg";
import ButtonSimple from "../Components/Buttons/ButtonSimple";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="home-conatiner">
      <div className="land-about">
        <h1>
          Your Growth
          <br />
          <span>Catalyst </span>Our Expertise
        </h1>
      </div>

      <ScrollAnimation
        animateIn="fadeIn"
        style={{ width: "100vw", marginTop: "20vh" }}
      >
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tunis+(tunis)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" className="details-box">
        <div className="detail">
          <h2>Phone</h2>
          <p>(629) 555-0129</p>
        </div>
        <div className="detail">
          <h2>Email</h2>
          <p>nafiz125432gmail.com</p>
        </div>
        <div className="detail">
          <h2>Location</h2>
          <p>4517 Washington Av Kentucky 39495</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" className="contact-container">
        <div className="about-section">
          <div className="content">
            <div className="about-content">
              <h4>Contact Us</h4>
              <h2>Get In Touch</h2>
              <p style={{ color: "var(--text-color)" }}>
                Design is this a broad category encompasses various
                technological solutions
              </p>
            </div>
            <div className="social-contact-box">
              <a href="#">
                <img src={social} alt="social" />
              </a>
              <a href="#">
                <img src={social1} alt="social" />
              </a>
              <a href="#">
                <img src={social2} alt="social" />
              </a>
              <a href="#">
                <img src={social3} alt="social" />
              </a>
            </div>
          </div>
        </div>

        <div className="form-container">
          <div className="name-container">
            <input required type="text" placeholder="First Name" />
            <input required type="text" placeholder="Last Name" />
          </div>
          <input
            style={{ width: "100%" }}
            required
            type="email"
            placeholder="Email"
          />
          <textarea />
          <ButtonSimple text={"Send"} herf={"#"} />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Contact;
