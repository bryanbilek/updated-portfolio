import React from "react";
import { Grid, Cell } from "react-mdl";
import Bitmoji from "../images/bryan-bitmoji.png";

export default function HomePage() {
  return (
    <div style={{ width: "100%", margin: "auto" }} className="home-page">
      <Grid className="home-page-grid">
        <Cell col={12}>
          <img src={Bitmoji} alt="bitmoji" className="bitmoji" />

          <div className="banner">
            <h1>Full Stack Web Developer</h1>
            <p>
              HTML/CSS • JavaScript • React.js • Redux.js • Node.js • Express.js
              • SQL • Python
            </p>

            <div className="socials">
              <a href="linkedin.com/in/bryanbilek">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              <a href="github.com/bryanbilek">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}
