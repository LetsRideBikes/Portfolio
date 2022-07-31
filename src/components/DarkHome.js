import coverphoto from './img/fibonnaci5.svg';
import sun from './img/sun.svg';
import beauty from './img/beauty5.svg';
import lilsat from './img/lilsat.svg';
import { Link} from 'react-router-dom';


const DarkHome = props =>{

    return (
<div className="home_main"    style={{ 
      backgroundImage: `url(${coverphoto})`, 
      backgroundRepeat: 'no-repeat'}}>
<img className="lilsat" src={lilsat}/>

        <div className="home_headline">
          <h1 className="darktext1">Hi.</h1>
          <h1 className="darktext2">I'm Keith Lavoie, and I love to create</h1>
          <img className="darkbeauty" src={beauty}/> 
          <h1 className="darktext3">I want to help you bring your ideas to life. <br/>Take a look at my work and read what people say about me.</h1>
          <div className="portfolio-button-container"><Link to="Portfolio" ><button className="dark-portfolio-button">CHECK OUT MY PORTFOLIO</button></Link></div>
          </div>
          
      <Link to="/*" ><img className="dark-mode" src={sun}/></Link> 
</div>

);
}
    
export default DarkHome;