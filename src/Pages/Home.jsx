import React, { useEffect } from "react";
import "./style.css";
import ButtonSimple from "../Components/Buttons/ButtonSimple";

import AboutImg from "../Assest/images/AboutImage.png";
import Worker from "../Assest/images/worker.png";

import feature from "../Assest/Logos/event-icon_1-1.svg.png";
import feature1 from "../Assest/Logos/event-icon_1-2.svg.png";
import feature2 from "../Assest/Logos/event-icon_1-3.svg.png";

import ScrollView from "../Components/ScrollView/ScrollView";
import TeamCards from "../Components/Cards/TeamCards";
import Break from "../Components/Break/Break";
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="home-conatiner">
      <div className="land-container">
        <div className="land-content">
          <h1>
            Empowering
            <br />
            <span>businesses</span>
            <br />
            brighter
          </h1>
          <p>
            We have been operating for over a decade, providing top-notch
            services to our clients and building strong track reco industry been
            operating
          </p>
          <ButtonSimple text={"Contact us"} herf="contact" />
        </div>
      </div>

      <ScrollAnimation className="about-section" animateIn="fadeIn">
        <img src={AboutImg} alt="about img" />
        <div className="content">
          <div className="about-content">
            <h4>About Us</h4>
            <h2>Maximizing Through the Strategic</h2>
            <p style={{ color: "var(--text-color)" }}>
              Lorem Ipsum is simply dummy a of the printing and type setting
              industry Loreaim Ipsum has been the industry's standard dummy
            </p>
            <p style={{ color: "var(--text-color)" }}>
              Lorem Ipsum is simply dummy a of the printing and type setting
              industry Loreaim Ipsum has been the industry's standard dummy
            </p>
          </div>
          <ButtonSimple text={"Read More"} herf="/about" />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <div className="services-section">
          <h4>Our Services</h4>
          <h2>Navigate the Path to Success</h2>
        </div>
      </ScrollAnimation>

      <ScrollView />

      <ScrollAnimation animateIn="fadeIn">
        <div className="about-section feature-bg">
          <img src={Worker} alt="about img" style={{ marginTop: "4.5%" }} />
          <div className="content" style={{ paddingBlock: "5em" }}>
            <div className="about-content">
              <h4>Our Features</h4>
              <h2>Unlock Business Your Potential</h2>
            </div>
            <div className="features">
              <div className="feature">
                <img src={feature} alt="feature" />
                <div className="feature-content">
                  <h2>Best Implementation</h2>
                  <p>
                    Ished fact that a reader will be distrol acted bioiiy desig
                    the.ished fact that a reader will distrol acted bioiiy
                  </p>
                </div>
              </div>
              <div className="feature">
                <img src={feature1} alt="feature" />
                <div className="feature-content">
                  <h2>Design make for you</h2>
                  <p>
                    Sreader will be distrol acted bioiiy desig the.ished fa that
                    a reader will be distrol acted bioiiy desig the.ished
                  </p>
                </div>
              </div>
              <div className="feature">
                <img src={feature2} alt="feature" />
                <div className="feature-content">
                  <h2>Finished the process</h2>
                  <p>
                    Distrol acted bioiiy desig the.ished fact that a reader will
                    distrol acted bioiiy desig the.ished fact that a reader.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <div className="team-container">
          <h4>Our Team</h4>
          <h2>Strategic Solutions for Business Growth</h2>
        </div>
      </ScrollAnimation>

      <TeamCards />

      <Break />
    </div>
  );
};

export default Home;
