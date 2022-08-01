
import coverphoto from './img/bkg/moss2.jpg';
import nextarrow from './img/rightarrow3.svg';
import lastarrow from './img/leftarrow3.svg';
import abstractquote from './img/gradientquote2.svg';
import quotes from './img/quotes.png';
import quotes2 from './img/quotes2.png';
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import sun from './img/sun.svg';



const DarkTestimonials = props =>{


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
            "I've had the distinct pleasure of collaborating with Keith for over 10 years. Keith has demonstrated an exceptional aptitude for successfully managing any challenge or opportunity thrown his way. He demonstrates a wide breadth of expertise, spanning scientific pursuits to product design, project management and innovation. His professionalism, commitment and passion will propel any project forward." 
    },
    {
        name: 'Adam Fournier',
        position: 'Software Architect, Assorted Solutions',
        photo: require('./img/adamphoto.png'),
        text:
            "As a software engineer working with Keith, I appreciated his commitment to the people using our software. He worked hard to understand who we were serving in order to build better solutions. He would push hard for the best experience, but was not immovable. We were able to balance his vision for the software with the capabilities of the engineering team. Point him at your problem space and introduce him to domain experts. Keith will be a fantastic addition to your team."
    },
    {
      name: 'Michael Joseph',
      position: 'President, True Vector Management Consulting',
      photo: require('./img/mikephoto.png'),
      text:
          "Keith is a dynamic leader who draws from his wealth of technical software development experience as a product manager.  He has a design mindset and can translate business workflows and requirements into product functionality that delights the users of the product.  He has a creative eye and can design user interfaces that are intuitive and easy to use.  He also brings knowledge and expertise as a product owner in an agile setting.  Keith is a solid team player with a focus on doing what is right for the customer."
  },
  ];
  
  const [idx, setIdx] = useState(0);

    let name = testimonials[idx].name;
    let position= testimonials[idx].position;
    let photo= testimonials[idx].photo;
    let text = testimonials[idx].text;
    const [touchPosition, setTouchPosition] = useState(null)


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
        prevIndex === 0 ? testimonials.length-1 : prevIndex - 1
      )
      }


    setTouchPosition(null)
  }
    
  const rand = Math.random();
    
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
<Link to="/Testimonials" ><img className="dark-mode" src={sun}/></Link> 
 <div className="dark-home-testimonial-container" 
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
            setIdx(idx === 0 ? testimonials.length-1 : idx => (idx - 1) % testimonials.length);


          }}style={{ 
            backgroundImage: `url(${lastarrow})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '10px'}}></button>
   
    <img className='testimonial-photo'
     src={photo} 
     ></img>
    <div className='testimonial-text'>
        <h3 className='darktestimonial-name2' >{name}</h3></div>
        <div className='testimonial-text2'><h3 className='darktestimonial-title2' >{position}</h3></div>
        
        <div className='testimonial-body-container'><h3 className='darktestimonial-body2'  style={{fontStyle:"italic"}}>{text}</h3>
        </div>
        
        </div>
        
        <div className="darktestimonialDots">
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
    
export default DarkTestimonials;