import React from "react";
import node from "./nodejs.png"
import react1 from "./react.png"
import js from "./javascript.png"
import html from "./html.png"
import css1 from "./csss.png"
import python from "./python.png"
import mongo from "./mongo.png"
import mysql from "./mysql.png"
import "./Skills.css"

function Skills(){
    return(<div className="container-home_page">
    <div className="textt"><h1>Skills</h1><div className="SS"><p>I have knowledge of Full stack technologies. like <span className="skilltext"> React js, Node js, Python, JavaScript, HTML/CSS, mongoDB and MySQL</span></p>
    
    <p>You can see my work, profile and Code on <a className="A1" href="https://www.linkedin.com/in/rahulmore1804/">Linkdin</a> and <a className="A1"  href="https://github.com/Rahulmore1804">GitHub</a>. </p></div></div>
    

<div className="vl"></div>
       
<div>
        <img className="logos1" src={node} alt="d"/>
        <img className="logos1" src={react1} alt="d"/>
        <img className="logos1" src={python} alt="d"/>
        <img className="logos1" src={css1} alt="d"/><br/>
        <img className="logos1" src={html} alt="d"/>
        <img className="logos1" src={mongo} alt="d"/>
        <img className="logos1" src={mysql} alt="d"/>
        <img className="logos1" src={js} alt="d"/></div>
    </div>)
}

export default Skills;