import React from "react";
import  "./Home.css"
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="container-home_page11">
        <h1>Hi,I am RAHUL</h1>
        <h2>Full Stack Developer</h2>
        <Link  to="/contact">CONTACT ME</Link></div>
    )
}

export default Home;