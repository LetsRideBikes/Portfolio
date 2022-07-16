
import AboutKeith from './AboutKeith';
import Testimonials from './Testimonials';
import { Routes, Route} from 'react-router-dom';

const About = props =>{
  
    return (

<div className="about-me-main"> 
<Routes>
      <Route path="/*" element={<AboutKeith />}/>
      <Route path="/Testimonials" element={<Testimonials />}/>
     </Routes></div>

);
}
    
export default About;