import React , {useState}from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs';
import './Intro.css';
import {meal} from '../../constants';

const Intro = () => {

  const [playVideo,setPlayVideo] = useState(false);
   const videoRef = React.useRef();

   const handleVideo = () => {
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlayVideo(!playVideo);
  }
  
  return (
    <div className='intro'>
    <video
    src={meal}
    ref={videoRef}
    type='video/mp4'
    loop
    controls={false}
    muted
    />
    <div className="intro-icons">
      <div className="intro-icons-div" onClick={handleVideo}>
      {
        playVideo ? <BsPauseFill  color='white' size={47} /> : <BsFillPlayFill color='white' size={47} />
      }
      </div>
    </div>
    </div>
  );
};

export default Intro;
