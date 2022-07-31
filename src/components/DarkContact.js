
import {Link} from 'react-router-dom';
// import Resume from './docs/KeithLavoie_Resume2022.pdf'
import Bird from './Bird';
import DarkMessageMe from './DarkMessageMe';
import React, { useState, useEffect } from 'react';










const DarkContact = props =>{
  
    
        
        const [toggle, setToggle] = useState(false)
        
        const handleClick = () => { 
          
          setToggle(!toggle);
          
        }


    return (
<div className="contact-main">
<Bird 
      handleClick={handleClick}
       toggle={toggle}
        />
    {/* <img className="contact-face" src= {face} alt="me :)"/> */}

<div className="darkcontact-info">
    <h1 className="darkcontact-entry">☎ 802.881.7480</h1>
    <h1 className="darkcontact-entry">✉ keithlavoievt@gmail.com</h1>
    <h1 className="darkcontact-entry2"><Link
    style={{letterSpacing: '0.5ch', textDecoration: 'none', color:'#fdfdfd'}}
        to="/Redirect"
        target="_blank"
        rel="noreferrer"> <a href="https://www.linkedin.com/in/keith-lavoie-73844a40/" target="_blank" rel="noreferrer">
    <span className="darkcontact-linkedin">👨‍💼 Visit my Linked</span>
    <span className="darkcontact-linkedin2">in</span></a>
      </Link>
      
</h1><a className="darkdownload-resume" href="/docs/KeithLavoie_Resume2022.pdf" download>📃 Download My Resume</a></div>
<div className="message-me-container">
<DarkMessageMe />

</div>


</div>



);
}
    
export default DarkContact;