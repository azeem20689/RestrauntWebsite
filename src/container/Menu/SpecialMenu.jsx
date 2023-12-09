import React from "react";
import {images} from '../../constants/'
import "./SpecialMenu.css";
import data from '../../constants/data';

const SpecialMenu = () => (
  <div className="special-menue">
    <div className="special-menue-top">
      <h3 style={{color:'white'}}>Menue That Fits You Palatte</h3>
      <img src={images.spoon} alt="menue" />
      <h1 style={{color:'var(--color-golden)',fontSize:'50px'}}>Today's Special</h1>
    </div>
    <div className="special-menue-bottom">
      <div className="special-menue-bottom-left">
        <h1 style={{color:'white' , margin:'2rem 0'}}>Soft Drinks</h1>
        {data.wines.map((e)=>(
          <div className="special-menue-bottom-left-content">
            <div className="special-menue-bottom-left-content-left">
              <h4 style={{color:'var(--color-golden)'}}>{e.title}</h4>
              <p style={{color:'white'}}>{e.tags}</p>
            </div>
            <div className="special-menue-bottom-left-content-right">
              <h5>{'---  '+e.price}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="special-menue-bottom-center">
        <img src={images.menu} alt="" />
      </div>
      <div className="special-menue-bottom-right">
      <h1  style={{color:'white', margin:'2rem 0'}}>Cold Drinks</h1>
      {data.cocktails.map((e)=>(
          <div className="special-menue-bottom-right-content">
            <div className="special-menue-bottom-right-content-left">
              <h4 style={{color:'var(--color-golden)'}}>{e.title}</h4>
              <p style={{color:'white'}}>{e.tags}</p>
            </div>
            <div className="special-menue-bottom-right-content-right">
              <h5>{'---  '+e.price}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SpecialMenu;
