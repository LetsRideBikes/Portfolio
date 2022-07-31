
import './DarkApp.css';
import background from './img/backdrop2.svg';
import DarkHeader from './components/DarkHeader';
import DarkPortfolioMain from './components/DarkPortfolioMain';
import DarkPortfolio from './components/DarkPortfolio';
import DarkAbout from './components/DarkAbout';
import DarkContact from './components/DarkContact';
import DarkHome from './components/DarkHome';
import DarkTestimonials from './components/DarkTestimonials';
import Redirect from './Redirect';
import coffee1 from './components/img/coffeeA.svg';
import coffee2 from './components/img/coffeeC.svg';
import coffee3 from './components/img/coffeeB.svg';
import { Routes, Route} from 'react-router-dom';



function DarkTheme() { 

  
  return (
<div className="app-container">

    <div 
    className="site_content" 
    style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize:"cover", 
      backgroundRepeat: 'no-repeat'}}>
        <img className="darkcoffee2" src={coffee2}/>
        <img className="darkcoffee3" src={coffee3}/>
        <img className="darkcoffee1" src={coffee1}/>
        <Routes>
<Route path='/Redirect' element={<Redirect />} />
</Routes>
     <div className="navigation_logo_container"><DarkHeader /></div>
     <div className="main_content"><Routes>
     <Route path="/*" element={<DarkHome />}/>
      <Route path="Portfolio/*" element={<DarkPortfolioMain />}/>
      <Route path="About/*" element={<DarkAbout />}/>
      <Route path="Contact" element={<DarkContact />}/>
      <Route path="Testimonials" element={<DarkTestimonials />}/>
     </Routes>
     </div>
     <div className="main_content_mobile"><Routes>
     <Route path="/*" element={<DarkHome />}/>
      <Route path="Portfolio/*" element={<DarkPortfolio />}/>
      <Route path="About/*" element={<DarkAbout />}/>
      <Route path="Contact" element={<DarkContact />}/>
      <Route path="Testimonials" element={<DarkTestimonials />}/>
     </Routes>
     </div>
    </div>
    </div>
  );
}


export default DarkTheme;