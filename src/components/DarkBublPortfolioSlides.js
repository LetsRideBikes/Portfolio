import BublSlideshow from './BublSlideshow';
import DarkBublDescription from './DarkBublDescription';


const DarkBublPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><BublSlideshow /></div>
        <div className="project_description_container"><DarkBublDescription /></div>
       </div>
       
        );
    }
    
    export default DarkBublPortfolioSlides;