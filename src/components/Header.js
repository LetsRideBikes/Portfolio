import logo from './img/keithlogo2.svg';
import { Link} from 'react-router-dom';

const Header = props => {

  

    return (
<div className='header_container'>
<div className="keith_logo" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'  }}></div>
     <nav className="nav_container">
     <button className="nav_buttons">
      <Link to="Home" className="nav_buttons">HOME</Link> </button>
      <button className="nav_buttons">
      <Link to="Portfolio" className="nav_buttons">PORTFOLIO</Link> </button>
      <button className="nav_buttons">
      <Link to="About" className="nav_buttons">ABOUT</Link> </button>
      <button className="nav_buttons">
      <Link to="Contact" className="nav_buttons">CONTACT</Link> </button> 
        </nav>
     </div>);
    }
    
export default Header;
    