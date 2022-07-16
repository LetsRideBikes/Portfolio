import bird from './img/Blackbird.png'

const Testimonials = props =>{
  
    return (
<div className='testimonials-container'><h3 className="testimonial-title">TESTIMONIALS</h3>
<div className='testimonial-entry'>
    <img className='testimonial-photo' src={bird}></img>
    <div className='testimonial-text'>
        <h3 className='titlestyle2'>JOEY SPAGHETTI</h3><h3 className="subtitlestyle modified2" style={{fontSize: "10pt"}}>CEO, Entertainment 720</h3></div>
        <div className='testimonial-body-container'><h3 className='bodystyle modified' style={{fontStyle:"italic"}}>"I loved working with Keith. He is incredibly talented and likable; not to mention charming. Women love him, men want to be him. We should all be so lucky to know such a man."</h3>
        </div>
        </div>
        <div className='line-spacer'></div>

        <div className='testimonial-entry2'>
    <img className='testimonial-photo2' src={bird}></img>
    <div className='testimonial-text2'>
        <h3 className='titlestyle2'>LAURA BINGO</h3><h3 className="subtitlestyle modified2" style={{fontSize: "10pt"}}>Director of Telekenisis, Heroes Inc.</h3></div>
        <div className='testimonial-body-container2'><h3 className='bodystyle modified' style={{fontStyle:"italic"}}>"When Keith worked with us, he always ate way more than his fair share of donuts. Other people would have one, maybe two, but every time I saw him he had at least six donuts. What did he even do with all of those donuts? Was he bringing them home? What the hell, Keith?"</h3>
        </div>
        </div>  
        <div className='line-spacer'></div>
        <div className='testimonial-entry'>
    <img className='testimonial-photo' src={bird}></img>
    <div className='testimonial-text'>
        <h3 className='titlestyle2'>EARL RUGGS</h3><h3 className="subtitlestyle modified2" style={{fontSize: "10pt"}}>Founder, Ruggs Rugs</h3></div>
        <div className='testimonial-body-container'><h3 className='bodystyle modified' style={{fontStyle:"italic"}}>"Keith still owes me $400 dollars."</h3>
        </div>
        </div> 
        <div className='line-spacer'></div>
        <div className='testimonial-entry2'>
    <img className='testimonial-photo2' src={bird}></img>
    <div className='testimonial-text2'>
        <h3 className='titlestyle2'>PAUL PIERCE</h3><h3 className="subtitlestyle modified2" style={{fontSize: "10pt"}}>Small Forward, Boston Celtics</h3></div>
        <div className='testimonial-body-container2'><h3 className='bodystyle modified' style={{fontStyle:"italic"}}>"Keith can really ball. I've personally seen him take down some of the best players in the game right now. I think he's up to almost 175 career triple-doubles. Russel Westbrook better watch his back!"</h3>
        </div>
        </div>
</div>




);
}
    
export default Testimonials;