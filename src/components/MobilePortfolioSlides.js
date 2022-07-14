import MobileSlideshow from './MobileSlideshow';
import MobileDescription from './MobileDescription';


const MobilePortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><MobileSlideshow /></div>
        <div className="project_description_container"><MobileDescription /></div>
       </div>
       
        );
    }
    
    export default MobilePortfolioSlides;