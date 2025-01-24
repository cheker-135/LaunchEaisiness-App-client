import React from "react";
import "./break.css";
import ButtonSimple from "../Buttons/ButtonSimple";
import ScrollAnimation from "react-animate-on-scroll";

const Break = () => {
  return (
    <ScrollAnimation className="break-container" animateIn="fadeIn">
      <div className="content">
        <h3>Successful Expert</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </p>
        <ButtonSimple text={"Subscribe"} herf={"#"} />
      </div>
    </ScrollAnimation>
  );
};

export default Break;
