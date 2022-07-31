import MobileSlideshow from './MobileSlideshow';
import DarkMobileDescription from './DarkMobileDescription';


const DarkMobilePortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><MobileSlideshow /></div>
        <div className="project_description_container"><DarkMobileDescription /></div>
       </div>
       
        );
    }
    
    export default DarkMobilePortfolioSlides;