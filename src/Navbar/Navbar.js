import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "./logo1.png"
import linkdin from "./logoss/link.png"
import gmail from "./logoss/gmail.png"
import dc from "./logoss/dc.png"
import tw from "./logoss/twitter.png"
import git from "./logoss/git.png"


function Navbar() {
  return (
    
    <div className="nav_bar"><ul><li><a href="/">
    <img className="logo" src={logo} alt=""/></a>

<br/><br/><br/>
      <Link className="UU" to="/"> Home </Link></li><li>
      <Link className="UU" to= "/contact"> Contact </Link></li><li>
      <Link className="UU" to = "/skills"> Skills </Link></li><li>
      <Link className="UU" to ="/work"> Work </Link></li><li>
      <Link  className="UU" to ="/about"> About </Link></li><li>
      <br/><br/><br/><br/>
      <a className="VV" href="https://www.linkedin.com/in/rahulmore1804/"><img className="WW" src={linkdin} alt="linkdin"/></a></li><li>
      <a className="VV" href="mailto:rahulmore1804@gmail.com"><img className="WW" src={gmail} alt="gmail"/></a></li><li>
      <a className="VV" href="https://github.com/Rahulmore1804"><img className="WW" src={git} alt="github"/></a></li><li>
      <a className="VV" href="https://twitter.com/rahul18498"><img className="WW" src={tw} alt="twitter"/></a></li><li>
      <a className="VV" href="https://discord.com/channels/sherlock184@2735"><img className="WW" src={dc} alt="linkdin"/></a></li></ul>
    </div>
  );
}

export default Navbar;



