import React from 'react';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='footer'>
    <div className="news-letter">
      <h4 style={{color:'white' , lineHeight:'20px',marginTop:'2rem'}} >Newsletter</h4>
      <img src={images.spoon} alt="" />
      <h1 style={{ fontSize:'40px',color:'var(--color-golden)',margin:'1rem 2rem'}} >Subscribe To Our Newsletter</h1>
      <p style={{color:'white'}} > And Never Miss An Update</p>
      <input style={{width:'50%', height:'5vh',margin:'2rem',color:'white',padding:'1rem'}}  type="text" placeholder='Enter your email address' />
      <button>Subscribe</button>
    </div>
    <div className="footer-sections">
      <div className="footer-sections-left">
        <h1 style={{color:'white'}} >Contact Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, ullam.</p>
        <p>+0124 343434</p>
        <p>+0124 343434</p>
        <p>+0124 343434</p>
      </div>
      <div className="footer-sections-center">
        <img src={images.gericht} alt="" />
        <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis!</p>
      </div>
      <div className="footer-sections-right">
      <h1 style={{color:'white'}} >Working Hours</h1>
      <p>Monday-Friday</p>
      <p>08:00am-11:00pm</p>
      <br />
      <p>Saturday-Sunday</p>
      <p>07:00am-11:00pm</p>
      </div>
    </div>
  </div>
);

export default Footer;
