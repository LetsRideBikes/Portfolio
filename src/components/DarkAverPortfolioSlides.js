import Averslides from './Averslides';
import DarkAverDescription from './DarkAverDescription';


const DarkAverPortfolioSlides = props => {
  

    return (
<div className="portfolio_content_container">
        <div className="slideshow_container"><Averslides /></div>
        <div className="project_description_container"><DarkAverDescription /></div>
       </div>
       
        );
    }
    
    export default DarkAverPortfolioSlides;