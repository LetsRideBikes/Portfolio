import RMSSlideshow from './RMSSlideshow';
import DarkRMSDescription from './DarkRMSDescription';




const DarkRMSPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><RMSSlideshow /></div>
        <div className="project_description_container"><DarkRMSDescription /></div>
       </div>
       
        );
    }
    
    export default DarkRMSPortfolioSlides;