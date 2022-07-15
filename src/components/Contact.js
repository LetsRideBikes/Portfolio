import face from './img/face.png';
import {Link} from 'react-router-dom';
const Contact = props =>{
  
    return (
<div className="contact-main"><img className="contact-face" src= {face} alt="me :)"/>

<div className="contact-info">
    <h1 className="contact-entry">802.881.7480</h1>
    <h1 className="contact-entry">keithlavoieVT@gmail.com</h1>
    <h1 className="contact-entry2"><Link
    style={{letterSpacing: '0.5ch', textDecoration: 'none', color:'#fdfdfd'}}
        to="/Redirect"
        target="_blank"
        rel="noreferrer"> <a href="https://www.linkedin.com/in/keith-lavoie-73844a40/" target="_blank" rel="noreferrer">
    <span className="contact-linkedin">Visit my Linked</span>
    <span className="contact-linkedin2">in</span></a>
      </Link>
</h1></div></div>



);
}
    
export default Contact;