import coverphoto from './img/bkg/fibonnaci3.svg';
import beauty from './img/beauty2.svg';
import { Link} from 'react-router-dom';


const Home = props =>{

    return (
<div className="home_main"    style={{ 
      backgroundImage: `url(${coverphoto})`, 
      backgroundRepeat: 'no-repeat'}}>


        <div className="home_headline">
          <h1 className="text1">Hi.</h1>
          <h1 className="text2">I'm Keith Lavoie, and I love to create</h1>
          <img className="beauty" src={beauty}/> 
          <h1 className="text3">I have what it takes to bring your ideas to life. <br/>Check out my work and see what people say about me.</h1>
          <button className="portfolio-button"><Link to="Portfolio" >CHECK OUT MY PORTFOLIO</Link></button>
          </div>
          
</div>

);
}
    
export default Home;