
import quotes from './img/quotes.png'
import quotes2 from './img/quotes2.png'
import titleimg from './img/titleimg.png'
import man1 from './img/man1.PNG';
import man2 from './img/man2.PNG';
import woman1 from './img/woman1.PNG';
import woman2 from './img/woman2.PNG';
import {useNavigate} from 'react-router-dom';

const Testimonials = props =>{
    const navigate = useNavigate();
    return (
<div className='testimonials-container'><img className="quotes" src={quotes}/><img className="quotes2" src={quotes2}/><div className="testimonial-title"><img className="titleimage" src={titleimg} /></div>


<div className='testimonial-entry'>
    <img className='testimonial-photo' src={man1}></img>
    <div className='testimonial-text'>
        <h3 className='titlestyle2'>FIRST LAST</h3><h3 className="subtitlestyle modified2" style={{fontSize: "10pt"}}>Title, Company</h3></div>
        <div className='testimonial-body-container'><h3 className='bodystyle modified' style={{fontStyle:"italic"}}>"Placeholder testimonial"</h3>
        </div>
        </div>
        <div className='line-spacer'></div>

        <div className='testimonial-entry2'>
    <img className='testimonial-photo2' src={woman1}></img>
    <div className='testimonial-text2'>
        <h3 className='titlestyle2'>FIRST LAST</h3><h3 className="subtitlestyle modified2" style={{fontSize: "10pt"}}>Title, Company</h3></div>
        <div className='testimonial-body-container2'><h3 className='bodystyle modified' style={{fontStyle:"italic"}}>"Placeholder testimonial"</h3>
        </div>
        </div>  
        <div className='line-spacer'></div>
        <div className='testimonial-entry'>
    <img className='testimonial-photo' src={man2}></img>
    <div className='testimonial-text'>
        <h3 className='titlestyle2'>FIRST LAST</h3><h3 className="subtitlestyle modified2" style={{fontSize: "10pt"}}>Title, Company</h3></div>
        <div className='testimonial-body-container'><h3 className='bodystyle modified' style={{fontStyle:"italic"}}>"Placeholder testimonial"</h3>
        </div>
        </div> 
        <div className='line-spacer'></div>
        <div className='testimonial-entry2'>
    <img className='testimonial-photo2' src={woman2}></img>
    <div className='testimonial-text2'>
        <h3 className='titlestyle2'>FIRST LAST</h3><h3 className="subtitlestyle modified2" style={{fontSize: "10pt"}}>Title, Company</h3></div>
        <div className='testimonial-body-container2'><h3 className='bodystyle modified' style={{fontStyle:"italic"}}>"Placeholder testimonial"</h3>
        </div>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
</div>




);
}
    
export default Testimonials;