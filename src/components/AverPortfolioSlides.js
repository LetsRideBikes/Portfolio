import Averslides from './Averslides';
import AverDescription from './AverDescription';


const AverPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><Averslides /></div>
        <div className="project_description_container"><AverDescription /></div>
       </div>
       
        );
    }
    
    export default AverPortfolioSlides;