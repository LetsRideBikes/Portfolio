import BublSlideshow from './BublSlideshow';
import BublDescription from './BublDescription';


const BublPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><BublSlideshow /></div>
        <div className="project_description_container"><BublDescription /></div>
       </div>
       
        );
    }
    
    export default BublPortfolioSlides;