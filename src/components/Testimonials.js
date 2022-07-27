
import coverphoto from './img/bkg/moss2.jpg';
import nextarrow from './img/rightarrow2.svg';
import lastarrow from './img/leftarrow2.svg';
import abstractquote from './img/gradientquote2.svg';
import quotes from './img/quotes.png';
import quotes2 from './img/quotes2.png';
import React, { useState, useEffect } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group'; 


const Testimonials = props =>{



const testimonials = [
    {
        name: 'Chris Powell',
        position: 'CEO, ThinkMD',
        photo: require('./img/chrisphoto.png'),
        text:
            "Keith is a passionate and committed colleague.  He has the unique ability to blend vision, market input and current product features into a compelling story.  Visualizing the future in a new market with new products is best served by strong concept visualization and prototyping and this is where Keith has exceptional skills.  Wrapping this with strong product management processes is a winning formula that Keith brings to the table."
            
    },
    {
        name: 'Jill Warrington',
        position: 'Laboratory Director, VT Dept of Health',
        photo: require('./img/jillphoto.png'),
        text:
            'Keith is a passionate and committed colleague. He has the unique ability to blend vision, market input and current product features into a compelling story. Visualizing the future in a new market with new products is best served by strong concept visualization and prototyping and this is where Keith has exceptional skills. Wrapping this with strong product management processes is a winning formula that Keith brings to the table.'
    },
    {
        name: 'Michael Joseph',
        position: 'President, True Vector',
        photo: require('./img/mikephoto.png'),
        text:
            "Keith is a passionate and committed colleague. He has the unique ability to blend vision, market input and current product features into a compelling story. Visualizing the future in a new market with new products is best served by strong concept visualization and prototyping and this is where Keith has exceptional skills. Wrapping this with strong product management processes is a winning formula that Keith brings to the table."
    },
  ];
  
  const [idx, setIdx] = useState(0);

    let name = testimonials[idx].name;
    let position= testimonials[idx].position;
    let photo= testimonials[idx].photo;
    let text = testimonials[idx].text;
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
      setIdx((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    }
  
    if (diff < -5) {
      setIdx((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex - 1
    )
    }
  
    setTouchPosition(null)
  }
    
//   const rand = Math.random();
    
    useEffect(() => {

      const interval = setInterval(
        () => setIdx(idx => (idx + 1) % testimonials.length), 120000,
        );
      return () => {
        clearInterval(interval);
   };
   }, []);



    return (
<div className="testimonials_main">
 <div className="home-testimonial-container" 
onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}
 >
    <img className="quotes" src={quotes}/>
    <img className="quotes2" src={quotes2}/>
    <div className='testimonial-entry'>
    <button className="next-testimonial" onClick={() => {
            setIdx(idx => (idx + 1) % testimonials.length);
          }}style={{ 
            
            backgroundImage: `url(${nextarrow})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '10px'}}></button>
             <button className="last-testimonial" onClick={() => {
            setIdx(idx => (idx - 1) % testimonials.length);
          }}style={{ 
            backgroundImage: `url(${lastarrow})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '10px'}}></button>
    
    <img className='testimonial-photo'
     src={photo} 
     ></img>
    <div className='testimonial-text'>
        <h3 className='testimonial-name2' >{name}</h3></div>
        <div className='testimonial-text2'><h3 className='testimonial-title2' >{position}</h3></div>
        
        <div className='testimonial-body-container'><h3 className='testimonial-body2'  style={{fontStyle:"italic"}}>{text}</h3>
        </div>
        </div>
        <div className="testimonialDots">
        {testimonials.map((_, index) => (
          <div key={index} className={`testimonialDot${index === idx ? " active" : ""}`} onClick={() => {
            setIdx(index);
          }}></div>
        ))}
      </div>
        </div>

       
</div>

);
}
    
export default Testimonials;