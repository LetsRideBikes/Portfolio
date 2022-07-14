import RMSPortfolioSlides from './RMSPortfolioSlides';
import CLPortfolioSlides from './CLPortfolioSlides';
import { Routes, Route, Link} from 'react-router-dom';
import AverPortfolioSlides from './AverPortfolioSlides';
import EregPortfolioSlides from './EregPortfolioSlides';
import MobilePortfolioSlides from './MobilePortfolioSlides';
import RMSMobilePortfolioSlides from './RMSMobilePortfolioSlides';
import BublPortfolioSlides from './BublPortfolioSlides';




const PortfolioMain = props => {
    
  
    return (
    
    
    
    <div className="portfolio_content">
        

<div className="current_slide_container">


<Routes>
    <Route path="" element={<RMSPortfolioSlides />}></Route>
<Route path="Navigator" element={<RMSPortfolioSlides />}></Route>
<Route path="ColorLine" element={<CLPortfolioSlides />}></Route>
<Route path="Averview" element={<AverPortfolioSlides />}></Route>
<Route path="ERegistration" element={<EregPortfolioSlides />}></Route>
<Route path="MobileApp" element={<MobilePortfolioSlides />}></Route>
<Route path="NavigatorMobile" element={<RMSMobilePortfolioSlides />}></Route>
<Route path="Bubl" element={<BublPortfolioSlides />}></Route>
    </Routes> 
</div>


<div className='portfolio_navigation'>
<nav className="portfolio_nav_container">
     <button  className="port_nav_button">
      <Link to="Navigator" className="port_nav_link">NAVIGATOR RECOVERY MANAGEMENT SYSTEM</Link> </button>
      <button  className="port_nav_button">
      <Link to="NavigatorMobile" className="port_nav_link">NAVIGATOR MOBILE APP</Link> </button>
      <button  className="port_nav_button">
      <Link to="ColorLine" className="port_nav_link">COLOR LINE LAB ORDERS & RANDOMIZATION</Link> </button>
      <button  className="port_nav_button">
      <Link to="Averview" className="port_nav_link">AVERVIEW TELEHEALTH PLATFORM</Link> </button>
      <button  className="port_nav_button">
      <Link to="ERegistration" className="port_nav_link">PATIENT REGISTRATION AND INTAKE FORMS</Link> </button>
      <button  className="port_nav_button">
      <Link to="MobileApp" className="port_nav_link">MOBILE PATIENT ENGAGEMENT & SMS ENROLLMENT</Link> </button> 
      
        <button  className="port_nav_button">
      <Link to="Bubl" className="port_nav_link">BUBL SOAP SHOP</Link> </button> 
      </nav>
</div>
</div>
       
        );
    }

  
    
    export default PortfolioMain;