import React from "react";
import  "./Home.css"
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="container-home_page11">
        <h1 className="abc"> please, do use Desktop site for this web(responsiveness will provided soon )</h1>
        <h1>Hi, I am RAHUL</h1>
        <h2>Full Stack Developer</h2>
        <Link  to="/contact"><button className="btn111">CONTACT ME</button></Link></div>
    )
}

export default Home;