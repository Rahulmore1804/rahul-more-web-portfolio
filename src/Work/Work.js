import React from "react";
import "./Work.css";
import game from "./game.png";
import news from "./newslatter.png";
import web from "./web.png";
import ima from "./image.png";

function Work() {
  return (
    <div className="title1">
      <h1>Work & Projects</h1>
      <div className="container-home_page">
      
        <div className="image_box">
          <img src={web} className="work_image" alt="portfolio" />
          <div className="content">
            <p className="title">WEB portfolio</p>
            <h4 className="description">React js, Router, CSS</h4>
            <a href="https://rahul-more.herokuapp.com/">
              <button className="btn">View</button>
            </a>
          </div>
        </div> <div className="abba">
          
        </div>
        <div className="image_box">
          <img src={ima} className="work_image" alt="portfolio" />
          <div className="content">
            <p className="title">MERN Image uploading</p>
            <h4 className="description">React js,Node js,Mongodb</h4>
            <a href="https://rahul-more.herokuapp.com/">
              <button className="btn">View</button>
            </a>
          </div>
        </div> <div className="abba">
          
        </div>
        <div className="image_box">
          <img src={game} className="work_image" alt="portfolio" />
          <div className="content">
            <p className="title">2 Player Game</p>
            <h4 className="description">JavaScript,Css,HTML</h4>
            <a href="https://inkoop-game-task.herokuapp.com/">
              <button className="btn">View</button>
            </a>
          </div>
        </div>
        
        <div className="abba">
       
        </div>
        <div className="image_box">
          <img src={news} className="work_image" alt="portfolio" />
          <div className="content">
            <p className="title">News Latter Signup</p>
            <h4 className="description">Node js, HTML, CSS</h4>
            <a href="https://dry-dusk-36900.herokuapp.com/">
              <button className="btn">View</button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Work;
