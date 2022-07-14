import React from 'react';
import './Slideshow.css';
import rmsm1 from './img/RMSMobile1.png';
import rmsm2 from './img/RMSMobile2.png';
import rmsm3 from './img/RMSMobile3.png';


const Slides = [rmsm1, rmsm2, rmsm3];
const delay = 15000;

function RMSMobileSlideshow() {

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
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
      <div className="slideshow">
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