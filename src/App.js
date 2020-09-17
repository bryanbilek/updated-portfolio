import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import portbg from "./videos/port-background.mp4";

function App() {
  return (
    <div className="app">
      <video autoPlay loop muted>
        <source src={portbg} type="video/mp4" />
      </video>
      <div style={{ height: "5em" }}>
        <Layout>
          <Header
            transparent
            title="Bryan Bilek's Portfolio"
            className="app-nav-header"
          >
            <Navigation>
              <Link to="/about">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
            <Dashboard />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
