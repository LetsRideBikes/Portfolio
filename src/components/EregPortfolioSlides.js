import EregSlideshow from './EregSlideshow';
import EregDescription from './EregDescription';


const EregPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><EregSlideshow /></div>
        <div className="project_description_container"><EregDescription /></div>
       </div>
       
        );
    }
    
    export default EregPortfolioSlides;