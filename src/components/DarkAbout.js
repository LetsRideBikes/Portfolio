
import DarkAboutKeith from './DarkAboutKeith';
import Testimonials from './Testimonials';
import { Routes, Route, Link} from 'react-router-dom';
import sun from './img/sun.svg';

const DarkAbout = props =>{
  
    return (

<div className="about-me-main"> 

<Routes>
      <Route path="/*" element={<DarkAboutKeith />}/>
      <Route path="/Testimonials" element={<Testimonials />}/>
     </Routes>
     <Link to="/About" ><img className="dark-mode" src={sun}/></Link></div>

);
}
    
export default DarkAbout;