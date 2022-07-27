import coverphoto from './img/bkg/moss2.jpg';
import quotes from './img/quotes.png';
import quotes2 from './img/quotes2.png';
import React, { useState, useEffect } from 'react';


const Home = props =>{



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
            'Testimonial1'
    },
    {
        name: 'Michael Joseph',
        position: 'President, True Vector',
        photo: require('./img/mikephoto.png'),
        text:
            "Testimonial2"
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
    

    
    useEffect(() => {

      const interval = setInterval(
        () => setIdx(idx => (idx + 1) % testimonials.length), 10000,
        );
      return () => {
        clearInterval(interval);
   };
   }, []);



    return (
<div className="home_main"    style={{ 
      backgroundImage: `url(${coverphoto})`, 
      backgroundRepeat: 'no-repeat'}}>
 {/* <div className="home-testimonial-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}><img className="quotes" src={quotes}/><img className="quotes2" src={quotes2}/><div className='testimonial-entry'>
    <img className='testimonial-photo'
     src={photo}
     ></img>
    <div className='testimonial-text'>
        <h3 className='testimonial-name2'>{name}</h3><h3 className='testimonial-title2' style={{fontSize: "12pt"}}>{position}</h3></div>
        <div className='testimonial-body-container'><h3 className='testimonial-body2' style={{fontStyle:"italic"}}>{text}</h3>
        </div>
        </div></div> */}

        <div className="home_headline">
          <h1 className="text1">INTUITIVE & PURPOSEFUL<br/> DESIGN PRINCIPLES</h1>
          <h1 className="text2">COMPETENT & EXPERIENCED <br/> PROJECT MANAGEMENT</h1>
          <h1 className="text3">DISCIPLINED AESTHETIC PASSION</h1>
          </div>
</div>

);
}
    
export default Home;