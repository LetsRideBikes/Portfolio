import RMSSlideshow from './RMSSlideshow';
import RMSDescription from './RMSDescription';




const RMSPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><RMSSlideshow /></div>
        <div className="project_description_container"><RMSDescription /></div>
       </div>
       
        );
    }
    
    export default RMSPortfolioSlides;