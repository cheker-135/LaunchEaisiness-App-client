import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import aboutIMG from "../Assest/images/aboutIMG.png";
import ProcessCard from "../Components/Cards/ProcessCard";

import one from "../Assest/Logos/one_17136528.png";
import two from "../Assest/Logos/two_17136515.png";
import three from "../Assest/Logos/three_17136500.png";
import four from "../Assest/Logos/four_17136467.png";

import goal from "../Assest/images/Background.png";
import goal2 from "../Assest/images/Background-1.png";
import goal3 from "../Assest/images/Background-2.png";
import goal4 from "../Assest/images/Background-3.png";
import goalImg from "../Assest/images/goalIMg.png";

import SponsorsSlider from "../Components/Slider/SponsorsSlider";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="home-conatiner">
      <div className="land-about">
        <h1>
          Revolutionizing the Unique
          <br />
          <span>Business</span> Landscape
        </h1>
      </div>

      <ScrollAnimation className="about" animateIn="fadeIn">
        <div className="content">
          <h4>BizMaster</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum
            quo nostrum quaerat aliquid repellendus aperiam, quae id quod facere
            similique eaque enim maxime soluta odit? Beatae tempore
            exercitationem molestiae.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            maiores ratione inventore hic autem architecto quaerat repudiandae?
            Expedita accusantium voluptatem optio. Enim reprehenderit ratione
            cum quidem exercitationem autem debitis necessitatibus.
          </p>
        </div>
        <img src={aboutIMG} alt="about" />
      </ScrollAnimation>

      <ScrollAnimation className="process-section" animateIn="fadeIn">
        <h4>Work Process</h4>
      </ScrollAnimation>

      <ScrollAnimation className="process-cards" animateIn="fadeIn">
        <ProcessCard
          title={"Growth Acceler"}
          content={
            "hic autem architecto quaerat repudiandae? Expedita accusantium voluptatem optio"
          }
          logo={one}
        />
        <ProcessCard
          title={"Growth Acceler"}
          content={
            "hic autem architecto quaerat repudiandae? Expedita accusantium voluptatem optio"
          }
          logo={two}
        />
        <ProcessCard
          title={"Growth Acceler"}
          content={
            "hic autem architecto quaerat repudiandae? Expedita accusantium voluptatem optio"
          }
          logo={three}
        />
        <ProcessCard
          title={"Growth Acceler"}
          content={
            "hic autem architecto quaerat repudiandae? Expedita accusantium voluptatem optio"
          }
          logo={four}
        />
      </ScrollAnimation>

      <ScrollAnimation className="process-section" animateIn="fadeIn">
        <h4>Our Goals</h4>
      </ScrollAnimation>

      <ScrollAnimation className="goal-section" animateIn="fadeIn">
        <img src={goalImg} alt="goal img" />
        <div className="content">
          <div className="goal">
            <img src={goal} alt="goal" />
            <h2>Networ Infra Tructure Solutions</h2>
            <p>IT Technology is a category a encompassing</p>
          </div>
          <div className="goal">
            <img src={goal2} alt="goal" />
            <h2>IT Training and most a the Education</h2>
            <p>IT Technology is a category a encompassing</p>
          </div>
          <div className="goal">
            <img src={goal3} alt="goal" />
            <h2>Technology solutions for a brighter</h2>
            <p>IT Technology is a category a encompassing</p>
          </div>
          <div className="goal">
            <img src={goal4} alt="goal" />
            <h2>IT Projec Manage Services</h2>
            <p>IT Technology is a category a encompassing</p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <div className="process-section">
          <h4>Sponcers</h4>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <SponsorsSlider />
      </ScrollAnimation>
    </div>
  );
};

export default About;
