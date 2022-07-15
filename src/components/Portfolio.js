import RMSPortfolioSlides from './RMSPortfolioSlides';
import CLPortfolioSlides from './CLPortfolioSlides';
import AverPortfolioSlides from './AverPortfolioSlides';
import EregPortfolioSlides from './EregPortfolioSlides';
import MobilePortfolioSlides from './MobilePortfolioSlides';
import RMSMobilePortfolioSlides from './RMSMobilePortfolioSlides';
import BublPortfolioSlides from './BublPortfolioSlides';
import arrows from './img/arrow.png';
import { useEffect, useState } from "react";



const Portfolio = props => {
    
    const [project, setProject] = useState("NavigatorMobile");
    const [navigatorContentVisible, setNavigatorContentVisible] = useState(true);
    const [colorLineContentVisible, setColorLineContentVisible] = useState(false);
    const [averViewContentVisible, setAverViewContentVisible] = useState(false);
    const [eRegistrationContentVisible, setERegistrationContentVisible] = useState(false);
    const [mobileAppContentVisible, setMobileAppContentVisible] = useState(false);
    const [navigatorMobileContentVisible, setNavigatorMobileContentVisible] = useState(false);
    const [bublContentVisible, setBublContentVisible] = useState(false);

const handleOnChange = (e) => {
    setProject(e.target.value);
}

useEffect(() => {
    project === "Navigator" ? setNavigatorContentVisible(true):setNavigatorContentVisible(false);
    project === "NavigatorMobile" ? setNavigatorMobileContentVisible(true):setNavigatorMobileContentVisible(false);
    project === "ColorLine" ? setColorLineContentVisible(true):setColorLineContentVisible(false);
    project === "AverView" ? setAverViewContentVisible(true):setAverViewContentVisible(false);
    project === "ERegistration" ? setERegistrationContentVisible(true):setERegistrationContentVisible(false);
    project === "MobileApp" ? setMobileAppContentVisible(true):setMobileAppContentVisible(false);
    project === "Bubl" ? setBublContentVisible(true):setBublContentVisible(false);
},[project]);
  
    return (
    
    
<div className="mobile_portfolio_content">
        
<div className='portfolio-dropdown'><img src={arrows} className="dropdown-arrow" alt="lilarrow"/>
<select className='port-drop' id='port-drop' value={project} onChange={handleOnChange}>
<option value='Navigator'>Navigator RMS</option>
    <option value='NavigatorMobile'>Navigator Mobile</option>
    <option value='ColorLine'>Color Line</option>
    <option value='AverView'>Averview Telehealth Platform</option>
    <option value='ERegistration'>Patient Registration and Intake</option>
    <option value='MobileApp'>Mobile Patient Engagement</option>
    <option value='Bubl'>Bubl Soaps</option>
    </select>
    </div>
    
<div className="mobile_slide_container">
{navigatorContentVisible && <RMSPortfolioSlides />}
{colorLineContentVisible && <CLPortfolioSlides />}
{averViewContentVisible && <AverPortfolioSlides />}
{eRegistrationContentVisible && <EregPortfolioSlides />}
{mobileAppContentVisible && <MobilePortfolioSlides />}
{navigatorMobileContentVisible && <RMSMobilePortfolioSlides />}
{bublContentVisible && <BublPortfolioSlides />}
</div>


</div>
       
       
        );
    }

  
    
    export default Portfolio;