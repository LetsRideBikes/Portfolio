
import DarkAboutKeith from './DarkAboutKeith';
import Testimonials from './Testimonials';
import { Routes, Route} from 'react-router-dom';

const DarkAbout = props =>{
  
    return (

<div className="about-me-main"> 
<Routes>
      <Route path="/*" element={<DarkAboutKeith />}/>
      <Route path="/Testimonials" element={<Testimonials />}/>
     </Routes></div>

);
}
    
export default DarkAbout;