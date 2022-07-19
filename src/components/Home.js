import coverphoto from './img/bkg/moss2.jpg';
import { Link} from 'react-router-dom';
const Home = props =>{
  
    return (
<div className="home_main"    style={{ 
      backgroundImage: `url(${coverphoto})`, 
      backgroundRepeat: 'no-repeat'}}>


        <div className="home_headline">
          <h1 className="text1">INTUITIVE & PURPOSEFUL<br/> DESIGN PRINCIPLES</h1>
          <h1 className="text2">COMPETENT & EXPERIENCED <br/> PROJECT MANAGEMENT</h1>
          <h1 className="text3">DISCIPLINED AESTHETIC PASSION</h1>
          </div>
          {/* <Link to="Dark"><button className="dark_mode_button">Party time!</button></Link> */}
</div>

);
}
    
export default Home;