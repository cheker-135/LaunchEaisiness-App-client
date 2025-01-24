import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const ButtonSimple = ({ text, herf, func }) => {
  return (
    <Link
      onClick={() => func()}
      to={`${herf != undefined ? herf : ""}`}
      className="button-simple"
    >
      {text}
    </Link>
  );
};

export default ButtonSimple;
