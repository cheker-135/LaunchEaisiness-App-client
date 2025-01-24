import React from "react";
import ButtonSimple from "../Components/Buttons/ButtonSimple";
import img from "../Assest/images/service-details1-1.jpg.png";
import GallerySection from "../Components/Gallery/GallerySection";
import ServiceForm from "../Components/Forms/ServiceForm";
import { useState } from "react";
import { Button } from "@mui/material";

const ServiceDetails = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="home-conatiner">
      <div className="details-top">
        <h2>Service Title</h2>
      </div>
      <div className="applay-top">
        <img src={img} alt="service img" />

        <div className="content">
          <h4>apply</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptate modi quisquam a eveniet illum, eum repudiandae
            reprehenderit sunt odit saepe soluta impedit fugit tempore officiis,
            possimus aliquid, labore quaerat!
          </p>

          <Button
            style={{
              padding: "1.1em 2em",
              width: "14em",
              display: "flex",
              justifyContent: "center",
              background: "var(--secondary-color)",
              color: "var(--text-color)",
              fontSize: "1rem",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s",
              zIndex: 10,
              fontFamily: '"Poppins", sans-serif',
              textDecoration: "none",
            }}
            onClick={handleOpen}
          >
            Apply Now
          </Button>
        </div>
      </div>
      <div className="information-service-sec">
        <div className="info-bloc">
          <h2>Maximizing Profita Through</h2>
          <p style={{ color: "var(--text-color)" }}>
            Web designing in a powerful way of just not an only professions,
            however, in a passion Company. have a to a tendency to believe the
            idea that smart looking of any website
          </p>
          <ul>
            <li>
              Navigate the Path to Success Achieve Your Business Goals with
              Confidenc
            </li>
            <li>A business consultant is a professional who provides expert</li>
            <li>
              Guidance to businesses on various aspects such as management
            </li>
          </ul>
        </div>

        <div className="info-bloc">
          <h2>Navigate the Path to Success</h2>
          <p style={{ color: "var(--text-color)" }}>
            Web designing in a powerful way of just not an only professions,
            however, in a passion Company. have a to a tendency to believe the
            idea that smart looking of any website is the impression on
            visitors.Web designing in a powerful way only professions Web
            designing in a powerf
          </p>
          <p style={{ color: "var(--text-color)" }}>
            Web designing in a powerful way of just not an only professions,
            however, in a passion Company. have a to a tendency to believe the
            idea that smart looking of any website is the impression on
            visitors.Web designing in a powerful way only professions Web
            designing in a powerf
          </p>
        </div>
      </div>
      <GallerySection />
      <ServiceForm open={open} handleClose={handleClose} />
    </div>
  );
};

export default ServiceDetails;
