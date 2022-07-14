import RMSMobileSlideshow from './RMSMobileSlideshow';
import RMSMobileDescription from './RMSMobileDescription';


const RMSMobilePortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><RMSMobileSlideshow /></div>
        <div className="project_description_container"><RMSMobileDescription /></div>
       </div>
       
        );
    }
    
    export default RMSMobilePortfolioSlides;