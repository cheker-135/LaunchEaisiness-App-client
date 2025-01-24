import React from "react";
import { Link } from "react-router-dom";

const ServiceCardSimple = ({ title, content, img, href }) => {
  return (
    <div className="service-simple">
      <img src={img} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>{content}</p>
        <Link to={href}>Read More</Link>
      </div>
    </div>
  );
};

export default ServiceCardSimple;
