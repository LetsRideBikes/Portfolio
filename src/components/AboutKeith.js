import photo from './img/aboutmephoto2.png'
import { Link} from 'react-router-dom';


const AboutKeith = props =>{
  
 
    return (
<div className='about_me_container'>


    <div className='about_me textbody_container'>
        <h2 className="titlestyle" style={{fontSize: "18pt", marginBottom: "5%", animationDelay: "1.2s"}}>Hello!</h2>
        <h3 className="bodystyle">

        I'm Keith Lavoie, a New England native with roots in Burlington, Vermont. I've been working with 
        healthcare companies for over ten years to solve unique problems and bring their vision to life.  
        <br/><br/> 
        Presently, I work in software product design and management as a Solutions Architect. Though as a natural jack-of-all-trades, I've worn many different hats since the start of my 
        career- A persistent drive to learn new things has put me at the helm of some truly fascinating projects and initiatives: from designing robotics 
        workflows, to building state-of-the-art laboratory facilities, to developing innovative healthcare software. Constant exposure to the most critical and strategic business requirements has allowed me to develop a keen sense of 
        domain interdependencies and the literacy to navigate them, as well as a method to efficiently and consistently plot paths to success. 
        <br/><br/> 
        When it comes to design, the principles that I tend to lean on most are those derived from the psychology of human interaction. I believe that the relationship a 
        user has with the product they use must be authentic, empathetic and consistent. Good product design should improve a user's quality of life. Beyond design, I'm most driven when doing
        good, purposeful work and working with good people. Good work is a humble victory that tends to leads to more good work, and my best work comes when I'm pushing myself and taking risks. 
        <br /><br />
        My personal philosophy is to always try to be surrounded by people smarter than me. The more I learn, the more I discover just how much else there is 
        to know. When I'm not immersed in a creative project with lofi beats in my headphones, you can find me behind a table saw, mountain bike 
        handlebars, paddles or ski poles. I love the great outdoors and believe strongly in a duty to protect our environment. I always appreciate the opportunity 
        to work with brands that share the same values.
        <br /><br />
        Thanks for taking the time to read a little bit about me, and I look forward to finding out how I can help take your company to the next
        level of success!
        </h3>
        <div className="testimonial-button-container"><Link to="Testimonials"><button className="testimonials-button">Read what other people have to say about me...</button></Link></div>

       </div>
       <div className="about_me_photo"style={{ backgroundImage: `url(${photo})`}}></div>


</div>



);
}
    
export default AboutKeith;