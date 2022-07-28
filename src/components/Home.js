import coverphoto from './img/bkg/fibonnaci3.svg';
import beauty from './img/beauty2.svg';
import coffee1 from './img/coffee1.svg';
import coffee2 from './img/coffee2.svg';
import coffee3 from './img/coffee3.svg';
import { Link} from 'react-router-dom';


const Home = props =>{

    return (
<div className="home_main"    style={{ 
      backgroundImage: `url(${coverphoto})`, 
      backgroundRepeat: 'no-repeat'}}>

        <img className="coffee1" src={coffee1}/>
        <img className="coffee2" src={coffee2}/>
        <img className="coffee3" src={coffee3}/>

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