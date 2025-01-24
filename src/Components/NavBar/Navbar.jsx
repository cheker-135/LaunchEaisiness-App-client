import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Assest/Logos/logo.svg";
import ButtonSimple from "../Buttons/ButtonSimple";
import { Link } from "react-router-dom";

const Navbar = ({ auth }) => {
  const [isScolling, setIsScolling] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setIsScolling(true) : setIsScolling(false);
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={`navbar ${isScolling ? "scroll-navbar" : ""}`}>
      <img src={logo} alt="logo" />
      {auth ? (
        <ul>
          <li>
            <Link to="/user">Profile</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
      <ButtonSimple text={"Subscribe"} herf="/login" />
    </div>
  );
};

export default Navbar;
