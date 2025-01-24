import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const ButtonOutline = ({ text, herf, func }) => {
  return (
    <Link onClick={() => func()} to={`${herf}`} className="button-outline">
      {text}
    </Link>
  );
};

export default ButtonOutline;
