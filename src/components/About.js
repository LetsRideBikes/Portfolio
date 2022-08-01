
import AboutKeith from './AboutKeith';
import Testimonials from './Testimonials';
import { Routes, Link, Route} from 'react-router-dom';
import moon from './img/moon.svg';

const About = props =>{
  
    return (

<div className="about-me-main"> 
<Routes>
      <Route path="/*" element={<AboutKeith />}/>
      <Route path="/Testimonials" element={<Testimonials />}/>
     </Routes>
     <Link to="/Dark/About" ><img className="light-mode" src={moon}/></Link>
     </div>

);
}
    
export default About;