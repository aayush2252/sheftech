import React, { Component } from "react";
import topImage from "../resources/images/topImage.jpg";
import homeVideo from "../resources/videos/homeVideos.mp4";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {
          //<img className="home-image img-fluid" src={topImage} alt="" />
        }
        <div class="embed-responsive embed-responsive-16by9">
          <video className="videoTag" autoPlay loop muted>
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
        <blockquote class="blockquote home-text-center text-white  font-georgia">
          <h1 className="mb-0 display-2 ">
            <strong>ShefTech</strong>
          </h1>
          <footer class="blockquote-footer text-white">
            <p>
              <i>Bringing imagniation to reality</i>
            </p>
          </footer>
        </blockquote>
      </div>
    );
  }
}

export default Home;
