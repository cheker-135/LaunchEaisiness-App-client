import React from "react";
import "./button.css";

const ButtonGradiant = ({ text, herf }) => {
  return (
    <a href={`#${herf}`} className="button-gradiant">
      {text}
    </a>
  );
};

export default ButtonGradiant;
