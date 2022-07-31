import CLSlideshow from './CLSlideshow';
import DarkCLDescription from './DarkCLDescription';


const DarkCLPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><CLSlideshow /></div>
        <div className="project_description_container"><DarkCLDescription /></div>
       </div>
       
        );
    }
    
    export default DarkCLPortfolioSlides;