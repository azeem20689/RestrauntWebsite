import React from "react";
import { images } from "../../constants/";
import "./AboutUs.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const AboutUs = () => (
  <div className="aboutus ">
    <div className="g-letter">
      <img className="g-img" src={images.G} alt="g letter" />
    </div>
    <div className="left-aboutus">
      <div className="left-aboutus-content">
        <h1 style={{ color: "var(--color-golden)" }}>About Us</h1>
        <img src={images.spoon} alt="spoon" />
        <p style={{ color: "white" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          odio laudantium esse hic dolorum officiis, animi corrupti natus fuga
          tempora.
        </p>
        <p style={{ color: "white", border: "1px solid white" }}>
          <a href="">Know More</a>
        </p>
      </div>
    </div>
    <div className="center-aboutus">
      <img src={images.knife} alt="knife image" />
    </div>
    <div className="right-aboutus">
      <div className="right-aboutus-content">
        <h1 style={{ color: "var(--color-golden)" }}>Our History</h1>
        <img src={images.spoon} alt="spoon" />
        <p style={{ color: "white" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          odio laudantium esse hic dolorum officiis, animi corrupti natus fuga
          tempora.
        </p>
        <p style={{ color: "white", border: "1px solid white" }}>
          <a href="">Know More</a>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
