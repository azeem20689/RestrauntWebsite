import React from 'react';
import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';

const Header = () => (
  <div className='header'>
    <div className="left">
      <SubHeading title="Chase The New Flavour"/>
      <h1 className='left-heading'>THE KEY TO FINE <br />DINING</h1>
      <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus, voluptatum quos voluptates est dolorum a quas minus cupiditate error.</p>
      <a><p>Explore Menu </p></a>
    </div>
    <div className="right">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
