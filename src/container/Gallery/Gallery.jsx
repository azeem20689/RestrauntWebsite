import React from 'react';
import {images} from '../../constants';
import './Gallery.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const imagesArr = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll=(direction)=>{
    if(direction === 'left'){
      scrollRef.current.scrollLeft -=300;
    } else {
      scrollRef.current.scrollLeft +=300;
    }
  }

  return (
  <div className='gallery'>
    <div className="gallery-left">
      <h4 style={{color:'white',fontSize:'20px'}}>Instagram</h4>  
      <img src={images.spoon} alt="spoon" />
      <h1 style={{color:'var(--color-golden)', marginTop:'2rem' , fontSize:'47px'}} >Photo Gallery</h1>
      <p style={{color:'white', marginBottom:'2rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate commodi vero distinctio rerum delectus </p>
      <p><a href="">View More</a></p>
    </div>
    <div className="gallery-right">
      <div className="gallery-right-images" ref={scrollRef}>
        {
          imagesArr.map((photo,index)=>(
            <div className='gallery-right-images-photo'>
              <img src={photo} alt="gallery photo" />
            </div>
          ))
        }
      </div>
      <div className="gallery-right-buttons">
        <BsArrowLeftShort className="gallery-icons" onClick={()=>{scroll('left')}} />
        <BsArrowRightShort className="gallery-icons" onClick={()=>{scroll('right')}} />
      </div>
    </div>
  </div>
  );
};

export default Gallery;
