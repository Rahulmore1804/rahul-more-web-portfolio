import React from "react";
import "./About.css";
import pp from "./Resume.pdf";
import aa from "../Skills/csss.png";
import bb from "../Skills/react.png";
import cc from "../Skills/nodejs.png";
import dd from "../Skills/python.png";
import rr from "../Skills/javascript.png";
import gg from "../Skills/mysql.png";

function About() {
  return (
    <div className="container-home_page1">
      <div className="about">
        <p>
          Hi! 👋 I'm Rahul, a Full-Stack Engineer. I am a passionate
          self-learner, Open source enthusiast, exploring and building projects
          👨‍💻.
        </p>
        <p>
          I'm very ambitious Full-stack developer looking for a role in
          established company with the opportunity to work with the latest
          technologies on challenging and diverse projects. I'm quietly
          confident, naturally curious, and love to interact with people and
          help others.
        </p>
        <a href={pp}>
          <button className="btn">Resume</button>
        </a>
      </div>
      <div className="cube1">
        <div class="cube">
          <div class="box box1">
            <img  className="img11" src={aa} alt="imge 1" />
          </div>

          <div class="box box2">
            <img className="img11"  src={bb} alt="imge 2" />
          </div>

          <div class="box box3">
            <img className="img11"  src={cc} alt="iage 3" />
          </div>

          <div class="box box4">
            <img className="img11"  src={dd} alt="imge 4" />
          </div>

          <div class="box box5">
            <img className="img11"  src={rr} alt="imge 5" />
          </div>

          <div class="box box6">
            <img className="img11"  src={gg} alt="iage 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
