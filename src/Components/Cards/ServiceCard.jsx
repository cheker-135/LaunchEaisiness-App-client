import React from "react";
import ButtonSimple from "../Buttons/ButtonSimple";
import "./cards.css";

const ServiceCard = ({ img, text }) => {
  return (
    <div className="service-card">
      <img src={img} alt="img" />
      <div className="content">
        <p>{text}</p>
        <ButtonSimple text={"read more"} herf={"#"} />
      </div>
    </div>
  );
};

export default ServiceCard;
