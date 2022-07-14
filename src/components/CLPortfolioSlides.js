import CLSlideshow from './CLSlideshow';
import CLDescription from './CLDescription';


const CLPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><CLSlideshow /></div>
        <div className="project_description_container"><CLDescription /></div>
       </div>
       
        );
    }
    
    export default CLPortfolioSlides;