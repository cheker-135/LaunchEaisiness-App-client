import React from "react";
import "./cards.css";
const ProcessCard = ({ title, content, logo }) => {
  return (
    <div className="container">
      <div className="container-card bg-green-box">
        <img src={logo} alt="" />
        <p className="card-title">{title}</p>
        <p className="card-description">{content}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
