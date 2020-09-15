import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="app">
      <div style={{ height: "300px", position: "relative" }}>
        <Layout>
          <Header transparent title="Bryan Bilek" style={{ color: "white" }}>
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
