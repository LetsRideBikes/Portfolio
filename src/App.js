
import './App.css';
import background from './img/portfoliobackground2.png';
import Header from './components/Header';
import PortfolioMain from './components/PortfolioMain';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Redirect from './Redirect';
import { Routes, Route} from 'react-router-dom';



function App() { 

  
  return (

    <div 
    className="site_content" 
    style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize:"cover", 
      backgroundRepeat: 'no-repeat'}}>
        <Routes>
<Route path='/Redirect' element={<Redirect />} />
</Routes>
     <div className="navigation_logo_container"><Header /></div>
     <div className="main_content"><Routes>
     <Route path="/*" element={<Home />}/>
      <Route path="Portfolio/*" element={<PortfolioMain />}/>
      <Route path="About" element={<About />}/>
      <Route path="Contact" element={<Contact />}/>
      <Route path="Home" element={<Home />}/>
     </Routes>
     </div>
     <div className="main_content_mobile"><Routes>
     <Route path="/*" element={<Home />}/>
      <Route path="Portfolio/*" element={<Portfolio />}/>
      <Route path="About" element={<About />}/>
      <Route path="Contact" element={<Contact />}/>
      <Route path="Home" element={<Home />}/>
     </Routes>
     </div>
    </div>
    
  );
}


export default App;
