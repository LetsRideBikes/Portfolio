import logo from './img/yellowgo.svg';
import { Link} from 'react-router-dom';

const DarkHeader = props => {

  

    return (
<div className='header_container'>
<Link to="Home" className="home-button"><div className="keith_logo" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'  }} ></div></Link>
     <nav className="nav_container">
     <button className="dark_nav_buttons">
      <Link to="Portfolio" >PORTFOLIO</Link> </button>
      <button className="dark_nav_buttons">
      <Link to="Testimonials" >TESTIMONY</Link> </button>
      <button className="dark_nav_buttons">
      <Link to="About" >ABOUT</Link> </button>
      <button className="dark_nav_buttons">
      <Link to="Contact" >CONTACT</Link> </button> 
        </nav>

        <h3 className="fine-print">Copyright Keith Lavoie 2022<br/>I built this website with React 18!</h3>
     </div>);
    }
    
export default DarkHeader;
    