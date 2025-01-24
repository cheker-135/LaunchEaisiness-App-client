import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ServiceCardSimple from "../Components/Cards/ServiceCardSimple";

const Service = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const cards = [
    {
      imgUrl: require("../Assest/images/Services/service-1-1.jpg.png"),
      title: "Title 1",
      text: "Item 1 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-2.jpg.png"),
      title: "Title 2",
      text: "Item 2 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-3.jpg.png"),
      title: "Title 3",
      text: "Item 3 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-4.jpg.png"),
      title: "Title 4",
      text: "Item 4 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-5.jpg.png"),
      title: "Title 5",
      text: "Item 5 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-6.jpg.png"),
      title: "Title 6",
      text: "Item 6 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-1.jpg.png"),
      title: "Title 7",
      text: "Item 7 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-2.jpg.png"),
      title: "Title 8",
      text: "Item 8 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-3.jpg.png"),
      title: "Title 9",
      text: "Item 9 description",
    },
    {
      imgUrl: require("../Assest/images/Services/service-1-4.jpg.png"),
      title: "Title 10",
      text: "Item 10 description",
    },
  ];

  return (
    <div className="home-conatiner">
      <div className="land-about service-land">
        <h1>
          Your Growth
          <br />
          <span>Catalyst </span>Our Expertise
        </h1>
      </div>

      <div className="simples-cards-container">
        {cards.map((e, i) => (
          <ScrollAnimation key={i} animateIn="fadeIn" delay={i * 100}>
            <ServiceCardSimple
              title={e.title}
              content={e.text}
              img={e.imgUrl}
              href={"/services/details"}
            />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Service;
