import logo from './img/keithlogo2.svg';
import { Link} from 'react-router-dom';

const Header = props => {

  

    return (
<div className='header_container'>
<Link to="Home" className="home-button"><div className="keith_logo" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'  }} ></div></Link>
     <nav className="nav_container">
     <button className="nav_buttons">
      <Link to="Portfolio" >PORTFOLIO</Link> </button>
      <button className="nav_buttons">
      <Link to="Testimonials" >TESTIMONY</Link> </button>
      <button className="nav_buttons">
      <Link to="About" >ABOUT</Link> </button>
      <button className="nav_buttons">
      <Link to="Contact" >CONTACT</Link> </button> 
        </nav>
     </div>);
    }
    
export default Header;
    