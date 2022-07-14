import React from 'react';
import './Slideshow.css';
import aver1 from './img/aver1.png';
import aver2 from './img/aver2.png';
import aver3 from './img/aver3.png';
import aver4 from './img/aver4.png';
import aver5 from './img/aver5.png';
import aver6 from './img/aver6.png';


const Slides = [aver1, aver2, aver3, aver4, aver5, aver6];
const delay = 15000;

function Averslides() {

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

  export default Averslides;