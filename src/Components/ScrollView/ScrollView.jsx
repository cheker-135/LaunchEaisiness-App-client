// ScrollView.jsx
import React from "react";
import "./ScrollView.css";
import ServiceCard from "../Cards/ServiceCard";
import ScrollAnimation from "react-animate-on-scroll";

const ScrollView = () => {
  const cards = [
    {
      imgUrl: require("../../Assest/images/Container-1.png"),
      text: "Item 1 description",
    },
    {
      imgUrl: require("../../Assest/images/Container.png"),
      text: "Item 2 description",
    },
    {
      imgUrl: require("../../Assest/images/service-5-1.jpg.png"),
      text: "Item 3 description",
    },
    {
      imgUrl: require("../../Assest/images/Container-1.png"),
      text: "Item 4 description",
    },
    {
      imgUrl: require("../../Assest/images/Container.png"),
      text: "Item 5 description",
    },
    {
      imgUrl: require("../../Assest/images/service-5-1.jpg.png"),
      text: "Item 6 description",
    },
    {
      imgUrl: require("../../Assest/images/Container-1.png"),
      text: "Item 7 description",
    },
    {
      imgUrl: require("../../Assest/images/Container.png"),
      text: "Item 8 description",
    },
    {
      imgUrl: require("../../Assest/images/service-5-1.jpg.png"),
      text: "Item 9 description",
    },
    {
      imgUrl: require("../../Assest/images/Container-1.png"),
      text: "Item 10 description",
    },
  ];

  return (
    <ScrollAnimation className="scroll-container" animateIn="fadeIn">
      {cards.map((e, i) => (
        <ServiceCard key={i} img={e.imgUrl} text={e.text} />
      ))}
    </ScrollAnimation>
  );
};

export default ScrollView;
