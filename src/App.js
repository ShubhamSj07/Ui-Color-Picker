import './App.css';
import Colors from './colors';
import BlueColors from './bluecolors';
import GreenColors from './greencolors';
import RedColors from './redcolors'
import GreyColors from './greycolors';
import Footer from './footer';
function App() {
  return (
    <>
    <div className="mainDiv">
        <h1>UI Color Picker</h1>
        <p>Get your color now!</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,224C672,203,768,117,864,74.7C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" ></path></svg>
      </div>
    <div className="header"><h1>Yellow-Orange</h1></div>
    <Colors/> 
    <div className="header"><h1>Sky Blue</h1></div>
    <BlueColors/>
    <div className="header"><h1>Green</h1></div>
    <GreenColors/>
    <div className="header"><h1>Red</h1></div>
    <RedColors/>
    <div className="header"><h1>Grey-Black</h1></div>
    <GreyColors/>
    <h3 id="intro">Made with ❤️ by Shubham Jadhav</h3>
    <h2 id="intro-1">- A Android & Web-Enthusiast</h2>
    <h1 id="intro-2">A React Js Project!</h1>
    <Footer/>
  
    </>
  );
}

export default App;
