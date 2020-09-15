import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
