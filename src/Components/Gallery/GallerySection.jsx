import React from "react";
import "./gallery.css";
import image from "../../Assest/images/AboutImage.png";
import image1 from "../../Assest/images/service-5-1.jpg.png";
import image2 from "../../Assest/images/service-details1-2.jpg.png";
import image3 from "../../Assest/images/service-details1-3.jpg.png";
import image4 from "../../Assest/images/aboutIMG.png";

const images = [
  {
    src: image4,
    id: 0,
  },

  {
    src: image,
    id: 1,
  },
  {
    src: image3,
    id: 2,
  },

  {
    src: image1,
    id: 3,
  },
  {
    src: image2,
    id: 4,
  },
];

const GallerySection = () => {
  return (
    <div id="gallery" className="gallery-container">
      <h2 style={{ marginBottom: "1em" }}>Gallery</h2>
      <div className="image-box">
        {images.map((e) => (
          <div className="pic" key={e.id}>
            <img src={e.src} style={{ width: "100%" }} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
