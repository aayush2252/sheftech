import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="card p-3 mb-2 bg-light text-dark border-0">
        <div className="card-header shadow-lg">
          <h3 className="text-center">About us</h3>
        </div>
        <div className="card-body">
          <p className="text-center">
            We are a team of creative developers <br /> ensuring customer
            satisfaction and bringing your imagination to reality.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
