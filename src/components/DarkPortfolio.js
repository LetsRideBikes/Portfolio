import DarkRMSPortfolioSlides from './DarkRMSPortfolioSlides';
import DarkCLPortfolioSlides from './DarkCLPortfolioSlides';
import DarkAverPortfolioSlides from './DarkAverPortfolioSlides';
import DarkEregPortfolioSlides from './DarkEregPortfolioSlides';
import DarkMobilePortfolioSlides from './DarkMobilePortfolioSlides';
import DarkRMSMobilePortfolioSlides from './DarkRMSMobilePortfolioSlides';
import DarkBublPortfolioSlides from './DarkBublPortfolioSlides';
import arrows from './img/arrow2.svg';
import { useEffect, useState } from "react";



const DarkPortfolio = props => {
    
    const [project, setProject] = useState("Navigator");
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
<select className='darkport-drop' id='port-drop' value={project} onChange={handleOnChange}>
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
{navigatorContentVisible && <DarkRMSPortfolioSlides />}
{colorLineContentVisible && <DarkCLPortfolioSlides />}
{averViewContentVisible && <DarkAverPortfolioSlides />}
{eRegistrationContentVisible && <DarkEregPortfolioSlides />}
{mobileAppContentVisible && <DarkMobilePortfolioSlides />}
{navigatorMobileContentVisible && <DarkRMSMobilePortfolioSlides />}
{bublContentVisible && <DarkBublPortfolioSlides />}
</div>


</div>
       
       
        );
    }

  
    
    export default DarkPortfolio;