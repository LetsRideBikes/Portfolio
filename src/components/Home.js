import moss2 from './img/moss2.jpg';
const Home = props =>{
  
    return (
<div className="home_main"    style={{ 
      backgroundImage: `url(${moss2})`, 
      backgroundRepeat: 'no-repeat'}}>


        <div className="home_headline"><h1 className="text1">INTUITIVE & PURPOSEFUL<br/> DESIGN PRINCIPLES</h1><h1 className="text2">COMPETENT & EXPERIENCED <br/> PROJECT MANAGEMENT</h1><h1 className="text1">DISCIPLINED AESTHETIC PASSION</h1></div>
</div>

);
}
    
export default Home;