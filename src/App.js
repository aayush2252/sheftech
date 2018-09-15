import React, { Component } from "react";
import "./App.css";
import topImage from "./resources/images/topImage.jpg";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Home from "./components/Home";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    const bg = {
      backgroundImage: `url(${topImage})`
    };
    return (
      <main className="container-fluid jumbotron-fluid">
        <NavBar />

        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <Home />
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
