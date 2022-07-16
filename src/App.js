import { useEffect}  from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"

import './App.css';
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact/Contact"
import Skills from "./Skills/Skills"
import Home from "./Home/Home"
import About from "./About/About"
import Work from "./Work/Work"
import bc from "./bc1.jpg"
function App() {
  useEffect(() => {
    document.title = "Rahul More";
  }, []);
 
  
  return (
    <BrowserRouter>
    <div className="whole"><div className="bc"><img className="immage" src={bc} alt="back"/></div><div className="nav"><Navbar/></div></div>
      
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/skills" element ={<Skills/>}/>
        <Route exact path="/contact" element ={<Contact/>}/>
        <Route exact path="/work" element ={<Work/>}/>
        <Route  exact path="/about" element ={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
