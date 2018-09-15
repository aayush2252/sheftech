import React, { Component } from "react";
import websiteImage from "../resources/images/website design.jpg";
import iosImage from "../resources/images/ios-apps-iphone.jpg";
import androidImage from "../resources/images/android-apps.jpg";
import javaImage from "../resources/images/java-image.jpg";

class Services extends Component {
  state = {
    services: [
      {
        name: "Website development",
        content: "",
        image: websiteImage
      },
      {
        name: "Android App development",
        content: "",
        image: androidImage
      },
      {
        name: "IOS App Development",
        content: "",
        image: iosImage
      },
      {
        name: "JavaFX 2 Desktop Applications",
        content: "",
        image: javaImage
      }
    ]
  };
  render() {
    return (
      <div>
        <div className="card border-0">
          <div className="card-header shadow-lg">
            <h3 className="text-center">Our Services</h3>
          </div>
          <div className="card-body">
            <div className="card-deck">
              {this.state.services.map(service => (
                <div className="card shadow-lg">
                  <img src={service.image} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
