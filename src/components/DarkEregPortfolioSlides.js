import EregSlideshow from './EregSlideshow';
import DarkEregDescription from './DarkEregDescription';


const DarkEregPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><EregSlideshow /></div>
        <div className="project_description_container"><DarkEregDescription /></div>
       </div>
       
        );
    }
    
    export default DarkEregPortfolioSlides;