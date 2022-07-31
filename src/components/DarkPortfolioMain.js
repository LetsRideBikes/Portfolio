import DarkRMSPortfolioSlides from './DarkRMSPortfolioSlides';
import DarkCLPortfolioSlides from './DarkCLPortfolioSlides';
import { Routes, Route, Link} from 'react-router-dom';
import DarkAverPortfolioSlides from './DarkAverPortfolioSlides';
import DarkEregPortfolioSlides from './DarkEregPortfolioSlides';
import DarkMobilePortfolioSlides from './DarkMobilePortfolioSlides';
import DarkRMSMobilePortfolioSlides from './DarkRMSMobilePortfolioSlides';
import DarkBublPortfolioSlides from './DarkBublPortfolioSlides';




const DarkPortfolioMain = props => {
    
  
    return (
    
    
    
    <div className="portfolio_content">
        

<div className="current_slide_container">


<Routes>
    <Route path="" element={<DarkRMSPortfolioSlides />}></Route>
<Route path="Navigator" element={<DarkRMSPortfolioSlides />}></Route>
<Route path="ColorLine" element={<DarkCLPortfolioSlides />}></Route>
<Route path="Averview" element={<DarkAverPortfolioSlides />}></Route>
<Route path="ERegistration" element={<DarkEregPortfolioSlides />}></Route>
<Route path="MobileApp" element={<DarkMobilePortfolioSlides />}></Route>
<Route path="NavigatorMobile" element={<DarkRMSMobilePortfolioSlides />}></Route>
<Route path="Bubl" element={<DarkBublPortfolioSlides />}></Route>
    </Routes> 
</div>


<div className='portfolio_navigation'>
<nav className="portfolio_nav_container">
     <button  className="port_nav_button">
      <Link to="Navigator" className="darkport_nav_link">NAVIGATOR RECOVERY MANAGEMENT SYSTEM</Link> </button>
      <button  className="port_nav_button">
      <Link to="NavigatorMobile" className="darkport_nav_link">NAVIGATOR MOBILE APP</Link> </button>
      <button  className="port_nav_button">
      <Link to="Averview" className="darkport_nav_link">AVERVIEW TELEHEALTH PLATFORM</Link> </button>
      <button  className="port_nav_button">
      <Link to="ERegistration" className="darkport_nav_link">PATIENT REGISTRATION AND INTAKE FORMS</Link> </button>
      <button  className="port_nav_button">
      <Link to="ColorLine" className="darkport_nav_link">COLOR LINE LAB ORDERS & RANDOMIZATION</Link> </button>
      <button  className="port_nav_button">
      <Link to="MobileApp" className="darkport_nav_link">MOBILE PATIENT ENGAGEMENT & SMS ENROLLMENT</Link> </button> 
        <button  className="port_nav_button">
      <Link to="Bubl" className="darkport_nav_link">BUBL SOAP SHOP</Link> </button> 
      </nav>
</div>
</div>
       
        );
    }

  
    
    export default DarkPortfolioMain;