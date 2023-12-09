import React from "react";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="chef">
    <div className="chef-left">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="chef-right">
      <h1 style={{ color: "white" }}>Chef's Word</h1>
      <img src={images.spoon} alt="spoon" />
      <p> <span>&#8220;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste vitae, explicabo cum libero blanditiis velit temporibus saepe maiores consequatur nam est delectus earum iusto?</p>
      <h5 style={{color:'var(--color-golden)',fontSize:'15px'}} >Kevin Luo</h5>
      <h4 style={{color:'white'}} >Chef & Founder</h4>
      <img style={{width:'30%',marginTop:'2rem'}} src={images.sign} alt="" />
    </div>
  </div>
);

export default Chef;
