import React from 'react';
import './Slideshow.css';
import rms1 from './img/RMSSignIn.png';
import rms2 from './img/RMSDashboard.png';
import rms3 from './img/RMSReferrals.png';
import rms4 from './img/RMSClientManagement.png';
import rms5 from './img/RMSLabInbox.png';
// import rms6 from './img/RMSLabInbox.png';
import rms7 from './img/RMSActivities.png';
import rms8 from './img/RMSSearch.png';
import rms9 from './img/RMSProgress.png';
import rms10 from './img/RMSDxHistory.png';
import rms11 from './img/RMSSupport.png';
// import rms12 from './img/RMSTreatmentPlan.png';
import rms13 from './img/RMSTreatmentPlan2.png';
import rms14 from './img/RMSEngagement.png';
import rms15 from './img/RMSProfileMain.png';
import rms16 from './img/RMSRiskMovers.png';
import rms17 from './img/RMSOutcomes.png';
import { useState } from "react";

const Slides = [rms1, rms2, rms3, rms4, rms5, rms7, rms8, rms9, rms10, rms11, rms13, rms14, rms15, rms16, rms17];
const delay = 15000;

function RMSSlideshow() {
console.log(rms1);
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

  export default RMSSlideshow;