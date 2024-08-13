import React from "react";
import "./Gallery.scss";

import img1 from "../../assets/mazatlan/mazatlan-1.jpg";
import img2 from "../../assets/mazatlan/mazatlan-2.jpg";
import img3 from "../../assets/mazatlan/mazatlan-3.jpg";
import img4 from "../../assets/mazatlan/mazatlan-4.jpg";
import img5 from "../../assets/mazatlan/mazatlan-5.jpg";
import img6 from "../../assets/mazatlan/mazatlan-6.jpg";
import img7 from "../../assets/mazatlan/mazatlan-7.jpg";
import img8 from "../../assets/mazatlan/mazatlan-8.jpg";
import img9 from "../../assets/mazatlan/mazatlan-9.jpg";
import img10 from "../../assets/mazatlan/mazatlan-10.jpg";
import img11 from "../../assets/mazatlan/mazatlan-11.jpg";
import img12 from "../../assets/mazatlan/mazatlan-12.jpg";
import img13 from "../../assets/mazatlan/mazatlan-13.jpg";
import img14 from "../../assets/mazatlan/mazatlan-14.jpg";
import img15 from "../../assets/mazatlan/mazatlan-15.jpg";
import img16 from "../../assets/mazatlan/mazatlan-16.jpg"; 
import img17 from "../../assets/mazatlan/mazatlan-17.jpg"; 
import img18 from "../../assets/mazatlan/mazatlan-18.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18
];

const Gallery = () => {
  return (
    <div className="container">
      <div className="mazatlan-container">
        <div className="mazatlan-container__title">
          {/* <h3>Mazatlán</h3> */}
          <h2>Explore the best of Mazatlán</h2>
        </div>

        <div className="mazatlan-gallery">
          {images.map((image, index) => (
            <div key={index} className="mazatlan-gallery__item">
              <img src={image} alt={`Mazatlán view ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
