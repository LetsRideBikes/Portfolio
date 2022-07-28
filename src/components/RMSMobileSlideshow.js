import React from 'react';
import './Slideshow.css';
import rmsm1 from './img/RMSMobile1.png';
import rmsm2 from './img/RMSMobile2.png';
import rmsm3 from './img/RMSMobile3.png';
import { useState } from "react";
import nextarrow from './img/rightarrow2.svg';
import lastarrow from './img/leftarrow2.svg';


const Slides = [rmsm1, rmsm2, rmsm3];
const delay = 15000;


function RMSMobileSlideshow() {


  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const [touchPosition, setTouchPosition] = useState(null)
  // ...
  const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
  }
  
  const handleTouchMove = (e) => {
    const touchDown = touchPosition
  
    if(touchDown === null) {
        return
    }
  
    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch
  
    if (diff > 5) {
      setIndex((prevIndex) =>
      prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
    )
    }
  
    if (diff < -5) {
      setIndex((prevIndex) =>
      prevIndex === Slides.length - 1 ? 0 : prevIndex - 1
    )
    }
  
    setTouchPosition(null)
  }


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {resetTimeout();};
  }, [index]);

    return (
      <div className="slideshow" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <button className="next-slide" onClick={() => {
            setIndex(idx => (idx + 1) % Slides.length);
          }}style={{ 
            
            backgroundImage: `url(${nextarrow})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '10px'}}></button>
             <button className="last-slide" onClick={() => {
            setIndex(idx => (idx - 1) % Slides.length);
          }}style={{ 
            backgroundImage: `url(${lastarrow})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '10px'}}></button>
        <div className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
          {Slides.map((imageSource, index) => (
           <img 
            className="slide" 
            key={index} 
            src={imageSource}
            alt="Slide"
            />
          ))}
        </div>



        <div className="slideshowDots">
        {Slides.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
      </div>




      </div>
      
    );
  }

  export default RMSMobileSlideshow;